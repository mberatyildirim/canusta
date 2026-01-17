import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Header bileşenini import ediyoruz
import Footer from "@/components/Footer"; // Footer bileşenini import ediyoruz

// Google Fonts'tan Geist font ailesini yüklüyoruz - modern ve okunabilir bir font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Monospace font - kod blokları için kullanılabilir
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO için metadata - arama motorları ve sosyal medya paylaşımları için
export const metadata: Metadata = {
  title: "Can Haydar Usta - Geleneksel Lezzetler, Modern Sunum",
  description: "Avcılar'da geleneksel Türk mutfağının en lezzetli örneklerini sunan restoran. Kebaplar, pide çeşitleri, çorbalar ve daha fazlası.",
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/logo.png', type: 'image/png', sizes: '32x32' },
      { url: '/logo.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
};

// Root layout - tüm sayfaların ana şablonu
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header - tüm sayfalarda görünen üst navigasyon */}
        <Header />
        {/* Ana içerik - her sayfa için değişen bölüm */}
        <main className="min-h-screen">
        {children}
        </main>
        {/* Footer - tüm sayfalarda görünen alt bilgi bölümü */}
        <Footer />
      </body>
    </html>
  );
}
