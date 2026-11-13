import { Helmet } from 'react-helmet-async';
import { Building2, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import siteConfig from '../data/site';
import images from '../data/images';
import './ReferencesPage.css';

// Eski şantiye projeleri pen doğrama ve cephe montaj referanslarına dönüştürüldü
const references = [
  {
    id: 1,
    title: 'Çeşme Lüks Taş Villa Projesi',
    location: 'İzmir / Çeşme',
    year: '2025',
    category: 'Alüminyum Sürme & Cam Balkon',
    image: images.gallery[1]?.src,
    scope: 'Geniş açıklıklı Hebeschiebe alüminyum sürme kapılar, temperli cam teras korkulukları ve motorlu panjurlar.',
    stats: '14 Villa / 120+ Doğrama Ünitesi',
  },
  {
    id: 2,
    title: 'Mavişehir Rezidans Konutları',
    location: 'İzmir / Karşıyaka',
    year: '2024',
    category: 'PVC Pencere & Monoblok Panjur',
    image: images.gallery[0]?.src,
    scope: '70 mm çok odacıklı antrasit gri PVC pencere sistemleri, akustik lamine cam ve akıllı ev uyumlu panjurlar.',
    stats: '48 Daire / 380 Doğrama',
  },
  {
    id: 3,
    title: 'Urla Bağ Evleri Butik Yaşam',
    location: 'İzmir / Urla',
    year: '2024',
    category: 'Isıcamlı Cam Balkon & Doğrama',
    image: images.gallery[5]?.src,
    scope: 'Dört mevsim kış bahçesi cam tavan uygulaması, katlanır temperli cam balkonlar ve dekoratif giriş kapıları.',
    stats: '8 Özel Konut',
  },
  {
    id: 4,
    title: 'Nazilli Ticari İş Merkezi & Showroom',
    location: 'Aydın / Nazilli',
    year: '2023',
    category: 'Alüminyum Cephe & Giriş Kapıları',
    image: images.gallery[6]?.src,
    scope: 'Silikon cephe giydirme, otomatik fotoselli giriş kapıları ve güneş kırıcı lamel sistemleri.',
    stats: '4.500 m² Cam Cephe Alanı',
  },
  {
    id: 5,
    title: 'Foça Sahil Evleri Komple Yenileme',
    location: 'İzmir / Foça',
    year: '2023',
    category: 'Korozyon Dayanımlı PVC Sistemleri',
    image: images.gallery[8]?.src,
    scope: 'Deniz tuzu ve neme dayanıklı özel kilit donanımlı çift açılım PVC pencereler ve plise sineklikler.',
    stats: '24 Konut Doğrama Değişimi',
  },
  {
    id: 6,
    title: 'Bornova Modern Ofis Binası',
    location: 'İzmir / Bornova',
    year: '2022',
    category: 'Akustik Doğrama & Sürme',
    image: images.gallery[9]?.src,
    scope: 'Yüksek desibel ses yalıtımlı ofis ara bölme camları, ağır hizmet alüminyum sürme sistemleri.',
    stats: '6 Katlı Plaza Binası',
  },
];

export const ReferencesPage = () => {
  return (
    <div className="open-references-page">
      <Helmet>
        <title>Referanslarımız | {siteConfig.name} Projeleri</title>
        <meta
          name="description"
          content="O-PEN Pencere ve Kapı Sistemleri referans projeleri, konut, villa ve kurumsal yapı montajları."
        />
      </Helmet>

      <PageHero
        title="Referanslarımız"
        subtitle="Ege Bölgesi ve Türkiye genelinde hayata geçirdiğimiz nitelikli villa, konut ve ticari doğrama projelerimiz."
        badge="BAŞARIYLA TESLİM EDİLEN YAPILAR"
        breadcrumbs={[{ label: 'Referanslar' }]}
        backgroundImage={images.gallery[0]?.src}
      />

      <section className="open-section">
        <Container>
          <SectionTitle
            badge="GÜVEN KAZANAN İŞLERİMİZ"
            title="Seçkin Referans Projelerimiz"
            subtitle="Doğru mühendislik, kaliteli malzeme ve zamanında teslimat prensibimizle tamamlanan işlerimiz."
          />

          <div className="open-ref-grid">
            {references.map((refItem, idx) => (
              <Reveal key={refItem.id} delay={idx * 0.08}>
                <div className="open-ref-card">
                  <div className="open-ref-media">
                    <img
                      src={refItem.image}
                      alt={refItem.title}
                      className="open-ref-img"
                      loading="lazy"
                      width="500"
                      height="320"
                    />
                    <div className="open-ref-year">{refItem.year}</div>
                  </div>

                  <div className="open-ref-body">
                    <div className="open-ref-loc">
                      <MapPin size={14} color="var(--color-primary)" />
                      <span>{refItem.location}</span>
                    </div>

                    <h3 className="open-ref-title">{refItem.title}</h3>
                    <span className="open-ref-cat">{refItem.category}</span>
                    <p className="open-ref-scope">{refItem.scope}</p>

                    <div className="open-ref-stats-badge">
                      <CheckCircle2 size={15} color="var(--color-primary)" />
                      <span>{refItem.stats}</span>
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
            <Button to="/iletisim" variant="primary" size="lg" icon={ArrowRight}>
              Toplu Proje Teklifi Al
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ReferencesPage;
