import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// UPDATE METADATA LENGKAP DENGAN SOCIAL PREVIEW
export const metadata: Metadata = {
  title: "Abdul Habir Al Majdi | Electrical Engineering & IT Portfolio",
  description: "Portfolio of Abdul Habir Al Majdi (NIM: F1B02310096), Electrical Engineering Student at University of Mataram. Computer & Network Technician with experience at MM Tronik and Telkom Indonesia.",
  keywords: ["Abdul Habir Al Majdi", "NIM F1B02310096", "Teknik Elektro Unram", "Portfolio IT", "Computer Technician", "NOC Arnet Backbone"],
  authors: [{ name: "Abdul Habir Al Majdi" }],
  
  // VERIFIKASI GOOGLE SEARCH CONSOLE
  verification: {
    google: "RJlF46BUaIE8Vs1NGUfJNfheW12AUvFLw3QCUk4x6ZA",
  },

  // FITUR PREVIEW SOSIAL MEDIA (OPEN GRAPH)
  openGraph: {
    title: "Abdul Habir Al Majdi | Portfolio",
    description: "Electrical Engineering Student & IT Infrastructure Specialist.",
    url: "https://abdul-habir-portfolio.vercel.app", // Sesuaikan dengan domain Vercel lo
    siteName: "Abdul Habir Al Majdi Portfolio",
    images: [
      {
        url: "/abdul.jpeg", // Mengambil foto asli lo yang di folder public
        width: 1200,
        height: 630,
        alt: "Abdul Habir Al Majdi Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}