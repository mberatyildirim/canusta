import menuData from '@/data/menu.json'; // Menü verilerini JSON dosyasından import ediyoruz
import Image from 'next/image'; // Next.js Image bileşeni - görseller ve Yemeksepeti logosu için
import { getProductImageUrl } from '@/utils/getProductImage'; // Ürün görseli yardımcı fonksiyonu

/**
 * Menü sayfası - Tüm kategorileri ve ürünleri gösterir
 * Ziyaretçilerin restoranın tüm menüsünü inceleyebileceği sayfa
 */
export default function MenuPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      {/* Container - içeriği merkezler ve maksimum genişlik verir */}
      <div className="container mx-auto px-4">
        {/* Sayfa başlığı */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Menümüz
          </h1>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Geniş ürün yelpazemizle her damak zevkine uygun lezzetler
          </p>
        </div>

        {/* Kategoriler - her kategori için bir bölüm */}
        <div className="space-y-16">
          {menuData.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-8">
              {/* Kategori başlığı - logo renklerine uygun */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-yellow-400">
                {category.name}
              </h2>
              
              {/* Ürün listesi - grid layout ile responsive tasarım, görsellerle */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, itemIndex) => {
                  // Ürün için görsel URL'ini al
                  const imageUrl = getProductImageUrl(item);
                  
                  return (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover-lift"
                    >
                      {/* Ürün görseli - varsa göster, yoksa placeholder */}
                      {imageUrl ? (
                        <div className="relative h-48 w-full">
                          <Image
                            src={imageUrl}
                            alt={item}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      ) : (
                        // Görseli olmayan ürünler için sadece metin kartı
                        <div className="p-4">
                          <p className="text-gray-800 font-semibold text-center">
                            {item}
                          </p>
                        </div>
                      )}
                      
                      {/* Ürün adı - görsel varsa altında, yoksa zaten yukarıda */}
                      {imageUrl && (
                        <div className="p-4">
                          <p className="text-gray-800 font-semibold text-center">
                            {item}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* İletişim çağrısı - sayfa sonunda, logo renklerine uygun */}
        <div className="mt-16 text-center bg-yellow-400 text-black rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Sipariş için Bize Ulaşın</h3>
          <p className="text-lg mb-4">
            Telefon: <a href="tel:02124233721" className="underline font-semibold hover:text-gray-800">0212 423 3721</a> / 
            <a href="tel:02126900310" className="underline font-semibold hover:text-gray-800"> 0212 690 0310</a>
          </p>
          <p className="text-lg mb-4">
            E-posta: <a href="mailto:canhaydarusta@gmail.com" className="underline font-semibold hover:text-gray-800">canhaydarusta@gmail.com</a>
          </p>
          <p className="text-lg">
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="https://www.yemeksepeti.com/restaurant/dotr/can-haydar-usta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-green-500"
              >
                <Image
                  src="https://www.marketingturkiye.com.tr/wp-content/uploads/2021/09/yemeksepeti-logo1.jpg"
                  alt="Yemeksepeti"
                  width={120}
                  height={40}
                  className="h-8 w-auto rounded-md"
                />
              </a>
              <a 
                href="https://getir.com/yemek/restoran/can-haydar-usta-avcilar-mustafa-kemalpasa-mah-avcilar-istanbul/"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-purple-500"
              >
                <Image
                  src="https://agtteknik.com/wp-content/uploads/2024/02/getir-unicorn.jpeg"
                  alt="Getir"
                  width={120}
                  height={40}
                  className="h-8 w-auto rounded-md"
                />
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
