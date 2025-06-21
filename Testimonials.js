import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Data Science Intern',
      quote: 'The Data Science internship at INLIGHN TECH was transformative. Working on real-world datasets boosted my confidence and skills.',
    },
    {
      name: 'Jane Smith',
      role: 'Full Stack Developer Intern',
      quote: 'Building web apps from scratch with React and Node.js was an incredible experience. The mentorship was top-notch!',
    },
    {
      name: 'Alex Brown',
      role: 'Business Analysis Intern',
      quote: 'The projects provided deep insights into business strategies. I developed strong analytical skills that I use daily.',
    },
  ];

  return (
    <motion.section
      id="testimonials"
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
          What Our Interns Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-400">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Testimonials;