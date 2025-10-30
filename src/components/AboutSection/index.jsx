import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import { useSearch } from "../Search/SearchContext";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

// ✅ Import translation files
import en from "./translation/en.json";
import hi from "./translation/hi.json";
import bn from "./translation/bn.json";
import ur from "./translation/ur.json";

import "./AboutSection.css";

const AboutSection = () => {
  const { registerSearchItem } = useSearch();
  const { t } = useTranslation("about");

  useEffect(() => {
    // ✅ Inject translations
    i18n.addResourceBundle("en", "about", en, true, true);
    i18n.addResourceBundle("hi", "about", hi, true, true);
    i18n.addResourceBundle("bn", "about", bn, true, true);
    i18n.addResourceBundle("ur", "about", ur, true, true);

    // ✅ Register searchable content
    registerSearchItem({
      id: "about",
      title: "About",
      content: `${t("intro")} ${t("ai_text")} ${t("edu_1")} ${t("cert_1")}`,
    });
  }, [registerSearchItem]);

  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="about-title">{t("title")}</h2>

        <p className="about-text">{t("intro")}</p>

        <div className="info-box center-box">
          <FaRobot className="info-icon" />
          <div>
            <h3 className="info-heading">{t("ai_heading")}</h3>
            <p className="info-text">{t("ai_text")}</p>
          </div>
        </div>

        <div className="info-row-wrapper">
          <div className="info-row">
            <div className="info-box half-box">
              <h3 className="info-heading">{t("edu_heading")}</h3>
              <ul className="info-list">
                <li>{t("edu_1")}</li>
                <li>{t("edu_2")}</li>
                <li>{t("edu_3")}</li>
              </ul>
            </div>

            <div className="info-box half-box">
              <h3 className="info-heading">{t("cert_heading")}</h3>
              <ul className="info-list">
                <li>{t("cert_1")}</li>
                <li>
                  <a
                    href="https://www.example.com/certificate"
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
