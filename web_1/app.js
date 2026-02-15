document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    document.getElementById('fileName').innerText = `Memproses: ${file.name}`;
    const reader = new FileReader();

    // Reset tampilan info
    document.getElementById('infoDetail').innerHTML = "Sedang memproses...";

    reader.onload = function(event) {
        try {
            if (file.name.toLowerCase().endsWith('.sor')) {
                processSorFile(event.target.result);
            } else if (file.name.toLowerCase().endsWith('.xml')) {
                parseXML(event.target.result);
            } else {
                alert("Format file tidak didukung! Gunakan .sor atau .xml");
            }
        } catch (err) {
            console.error(err);
            document.getElementById('infoDetail').innerHTML = `<p class="text-red-500 font-bold">Error: ${err.message}</p>`;
        }
    };

    if (file.name.toLowerCase().endsWith('.sor')) {
        reader.readAsArrayBuffer(file);
    } else {
        reader.readAsText(file);
    }
});

function processSorFile(buffer) {
    const view = new DataView(buffer);
    const bytes = new Uint8Array(buffer);
    const decoder = new TextDecoder();

    // 1. Cari Header "DataPts" secara akurat
    const headerPattern = "DataPts";
    let offset = -1;
    for (let i = 0; i < bytes.length - 7; i++) {
        if (String.fromCharCode(...bytes.slice(i, i + 7)) === headerPattern) {
            offset = i + 7;
            break;
        }
    }

    if (offset === -1) throw new Error("Blok data 'DataPts' tidak ditemukan. File mungkin terenkripsi atau format berbeda.");

    // 2. Baca Jumlah Titik (4 byte, Little Endian)
    const numPoints = view.getUint32(offset, true);
    offset += 4;
    offset += 12; // Skip header internal Bellcore

    const points = [];
    const labels = [];
    
    // 3. Loop Ambil Data
    // Kita pakai step agar grafik tidak terlalu berat dibaca Chart.js
    const step = Math.max(1, Math.floor(numPoints / 1000)); 

    for (let i = 0; i < numPoints; i += step) {
        const currentPos = offset + (i * 2);
        if (currentPos + 2 <= buffer.byteLength) {
            const rawVal = view.getUint16(currentPos, true);
            // Scaling standar: raw / 1000. 
            // Kalau EXFO biasanya butuh offset lagi, tapi ini untuk bentuk dasar.
            points.push(rawVal / 1000); 
            labels.push(((i * 0.1) / 10).toFixed(2)); // Jarak km (asumsi)
        }
    }

    // Ekstrak string metadata (Cari CablID, OrigID, dll)
    const rawText = decoder.decode(bytes.slice(0, 3000)).replace(/[^\x20-\x7E]/g, ' ');
    const metadata = {
        cable: extractInfo(rawText, "CablID"),
        origin: extractInfo(rawText, "OrigID"),
        dest: extractInfo(rawText, "TermID")
    };

    updateUI(metadata, points.length);
    renderOtdrChart(labels, points);
}

function extractInfo(text, key) {
    const idx = text.indexOf(key);
    if (idx === -1) return "N/A";
    return text.substring(idx + key.length, idx + key.length + 20).trim();
}

function updateUI(meta, count) {
    document.getElementById('infoDetail').innerHTML = `
        <div class="grid grid-cols-2 gap-2 p-2">
            <div class="border p-2"><b>Cable:</b> ${meta.cable}</div>
            <div class="border p-2"><b>Origin:</b> ${meta.origin}</div>
            <div class="border p-2"><b>Target:</b> ${meta.dest}</div>
            <div class="border p-2"><b>Points:</b> ${count} pts</div>
        </div>
    `;
}

let myChart = null;
function renderOtdrChart(labels, points) {
    const ctx = document.getElementById('otdrChart').getContext('2d');
    if (myChart) myChart.destroy();

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Optical Trace (dB)',
                data: points,
                borderColor: 'red',
                borderWidth: 1,
                pointRadius: 0,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: false, title: { display: true, text: 'Loss (dB)' } },
                x: { title: { display: true, text: 'Distance (Km)' } }
            }
        }
    });
}