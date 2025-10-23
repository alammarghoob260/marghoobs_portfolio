import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-20 bg-gray-800 text-white">
    <motion.div
      className="max-w-5xl mx-auto px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-gray-300 text-center">
        I’m a frontend developer with 5 years of experience in building
        responsive, user-friendly websites using React, Tailwind CSS, and modern
        web technologies.
      </p>
    </motion.div>
  </section>
);

export default AboutSection;
