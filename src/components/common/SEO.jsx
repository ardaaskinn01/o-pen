import { Helmet } from 'react-helmet-async';
import siteConfig from '../../data/site';

/**
 * Global SEO & Meta Tags Bileşeni
 * Her sayfa için standart Open Graph, Twitter Cards, Canonical ve Yapılandırılmış Verileri yönetir.
 */
export const SEO = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  structuredData,
  noindex = false,
}) => {
  // Başlık sınırlaması (≤60 karakter)
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | PVC ve Alüminyum Pencere-Kapı Sistemleri`;

  // Açıklama sınırlaması (≤160 karakter)
  const metaDesc = description || siteConfig.description;

  const currentCanonical = canonicalUrl
    ? `${siteConfig.domain}${canonicalUrl}`
    : siteConfig.domain;

  const fullOgImage = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${siteConfig.domain}${ogImage}`)
    : `${siteConfig.domain}${siteConfig.defaultOgImage}`;

  return (
    <Helmet>
      {/* Standart Meta */}
      <title>{fullTitle.slice(0, 65)}</title>
      <meta name="description" content={metaDesc.slice(0, 160)} />
      <link rel="canonical" href={currentCanonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Arama Motoru Doğrulama Kodları */}
      {siteConfig.verification.google && (
        <meta name="google-site-verification" content={siteConfig.verification.google} />
      )}
      {siteConfig.verification.bing && (
        <meta name="msvalidate.01" content={siteConfig.verification.bing} />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle.slice(0, 65)} />
      <meta property="og:description" content={metaDesc.slice(0, 160)} />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={siteConfig.locale} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle.slice(0, 65)} />
      <meta name="twitter:description" content={metaDesc.slice(0, 160)} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Yapılandırılmış Veri (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
