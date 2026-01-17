'use client'; // Client component - animasyonlar için gerekli

import Link from 'next/link'; // Next.js Link bileşeni - butonlarda navigasyon için
import Image from 'next/image'; // Next.js Image bileşeni - arka plan görseli için
import { useEffect, useState } from 'react'; // React hooks - animasyon ve state yönetimi için

/**
 * Hero bileşeni - Ana sayfanın en üst kısmında yer alan büyük görsel bölüm
 * Ziyaretçilerin dikkatini çekmek ve ana aksiyonları sunmak için kullanılır
 * Arka planda kebap görseli ve animasyonlu içerik ile modern bir görünüm sunar
 */
export default function Hero() {
  // Animasyon durumu - sayfa yüklendiğinde animasyonları tetiklemek için
  const [isVisible, setIsVisible] = useState(false);

  // Sayfa yüklendiğinde animasyonu başlat
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Arka plan görseli - Adana kebap fotoğrafı, tam ekran kaplar */}
      <div className="absolute inset-0">
        <Image
          src="/images/adana kebap.webp"
          alt="Adana Kebap"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Koyu overlay - metin okunabilirliği için arka planı karartır */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>
      
      {/* İçerik container - flexbox ile merkez hizalama, animasyonlu giriş */}
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Ana başlık - restoran adı, büyük ve kalın font */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-2xl animate-fade-in">
            <span className="text-yellow-400">CAN</span> HAYDAR USTA
          </h1>
          
          {/* Kuruluş yılı - logo tasarımına uygun */}
          <p className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400 drop-shadow-lg">
            1995'ten Beri
          </p>
          
          {/* Alt başlık - restoranın özelliklerini vurgular */}
          <p className="text-xl md:text-3xl mb-6 text-white font-semibold drop-shadow-lg">
            Kebap - Sac Tava - Pide - Lahmacun - Kelle Paça
          </p>
          
          {/* Açıklama metni */}
          <p className="text-lg md:text-xl mb-10 text-gray-100 max-w-2xl mx-auto drop-shadow-md">
            Geleneksel lezzetler, modern sunum. Yılların deneyimi ve kaliteli hizmet anlayışıyla, 
            en taze malzemelerle hazırlanan özel lezzetlerimizi sizlerle buluşturuyoruz.
          </p>
          
          {/* Aksiyon butonları - ziyaretçileri menü ve iletişim sayfalarına yönlendirir */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Menü butonu - birincil aksiyon, sarı arka plan (logo renklerine uygun) */}
            <Link
              href="/menu"
              className="bg-yellow-400 text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-yellow-400/50"
            >
              Menümüzü İncele
            </Link>
            
            {/* İletişim butonu - ikincil aksiyon, şeffaf kenarlık */}
            <Link
              href="/iletisim"
              className="bg-transparent border-3 border-yellow-400 text-yellow-400 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>

      {/* Aşağı kaydırma ok ikonu - sayfanın devamını göstermek için */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
