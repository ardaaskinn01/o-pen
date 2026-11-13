
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import Container from './Container';
import './ui.css';

export const PageHero = ({
  title,
  subtitle,
  badge = 'O-PEN Pencere & Kapı Sistemleri',
  breadcrumbs = [],
  backgroundImage,
}) => {
  return (
    <div
      className="open-page-hero"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="open-page-hero__overlay" />
      <Container className="open-page-hero__content">
        <nav aria-label="Breadcrumb" className="open-breadcrumbs">
          <Link to="/" className="open-breadcrumbs__item">
            <Home size={14} />
            <span>Ana Sayfa</span>
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <Fragment key={index}>
              <ChevronRight size={14} className="open-breadcrumbs__separator" />
              {crumb.path ? (
                <Link to={crumb.path} className="open-breadcrumbs__item">
                  {crumb.label}
                </Link>
              ) : (
                <span className="open-breadcrumbs__item open-breadcrumbs__item--active" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </Fragment>
          ))}
        </nav>

        {badge && <div className="open-page-hero__badge">{badge}</div>}
        <h1 className="open-page-hero__title">{title}</h1>
        {subtitle && <p className="open-page-hero__subtitle">{subtitle}</p>}
      </Container>
    </div>
  );
};

export default PageHero;
