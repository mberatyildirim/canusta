/**
 * Hakkımızda sayfası - Restoran hakkında detaylı bilgiler
 * Restoranın hikayesi, misyonu ve değerleri hakkında bilgi verir
 */
import Image from 'next/image'; // Next.js Image bileşeni - optimize edilmiş görsel gösterimi için

export default function AboutPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      {/* Container - içeriği merkezler */}
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Sayfa başlığı - logo renklerine uygun */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hakkımızda
          </h1>
          <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Ana içerik bölümü */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          {/* Kuruluş yılı vurgusu - 1995'ten beri */}
          <div className="text-center mb-8">
            <p className="text-3xl md:text-4xl font-black text-yellow-500 mb-2">
              1995'ten Beri
            </p>
            <p className="text-gray-600 text-lg">
              Geleneksel Lezzetler, Modern Sunum
            </p>
          </div>

          {/* Mekan fotoğrafları - restoran atmosferini gösterir, grid layout ile yan yana */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* İlk mekan fotoğrafı - restoranın bir bölümünü gösterir */}
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/mekan foto 1.jpeg"
                alt="Can Haydar Usta Mekanı - İç Görünüm 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* İkinci mekan fotoğrafı - restoranın başka bir bölümünü gösterir */}
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/mekan foto 2.jpeg"
                alt="Can Haydar Usta Mekanı - İç Görünüm 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Metin içeriği */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Can Haydar Usta olarak, geleneksel Türk mutfağının en lezzetli örneklerini 
              siz değerli misafirlerimize sunmaktan gurur duyuyoruz. Yılların deneyimi ve 
              kaliteli hizmet anlayışımızla, her zaman taze ve özenle hazırlanmış yemekler 
              servis ediyoruz.
            </p>

            <p>
              Avcılar'daki mekanımızda, sıcak ve samimi bir atmosferde, aileniz ve 
              sevdiklerinizle birlikte unutulmaz bir yemek deneyimi yaşayabilirsiniz.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              Misyonumuz
            </h2>
            <p>
              Geleneksel lezzetleri modern sunum teknikleriyle buluşturarak, her zaman 
              en kaliteli malzemeleri kullanarak, müşterilerimize unutulmaz bir yemek 
              deneyimi sunmak.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              Değerlerimiz
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Kaliteli ve taze malzemeler kullanmak</li>
              <li>Geleneksel tarifleri korumak</li>
              <li>Müşteri memnuniyetini ön planda tutmak</li>
              <li>Temiz ve hijyenik ortam sağlamak</li>
              <li>Sıcak ve samimi hizmet sunmak</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p>
              Yılların deneyimi, kaliteli malzemeler, geleneksel tarifler ve modern 
              sunum teknikleriyle, her ziyaretinizde aynı lezzeti garantiliyoruz. 
              Sizleri de aramızda görmekten mutluluk duyarız.
            </p>
          </div>

          {/* İletişim çağrısı - logo renklerine uygun */}
          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Bize Ulaşın
            </h3>
            <p className="text-gray-700">
              Sorularınız veya rezervasyon talepleriniz için bize ulaşabilirsiniz.
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-700">
                <strong>Telefon:</strong> <a href="tel:02124233721" className="text-yellow-600 hover:underline font-semibold">0212 423 3721</a> / 
                <a href="tel:02126900310" className="text-yellow-600 hover:underline font-semibold"> 0212 690 0310</a>
              </p>
              <p className="text-gray-700">
                <strong>E-posta:</strong> <a href="mailto:canhaydarusta@gmail.com" className="text-yellow-600 hover:underline font-semibold">canhaydarusta@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
