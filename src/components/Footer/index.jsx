import { useTranslation } from "react-i18next";
import { useTheme } from "../Theme/ThemeContext";
import i18n from "../../i18n";
import { FiArrowUpCircle } from "react-icons/fi"; // ✅ Icon import

// ✅ Import translation files
import en from "./translation/en.json";
import hi from "./translation/hi.json";
import bn from "./translation/bn.json";
import ur from "./translation/ur.json";

// ✅ Import scoped CSS files
import "./Footer.common.css";
import "./Footer.dark.css";
import "./Footer.light.css";

const Footer = () => {
  const { t } = useTranslation("footer");
  const { darkMode } = useTheme();

  // ✅ Inject translations
  i18n.addResourceBundle("en", "footer", en, true, true);
  i18n.addResourceBundle("hi", "footer", hi, true, true);
  i18n.addResourceBundle("bn", "footer", bn, true, true);
  i18n.addResourceBundle("ur", "footer", ur, true, true);

  const scrollToTop = () => {
    const target = document.getElementById("hero");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className={`footer ${darkMode ? "footer-dark" : "footer-light"}`}>
      <p className={`footer-text ${darkMode ? "dark" : "light"}`}>
        &copy; {new Date().getFullYear()} Marghoob Alam. {t("rights")}
      </p>

      <div className="footer-row">
        <span className="footer-item">
          {t("built_with")}
          <img
            src="/React-icon..svg"
            alt="React"
            className="footer-icon-inline"
          />
          + Vite
          <img src="/Vite2.svg" alt="Vite" className="footer-icon-inline" />
        </span>
      </div>

      <div className="footer-row">
        <span className="footer-item">
          {t("editor")}
          <img src="/VsCode.svg" alt="VS Code" className="footer-icon-inline" />
          | {t("styling")}
          <img src="/CSS3.svg" alt="CSS" className="footer-icon-inline" />
        </span>
      </div>

      <div className="footer-row">
        <span className="footer-item">
          {t("powered_by")}
          <img
            src="/framer-motion.svg"
            alt="Framer Motion"
            className="footer-icon-inline"
          />
          & React Icons
          <img
            src="/React-icon..svg"
            alt="React Icons"
            className="footer-icon-inline"
          />
        </span>
      </div>

      <div className="footer-row">
        <span className="footer-item">
          {t("thanks_to")} Claude
          <img src="/Claude.svg" alt="Claude" className="footer-icon-inline" />
          , ChatGPT
          <img
            src="/ChatGPT-Logo.svg"
            alt="ChatGPT"
            className="footer-icon-inline"
          />
          , Copilot
          <img
            src="/Copilot-Logo.svg"
            alt="Copilot"
            className="footer-icon-inline"
          />
          , Nanobana
          <img
            src="/banana-decoration.svg"
            alt="Nanobana"
            className="footer-icon-inline"
          />
          , {t("and_google")}
          <img
            src="/Google_Logo.svg"
            alt="Google"
            className="footer-icon-inline"
          />
        </span>
      </div>

      <div className="footer-row">
        <span className="footer-item">
          {t("made_with")}
          <img
            src="/India_Logoi.svg"
            alt="India"
            className="footer-icon-inline"
          />
        </span>
      </div>

      {/* ✅ Scroll-to-top button */}
      <button
        className={`scroll-top-button ${darkMode ? "dark" : "light"}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FiArrowUpCircle className="scroll-top-icon" />
      </button>
    </footer>
  );
};

export default Footer;
