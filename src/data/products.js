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
      'O-PEN PVC Pencere Sistemleri, zorlu iklim koşullarında dahi maksimum enerji tasarrufu ve ses konforu sunmak üzere ileri teknolojiyle üretilmektedir. 70 mm, 75 mm, 80 mm ve 85 mm profil genişliği opsiyonları; 5, 6 ve 7 odacıklı gövde geometrisi ve EPDM conta sızdırmazlık mimarisiyle yapılarınıza kusursuz yalıtım kazandırır. Dış ortam gürültüsünü 42 dB seviyesine kadar filtrelerken, geniş cam açıklıkları ile iç mekânlarınıza ferahlık ve maksimum doğal gün ışığı sağlar.',
    image: '/images/urunler/pvc-pencere.jpg',
    gallery: [
      '/images/urunler/pvc-pencere.jpg',
      '/images/galeri/galeri-1.jpg',
      '/images/galeri/galeri-5.jpg',
    ],
    features: [
      '70 mm - 85 mm profil genişliği ve 5-7 odacıklı gövde yapısı',
      'A sınıfı et kalınlığı (DIN EN 12608 normlarına uygun yüksek mukavemet)',
      'EPDM kauçuk çift ve kendinden 3. orta conta sızdırmazlık sistemi',
      'Çift açılım, vasistas, paralel sürme ve Hebeschiebe mekanizma seçenekleri',
      'Solmayan, sararmayan UV dayanımlı antistatik pürüzsüz yüzey kalitesi',
      'Hırsızlığa karşı mantar başlı çelik emniyetli kilitleme donanımları',
    ],
    series: [
      {
        name: 'O-PEN 85 Ultra Seri',
        tag: 'Pasif Ev Standardı & Maksimum Yalıtım',
        specs: '85 mm Kasa Genişliği • 7 Odacıklı • 3 Contalı Sistem • Uf: 0.98 W/m²K',
        desc: 'Ekstrem iklim koşulları ve villa projeleri için tasarlanan en üst segment profilimiz. Üçlü cam kombinasyonuyla ısı kayıplarını sıfıra yaklaştırır.',
      },
      {
        name: 'O-PEN 80 Elegance Seri',
        tag: 'Yüksek Rüzgar Dayanımı & Statik Güç',
        specs: '80 mm Kasa Genişliği • 6 Odacıklı • 3. Orta Conta • Uf: 1.1 W/m²K',
        desc: 'Yüksek katlı yapılar ve sert rüzgar yükü alan cepheler için entegre orta contası ve güçlü çelik takviyesiyle benzersiz akustik ve hava sızdırmazlığı sunar.',
      },
      {
        name: 'O-PEN 75 Optimum Seri',
        tag: 'Lokomotif Çözüm & Dengeli Performans',
        specs: '75 mm Kasa Genişliği • 6 Odacıklı • Çift/Üç Conta Opsiyonu • Uf: 1.2 W/m²K',
        desc: 'Modern konut, site ve toplu konut projelerinin en çok tercih edilen estetik ve yüksek verimli doğrama serisidir.',
      },
      {
        name: 'O-PEN 70 Standart Seri',
        tag: 'Ekonomik & Güvenilir Kalite',
        specs: '70 mm Kasa Genişliği • 5 Odacıklı • Çift EPDM Conta • Uf: 1.3 W/m²K',
        desc: 'Klasik konut yenilemeleri için dayanıklı, estetik ve bütçe dostu A sınıfı pencere sistemi.',
      },
      {
        name: 'O-PEN Panoramik Sürme & Hebeschiebe',
        tag: 'Geniş Açıklıklar & Konforlu Geçiş',
        specs: '300 kg Kanat Taşıma • 240 cm Kanat Genişliği • EPDM Baskı Contası',
        desc: 'Geniş bahçe, teras ve balkon çıkışlarında ağır kanatları parmak ucuyla zahmetsizce kaydırma imkânı sunar, hava ve su geçirmezliği tam sağlar.',
      },
    ],
    technicalSpecs: [
      { label: 'Profil Genişliği', value: '70 mm, 75 mm, 80 mm ve 85 mm Seri Seçenekleri' },
      { label: 'Odacık Sayısı', value: '5, 6 ve 7 Odacıklı Gelişmiş Geometri' },
      { label: 'Conta Mimarisi', value: '2 ve 3 Contalı (Kendinden EPDM Orta Contalı)' },
      { label: 'Isı İletim Katsayısı (Uf)', value: '0.98 - 1.2 W/m²K (A Sınıfı Yalıtım)' },
      { label: 'Ses Yalıtım Değeri', value: '42 dB (Akustik Lamine Cam ile)' },
      { label: 'Cam Kalınlık Uyumu', value: '24 mm, 32 mm, 40 mm, 44 mm (Çift ve Üçlü Cam)' },
      { label: 'Hava Geçirgenliği', value: 'Sınıf 4 (EN 12207 - En Üst Düzey)' },
      { label: 'Su Sızdırmazlık', value: 'Sınıf 9A / E1050 (EN 12208)' },
      { label: 'Rüzgar Yükü Dayanımı', value: 'Sınıf C5 / B5 (EN 12210)' },
    ],
    lambriSection: {
      badge: 'TAMAMLAYICI YALITIM & ESTETİK',
      title: 'Pervaz, Kasa İzolasyon ve PVC Lambri Sistemleri',
      description:
        'Pencere ve kapı montajlarında duvar ile doğrama birleşim alanlarında ısı köprülerini kesen, nem ve su sızıntısını engelleyen; aynı zamanda tavan, saçak altı ve balkon kaplamalarında dekoratif yalıtım sağlayan fabrikasyon PVC lambri ve açılı pervaz profillerimiz.',
      items: [
        {
          title: 'Meşe Ahşap Desenli PVC Lambri',
          tag: 'Doğal Ahşap Dokusu',
          desc: 'Doğal meşe hare desenli, solmayan UV dayanımlı lamine kaplama. Tavan, sundurma ve duvar dekorasyonunda neme tam dirençli.',
          thumb: '/images/lambri/optimized/thumb-lambri-mese-ahsap.jpg',
          full: '/images/lambri/optimized/lambri-mese-ahsap.jpg',
        },
        {
          title: 'Parlak Beyaz Odacıklı Lambri',
          tag: 'Maksimum Hijyen & Ferahlık',
          desc: 'Antibakteriyel pürüzsüz yüzey, kolay temizlenebilir çift cidarlı petek odacık geometrisiyle yüksek ses ve ısı yalıtımı.',
          thumb: '/images/lambri/optimized/thumb-lambri-parlak-beyaz.jpg',
          full: '/images/lambri/optimized/lambri-parlak-beyaz.jpg',
        },
        {
          title: 'Açık Çam Desenli Lambri',
          tag: 'Modern İskandinav Tarzı',
          desc: 'Açık ton çam damar desenli estetik panel. Balkon, teras ve iç mekân saçak altı kaplamaları için hafif ve dayanıklı yapı.',
          thumb: '/images/lambri/optimized/thumb-lambri-cam-ahsap.jpg',
          full: '/images/lambri/optimized/lambri-cam-ahsap.jpg',
        },
        {
          title: 'Dekoratif Çift Çizgili Lambri',
          tag: 'Fugalı Mimari Tasarım',
          desc: 'Derin fuga çizgisiyle tavan ve duvarlara derinlik kazandıran, gizli vidalama tırnağı sayesinde montaj izi bırakmayan sistem.',
          thumb: '/images/lambri/optimized/thumb-lambri-cizgili-beyaz.jpg',
          full: '/images/lambri/optimized/lambri-cizgili-beyaz.jpg',
        },
        {
          title: 'Antrasit Gri Açılı Dış Köşe Profili',
          tag: '90° Dönüş & Pervaz Çıtası',
          desc: 'Antrasit pencere kasaları ve lambri bitiş noktaları için çift taraflı odacıklı, darbelere dirençli estetik dış köşe profili.',
          thumb: '/images/lambri/optimized/thumb-profil-antrasit-kose.jpg',
          full: '/images/lambri/optimized/profil-antrasit-kose.jpg',
        },
        {
          title: 'Ahşap Desenli L Pervaz & Köşe Çıtası',
          tag: 'Kasa Birleşim & Bitiş Çözümü',
          desc: 'Doğrama ile sıva arasındaki genleşme boşluklarını ve ısı köprülerini kapatan, su ve hava kaçaklarını kesen L pervaz.',
          thumb: '/images/lambri/optimized/thumb-profil-ahsap-kose.jpg',
          full: '/images/lambri/optimized/profil-ahsap-kose.jpg',
        },
        {
          title: 'Yıldızlı / Hologram Desenli Lambri',
          tag: 'Dekoratif Özel Seri',
          desc: 'Işığa göre renk değiştiren özel yıldız motifli tavan kaplama lambrisi. Banyo, mutfak ve koridor tavanları için şık çözüm.',
          thumb: '/images/lambri/optimized/thumb-lambri-yildizli-hologram.jpg',
          full: '/images/lambri/optimized/lambri-yildizli-hologram.jpg',
        },
        {
          title: 'Beyaz Açılı Pervaz & Bitiş Profili',
          tag: 'Standart Doğrama Pervazı',
          desc: 'Pencere ve kapı kanat etrafında kusursuz düzgünlük sağlayan, silikon gerektirmeyen pratik geçmeli montaj profili.',
          thumb: '/images/lambri/optimized/thumb-profil-beyaz-kose.jpg',
          full: '/images/lambri/optimized/profil-beyaz-kose.jpg',
        },
      ],
      features: [
        'Suya, neme, rutubete ve buhara karşı %100 dayanıklı yapı (çürümez, kabarmaz)',
        'B1 sınıfı alev geciktirici ve alevi iletmeyen güvenli PVC hammadde',
        'Gizli vidalama ve lamba-zıvana geçme sistemiyle vidasız, pürüzsüz yüzey',
        'Zaman içinde boya, vernik veya bakım gerektirmeyen UV dayanımlı kaplama',
        'Gediz OSB fabrikamızda standart ve projeye özel boylarda seri üretim',
      ],
    },
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
    lambriSection: {
      badge: 'TAMAMLAYICI KAPI PROFİLLERİ & YALITIM',
      title: 'Kapı Çevresi Pervaz, Kasa İzolasyon ve PVC Lambri Sistemleri',
      description:
        'Dış ve iç kapı kasalarının duvarla birleşim noktalarında hava akımını ve su sızıntısını engelleyen geniş pervaz çıtaları, ısı yalıtımlı L köşe profilleri ve kapı üstü/yanı dekoratif PVC lambri kaplama çözümlerimiz.',
      items: [
        {
          title: 'Ahşap Desenli L Pervaz & Köşe Çıtası',
          tag: 'Kasa Birleşim & Bitiş Çözümü',
          desc: 'Kapı kasası ile duvar arasındaki boşlukları ve ısı köprülerini kapatan, hava akımını ve tozu kesen estetik L pervaz.',
          thumb: '/images/lambri/optimized/thumb-profil-ahsap-kose.jpg',
          full: '/images/lambri/optimized/profil-ahsap-kose.jpg',
        },
        {
          title: 'Antrasit Gri Açılı Dış Köşe Profili',
          tag: 'Modern Kapı Giriş Çıtası',
          desc: 'Antrasit giriş ve balkon kapıları için darbelere dayanıklı, çift cidarlı odacıklı 90° bitiş ve pervaz profili.',
          thumb: '/images/lambri/optimized/thumb-profil-antrasit-kose.jpg',
          full: '/images/lambri/optimized/profil-antrasit-kose.jpg',
        },
        {
          title: 'Meşe Ahşap Desenli PVC Lambri',
          tag: 'Giriş & Sundurma Tavanı',
          desc: 'Kapı giriş sundurmaları, veranda ve rüzgarlık alanları için suya ve neme tam dirençli ahşap desenli kaplama.',
          thumb: '/images/lambri/optimized/thumb-lambri-mese-ahsap.jpg',
          full: '/images/lambri/optimized/lambri-mese-ahsap.jpg',
        },
        {
          title: 'Beyaz Açılı Pervaz & Bitiş Profili',
          tag: 'Standart Kapı Pervazı',
          desc: 'Kapı kasası çevresinde düzgün ve temiz bir montaj çizgisi sağlayan, kire dayanıklı parlak beyaz geçmeli pervaz.',
          thumb: '/images/lambri/optimized/thumb-profil-beyaz-kose.jpg',
          full: '/images/lambri/optimized/profil-beyaz-kose.jpg',
        },
        {
          title: 'Parlak Beyaz Odacıklı Lambri',
          tag: 'Hijyenik Tavan Kaplama',
          desc: 'Giriş holleri ve ıslak hacim kapı üstü tavan kaplamaları için neme dayanıklı, kolay silinebilir odacıklı panel.',
          thumb: '/images/lambri/optimized/thumb-lambri-parlak-beyaz.jpg',
          full: '/images/lambri/optimized/lambri-parlak-beyaz.jpg',
        },
        {
          title: 'Dekoratif Çift Çizgili Lambri',
          tag: 'Fugalı Kapı Yanı Kaplama',
          desc: 'Giriş kapısı yanındaki duvar ve tavanlara modern ahşap/fuga derinliği katan gizli vidalı lamba-zıvana panel.',
          thumb: '/images/lambri/optimized/thumb-lambri-cizgili-beyaz.jpg',
          full: '/images/lambri/optimized/lambri-cizgili-beyaz.jpg',
        },
      ],
      features: [
        'Kapı kasası ile duvar arasındaki hava, rüzgar ve su sızmalarını tamamen bloke eder',
        'Kapı montaj vidalarını ve köpük izlerini gizleyerek kusursuz fabrika bitişi sunar',
        'Geniş renk ve ahşap desen opsiyonuyla kapı rengiyle tam ton uyumu',
        'Çürümez, kabarmaz, nemden ve dış hava şartlarından etkilenmez',
      ],
    },
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
