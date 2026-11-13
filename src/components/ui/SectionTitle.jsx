
import './ui.css';

export const SectionTitle = ({
  badge,
  title,
  subtitle,
  align = 'center', // 'left' | 'center' | 'right'
  dark = false,
  className = '',
}) => {
  return (
    <div className={`open-section-header open-section-header--${align} ${dark ? 'open-section-header--dark' : ''} ${className}`.trim()}>
      {badge && <span className="open-section-header__badge">{badge}</span>}
      <h2 className="open-section-header__title">{title}</h2>
      <div className="open-section-header__line" />
      {subtitle && <p className="open-section-header__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
