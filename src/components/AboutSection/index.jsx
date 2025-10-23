import { motion } from "framer-motion";
import "./AboutSection.css";

const AboutSection = () => (
  <section id="about" className="about-section">
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        I’m a frontend developer with 5 years of experience in building
        responsive, user-friendly websites using React, Tailwind CSS, and modern
        web technologies.
      </p>
    </motion.div>
  </section>
);

export default AboutSection;
