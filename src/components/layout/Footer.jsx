import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ChevronDown,
} from 'lucide-react';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import navigation from '../../data/navigation';
import siteConfig from '../../data/site';
import './Footer.css';

// Hafif ve keskin Vektörel Sosyal Medya İkonu
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileAccordions, setMobileAccordions] = useState({
    corporate: false,
    products: false,
    quickLinks: false,
    contact: false,
  });

  // Scroll durumuna göre "Yukarı Çık" butonunu gösterme
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleAccordion = (key) => {
    setMobileAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <>
      <footer className="open-footer">
        {/* ÇOK SÜTUNLU ANA FOOTER GÖVDESİ */}
        <div className="open-footer-main">
          <Container>
            <div className="open-footer-grid">
              {/* Sütun 1: Marka & Sosyal Medya */}
              <div className="open-footer-col open-footer-col--brand">
                <Logo variant="light" size="md" />
                <div style={{ marginTop: '0.65rem', marginBottom: '0.75rem', fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '0.06em' }}>
                  NRT GRUP İNŞ. A.Ş. KURULUŞUDUR.
                </div>
                <p className="open-footer-brand-desc">
                  İleri teknoloji, üstün ısı-ses yalıtımı ve dayanıklı profil sistemlerimizle ferah yaşam alanları sunuyoruz.
                  Ustalık geleneğimiz ve yenilikçi PVC & Alüminyum teknolojimizle hizmetinizdeyiz.
                </p>

                {/* Sosyal Medya İkonları */}
                <div className="open-footer-social">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="open-footer-social__link"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="open-footer-social__link open-footer-social__link--wa"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon size={18} />
                  </a>
                </div>
              </div>

              {/* Sütun 2: Kurumsal Linkler (Masaüstü Normal / Mobilde Akordeon) */}
              <div className="open-footer-col">
                <button
                  type="button"
                  className="open-footer-col-header"
                  onClick={() => toggleAccordion('corporate')}
                  aria-expanded={mobileAccordions.corporate}
                >
                  <h4 className="open-footer-title">Kurumsal</h4>
                  <ChevronDown
                    size={16}
                    className={`open-footer-col-chevron ${
                      mobileAccordions.corporate ? 'open-footer-col-chevron--rotated' : ''
                    }`}
                  />
                </button>
                <ul
                  className={`open-footer-links ${
                    mobileAccordions.corporate ? 'open-footer-links--open' : ''
                  }`}
                >
                  {navigation.footer.corporate.map((item) => (
                    <li key={item.label}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sütun 3: Ürünler */}
              <div className="open-footer-col">
                <button
                  type="button"
                  className="open-footer-col-header"
                  onClick={() => toggleAccordion('products')}
                  aria-expanded={mobileAccordions.products}
                >
                  <h4 className="open-footer-title">Ürünlerimiz</h4>
                  <ChevronDown
                    size={16}
                    className={`open-footer-col-chevron ${
                      mobileAccordions.products ? 'open-footer-col-chevron--rotated' : ''
                    }`}
                  />
                </button>
                <ul
                  className={`open-footer-links ${
                    mobileAccordions.products ? 'open-footer-links--open' : ''
                  }`}
                >
                  {navigation.footer.products.map((item) => (
                    <li key={item.label}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sütun 4: Hızlı Bağlantılar */}
              <div className="open-footer-col">
                <button
                  type="button"
                  className="open-footer-col-header"
                  onClick={() => toggleAccordion('quickLinks')}
                  aria-expanded={mobileAccordions.quickLinks}
                >
                  <h4 className="open-footer-title">Hızlı Bağlantılar</h4>
                  <ChevronDown
                    size={16}
                    className={`open-footer-col-chevron ${
                      mobileAccordions.quickLinks ? 'open-footer-col-chevron--rotated' : ''
                    }`}
                  />
                </button>
                <ul
                  className={`open-footer-links ${
                    mobileAccordions.quickLinks ? 'open-footer-links--open' : ''
                  }`}
                >
                  {navigation.footer.quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sütun 5: İletişim Bilgileri */}
              <div className="open-footer-col open-footer-col--contact">
                <button
                  type="button"
                  className="open-footer-col-header"
                  onClick={() => toggleAccordion('contact')}
                  aria-expanded={mobileAccordions.contact}
                >
                  <h4 className="open-footer-title">İletişim & Fabrika</h4>
                  <ChevronDown
                    size={16}
                    className={`open-footer-col-chevron ${
                      mobileAccordions.contact ? 'open-footer-col-chevron--rotated' : ''
                    }`}
                  />
                </button>
                <div
                  className={`open-footer-contact-list ${
                    mobileAccordions.contact ? 'open-footer-contact-list--open' : ''
                  }`}
                >
                  <div className="open-footer-contact-item">
                    <MapPin size={17} className="open-footer-contact-icon" />
                    <span>{siteConfig.address}</span>
                  </div>
                  <div className="open-footer-contact-item">
                    <Phone size={17} className="open-footer-contact-icon" />
                    <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}>{siteConfig.phone}</a>
                  </div>
                  <div className="open-footer-contact-item">
                    <WhatsAppIcon size={17} className="open-footer-contact-icon" />
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      WhatsApp: {siteConfig.whatsapp}
                    </a>
                  </div>
                  <div className="open-footer-contact-item">
                    <Mail size={17} className="open-footer-contact-icon" />
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* 3. ALT ŞERİT (Telif, Siyah Zemin, Turuncu Vurgular, Yasal Linkler) */}
        <div className="open-footer-bottom">
          <Container className="open-footer-bottom__inner">
            <p className="open-footer-bottom__copy">
              © {currentYear} <span className="open-footer-bottom__highlight">{siteConfig.name}</span> Pen Sistemleri. NRT GRUP İNŞ. A.Ş. KURULUŞUDUR. Tüm hakları saklıdır.
            </p>
            <div className="open-footer-bottom__legal">
              {navigation.footer.legal.map((leg) => (
                <Link key={leg.label} to={leg.path} className="open-footer-legal-link">
                  {leg.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </footer>

      {/* 4. SABİT WHATSAPP YÜZEN BUTONU (+90 546 768 99 92) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="open-floating-whatsapp"
        aria-label="WhatsApp İletişim Hattı"
        title="WhatsApp ile Hemen Mesaj Gönderin"
      >
        <WhatsAppIcon size={32} className="open-floating-whatsapp__icon" />
        <span className="open-floating-whatsapp__tooltip">Hemen Mesaj Atın</span>
        <span className="open-floating-whatsapp__pulse" />
      </a>

      {/* 5. YUKARI ÇIK BUTONU */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="open-floating-scrolltop"
          aria-label="Sayfanın Başına Çık"
          title="Yukarı Çık"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Footer;
