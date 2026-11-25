import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Building2,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  TrendingUp,
  Truck,
  Award,
  Layers,
  HelpCircle,
} from 'lucide-react';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import siteConfig from '../data/site';
import './DealershipPage.css';

const perks = [
  {
    icon: Building2,
    title: 'Doğrudan Fabrika Üretim Gücü',
    desc: 'Gediz OSB tesislerimizde 4 eksenli CNC robotik hatlarla milimetrik toleranslarda, kesintisiz ve zamanında üretim desteği.',
  },
  {
    icon: TrendingUp,
    title: 'Yüksek Kâr Marjı & Bölge Koruması',
    desc: 'Bölgesel koruma prensibiyle yetkili bayilerimizin ticari haklarını güvence altına alıyor, rekabetçi fabrika çıkış fiyatları sunuyoruz.',
  },
  {
    icon: Award,
    title: 'NRT Grup Kurumsal Güvencesi',
    desc: '1977’den gelen yarım asırlık sanayi ve inşaat tecrübemiz, tescilli O-PEN kalitesi ve güçlü kurumsal aidiyet.',
  },
  {
    icon: Truck,
    title: 'Hızlı Lojistik & Şantiye Teslimatı',
    desc: 'Ege Bölgesi ve Türkiye geneline kendi lojistik filomuz ve anlaşmalı ağımızla hasarsız, korumalı ambalajlı teslimat.',
  },
  {
    icon: Layers,
    title: 'Zengin Ürün Yelpazesi',
    desc: 'A sınıfı 70-85 mm PVC pencere sistemleri, alüminyum mimari sürme, çelik kapı, panjur ve cam balkon çözümleri tek çatı altında.',
  },
  {
    icon: ShieldCheck,
    title: 'Teknik Eğitim & Pazarlama Desteği',
    desc: 'Showroom teşhir üniteleri, mimari şartname katalogları, bayi tabela-kurumsal giydirme ve satış sonrası mühendislik desteği.',
  },
];

const faqs = [
  {
    q: 'Bayilik için showroom / mağaza şartı var mı?',
    a: 'Evet, O-PEN kurumsal marka standartlarını temsil edebilecek, müşteri trafiğine açık bir showroom veya tabela alanı bulunan işletmeler önceliklidir. Yeni açılacak noktalar için mimari konsept desteği sağlamaktayız.',
  },
  {
    q: 'Bölge koruması (münhasırlık) uygulanıyor mu?',
    a: 'Evet. Belirli bir il veya ilçe sınırları içerisinde pazar potansiyeline ve aylık taahhüt hacmine göre bayilerimize bölge koruması sağlanarak haksız iç rekabet önlenir.',
  },
  {
    q: 'Ürün tedarik süresi ve sipariş süreci nasıl işler?',
    a: 'Siparişleriniz bayilik portalımız ve teknik ofisimiz üzerinden milimetrik ölçülerle alınır. Standart renk ve sistemler için termin süresi ortalama 7-10 iş günüdür.',
  },
  {
    q: 'Teknik montaj ve satış eğitimi veriliyor mu?',
    a: 'Bayilik anlaşması akabinde bayi personeline ve montaj ustalarına fabrikamızda teorik ve pratik doğru montaj, yalıtım detayları ve ayar eğitimleri ücretsiz olarak verilmektedir.',
  },
];

export const DealershipPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    district: '',
    experience: '1-3 Yıl',
    showroomStatus: 'Mevcut Showroomum Var',
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

    if (!formData.kvkk) {
      setSubmitStatus({
        type: 'error',
        message: 'Lütfen KVKK Aydınlatma Metni ve Gizlilik Koşullarını onaylayınız.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/dealership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message:
            result.message ||
            'Bayilik başvurunuz başarıyla alındı! Bayi İlişkileri departmanımız başvurunuzu inceleyip en kısa sürede sizinle iletişime geçecektir.',
        });
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          city: '',
          district: '',
          experience: '1-3 Yıl',
          showroomStatus: 'Mevcut Showroomum Var',
          message: '',
          kvkk: false,
          _honey: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Başvuru gönderilirken bir hata oluştu. Lütfen bilgilerinizi kontrol ediniz.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="open-dealership-page">
      <Helmet>
        <title>Bayilik Başvurusu | {siteConfig.name} Satış Noktası Olun</title>
        <meta
          name="description"
          content="O-PEN Pencere ve Kapı Sistemleri yetkili bayisi olun. Gediz OSB entegre fabrikamızın üretim gücü, bölge koruması ve yüksek kâr avantajıyla kazanın."
        />
      </Helmet>

      <PageHero
        title="O-PEN Bayisi Olun"
        subtitle="Yarım asırlık sanayi gücü, A sınıfı ürün kalitesi ve avantajlı bayi koşullarıyla bölgenizin lideri olun."
        badge="İŞ ORTAKLIĞI & SATIŞ AĞI"
        breadcrumbs={[{ label: 'Bayilik Başvurusu' }]}
        backgroundImage="/images/fabrika/0.jpg"
      />

      {/* Avantajlar & Neden O-PEN Bayiliği? */}
      <section className="open-section open-dealer-perks-sec">
        <Container>
          <SectionTitle
            badge="NEDEN O-PEN İLE BÜYÜMELİSİNİZ?"
            title="Bayilerimize Sunduğumuz Güçlü Ayrıcalıklar"
            subtitle="Yalnızca bir ürün tedarikçisi değil; işinizi geleceğe taşıyan sağlam bir çözüm ortağıyız."
          />

          <div className="open-dealer-perks-grid">
            {perks.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <Reveal key={idx} delay={idx * 0.08}>
                  <div className="open-dealer-perk-card">
                    <div className="open-dealer-perk-icon">
                      <IconComp size={28} />
                    </div>
                    <h3 className="open-dealer-perk-title">{p.title}</h3>
                    <p className="open-dealer-perk-desc">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Başvuru Formu & Bilgilendirme */}
      <section id="basvuru-formu" className="open-section open-dealer-form-sec">
        <Container>
          <div className="open-dealer-layout">
            {/* Sol: Form Bilgilendirme & Adımlar */}
            <Reveal direction="left">
              <div className="open-dealer-info-col">
                <span className="open-dealer-tag">RESMİ BAŞVURU SÜRECİ</span>
                <h2 className="open-dealer-form-title">
                  O-PEN Ailesine Katılın, <br />
                  <span className="open-text-orange">Birlikte Kazanalım</span>
                </h2>
                <p className="open-dealer-form-desc">
                  İster mevcut bir yapı marketi / doğrama atölyesi olun, ister yeni bir showroom kurmayı hedefleyin;
                  O-PEN mühendislik desteği ve fabrikadan doğrudan teslimat kolaylığıyla yanınızda.
                </p>

                <div className="open-dealer-steps">
                  <div className="open-dealer-step">
                    <div className="open-dealer-step-num">1</div>
                    <div>
                      <h4>Online Formu Doldurun</h4>
                      <p>Firma bilgilerinizi ve bayilik talep ettiğiniz bölgeyi formu kullanarak bize iletin.</p>
                    </div>
                  </div>
                  <div className="open-dealer-step">
                    <div className="open-dealer-step-num">2</div>
                    <div>
                      <h4>Ön Değerlendirme & Bölge Analizi</h4>
                      <p>Bayi İlişkileri ekibimiz talep ettiğiniz bölgenin pazar potansiyelini ve bölge korumasını inceler.</p>
                    </div>
                  </div>
                  <div className="open-dealer-step">
                    <div className="open-dealer-step-num">3</div>
                    <div>
                      <h4>Tanışma & Resmi Sözleşme</h4>
                      <p>Fabrikamızda veya yerinizde görüşme yapılarak showroom mimari konsepti ve şartlar kesinleştirilir.</p>
                    </div>
                  </div>
                </div>

                <div className="open-dealer-direct-contact">
                  <h4>Doğrudan Bayi İlişkileri Hattı:</h4>
                  <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="open-dealer-phone-btn">
                    <Phone size={18} />
                    <span>{siteConfig.phone}</span>
                  </a>
                  <p className="open-dealer-contact-note">
                    <Mail size={15} />
                    <span>E-Posta: {siteConfig.email}</span>
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Sağ: Resend Entegreli Bayilik Formu */}
            <Reveal direction="right" delay={0.15}>
              <div className="open-dealer-form-wrapper">
                <div className="open-dealer-form-header">
                  <h3>Yetkili Bayilik Başvuru Formu</h3>
                  <p>Lütfen bilgileri eksiksiz giriniz. Form doğrudan bayi koordinatörümüze iletilir.</p>
                </div>

                {submitStatus && (
                  <div className={`open-dealer-status-box open-dealer-status-box--${submitStatus.type}`}>
                    {submitStatus.type === 'success' ? <CheckCircle2 size={20} /> : <HelpCircle size={20} />}
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="open-dealer-form">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_honey"
                    value={formData._honey}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div className="open-dealer-form-row">
                    <div className="open-dealer-field">
                      <label htmlFor="name">Yetkili Adı Soyadı *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="Örn: Mehmet Yılmaz"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="open-dealer-field">
                      <label htmlFor="company">Firma / Şirket Ünvanı *</label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        required
                        placeholder="Örn: Yılmaz Yapı Doğrama Ltd."
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="open-dealer-form-row">
                    <div className="open-dealer-field">
                      <label htmlFor="phone">Telefon Numarası *</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="05XX XXX XX XX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="open-dealer-field">
                      <label htmlFor="email">E-Posta Adresi</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="info@firmaniz.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="open-dealer-form-row">
                    <div className="open-dealer-field">
                      <label htmlFor="city">Bayilik Talep Edilen İl *</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        required
                        placeholder="Örn: İzmir, Kütahya, Manisa..."
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="open-dealer-field">
                      <label htmlFor="district">İlçe / Bölge</label>
                      <input
                        id="district"
                        type="text"
                        name="district"
                        placeholder="Örn: Bornova, Gediz..."
                        value={formData.district}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="open-dealer-form-row">
                    <div className="open-dealer-field">
                      <label htmlFor="experience">Sektörel Tecrübeniz</label>
                      <select id="experience" name="experience" value={formData.experience} onChange={handleChange}>
                        <option value="Yeni Başlangıç (0-1 Yıl)">Yeni Başlangıç (0 - 1 Yıl)</option>
                        <option value="1-3 Yıl">1 - 3 Yıl</option>
                        <option value="3-5 Yıl">3 - 5 Yıl</option>
                        <option value="5-10 Yıl">5 - 10 Yıl</option>
                        <option value="10+ Yıl (Köklü İşletme)">10+ Yıl (Köklü İşletme)</option>
                      </select>
                    </div>
                    <div className="open-dealer-field">
                      <label htmlFor="showroomStatus">Mevcut Mağaza / Showroom</label>
                      <select id="showroomStatus" name="showroomStatus" value={formData.showroomStatus} onChange={handleChange}>
                        <option value="Mevcut Showroomum Var">Mevcut Showroomum Var</option>
                        <option value="Atölyem Var, Showroom Açabilirim">Atölyem Var, Showroom Açabilirim</option>
                        <option value="Yeni Mağaza Tutacağım">Yeni Mağaza Tutacağım</option>
                        <option value="Sadece Proje / Taahhüt Yapıyorum">Sadece Proje / Taahhüt Yapıyorum</option>
                      </select>
                    </div>
                  </div>

                  <div className="open-dealer-field">
                    <label htmlFor="message">Eklemek İstedikleriniz / İşletme Notları</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      placeholder="Mevcut faaliyet alanınız, müşteri portföyünüz ve sormak istedikleriniz..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="open-dealer-kvkk">
                    <input
                      id="kvkk"
                      type="checkbox"
                      name="kvkk"
                      checked={formData.kvkk}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="kvkk">
                      <a href="/gizlilik" target="_blank" rel="noreferrer">
                        KVKK Aydınlatma Metni
                      </a>
                      'ni okudum, bayilik başvurusu kapsamında verilerimin işlenmesini kabul ediyorum.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={Send}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Başvurunuz İletiliyor...' : 'Bayilik Başvurusunu Gönder'}
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SSS Akordeon */}
      <section className="open-section open-dealer-faq-sec">
        <Container>
          <SectionTitle
            badge="SIKÇA SORULANLAR"
            title="Bayilik Hakkında Merak Edilenler"
            subtitle="Başvuru süreci, bölge koruması ve sevkiyat detaylarına dair merak ettiğiniz tüm yanıtlar."
          />

          <div className="open-dealer-faq-grid">
            {faqs.map((faq, idx) => (
              <div key={idx} className="open-dealer-faq-card">
                <h4 className="open-dealer-faq-q">{faq.q}</h4>
                <p className="open-dealer-faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default DealershipPage;
