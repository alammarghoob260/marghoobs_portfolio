import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaRobot } from "react-icons/fa";
import { useSearch } from "../Search/SearchContext";
import "./HeroSection.css";

const HeroSection = () => {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Register searchable content
  const { registerSearchItem } = useSearch();

  useEffect(() => {
    registerSearchItem({
      id: "home",
      title: "Hero",
      content:
        "Hi, I'm Marghoob Alam. Frontend Developer | React.js Specialist. 3+ years experience building scalable, responsive web applications. Leveraging AI to enhance development workflows & productivity.",
    });
  }, []);

  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-tag"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaLightbulb className="hero-tag-icon" />
        <span>AI Powered Developer</span>
      </motion.div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <br />
        <span className="hero-name">Marghoob Alam</span>
      </motion.h1>

      <motion.h2
        className="hero-role"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Frontend Developer | React.js Specialist
      </motion.h2>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        3+ years of experience building scalable, responsive web applications
        with modern technologies.
      </motion.p>

      <motion.div
        className="hero-ai-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <FaRobot className="hero-ai-icon" />
        <span>
          Leveraging AI to enhance development workflows & productivity
        </span>
      </motion.div>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.button
          type="button"
          className="hero-btn-primary"
          onClick={() => scrollToSection("contact")}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.button>

        <motion.button
          type="button"
          className="hero-btn-secondary"
          onClick={() => scrollToSection("projects")}
          whileHover={{
            scale: 1.05,
            borderColor: "#22d3ee",
            color: "#22d3ee",
          }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
