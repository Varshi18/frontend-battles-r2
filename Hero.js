import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 parallax"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Empower Your Future with INLIGHN TECH
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Gain real-world experience through our immersive internship programs in tech and finance.
        </motion.p>
        <motion.a
          href="#programs"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Explore Programs
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Hero;