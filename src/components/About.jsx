import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function About() {
  const sectionRef = useRef();
  const imageRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    // Parallax effect
    gsap.to(section, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Image animation
    gsap.fromTo(image,
      { scale: 0.8, opacity: 0, rotateY: 45 },
      {
        scale: 1,
        opacity: 1,
        rotateY: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: image,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Text reveal animation
    const textElements = text.querySelectorAll('h2, p, .feature-item');
    gsap.fromTo(textElements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const features = [
    {
      icon: '🎯',
      title: 'Industry-Focused Curriculum',
      description: 'Our programs are designed with input from industry experts to ensure relevance.'
    },
    {
      icon: '👥',
      title: 'Expert Mentorship',
      description: 'Learn from experienced professionals who guide you throughout your journey.'
    },
    {
      icon: '🚀',
      title: 'Real-World Projects',
      description: 'Work on actual projects that solve real business problems and challenges.'
    },
    {
      icon: '💼',
      title: 'Career Support',
      description: 'Get assistance with job placement, resume building, and interview preparation.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
  className="absolute inset-0"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  }}
></div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            ref={imageRef}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
              
              {/* Floating Stats */}
              <motion.div
                className="absolute -top-6 -right-6 glass rounded-2xl p-4 text-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 text-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Section */}
          <div ref={textRef} className="space-y-8">
            <motion.h2
              className="text-4xl md:text-6xl font-bold gradient-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              About INLIGHN TECH
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Founded with a passion for bridging the gap between academic learning and industry needs, 
              INLIGHN TECH offers immersive internship programs in Full Stack Development, Data Science, 
              AI & ML, and more. Our mission is to empower students and young professionals with practical 
              skills and confidence to succeed in the tech industry.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="feature-item glass rounded-xl p-6 hover-lift group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a
                href="#programs"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Programs
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;