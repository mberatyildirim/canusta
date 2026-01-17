import Hero from "@/components/Hero"; // Hero bileşeni - ana sayfa üst bölümü
import AboutPreview from "@/components/AboutPreview"; // Hakkımızda önizleme bileşeni
import MenuPreview from "@/components/MenuPreview"; // Menü önizleme bileşeni
import StatsSection from "@/components/StatsSection"; // İstatistikler bölümü
import PopularProducts from "@/components/PopularProducts"; // Popüler ürünler bölümü
import ReviewsSection from "@/components/ReviewsSection"; // Müşteri yorumları bölümü
import LocationMap from "@/components/LocationMap"; // Konum haritası bölümü

/**
 * Ana sayfa bileşeni - ziyaretçilerin ilk gördüğü sayfa
 * Hero, Hakkımızda özeti, Menü önizlemesi, İstatistikler, Popüler Ürünler, Yorumlar ve Konum içerir
 */
export default function Home() {
  return (
    <div>
      {/* Hero bölümü - sayfanın en üstünde, dikkat çekici görsel bölüm */}
      <Hero />
      
      {/* Hakkımızda önizleme - restoran hakkında kısa bilgi */}
      <AboutPreview />
      
      {/* İstatistikler bölümü - restoran başarı göstergeleri */}
      <StatsSection />
      
      {/* Popüler ürünler - en çok tercih edilen lezzetler */}
      <PopularProducts />
      
      {/* Menü önizleme - kategorilerin gösterildiği bölüm */}
      <MenuPreview />
      
      {/* Müşteri yorumları - güven oluşturan gerçek deneyimler */}
      <ReviewsSection />
      
      {/* Konum haritası - footer üstünde, Google Maps ile */}
      <LocationMap />
    </div>
  );
}
