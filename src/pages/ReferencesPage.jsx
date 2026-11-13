import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2, MapPin, ArrowRight, Images, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import siteConfig from '../data/site';
import referenceProjects from '../data/referenceProjects';
import './ReferencesPage.css';

const regions = ['Tümü', 'Kütahya', 'İzmir', 'Aydın'];

export const ReferencesPage = () => {
  const [selectedRegion, setSelectedRegion] = useState('Tümü');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalProject]);

  const filteredProjects =
    selectedRegion === 'Tümü'
      ? referenceProjects
      : referenceProjects.filter((p) => p.region === selectedRegion);

  const openProjectModal = (proj) => {
    setActiveModalProject(proj);
    setActiveImageIdx(0);
  };

  const closeProjectModal = () => {
    setActiveModalProject(null);
  };

  const nextImg = (e) => {
    e.stopPropagation();
    if (!activeModalProject) return;
    setActiveImageIdx((prev) => (prev + 1) % activeModalProject.images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    if (!activeModalProject) return;
    setActiveImageIdx((prev) => (prev - 1 + activeModalProject.images.length) % activeModalProject.images.length);
  };

  return (
    <div className="open-references-page">
      <Helmet>
        <title>Projelerimiz | {siteConfig.name}</title>
        <meta
          name="description"
          content="O-PEN Pencere ve Kapı Sistemleri devam eden ve tamamlanan projeleri; Kütahya, İzmir ve Aydın genelinde konut, site ve villa montajları."
        />
      </Helmet>

      <PageHero
        title="Projelerimiz"
        subtitle="Kütahya ve Ege Bölgesi genelinde imalat ve montajını üstlendiğimiz nitelikli toplu konut, site ve villa projelerimiz."
        badge="ŞANTİYE VE UYGULAMA SAHALARIMIZ"
        breadcrumbs={[{ label: 'Projeler' }]}
        backgroundImage={referenceProjects[0]?.cover}
      />

      <section className="open-section">
        <Container>
          <SectionTitle
            badge="SAHA VE ŞANTİYE UYGULAMALARI"
            title="Projelerimiz"
            subtitle="Doğru mühendislik, kaliteli malzeme ve uzman montaj işçiliğiyle sürdürdüğümüz ve teslim ettiğimiz işlerimiz."
          />

          {/* Bölge Filtreleri */}
          <div className="open-ref-filters">
            {regions.map((reg) => (
              <button
                key={reg}
                type="button"
                className={`open-ref-filter-btn ${selectedRegion === reg ? 'open-ref-filter-btn--active' : ''}`}
                onClick={() => setSelectedRegion(reg)}
              >
                {reg} {reg !== 'Tümü' && `(${referenceProjects.filter((p) => p.region === reg).length})`}
              </button>
            ))}
          </div>

          <div className="open-ref-grid">
            {filteredProjects.map((refItem, idx) => (
              <Reveal key={refItem.id} delay={idx * 0.05}>
                <div
                  className="open-ref-card"
                  onClick={() => openProjectModal(refItem)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openProjectModal(refItem);
                  }}
                  aria-label={`${refItem.title} detay fotoğraflarını aç`}
                >
                  <div className="open-ref-media">
                    <img
                      src={refItem.cover}
                      alt={refItem.title}
                      className="open-ref-img"
                      loading="lazy"
                      width="500"
                      height="320"
                    />
                    <div className="open-ref-img-count">
                      <Images size={14} />
                      <span>{refItem.imageCount} Fotoğraf</span>
                    </div>
                  </div>

                  <div className="open-ref-body">
                    <div className="open-ref-loc">
                      <MapPin size={14} color="var(--color-primary)" />
                      <span>{refItem.location}</span>
                    </div>

                    <h3 className="open-ref-title">{refItem.title}</h3>
                    <span className="open-ref-cat">{refItem.category}</span>
                    <p className="open-ref-scope">{refItem.desc}</p>

                    <div className="open-ref-card-action">
                      <span className="open-ref-view-btn">
                        <span>Fotoğrafları İncele</span>
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Proje Teklif Bandı */}
          <div className="open-ref-cta-box">
            <Building2 size={36} color="var(--color-primary)" className="open-ref-cta-icon" />
            <div className="open-ref-cta-text">
              <h3>Müteahhit misiniz veya Toplu Konut Projeniz mi Var?</h3>
              <p>
                Şartnamenize ve mimari projenize göre en uygun profil kesitlerini, statik rüzgar hesaplarını
                ve toptan proje fiyat teklifimizi hazırlayalım.
              </p>
            </div>
            <Button to="/teklif-al" variant="primary" size="lg" icon={ArrowRight}>
              Toplu Proje Teklifi Al
            </Button>
          </div>
        </Container>
      </section>

      {/* Proje Fotoğrafları Modal / Lightbox */}
      {activeModalProject && (
        <div className="open-ref-modal-backdrop" onClick={closeProjectModal} role="dialog" aria-modal="true">
          <div className="open-ref-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="open-ref-modal-close" onClick={closeProjectModal} aria-label="Kapat">
              <X size={26} />
            </button>

            <div className="open-ref-modal-header">
              <span className="open-ref-modal-badge">{activeModalProject.location}</span>
              <h3 className="open-ref-modal-title">{activeModalProject.title}</h3>
            </div>

            <div className="open-ref-modal-view">
              <button
                className="open-ref-modal-nav open-ref-modal-nav--prev"
                onClick={prevImg}
                aria-label="Önceki Fotoğraf"
              >
                <ChevronLeft size={30} />
              </button>

              <img
                src={activeModalProject.images[activeImageIdx]}
                alt={`${activeModalProject.title} Fotoğraf ${activeImageIdx + 1}`}
                className="open-ref-modal-img"
              />

              <button
                className="open-ref-modal-nav open-ref-modal-nav--next"
                onClick={nextImg}
                aria-label="Sonraki Fotoğraf"
              >
                <ChevronRight size={30} />
              </button>
            </div>

            {/* Küçük Resimler (Thumbnails Bar) */}
            <div className="open-ref-modal-thumbs">
              {activeModalProject.images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  className={`open-ref-modal-thumb ${i === activeImageIdx ? 'open-ref-modal-thumb--active' : ''}`}
                  onClick={() => setActiveImageIdx(i)}
                >
                  <img src={img} alt={`Küçük önizleme ${i + 1}`} />
                </button>
              ))}
            </div>

            <div className="open-ref-modal-footer">
              <span className="open-ref-modal-desc">{activeModalProject.desc}</span>
              <span className="open-ref-modal-counter">
                {activeImageIdx + 1} / {activeModalProject.images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferencesPage;
