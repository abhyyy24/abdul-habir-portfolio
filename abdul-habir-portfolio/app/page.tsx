"use client";

import React, { useState, useEffect } from 'react'; 
import { createClient } from '@supabase/supabase-js'; 
import { 
  Github, Mail, Phone, Linkedin, FileText, Moon, Sun,
  GraduationCap, Briefcase, Wrench, Settings, 
  Terminal, MessageSquare, Globe, Trophy, Award, CheckCircle 
} from 'lucide-react';

// Setup Supabase Client
const supabaseUrl = 'https://cafatbwnclfhvxhfybuv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhZmF0YnduY2xmaHZ4aGZ5YnV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwOTA4OTksImV4cCI6MjA4NjY2Njg5OX0.je8Cf5qJZq8LnW-5rONM0HhEDpyeAs2iH56Q5FIquLY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  // BAGIAN INI SUDAH DIUBAH MENJADI TRUE AGAR OTOMATIS LIGHT MODE
  const [isDark, setIsDark] = useState(true); 
  const [visitors, setVisitors] = useState(0); 

  // Logika Visitor Counter Real-Time
  useEffect(() => {
    async function updateVisitors() {
      let { data, error } = await supabase
        .from('visitors')
        .select('count')
        .single();

      if (data && !error) {
        const newCount = data.count + 1;
        setVisitors(newCount);

        await supabase
          .from('visitors')
          .update({ count: newCount })
          .eq('id', 1); 
      }
    }
    updateVisitors();
  }, []);

  // Konfigurasi Warna
  const themeBg = isDark ? 'bg-[#78ADCE]' : 'bg-[#0e1c47]';
  const navBg = isDark ? 'bg-[#78ADCE]/90' : 'bg-[#0e1c47]/90';
  const themeText = isDark ? 'text-[#0e1c47]' : 'text-white';
  const subText = isDark ? 'text-[#0e1c47]/70' : 'text-white/60';
  const cardBg = isDark ? 'bg-white/20' : 'bg-[#0a0a0a]';
  const cardBorder = isDark ? 'border-[#0e1c47]/10' : 'border-white/5';

  return (
    <div className={`min-h-screen ${themeBg} ${themeText} transition-colors duration-500 font-sans scroll-smooth`}>
      
      {/* Navbar - Fixed */}
      <nav className={`fixed top-0 w-full z-50 ${navBg} backdrop-blur-md py-4 px-6 flex justify-between items-center border-b ${isDark ? 'border-[#0e1c47]/10' : 'border-white/10'}`}>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
          <a href="#home" className="hover:opacity-60 transition-opacity">Home</a>
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#skills" className="hover:opacity-60 transition-opacity">Skills</a>
          <a href="#achievements" className="hover:opacity-60 transition-opacity">Achievements</a>
          <a href="#education" className="hover:opacity-60 transition-opacity">Education</a>
          <a href="#experience" className="hover:opacity-60 transition-opacity">Experience</a>
        </div>
        <button 
          onClick={() => setIsDark(!isDark)}
          className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-[#0e1c47]/10 hover:bg-[#0e1c47]/20' : 'bg-white/10 hover:bg-white/20'}`}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>

      {/* SECTION 1: HERO */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center pt-20">
        <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]' : 'bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),transparent_70%)]'}`}></div>
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-3 italic text-left md:text-center">
            Abdul Habir Al Majdi
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-4 uppercase tracking-wider opacity-90">
            Electrical Engineering Student, Computer & Network Technician
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <a href="https://github.com/abhyyy24" target="_blank" rel="noopener noreferrer" className={`p-4 ${isDark ? 'bg-white/40 border-[#0e1c47]/10 text-[#0e1c47]' : 'bg-black/20 border-white/10 text-white'} hover:scale-110 rounded-2xl transition-all border shadow-sm`}>
              <Github size={24} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abhyyy333@gmail.com" target="_blank" rel="noopener noreferrer" className={`p-4 ${isDark ? 'bg-white/40 border-[#0e1c47]/10 text-[#0e1c47]' : 'bg-black/20 border-white/10 text-white'} hover:scale-110 rounded-2xl transition-all border shadow-sm`}>
              <Mail size={24} />
            </a>
            <a href="#" className={`p-4 ${isDark ? 'bg-white/40 border-[#0e1c47]/10 text-[#0e1c47]' : 'bg-black/20 border-white/10 text-white'} opacity-50 cursor-not-allowed rounded-2xl border shadow-sm`}>
              <Phone size={24} />
            </a>
            <a href="https://www.linkedin.com/in/abdul-habir-al-majdi-7a7098291" target="_blank" rel="noopener noreferrer" className={`p-4 ${isDark ? 'bg-white/40 border-[#0e1c47]/10 text-[#0e1c47]' : 'bg-black/20 border-white/10 text-white'} hover:scale-110 rounded-2xl transition-all border shadow-sm`}>
              <Linkedin size={24} />
            </a>
            <a href="#" className={`p-4 ${isDark ? 'bg-white/40 border-[#0e1c47]/10 text-[#0e1c47]' : 'bg-black/20 border-white/10 text-white'} opacity-50 cursor-not-allowed rounded-2xl border shadow-sm`}>
              <FileText size={24} />
            </a>
          </div>

          <div className={`inline-flex items-center gap-2 px-6 py-2 ${isDark ? 'bg-white/30 text-[#0e1c47]' : 'bg-black/30 text-white'} rounded-full border ${cardBorder} text-xs font-bold`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-[#0e1c47]' : 'bg-blue-400'}`}></span>
            {visitors.toLocaleString()} visitors
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT ME */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-center ${subText}`}>About Me</h2>
          <div className={`${cardBg} rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center border ${cardBorder} shadow-2xl`}>
            <div className={`w-64 h-80 rounded-3xl flex-shrink-0 overflow-hidden border ${cardBorder} flex items-center justify-center italic text-sm text-center px-4 ${isDark ? 'bg-white/20 text-[#0e1c47]' : 'bg-zinc-800 text-zinc-500'}`}>
             
                  {/* GANTI BAGIAN INI DENGAN FOTO LO */}
            <div className={`w-64 h-80 rounded-3xl flex-shrink-0 overflow-hidden border ${cardBorder} shadow-lg`}>
              <img 
                src="/abdul.JPEG" 
                alt="Abdul Habir Al Majdi" 
                className="w-full h-full object-cover shadow-inner"
              />
            </div>
            </div>
            <div className={`flex-1 space-y-6 ${isDark ? 'text-[#0e1c47]' : 'text-zinc-300'}`}>
              <p className="text-lg leading-relaxed font-medium">
                Mahasiswa Teknik Elektro Universitas Mataram (NIM: F1B02310096).
              </p>
              <p className="leading-relaxed opacity-80">
                Berfokus pada sistem komputer, jaringan, dan elektronika. Memiliki latar belakang teknis yang kuat sebagai teknisi IT di MM Tronik selama 4 tahun dan pengalaman magang di infrastruktur backbone Telkom Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SKILLS AND LANGUAGES */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-[10px] font-black uppercase tracking-[0.4em] mb-16 text-center ${subText}`}>Skills and Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`${cardBg} p-8 rounded-3xl border ${cardBorder} shadow-xl text-left`}>
              <div className="flex items-center gap-3 mb-6"><Settings className={isDark ? 'text-[#0e1c47]' : 'text-blue-500'} size={20} /><h3 className="font-bold text-xs uppercase tracking-widest">Technical Skills</h3></div>
              <div className="flex flex-wrap gap-2 text-[10px]">
                {["Computer Troubleshooting", "OS Installation", "Hardware Maintenance", "Basic Networking", "Network Monitoring", "Server Maintenance", "Microcontroller", "Electrical Circuits"].map((s) => (
                  <span key={s} className={`px-3 py-1 rounded-md border ${isDark ? 'bg-white/20 border-white/10' : 'bg-zinc-800 border-white/5'}`}>{s}</span>
                ))}
              </div>
            </div>
            <div className={`${cardBg} p-8 rounded-3xl border ${cardBorder} shadow-xl text-left`}>
              <div className="flex items-center gap-3 mb-6"><Terminal className={isDark ? 'text-[#0e1c47]' : 'text-blue-500'} size={20} /><h3 className="font-bold text-xs uppercase tracking-widest">Tools & Tech</h3></div>
              <div className="flex flex-wrap gap-2 text-[10px]">
                {["Windows OS", "LAN Tester", "Crimping Tools", "Router & Switch Config", "Multimeter", "Electronic Tools"].map((t) => (
                  <span key={t} className={`px-3 py-1 rounded-md border ${isDark ? 'bg-white/20 border-white/10' : 'bg-zinc-800 border-white/5'}`}>{t}</span>
                ))}
              </div>
            </div>
            <div className={`${cardBg} p-8 rounded-3xl border ${cardBorder} shadow-xl text-left`}>
              <div className="flex items-center gap-3 mb-6"><MessageSquare className={isDark ? 'text-[#0e1c47]' : 'text-blue-500'} size={20} /><h3 className="font-bold text-xs uppercase tracking-widest">Soft Skills</h3></div>
              <div className="flex flex-wrap gap-2 text-[10px]">
                {["Problem Solving", "Fast Learner", "Teamwork", "Communication", "Time Management", "Customer Service"].map((s) => (
                  <span key={s} className={`px-3 py-1 rounded-md border ${isDark ? 'bg-white/20 border-white/10' : 'bg-zinc-800 border-white/5'}`}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ACHIEVEMENTS */}
      <section id="achievements" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-[10px] font-black uppercase tracking-[0.4em] mb-16 text-center ${subText}`}>Achievements</h2>
          <div className="grid gap-6">
            <div className={`${cardBg} p-8 rounded-[2rem] border ${cardBorder} flex gap-6 items-start text-left shadow-xl`}>
              <div className={`p-3 rounded-xl ${isDark ? 'bg-white/20 text-[#0e1c47]' : 'bg-emerald-500/10 text-emerald-500'}`}><Trophy size={24}/></div>
              <div>
                <h3 className="font-bold text-lg">Penerima Beasiswa Fully Funded Bright Scholarship</h3>
                <p className={`text-xs font-bold mb-2 uppercase ${isDark ? 'text-[#0e1c47]/80' : 'text-blue-400'}`}>YBM BRILiaN</p>
                <p className="opacity-70 text-sm leading-relaxed">Beasiswa penuh sebagai bentuk apresiasi atas prestasi akademik, karakter, dan komitmen pengembangan diri.</p>
              </div>
            </div>
            <div className={`${cardBg} p-8 rounded-[2rem] border ${cardBorder} flex gap-6 items-start text-left shadow-xl`}>
              <div className={`p-3 rounded-xl ${isDark ? 'bg-white/20 text-[#0e1c47]' : 'bg-blue-500/10 text-blue-500'}`}><CheckCircle size={24}/></div>
              <div>
                <h3 className="font-bold text-lg">Sertifikat Penyelesaian Program Magang (PKL)</h3>
                <p className={`text-xs font-bold mb-2 uppercase ${isDark ? 'text-[#0e1c47]/80' : 'text-blue-400'}`}>Telkom Indonesia – Arnet Denpasar</p>
                <p className="opacity-70 text-sm leading-relaxed">Berhasil menyelesaikan program magang profesional dengan fokus pada network dan IT infrastructure.</p>
              </div>
            </div>
            <div className={`${cardBg} p-8 rounded-[2rem] border ${cardBorder} flex gap-6 items-start text-left shadow-xl`}>
              <div className={`p-3 rounded-xl ${isDark ? 'bg-white/20 text-[#0e1c47]' : 'bg-amber-500/10 text-amber-500'}`}><Award size={24}/></div>
              <div>
                <h3 className="font-bold text-lg">Finalis Lomba Karya Ilmiah Nasional PRISMA 2025</h3>
                <p className={`text-xs font-bold mb-2 uppercase ${isDark ? 'text-[#0e1c47]/80' : 'text-blue-400'}`}>PRISMA 2025</p>
                <p className="opacity-70 text-sm leading-relaxed">Terpilih sebagai finalis tingkat nasional melalui seleksi ketat dalam penyusunan dan presentasi karya ilmiah.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EDUCATION */}
      <section id="education" className="py-32 px-6 text-left">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-[10px] font-black uppercase tracking-[0.4em] mb-16 text-center ${subText}`}>Education</h2>
          <div className={`${cardBg} p-8 md:p-12 rounded-[2.5rem] border ${cardBorder} shadow-2xl`}>
            <GraduationCap className={isDark ? 'text-[#0e1c47]' : 'text-blue-500'} size={40} />
            <h3 className="text-2xl font-bold mb-1 italic">University of Mataram</h3>
            <p className={`font-medium mb-6 ${isDark ? 'text-[#0e1c47]/90' : 'text-blue-400'}`}>Bachelor of Electrical Engineering | 2022 – Present</p>
            <ul className="space-y-4 opacity-80 text-sm list-none text-left">
              <li><span className="font-bold">•</span> Fokus pada sistem komputer, networking, dan elektronika.</li>
              <li><span className="font-bold">•</span> Mengembangkan kemampuan analisis dan praktik laboratorium melalui proyek akademik.</li>
              <li><span className="font-bold">•</span> Mengikuti program pertukaran mahasiswa ke Malaysia sebagai bagian dari pengembangan internasional.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6: EXPERIENCE */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-[10px] font-black uppercase tracking-[0.4em] mb-16 text-center ${subText}`}>Experience</h2>
          <div className="grid gap-8">
            <div className={`${cardBg} p-8 md:p-12 rounded-[2.5rem] border ${cardBorder} relative overflow-hidden group shadow-2xl text-left`}>
              <Wrench className="absolute -right-4 -top-4 text-white/5 group-hover:text-blue-500/10 transition-colors" size={200} />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-1 italic">MM Tronik | Sumbawa Besar, Indonesia</h3>
                <p className={`font-semibold mb-6 ${isDark ? 'text-[#0e1c47]/90' : 'text-blue-400'}`}>Computer & IT Support Technician | 2020 – 2024</p>
                <div className="grid md:grid-cols-2 gap-6 text-sm opacity-80 leading-relaxed">
                  <ul className="space-y-3">
                    <li>Diagnosa & perbaikan hardware/software PC & Laptop.</li>
                    <li>Instalasi OS Windows, driver, dan aplikasi.</li>
                    <li>Upgrade RAM, Storage, PSU, dan Motherboard.</li>
                  </ul>
                  <ul className="space-y-3">
                    <li>Troubleshooting OS errors, overheating, & boot failures.</li>
                    <li>Setup LAN, instalasi kabel, dan internet troubleshooting.</li>
                    <li>Konsultasi teknis & maintenance sistem untuk user.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${cardBg} p-8 md:p-12 rounded-[2.5rem] border ${cardBorder} relative overflow-hidden group shadow-2xl text-left`}>
              <Briefcase className="absolute -right-4 -top-4 text-white/5 group-hover:text-blue-500/10 transition-colors" size={200} />
              <div className="relative z-10 text-left">
                <h3 className="text-2xl font-bold mb-1 italic">Telkom Indonesia – Arnet Denpasar</h3>
                <p className={`font-semibold mb-6 ${isDark ? 'text-[#0e1c47]/90' : 'text-blue-400'}`}>Network & IT Infrastructure Intern</p>
                <ul className="space-y-3 opacity-80 text-sm">
                  <li className="flex gap-3">Monitoring & pemeliharaan infrastruktur jaringan backbone.</li>
                  <li className="flex gap-3">Troubleshooting jaringan dan diagnosa konektivitas.</li>
                  <li className="flex gap-3 text-sm">Maintenance server, cable management, & instalasi perangkat jaringan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={`py-12 text-center border-t ${cardBorder} text-[10px] uppercase tracking-widest opacity-50`}>
        © 2026 Abdul Habir Al Majdi — NIM F1B02310096.
      </footer>
    </div>
  );
}