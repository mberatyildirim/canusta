import Image from 'next/image'; // Next.js Image bileşeni - Yemeksepeti logosu için

/**
 * İletişim sayfası - Restoran iletişim bilgileri ve harita
 * Telefon, e-posta, adres ve Google Maps haritası içerir
 */
export default function ContactPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      {/* Container - içeriği merkezler */}
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Sayfa başlığı - logo renklerine uygun */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            İletişim
          </h1>
          <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
          <p className="text-gray-600 text-lg mt-4">
            Bize ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz
          </p>
        </div>

        {/* İletişim bilgileri ve harita - grid layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sol kolon - İletişim bilgileri */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              İletişim Bilgileri
            </h2>

            <div className="space-y-6">
              {/* Telefon numaraları - logo renklerine uygun */}
              <div className="flex items-start">
                {/* Telefon ikonu */}
                <svg className="w-6 h-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Telefon</h3>
                  <a href="tel:02124233721" className="text-gray-700 hover:text-yellow-500 transition-colors block font-medium">
                    0212 423 3721
                  </a>
                  <a href="tel:02126900310" className="text-gray-700 hover:text-yellow-500 transition-colors block font-medium">
                    0212 690 0310
                  </a>
                </div>
              </div>

              {/* E-posta - logo renklerine uygun */}
              <div className="flex items-start">
                {/* E-posta ikonu */}
                <svg className="w-6 h-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">E-posta</h3>
                  <a href="mailto:canhaydarusta@gmail.com" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
                    canhaydarusta@gmail.com
                  </a>
                </div>
              </div>

              {/* Adres - logo renklerine uygun */}
              <div className="flex items-start">
                {/* Konum ikonu */}
                <svg className="w-6 h-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Adres</h3>
                  <p className="text-gray-700">
                    Mustafa Kemal Paşa, FİRUZKÖY BULVARI NO:167 D:A
                    <br />
                    34320 Avcılar/İstanbul
                  </p>
                </div>
              </div>

              {/* Çalışma saatleri (opsiyonel - şimdilik placeholder) */}
              <div className="flex items-start">
                {/* Saat ikonu */}
                <svg className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Çalışma Saatleri</h3>
                  <p className="text-gray-700">
                    Her gün: 10:00 - 23:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ kolon - Google Maps haritası */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-800 p-8 pb-4">
              Konumumuz
            </h2>
            {/* Google Maps iframe - haritayı gösterir - Place ID ile direkt konum (yol tarifi değil) */}
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3009.1234567890!2d28.1234567890!3d41.1234567890!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa1b284645373%3A0xed57a13f571d6d84!2sCan+Haydar+Usta!5e0!3m2!1str!2str!4v1705488000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Can Haydar Usta Konum"
              ></iframe>
            </div>
            {/* Harita altında adres linki */}
            <div className="p-4 bg-gray-50">
                <a
                href="https://www.google.com/maps?hl=en&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14caa1b284645373:0xed57a13f571d6d84"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-600 font-medium inline-flex items-center"
              >
                Haritada Aç
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* İletişim formu (opsiyonel - şimdilik basit bir bölüm) */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Bize Mesaj Gönderin
          </h2>
          <p className="text-gray-600 mb-6">
            Sorularınız, önerileriniz veya rezervasyon talepleriniz için bize ulaşabilirsiniz.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>Telefon:</strong> <a href="tel:02124233721" className="text-yellow-600 hover:underline font-semibold">0212 423 3721</a> / 
              <a href="tel:02126900310" className="text-yellow-600 hover:underline font-semibold"> 0212 690 0310</a>
            </p>
            <p className="text-gray-700">
              <strong>E-posta:</strong> <a href="mailto:canhaydarusta@gmail.com" className="text-yellow-600 hover:underline font-semibold">canhaydarusta@gmail.com</a>
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Online Sipariş:</strong>{' '}
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
