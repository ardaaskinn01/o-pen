import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Ruler,
  Phone,
  MessageCircle,
  Truck,
  Award,
  Layers,
} from 'lucide-react';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import siteConfig from '../data/site';
import './ProductDetailPage.css';

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = getRelatedProducts(slug);

  const [activeImg, setActiveImg] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  if (!product) {
    return (
      <Container style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '1rem' }}>Ürün Bulunamadı</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Aradığınız ürün sayfasına ulaşılamadı veya ürün kaldırılmış olabilir.
        </p>
        <Button to="/urunler" variant="primary">Ürünlere Geri Dön</Button>
      </Container>
    );
  }

  // Schema.org Product & BreadcrumbList JSON-LD
  const productJsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.title,
    image: `${siteConfig.domain}${product.image}`,
    description: product.shortDescription,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'TRY',
      availability: 'https://schema.org/InStock',
    },
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
        name: 'Ürünler',
        item: `${siteConfig.domain}/urunler`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.title,
        item: `${siteConfig.domain}/urunler/${product.slug}`,
      },
    ],
  };

  const currentGallery = product.gallery || [product.image];

  return (
    <div className="open-product-detail">
      <Helmet>
        <title>{product.title} | {siteConfig.name} Sistemleri</title>
        <meta name="description" content={product.shortDescription} />
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <PageHero
        title={product.title}
        subtitle={product.subtitle}
        badge={product.category}
        breadcrumbs={[
          { label: 'Ürünler', path: '/urunler' },
          { label: product.title },
        ]}
      />

      {/* Ana Ürün Tanıtım & Görsel Galerisi */}
      <section className="open-section open-detail-main-sec">
        <Container>
          <div className="open-detail-grid">
            {/* Sol: Görsel Galerisi & Küçük Resimler */}
            <Reveal direction="left">
              <div className="open-detail-gallery">
                <div className="open-detail-gallery__main">
                  <img
                    src={currentGallery[activeImg] || product.image}
                    alt={product.title}
                    className="open-detail-gallery__img"
                    width="700"
                    height="480"
                  />
                  <div className="open-detail-gallery__badge">{product.badge}</div>
                </div>

                {currentGallery.length > 1 && (
                  <div className="open-detail-thumbs">
                    {currentGallery.map((imgSrc, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`open-detail-thumb-btn ${idx === activeImg ? 'open-detail-thumb-btn--active' : ''}`}
                        onClick={() => setActiveImg(idx)}
                      >
                        <img src={imgSrc} alt={`${product.title} ${idx + 1}`} width="120" height="80" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Galeri Altı Güven & Fabrika Teslimat Bilgi Kartları */}
                <div className="open-detail-gallery-highlights">
                  <div className="open-detail-gh-card">
                    <div className="open-detail-gh-card__icon">
                      <Truck size={20} />
                    </div>
                    <div>
                      <h5>Gediz OSB Doğrudan Fabrika Teslimi</h5>
                      <p>Aracısız, doğrudan entegre üretim tesisimizden toptan ve perakende sevkiyat.</p>
                    </div>
                  </div>

                  <div className="open-detail-gh-card">
                    <div className="open-detail-gh-card__icon">
                      <Award size={20} />
                    </div>
                    <div>
                      <h5>TSE & EN Sertifikalı Standartlar</h5>
                      <p>DIN EN normlarında A sınıfı hammadde, solmaz UV koruması ve yangın dayanımı.</p>
                    </div>
                  </div>

                  <div className="open-detail-gh-card">
                    <div className="open-detail-gh-card__icon">
                      <Layers size={20} />
                    </div>
                    <div>
                      <h5>Projeye Özel Kesim & Renk Seçenekleri</h5>
                      <p>Standart ölçülerin yanı sıra projenize göre özel boy kesim ve lamine renk kartelası.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Sağ: Açıklama, Avantajlar ve Teklif Kutusu */}
            <Reveal direction="right" delay={0.15}>
              <div className="open-detail-info">
                <span className="open-detail-cat-tag">{product.category}</span>
                <h1 className="open-detail-title">{product.title}</h1>
                <p className="open-detail-desc">{product.longDescription}</p>

                {/* Öne Çıkan Özellikler */}
                <div className="open-detail-features-box">
                  <h3 className="open-detail-subheading">Öne Çıkan Avantajlar</h3>
                  <div className="open-detail-features-list">
                    {product.features.map((feat, i) => (
                      <div key={i} className="open-detail-feat-item">
                        <CheckCircle2 size={18} color="var(--color-primary)" className="open-detail-feat-icon" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Teklif Al Kutusu (Ürün Adını Taşır) */}
                <div className="open-detail-cta-card">
                  <div className="open-detail-cta-card__top">
                    <Ruler size={24} color="var(--color-primary)" />
                    <div>
                      <h4>Bu Sistem İçin Ücretsiz Keşif Alın</h4>
                      <p>Ölçülerinizi bildirin, 24 saat içinde net maliyet teklifi sunalım.</p>
                    </div>
                  </div>
                  <div className="open-detail-cta-card__actions">
                    <Button
                      to={`/teklif-al?urun=${encodeURIComponent(product.title)}`}
                      variant="primary"
                      size="md"
                      icon={ArrowRight}
                    >
                      Fiyat Teklifi & Keşif İste
                    </Button>
                    <a
                      href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(
                        `Merhaba, ${product.title} sistemi hakkında bilgi ve fiyat teklifi almak istiyorum.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="open-btn open-btn--outline open-btn--md"
                    >
                      <MessageCircle size={18} color="#25D366" />
                      <span>WhatsApp'tan Danışın</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          ÜRÜN SERİLERİ & OPSİYONLARI (Varsa Listelenir)
          ========================================================================= */}
      {product.series && product.series.length > 0 && (
        <section className="open-section open-detail-series-sec">
          <Container>
            <SectionTitle
              badge="SERİLER & SİSTEMLER"
              title={`${product.title} Çözüm Gruplarımız`}
              subtitle="Projenizin mimari yapısına, kat yüksekliğine ve yalıtım ihtiyacına özel profil serilerimiz."
            />

            <div className="open-detail-series-grid">
              {product.series.map((item, idx) => (
                <div key={idx} className="open-detail-series-card">
                  <div className="open-detail-series-card__header">
                    <span className="open-detail-series-card__tag">{item.tag}</span>
                    <h3 className="open-detail-series-card__title">{item.name}</h3>
                    <span className="open-detail-series-card__specs">{item.specs}</span>
                  </div>
                  <p className="open-detail-series-card__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* =========================================================================
          TEKNİK ÖZELLİKLER TABLOSU (Yer Tutucu Değerler Net Şekilde Listelendi)
          ========================================================================= */}
      <section className="open-section open-detail-tech-sec">
        <Container>
          <SectionTitle
            badge="MÜHENDİSLİK DETAYLARI"
            title="Teknik Özellikler ve Performans Tablosu"
            subtitle="Laboratuvar test standartlarına uygun profil alaşımları ve yalıtım değerleri."
          />

          <div className="open-tech-table-wrap">
            <table className="open-tech-table">
              <thead>
                <tr>
                  <th>Teknik Parametre</th>
                  <th>Standart Değer / Spesifikasyon</th>
                  <th>Uluslararası Norm</th>
                </tr>
              </thead>
              <tbody>
                {product.technicalSpecs.map((spec, i) => (
                  <tr key={i}>
                    <td className="open-tech-table__label">{spec.label}</td>
                    <td className="open-tech-table__val">
                      <strong>{spec.value}</strong>
                    </td>
                    <td className="open-tech-table__norm">TSE / EN Normları</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          TAMAMLAYICI PERVAZ, KASA İZOLASYON & PVC LAMBRİ SİSTEMLERİ
          ========================================================================= */}
      {/* =========================================================================
          SIKÇA SORULAN SORULAR (Akordeon)
          ========================================================================= */}
      {product.faq && product.faq.length > 0 && (
        <section className="open-section open-detail-faq-sec">
          <Container>
            <SectionTitle
              badge="MERAK EDİLENLER"
              title="Sıkça Sorulan Sorular"
              subtitle={`${product.title} hakkında en çok yöneltilen sorular ve uzman yanıtları.`}
            />

            <div className="open-detail-faq-list">
              {product.faq.map((item, idx) => (
                <div key={idx} className="open-detail-faq-item">
                  <button
                    type="button"
                    className="open-detail-faq-question"
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    aria-expanded={openFaq === idx}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={20}
                      className={`open-detail-faq-chevron ${openFaq === idx ? 'open-detail-faq-chevron--open' : ''}`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="open-detail-faq-answer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* =========================================================================
          İLGİLİ / TAMAMLAYICI ÜRÜNLER
          ========================================================================= */}
      {related.length > 0 && (
        <section className="open-section open-detail-related-sec">
          <Container>
            <SectionTitle
              badge="TAMAMLAYICI ÇÖZÜMLER"
              title="İlgili Ürün Grupları"
              subtitle="Bu sistemle birlikte sıklıkla tercih edilen diğer yüksek performanslı ürünlerimiz."
            />

            <div className="open-related-grid">
              {related.map((relItem) => (
                <div key={relItem.id} className="open-related-card">
                  <img src={relItem.image} alt={relItem.title} className="open-related-img" loading="lazy" />
                  <div className="open-related-body">
                    <span className="open-related-cat">{relItem.category}</span>
                    <h4 className="open-related-title">{relItem.title}</h4>
                    <Link to={`/urunler/${relItem.slug}`} className="open-btn open-btn--ghost open-btn--sm">
                      <span>İncele</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Hızlı Danışma Bandı */}
      <section className="open-detail-phone-band">
        <Container className="open-detail-phone-inner">
          <div className="open-detail-phone-left">
            <ShieldCheck size={36} color="var(--color-primary)" />
            <div>
              <h3>Kararsız mı Kaldınız? Teknik Danışmanımız Yanınızda</h3>
              <p>Mekânınıza en uygun profil serisini ve cam kombinasyonunu birlikte belirleyelim.</p>
            </div>
          </div>
          <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="open-btn open-btn--primary open-btn--lg">
            <Phone size={18} />
            <span>Hemen Arayın: {siteConfig.phone}</span>
          </a>
        </Container>
      </section>
    </div>
  );
};

export default ProductDetailPage;
