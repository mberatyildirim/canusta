/**
 * Ürün ismine göre görsel URL'i döndürür
 * Public/images klasöründeki görselleri kullanır
 */

// Ürün isimlerinden görsel dosya adına mapping
// Dosya isimleri kullanıcının verdiği listeye göre eşleştirilmiştir
const productImageMap: Record<string, string> = {
  // Çorbalar
  "Mercimek Çorbası": "/images/mercimek çorbası.webp",
  "Tavuk Suyu Çorbası": "/images/tavuk suyu.webp",
  "Kelle Paça Çorbası": "/images/kelle paça.webp",
  "Ayak Paça Çorbası": "/images/ayak paça.webp",
  "İşkembe Çorbası": "/images/işkembe .webp",
  
  // Fırın Ürünleri
  "Lahmacun (Kaşarlı)": "/images/lahmacun kaşarlı.webp",
  "Antep Çullama": "/images/antep çullama.webp",
  "Kıymalı Yumurtalı Pide": "/images/kıymalı yumurtalı.webp",
  "Kaşarlı Pide": "/images/kaşarlı pide.webp",
  "Kıymalı Pide": "/images/kıymalı pide.webp",
  "Kaşarlı Sucuklu Pide": "/images/kaşarlı sucuklu pide.webp",
  "Kıymalı Kaşarlı Pide": "/images/kıymalı kaşarlı pide.webp",
  "Kuşbaşılı Kaşarlı Pide": "/images/kuşbaşılı kaşarlı pide.webp",
  "Kavurmalı Pide": "/images/kavurmalı pide.webp",
  "Kavurmalı Kaşarlı Pide": "/images/kavurmalı kaşarlı.webp",
  
  // Kebaplar & Izgaralar
  "Beyti Kebap (Açık)": "/images/beyti kebap açık.webp",
  "Sebzeli Kebap": "/images/sebzeli kebap.webp",
  "Sarma Beyti": "/images/sarma beyti.webp",
  "Adana Kebap (Acılı)": "/images/adana kebap.webp",
  "Urfa Kebap (acısız)": "/images/urfa kebap.webp",
  "Domatesli Kebap": "/images/domatesli kebap.webp",
  "Patlıcanlı Kebap": "/images/patlıcanlı kebap.webp",
  "Tavuk Şiş": "/images/tavuk şiş.webp",
  "Yaprak Kanat": "/images/yaprak kanat.webp",
  "Kuzu Şiş": "/images/kuzu şiş.webp",
  "Çöp Şiş": "/images/çöp şiş.webp",
  "Dana Şiş": "/images/dana şiş.webp",
  "Kuzu Pirzola": "/images/kuzu pirzola.webp",
  "Alinazik Kebap (Kıymadan)": "/images/ali nazik kebap (kıymalı).webp",
  "Alinazik Kebap (Kuzu Şişten)": "/images/ali nazik kebap (şişten).webp",
  "Altı Ezmeli Kebap": "/images/altı ezmeli kebap.webp",
  "Diyarbakır Ciğer Şiş": "/images/diyarbakir sis.jpeg",
  
  // Tava Çeşitleri
  "Et Sote": "/images/et sote.webp",
  "Tavuk Sac Tava": "/images/tavuk sac tava.webp",
  "Et Sac Tava": "/images/et sac tava.webp",
  "Soya Soslu Tavuk": "/images/soya soslu tavuk.webp",
  
  // Dürümler
  "Urfa Dürüm": "/images/urfa dürüm.webp",
  "Adana Kebap Dürüm (Acılı)": "/images/adana kebap dürüm.webp",
  "Tavuk Şiş Dürüm": "/images/tavuk şiş dürüm.webp",
  "Ciğer Şiş Dürüm": "/images/ciğer şiş dürüm.webp",
  "Kuzu Şiş Dürüm": "/images/kuzu şiş dürüm.webp",
  "Çöp Şiş Dürüm": "/images/çöp şiş dürüm.webp",
  "Dana Şiş Dürüm": "/images/dana şiş dürüm.webp",
  "Beyti Dürüm": "/images/beyti dürüm.webp",
  
  // Salatalar
  "Çoban Salata": "/images/çoban salata.webp",
  "Yeşil Salata": "/images/yeşil salata.webp",
  "Gavurdağı Salata": "/images/gavurdağı salata.webp",
  
  // Yan Ürünler
  "Cacık": "/images/cacık.webp",
  "Patates Kızartması": "/images/patates kızartması.webp",
  "Çiğ Köfte": "/images/çiğ köfte.webp",
  
  // Tatlılar
  "Künefe": "/images/künefe.webp",
  
  // İçecekler
  "Su (50 cl.)": "/images/su.webp",
  "Coca-Cola (20 cl.)": "/images/cola.webp",
  "Ayran (30 cl.)": "/images/ayran.webp",
  
  // Kiloluk Ürünler
  "Tavuk Pirzola (1 kg.) (Pişirilmiş)": "/images/tavuk pirzola 1 kg.webp",
};

/**
 * Ürün ismine göre görsel URL'i döndürür
 * @param productName - Menüdeki ürün adı
 * @returns Görsel URL'i veya null (görsel yoksa)
 */
export function getProductImageUrl(productName: string): string | null {
  const imagePath = productImageMap[productName];
  
  if (imagePath) {
    return imagePath;
  }
  
  // Görsel yoksa null döndür
  return null;
}

/**
 * Ürünün görseli olup olmadığını kontrol eder
 * @param productName - Menüdeki ürün adı
 * @returns Görsel varsa true, yoksa false
 */
export function hasProductImage(productName: string): boolean {
  return productImageMap[productName] !== undefined;
}
