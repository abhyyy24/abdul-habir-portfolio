/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tambahkan baris ini
  images: {
    unoptimized: true, // Tambahkan ini agar gambar aman
  },
};

export default nextConfig;