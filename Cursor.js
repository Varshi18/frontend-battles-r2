import { motion } from 'framer-motion';

function Cursor({ x, y }) {
  return (
    <motion.div
      className="custom-cursor"
      style={{ left: x, top: y }}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 500, damping: 50 }}
    />
  );
}

export default Cursor;