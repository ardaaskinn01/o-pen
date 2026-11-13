
import { Helmet } from 'react-helmet-async';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import siteConfig from '../data/site';

export const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Sayfa Bulunamadı (404) | {siteConfig.name}</title>
      </Helmet>

      <section style={{ padding: '8rem 0', textAlign: 'center', backgroundColor: 'var(--bg-body)' }}>
        <Container>
          <span style={{ fontSize: '6rem', fontWeight: 900, color: 'var(--color-primary)', display: 'block', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
            404
          </span>
          <h1 style={{ fontSize: '2rem', margin: '1rem 0' }}>Sayfa Bulunamadı</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 2rem' }}>
            Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak kullanım dışı kalmış olabilir.
          </p>
          <Button to="/" variant="primary" size="md">
            Ana Sayfaya Dön
          </Button>
        </Container>
      </section>
    </>
  );
};

export default NotFoundPage;
