import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, CheckCircle2 } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import products from '../data/products';
import siteConfig from '../data/site';
import './ProductsPage.css';

const categories = ['Tümü', 'PVC Pencere', 'Alüminyum', 'Kapı Sistemleri', 'Panjur'];

export const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filteredProducts =
    selectedCategory === 'Tümü'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // BreadcrumbList JSON-LD
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
        name: 'Ürünlerimiz',
        item: `${siteConfig.domain}/urunler`,
      },
    ],
  };

  return (
    <div className="open-products-page">
      <Helmet>
        <title>Ürünlerimiz | {siteConfig.name} Pencere & Kapı Sistemleri</title>
        <meta
          name="description"
          content="O-PEN PVC Pencere, Alüminyum Doğrama & Sürme, Kapı Sistemleri ve Panjur & Kepenk çözümleri. Yüksek ısı ve ses yalıtımlı sistemler."
        />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <PageHero
        title="Ürün Gruplarımız"
        subtitle="Maksimum ısı tasarrufu, akustik konfor ve estetik çizgileri bir araya getiren A sınıfı pencere ve kapı serileri."
        badge="KURUMSAL SİSTEM KATALOĞU"
        breadcrumbs={[{ label: 'Ürünler' }]}
      />

      <section className="open-section">
        <Container>
          <SectionTitle
            badge="FİLTRE & KATALOG"
            title="Sistem Çözümlerimizi Keşfedin"
            subtitle="İhtiyacınıza uygun kategoriyi seçerek sistem özelliklerini ve teknik tabloları inceleyebilirsiniz."
          />

          {/* Kategori Filtre Butonları */}
          <div className="open-prod-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`open-prod-filter-btn ${selectedCategory === cat ? 'open-prod-filter-btn--active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Ürün Listesi Grid */}
          <div className="open-prod-catalog-grid">
            {filteredProducts.map((prod, idx) => (
              <Reveal key={prod.id} delay={idx * 0.08}>
                <div className="open-catalog-card">
                  <div className="open-catalog-card__media">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="open-catalog-card__img"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                    <div className="open-catalog-card__badge">{prod.badge}</div>
                  </div>

                  <div className="open-catalog-card__body">
                    <span className="open-catalog-card__cat">{prod.category}</span>
                    <h3 className="open-catalog-card__title">
                      <Link to={`/urunler/${prod.slug}`}>{prod.title}</Link>
                    </h3>
                    <p className="open-catalog-card__desc">{prod.shortDescription}</p>

                    {/* Öne Çıkan 2 Özellik */}
                    <div className="open-catalog-card__feats">
                      {prod.features.slice(0, 2).map((f, i) => (
                        <div key={i} className="open-catalog-feat-item">
                          <CheckCircle2 size={15} color="var(--color-primary)" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="open-catalog-card__actions">
                      <Link to={`/urunler/${prod.slug}`} className="open-btn open-btn--primary open-btn--sm">
                        <span>Teknik Detaylar</span>
                        <ArrowRight size={15} />
                      </Link>
                      <Link to={`/iletisim?urun=${encodeURIComponent(prod.title)}`} className="open-btn open-btn--outline open-btn--sm">
                        <span>Teklif Al</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Alt Bilgilendirme */}
          <div className="open-prod-info-box">
            <Compass size={28} className="open-prod-info-icon" />
            <div>
              <h4 className="open-prod-info-title">Özel Ölçü ve Kurumsal Projelendirme</h4>
              <p className="open-prod-info-desc">
                Standart ölçülerin dışındaki tüm projeleriniz, villa cepheleriniz ve ticari alanlarınız için
                yerinde lazer ölçümü yaparak projenize özel statik ve yalıtım hesabı çıkarıyoruz.
              </p>
            </div>
            <Button to="/teklif-al" variant="dark" size="md">
              Teklif Alın & Danışın
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ProductsPage;
