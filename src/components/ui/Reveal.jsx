
import { motion, useReducedMotion } from 'framer-motion';

export const Reveal = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  className = '',
  threshold = 0.15,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion || direction === 'none') {
    return <div className={className}>{children}</div>;
  }

  const offset = 28;
  const directionVariants = {
    up: { hidden: { opacity: 0, y: offset }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -offset }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: offset }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -offset }, visible: { opacity: 1, x: 0 } },
  };

  const selected = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      variants={selected}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
