"use client";

import React from 'react';
import { Mail, Phone, Linkedin, Github, Globe, MapPin } from 'lucide-react';

export default function CVPage() {
  return (
    <div className="bg-white min-h-screen p-0 m-0 text-black font-sans print:p-0">
      {/* Container A4 */}
      <div className="max-w-[210mm] mx-auto bg-white p-[20mm] min-h-[297mm] shadow-lg print:shadow-none print:max-w-full">
        
        {/* Header */}
        <header className="border-b-2 border-gray-800 pb-6 mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-tighter">Abdul Habir Al Majdi</h1>
            <p className="text-lg font-medium text-gray-700 mt-1">Electrical Engineering Student & IT Specialist</p>
            <p className="text-sm text-gray-500 italic">NIM: F1B02310096</p>
          </div>
          <div className="text-right text-sm space-y-1">
            <div className="flex items-center justify-end gap-2"><MapPin size={14}/> Mataram, Indonesia</div>
            <div className="flex items-center justify-end gap-2"><Mail size={14}/> abhyyy333@gmail.com</div>
            <div className="flex items-center justify-end gap-2"><Linkedin size={14}/> linkedin.com/in/abdul-habir-al-majdi-7a7098291</div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-8">
          {/* Kolom Kiri - Info Ringkas */}
          <div className="col-span-1 space-y-8">
            <section>
              <h2 className="font-bold uppercase border-b border-gray-300 mb-3 text-sm tracking-widest">Skills</h2>
              <div className="text-xs space-y-2 uppercase font-medium">
                <p>• Computer Troubleshooting</p>
                <p>• Network Monitoring</p>
                <p>• OS Installation (Windows)</p>
                <p>• Microcontroller (ESP32/Wemos)</p>
                <p>• Hardware Maintenance</p>
              </div>
            </section>

            <section>
              <h2 className="font-bold uppercase border-b border-gray-300 mb-3 text-sm tracking-widest">Achievements</h2>
              <div className="text-xs space-y-3">
                <p><strong>Bright Scholarship</strong><br/>Fully Funded Scholar by YBM BRILiaN</p>
                <p><strong>PRISMA 2025</strong><br/>National Scientific Paper Finalist</p>
              </div>
            </section>

            <section>
              <h2 className="font-bold uppercase border-b border-gray-300 mb-3 text-sm tracking-widest">Education</h2>
              <div className="text-xs">
                <p className="font-bold italic">University of Mataram</p>
                <p>Bachelor of Electrical Engineering</p>
                <p className="text-gray-500">2022 - Present</p>
              </div>
            </section>
          </div>

          {/* Kolom Kanan - Pengalaman */}
          <div className="col-span-2 space-y-8">
            <section>
              <h2 className="font-bold uppercase border-b border-gray-300 mb-4 text-sm tracking-widest text-blue-800">Professional Experience</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold">Telkom Indonesia – Arnet Denpasar</h3>
                    <span className="text-xs text-gray-500">Jan 2026 - Present</span>
                  </div>
                  <p className="text-xs italic mb-2">Network & IT Infrastructure Intern</p>
                  <ul className="text-xs list-disc ml-4 space-y-1">
                    <li>Monitoring infrastruktur jaringan backbone di NOC Arnet.</li>
                    <li>Pemeliharaan perangkat server dan manajemen kabel.</li>
                    <li>Analisis sistem pendingin (PAC) terhadap performa backbone.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold">MM Tronik Sumbawa Besar</h3>
                    <span className="text-xs text-gray-500">2020 - 2024</span>
                  </div>
                  <p className="text-xs italic mb-2">Computer & IT Support Technician</p>
                  <ul className="text-xs list-disc ml-4 space-y-1">
                    <li>Diagnosa dan perbaikan hardware/software PC & Laptop.</li>
                    <li>Instalasi dan konfigurasi sistem operasi Windows.</li>
                    <li>Setup dan troubleshooting jaringan LAN untuk pengguna.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold uppercase border-b border-gray-300 mb-4 text-sm tracking-widest text-blue-800">Projects</h2>
              <div className="text-xs space-y-2">
                <p><strong>IoT Temp Monitoring:</strong> Monitoring suhu ruang NGN menggunakan Wemos D1 Mini & DHT22.</p>
                <p><strong>Smart Controller:</strong> Pengembangan Smart AC controller & Modem Restarter berbasis ESP8266.</p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer CV */}
        <footer className="mt-12 pt-4 border-t border-gray-200 text-center text-[10px] text-gray-400 uppercase">
          Generated via almajdi-portfolio-web.vercel.app
        </footer>
      </div>

      {/* Tombol Print (Hanya muncul di layar, tidak saat di-print) */}
      <button 
        onClick={() => window.print()}
        className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-blue-700 transition-all print:hidden"
      >
        Download as PDF (A4)
      </button>
    </div>
  );
}