import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import navigation from '../../data/navigation';
import siteConfig from '../../data/site';
import productThumbnails from '../../data/productThumbnails';
import './Header.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'Kurumsal' | 'Ürünler' | null
  const [mobileExpanded, setMobileExpanded] = useState({ Kurumsal: false, Ürünler: false });
  const location = useLocation();
  const drawerRef = useRef(null);
  const firstFocusableRef = useRef(null);

  const [prevPath, setPrevPath] = useState(location.pathname);
  const dropdownTimeoutRef = useRef(null);

  const handleMouseEnter = (label) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    // 160ms intentional hover delay to prevent accidental triggers while moving mouse
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(label);
    }, 160);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  };

  // Render sırasında pathname değişimini yakalayarak state'i resetleme (React 19 & Hooks kuralına uygun)
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  // Scroll takibi (sticky shrink ve gölge)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ESC tuşu ile mobil menüyü kapatma ve body scroll kilidi
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => firstFocusableRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const toggleMobileSubmenu = (key) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header className={`open-header-wrapper ${isScrolled ? 'open-header-wrapper--scrolled' : ''}`}>
      {/* 1. ÜST İNCE BİLGİ ÇUBUĞU (Siyah / Antrasit) */}
      <div className="open-topbar">
        <Container className="open-topbar__inner">
          {/* Sol: Adres & Kurumsal Aidiyet */}
          <div className="open-topbar__col">
            <span className="open-topbar__item">
              <MapPin size={13} className="open-topbar__icon" />
              <span>{navigation.topbar.address}</span>
            </span>
            <span className="open-topbar__divider open-topbar__item--hide-sm">|</span>
            <span className="open-topbar__item open-topbar__item--hide-sm" style={{ fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.04em' }}>
              NRT GRUP İNŞ. A.Ş. KURULUŞUDUR.
            </span>
          </div>

          {/* Sağ: İletişim, Sosyal & Hızlı Teklif */}
          <div className="open-topbar__col open-topbar__col--right">
            <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="open-topbar__link">
              <Phone size={13} className="open-topbar__icon" />
              <span>{siteConfig.phone}</span>
            </a>
            <span className="open-topbar__divider">|</span>
            <a href={`mailto:${siteConfig.email}`} className="open-topbar__link open-topbar__item--hide-sm">
              <Mail size={13} className="open-topbar__icon" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* 2. ANA NAVBAR (Sticky, Scroll Shrink & Gölge) */}
      <nav className="open-main-navbar" aria-label="Ana Navigasyon">
        <Container className="open-main-navbar__inner">
          {/* Logo */}
          <div className="open-main-navbar__brand">
            <Logo variant="dark" size={isScrolled ? 'sm' : 'md'} />
          </div>

          {/* Desktop Nav Menü */}
          <ul className="open-nav-list" role="menubar">
            {navigation.main.map((item) => {
              if (item.dropdown) {
                const isOpen = openDropdown === item.label;
                return (
                  <li
                    key={item.label}
                    className="open-nav-item open-nav-item--has-dropdown"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `open-nav-link ${isActive ? 'open-nav-link--active' : ''}`
                      }
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className={`open-nav-chevron ${isOpen ? 'open-nav-chevron--rotated' : ''}`} />
                    </NavLink>

                    {/* Standart Dropdown (Kurumsal) */}
                    <div className={`open-dropdown-menu ${isOpen ? 'open-dropdown-menu--visible' : ''}`} role="menu">
                      <div className="open-dropdown-menu__header">
                        <span className="open-dropdown-menu__badge">Kurumsal Yapımız</span>
                        <p className="open-dropdown-menu__title">O-PEN Pen Sistemleri</p>
                      </div>
                      <div className="open-dropdown-menu__list">
                        {item.dropdown.map((sub) => (
                          <Link key={sub.label} to={sub.path} className="open-dropdown-link" role="menuitem">
                            <div className="open-dropdown-link__title">{sub.label}</div>
                            {sub.desc && <div className="open-dropdown-link__desc">{sub.desc}</div>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }

              if (item.isMegaMenu) {
                const isOpen = openDropdown === item.label;
                return (
                  <li
                    key={item.label}
                    className="open-nav-item open-nav-item--mega"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `open-nav-link ${isActive ? 'open-nav-link--active' : ''}`
                      }
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className={`open-nav-chevron ${isOpen ? 'open-nav-chevron--rotated' : ''}`} />
                    </NavLink>

                    {/* Mega Menü (Görselli Ürün Kartları) */}
                    <div className={`open-megamenu ${isOpen ? 'open-megamenu--visible' : ''}`} role="menu">
                      <Container className="open-megamenu__inner">
                        <div className="open-megamenu__header">
                          <div>
                            <span className="open-megamenu__badge">Ürün Yelpazesi</span>
                            <h3 className="open-megamenu__title">Yüksek Yalıtımlı Çözümlerimiz</h3>
                          </div>
                          <Link to="/urunler" className="open-megamenu__view-all">
                            <span>Tüm Ürünleri Gör</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>

                        <div className="open-megamenu__grid">
                          {item.items.map((prod) => (
                            <Link
                              key={prod.slug}
                              to={`/urunler/${prod.slug}`}
                              className="open-megamenu-card"
                              role="menuitem"
                            >
                              <div className="open-megamenu-card__img-wrap">
                                <img
                                  src={productThumbnails[prod.slug] || prod.image}
                                  alt={prod.title}
                                  className="open-megamenu-card__img"
                                  loading="lazy"
                                />
                                <div className="open-megamenu-card__overlay" />
                              </div>
                              <div className="open-megamenu-card__content">
                                <h4 className="open-megamenu-card__title">{prod.title}</h4>
                                <p className="open-megamenu-card__desc">{prod.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </Container>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.label} className="open-nav-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `open-nav-link ${isActive ? 'open-nav-link--active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Sağ Eylem: Teklif Butonu & Mobil Hamburger */}
          <div className="open-main-navbar__actions">
            <Button
              to="/teklif-al"
              variant="primary"
              size="sm"
              icon={ArrowRight}
              className="open-nav-cta-btn"
            >
              Fiyat Teklifi Al
            </Button>

            <button
              className="open-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </Container>
      </nav>

      {/* 3. MOBİL ÇEKMECE MENÜ (Erişilebilir, Trap, ESC, Akordeon) */}
      <div
        id="mobile-navigation-drawer"
        className={`open-mobile-drawer ${mobileOpen ? 'open-mobile-drawer--open' : ''}`}
        aria-hidden={!mobileOpen}
        ref={drawerRef}
      >
        <div className="open-mobile-drawer__backdrop" onClick={() => setMobileOpen(false)} />

        <div className="open-mobile-drawer__content" role="dialog" aria-modal="true" aria-label="Mobil Menü">
          {/* Çekmece Başlığı */}
          <div className="open-mobile-drawer__top">
            <Logo variant="dark" size="sm" />
            <button
              ref={firstFocusableRef}
              className="open-mobile-drawer__close"
              onClick={() => setMobileOpen(false)}
              aria-label="Kapat"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menü Linkleri */}
          <div className="open-mobile-drawer__body">
            <nav className="open-mobile-nav">
              <NavLink to="/" className="open-mobile-nav__link" onClick={() => setMobileOpen(false)}>
                Ana Sayfa
              </NavLink>

              {/* Kurumsal Akordeon */}
              <div className="open-mobile-accordion">
                <button
                  type="button"
                  className="open-mobile-accordion__header"
                  onClick={() => toggleMobileSubmenu('Kurumsal')}
                  aria-expanded={mobileExpanded.Kurumsal}
                >
                  <span>Kurumsal</span>
                  <ChevronDown
                    size={18}
                    className={`open-mobile-accordion__icon ${mobileExpanded.Kurumsal ? 'open-mobile-accordion__icon--open' : ''}`}
                  />
                </button>
                {mobileExpanded.Kurumsal && (
                  <div className="open-mobile-accordion__content">
                    <Link to="/kurumsal" className="open-mobile-accordion__sublink" onClick={() => setMobileOpen(false)}>
                      Hakkımızda
                    </Link>
                    <Link to="/kurumsal#vizyon" className="open-mobile-accordion__sublink" onClick={() => setMobileOpen(false)}>
                      Vizyon & Misyon
                    </Link>
                    <Link to="/kurumsal#neden" className="open-mobile-accordion__sublink" onClick={() => setMobileOpen(false)}>
                      Neden O-PEN?
                    </Link>
                    <Link to="/bayilik" className="open-mobile-accordion__sublink open-mobile-accordion__sublink--bold" onClick={() => setMobileOpen(false)}>
                      Bayilik Başvurusu →
                    </Link>
                  </div>
                )}
              </div>

              {/* Ürünler Akordeon */}
              <div className="open-mobile-accordion">
                <button
                  type="button"
                  className="open-mobile-accordion__header"
                  onClick={() => toggleMobileSubmenu('Ürünler')}
                  aria-expanded={mobileExpanded.Ürünler}
                >
                  <span>Ürünlerimiz</span>
                  <ChevronDown
                    size={18}
                    className={`open-mobile-accordion__icon ${mobileExpanded.Ürünler ? 'open-mobile-accordion__icon--open' : ''}`}
                  />
                </button>
                {mobileExpanded.Ürünler && (
                  <div className="open-mobile-accordion__content">
                    <Link to="/urunler" className="open-mobile-accordion__sublink open-mobile-accordion__sublink--bold" onClick={() => setMobileOpen(false)}>
                      Tüm Ürün Grupları →
                    </Link>
                    <Link to="/urunler/pvc-pencere-sistemleri" className="open-mobile-accordion__sublink" onClick={() => setMobileOpen(false)}>
                      PVC Pencere Sistemleri
                    </Link>
                    <Link to="/urunler/aluminyum-dograma" className="open-mobile-accordion__sublink" onClick={() => setMobileOpen(false)}>
                      Alüminyum Doğrama & Sürme
                    </Link>
                    <Link to="/urunler/kapi-sistemleri" className="open-mobile-accordion__sublink" onClick={() => setMobileOpen(false)}>
                      Giriş ve Dış Kapı Sistemleri
                    </Link>
                    <Link to="/urunler/panjur-kepenk-sistemleri" className="open-mobile-accordion__sublink" onClick={() => setMobileOpen(false)}>
                      Panjur & Kepenk Çözümleri
                    </Link>
                  </div>
                )}
              </div>

              <NavLink to="/projeler" className="open-mobile-nav__link" onClick={() => setMobileOpen(false)}>
                Projeler
              </NavLink>
              <NavLink to="/haberler" className="open-mobile-nav__link" onClick={() => setMobileOpen(false)}>
                Haberler & Duyurular
              </NavLink>
              <NavLink to="/galeri" className="open-mobile-nav__link" onClick={() => setMobileOpen(false)}>
                Galeri
              </NavLink>
              <NavLink to="/teklif-al" className="open-mobile-nav__link" onClick={() => setMobileOpen(false)}>
                Teklif Al
              </NavLink>
              <NavLink to="/iletisim" className="open-mobile-nav__link" onClick={() => setMobileOpen(false)}>
                İletişim
              </NavLink>
            </nav>

            {/* Mobil CTA ve İletişim Kartı */}
            <div className="open-mobile-drawer__footer">
              <Button to="/teklif-al" variant="primary" size="md" icon={ArrowRight} style={{ width: '100%' }} onClick={() => setMobileOpen(false)}>
                Fiyat Teklifi & Keşif Al
              </Button>

              <div className="open-mobile-drawer__contact">
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="open-mobile-drawer__contact-item">
                  <Phone size={15} color="var(--color-primary)" />
                  <span>{siteConfig.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="open-mobile-drawer__contact-item">
                  <Mail size={15} color="var(--color-primary)" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
