import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import Reveal from '../components/ui/Reveal';
import siteConfig from '../data/site';
import announcements from '../data/announcements';
import './NewsPage.css';

export const NewsPage = () => {
  return (
    <div className="open-news-page">
      <Helmet>
        <title>Haberler & Duyurular | {siteConfig.name}</title>
        <meta
          name="description"
          content="O-PEN Pencere ve Kapı Sistemleri'nden en güncel haberler, fabrika yatırımları, fuar katılımları ve sektörel duyurular."
        />
      </Helmet>

      <PageHero
        title="Haberler & Duyurular"
        subtitle="O-PEN kurumsal gelişmeleri, teknolojik yatırımlarımız, fuar etkinliklerimiz ve güncel duyurularımız."
        badge="GÜNCEL GELİŞMELER"
        breadcrumbs={[{ label: 'Haberler & Duyurular' }]}
        backgroundImage="/images/fabrika/0.jpg"
      />

      <section className="open-section">
        <Container>
          <SectionTitle
            badge="BİZDEN HABERLER"
            title="Sektörden ve Fabrikamızdan Gelişmeler"
            subtitle="Yüksek standartlı üretimimiz, yeni projelerimiz ve kurumsal haberlerimiz ile sizlerleyiz."
          />

          <div className="open-news-grid">
            {announcements.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.1}>
                <article className="open-news-card">
                  <div className="open-news-card__media">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="open-news-card__img"
                      loading="lazy"
                    />
                    <span className="open-news-card__badge">{item.badge}</span>
                  </div>

                  <div className="open-news-card__content">
                    <div className="open-news-card__meta">
                      <span className="open-news-card__date">
                        <Calendar size={14} />
                        {item.date}
                      </span>
                      <span className="open-news-card__category">
                        <Tag size={13} />
                        {item.category}
                      </span>
                    </div>

                    <h3 className="open-news-card__title">
                      <Link to={`/haberler/${item.slug}`}>{item.title}</Link>
                    </h3>

                    <p className="open-news-card__summary">{item.summary}</p>

                    <Link to={`/haberler/${item.slug}`} className="open-news-card__link">
                      <span>Devamını Oku</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default NewsPage;
