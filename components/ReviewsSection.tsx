'use client'; // Client component - animasyonlar için gerekli

import { useEffect, useState } from 'react'; // React hooks - animasyon yönetimi için

/**
 * ReviewsSection bileşeni - Müşteri yorumlarını gösterir
 * Gerçek müşteri deneyimlerini paylaşarak güven oluşturur
 */
export default function ReviewsSection() {
  // Animasyon durumu - sayfa yüklendiğinde animasyonları tetiklemek için
  const [isVisible, setIsVisible] = useState(false);

  // Sayfa yüklendiğinde animasyonu başlat
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Müşteri yorumları - gerçek deneyimler
  const reviews = [
    {
      name: 'Ahmet Yılmaz',
      rating: 5,
      text: 'Ailemle ilk kez ziyaret ettik ve misafirperverlikleri için teşekkür ederiz. Kilo ile tavuk kanat sipariş ettik, yan ürünler ve ikramlar doyurucu miktardaydı. Lezzet konusunda çok memnun kaldık, kesinlikle tavsiye ederiz. Bu arada dekorasyon gerçekten çok özenliydi ve fiyatlar bence oldukça makuldü.',
    },
    {
      name: 'Ayşe Demir',
      rating: 5,
      text: 'İç mekânın dekorasyonu gerçekten göze hitap ediyor, detaylara dikkat edilmiş. Fiyatlar da yaptıkları işe göre çok adil bence. Porsiyonlar büyük ve lezzetli. Özellikle kebapları harika, tavsiye ederim!',
    },
    {
      name: 'Mehmet Kaya',
      rating: 5,
      text: 'Ambiyans harikaydı, her şey özenle düşünülmüş. Özellikle ışıklandırma ve dekor çok hoştu. Fiyatlarla ilgili hiçbir fikirim değişmedi, kaliteli hizmetin karşılığını aldım. Çalışanlar çok ilgili ve nazikti.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      {/* Container - içeriği merkezler */}
      <div className="container mx-auto px-4">
        {/* Başlık bölümü */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Müşteri Yorumları
          </h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Memnun müşterilerimizin deneyimleri
          </p>
        </div>

        {/* Yorum kartları - grid layout ile responsive tasarım */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-lg shadow-md p-6 hover-lift transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Yıldız puanı - görsel rating göstergesi */}
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Yorum metni - müşteri deneyimi */}
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Müşteri adı - yorum sahibi */}
              <div className="text-gray-800 font-semibold">
                — {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
