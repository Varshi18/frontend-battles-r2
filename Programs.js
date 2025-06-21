import { motion } from 'framer-motion';

function Programs() {
  const programs = [
    {
      title: 'Full Stack Development',
      description: 'Master React, Node.js, MongoDB, and API development through real-world projects.',
    },
    {
      title: 'Data Science',
      description: 'Gain expertise in Machine Learning, Data Visualization, and AI models with hands-on datasets.',
    },
    {
      title: 'AI & Machine Learning',
      description: 'Build intelligent systems using TensorFlow, PyTorch, and real-life projects like fraud detection.',
    },
    {
      title: 'Business Analysis',
      description: 'Develop skills in Market Research, Business Intelligence, and Financial Analysis.',
    },
  ];

  return (
    <motion.section
      id="programs"
      className="py-20 bg-gray-900 parallax"
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
          Our Internship Programs
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
              <p className="text-gray-300">{program.description}</p>
              <a
                href="#contact"
                className="mt-4 inline-block text-blue-400 hover:underline"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Programs;