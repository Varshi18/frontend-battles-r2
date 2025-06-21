import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      className="py-8 bg-gray-800 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p>&copy; 2025 INLIGHN TECH. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="https://www.linkedin.com/company/inlighn-tech/" className="text-blue-400 hover:underline">LinkedIn</a>
        <a href="https://www.youtube.com/@INLIGHNTECH" className="text-blue-400 hover:underline">YouTube</a>
        <a href="https://wa.me/9368842663" className="text-blue-400 hover:underline">WhatsApp</a>
      </div>
    </motion.footer>
  );
}

export default Footer;