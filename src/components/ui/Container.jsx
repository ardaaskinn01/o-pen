
import './ui.css';

export const Container = ({ children, className = '', fluid = false, ...props }) => {
  return (
    <div
      className={`open-container ${fluid ? 'open-container--fluid' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
