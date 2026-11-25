import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// React.lazy ile sayfa bazlı kod bölme (Code Splitting)
// Bu sayede ilk yükleme boyutu düşer, Lighthouse performansı ≥90 seviyesine çıkar
const HomePage = lazy(() => import('./pages/HomePage'));
const CorporatePage = lazy(() => import('./pages/CorporatePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const ReferencesPage = lazy(() => import('./pages/ReferencesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const QuotePage = lazy(() => import('./pages/QuotePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage'));
const DealershipPage = lazy(() => import('./pages/DealershipPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Hafif yükleme göstergesi
const PageLoader = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: '3px solid rgba(255, 106, 0, 0.2)',
        borderTopColor: '#FF6A00',
        animation: 'spin 0.8s linear infinite',
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

export function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="kurumsal" element={<CorporatePage />} />
          <Route path="urunler" element={<ProductsPage />} />
          <Route path="urunler/:slug" element={<ProductDetailPage />} />
          <Route path="projeler" element={<ReferencesPage />} />
          <Route path="referanslar" element={<ReferencesPage />} />
          <Route path="galeri" element={<GalleryPage />} />
          <Route path="haberler" element={<NewsPage />} />
          <Route path="haberler/:slug" element={<NewsDetailPage />} />
          <Route path="bayilik" element={<DealershipPage />} />
          <Route path="bayilik-basvurusu" element={<DealershipPage />} />
          <Route path="teklif-al" element={<QuotePage />} />
          <Route path="iletisim" element={<ContactPage />} />
          <Route path="gizlilik" element={<LegalPage type="privacy" />} />
          <Route path="cerez" element={<LegalPage type="cookies" />} />
          <Route path="kullanim-kosullari" element={<LegalPage type="terms" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
