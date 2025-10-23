import { motion } from "framer-motion";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-gray-800 text-white">
    <motion.div
      className="max-w-3xl mx-auto text-center px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-6">
        Feel free to reach out via email or LinkedIn.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="mailto:john@example.com"
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/johndoe"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600"
        >
          LinkedIn
        </a>
      </div>
    </motion.div>
  </section>
);

export default ContactSection;
