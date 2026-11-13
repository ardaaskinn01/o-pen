
import { Helmet } from 'react-helmet-async';
import { Calendar, ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Reveal from '../components/ui/Reveal';
import siteConfig from '../data/site';

export const BlogPage = () => {
  const posts = [
    {
      title: 'Doğru Pencere Seçimi ile %40 Enerji Tasarrufu',
      date: '10 Kasım 2026',
      summary: 'Kış aylarında ısı kaybını önlemek için cam kombinasyonları ve profil odacık yapısının önemi.',
      cat: 'Rehber',
    },
    {
      title: 'PVC mi Alüminyum mu? Hangisi Hangi Yapıya Uygun?',
      date: '28 Ekim 2026',
      summary: 'Geniş sürme sistemlerinden villa projelerine malzeme kıyaslaması ve kullanım ömrü.',
      cat: 'Teknik Bilgi',
    },
    {
      title: 'Cam Balkon Yaptırırken Nelere Dikkat Edilmeli?',
      date: '15 Ekim 2026',
      summary: 'Su tahliye kanalları, temperli cam kalınlığı ve tekerlek mekanizması seçim kriterleri.',
      cat: 'İpuçları',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blog & Faydalı Bilgiler | {siteConfig.name}</title>
        <meta name="description" content="Pencere ve kapı sistemleri hakkında rehberler, yalıtım ipuçları ve sektörel haberler." />
      </Helmet>

      <PageHero
        title="Blog & Faydalı Bilgiler"
        subtitle="Yaşam alanlarınız için doğru pencere-kapı seçimi, yalıtım çözümleri ve bakım önerileri."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-body)' }}>
        <Container>
          <SectionTitle
            badge="GÜNCEL YAZILAR"
            title="Sektörel Yazılar & Rehberler"
            subtitle="Pencere ve kapı sistemleri hakkında merak ettiğiniz tüm teknik ve pratik konular."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {posts.map((post, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <Card hoverEffect borderTopOrange style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase' }}>{post.cat}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={13} /> {post.date}</span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', lineHeight: 1.4 }}>{post.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{post.summary}</p>
                  </div>
                  <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                    <span>Yazıyı Oku</span>
                    <ArrowRight size={16} />
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogPage;
