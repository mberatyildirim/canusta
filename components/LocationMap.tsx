import Image from 'next/image'; // Next.js Image bileşeni - Yemeksepeti logosu için

/**
 * LocationMap bileşeni - İletişim bilgilerini gösterir
 * Restoranın iletişim bilgilerini ve online sipariş linkini sunar
 */
export default function LocationMap() {
  return (
    <section className="py-16 bg-white">
      {/* Container - içeriği merkezler */}
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Başlık bölümü */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            İletişim
          </h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Bize ulaşmak için aşağıdaki bilgileri kullanabilirsiniz
          </p>
        </div>

        {/* İletişim bilgileri - merkezi layout */}
        <div className="bg-gray-50 rounded-lg shadow-md p-8 md:p-12">
          <div className="space-y-6">
            {/* Telefon numaraları */}
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Telefon</h4>
                <a href="tel:02124233721" className="text-gray-700 hover:text-yellow-500 transition-colors block font-medium">
                  0212 423 3721
                </a>
                <a href="tel:02126900310" className="text-gray-700 hover:text-yellow-500 transition-colors block font-medium">
                  0212 690 0310
                </a>
              </div>
            </div>

            {/* E-posta */}
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">E-posta</h4>
                <a href="mailto:canhaydarusta@gmail.com" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
                  canhaydarusta@gmail.com
                </a>
              </div>
            </div>

            {/* Adres */}
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Adres</h4>
                <p className="text-gray-700">
                  Mustafa Kemal Paşa, FİRUZKÖY BULVARI NO:167 D:A
                  <br />
                  34320 Avcılar/İstanbul
                </p>
                {/* Google Maps linki */}
                <a
                  href="https://www.google.com/maps?hl=en&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14caa1b284645373:0xed57a13f571d6d84"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-600 font-medium inline-flex items-center mt-2"
                >
                  Haritada Aç
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Yemeksepeti linki - online sipariş için, gerçek logo ile */}
            <div className="flex items-start pt-4 border-t border-gray-200">
              <svg className="w-6 h-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Online Sipariş</h4>
                <a
                  href="https://www.yemeksepeti.com/restaurant/dotr/can-haydar-usta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-green-500"
                >
                  {/* Yemeksepeti logosu - gerçek logo URL'i */}
                  <Image
                    src="https://www.marketingturkiye.com.tr/wp-content/uploads/2021/09/yemeksepeti-logo1.jpg"
                    alt="Yemeksepeti"
                    width={120}
                    height={40}
                    className="h-8 w-auto rounded-md"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
