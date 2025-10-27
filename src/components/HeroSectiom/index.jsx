import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => (
  <section id="home" className="hero-section">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
      className="hero-title"
    >
      Hello, I'm John Doe
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      whileHover={{ scale: 1.02, color: "#22d3ee" }}
      className="hero-subtitle"
    >
      A passionate Frontend Developer crafting beautiful and functional web
      experiences.
    </motion.p>

    {/* Optional: Add CTA Buttons with Hover */}
    <motion.div
      className="hero-buttons"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <motion.button
        className="hero-btn-primary"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 25px rgba(34, 211, 238, 0.8)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        View Projects
      </motion.button>
      <motion.button
        className="hero-btn-secondary"
        whileHover={{ scale: 1.1, borderColor: "#22d3ee" }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Me
      </motion.button>
    </motion.div>
  </section>
);

export default HeroSection;
