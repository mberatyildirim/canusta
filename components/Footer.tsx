import Link from 'next/link'; // Next.js Link bileşeni - sayfa içi navigasyon için

/**
 * Footer bileşeni - Sayfanın alt kısmında yer alan bilgi bölümü
 * İletişim bilgileri, sosyal medya linkleri ve site haritası içerir
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Ana footer container - grid layout ile responsive yapı */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sol kolon - Restoran hakkında bilgiler */}
          <div>
            {/* Restoran adı ve açıklama */}
            <h3 className="text-2xl font-bold mb-4">Can Haydar Usta</h3>
            <p className="text-gray-400 mb-4">
              Geleneksel lezzetleri modern sunumla buluşturan, 
              kaliteli hizmet anlayışıyla müşterilerimize hizmet veren restoranımız.
            </p>
          </div>

          {/* Orta kolon - Hızlı linkler (site haritası) */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              {/* Footer menü linkleri - dikey liste */}
              <li>
                <Link 
                  href="/" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link 
                  href="/hakkimizda" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link 
                  href="/menu" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Menümüz
                </Link>
              </li>
              <li>
                <Link 
                  href="/iletisim" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Sağ kolon - İletişim bilgileri */}
          <div>
            <h4 className="text-xl font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3 text-gray-400">
              {/* Telefon numaraları - tıklanabilir tel: linkleri */}
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:02124233721" className="hover:text-white transition-colors">
                    0212 423 3721
                  </a>
                  <br />
                  <a href="tel:02126900310" className="hover:text-white transition-colors">
                    0212 690 0310
                  </a>
                </div>
              </li>
              
              {/* E-posta adresi - tıklanabilir mailto: linki */}
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:canhaydarusta@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  canhaydarusta@gmail.com
                </a>
              </li>
              
              {/* Adres bilgisi - konum ikonu ile */}
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Mustafa Kemal Paşa, FİRUZKÖY BULVARI NO:167 D:A, 
                  <br />
                  34320 Avcılar/İstanbul
                </span>
              </li>
              
              {/* Çalışma saatleri - saat ikonu ile */}
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  Çalışma Saatleri: 07:00 - 02:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt çizgi - telif hakkı ve yıl bilgisi */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Can Haydar Usta. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
