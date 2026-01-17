import Link from 'next/link'; // Next.js Link bileşeni - "Daha fazla" butonunda kullanılacak
import Image from 'next/image'; // Next.js Image bileşeni - optimize edilmiş görsel gösterimi için

/**
 * AboutPreview bileşeni - Ana sayfada hakkımızda bölümünün özeti
 * Ziyaretçileri restoran hakkında bilgilendirir ve detay sayfasına yönlendirir
 */
export default function AboutPreview() {
  return (
    <section className="py-16 bg-gray-50">
      {/* Container - içeriği merkezler ve maksimum genişlik verir */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Başlık bölümü */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Biz Kimiz?
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          {/* İçerik bölümü - grid layout ile görsel ve metin yan yana */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Görsel bölümü - kebap resmi, local görsel */}
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/sarma beyti.webp"
                alt="Sarma Beyti Kebap"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Metin içeriği */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Can Haydar Usta olarak, geleneksel Türk mutfağının en lezzetli örneklerini 
                siz değerli misafirlerimize sunmaktan gurur duyuyoruz. Yılların deneyimi ve 
                kaliteli hizmet anlayışımızla, her zaman taze ve özenle hazırlanmış yemekler 
                servis ediyoruz.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Avcılar'daki mekanımızda, sıcak ve samimi bir atmosferde, aileniz ve 
                sevdiklerinizle birlikte unutulmaz bir yemek deneyimi yaşayabilirsiniz.
              </p>
              
              {/* "Daha fazla" butonu - hakkımızda sayfasına yönlendirir, logo renklerine uygun */}
              <Link
                href="/hakkimizda"
                className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-200 shadow-lg transform hover:scale-105"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
