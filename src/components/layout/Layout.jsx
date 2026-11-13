
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import CookieConsent from '../common/CookieConsent';

export const Layout = () => {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Ana İçeriğe Atla
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content" style={{ flex: '1 0 auto' }}>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default Layout;
