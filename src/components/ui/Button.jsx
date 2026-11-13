
import { Link } from 'react-router-dom';
import './ui.css';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'outline' | 'ghost' | 'dark'
  size = 'md',        // 'sm' | 'md' | 'lg'
  to,
  href,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseClass = `open-btn open-btn--${variant} open-btn--${size} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="open-btn__icon" size={size === 'lg' ? 20 : 18} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="open-btn__icon" size={size === 'lg' ? 20 : 18} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClass} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClass} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {content}
    </button>
  );
};

export default Button;
