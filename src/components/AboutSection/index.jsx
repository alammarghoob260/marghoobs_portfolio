import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import { useSearch } from "../Search/SearchContext";
import { useTranslation } from "react-i18next";
import { useTheme } from "../Theme/ThemeContext";
import i18n from "../../i18n";

// ✅ Import translation files
import en from "./translation/en.json";
import hi from "./translation/hi.json";
import bn from "./translation/bn.json";
import ur from "./translation/ur.json";

// ✅ Import scoped CSS files
import "./AboutSection.common.css";
import "./AboutSection.dark.css";
import "./AboutSection.light.css";

const AboutSection = () => {
  const { registerSearchItem } = useSearch();
  const { t } = useTranslation("about");
  const { darkMode } = useTheme();

  useEffect(() => {
    i18n.addResourceBundle("en", "about", en, true, true);
    i18n.addResourceBundle("hi", "about", hi, true, true);
    i18n.addResourceBundle("bn", "about", bn, true, true);
    i18n.addResourceBundle("ur", "about", ur, true, true);

    registerSearchItem({
      id: "about",
      title: "About",
      content: `${t("intro")} ${t("ai_text")} ${t("edu_1")} ${t("cert_1")}`,
    });
  }, [registerSearchItem]);

  return (
    <section
      id="about"
      className={`about-section ${
        darkMode ? "about-section-dark" : "about-section-light"
      }`}
    >
      <motion.div
        className={`about-container ${darkMode ? "dark" : "light"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`about-title ${darkMode ? "dark" : "light"}`}>
          {t("title")}
        </h2>

        <p className={`about-text ${darkMode ? "dark" : "light"}`}>
          {t("intro")}
        </p>

        <div className={`info-box center-box ${darkMode ? "dark" : "light"}`}>
          <FaRobot className="info-icon" />
          <div>
            <h3 className={`info-heading ${darkMode ? "dark" : "light"}`}>
              {t("ai_heading")}
            </h3>
            <p className={`info-text ${darkMode ? "dark" : "light"}`}>
              {t("ai_text")}
            </p>
          </div>
        </div>

        <div className="info-row-wrapper">
          <div className="info-row">
            <div className={`info-box half-box ${darkMode ? "dark" : "light"}`}>
              <h3 className={`info-heading ${darkMode ? "dark" : "light"}`}>
                {t("edu_heading")}
              </h3>
              <ul className="info-list">
                <li>{t("edu_1")}</li>
                <li>{t("edu_2")}</li>
                <li>{t("edu_3")}</li>
              </ul>
            </div>

            <div className={`info-box half-box ${darkMode ? "dark" : "light"}`}>
              <h3 className={`info-heading ${darkMode ? "dark" : "light"}`}>
                {t("cert_heading")}
              </h3>
              <ul className="info-list">
                <li>{t("cert_1")}</li>
                <li>
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/9K8B95VW9LL8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    {t("cert_link")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
