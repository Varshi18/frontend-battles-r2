import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ScrollIndicator from './components/ScrollIndicator';
import FloatingElements from './components/FloatingElements';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Cursor tracking
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Loading animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Parallax effects
    gsap.utils.toArray('.parallax').forEach((section) => {
      gsap.to(section, {
        yPercent: 10, // Reduced for subtler effect
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold gradient-text mb-8"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            INLIGHN TECH
          </motion.h1>

          <div className="loading-dots">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <motion.p
            className="text-gray-400 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Preparing your experience...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative bg-slate-900 text-white font-sans overflow-x-hidden">
      <Cursor x={cursorPos.x} y={cursorPos.y} />
      <ScrollIndicator />
      <FloatingElements />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <Hero />
        <About />
        <Programs />
        <Testimonials />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;