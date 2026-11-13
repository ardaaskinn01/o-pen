
import './ui.css';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  borderTopOrange = false,
  dark = false,
  ...props
}) => {
  return (
    <div
      className={`open-card ${hoverEffect ? 'open-card--hover' : ''} ${borderTopOrange ? 'open-card--accent-top' : ''} ${dark ? 'open-card--dark' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
