'use client'; // Client component - animasyonlar için gerekli

import Link from 'next/link'; // Next.js Link bileşeni - menü sayfasına yönlendirme için
import Image from 'next/image'; // Next.js Image bileşeni - ürün görselleri için
import { useEffect, useState } from 'react'; // React hooks - animasyon yönetimi için
import { getProductImageUrl, hasProductImage } from '@/utils/getProductImage'; // Görsel yardımcı fonksiyonları
import menuData from '@/data/menu.json'; // Menü verileri

/**
 * PopularProducts bileşeni - En popüler ürünleri gösterir
 * Sadece görseli olan ürünleri gösterir
 */
export default function PopularProducts() {
  // Animasyon durumu - sayfa yüklendiğinde animasyonları tetiklemek için
  const [isVisible, setIsVisible] = useState(false);

  // Sayfa yüklendiğinde animasyonu başlat
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Popüler ürünler - kategorilere göre seçilmiş en iyi ürünler
  // 2 çorba, 4 kebap, 1 pide, 1 dürüm, 1 tatlı
  const popularProducts = [
    // Çorbalar (2 ürün)
    { name: 'Kelle Paça Çorbası', category: 'Çorbalar' },
    { name: 'Mercimek Çorbası', category: 'Çorbalar' },
    // Kebaplar (4 ürün)
    { name: 'Sarma Beyti', category: 'Kebaplar & Izgaralar' },
    { name: 'Adana Kebap (Acılı)', category: 'Kebaplar & Izgaralar' },
    { name: 'Altı Ezmeli Kebap', category: 'Kebaplar & Izgaralar' },
    { name: 'Diyarbakır Ciğer Şiş', category: 'Kebaplar & Izgaralar' },
    // Pide (1 ürün)
    { name: 'Antep Çullama', category: 'Fırın Ürünleri' },
    // Dürüm (1 ürün)
    { name: 'Adana Kebap Dürüm (Acılı)', category: 'Dürümler' },
    // Tatlı (1 ürün)
    { name: 'Künefe', category: 'Tatlılar' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Container - içeriği merkezler */}
      <div className="container mx-auto px-4">
        {/* Başlık bölümü */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Popüler Ürünlerimiz
          </h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            En çok tercih edilen lezzetlerimiz
          </p>
        </div>

        {/* Ürün kartları - grid layout ile responsive tasarım, daha büyük ve görsel odaklı */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {popularProducts.map((product, index) => {
            const imageUrl = getProductImageUrl(product.name);
            
            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover-lift transition-all duration-500 border border-gray-100 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Ürün görseli - gerçek görseller, daha büyük ve görsel odaklı */}
                {imageUrl ? (
                  <div className="relative h-48 md:h-56 w-full group">
                    <Image
                      src={imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    {/* Görsel üzerine hafif overlay - hover efekti için */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : (
                  <div className="relative h-48 md:h-56 w-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <span className="text-white text-5xl">🍖</span>
                  </div>
                )}
                
                {/* Ürün bilgileri - daha şık tasarım */}
                <div className="p-4 md:p-5">
                  {/* Ürün adı - kalın ve okunabilir font, daha büyük */}
                  <h3 className="font-bold text-gray-800 mb-2 text-base md:text-lg leading-tight">
                    {product.name}
                  </h3>
                  {/* Kategori badge - renkli ve dikkat çekici */}
                  <div className="inline-block">
                    <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                      {product.category.split(' ')[0]}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tüm menüyü görüntüle butonu - merkezde */}
        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Tüm Menüyü Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
}
