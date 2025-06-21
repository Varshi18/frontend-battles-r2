import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      id="contact"
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
          Get In Touch
        </motion.h2>
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-lg text-center mb-8">
            Contact us via WhatsApp at <a href="https://wa.me/9368842663" className="text-blue-400 hover:underline">+91 9368842663</a> or email at <a href="mailto:info@inlighntech.com" className="text-blue-400 hover:underline">info@inlighntech.com</a>.
          </p>
          <p className="text-lg text-center">
            Corporate Office: Office No: VO-301, WeWork Prestige Central, 36, Infantry Rd, Tasker Town, Shivaji Nagar.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;