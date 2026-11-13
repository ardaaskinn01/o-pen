import { Link } from 'react-router-dom';
import './Logo.css';

export const Logo = ({
  variant = 'dark', // 'dark' (varsayılan: açık zemin üzerinde siyah/turuncu) | 'light' (koyu zemin üzerinde açık)
  size = 'md',     // 'sm' | 'md' | 'lg'
  showText = true, // İsteğe bağlı olarak logo yanına kurumsal tipografi ekleme
  className = '',
  to = '/',
}) => {
  const logoContent = (
    <div className={`open-logo-wrap open-logo-wrap--${variant} open-logo-wrap--${size} ${className}`.trim()}>
      <img
        src="/brand/logo.png"
        alt="O-PEN Pen Sistemleri"
        className={`open-logo-img open-logo-img--${variant}`}
        width="600"
        height="600"
        loading="eager"
      />
      {showText && (
        <div className="open-logo-text">
          <span className="open-logo-title">
            <span className="open-logo-accent">O-</span>PEN
          </span>
          <span className="open-logo-subtitle">Pencere & Kapı Sistemleri</span>
        </div>
      )}
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="open-logo-link" aria-label="O-PEN Pencere & Kapı Sistemleri Ana Sayfa">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;

