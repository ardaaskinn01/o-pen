import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  SunMedium,
  VolumeX,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Wrench,
  Ruler,
  Factory,
  Truck,
  Headphones,
  Award,
  Zap,
  Star,
  Quote,
} from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Reveal from '../components/ui/Reveal';
import SEO from '../components/common/SEO';
import products from '../data/products';
import siteConfig from '../data/site';
import images from '../data/images';
import './HomePage.css';

// 1. Hero Slides
const heroSlides = [
  {
    image: images.hero[0].src,
    badge: 'o-pen window yaklaşımı',
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
  { value: '6', label: 'Ana Sistem Kategorisi', desc: 'PVC, Alüminyum, Cam Balkon, Panjur' },
  { value: '%99.4', label: 'Müşteri Memnuniyeti', desc: 'Zamanında teslimat ve garanti' },
];

// 5. Neden O-PEN Nitelikleri
const advantages = [
  {
    icon: SunMedium,
    title: 'Üstün Isı İzolasyonu',
    desc: 'Çok odacıklı profiller ve sinerji cam kombinasyonuyla kışın ısıyı içeride, yazın sıcağı dışarıda tutar.',
  },
  {
    icon: VolumeX,
    title: 'Akustik Ses Yalıtımı',
    desc: 'Şehir karmaşasını ve sokak gürültüsünü 42 dB’ye kadar filtreleyen yüksek sızdırmaz EPDM conta yapısı.',
  },
  {
    icon: ShieldCheck,
    title: 'İleri Seviye Güvenlik',
    desc: 'Mantar başlı kilit donanımları ve gövde içi çelik destek saçları ile hırsızlığa karşı tam koruma.',
  },
  {
    icon: Zap,
    title: 'Enerji Tasarrufu',
    desc: 'Isınma ve soğutma giderlerinde %40’a varan tasarruf sağlayarak bütçenizi ve doğayı korur.',
  },
  {
    icon: Wrench,
    title: 'Profesyonel Montaj',
    desc: 'Kendi bünyemizdeki sertifikalı montaj ekiplerimizle sıfır hava kaçağı ve milimetrik terazi garantisi.',
  },
  {
    icon: Award,
    title: 'Uzun Ömürlü Garanti',
    desc: 'Solmayan, sararmayan UV dayanımlı yüzey kalitesi ve aksam mekanizmalarında uzun vadeli kurumsal garanti.',
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
    desc: '"o-pen window" felsefesiyle PVC, alüminyum sürme, cam balkon ve panjurda yenilikçi kurumsal kimlik.',
  },
];

// Müşteri Yorumları
const testimonials = [
  {
    name: 'Serdar B.',
    loc: 'Urla / Villa Projesi',
    text: 'Salonumuzdaki eski sürgülü doğramaları O-PEN alüminyum sürme ve temperli cam ile yeniledik. Evin ışığı ve ferahlığı inanılmaz değişti, rüzgarda tek bir ses dahi yok.',
    stars: 5,
  },
  {
    name: 'Meltem K.',
    loc: 'Karşıyaka / Konut Dairesi',
    text: 'Caddedeki araç trafiği yüzünden pencerelerimizi değiştirdik. Akustik camlı PVC pencereler sayesinde evimiz ilk defa sessizliğe kavuştu. Montaj ekibi çok temiz çalıştı.',
    stars: 5,
  },
  {
    name: 'Hakan Y.',
    loc: 'Çeşme / Yazlık Balkon Kapatma',
    text: 'Katlanır cam balkon ve motorlu panjur sistemlerini eksiksiz 4 günde teslim ettiler. İşçilikleri ve iletişimleri gerçekten çok kurumsal, teşekkür ediyorum.',
    stars: 5,
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
          siteConfig.social.facebook,
          siteConfig.social.linkedin,
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
        description="O-PEN - PVC ve alüminyum pencere, sürme kapı, cam balkon ve motorlu panjur sistemlerinde üstün ısı-ses yalıtımı ve profesyonel montaj güvencesi."
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
                  <Sparkles size={14} className="open-hero__badge-icon" />
                  <span>{slide.badge}</span>
                </div>
                <h1 className="open-hero__title">{slide.title}</h1>
                <p className="open-hero__subtitle">{slide.subtitle}</p>
                <div className="open-hero__actions">
                  <Button to="/urunler" variant="primary" size="lg" icon={ArrowRight}>
                    Ürünlerimizi Keşfedin
                  </Button>
                  <Button to="/iletisim" variant="outline" size="lg" className="open-hero__btn-secondary">
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
          2. "o-pen window" YAKLAŞIMI (Marka Hikayesi & İnteraktif Pencere Efekti)
          ========================================================================= */}
      <section className="open-section open-concept-section">
        <Container>
          <div className="open-concept-grid">
            <Reveal direction="left">
              <div className="open-concept-text">
                <span className="open-concept-badge">Markamızın Doğuşu</span>
                <h2 className="open-concept-title">
                  Neden <span className="open-text-orange">"o-pen window"</span> Yaklaşımı?
                </h2>
                <div className="open-concept-line" />
                <p className="open-concept-lead">
                  Pencere sadece odayı dış dünyadan ayıran bir cam bölme değildir. Bir mekânın nefes almasını sağlayan,
                  günün ilk ışığını içeri davet eden ve sevdiklerinizi güvende tutan en can alıcı mimari detaydır.
                </p>
                <p className="open-concept-p">
                  <strong>O-PEN</strong> ismi, İngilizce <em>"open window" (açık pencere)</em> kavramından ve
                  ferah, aydınlık yaşam alanları tasarlama tutkumuzdan doğmuştur. Ağır, karanlık ve hantal doğramaların
                  aksine; ince profil estetiği, yüksek gün ışığı geçirgenliği ve sızdırmazlıkta taviz vermeyen bir mühendislik sunuyoruz.
                </p>

                {/* 3 Değer Kartı */}
                <div className="open-concept-cards">
                  <div className="open-concept-mini-card">
                    <SunMedium size={22} className="open-concept-mini-icon" />
                    <div>
                      <h4>Aydınlık & Ferahlık</h4>
                      <p>Maksimum cam alanı ile daha çok doğal gün ışığı.</p>
                    </div>
                  </div>
                  <div className="open-concept-mini-card">
                    <ShieldCheck size={22} className="open-concept-mini-icon" />
                    <div>
                      <h4>Güven & Şeffaflık</h4>
                      <p>Hırsızlığa dayanıklı çelik kilitler ve dürüst işçilik.</p>
                    </div>
                  </div>
                  <div className="open-concept-mini-card">
                    <VolumeX size={22} className="open-concept-mini-icon" />
                    <div>
                      <h4>Sessiz & Huzurlu</h4>
                      <p>Dış dünyanın gürültüsünü unutturan akustik yalıtım.</p>
                    </div>
                  </div>
                </div>
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
                  <Sparkles size={16} color="var(--color-primary)" />
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
            subtitle="Konut, villa, kış bahçesi ve ticari yapılar için yüksek standartlı PVC ve Alüminyum sistemler."
          />

          <div className="open-products-grid">
            {products.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.08}>
                <Link to={`/urunler/${item.slug}`} className="open-product-card">
                  <div className="open-product-card__img-box">
                    <img
                      src={item.image}
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
          5. NEDEN O-PEN (İkonlu Kurumsal Güç)
          ========================================================================= */}
      <section className="open-section open-advantages-section">
        <Container>
          <SectionTitle
            badge="KURUMSAL AVANTAJLARIMIZ"
            title="Neden O-PEN Pencere Sistemleri?"
            subtitle="Yüksek standartlı profil alaşımları, üstün conta kalitesi ve profesyonel montaj mimarisi."
          />

          <div className="open-advantages-grid">
            {advantages.map((adv, idx) => {
              const IconComp = adv.icon;
              return (
                <Reveal key={idx} delay={idx * 0.08}>
                  <Card hoverEffect borderTopOrange className="open-advantage-card">
                    <div className="open-advantage-icon-box">
                      <IconComp size={28} />
                    </div>
                    <h3 className="open-advantage-title">{adv.title}</h3>
                    <p className="open-advantage-desc">{adv.desc}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. ÇALIŞMA SÜRECİMİZ (Adım Çizgisi)
          ========================================================================= */}
      <section className="open-section open-workflow-section">
        <Container>
          <SectionTitle
            badge="ADIM ADIM HİZMET"
            title="Nasıl Çalışıyoruz?"
            subtitle="İlk telefonunuzdan anahtar teslim montaja kadar şeffaf, hızlı ve hatasız iş akışı."
          />

          <div className="open-workflow-timeline">
            {workflowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="open-workflow-step">
                    <div className="open-workflow-num">{step.num}</div>
                    <div className="open-workflow-icon-box">
                      <StepIcon size={24} />
                    </div>
                    <h4 className="open-workflow-title">{step.title}</h4>
                    <p className="open-workflow-desc">{step.desc}</p>
                  </div>
                </Reveal>
              );
            })}
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

          {/* Müşteri Yorumları */}
          <div className="open-testimonials-area">
            <SectionTitle
              badge="MÜŞTERİ DENEYİMLERİ"
              title="Kullanıcılarımız Ne Diyor?"
              subtitle="Montajını tamamladığımız ev ve projelerden gerçek kullanıcı geri bildirimleri."
            />
            <div className="open-testimonials-grid">
              {testimonials.map((t, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <Card hoverEffect className="open-testimonial-card">
                    <Quote size={28} className="open-testimonial-quote" />
                    <div className="open-testimonial-stars">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} size={16} fill="#FF6A00" color="#FF6A00" />
                      ))}
                    </div>
                    <p className="open-testimonial-text">"{t.text}"</p>
                    <div className="open-testimonial-author">
                      <div className="open-testimonial-name">{t.name}</div>
                      <div className="open-testimonial-loc">{t.loc}</div>
                    </div>
                  </Card>
                </Reveal>
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
            <Button to="/iletisim" variant="primary" size="lg" icon={ArrowRight}>
              Ücretsiz Keşif Al
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
