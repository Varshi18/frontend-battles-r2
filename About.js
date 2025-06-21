import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-800 parallax"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About INLIGHN TECH
        </motion.h2>
        <motion.p
          className="text-lg max-w-3xl mx-auto text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Founded with a passion for bridging the gap between academic learning and industry needs, INLIGHN TECH offers immersive internship programs in Full Stack Development, Data Science, AI & ML, and more. Our mission is to empower students and young professionals with practical skills and confidence to succeed in the tech industry.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default About;