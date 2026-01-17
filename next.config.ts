import type { NextConfig } from "next";

// Next.js yapılandırması - görsel hostname'leri ve diğer ayarlar
const nextConfig: NextConfig = {
  images: {
    // Dış kaynaklardan görsel yüklemek için izin verilen hostname'ler
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash görselleri için
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.marketingturkiye.com.tr', // Yemeksepeti logosu için
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.deliveryhero.io', // Yemeksepeti ürün görselleri için
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
