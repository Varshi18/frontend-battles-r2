import { useEffect, useRef, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const backgroundRef = useRef();

  const [hovering, setHovering] = useState(false);

  const particles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 10 + 8,
    })), []);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const background = backgroundRef.current;

    // Parallax effect
    gsap.to(hero, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    title.style.filter = 'blur(10px)';
    const chars = title.textContent.split('');
    title.innerHTML = chars
      .map((char, i) => `<span class='inline-block kinetic-char' style='display:inline-block; transform:rotateX(90deg);'>${char === ' ' ? '&nbsp;' : char}</span>`) 
      .join('');

    gsap.to('.kinetic-char', {
      rotateX: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.8,
      stagger: 0.03,
      ease: 'back.out(1.7)',
    });

    gsap.to(title, {
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power2.out',
    });

    gsap.fromTo(
      subtitle,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.4,
        duration: 1,
        ease: 'power2.out',
      }
    );

    // Blur background on scroll
    gsap.to(background, {
      filter: 'blur(4px)',
      scrollTrigger: {
        trigger: hero,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20"
    >
      {/* Background gradient & pattern */}
      <div className="absolute inset-0">
        <div
          ref={backgroundRef}
          className="absolute inset-0 opacity-20 bg-repeat transition-all duration-300"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            filter: hovering ? 'blur(3px)' : 'none'
          }}
        ></div>
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-blue-400 rounded-full opacity-30"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6"
        >
          Empower Your Future with INLIGHN TECH
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-gray-300 mb-10"
        >
          Gain real-world experience through our immersive internship programs in tech and finance.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.a
            href="#programs"
            onHoverStart={() => setHovering(true)}
            onHoverEnd={() => setHovering(false)}
            className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore Programs</span>
            <motion.div
              className="absolute inset-0"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
              style={{ background: 'linear-gradient(to right, #7e5bef, #3b82f6)', zIndex: 0 }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            onHoverStart={() => setHovering(true)}
            onHoverEnd={() => setHovering(false)}
            className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}