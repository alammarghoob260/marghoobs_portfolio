import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
import "./ContactSection.common.css";
import "./ContactSection.dark.css";
import "./ContactSection.light.css";

const ContactSection = () => {
  const { registerSearchItem } = useSearch();
  const { t } = useTranslation("contact");
  const { darkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:alammarghoob260@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `${t("form_name")}: ${formData.name}\n${t("form_email")}: ${
        formData.email
      }\n\n${t("form_message")}:\n${formData.message}`
    )}`;

    // ✅ Try to open mail client
    window.location.href = mailtoLink;

    // ✅ Fallback alert after short delay
    setTimeout(() => {
      alert(
        `${t("fallback_alert")}\n\n${t("form_name")}: ${formData.name}\n${t(
          "form_email"
        )}: ${formData.email}\n${t("form_subject")}: ${formData.subject}\n\n${t(
          "form_message"
        )}:\n${formData.message}`
      );
    }, 1000);

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  useEffect(() => {
    i18n.addResourceBundle("en", "contact", en, true, true);
    i18n.addResourceBundle("hi", "contact", hi, true, true);
    i18n.addResourceBundle("bn", "contact", bn, true, true);
    i18n.addResourceBundle("ur", "contact", ur, true, true);

    registerSearchItem({
      id: "contact",
      title: t("search_title"),
      content: t("search_content"),
    });
  }, [registerSearchItem, t]);

  return (
    <section
      id="contact"
      className={`contact-section ${
        darkMode ? "contact-section-dark" : "contact-section-light"
      }`}
    >
      <motion.div
        className={`contact-container ${darkMode ? "dark" : "light"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`contact-title ${darkMode ? "dark" : "light"}`}>
          {t("title")}
        </h2>
        <p className={`contact-text ${darkMode ? "dark" : "light"}`}>
          {t("intro")}
        </p>

        <div className="contact-content">
          <motion.form
            className={`contact-form ${darkMode ? "dark" : "light"}`}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Form Fields */}
            {["name", "email", "subject"].map((field) => (
              <div key={field} className="form-group">
                <label htmlFor={field} className="form-label">
                  {t(`form_${field}`)} *
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  className="form-input"
                  placeholder={t(`placeholder_${field}`)}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  autoComplete={field}
                />
              </div>
            ))}

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                {t("form_message")} *
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder={t("placeholder_message")}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                aria-label={t("form_message")}
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              {t("form_submit")}
            </button>
          </motion.form>

          <motion.div
            className={`contact-info ${darkMode ? "dark" : "light"}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="contact-links">
              <a
                href="mailto:alammarghoob260@gmail.com"
                className="contact-email"
              >
                <img
                  src="../../../public/Gmail_icon_(2020).svg"
                  alt="Gmail"
                  className="contact-icon"
                />
                Gmail
              </a>
              <a href="tel:+919038257967" className="contact-email">
                <img
                  src="../../../public/mobile-phone-51.svg"
                  alt="Phone"
                  className="contact-icon"
                />
                +91 9038257967
              </a>
              <a
                href="https://github.com/alammarghoob260"
                target="_blank"
                rel="noreferrer"
                className="contact-linkedin"
              >
                <img
                  src="../../../public/GitHub_Invertocat_Light.svg"
                  alt="GitHub"
                  className="contact-icon"
                />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/marghoob-alam-122688157/"
                target="_blank"
                rel="noreferrer"
                className="contact-linkedin"
              >
                <img
                  src="../../../public/LinkedIn_icon.svg"
                  alt="LinkedIn"
                  className="contact-icon"
                />
                LinkedIn
              </a>
            </div>

            <div className="contact-details">
              <h3 className="contact-details-title">{t("details_title")}</h3>
              <p className="contact-details-text">{t("details_text")}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
