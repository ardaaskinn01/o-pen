import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Calculator,
} from 'lucide-react';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import siteConfig from '../data/site';
import './QuotePage.css';

export const QuotePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const preselectedProduct = searchParams.get('urun') || 'PVC Pencere Sistemleri';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedProduct,
    quantity: '',
    location: '',
    message: '',
    kvkk: false,
    _honey: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData._honey) {
      setSubmitStatus({ type: 'success', message: 'Talebiniz başarıyla alındı.' });
      return;
    }

    if (!formData.name.trim() || !formData.phone.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Lütfen adınızı ve telefon numaranızı eksiksiz doldurunuz.',
      });
      return;
    }

    if (!formData.kvkk) {
      setSubmitStatus({
        type: 'error',
        message: 'Teklif alabilmek için lütfen KVKK onay kutusunu işaretleyiniz.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const fullMessage = [
      formData.quantity ? `Tahmini Adet / Metraj: ${formData.quantity}` : null,
      formData.location ? `Montaj Lokasyonu: ${formData.location}` : null,
      formData.message ? `Notlar: ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'belirtilmedi@o-pen.com.tr',
          service: `[Fiyat Teklifi] ${formData.service}`,
          message: fullMessage || 'Müşteri teklif talebinde bulundu.',
          kvkk: formData.kvkk,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Fiyat teklifi talebiniz başarıyla alındı! Ekibimiz projenizi inceleyip en geç 24 saat içinde dönüş yapacaktır.',
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'PVC Pencere Sistemleri',
          quantity: '',
          location: '',
          message: '',
          kvkk: false,
          _honey: '',
        });
      } else {
        throw new Error(result.error || 'Gönderim sırasında bir hata oluştu.');
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Teklif talebiniz sisteme kaydedildi. Dilerseniz hemen WhatsApp üzerinden de hızlıca fiyat alabilirsiniz.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappHref = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(
    `Merhaba, ${formData.service || 'pencere'} sistemleri için fiyat teklifi almak istiyorum.`
  )}`;

  return (
    <div className="open-quote-page">
      <Helmet>
        <title>Fiyat Teklifi Al | {siteConfig.name} Pencere & Kapı</title>
        <meta
          name="description"
          content="O-PEN PVC ve Alüminyum pencere, kapı ve panjur sistemleri için hızlı ve şeffaf fiyat teklifi alın. Milimetrik lazer keşif ve net maliyet hesabı."
        />
        <link rel="canonical" href={`${siteConfig.domain}/teklif-al`} />
      </Helmet>

      <PageHero
        title="Fiyat Teklifi Al"
        subtitle="Mekânınıza en uygun PVC, alüminyum veya panjur sistemleri için hızlı teklif oluşturun."
        badge="ŞEFFAF FİYATLANDIRMA"
        breadcrumbs={[{ label: 'Teklif Al' }]}
      />

      <section className="open-section open-quote-section">
        <Container>
          {/* YAKINDA: Online Fiyat Hesaplayıcı Bilgilendirme Kartı */}
          <Reveal>
            <div className="open-quote-coming-soon-banner">
              <div className="open-quote-cs-badge">
                <Calculator size={16} />
                <span>ÇOK YAKINDA</span>
              </div>
              <div className="open-quote-cs-content">
                <h3 className="open-quote-cs-title">
                  Online Otomatik Fiyat Hesaplama Sihirbazı Yakında Hizmetinizde!
                </h3>
                <p className="open-quote-cs-desc">
                  Kendi pencere ölçülerinizi, profil serisini ve cam kombinasyonunu seçerek anında yaklaşık maliyet
                  çıkarabileceğiniz dijital hesaplama aracımız hazırlanıyor. Bu süreçte aşağıdaki formu doldurarak
                  veya WhatsApp hattımızdan ölçülerinizi ileterek <strong>aynı gün içinde net kurumsal teklif</strong> alabilirsiniz.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="open-quote-grid">
            {/* SOL: Teklif & Keşif Formu */}
            <Reveal direction="left">
              <div className="open-quote-form-card">
                <div className="open-quote-form-header">
                  <span className="open-quote-form-tag">HIZLI TEKLİF FORMU</span>
                  <h2 className="open-quote-form-title">Ölçü ve Bilgilerinizi İletin</h2>
                  <p className="open-quote-form-sub">
                    Bilgilerinizi eksiksiz doldurun; uzman ekibimiz en uygun yalıtım çözümü ve net fiyat tablosunu sizin için hazırlasın.
                  </p>
                </div>

                {submitStatus && (
                  <div
                    className={`open-form-alert open-form-alert--${submitStatus.type}`}
                    role="alert"
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle2 size={20} className="open-form-alert__icon" />
                    ) : (
                      <AlertCircle size={20} className="open-form-alert__icon" />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="open-quote-form" noValidate>
                  <input
                    type="text"
                    name="_honey"
                    value={formData._honey}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Ad Soyad & Telefon */}
                  <div className="open-form-row">
                    <div className="open-form-group">
                      <label htmlFor="quote-name" className="open-form-label">
                        Adınız Soyadınız <span className="open-required">*</span>
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="open-form-input"
                      />
                    </div>

                    <div className="open-form-group">
                      <label htmlFor="quote-phone" className="open-form-label">
                        Telefon Numaranız <span className="open-required">*</span>
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="open-form-input"
                      />
                    </div>
                  </div>

                  {/* E-posta & Ürün Seçimi */}
                  <div className="open-form-row">
                    <div className="open-form-group">
                      <label htmlFor="quote-email" className="open-form-label">
                        E-Posta Adresiniz (Opsiyonel)
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="open-form-input"
                      />
                    </div>

                    <div className="open-form-group">
                      <label htmlFor="quote-service" className="open-form-label">
                        İlgilenilen Ürün Grubu
                      </label>
                      <select
                        id="quote-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="open-form-select"
                      >
                        <option value="PVC Pencere Sistemleri">PVC Pencere Sistemleri</option>
                        <option value="Alüminyum Doğrama & Sürme">Alüminyum Doğrama & Sürme</option>
                        <option value="Giriş ve Dış Kapı Sistemleri">Giriş ve Dış Kapı Sistemleri</option>
                        <option value="Panjur ve Güvenlik Kepenk Sistemleri">Panjur ve Güvenlik Kepenk Sistemleri</option>
                        <option value="Sineklik ve Donanım Aksesuarları">Sineklik ve Donanım Aksesuarları</option>
                        <option value="Komple Konut / Villa Projesi">Komple Konut / Villa Projesi</option>
                      </select>
                    </div>
                  </div>

                  {/* Adet & Lokasyon */}
                  <div className="open-form-row">
                    <div className="open-form-group">
                      <label htmlFor="quote-quantity" className="open-form-label">
                        Tahmini Adet veya Metraj
                      </label>
                      <input
                        id="quote-quantity"
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="open-form-input"
                      />
                    </div>

                    <div className="open-form-group">
                      <label htmlFor="quote-location" className="open-form-label">
                        İl / İlçe (Montaj Lokasyonu)
                      </label>
                      <input
                        id="quote-location"
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="open-form-input"
                      />
                    </div>
                  </div>

                  {/* Notlar */}
                  <div className="open-form-group">
                    <label htmlFor="quote-message" className="open-form-label">
                      Proje Notlarınız / Varsa Özel Talepleriniz
                    </label>
                    <textarea
                      id="quote-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="open-form-textarea"
                    />
                  </div>

                  {/* KVKK Onay Kutusu */}
                  <div className="open-form-kvkk">
                    <input
                      id="quote-kvkk"
                      type="checkbox"
                      name="kvkk"
                      checked={formData.kvkk}
                      onChange={handleChange}
                      className="open-form-checkbox"
                    />
                    <label htmlFor="quote-kvkk" className="open-form-kvkk-label">
                      <span>Fiyat teklifi hazırlanması amacıyla verilerimin işlenmesini ve </span>
                      <a href="/gizlilik" target="_blank" rel="noreferrer">
                        KVKK Aydınlatma Metni'ni
                      </a>
                      <span> onaylıyorum.</span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    disabled={isSubmitting}
                    className="open-quote-submit-btn"
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Teklif Talebini Gönder'}
                  </Button>
                </form>
              </div>
            </Reveal>

            {/* SAĞ: Avantajlar & Alternatif Hızlı Kanallar */}
            <Reveal direction="right" delay={0.15}>
              <div className="open-quote-sidebar">
                {/* Hızlı WhatsApp İletişim Kutusu */}
                <div className="open-quote-wa-box">
                  <div className="open-quote-wa-icon-wrap">
                    <WhatsAppIcon size={32} />
                  </div>
                  <div className="open-quote-wa-content">
                    <span className="open-quote-wa-tag">EN HIZLI YOL</span>
                    <h4>WhatsApp ile Anında Teklif</h4>
                    <p>
                      Mevcut pencerelerinizin veya projenizin fotoğraflarını WhatsApp üzerinden gönderin,
                      uzmanımız doğrudan fiyatlandırsın.
                    </p>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="open-quote-wa-btn"
                    >
                      <WhatsAppIcon size={18} />
                      <span>WhatsApp'tan Fotoğraf & Ölçü Gönder</span>
                    </a>
                  </div>
                </div>

                {/* Telefon Çağrısı */}
                <div className="open-quote-call-box">
                  <div className="open-quote-call-icon">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="open-quote-call-sub">Müşteri Temsilcimiz</span>
                    <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="open-quote-call-num">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Neden O-PEN Teklifi? */}
                <div className="open-quote-reasons-card">
                  <h4 className="open-quote-reasons-title">Teklif Sürecimiz Nasıl İşler?</h4>
                  <ul className="open-quote-reasons-list">
                    <li>
                      <div className="open-quote-reason-num">1</div>
                      <div>
                        <strong>Net ve Şeffaf Fiyat</strong>
                        <p>Sürpriz ek maliyet olmadan malzeme, cam ve montaj dahil net rakam.</p>
                      </div>
                    </li>
                    <li>
                      <div className="open-quote-reason-num">2</div>
                      <div>
                        <strong>Ücretsiz Yerinde Keşif</strong>
                        <p>Teklif onayı sonrası uzman ekibimiz lazerle milimetrik net ölçü alır.</p>
                      </div>
                    </li>
                    <li>
                      <div className="open-quote-reason-num">3</div>
                      <div>
                        <strong>Doğrudan Fabrikadan Montaj</strong>
                        <p>Aracı olmadan kendi imalatımızdan doğrudan temiz ve titiz montaj.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default QuotePage;
