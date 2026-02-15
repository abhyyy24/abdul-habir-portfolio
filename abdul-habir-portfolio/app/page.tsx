export default function Home() {
  return (
    <main className="max-w-xl mx-auto px-6 py-20 font-sans text-zinc-800 antialiased">
      <header className="mb-12">
        <h1 className="text-2xl font-bold tracking-tighter italic">Abdul Habir Al Majdi</h1>
        <p className="text-zinc-500 text-sm">NIM: F1B02310096 • Elektro UNRAM</p>
      </header>

      <section className="mb-10">
        <h2 className="font-semibold mb-3">About</h2>
        <p className="text-zinc-600 leading-relaxed text-sm">
          Mahasiswa yang sedang menjalani magang di <strong>NOC Arnet Backbone Telkom Infranexia Bali</strong>. 
          Fokus pada analisis infrastruktur jaringan dan sistem monitoring berbasis IoT.
        </p>
      </section>

      <section className="mb-10 text-sm">
        <h2 className="font-semibold mb-3">Experience</h2>
        <div className="border-l border-zinc-200 pl-4 mb-6">
          <h3 className="font-medium">NOC Arnet Backbone Intern — Telkom Kaliasem</h3>
          <p className="text-zinc-400 text-xs mb-2">Januari 2026 — Sekarang</p>
          <p className="text-zinc-600 italic">
            "Analisis Sistem Pendingin (Precision Air Conditioning) terhadap Performa Perangkat Backbone".
          </p>
        </div>
      </section>

      <section className="mb-10 text-sm">
        <h2 className="font-semibold mb-3">IoT Project</h2>
        <div className="space-y-4 text-zinc-600">
          <p>
            Implementasi monitoring suhu menggunakan <strong>Wemos D1 Mini</strong> dan sensor <strong>DHT22</strong> di ruang NGN.
          </p>
        </div>
      </section>
    </main>
  );
}