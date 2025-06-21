import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseClick = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('click', mouseClick);

    // Add hover effects for interactive elements
    const addEventListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setCursorVariant('hover'));
        el.addEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };

    addEventListeners();

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('click', mouseClick);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 2,
      mixBlendMode: 'difference'
    }
  };

  const followerVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      scale: 1.5,
    }
  };

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      
      <motion.div
        className="cursor-follower"
        variants={followerVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15
        }}
      />

      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="cursor-ripple"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: 50,
            height: 50
          }}
        />
      ))}
    </>
  );
}

export default Cursor;