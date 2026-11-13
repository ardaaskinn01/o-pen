import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import images from '../data/images';
import siteConfig from '../data/site';
import './GalleryPage.css';

const categories = ['Tümü', 'Fabrika', 'PVC Pencere', 'Alüminyum', 'Panjur', 'Kapı'];

export const GalleryPage = () => {
  const [selectedCat, setSelectedCat] = useState('Tümü');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredItems =
    selectedCat === 'Tümü'
      ? images.gallery
      : images.gallery.filter((item) => item.cat === selectedCat);

  // Klavye ESC ve Sağ/Sol Ok ile Lightbox kontrolü
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === -1) return;
      if (e.key === 'Escape') setLightboxIndex(-1);
      else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    if (lightboxIndex !== -1) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, filteredItems.length]);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(-1);

  const nextImg = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="open-gallery-page">
      <Helmet>
        <title>Uygulama Galerisi | {siteConfig.name} Sistemleri</title>
        <meta
          name="description"
          content="O-PEN PVC Pencere, sürme alüminyum, motorlu panjur ve dış kapı uygulama fotoğrafları ve montaj kareleri."
        />
      </Helmet>

      <PageHero
        title="Uygulama Galerisi"
        subtitle="Montajını tamamladığımız villa, rezidans ve konut projelerinden detay kareler ve işçilik kalitemiz."
        badge="İŞÇİLİK VE DETAY ARŞİVİ"
        breadcrumbs={[{ label: 'Galeri' }]}
        backgroundImage={images.gallery[2]?.src}
      />

      <section className="open-section">
        <Container>
          <SectionTitle
            badge="GÖRSEL REFERANSLAR"
            title="Hayata Geçirdiğimiz Uygulamalar"
            subtitle="Kategoriye göre filtreleme yapabilir veya fotoğrafların üzerine tıklayarak tam ekran inceleyebilirsiniz."
          />

          {/* Filtre Bar */}
          <div className="open-gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`open-gallery-filter-btn ${selectedCat === cat ? 'open-gallery-filter-btn--active' : ''}`}
                onClick={() => setSelectedCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Galeri Grid */}
          <div className="open-gallery-grid">
            {filteredItems.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.05}>
                <div
                  className="open-gallery-item"
                  onClick={() => openLightbox(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openLightbox(idx);
                  }}
                  aria-label={`${item.title} fotoğrafını tam ekran büyüt`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="open-gallery-thumb"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  <div className="open-gallery-overlay">
                    <ZoomIn size={28} className="open-gallery-zoom-icon" />
                    <span className="open-gallery-item-cat">{item.cat}</span>
                    <h4 className="open-gallery-item-title">{item.title}</h4>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Benzer bir projeyi eviniz veya binanız için hayata geçirmek ister misiniz?
            </p>
            <Button to="/iletisim" variant="primary" size="lg">
              Ücretsiz Keşif Randevusu Alın
            </Button>
          </div>
        </Container>
      </section>

      {/* LIGHTBOX (Tam Ekran Modal, Klavye Erişilebilir) */}
      {lightboxIndex !== -1 && filteredItems[lightboxIndex] && (
        <div className="open-lightbox-backdrop" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="open-lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="open-lightbox-close" onClick={closeLightbox} aria-label="Kapat">
              <X size={26} />
            </button>

            <button className="open-lightbox-nav open-lightbox-nav--prev" onClick={prevImg} aria-label="Önceki">
              <ChevronLeft size={30} />
            </button>

            <div className="open-lightbox-body">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].alt}
                className="open-lightbox-img"
              />
              <div className="open-lightbox-caption">
                <span className="open-lightbox-cat">{filteredItems[lightboxIndex].cat}</span>
                <h3 className="open-lightbox-title">{filteredItems[lightboxIndex].title}</h3>
                <p className="open-lightbox-desc">{filteredItems[lightboxIndex].alt}</p>
                <span className="open-lightbox-counter">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>

            <button className="open-lightbox-nav open-lightbox-nav--next" onClick={nextImg} aria-label="Sonraki">
              <ChevronRight size={30} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
