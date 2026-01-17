'use client'; // Client component olarak işaretleniyor çünkü navigasyon için interaktif özellikler kullanılacak

import Link from 'next/link'; // Next.js'in Link bileşeni - sayfa geçişleri için kullanılıyor
import Image from 'next/image'; // Next.js Image bileşeni - optimize edilmiş görsel gösterimi için
import { useState } from 'react'; // React'in useState hook'u - mobil menü açık/kapalı durumunu yönetmek için

/**
 * Header bileşeni - Sayfanın üst kısmında yer alan navigasyon menüsü
 * Responsive tasarım ile hem masaüstü hem mobil cihazlarda çalışır
 */
export default function Header() {
  // Mobil menünün açık/kapalı durumunu tutan state
  // false: kapalı, true: açık
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menü açma/kapama fonksiyonu - toggle işlemi yapar
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Mevcut durumun tersini alır
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Ana header container - flexbox ile içeriği yatay hizalıyor */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo bölümü - Link ile ana sayfaya yönlendiriyor */}
          <Link href="/" className="flex items-center">
            {/* Logo görseli - public klasöründen gerçek logo */}
            <Image
              src="/logo.png"
              alt="Can Haydar Usta Logo"
              width={80}
              height={80}
              className="h-16 w-16 md:h-20 md:w-20 object-contain"
              priority // Logo öncelikli yükleme - sayfa yüklenirken hemen görünsün
            />
          </Link>

          {/* Masaüstü navigasyon menüsü - mobilde gizli, büyük ekranlarda görünür */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Ana sayfa linki - logo renklerine uygun hover efekti */}
            <Link 
              href="/" 
              className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 font-semibold"
            >
              Anasayfa
            </Link>
            {/* Hakkımızda linki */}
            <Link 
              href="/hakkimizda" 
              className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 font-semibold"
            >
              Hakkımızda
            </Link>
            {/* Menü linki */}
            <Link 
              href="/menu" 
              className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 font-semibold"
            >
              Menümüz
            </Link>
            {/* İletişim linki */}
            <Link 
              href="/iletisim" 
              className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 font-semibold"
            >
              İletişim
            </Link>
          </nav>

          {/* Mobil menü butonu - sadece mobil cihazlarda görünür */}
          <button
            onClick={toggleMenu} // Tıklanınca menüyü aç/kapa
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Menüyü aç/kapat" // Erişilebilirlik için ekran okuyuculara bilgi verir
          >
            {/* Hamburger ikonu - 3 çizgili menü simgesi */}
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Menü açıkken X, kapalıyken hamburger gösterir */}
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobil menü - sadece açıkken görünür, animasyonlu açılır */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              {/* Mobil menü linkleri - dikey sıralanmış */}
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)} // Linke tıklanınca menüyü kapat
                className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 font-semibold py-2"
              >
                Anasayfa
              </Link>
              <Link
                href="/hakkimizda"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 font-semibold py-2"
              >
                Hakkımızda
              </Link>
              <Link
                href="/menu"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 font-semibold py-2"
              >
                Menümüz
              </Link>
              <Link
                href="/iletisim"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 font-semibold py-2"
              >
                İletişim
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
