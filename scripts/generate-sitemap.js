import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Site temel URL'i
const DOMAIN = 'https://www.o-pen.com.tr';
const currentDate = new Date().toISOString().split('T')[0];

// Statik sayfalar ve öncelikleri (priority)
const staticRoutes = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/kurumsal', changefreq: 'monthly', priority: '0.8' },
  { url: '/urunler', changefreq: 'weekly', priority: '0.9' },
  { url: '/referanslar', changefreq: 'monthly', priority: '0.8' },
  { url: '/galeri', changefreq: 'weekly', priority: '0.8' },
  { url: '/teklif-al', changefreq: 'weekly', priority: '0.9' },
  { url: '/iletisim', changefreq: 'monthly', priority: '0.8' },
  { url: '/gizlilik', changefreq: 'yearly', priority: '0.3' },
  { url: '/cerez', changefreq: 'yearly', priority: '0.3' },
  { url: '/kullanim-kosullari', changefreq: 'yearly', priority: '0.3' },
];

// Ürün slug'ları
const productSlugs = [
  'pvc-pencere-sistemleri',
  'aluminyum-dograma',
  'kapi-sistemleri',
  'panjur-kepenk-sistemleri',
];

const productRoutes = productSlugs.map((slug) => ({
  url: `/urunler/${slug}`,
  changefreq: 'weekly',
  priority: '0.9',
}));

const allRoutes = [...staticRoutes, ...productRoutes];

// 1. sitemap.xml Üretimi
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${DOMAIN}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// 2. robots.txt Üretimi
const robotsContent = `# ==============================================================================
# O-PEN Pencere & Kapı Sistemleri Robots.txt
# ==============================================================================
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /*?*

# Sitemap Konumu
Sitemap: ${DOMAIN}/sitemap.xml
`;

// Dosyaları hem public/ hem de dist/ altına yaz
const targetDirs = [
  path.join(rootDir, 'public'),
  path.join(rootDir, 'dist'),
];

targetDirs.forEach((dir) => {
  if (fs.existsSync(dir)) {
    fs.writeFileSync(path.join(dir, 'sitemap.xml'), sitemapContent, 'utf-8');
    fs.writeFileSync(path.join(dir, 'robots.txt'), robotsContent, 'utf-8');
    console.log(`[SEO] sitemap.xml ve robots.txt -> ${dir} klasörüne başarıyla yazıldı.`);
  }
});

