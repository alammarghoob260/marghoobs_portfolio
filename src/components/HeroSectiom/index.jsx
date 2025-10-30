import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaRobot } from "react-icons/fa";
import { useSearch } from "../Search/SearchContext";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n"; // ✅ Import i18n instance

// ✅ Import translation files
import en from "./translation/en.json";
import hi from "./translation/hi.json";
import bn from "./translation/bn.json";
import ur from "./translation/ur.json";

import "./HeroSection.css";

const HeroSection = () => {
  const { t } = useTranslation("hero"); // ✅ Use namespace
  const { registerSearchItem } = useSearch();

  useEffect(() => {
    // ✅ Load translations into i18n
    i18n.addResourceBundle("en", "hero", en, true, true);
    i18n.addResourceBundle("hi", "hero", hi, true, true);
    i18n.addResourceBundle("bn", "hero", bn, true, true);
    i18n.addResourceBundle("ur", "hero", ur, true, true);

    // ✅ Register searchable content
    registerSearchItem({
      id: "home",
      title: "Hero",
      content: `${t("title")} ${t("role")} ${t("description")} ${t("ai_note")}`,
    });
  }, [registerSearchItem]);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-tag"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaLightbulb className="hero-tag-icon" />
        <span>{t("tagline")}</span>
      </motion.div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("title").split("Marghoob Alam")[0]}
        <br />
        <span className="hero-name">Marghoob Alam</span>
      </motion.h1>

      <motion.h2
        className="hero-role"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {t("role")}
      </motion.h2>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {t("description")}
      </motion.p>

      <motion.div
        className="hero-ai-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <FaRobot className="hero-ai-icon" />
        <span>{t("ai_note")}</span>
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
          {t("btn_contact")}
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
          {t("btn_projects")}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
