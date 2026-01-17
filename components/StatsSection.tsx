'use client'; // Client component - animasyonlar için gerekli

import { useEffect, useState } from 'react'; // React hooks - sayı sayma animasyonu için

/**
 * StatsSection bileşeni - Restoran istatistiklerini gösterir
 * Animasyonlu sayı sayma efekti ile görsel olarak çekici bir bölüm
 */
export default function StatsSection() {
  // Animasyon durumu - sayfa yüklendiğinde animasyonları tetiklemek için
  const [isVisible, setIsVisible] = useState(false);

  // Sayfa yüklendiğinde animasyonu başlat
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // İstatistik verileri - restoranın başarı göstergeleri
  const stats = [
    { number: 500, label: 'Mutlu Müşteri', icon: '😊' },
    { number: 2500, label: 'Ürün Siparişi', icon: '🛒' },
    { number: 100, label: 'Ürün Çeşidi', icon: '📦' },
    { number: 5000, label: 'Mutlu Sipariş', icon: '⭐' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-yellow-100">
      {/* Container - içeriği merkezler */}
      <div className="container mx-auto px-4">
        {/* Başlık bölümü */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Bugüne Kadar Neler Yaptık?
          </h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* İstatistik kartları - grid layout ile responsive tasarım */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 text-center hover-lift transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* İkon - emoji ile görsel zenginlik */}
              <div className="text-4xl mb-3">{stat.icon}</div>
              {/* Sayı - büyük ve kalın font */}
              <div className="text-4xl md:text-5xl font-black text-yellow-500 mb-2">
                {isVisible ? stat.number.toLocaleString('tr-TR') : '0'}
              </div>
              {/* Etiket - istatistik açıklaması */}
              <div className="text-gray-700 font-semibold text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
