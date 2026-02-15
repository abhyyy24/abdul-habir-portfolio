export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 font-sans text-zinc-900 antialiased">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-2xl font-bold italic tracking-tighter">Abdul Habir Al Majdi</h1>
        <p className="text-zinc-500 text-sm">NIM: F1B02310096 • Teknik Elektro UNRAM</p>
      </header>

      {/* About Section */}
      <section className="mb-10">
        <p className="text-zinc-600 leading-relaxed">
          Teknisi komputer dan mahasiswa Teknik Elektro dengan pengalaman di networking, maintenance server, dan backbone network melalui magang di Telkom Indonesia Arnet Denpasar.
        </p>
      </section>

      {/* Experience Section */}
      <section className="mb-10">
        <h2 className="font-semibold mb-4 text-zinc-900">Experience</h2>
        <div className="border-l border-zinc-200 pl-4">
          <h3 className="text-sm font-medium">NOC Arnet Backbone Intern — Telkom Kaliasem</h3>
          <p className="text-xs text-zinc-400 mb-2">Desember 2025 — Februari 2026</p>
          <p className="text-sm text-zinc-600">
            Menganalisis performa perangkat backbone terhadap sistem pendingin (PAC) dan melakukan monitoring jaringan.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-10">
        <h2 className="font-semibold mb-4 text-zinc-900">Projects</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium">IoT Temperature Monitoring</h3>
            <p className="text-sm text-zinc-600">
              Sistem monitoring suhu ruang NGN menggunakan <strong>Wemos D1 Mini</strong> dan sensor <strong>DHT22</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="pt-8 border-t border-zinc-100">
        <p className="text-xs text-zinc-400">
          © 2026 Abdul Habir Al Majdi.
        </p>
      </footer>
    </main>
  );
}