import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  SunMedium,
  Award,
  Factory,
  Quote,
  Layers,
  HeartHandshake,
  Compass,
} from 'lucide-react';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import siteConfig from '../data/site';
import images from '../data/images';
import './CorporatePage.css';

const tabs = [
  { id: 'hakkimizda', label: 'Hakkımızda', hash: '' },
  { id: 'vizyon', label: 'Vizyon & Misyon', hash: '#vizyon' },
  { id: 'neden', label: 'Neden O-PEN?', hash: '#neden' },
  { id: 'kalite', label: 'Kalite Politikası', hash: '#kalite' },
];

export const CorporatePage = () => {
  const location = useLocation();

  // URL hash değerine göre aktif sekmeyi doğrudan hesaplama
  const activeTab = location.hash === '#vizyon'
    ? 'vizyon'
    : location.hash === '#neden'
    ? 'neden'
    : location.hash === '#kalite'
    ? 'kalite'
    : 'hakkimizda';

  return (
    <div className="open-corporate-page">
      <Helmet>
        <title>Kurumsal | {siteConfig.name} Pencere & Kapı Sistemleri</title>
        <meta
          name="description"
          content="O-PEN kurumsal yapısı, 1977'den gelen ustalık geleneği, vizyon, misyon ve kalite standartları."
        />
      </Helmet>

      {/* Page Hero */}
      <PageHero
        title="Kurumsal"
        subtitle="1977'den bugüne uzanan tecrübemizle ferah, aydınlık ve dayanıklı pencereler üretiyoruz."
        badge="KÖKLÜ GEÇMİŞ & KURUMSAL GÜVEN"
        breadcrumbs={[{ label: 'Kurumsal' }]}
        backgroundImage={images.showcase.about.src}
      />

      {/* Kurumsal Sekme Navigasyonu */}
      <div className="open-corp-tabs-bar">
        <Container>
          <div className="open-corp-tabs">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={tab.hash || '/kurumsal'}
                className={`open-corp-tab ${activeTab === tab.id ? 'open-corp-tab--active' : ''}`}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* =========================================================================
          BÖLÜM 1: HAKKIMIZDA & MARKA HİKAYESİ (nurettin-tutak'tan uyarlandı)
          ========================================================================= */}
      <section id="hakkimizda" className="open-section open-corp-content-section">
        <Container>
          <div className="open-corp-story-grid">
            <Reveal direction="left">
              <div>
                <span className="open-section-header__badge">USTALIKTAN MARKAYA</span>
                <h2 className="open-corp-heading">
                  Yarım Asırlık Birikim, <span className="open-text-orange">O-PEN</span> İnovasyonuyla Buluştu
                </h2>
                <div className="open-concept-line" />

                <p className="open-corp-lead-text">
                  Kuruluşumuzun temelleri, 1977 yılında kurulan teknik demir ve metal doğrama atölyesiyle atılmıştır.
                  Yılların getirdiği ustalık ve çalışma azmi, zamanla PVC ve hafif alüminyum pencere sistemleri sektörüne
                  yönelerek bölgede öncü bir konuma yükselmiştir.
                </p>

                <p className="open-corp-text">
                  1992 yılında kurumsal kimliğimizi güçlendirmek amacıyla sanayi ve üretim yatırımları hız kazanmış;
                  modern PVC profil işleme, ısı yalıtımlı çift cam ve kapı sistemleri fabrikamız faaliyete geçmiştir.
                  Bugün ise yapı sektöründeki uzun yıllara dayanan saha tecrübemizi, tescilli markamız <strong>O-PEN</strong> çatısı
                  altında bir araya getirerek yalnızca bir pencere değil, ferah bir yaşam standardı inşa ediyoruz.
                </p>

                <div className="open-corp-quote-box">
                  <Quote size={24} className="open-corp-quote-icon" />
                  <p>
                    <strong>Kalite ve Konfor İlkemiz:</strong> Bir yapının en temel ihtiyacı içerideki havanın tazelenmesi,
                    doğal ışığın kesintisiz girmesi ve dış dünyanın gürültüsünden arınmış huzurlu bir ortamdır.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Sağ Blok Görselleri (Prompt 3 Pen & Üretim Fotoğrafları) */}
            <Reveal direction="right" delay={0.15}>
              <div className="open-corp-images-stack">
                <div className="open-corp-img-main">
                  <img
                    src={images.production[0].src}
                    alt={images.production[0].alt}
                    loading="lazy"
                    width="600"
                    height="420"
                  />
                  <div className="open-corp-img-caption">
                    <span>Modern CNC Profil İşleme Parkuru</span>
                  </div>
                </div>
                <div className="open-corp-img-secondary">
                  <img
                    src={images.production[2].src}
                    alt={images.production[2].alt}
                    loading="lazy"
                    width="320"
                    height="220"
                  />
                </div>
                <div className="open-corp-badge-experience">
                  <span className="open-corp-badge-num">45+</span>
                  <span className="open-corp-badge-txt">Yıllık Ustalık Geleneği</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          BÖLÜM 2: VİZYON, MİSYON VE DEĞERLER (nurettin-tutak'tan uyarlandı)
          ========================================================================= */}
      <section id="vizyon" className="open-section open-corp-vm-section">
        <Container>
          <SectionTitle
            badge="GELECEK PERSPEKTİFİ"
            title="Misyonumuz ve Vizyonumuz"
            subtitle="Pencere ve kapı mühendisliğinde güvenin, emeğin ve kalitenin ortak adresiyiz."
          />

          <div className="open-corp-vm-grid">
            <Reveal delay={0.1}>
              <Card borderTopOrange hoverEffect className="open-corp-vm-card">
                <div className="open-corp-vm-icon-box">
                  <Compass size={32} />
                </div>
                <h3 className="open-corp-vm-title">Misyonumuz</h3>
                <p className="open-corp-vm-desc">
                  Yarım asrı aşkın birikimimizle, yüksek ısı ve ses yalıtımlı PVC ve alüminyum pencere-kapı sistemlerini
                  en üst düzey mühendislik ve kusursuz montaj kalitesiyle sunmak. Müşterilerimizin yaşam konforunu artırırken,
                  enerji tasarrufuna katkıda bulunarak sürdürülebilir bir gelecek inşa etmek.
                </p>
                <ul className="open-corp-vm-list">
                  <li><CheckCircle2 size={16} color="var(--color-primary)" /><span>Sıfır hata prensibiyle üretim ve montaj</span></li>
                  <li><CheckCircle2 size={16} color="var(--color-primary)" /><span>Şeffaf, dürüst ve zamanında teslimat</span></li>
                  <li><CheckCircle2 size={16} color="var(--color-primary)" /><span>%100 müşteri memnuniyeti ve satış sonrası destek</span></li>
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={0.2}>
              <Card borderTopOrange hoverEffect className="open-corp-vm-card">
                <div className="open-corp-vm-icon-box">
                  <SunMedium size={32} />
                </div>
                <h3 className="open-corp-vm-title">Vizyonumuz</h3>
                <p className="open-corp-vm-desc">
                  Türkiye genelinde ve uluslararası pazarda estetik, ferahlık ve üstün izolasyon
                  denince akla gelen ilk kurumsal pen markası olmak. Gelişen mimari trendlere yön veren inovatif profil,
                  sürme ve akıllı cephe çözümleriyle sektörün referans noktası haline gelmek.
                </p>
                <ul className="open-corp-vm-list">
                  <li><CheckCircle2 size={16} color="var(--color-primary)" /><span>Sektörde Ar-Ge ve teknoloji odaklı liderlik</span></li>
                  <li><CheckCircle2 size={16} color="var(--color-primary)" /><span>Yeşil bina standartlarına tam uyumlu enerji optimizasyonu</span></li>
                  <li><CheckCircle2 size={16} color="var(--color-primary)" /><span>Ege bölgesinden tüm Türkiye'ye uzanan kurumsal ağ</span></li>
                </ul>
              </Card>
            </Reveal>
          </div>

          {/* Temel Kurumsal Değerler */}
          <div className="open-corp-values-area">
            <h3 className="open-corp-values-title">Vazgeçilmez İlkelerimiz</h3>
            <div className="open-corp-values-grid">
              <div className="open-corp-value-item">
                <ShieldCheck size={24} className="open-corp-value-icon" />
                <h4>Güven & Dürüstlük</h4>
                <p>Verdiğimiz sözün ve teklif ettiğimiz malzemenin arkasındayız.</p>
              </div>
              <div className="open-corp-value-item">
                <Layers size={24} className="open-corp-value-icon" />
                <h4>Teknik Uzmanlık</h4>
                <p>Hatasız lazer ölçüm ve A sınıfı sertifikalı profil işçiliği.</p>
              </div>
              <div className="open-corp-value-item">
                <HeartHandshake size={24} className="open-corp-value-icon" />
                <h4>Müşteri Odaklılık</h4>
                <p>Her evin mimarisine özel projelendirme ve satış sonrası servis.</p>
              </div>
              <div className="open-corp-value-item">
                <Factory size={24} className="open-corp-value-icon" />
                <h4>Modern Tesis</h4>
                <p>Otomasyonlu CNC hatlarıyla milimetrik kesim ve köşe kaynağı.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          BÖLÜM 3: NEDEN O-PEN? (nurettin-tutak & Kurumsal Karşılaştırma)
          ========================================================================= */}
      <section id="neden" className="open-section open-corp-why-section">
        <Container>
          <div className="open-corp-why-grid">
            <Reveal direction="left">
              <div>
                <span className="open-section-header__badge">KURUMSAL FARKLARIMIZ</span>
                <h2 className="open-corp-heading">
                  Neden Birçok Yapı Sahibi <span className="open-text-orange">O-PEN</span> Sistemlerini Tercih Ediyor?
                </h2>
                <div className="open-concept-line" />
                <p className="open-corp-text">
                  Pencere ve kapı doğramaları, bir yapıda değiştirilmesi en zahmetli ve maliyetli unsurlardır.
                  Yanlış seçilen bir profil veya tecrübesizce yapılan montaj; hava sızıntısına, terlemeye, küfe
                  ve yüksek yakıt faturalarına sebep olur.
                </p>

                <div className="open-corp-features-list">
                  {[
                    {
                      title: 'A Sınıfı Et Kalınlığına Sahip Profiller',
                      desc: 'Hafif ve dayanıksız profiller yerine, rüzgar yüküne dayanıklı yüksek et kalınlığı.',
                    },
                    {
                      title: 'Akustik Lamine Cam ve EPDM Conta',
                      desc: 'Hem kış soğuğunu hem de dış gürültüyü en aza indiren sızdırmazlık teknolojisi.',
                    },
                    {
                      title: 'Kendi Fabrikamızda Doğrudan Üretim',
                      desc: 'Aracısız, doğrudan birinci elden fabrika imalatı ve rekabetçi kurumsal fiyatlar.',
                    },
                    {
                      title: 'Tozsuz ve Titiz Yerinde Montaj',
                      desc: 'Eski pencerelerinizi çevreye zarar vermeden söküp yenilerini teraziye alarak teslim ediyoruz.',
                    },
                  ].map((feat, i) => (
                    <div key={i} className="open-corp-feat-row">
                      <div className="open-corp-feat-icon">
                        <CheckCircle2 size={20} color="var(--color-primary)" />
                      </div>
                      <div>
                        <h4>{feat.title}</h4>
                        <p>{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <div className="open-corp-why-media">
                <img
                  src={images.production[1].src}
                  alt="O-PEN kalite kontrol ve kaynak aşaması"
                  className="open-corp-why-img"
                  loading="lazy"
                  width="600"
                  height="450"
                />
                <div className="open-corp-why-stat-card">
                  <Award size={36} color="var(--color-primary)" />
                  <div>
                    <div className="open-corp-why-stat-num">%100 Yerli İmalat</div>
                    <div className="open-corp-why-stat-txt">Avrupa Standartlarında İzolasyon</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          BÖLÜM 4: KALİTE POLİTİKASI & ÜRETİM STANDARTLARI
          ========================================================================= */}
      <section id="kalite" className="open-section open-corp-quality-section">
        <Container>
          <SectionTitle
            badge="STANDARTLARIMIZ"
            title="Kalite ve Çevre Politikamız"
            subtitle="Üretimin her aşamasında sıkı toleranslar ve uluslararası test kriterleri."
            dark
          />

          <div className="open-corp-quality-grid">
            <Reveal delay={0.1}>
              <div className="open-corp-quality-card">
                <div className="open-corp-quality-icon"><Award size={26} /></div>
                <h3>TSE & CE Belgeli Profiller</h3>
                <p>
                  Kullandığımız tüm PVC ve alüminyum profiller, Türk Standartları Enstitüsü (TSE) ve Avrupa CE normlarına
                  uygunluk sertifikasına sahiptir.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="open-corp-quality-card">
                <div className="open-corp-quality-icon"><ShieldCheck size={26} /></div>
                <h3>Sertifikalı Rüzgar ve Su Testleri</h3>
                <p>
                  Sistemlerimiz şiddetli rüzgar basıncı, su sızdırmazlık ve hava geçirgenliği laboratuvar testlerinden başarıyla geçmiştir.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="open-corp-quality-card">
                <div className="open-corp-quality-icon"><Factory size={26} /></div>
                <h3>Geri Dönüştürülebilir & Çevre Dostu</h3>
                <p>
                  Kurşunsuz kalsiyum-çinko stabilizatörlü, çevre dostu hammaddeler kullanarak doğaya ve insan sağlığına saygılı üretim yapıyoruz.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA Şeridi */}
      <section className="open-corp-cta-band">
        <Container className="open-corp-cta-inner">
          <div>
            <h3 className="open-corp-cta-title">Eviniz İçin En Doğru Pencereyi Belirleyelim</h3>
            <p className="open-corp-cta-desc">
              Ücretsiz keşif ve projelendirme için uzman teknik ekibimizle hemen irtibata geçin.
            </p>
          </div>
          <div className="open-corp-cta-btns">
            <Button to="/iletisim" variant="primary" size="lg" icon={ArrowRight}>
              Ücretsiz Keşif İste
            </Button>
            <Button to="/urunler" variant="outline" size="lg" style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}>
              Ürünlerimizi İnceleyin
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CorporatePage;
