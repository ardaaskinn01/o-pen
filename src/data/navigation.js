/**
 * O-PEN Kurumsal Navigasyon Mimarisi
 * Hem Header (Navbar) hem de Footer menüleri tarafından ortak kullanılır.
 */

export const navigation = {
  // Üst İnce Bilgi Çubuğu
  topbar: {
    address: 'İzmir, Türkiye',
    hours: 'Pzt - Cts: 08:30 - 18:30',
    ctaText: 'Hızlı Teklif Al',
    ctaLink: '/iletisim',
  },

  // Ana Menü Öğeleri
  main: [
    {
      label: 'Ana Sayfa',
      path: '/',
    },
    {
      label: 'Kurumsal',
      path: '/kurumsal',
      dropdown: [
        {
          label: 'Hakkımızda',
          path: '/kurumsal',
          desc: 'O-PEN marka hikayesi ve o-pen window felsefesi',
        },
        {
          label: 'Vizyon & Misyon',
          path: '/kurumsal#vizyon',
          desc: 'Geleceğe açılan sağlam ve aydınlık hedeflerimiz',
        },
        {
          label: 'Neden O-PEN?',
          path: '/kurumsal#neden',
          desc: 'Üstün ısı-ses yalıtımı ve işçilik garantisi',
        },
        {
          label: 'Kalite Politikası',
          path: '/kurumsal#kalite',
          desc: 'A sınıfı profiller ve Avrupa standartlarında üretim',
        },
      ],
    },
    {
      label: 'Ürünler',
      path: '/urunler',
      isMegaMenu: true,
      items: [
        {
          slug: 'pvc-pencere-sistemleri',
          title: 'PVC Pencere Sistemleri',
          desc: 'Maksimum ısı ve ses yalıtımlı çok odacıklı profiller',
          image: '/images/urunler/pvc-pencere.jpg',
        },
        {
          slug: 'aluminyum-dograma',
          title: 'Alüminyum Doğrama & Sürme',
          desc: 'Geniş açıklıklar için mimari zarafet ve sağlamlık',
          image: '/images/urunler/aluminyum-dograma.jpg',
        },
        {
          slug: 'kapi-sistemleri',
          title: 'Kapı Sistemleri',
          desc: 'Güvenlik, estetik ve yalıtımlı giriş & balkon kapıları',
          image: '/images/urunler/kapi-sistemleri.jpg',
        },
        {
          slug: 'cam-balkon-sistemleri',
          title: 'Cam Balkon Sistemleri',
          desc: 'Dört mevsim panoramik manzara sunan katlanır camlama',
          image: '/images/urunler/cam-balkon.jpg',
        },
        {
          slug: 'panjur-kepenk-sistemleri',
          title: 'Panjur & Kepenk',
          desc: 'Güneş kontrolü, hırsızlık koruması ve monoblok motorlu sistemler',
          image: '/images/urunler/panjur-kepenk.jpg',
        },
        {
          slug: 'sineklik-aksesuar-sistemleri',
          title: 'Sineklik & Aksesuar',
          desc: 'Plise sineklikler ve dayanıklı kol-kilit donanımları',
          image: '/images/urunler/sineklik-aksesuar.jpg',
        },
      ],
    },
    {
      label: 'Referanslar',
      path: '/referanslar',
    },
    {
      label: 'Galeri',
      path: '/galeri',
    },
    {
      label: 'İletişim',
      path: '/iletisim',
    },
  ],

  // Footer Menü Grupları
  footer: {
    quickLinks: [
      { label: 'Ana Sayfa', path: '/' },
      { label: 'Uygulama Galerisi', path: '/galeri' },
      { label: 'Referans Projeler', path: '/referanslar' },
      { label: 'Blog & Rehberler', path: '/blog' },
      { label: 'Ücretsiz Keşif Al', path: '/iletisim' },
      { label: 'İletişim & Harita', path: '/iletisim' },
    ],
    corporate: [
      { label: 'Hakkımızda', path: '/kurumsal' },
      { label: 'Vizyon & Misyon', path: '/kurumsal#vizyon' },
      { label: 'Neden O-PEN?', path: '/kurumsal#neden' },
      { label: 'Kalite Politikası', path: '/kurumsal#kalite' },
      { label: 'Referanslarımız', path: '/referanslar' },
      { label: 'Uygulama Galerisi', path: '/galeri' },
    ],
    products: [
      { label: 'PVC Pencere Sistemleri', path: '/urunler/pvc-pencere-sistemleri' },
      { label: 'Alüminyum Doğrama & Sürme', path: '/urunler/aluminyum-dograma' },
      { label: 'Giriş & Balkon Kapıları', path: '/urunler/kapi-sistemleri' },
      { label: 'Cam Balkon Sistemleri', path: '/urunler/cam-balkon-sistemleri' },
      { label: 'Panjur & Kepenk Çözümleri', path: '/urunler/panjur-kepenk-sistemleri' },
      { label: 'Sineklik & Donanımlar', path: '/urunler/sineklik-aksesuar-sistemleri' },
    ],
    legal: [
      { label: 'Gizlilik Politikası', path: '/gizlilik' },
      { label: 'Çerez Politikası', path: '/cerez' },
      { label: 'Kullanım Koşulları', path: '/kullanim-kosullari' },
    ],
  },
};

export default navigation;

