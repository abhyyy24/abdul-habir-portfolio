export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10 font-sans">
      <header className="max-w-2xl mx-auto border-b border-gray-800 pb-10">
        <h1 className="text-4xl font-bold">Abdul Habir Al Majdi</h1>
        <p className="text-gray-400 mt-2">Network Engineer & IoT Developer</p>
        <p className="text-sm text-blue-500 mt-1">NIM: F1B02310096</p>
      </header>

      <section className="max-w-2xl mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-400">Pengalaman Magang</h2>
        <div className="border-l-2 border-blue-500 pl-4">
          <h3 className="font-bold">NOC Arnet Backbone - Telkom Infranexia</h3>
          <p className="text-sm text-gray-400">Januari 2026 - Sekarang</p>
          <ul className="mt-2 text-gray-300 list-disc ml-4 space-y-1">
            <li>Monitoring infrastruktur jaringan backbone wilayah Bali & Mataram.</li>
            <li>Inovasi IoT: Sistem monitoring suhu NGN dengan Wemos D1 Mini.</li>
          </ul>
        </div>
      </section>

      <footer className="max-w-2xl mx-auto mt-20 text-gray-500 text-xs text-center">
        © 2026 Abdul Habir - Dibuat dengan Next.js
      </footer>
    </main>
  );
}