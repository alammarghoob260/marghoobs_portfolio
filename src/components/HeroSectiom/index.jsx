import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => (
  <section id="home" className="hero-section">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hero-title"
    >
      Hello, I’m John Doe
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="hero-subtitle"
    >
      A passionate Frontend Developer crafting beautiful and functional web
      experiences.
    </motion.p>
  </section>
);

export default HeroSection;
