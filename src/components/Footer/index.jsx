import "./Footer.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

// ✅ Import translation files
import en from "./translation/en.json";
import hi from "./translation/hi.json";
import bn from "./translation/bn.json";
import ur from "./translation/ur.json";

const Footer = () => {
  const { t } = useTranslation("footer");

  // ✅ Inject translations
  i18n.addResourceBundle("en", "footer", en, true, true);
  i18n.addResourceBundle("hi", "footer", hi, true, true);
  i18n.addResourceBundle("bn", "footer", bn, true, true);
  i18n.addResourceBundle("ur", "footer", ur, true, true);

  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Marghoob Alam. {t("rights")}
      </p>

      <div className="footer-row">
        <span className="footer-item">
          {t("built_with")}
          <img
            src="../../../public/React-icon..svg"
            alt="React"
            className="footer-icon-inline"
          />
          + Vite
          <img
            src="../../../public/Vite2.svg"
            alt="Vite"
            className="footer-icon-inline"
          />
        </span>
      </div>

      <div className="footer-row">
        <span className="footer-item">
          {t("editor")}
          <img
            src="../../../public/VsCode.svg"
            alt="VS Code"
            className="footer-icon-inline"
          />
          | {t("styling")}
          <img
            src="../../../public/CSS3.svg"
            alt="CSS"
            className="footer-icon-inline"
          />
        </span>
      </div>

      <div className="footer-row">
        <span className="footer-item">
          {t("powered_by")}
          <img
            src="../../../public/framer-motion.svg"
            alt="Framer Motion"
            className="footer-icon-inline"
          />
          & React Icons
          <img
            src="../../../public/React-icon..svg"
            alt="React Icons"
            className="footer-icon-inline"
          />
        </span>
      </div>

      <div className="footer-row">
        <span className="footer-item">
          {t("thanks_to")} Claude
          <img
            src="../../../public/Claude.svg"
            alt="Claude"
            className="footer-icon-inline"
          />
          , ChatGPT
          <img
            src="../../../public/ChatGPT-Logo.svg"
            alt="ChatGPT"
            className="footer-icon-inline"
          />
          , Copilot
          <img
            src="../../../public/Copilot-Logo.svg"
            alt="Copilot"
            className="footer-icon-inline"
          />
          , Nanobana
          <img
            src="../../../public/banana-decoration.svg"
            alt="Nanobana"
            className="footer-icon-inline"
          />
          , {t("and_google")}
          <img
            src="../../../public/Google_Logo.svg"
            alt="Google"
            className="footer-icon-inline"
          />
        </span>
      </div>

      <div className="footer-row">
        <span className="footer-item">
          {t("made_with")}
          <img
            src="../../../public/India_Logoi.svg"
            alt="India"
            className="footer-icon-inline"
          />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
