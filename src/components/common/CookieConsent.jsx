import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, X } from 'lucide-react';
import Container from '../ui/Container';
import './CookieConsent.css';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('open_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('open_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('open_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="open-cookie-banner" role="region" aria-label="Çerez Bilgilendirmesi">
      <Container className="open-cookie-inner">
        <div className="open-cookie-content">
          <Shield size={22} className="open-cookie-icon" />
          <p className="open-cookie-text">
            Sitemizde kullanıcı deneyimini iyileştirmek, temel site fonksiyonlarını sağlamak ve güvenliğinizi korumak
            amacıyla zorunlu çerezler kullanılmaktadır. Detaylı bilgi için{' '}
            <Link to="/cerez" className="open-cookie-link">
              Çerez Politikamızı
            </Link>{' '}
            ve{' '}
            <Link to="/gizlilik" className="open-cookie-link">
              KVKK Aydınlatma Metnimizi
            </Link>{' '}
            inceleyebilirsiniz.
          </p>
        </div>

        <div className="open-cookie-actions">
          <button type="button" onClick={acceptCookies} className="open-cookie-btn open-cookie-btn--accept">
            Kabul Et
          </button>
          <button type="button" onClick={declineCookies} className="open-cookie-btn open-cookie-btn--decline">
            Yalnızca Zorunlular
          </button>
          <button
            type="button"
            onClick={declineCookies}
            className="open-cookie-close-btn"
            aria-label="Kapat"
          >
            <X size={18} />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CookieConsent;

