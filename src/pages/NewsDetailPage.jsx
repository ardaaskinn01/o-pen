import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Tag, ArrowLeft, ArrowRight, Share2, Building2 } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import siteConfig from '../data/site';
import announcements from '../data/announcements';
import './NewsDetailPage.css';

export const NewsDetailPage = () => {
  const { slug } = useParams();
  const newsItem = announcements.find((item) => item.slug === slug);

  if (!newsItem) {
    return <Navigate to="/haberler" replace />;
  }

  const otherNews = announcements.filter((item) => item.slug !== slug).slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: newsItem.title,
        text: newsItem.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Haber bağlantısı panoya kopyalandı.');
    }
  };

  return (
    <div className="open-news-detail-page">
      <Helmet>
        <title>{newsItem.title} | {siteConfig.name}</title>
        <meta name="description" content={newsItem.summary} />
        <meta property="og:title" content={newsItem.title} />
        <meta property="og:description" content={newsItem.summary} />
        <meta property="og:image" content={newsItem.image} />
      </Helmet>

      <PageHero
        title={newsItem.title}
        subtitle={`${newsItem.date} • ${newsItem.category}`}
        badge={newsItem.badge}
        breadcrumbs={[
          { label: 'Haberler & Duyurular', path: '/haberler' },
          { label: newsItem.title },
        ]}
        backgroundImage={newsItem.image}
      />

      <section className="open-section">
        <Container>
          <div className="open-news-detail-layout">
            <main className="open-news-detail-main">
              <div className="open-news-detail-header">
                <div className="open-news-detail-meta">
                  <span className="open-news-detail-meta-item">
                    <Calendar size={16} />
                    {newsItem.date}
                  </span>
                  <span className="open-news-detail-meta-item">
                    <Tag size={16} />
                    {newsItem.category}
                  </span>
                </div>
                <button type="button" onClick={handleShare} className="open-news-share-btn" title="Haberi Paylaş">
                  <Share2 size={16} />
                  <span>Paylaş</span>
                </button>
              </div>

              <div className="open-news-detail-cover">
                <img src={newsItem.image} alt={newsItem.title} />
              </div>

              <div className="open-news-detail-body">
                {newsItem.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="open-news-detail-footer">
                <Link to="/haberler" className="open-news-back-link">
                  <ArrowLeft size={16} />
                  <span>Tüm Haberlere Dön</span>
                </Link>
                <Button to="/teklif-al" variant="primary" size="md" icon={ArrowRight}>
                  Projeniz İçin Teklif Alın
                </Button>
              </div>
            </main>

            <aside className="open-news-detail-sidebar">
              <div className="open-news-sidebar-box">
                <h4 className="open-news-sidebar-title">Diğer Duyurular</h4>
                <div className="open-news-sidebar-list">
                  {otherNews.map((item) => (
                    <Link key={item.id} to={`/haberler/${item.slug}`} className="open-news-sidebar-item">
                      <div className="open-news-sidebar-item-thumb">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="open-news-sidebar-item-info">
                        <span className="open-news-sidebar-item-date">{item.date}</span>
                        <h5 className="open-news-sidebar-item-title">{item.title}</h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="open-news-sidebar-cta">
                <Building2 size={36} color="var(--color-primary)" />
                <h4>O-PEN Çözüm Ortağınız</h4>
                <p>Nitelikli projeleriniz için doğrudan fabrikadan teklif ve keşif hizmeti alın.</p>
                <Button to="/iletisim" variant="outline" size="sm" fullWidth>
                  Bizimle İletişime Geçin
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default NewsDetailPage;
