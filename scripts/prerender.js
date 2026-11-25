import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// Pre-render edilecek tüm rotalar
const routes = [
  {
    path: '/',
    title: 'O-PEN | PVC ve Alüminyum Pencere-Kapı Sistemleri',
    desc: 'O-PEN - PVC ve alüminyum pencere, kapı ve panjur sistemlerinde kurumsal kalite, üstün ısı-ses yalıtımı ve profesyonel montaj güvencesi.',
  },
  {
    path: '/kurumsal',
    title: 'Kurumsal | O-PEN Pencere & Kapı Sistemleri',
    desc: '1977 yılından günümüze uzanan tecrübe, kurumsal vizyon, misyon ve kalite standartlarımız.',
  },
  {
    path: '/urunler',
    title: 'Ürün Gruplarımız | O-PEN Pencere & Kapı Sistemleri',
    desc: 'PVC Pencere, Alüminyum Doğrama & Sürme, Kapı Sistemleri ve Panjur & Kepenk çözümleri.',
  },
  {
    path: '/urunler/pvc-pencere-sistemleri',
    title: 'PVC Pencere Sistemleri | O-PEN Sistemleri',
    desc: 'Enerji tasarruflu, çift ve üç cam seçenekli, 5-6 odacıklı kurumsal kalitede PVC pencere sistemleri.',
  },
  {
    path: '/urunler/aluminyum-dograma',
    title: 'Alüminyum Doğrama & Sürme Sistemleri | O-PEN Sistemleri',
    desc: 'Isı yalıtımlı alüminyum profiller, panoramik sürme sistemleri ve villa projeleri için mimari çözümler.',
  },
  {
    path: '/urunler/kapi-sistemleri',
    title: 'Giriş ve Dış Kapı Sistemleri | O-PEN Sistemleri',
    desc: 'Çelik takviyeli profiller, çok noktalı emniyet kilitleri ve dayanıklı kapı çözümleri.',
  },
  {
    path: '/urunler/panjur-kepenk-sistemleri',
    title: 'Panjur ve Güvenlik Kepenk Sistemleri | O-PEN Sistemleri',
    desc: 'Güneş ışığını filtreleyen, ısı yalıtımına ekstra katkı sağlayan ve hırsızlığa karşı koruyan motorlu panjur çözümleri.',
  },
  {
    path: '/urunler/pvc-lambri-sistemleri',
    title: 'PVC Lambri & Kaplama Sistemleri | O-PEN Sistemleri',
    desc: 'Balkon, saçak altı, tavan ve ıslak hacimler için suya ve neme tam dayanıklı PVC lambri ve pervaz profilleri.',
  },
  {
    path: '/projeler',
    title: 'Projelerimiz | O-PEN Pencere ve Kapı Sistemleri',
    desc: 'Ege Bölgesi ve Türkiye genelinde imalat ve montajını üstlendiğimiz nitelikli villa, konut ve ticari doğrama projelerimiz.',
  },
  {
    path: '/referanslar',
    title: 'Projelerimiz | O-PEN Pencere ve Kapı Sistemleri',
    desc: 'Ege Bölgesi ve Türkiye genelinde imalat ve montajını üstlendiğimiz nitelikli villa, konut ve ticari doğrama projelerimiz.',
  },
  {
    path: '/galeri',
    title: 'Uygulama Galerisi | O-PEN Sistemleri',
    desc: 'Montajını tamamladığımız villa, rezidans ve konut projelerinden detay kareler ve işçilik kalitemiz.',
  },
  {
    path: '/haberler',
    title: 'Haberler & Duyurular | O-PEN Sistemleri',
    desc: 'O-PEN kurumsal haberleri, Ar-Ge yatırımları, fuar katılımları ve fabrika duyuruları.',
  },
  {
    path: '/bayilik',
    title: 'Bayilik Başvurusu | O-PEN Pencere & Kapı Satış Noktası',
    desc: 'O-PEN Pencere ve Kapı Sistemleri yetkili bayisi olun. Fabrika üretim gücü, bölge koruması ve yüksek kâr marjıyla kazanın.',
  },
  {
    path: '/teklif-al',
    title: 'Fiyat Teklifi Al | O-PEN Pencere & Kapı',
    desc: 'O-PEN PVC ve Alüminyum pencere, kapı ve panjur sistemleri için hızlı ve şeffaf fiyat teklifi alın. Milimetrik lazer keşif ve net maliyet hesabı.',
  },
  {
    path: '/iletisim',
    title: 'İletişim & Harita | O-PEN Pencere & Kapı',
    desc: 'O-PEN ile iletişime geçin. Ücretsiz keşif randevusu, fiyat teklifi, fabrika konumu ve Google Maps yol tarifi.',
  },
  {
    path: '/gizlilik',
    title: 'Gizlilik Politikası | O-PEN',
    desc: 'Kişisel verilerinizin korunması ve gizlilik haklarınız hakkında bilgilendirme metni.',
  },
  {
    path: '/cerez',
    title: 'Çerez Politikası | O-PEN',
    desc: 'Web sitemizde kullanılan temel ve işlevsel çerezler hakkında bilgilendirme.',
  },
  {
    path: '/kullanim-kosullari',
    title: 'Kullanım Koşulları | O-PEN',
    desc: 'O-PEN web sitesi yasal kullanım şartları ve telif hakları.',
  },
];

if (!fs.existsSync(distDir)) {
  console.log('[Pre-render] dist/ dizini bulunamadı. Önce "vite build" çalıştırılmalıdır.');
  process.exit(0);
}

const templatePath = path.join(distDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('[Pre-render] dist/index.html bulunamadı.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

console.log(`[Pre-render] ${routes.length} rota için statik HTML çıktıları üretiliyor...`);

routes.forEach((route) => {
  let html = template;

  // Başlık ve açıklama etiketlerini rota bazlı enjekte et (Arama motoru botları için anında hazır HTML)
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  
  const metaTags = `
    <title>${route.title}</title>
    <meta name="description" content="${route.desc}" />
    <link rel="canonical" href="https://www.o-pen.com.tr${route.path === '/' ? '' : route.path}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.desc}" />
    <meta property="og:url" content="https://www.o-pen.com.tr${route.path === '/' ? '' : route.path}" />
  `;

  html = html.replace('<title>', `${metaTags}\n    <title>`);

  if (route.path === '/') {
    fs.writeFileSync(templatePath, html, 'utf-8');
  } else {
    const routeDir = path.join(distDir, route.path.replace(/^\//, ''));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
  }
});

console.log('[Pre-render] Tüm statik HTML sayfaları SEO botları için başarıyla hazırlandı!');

