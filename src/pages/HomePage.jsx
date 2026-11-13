import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  SunMedium,
  VolumeX,
  MousePointerClick,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Wrench,
  Ruler,
  Factory,
  Truck,
  Headphones,
} from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import Reveal from '../components/ui/Reveal';
import SEO from '../components/common/SEO';
import products from '../data/products';
import siteConfig from '../data/site';
import images from '../data/images';
import productThumbnails from '../data/productThumbnails';
import './HomePage.css';

// 1. Hero Slides
const heroSlides = [
  {
    image: images.hero[0].src,
    badge: 'Üstün Konfor & Yalıtım',
    title: 'Açık, Işık Alan, Ferah Yaşam Alanları',
    subtitle: 'Doğal gün ışığını evinize davet eden yüksek yalıtımlı PVC ve mimari alüminyum sistemleri.',
  },
  {
    image: images.hero[1].src,
    badge: 'Maksimum Enerji Tasarrufu',
    title: 'Dört Mevsim Konfor, Kusursuz Isı Yalıtımı',
    subtitle: 'A sınıfı çok odacıklı profiller ve akustik lamine cam teknolojisiyle enerji kayıplarına son verin.',
  },
  {
    image: images.hero[2].src,
    badge: 'Kurumsal Güvence',
    title: 'Modern Mimariye Açılan Sağlam Pencereler',
    subtitle: 'Konut, villa ve kurumsal projeleriniz için milimetrik imalat ve profesyonel montaj kalitesi.',
  },
];

// 4. Sayaç Verileri (Rakamlarla O-PEN)
const stats = [
  { value: '45+', label: 'Yıllık Sektör Tecrübesi', desc: '1977’den günümüze gelen ustalık' },
  { value: '18.000+', label: 'Montajı Yapılan Pencere & Kapı', desc: 'Binlerce mutlu hane ve ofis' },
  { value: '4', label: 'Ana Sistem Kategorisi', desc: 'PVC Pencere, Alüminyum, Kapı, Panjur' },
  { value: '%99.4', label: 'Müşteri Memnuniyeti', desc: 'Zamanında teslimat ve garanti' },
];

// 5. Neden O-PEN Nitelikleri (Özet 4 Temel Mühendislik Değeri)
const advantages = [
  {
    num: '01',
    icon: SunMedium,
    tag: 'Termal Verimlilik',
    title: 'Üstün Isı & Enerji Yalıtımı',
    desc: 'Çok odacıklı profil gövdesi ve sinerji cam mimarisiyle kışın soğuğu, yazın yakıcı sıcağı keserek %40 enerji tasarrufu sağlar.',
  },
  {
    num: '02',
    icon: VolumeX,
    tag: 'Akustik Konfor',
    title: '42 dB Akustik Ses Bariyeri',
    desc: 'Çok kademeli EPDM fitil geometrisi ve lamine cam kombinasyonu ile şehir karmaşasını mekânınızın dışında tutar.',
  },
  {
    num: '03',
    icon: ShieldCheck,
    tag: 'Maksimum Güvenlik',
    title: 'Çelik Gövde & Mantar Kilit',
    desc: 'Profillerin içini boydan boya saran galvanizli çelik destek sacları ve mantar başlı kilit pimleriyle hırsızlığa geçit vermez.',
  },
  {
    num: '04',
    icon: Wrench,
    tag: 'Mühendislik Garantisi',
    title: 'Milimetrik Montaj & Garanti',
    desc: 'Sertifikalı kendi montaj ustalarımızla lazer terazi kontrolünde, sıfır hava kaçaksız montaj ve 10 yıl kurumsal güvence.',
  },
];

// 6. Çalışma Sürecimiz
const workflowSteps = [
  { num: '01', title: 'Ücretsiz Keşif', desc: 'Mekânınızı yerinde ziyaret edip ihtiyaçlarınızı dinliyoruz.', icon: Ruler },
  { num: '02', title: 'Milimetrik Ölçü', desc: 'Lazer ölçüm cihazlarıyla hatasız net kasa ölçüsü alıyoruz.', icon: Wrench },
  { num: '03', title: 'Fabrika Üretimi', desc: 'CNC makinelerinde A sınıfı profillerle imalatı tamamlıyoruz.', icon: Factory },
  { num: '04', title: 'Temiz Montaj', desc: 'Eski doğramaları söküp yeni sisteminizi tozsuz-titiz monte ediyoruz.', icon: Truck },
  { num: '05', title: 'Teknik Servis', desc: 'Montaj sonrası ayar kontrolleri ve periyodik servis güvencesi sunuyoruz.', icon: Headphones },
];

// Tarihçe / Zaman Çizelgesi (nurettin-tutak köklerinden pen markasına evrilen geçmiş)
const historyTimeline = [
  {
    year: '1977',
    title: 'Kuruluş & Demir Doğrama',
    desc: 'Temellerimiz teknik demir doğrama ve yapı atölyesi olarak atıldı.',
  },
  {
    year: '1990',
    title: 'PVC & Alüminyuma Geçiş',
    desc: 'Gelişen teknolojiyle pencere-kapı ve hafif metal mimari sistemleri bünyemize katıldı.',
  },
  {
    year: '1992',
    title: 'Şirketleşme & Tesis Yatırımı',
    desc: 'Kurumsal yapı oluşturuldu, profil işleme kapasitesi ve atölye alanı genişletildi.',
  },
  {
    year: '2005',
    title: 'Modern Üretim Parkuru',
    desc: 'Otomasyon ve CNC kontrollü profil kaynak-kesim hatlarıyla seri üretim kalitesi yakalandı.',
  },
  {
    year: 'Bugün',
    title: 'O-PEN Marka Tescili',
    desc: 'PVC, alüminyum sürme, kapı ve panjur sistemlerinde yenilikçi kurumsal kimlik.',
  },
];

// Tedarikçi / Sistem Partnerleri
const partners = [
  'A Sınıfı PVC Profil Sistemleri',
  'Isı Yalıtımlı Alüminyum Mimarisi',
  'Roto & Siegenia Donanım Mekanizmaları',
  'Şişecam Isıcam Konfor & Sinerji',
  'Somfy Akıllı Motor Sistemleri',
];

export const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  // Otomatik hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Schema.org Organization & WebSite JSON-LD
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.domain}/#organization`,
        name: siteConfig.legalName,
        url: siteConfig.domain,
        logo: `${siteConfig.domain}/brand/logo.png`,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: siteConfig.phone,
            contactType: 'customer service',
            areaServed: 'TR',
            availableLanguage: ['Turkish'],
          },
        ],
        sameAs: [
          siteConfig.social.instagram,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.domain}/#website`,
        url: siteConfig.domain,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteConfig.domain}/#organization`,
        },
        inLanguage: 'tr-TR',
      },
    ],
  };

  return (
    <div className="open-home">
      <SEO
        title="PVC ve Alüminyum Pencere-Kapı Sistemleri"
        description="O-PEN - PVC ve alüminyum pencere, sürme kapı, panjur ve sineklik sistemlerinde üstün ısı-ses yalıtımı ve profesyonel montaj güvencesi."
        canonicalUrl=""
        structuredData={homeJsonLd}
      />

      {/* =========================================================================
          1. TAM EKRAN HERO SLIDER (Turuncu - Siyah Gradient Overlay)
          ========================================================================= */}
      <section className="open-hero" aria-label="Ana Karşılama">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`open-hero__slide ${idx === activeSlide ? 'open-hero__slide--active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="open-hero__overlay" />
            <Container className="open-hero__content">
              <div className="open-hero__inner">
                <div className="open-hero__badge">
                  <span>{slide.badge}</span>
                </div>
                <h1 className="open-hero__title">{slide.title}</h1>
                <p className="open-hero__subtitle">{slide.subtitle}</p>
                <div className="open-hero__actions">
                  <Button to="/urunler" variant="primary" size="lg" icon={ArrowRight}>
                    Ürünlerimizi Keşfedin
                  </Button>
                  <Button to="/teklif-al" variant="outline" size="lg" className="open-hero__btn-secondary">
                    Ücretsiz Keşif Talebi
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        ))}

        {/* Hero Kontrolleri */}
        <button className="open-hero__nav open-hero__nav--prev" onClick={prevSlide} aria-label="Önceki Slayt">
          <ChevronLeft size={24} />
        </button>
        <button className="open-hero__nav open-hero__nav--next" onClick={nextSlide} aria-label="Sonraki Slayt">
          <ChevronRight size={24} />
        </button>

        {/* Göstergeler (Dots) */}
        <div className="open-hero__dots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`open-hero__dot ${idx === activeSlide ? 'open-hero__dot--active' : ''}`}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Slayt ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          2. FERAH YAŞAM ANLAYIŞI (Ürün Kalitesi & İnteraktif Pencere Deneyimi)
          ========================================================================= */}
      <section className="open-section open-concept-section">
        <Container>
          <div className="open-concept-grid">
            <Reveal direction="left">
              <div className="open-concept-text">
                <span className="open-concept-badge">Ferah Yaşam Alanları</span>
                <h2 className="open-concept-title">
                  Aydınlık, Konforlu ve <span className="open-text-orange">Güvenli Mekânlar</span>
                </h2>
                <div className="open-concept-line" />
                <p className="open-concept-lead">
                  Pencere sadece odayı dış dünyadan ayıran bir cam bölme değildir. Bir mekânın nefes almasını sağlayan,
                  günün ilk ışığını içeri davet eden ve sevdiklerinizi güvende tutan en can alıcı mimari detaydır.
                </p>
                <p className="open-concept-p">
                  <strong>O-PEN</strong>, yaşam alanlarınıza ferahlık, konfor ve yüksek enerji tasarrufu kazandırmak üzere üretir.
                  Ağır ve hantal doğramaların aksine; modern profil estetiği, yüksek gün ışığı geçirgenliği ve sızdırmazlıkta
                  taviz vermeyen bir mühendislik sunuyoruz.
                </p>
              </div>
            </Reveal>

            {/* Sağ: İnteraktif Pencere Açılma Efekti (CSS Animasyonlu) */}
            <Reveal direction="right" delay={0.2}>
              <div className="open-interactive-window-box">
                <div
                  className={`open-window-frame ${isWindowOpen ? 'open-window-frame--open' : ''}`}
                  onClick={() => setIsWindowOpen(!isWindowOpen)}
                  title="Pencereyi açıp kapatmak için tıklayın"
                >
                  <div
                    className="open-window-scenery"
                    style={{ backgroundImage: `url(${images.showcase.concept.src})` }}
                  >
                    <div className="open-window-scenery__tag">
                      <span>{isWindowOpen ? 'Pencere Açık: Temiz Hava & Işık' : 'Pencereyi Açmak İçin Dokunun'}</span>
                    </div>
                  </div>
                  {/* Sol Kanat */}
                  <div className="open-window-sash open-window-sash--left">
                    <div className="open-window-glass" />
                  </div>
                  {/* Sağ Kanat */}
                  <div className="open-window-sash open-window-sash--right">
                    <div className="open-window-glass" />
                    <div className="open-window-handle" />
                  </div>
                </div>
                <div className="open-interactive-hint">
                  <MousePointerClick size={16} color="var(--color-primary)" />
                  <span>İnteraktif: <strong>{isWindowOpen ? 'Kapatmak' : 'Açmak'}</strong> için çerçeveye tıklayın</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. ÜRÜN KATEGORİLERİ GRID'İ (Görselli Kartlar & Turuncu Overlay)
          ========================================================================= */}
      <section className="open-section open-products-section">
        <Container>
          <SectionTitle
            badge="ÇÖZÜM YELPAZESİ"
            title="Ürün Gruplarımız"
            subtitle="Konut, villa ve ticari yapılar için yüksek standartlı PVC ve Alüminyum sistemler."
          />

          <div className="open-products-grid">
            {products.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.08}>
                <Link to={`/urunler/${item.slug}`} className="open-product-card">
                  <div className="open-product-card__img-box">
                    <img
                      src={productThumbnails[item.id] || item.image}
                      alt={item.imageAlt || item.title}
                      className="open-product-card__img"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                    <div className="open-product-card__overlay">
                      <span className="open-product-card__overlay-btn">
                        <span>İncele</span>
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                  <div className="open-product-card__content">
                    <span className="open-product-card__category">{item.category}</span>
                    <h3 className="open-product-card__title">{item.title}</h3>
                    <p className="open-product-card__desc">{item.subtitle || item.description}</p>
                    <span className="open-product-card__link">
                      <span>Sistem Detayları</span>
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. RAKAMLARLA O-PEN (Sayaç Animasyonu Bantı)
          ========================================================================= */}
      <section className="open-stats-section">
        <Container>
          <div className="open-stats-grid">
            {stats.map((st, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="open-stat-box">
                  <div className="open-stat-value">{st.value}</div>
                  <div className="open-stat-label">{st.label}</div>
                  <div className="open-stat-desc">{st.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. NEDEN O-PEN (İkonlu Kurumsal Güç - Modern Asimetrik Split Görsel Layout)
          ========================================================================= */}
      <section className="open-section open-advantages-section">
        <Container>
          <div className="open-split-section">
            {/* SOL: Mimari Görsel Kutu (Karanlık Katman, Başlık & Rozetler) */}
            <Reveal direction="left" className="open-split-visual-col">
              <div className="open-split-hero-card">
                <img
                  src="/images/genel/about-showcase.jpg"
                  alt="O-PEN Pencere ve Kapı Mühendislik Standartları"
                  className="open-split-hero-img"
                  loading="lazy"
                />
                <div className="open-split-hero-overlay">
                  <div className="open-split-hero-badge">MÜHENDİSLİK & GÜVEN</div>
                  <h3 className="open-split-hero-title">
                    Neden O-PEN Pencere Sistemleri?
                  </h3>
                  <p className="open-split-hero-lead">
                    Yüksek standartlı profil alaşımları, üstün conta kalitesi ve profesyonel montaj mimarisi.
                  </p>
                  <div className="open-split-hero-footer">
                    <div className="open-split-hero-stat">
                      <strong>%100</strong>
                      <span>Orijinal Profil</span>
                    </div>
                    <div className="open-split-hero-stat">
                      <strong>10 Yıl</strong>
                      <span>Sistem Garantisi</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* SAĞ: Orijinal Modern Mühendislik Kartları (2x2 Grid) */}
            <div className="open-split-content-col">
              <div className="open-features-modern-grid">
                {advantages.map((adv, idx) => {
                  const IconComp = adv.icon;
                  return (
                    <Reveal key={idx} delay={idx * 0.08}>
                      <div className="open-modern-adv-card">
                        <div className="open-modern-adv-header">
                          <div className="open-modern-adv-icon">
                            <IconComp size={20} />
                          </div>
                          <span className="open-modern-adv-num">{adv.num}</span>
                        </div>
                        <span className="open-modern-adv-tag">{adv.tag}</span>
                        <h4 className="open-modern-adv-title">{adv.title}</h4>
                        <p className="open-modern-adv-desc">{adv.desc}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. ÇALIŞMA SÜRECİMİZ (Modern Asimetrik Split Görsel Layout)
          ========================================================================= */}
      <section className="open-section open-workflow-section">
        <Container>
          <div className="open-split-section open-split-section--reverse">
            {/* SAĞ (Görsel SOLA geçecek flex-reverse): Atölye / Fabrika Üretim Görseli */}
            <Reveal direction="right" className="open-split-visual-col">
              <div className="open-split-hero-card">
                <img
                  src="/images/genel/factory-showroom.jpg"
                  alt="O-PEN CNC Üretim ve Montaj Süreci"
                  className="open-split-hero-img"
                  loading="lazy"
                />
                <div className="open-split-hero-overlay">
                  <div className="open-split-hero-badge">ŞEFFAF İŞ AKIŞI</div>
                  <h3 className="open-split-hero-title">
                    Nasıl Çalışıyoruz?
                  </h3>
                  <p className="open-split-hero-lead">
                    İlk telefonunuzdan anahtar teslim montaja kadar şeffaf, hızlı ve hatasız iş akışı.
                  </p>
                  <div className="open-split-hero-footer">
                    <div className="open-split-hero-stat">
                      <strong>5 Adım</strong>
                      <span>Hatasız Süreç</span>
                    </div>
                    <div className="open-split-hero-stat">
                      <strong>24 Saat</strong>
                      <span>Hızlı Keşif & Teklif</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* SOL (Liste SAĞA geçecek): Minimalist Numaralı Süreç Listesi */}
            <div className="open-split-content-col">
              <div className="open-workflow-clean-list">
                {workflowSteps.map((step, idx) => {
                  const StepIcon = step.icon;
                  return (
                    <Reveal key={idx} delay={idx * 0.08}>
                      <div className="open-clean-step-row">
                        <div className="open-clean-step-num-col">
                          <span className="open-clean-step-num">{step.num}</span>
                          <span className="open-clean-step-line" />
                        </div>
                        <div className="open-clean-step-body">
                          <div className="open-clean-step-header">
                            <StepIcon size={18} className="open-clean-step-icon" />
                            <h4 className="open-clean-step-title">{step.title}</h4>
                          </div>
                          <p className="open-clean-step-desc">{step.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          TARİHÇE / ZAMAN ÇİZELGESİ (nurettin-tutak köklerinden O-PEN markasına)
          ========================================================================= */}
      <section className="open-section open-history-section">
        <Container>
          <SectionTitle
            badge="KÖKLÜ GEÇMİŞİMİZ"
            title="Ustalık ve Şirketleşme Yolculuğumuz"
            subtitle="1977 yılında atılan sağlam temellerimiz bugün O-PEN inovasyonu ile geleceğe pencereler açıyor."
            dark
          />

          <div className="open-history-timeline">
            <div className="open-history-line" />
            {historyTimeline.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className={`open-history-item ${idx % 2 === 0 ? 'open-history-item--left' : 'open-history-item--right'}`}>
                  <div className="open-history-badge">{item.year}</div>
                  <div className="open-history-card">
                    <h3 className="open-history-title">{item.title}</h3>
                    <p className="open-history-desc">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. GALERİ ÖNİZLEME & REFERANSLAR & MÜŞTERİ YORUMLARI & CTA
          ========================================================================= */}
      <section className="open-section open-preview-section">
        <Container>
          <div className="open-preview-header">
            <div>
              <span className="open-section-header__badge">UYGULAMALARIMIZ</span>
              <h2 className="open-section-header__title">İşçilik ve Detay Kalitemiz</h2>
            </div>
            <Button to="/galeri" variant="outline" size="md" icon={ArrowRight}>
              Tüm Galeriyi İncele
            </Button>
          </div>

          <div className="open-preview-grid">
            {images.gallery.slice(0, 6).map((item) => (
              <Reveal key={item.id} delay={item.id * 0.05}>
                <Link to="/galeri" className="open-preview-card">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="open-preview-img"
                    loading="lazy"
                    width="400"
                    height="280"
                  />
                  <div className="open-preview-overlay">
                    <span className="open-preview-tag">{item.cat}</span>
                    <h4 className="open-preview-title">{item.title}</h4>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Sistem / Donanım Partnerleri */}
          <div className="open-partners-bar">
            <span className="open-partners-title">Kalite Standartlarımız & Sistem Partnerlerimiz:</span>
            <div className="open-partners-list">
              {partners.map((p, i) => (
                <div key={i} className="open-partner-chip">
                  <CheckCircle2 size={16} color="var(--color-primary)" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Son CTA Şeridi */}
      <section className="open-final-cta-band">
        <Container className="open-final-cta-inner">
          <div className="open-final-cta-content">
            <h2 className="open-final-cta-title">
              Projeniz İçin Doğru Pencereyi Beraber Seçelim
            </h2>
            <p className="open-final-cta-desc">
              Hemen ücretsiz keşif randevusu oluşturun; mühendis ve usta kadromuzla yanınızda olalım.
            </p>
          </div>
          <div className="open-final-cta-actions">
            <Button to="/teklif-al" variant="primary" size="lg" icon={ArrowRight}>
              Ücretsiz Keşif & Teklif Al
            </Button>
            <a
              href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="open-btn open-btn--dark open-btn--lg"
            >
              <span>WhatsApp'tan Yazın</span>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
