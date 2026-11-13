/**
 * O-PEN Site & Marka Temel Konfigürasyonu
 * Teknik SEO, Open Graph, İletişim ve Yerel İşletme Verileri için Tek Kaynak (Single Source of Truth)
 */

export const siteConfig = {
  name: 'O-PEN',
  legalName: 'O-PEN Pencere & Kapı Sistemleri',
  tagline: 'Açık, Işık Alan, Ferah Yaşam Alanları İçin PVC ve Alüminyum Sistemleri',
  description:
    'O-PEN - PVC ve alüminyum pencere, kapı, cam balkon ve panjur sistemlerinde kurumsal kalite, üstün ısı-ses yalıtımı ve profesyonel montaj güvencesi.',

  // Alan Adı (Kullanıcı henüz domaini kesinleştirmediğinde yer tutucu olarak çalışır)
  // Prodüksiyonda örn: https://www.o-pen.com veya https://www.o-pen.com.tr
  domain: 'https://www.o-pen.com.tr',

  // İletişim Bilgileri
  phone: '+90 (546) 768 99 92',
  whatsapp: '+90 (546) 768 99 92',
  whatsappRaw: '905467689992',
  whatsappMessage: 'Merhaba, O-PEN pencere ve kapı sistemleri hakkında bilgi ve fiyat teklifi almak istiyorum.',
  email: 'info@o-pen.com.tr',

  // Fiziksel Konum ve Harita
  address: 'Özyurt Mahallesi, Gediz / Kütahya, Türkiye',
  coordinates: {
    lat: 38.9647869,
    lng: 29.3641572,
  },
  mapEmbedSrc: 'https://www.google.com/maps?q=38.9647869,29.3641572&hl=tr&z=17&output=embed',
  mapsUrl: 'https://maps.app.goo.gl/hDaUfTL3DpTLeGnS6',

  // Sosyal Medya Profilleri
  social: {
    facebook: 'https://facebook.com/openpencere',
    instagram: 'https://instagram.com/openpencere',
    linkedin: 'https://linkedin.com/company/openpencere',
  },

  // Marka & Tema
  themeColor: '#FF6A00',
  defaultOgImage: '/images/og-image.png',
  locale: 'tr_TR',

  // Doğrulama Kodları (Search Console & Bing Webmaster yer tutucuları)
  verification: {
    google: 'GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN_BURAYA',
    bing: 'BING_WEBMASTER_VERIFICATION_TOKEN_BURAYA',
    yandex: 'YANDEX_VERIFICATION_TOKEN_BURAYA',
  },
};

export default siteConfig;
