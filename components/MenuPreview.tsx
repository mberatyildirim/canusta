import Link from 'next/link'; // Next.js Link bileşeni - menü sayfasına yönlendirme için
import menuData from '@/data/menu.json'; // Menü verilerini JSON dosyasından import ediyoruz
import { hasProductImage } from '@/utils/getProductImage'; // Görsel kontrolü için

/**
 * MenuPreview bileşeni - Ana sayfada menü kategorilerinin önizlemesi
 * Sadece görseli olan ürünleri gösterir
 */
export default function MenuPreview() {
  // Kategorileri filtrele - sadece görseli olan ürünleri içeren kategorileri göster
  const previewCategories = menuData.categories
    .map((category) => ({
      ...category,
      // Kategori içindeki ürünleri filtrele - sadece görseli olanları
      items: category.items.filter((item) => hasProductImage(item)),
    }))
    // En az 1 görseli olan ürünü olan kategorileri göster
    .filter((category) => category.items.length > 0)
    .slice(0, 6); // İlk 6 kategoriyi al

  return (
    <section className="py-16 bg-white">
      {/* Container - içeriği merkezler */}
      <div className="container mx-auto px-4">
        {/* Başlık bölümü */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Menümüz
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Geniş ürün yelpazemizle her damak zevkine uygun lezzetler
          </p>
        </div>

        {/* Kategori kartları - grid layout ile responsive tasarım */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Her kategori için bir kart oluşturuluyor */}
          {previewCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
            >
              {/* Kart içeriği - padding ile içerik boşluğu */}
              <div className="p-6">
                {/* Kategori adı */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {category.name}
                </h3>
                {/* Ürün sayısı - kaç çeşit olduğunu gösterir */}
                <p className="text-gray-600 mb-4">
                  {category.items.length} Farklı Ürün
                </p>
                {/* Örnek ürünler - ilk 3 ürünü listeler */}
                <ul className="space-y-2 mb-4">
                  {category.items.slice(0, 3).map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 text-sm flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                  {/* Daha fazla ürün varsa gösterilir */}
                  {category.items.length > 3 && (
                    <li className="text-gray-500 text-sm italic">
                      +{category.items.length - 3} ürün daha...
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Tüm menüyü görüntüle butonu - merkezde, menü sayfasına yönlendirir, logo renklerine uygun */}
        <div className="text-center">
          <Link
            href="/menu"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-200 shadow-lg transform hover:scale-105"
          >
            Tüm Menüyü Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
}
