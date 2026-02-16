"use client";

import React from 'react';
import { Mail, MapPin, Linkedin, Download } from 'lucide-react';

export default function CVPage() {
  return (
    <div className="bg-zinc-100 min-h-screen p-0 md:p-10 font-sans print:bg-white print:p-0">
      {/* Container A4 - Responsive: Di HP lebar penuh, di Desktop lebar A4 */}
      <div className="mx-auto bg-white shadow-lg print:shadow-none 
                      w-full md:w-[210mm] 
                      min-h-screen md:min-h-[297mm] 
                      p-6 md:p-[20mm]">
        
        {/* Header - Stack di Mobile, Side-by-side di Desktop */}
        <header className="border-b-2 border-gray-800 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-black">Abdul Habir Al Majdi</h1>
            <p className="text-base md:text-lg font-medium text-gray-700 mt-1">Electrical Engineering Student & IT Specialist</p>
            <p className="text-xs text-gray-500 italic">NIM: F1B02310096</p>
          </div>
          <div className="text-left md:text-right text-[11px] md:text-sm space-y-1 text-black">
            <div className="flex items-center md:justify-end gap-2"><MapPin size={14}/> Mataram, Indonesia</div>
            <div className="flex items-center md:justify-end gap-2"><Mail size={14}/> abhyyy333@gmail.com</div>
            <div className="flex items-center md:justify-end gap-2 text-wrap"><Linkedin size={14}/> linkedin.com/in/abdul-habir-al-majdi-7a7098291</div>
          </div>
        </header>

        {/* Body - 1 Kolom di Mobile, Grid 3 Kolom di Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
          
          {/* Kolom Kiri / Atas */}
          <div className="col-span-1 space-y-8">
            <section>
              <h2 className="font-bold uppercase border-b border-gray-300 mb-3 text-sm tracking-widest text-blue-900">Skills</h2>
              <div className="text-xs space-y-2 uppercase font-medium">
                <p>• Computer Troubleshooting</p>
                <p>• Network Monitoring</p>
                <p>• OS Installation (Windows)</p>
                <p>• Microcontroller (ESP32/Wemos)</p>
                <p>• Hardware Maintenance</p>
              </div>
            </section>

            <section>
              <h2 className="font-bold uppercase border-b border-gray-300 mb-3 text-sm tracking-widest text-blue-900">Achievements</h2>
              <div className="text-xs space-y-3">
                <p><strong>Bright Scholarship</strong><br/>Fully Funded Scholar by YBM BRILiaN</p>
                <p><strong>PRISMA 2025</strong><br/>National Scientific Paper Finalist</p>
              </div>
            </section>

            <section>
              <h2 className="font-bold uppercase border-b border-gray-300 mb-3 text-sm tracking-widest text-blue-900">Education</h2>
              <div className="text-xs">
                <p className="font-bold italic">University of Mataram</p>
                <p>Bachelor of Electrical Engineering</p>
                <p className="text-gray-500">2022 - Present</p>
              </div>
            </section>
          </div>

          {/* Kolom Kanan / Bawah */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <section>
              <h2 className="font-bold uppercase border-b border-gray-300 mb-4 text-sm tracking-widest text-blue-800">Professional Experience</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold">Telkom Indonesia – Arnet Denpasar</h3>
                    <span className="text-[10px] text-gray-500">Jan 2026 - Present</span>
                  </div>
                  <p className="text-xs italic mb-2">Network & IT Infrastructure Intern</p>
                  <ul className="text-xs list-disc ml-4 space-y-1 opacity-90">
                    <li>Monitoring infrastruktur jaringan backbone di NOC Arnet.</li>
                    <li>Pemeliharaan perangkat server dan manajemen kabel.</li>
                    <li>Analisis sistem pendingin (PAC) terhadap performa backbone.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold">MM Tronik Sumbawa Besar</h3>
                    <span className="text-[10px] text-gray-500">2020 - 2024</span>
                  </div>
                  <p className="text-xs italic mb-2">Computer & IT Support Technician</p>
                  <ul className="text-xs list-disc ml-4 space-y-1 opacity-90">
                    <li>Diagnosa dan perbaikan hardware/software PC & Laptop.</li>
                    <li>Instalasi dan konfigurasi sistem operasi Windows.</li>
                    <li>Setup dan troubleshooting jaringan LAN untuk pengguna.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold uppercase border-b border-gray-300 mb-4 text-sm tracking-widest text-blue-800">Projects</h2>
              <div className="text-xs space-y-2 opacity-90">
                <p><strong>IoT Temp Monitoring:</strong> Monitoring suhu ruang NGN menggunakan Wemos D1 Mini & DHT22.</p>
                <p><strong>Smart Controller:</strong> Pengembangan Smart AC controller & Modem Restarter berbasis ESP8266.</p>
              </div>
            </section>
          </div>
        </div>

        <footer className="mt-12 pt-4 border-t border-gray-200 text-center text-[10px] text-gray-400 uppercase">
          Generated via almajdi-portfolio.vercel.app
        </footer>
      </div>

      {/* Tombol Print - Tetap di pojok */}
      <button 
        onClick={() => window.print()}
        className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-blue-700 transition-all print:hidden flex items-center gap-2 font-bold text-sm"
      >
        <Download size={18} /> Save as PDF (A4)
      </button>
    </div>
  );
}