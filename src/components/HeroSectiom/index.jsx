import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaRobot } from "react-icons/fa";
import { useSearch } from "../Search/SearchContext";
import { useTranslation } from "react-i18next";
import { useTheme } from "../Theme/ThemeContext";
import i18n from "../../i18n";

import en from "./translation/en.json";
import hi from "./translation/hi.json";
import bn from "./translation/bn.json";
import ur from "./translation/ur.json";

import "./HeroSection.common.css";
import "./HeroSection.dark.css";
import "./HeroSection.light.css";

const HeroSection = () => {
  const { t } = useTranslation("hero");
  const { registerSearchItem } = useSearch();
  const { darkMode } = useTheme();

  useEffect(() => {
    i18n.addResourceBundle("en", "hero", en, true, true);
    i18n.addResourceBundle("hi", "hero", hi, true, true);
    i18n.addResourceBundle("bn", "hero", bn, true, true);
    i18n.addResourceBundle("ur", "hero", ur, true, true);

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
    <section
      id="home"
      className={`hero-section ${
        darkMode ? "hero-section-dark" : "hero-section-light"
      }`}
    >
      <motion.div
        className={`hero-tag ${darkMode ? "dark" : "light"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaLightbulb className="hero-tag-icon" />
        <span>{t("tagline")}</span>
      </motion.div>

      <motion.h1
        className={`hero-title ${darkMode ? "dark" : "light"}`}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("title").split("Marghoob Alam")[0]}
        <br />
        <span className={`hero-name ${darkMode ? "dark" : "light"}`}>
          Marghoob Alam
        </span>
      </motion.h1>

      <motion.h2
        className={`hero-role ${darkMode ? "dark" : "light"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {t("role")}
      </motion.h2>

      <motion.p
        className={`hero-description ${darkMode ? "dark" : "light"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {t("description")}
      </motion.p>

      <motion.div
        className={`hero-ai-box ${darkMode ? "dark" : "light"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <FaRobot className="hero-ai-icon" />
        <span>{t("ai_note")}</span>
      </motion.div>

      <motion.div
        className={`hero-buttons ${darkMode ? "dark" : "light"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.button
          type="button"
          className={`hero-btn-primary ${darkMode ? "dark" : "light"}`}
          onClick={() => scrollToSection("contact")}
          whileHover={{
            scale: 1.05,
            boxShadow: darkMode
              ? "0 0 20px rgba(255, 255, 255, 0.3)"
              : "0 0 20px rgba(0, 0, 0, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          {t("btn_contact")}
        </motion.button>

        <motion.button
          type="button"
          className={`hero-btn-secondary ${darkMode ? "dark" : "light"}`}
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
