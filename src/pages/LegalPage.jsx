import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import SEO from '../components/common/SEO';
import siteConfig from '../data/site';
import './LegalPage.css';

export const LegalPage = ({ type = 'privacy' }) => {
  const configs = {
    privacy: {
      slug: '/gizlilik',
      title: 'Gizlilik Politikası & KVKK Aydınlatma Metni',
      badge: 'YASAL BİLGİLENDİRME',
      desc: 'O-PEN Pencere ve Kapı Sistemleri olarak kişisel verilerinizin güvenliğine ve gizliliğine en üst düzeyde önem veriyoruz.',
      date: '13 Kasım 2026',
      sections: [
        {
          heading: '1. Veri Sorumlusu Sıfatı',
          content: `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla O-PEN Pencere & Kapı Sistemleri ("O-PEN" veya "Şirket") olarak; müşterilerimizin, web sitesi ziyaretçilerimizin ve iş ortaklarımızın kişisel verilerini aşağıda izah edilen kapsam ve amaçlar doğrultusunda hukuka ve dürüstlük kurallarına uygun şekilde işlemekteyiz.`,
        },
        {
          heading: '2. İşlenen Kişisel Veriler ve Toplanma Amaçları',
          content: `Web sitemiz üzerinde yer alan "Keşif ve Fiyat Teklifi Formu" ile doğrudan iletişim kanallarımız aracılığıyla adınız soyadınız, telefon numaranız, e-posta adresiniz ve projenize ilişkin adres/ölçü notlarınız toplanmaktadır. Bu veriler yalnızca;
          • Tarafınıza talep ettiğiniz pencere, kapı ve panjur sistemleri için fiyat teklifi sunulması,
          • Yerinde ücretsiz keşif randevusu organize edilmesi,
          • Satış sonrası teknik servis ve garanti süreçlerinin yürütülmesi,
          • Yasal mevzuattan kaynaklanan yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.`,
        },
        {
          heading: '3. Kişisel Verilerin Aktarılması',
          content: `Toplanan kişisel verileriniz, yasal zorunluluklar ve adli/idari mercilerin talepleri haricinde, ticari veya pazarlama amacıyla hiçbir üçüncü şahıs veya kurumla paylaşılmaz. Verileriniz yalnızca montajın gerçekleştirileceği lokasyonda yetkili teknik montaj ekibimiz ile hizmetin ifası kapsamında paylaşılmaktadır.`,
        },
        {
          heading: '4. KVKK Madde 11 Kapsamındaki Haklarınız',
          content: `KVKK uyarınca herkes veri sorumlusuna başvurarak; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme ve silinmesini talep etme haklarına sahiptir. Bu haklarınızı kullanmak için ${siteConfig.email} adresine e-posta gönderebilir veya ${siteConfig.phone} numaramızdan bize ulaşabilirsiniz.`,
        },
      ],
    },
    cookies: {
      slug: '/cerez',
      title: 'Çerez Politikası (Cookie Policy)',
      badge: 'ÇEREZ VE GİZLİLİK',
      desc: 'Sitemizde kullanıcı deneyimini iyileştirmek ve temel fonksiyonları eksiksiz sunmak amacıyla çerezler kullanılmaktadır.',
      date: '13 Kasım 2026',
      sections: [
        {
          heading: '1. Çerez (Cookie) Nedir?',
          content: `Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler web sitesinin düzgün çalışmasını, oturum tercihlerinizin hatırlanmasını ve site güvenliğinin sağlanmasını temin eder.`,
        },
        {
          heading: '2. Sitemizde Kullanılan Çerez Türleri',
          content: `• Zorunlu ve Teknik Çerezler: Web sitemizin güvenli çalışması, form gönderimi, mobil menü durumu ve çerez tercihinizin hatırlanması için kesinlikle gereklidir. Bu çerezler devre dışı bırakılamaz.
          • Performans ve Analiz Çerezleri: Ziyaretçilerin sayfalar arasındaki geçişlerini anonim olarak analiz ederek kullanıcı deneyimini optimize etmemize yarar. Kişisel kimliğinizi doğrudan belirleyecek veriler toplamaz.`,
        },
        {
          heading: '3. Çerez Tercihlerinin Yönetimi',
          content: `İnternet tarayıcınızın ayarlarını (Chrome, Safari, Firefox, Edge) kullanarak dilediğiniz zaman çerez kullanımını kısıtlayabilir, engelleyebilir veya mevcut çerezleri silebilirsiniz. Ancak zorunlu çerezlerin kapatılması durumunda web sitesindeki bazı form ve navigasyon alanları işlevini yitirebilir.`,
        },
      ],
    },
    terms: {
      slug: '/kullanim-kosullari',
      title: 'Kullanım Koşulları ve Hukuki Şartlar',
      badge: 'HUKUKİ ŞARTLAR',
      desc: 'O-PEN web sitesini ziyaret eden tüm kullanıcılar aşağıdaki genel kullanım şartlarını kabul etmiş sayılır.',
      date: '13 Kasım 2026',
      sections: [
        {
          heading: '1. Fikri Mülkiyet ve Telif Hakları',
          content: `Bu web sitesinde yer alan O-PEN logosu, marka görselleri, teknik şartname çizimleri, metinler, fotoğraflar ve grafikler O-PEN tescilli hakları kapsamındadır. Yazılı izin alınmaksızın kısmen veya tamamen kopyalanamaz, çoğaltılamaz ve ticari amaçla kullanılamaz.`,
        },
        {
          heading: '2. Bilgilendirme ve Teknik Değerler',
          content: `Web sitesinde paylaşılan ürün özellikleri, yalıtım katsayıları ve teknik tablolar genel bilgilendirme niteliğindedir. Nihai imalat ve montajda, yapınızın statik rüzgar yükü, cephe yönü ve kat yüksekliğine göre uzman keşif ekibimizce hazırlanan resmi sözleşme şartları esastır.`,
        },
        {
          heading: '3. Sorumluluk Sınırları ve Uyuşmazlık Çözümü',
          content: `Web sitesinin kesintisiz veya hatasız çalışacağına dair garanti verilmemektedir. İşbu kullanım koşullarından doğabilecek her türlü hukuki uyuşmazlıkta Türkiye Cumhuriyeti kanunları geçerli olup, Kütahya Mahkemeleri ve İcra Daireleri yetkilidir.`,
        },
      ],
    },
  };

  const current = configs[type] || configs.privacy;

  return (
    <div className="open-legal-page">
      <SEO
        title={current.title}
        description={current.desc}
        canonicalUrl={current.slug}
      />

      <PageHero
        title={current.title}
        subtitle={current.desc}
        badge={current.badge}
        breadcrumbs={[{ label: current.title }]}
      />

      <section className="open-section">
        <Container>
          <div className="open-legal-card">
            <div className="open-legal-header">
              <span className="open-legal-update">Son Güncelleme: {current.date}</span>
              <p className="open-legal-intro">
                Lütfen bu metni dikkatlice okuyunuz. Web sitemizi ziyaret ederek veya teklif formlarımızı doldurarak
                bu hükümleri kabul etmiş sayılırsınız.
              </p>
            </div>

            <div className="open-legal-body">
              {current.sections.map((sec, i) => (
                <div key={i} className="open-legal-sec">
                  <h2 className="open-legal-sec-title">{sec.heading}</h2>
                  <p className="open-legal-sec-text">{sec.content}</p>
                </div>
              ))}
            </div>

            <div className="open-legal-footer">
              <h4>Sorularınız mı var?</h4>
              <p>
                Yasal metinlerimiz veya kişisel verileriniz hakkındaki sorularınız için bize{' '}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> adresinden veya{' '}
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}>{siteConfig.phone}</a> numaramızdan
                ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default LegalPage;
