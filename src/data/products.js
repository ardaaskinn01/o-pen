/**
 * O-PEN Veri Odaklı Ürün Veritabanı
 * Tüm ürünler teknik tablolar, SSS, zengin görseller, özellikler ve SEO bilgileriyle yapılandırılmıştır.
 */

export const products = [
  {
    id: 'pvc-pencere',
    slug: 'pvc-pencere-sistemleri',
    title: 'PVC Pencere Sistemleri',
    category: 'PVC Pencere',
    badge: 'A Sınıfı Profil',
    subtitle: 'Maksimum Isı ve Ses Yalıtımı Sağlayan Çok Odacıklı Sistemler',
    shortDescription: 'Enerji tasarruflu, çift ve üç cam seçenekli, kurumsal kalitede yüksek yalıtımlı PVC pencere sistemleri.',
    longDescription:
      'O-PEN PVC Pencere Sistemleri, zorlu iklim koşullarında dahi maksimum enerji tasarrufu ve ses konforu sunmak üzere tasarlanmıştır. Çok odacıklı gövde geometrisi, içerideki sıcaklığı korurken dış ortam gürültüsünü 42 dB seviyesine kadar izole eder. Geniş cam yüzeyleri ve zarif hatlar sunarak iç mekânlara maksimum doğal gün ışığı kazandırır.',
    image: '/images/urunler/pvc-pencere.jpg',
    gallery: [
      '/images/urunler/pvc-pencere.jpg',
      '/images/galeri/galeri-1.jpg',
      '/images/galeri/galeri-5.jpg',
    ],
    features: [
      '70 mm - 80 mm profil genişliği ve 5-6 odacıklı gövde yapısı',
      'A sınıfı et kalınlığı (DIN EN 12608 normlarına uygun)',
      'EPDM kauçuk çift ve üçlü conta sızdırmazlık sistemi',
      'Çift açılım, vasistas ve sürme mekanizma seçenekleri',
      'Solmayan, sararmayan UV dayanımlı antistatik yüzey kalitesi',
      'Hırsızlığa karşı mantar başlı emniyetli kilit donanımları',
    ],
    technicalSpecs: [
      { label: 'Profil Genişliği', value: '70 mm / 80 mm Seri' },
      { label: 'Odacık Sayısı', value: '5 - 6 Odacıklı' },
      { label: 'Isı İletim Katsayısı (Uf)', value: '1.2 W/m²K (Üst Düzey Yalıtım)' },
      { label: 'Ses Yalıtım Değeri', value: '42 dB (Akustik Lamine Cam ile)' },
      { label: 'Cam Kalınlık Uyumu', value: '24 mm, 32 mm, 40 mm (Çift/Üç Cam)' },
      { label: 'Hava Geçirgenliği', value: 'Sınıf 4 (EN 12207)' },
      { label: 'Su Sızdırmazlık', value: 'Sınıf 9A (EN 12208)' },
      { label: 'Rüzgar Yükü Dayanımı', value: 'Sınıf C5 / B5 (EN 12210)' },
    ],
    faq: [
      {
        q: 'PVC pencerelerin temizliği ve bakımı nasıl yapılmalıdır?',
        a: 'Aşındırıcı kimyasal veya tiner içermeyen ılık sabunlu su ve yumuşak bez yeterlidir. Yılda bir kez mekanik menteşe ve kilit noktalarının ince makine yağı ile yağlanması önerilir.',
      },
      {
        q: 'Renk seçenekleri mevcut mu?',
        a: 'Evet, standart beyazın yanı sıra antrasit gri, altın meşe, ceviz, fındık ve maun gibi zengin lamine ahşap folyo kaplama seçeneklerimiz bulunmaktadır.',
      },
      {
        q: 'Montaj süresi ne kadar sürer?',
        a: 'Standart bir daire montajı ortalama 1 günde tozsuz ve titiz bir şekilde tamamlanıp teslim edilmektedir.',
      },
    ],
    relatedSlugs: ['aluminyum-dograma', 'panjur-kepenk-sistemleri', 'sineklik-aksesuar-sistemleri'],
  },
  {
    id: 'aluminyum-dograma',
    slug: 'aluminyum-dograma',
    title: 'Alüminyum Doğrama & Sürme Sistemleri',
    category: 'Alüminyum',
    badge: 'Mimari Zarafet',
    subtitle: 'Geniş Açıklıklar, Hebeschiebe Sürme ve Minimalist Hatlar',
    shortDescription: 'Isı yalıtımlı alüminyum profiller, panoramik sürme sistemleri ve villa projeleri için sağlam mimari çözümler.',
    longDescription:
      'O-PEN Alüminyum Doğrama Sistemleri; villa, rezidans ve modern ofis binalarında geniş cam cepheler ve kesintisiz manzara elde etmek için idealdir. Poliamid ısı bariyeri sayesinde yoğuşma ve ısı kaybını önlerken, yüksek taşıma kapasitesiyle devasa cam panellerin tek parmakla sessizce kaymasını sağlar.',
    image: '/images/urunler/aluminyum-dograma.jpg',
    gallery: [
      '/images/urunler/aluminyum-dograma.jpg',
      '/images/galeri/galeri-2.jpg',
      '/images/galeri/galeri-7.jpg',
    ],
    features: [
      'Gelişmiş poliamid ısı yalıtım bariyeri (Termal Köprülü)',
      'Ağır cam paneller için Hebeschiebe (Kaldır-Sür) ray mekanizması',
      'Ultra ince kenar profilleri ile maksimum manzara ve gün ışığı',
      'Elektrostatik toz boya ve eloksal kaplama ile sınırsız RAL renkleri',
      'Korozyona, neme ve deniz tuzu etkisine karşı ömür boyu dayanım',
      'Gömme eşik seçeneğiyle iç-dış mekân zemin sıfırlama',
    ],
    technicalSpecs: [
      { label: 'Kasa Derinliği', value: '65 mm / 75 mm / 120 mm Sürme Kasa' },
      { label: 'Et Kalınlığı', value: '1.8 mm - 2.0 mm Yüksek Mukavemet' },
      { label: 'Isı Bariyeri Genişliği', value: '24 mm - 34 mm Poliamid' },
      { label: 'Isı Geçirgenliği (Uf)', value: '1.4 - 1.8 W/m²K' },
      { label: 'Kanat Taşıma Kapasitesi', value: '400 kg / kanat başına' },
      { label: 'Cam Kalınlığı', value: '24 mm - 50 mm Lamine/Temperli' },
      { label: 'Yüzey İşlemi', value: 'Qualicoat Onaylı Toz Boya & Eloksal' },
    ],
    faq: [
      {
        q: 'Alüminyum doğramalar soğuk geçirir mi?',
        a: 'Geleneksel soğuk alüminyumların aksine, sistemlerimizde poliamid ısı yalıtım bariyeri bulunmaktadır. Bu sayede PVC ile yarışan yüksek ısı izolasyonu sağlanır ve terleme yapmaz.',
      },
      {
        q: 'Hebeschiebe kaldır-sür sistemi nasıl çalışır?',
        a: 'Kol çevrildiğinde kanat özel rulmanlar üzerinde hafifçe yukarı kalkar ve yüzlerce kiloluk cam adeta havada kayar gibi zahmetsizce hareket eder. Kol kapandığında conta zemine baskı yaparak tam sızdırmazlık oluşturur.',
      },
    ],
    relatedSlugs: ['pvc-pencere-sistemleri', 'kapi-sistemleri', 'panjur-kepenk-sistemleri'],
  },
  {
    id: 'kapi-sistemleri',
    slug: 'kapi-sistemleri',
    title: 'Giriş ve Dış Kapı Sistemleri',
    category: 'Kapı Sistemleri',
    badge: 'Güvenlik & Estetik',
    subtitle: 'Yüksek Güvenlik Donanımlı Giriş ve Kilitli Kapı Sistemleri',
    shortDescription: 'Çelik takviyeli profiller, çok noktalı emniyet kilitleri ve dayanıklı kapı çözümleri.',
    longDescription:
      'O-PEN Kapı Sistemleri, mekânınıza ilk girişte güveni ve zarafeti hissettirir. Dış kapılarda hırsızlığa karşı dirençli çok noktalı kilit dilleri ve ağır hizmet tipi menteşeler kullanılırken; rüzgar ve yağmur sızdırmazlığı üstün EPDM contalarla garanti edilir.',
    image: '/images/urunler/kapi-sistemleri.jpg',
    gallery: [
      '/images/urunler/kapi-sistemleri.jpg',
      '/images/galeri/galeri-6.jpg',
      '/images/hero/hero-new-2.jpg',
    ],
    features: [
      'Gövde içi güçlendirilmiş U ve kutu çelik takviyeleri',
      '4 noktalı ve kancalı mantar başlı kilit kasetleri',
      'Alüminyum ısı yalıtımlı düşük eşik (engelli geçişine uygun)',
      'Zengin dekoratif panel, cam çıtası ve renk kartelası',
      '3 boyutlu ayarlanabilir (3D) ağır yük menteşeleri',
      'Otomatik kilit ve parmak izi / kartlı geçiş entegrasyon uyumu',
    ],
    technicalSpecs: [
      { label: 'Profil Genişliği', value: '70 mm / 80 mm Kanat' },
      { label: 'Kilit Sistemi', value: 'Mantar Başlı / Kancalı Çok Noktalı' },
      { label: 'Menteşe Kapasitesi', value: '160 kg / 3 Adet 3D Menteşe' },
      { label: 'Eşik Tipi', value: '20 mm Alüminyum Termal Eşik' },
      { label: 'Güvenlik Sınıfı', value: 'RC2 / RC3 Uyumlu' },
      { label: 'Hava & Rüzgar Dayanımı', value: 'Sınıf 4 / Sınıf C4' },
    ],
    faq: [
      {
        q: 'Dış kapı eşiği ayak takılmasına sebep olur mu?',
        a: 'Hayır, zemine neredeyse sıfır oturan 20 mm yüksekliğinde özel alüminyum termal eşikler kullanarak hem su geçişini engelliyor hem de rahat bir geçiş sağlıyoruz.',
      },
    ],
    relatedSlugs: ['pvc-pencere-sistemleri', 'aluminyum-dograma', 'panjur-kepenk-sistemleri'],
  },
  {
    id: 'panjur-kepenk',
    slug: 'panjur-kepenk-sistemleri',
    title: 'Panjur ve Güvenlik Kepenk Sistemleri',
    category: 'Panjur',
    badge: 'Akıllı İzolasyon',
    subtitle: 'Motorlu Monoblok Panjurlar ve Otomatik Güvenlik Kepenkleri',
    shortDescription: 'Güneş ışığını filtreleyen, ısı yalıtımına ekstra katkı sağlayan ve hırsızlığa karşı koruyan motorlu panjur çözümleri.',
    longDescription:
      'O-PEN Panjur Sistemleri, pencere sistemleriyle tam entegre monoblok veya sonradan takılabilen dıştan takma kutu mimarisiyle sunulur. Poliüretan dolgulu alüminyum lamel yapısı sayesinde kışın cam yüzeyindeki ısı kaybını %25 azaltır, yazın ise güneşin yakıcı sıcağını dışarıda bırakır. Uzaktan kumandalı veya akıllı ev sistemine uyumludur.',
    image: '/images/urunler/panjur-kepenk.jpg',
    gallery: [
      '/images/urunler/panjur-kepenk.jpg',
      '/images/galeri/galeri-4.jpg',
      '/images/hero/hero-new-5.jpg',
    ],
    features: [
      'Poliüretan köpük dolgulu ses ve ısı yalıtımlı alüminyum lameller',
      'Somfy veya Becker tüp motor güvencesiyle sessiz çalışma',
      'Monoblok (pencere üstü) veya dıştan takma kutu seçenekleri',
      'Akıllı telefon ve uzaktan kumanda ile grup kontrol imkanı',
      'Hırsızlığa karşı otomatik yaylı kilitleme mekanizması',
      'Güneş ve rüzgar sensörü entegrasyonu',
    ],
    technicalSpecs: [
      { label: 'Lamel Ölçüsü', value: '39 mm / 43 mm / 55 mm Poliüretanlı' },
      { label: 'Kutu Seçenekleri', value: '165 mm, 200 mm, 240 mm İzolasyonlu' },
      { label: 'Motor Tipi', value: 'Elektronik / Radyo Alıcılı Sessiz Motor' },
      { label: 'Rüzgar Direnci', value: 'Sınıf 3 (120 km/s rüzgara dayanıklı)' },
      { label: 'Ek Isı Yalıtım Katkısı', value: '%20 - %25 İlave Yalıtım' },
    ],
    faq: [
      {
        q: 'Elektrik kesildiğinde motorlu panjur açılabilir mi?',
        a: 'Manuel redüktörlü motor opsiyonumuz sayesinde elektrik kesintilerinde özel kol yardımıyla panjurunuzu kolayca açıp kapatabilirsiniz.',
      },
    ],
    relatedSlugs: ['pvc-pencere-sistemleri', 'aluminyum-dograma', 'kapi-sistemleri'],
  },
];

export const getProductBySlug = (slug) => {
  return products.find((item) => item.slug === slug);
};

export const getRelatedProducts = (slug) => {
  const current = getProductBySlug(slug);
  if (!current || !current.relatedSlugs) return products.slice(0, 3);
  return products.filter((p) => current.relatedSlugs.includes(p.slug));
};

export default products;
