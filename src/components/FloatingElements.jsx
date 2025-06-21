import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

function FloatingElements() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Generate element properties once
  const elements = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 40,
      baseX: Math.random() * window.innerWidth,
      baseY: Math.random() * window.innerHeight,
    })), []
  );

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => {
        const x = useTransform(mouseX, (mx) => el.baseX + (mx - window.innerWidth / 2) * 0.01);
        const y = useTransform(mouseY, (my) => el.baseY + (my - window.innerHeight / 2) * 0.01);

        return (
          <motion.div
            key={el.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            style={{
              width: el.size,
              height: el.size,
              x,
              y,
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          />
        );
      })}
    </div>
  );
}

export default FloatingElements;
