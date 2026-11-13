import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Navigation,
  ShieldCheck,
} from 'lucide-react';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import siteConfig from '../data/site';
import images from '../data/images';
import './ContactPage.css';

export const ContactPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const preselectedProduct = searchParams.get('urun') || 'PVC Pencere Sistemleri';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedProduct,
    message: '',
    kvkk: false,
    _honey: '', // Bot tuzağı (honeypot)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam / Honeypot kontrolü
    if (formData._honey) {
      console.warn('Bot submission blocked.');
      return;
    }

    // Basit İstemci Doğrulaması
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Lütfen ad soyad, e-posta ve mesaj alanlarını eksiksiz doldurun.',
      });
      return;
    }

    if (!formData.kvkk) {
      setSubmitStatus({
        type: 'error',
        message: 'Lütfen KVKK aydınlatma metnini onaylayınız.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message:
            'Talebiniz başarıyla iletildi! Uzman teknik ekibimiz en geç 24 saat içinde sizinle iletişime geçecektir.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'PVC Pencere Sistemleri',
          message: '',
          kvkk: false,
          _honey: '',
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setSubmitStatus({
          type: 'error',
          message:
            errorData.message ||
            'Form iletimi sırasında bir hata oluştu. Lütfen telefon veya WhatsApp ile doğrudan bize ulaşın.',
        });
      }
    } catch {
      // Prompt 10 API henüz ayağa kalkmadıysa veya sunucusuz fonksiyon yoksa bilgilendirme
      setSubmitStatus({
        type: 'error',
        message:
          'İletişim sunucusuna şu an ulaşılamadı. Mesajınızı doğrudan WhatsApp veya telefon üzerinden hemen iletebilirsiniz.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappHref = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(
    `Merhaba, ${formData.service || 'pencere'} hakkında bilgi ve teklif almak istiyorum.`
  )}`;

  // Schema.org LocalBusiness JSON-LD (Gerçek koordinatlar ve Google Maps URL)
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    image: `${siteConfig.domain}/brand/logo.png`,
    '@id': `${siteConfig.domain}/#localbusiness`,
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Özyurt Mahallesi, Gediz Fabrika & Showroom',
      addressLocality: 'Gediz',
      addressRegion: 'Kütahya',
      postalCode: '43100',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    hasMap: siteConfig.mapsUrl,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: siteConfig.domain,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'İletişim',
        item: `${siteConfig.domain}/iletisim`,
      },
    ],
  };

  return (
    <div className="open-contact-page">
      <Helmet>
        <title>İletişim & Harita | {siteConfig.name} Pencere & Kapı</title>
        <meta
          name="description"
          content="O-PEN ile iletişime geçin. Ücretsiz keşif randevusu, fiyat teklifi, fabrika konumu ve Google Maps yol tarifi."
        />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      {/* Page Hero */}
      <PageHero
        title="İletişim & Fabrika"
        subtitle="Ücretsiz keşif talebi, detaylı fiyat teklifi veya atölye ziyareti için bize dilediğiniz kanaldan ulaşabilirsiniz."
        badge="BİZE ULAŞIN"
        breadcrumbs={[{ label: 'İletişim' }]}
        backgroundImage={images.showcase.showroom.src}
      />

      <section className="open-section">
        <Container>
          <div className="open-contact-layout">
            {/* SOL: Kurumsal Bilgi Kartları & Sosyal Kanallar */}
            <Reveal direction="left">
              <div className="open-contact-info-col">
                <SectionTitle
                  badge="DANIŞMA & SHOWROOM"
                  title="Her Zaman Yanınızdayız"
                  subtitle="Projelerinize özel teknik hesaplama, profil seçimi ve montaj planlaması için uzman kadromuz hazır."
                  align="left"
                />

                <div className="open-contact-cards-stack">
                  {/* Fabrika & Showroom */}
                  <div className="open-contact-card">
                    <div className="open-contact-card__icon-box">
                      <MapPin size={24} />
                    </div>
                    <div className="open-contact-card__content">
                      <h4>Fabrika & Showroom</h4>
                      <p>{siteConfig.address}</p>
                      <a
                        href={siteConfig.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="open-contact-card__map-link"
                      >
                        <Navigation size={14} />
                        <span>Google Maps'te Aç & Yol Tarifi Al</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Telefon & WhatsApp */}
                  <div className="open-contact-card">
                    <div className="open-contact-card__icon-box">
                      <Phone size={24} />
                    </div>
                    <div className="open-contact-card__content">
                      <h4>Müşteri Danışma Hattı</h4>
                      <p>
                        <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="open-contact-tel">
                          {siteConfig.phone}
                        </a>
                      </p>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="open-contact-wa-link"
                      >
                        <WhatsAppIcon size={16} />
                        <span>WhatsApp ile 7/24 Hızlı Mesaj Gönderin</span>
                      </a>
                    </div>
                  </div>

                  {/* E-Posta */}
                  <div className="open-contact-card">
                    <div className="open-contact-card__icon-box">
                      <Mail size={24} />
                    </div>
                    <div className="open-contact-card__content">
                      <h4>Kurumsal E-Posta</h4>
                      <p>
                        <a href={`mailto:${siteConfig.email}`} className="open-contact-email">
                          {siteConfig.email}
                        </a>
                      </p>
                      <span className="open-contact-note">Teknik şartname ve kurumsal projeleriniz için</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* SAĞ: Keşif & Teklif Formu */}
            <Reveal direction="right" delay={0.15}>
              <div className="open-contact-form-wrap">
                <div className="open-form-header">
                  <span className="open-form-badge">HIZLI TEKLİF</span>
                  <h3 className="open-form-title">Keşif ve Fiyat Teklif Formu</h3>
                  <p className="open-form-subtitle">
                    Aşağıdaki formu doldurun, uzman ekibimiz ölçülerinize göre en uygun çözümü 24 saat içinde hazırlasın.
                  </p>
                </div>

                {/* Başarı / Hata Bildirim Kutusu */}
                {submitStatus && (
                  <div className={`open-form-alert open-form-alert--${submitStatus.type}`} role="alert">
                    {submitStatus.type === 'success' ? (
                      <CheckCircle2 size={20} className="open-form-alert__icon" />
                    ) : (
                      <AlertCircle size={20} className="open-form-alert__icon" />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="open-contact-form" noValidate>
                  {/* Honeypot Spam Tuzağı (Kullanıcı Görmez) */}
                  <input
                    type="text"
                    name="_honey"
                    value={formData._honey}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Ad Soyad */}
                  <div className="open-form-group">
                    <label htmlFor="form-name" className="open-form-label">
                      Adınız Soyadınız <span className="open-required">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="open-form-input"
                    />
                  </div>

                  {/* E-posta & Telefon */}
                  <div className="open-form-row">
                    <div className="open-form-group">
                      <label htmlFor="form-email" className="open-form-label">
                        E-Posta Adresiniz <span className="open-required">*</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="open-form-input"
                      />
                    </div>

                    <div className="open-form-group">
                      <label htmlFor="form-phone" className="open-form-label">
                        Telefon Numaranız <span className="open-required">*</span>
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="open-form-input"
                      />
                    </div>
                  </div>

                  {/* İlgilenilen Ürün */}
                  <div className="open-form-group">
                    <label htmlFor="form-service" className="open-form-label">
                      İlgilendiğiniz Ürün Grubu
                    </label>
                    <select
                      id="form-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="open-form-select"
                    >
                      <option value="PVC Pencere Sistemleri">PVC Pencere Sistemleri</option>
                      <option value="Alüminyum Doğrama & Sürme">Alüminyum Doğrama & Sürme</option>
                      <option value="Kapı Sistemleri">Giriş ve Dış Kapı Sistemleri</option>
                      <option value="Panjur ve Kepenk">Panjur ve Güvenlik Kepenk Sistemleri</option>
                      <option value="Sineklik ve Aksesuar">Sineklik ve Donanım Aksesuarları</option>
                      <option value="Komple Proje / Toplu İnşaat">Komple Villa / Toplu İnşaat Çözümü</option>
                    </select>
                  </div>

                  {/* Mesaj */}
                  <div className="open-form-group">
                    <label htmlFor="form-message" className="open-form-label">
                      Proje Notlarınız / Tahmini Ölçüler <span className="open-required">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="open-form-textarea"
                    />
                  </div>

                  {/* KVKK Onay Kutusu */}
                  <div className="open-form-kvkk">
                    <input
                      id="form-kvkk"
                      type="checkbox"
                      name="kvkk"
                      checked={formData.kvkk}
                      onChange={handleChange}
                      className="open-form-checkbox"
                    />
                    <label htmlFor="form-kvkk" className="open-form-kvkk-label">
                      <span>Kişisel verilerimin iletişim ve teklif amacıyla işlenmesini ve </span>
                      <a href="/gizlilik" target="_blank" rel="noreferrer">
                        KVKK Aydınlatma Metni'ni
                      </a>
                      <span> okudum, onaylıyorum.</span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    disabled={isSubmitting}
                    style={{ width: '100%' }}
                  >
                    {isSubmitting ? 'Talebiniz Gönderiliyor...' : 'Teklif & Keşif Talebini Gönder'}
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          GOOGLE MAPS HARİTA BÖLÜMÜ (API Key Gerektirmeyen Iframe Embed)
          ========================================================================= */}
      <section className="open-map-section" aria-label="Harita Konumu">
        <Container>
          <div className="open-map-card">
            <div className="open-map-header">
              <div className="open-map-header__left">
                <MapPin size={22} color="var(--color-primary)" />
                <div>
                  <h3 className="open-map-title">Fabrika & Üretim Merkezimiz Harita Konumu</h3>
                  <p className="open-map-subtitle">Gediz / Kütahya Üretim ve Montaj Tesisimiz</p>
                </div>
              </div>

              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="open-btn open-btn--primary open-btn--md"
              >
                <Navigation size={16} />
                <span>Google Maps ile Yol Tarifi Al</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Google Maps Embed iframe (Lazy Load, Title, Koordinat Merkezli) */}
            <div className="open-map-frame-wrapper">
              <iframe
                title="O-PEN Pencere ve Kapı Sistemleri Fabrika ve Showroom Konumu"
                src={siteConfig.mapEmbedSrc}
                width="100%"
                height="460"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="open-map-footer">
              <div className="open-map-footer-item">
                <ShieldCheck size={18} color="var(--color-primary)" />
                <span>Kolay Ulaşım & Otopark İmkânı</span>
              </div>
              <div className="open-map-footer-item">
                <CheckCircle2 size={18} color="var(--color-primary)" />
                <span>Showroom'da Birebir Profil ve Cam İnceleme Fırsatı</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
