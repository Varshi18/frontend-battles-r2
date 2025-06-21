import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Programs() {
  const sectionRef = useRef();
  const cardsRef = useRef([]);

  const programs = [
    {
      title: 'Full Stack Development',
      description: 'Master React, Node.js, MongoDB, and API development through real-world projects.',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs']
    },
    {
      title: 'Data Science',
      description: 'Gain expertise in Machine Learning, Data Visualization, and AI models with hands-on datasets.',
      icon: '📊',
      color: 'from-green-500 to-emerald-500',
      skills: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Matplotlib']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Build intelligent systems using TensorFlow, PyTorch, and real-life projects like fraud detection.',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
      skills: ['TensorFlow', 'PyTorch', 'Neural Networks', 'Deep Learning', 'Computer Vision']
    },
    {
      title: 'Business Analysis',
      description: 'Develop skills in Market Research, Business Intelligence, and Financial Analysis.',
      icon: '📈',
      color: 'from-orange-500 to-red-500',
      skills: ['Excel', 'SQL', 'Tableau', 'Power BI', 'Financial Modeling']
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        { 
          y: 100, 
          opacity: 0,
          rotateX: 45
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animation
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -20,
          rotateY: 5,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }, []);

  return (
    <div>
    <section
      ref={sectionRef}
      id="programs"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
  className="absolute inset-0 bg-repeat"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
  }}
></div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Our Internship Programs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our comprehensive programs designed to give you hands-on experience and industry-ready skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              ref={el => cardsRef.current[index] = el}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full hover-lift relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {program.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 group-hover:bg-gray-600 transition-colors duration-300"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* CTA */}
                <motion.a
                  href="#contact"
                  className={`inline-flex items-center text-transparent bg-gradient-to-r ${program.color} bg-clip-text font-semibold hover:underline`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Programs;