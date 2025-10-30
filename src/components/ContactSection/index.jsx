import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearch } from "../Search/SearchContext";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import "./ContactSection.css";

// ✅ Import translation files
import en from "./translation/en.json";
import hi from "./translation/hi.json";
import bn from "./translation/bn.json";
import ur from "./translation/ur.json";

const ContactSection = () => {
  const { registerSearchItem } = useSearch();
  const { t } = useTranslation("contact");

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
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  useEffect(() => {
    // ✅ Inject translations
    i18n.addResourceBundle("en", "contact", en, true, true);
    i18n.addResourceBundle("hi", "contact", hi, true, true);
    i18n.addResourceBundle("bn", "contact", bn, true, true);
    i18n.addResourceBundle("ur", "contact", ur, true, true);

    // ✅ Register searchable content
    registerSearchItem({
      id: "contact",
      title: t("search_title"),
      content: t("search_content"),
    });
  }, [registerSearchItem, t]);

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-title">{t("title")}</h2>
        <p className="contact-text">{t("intro")}</p>

        <div className="contact-content">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Form Fields */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                {t("form_name")} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder={t("placeholder_name")}
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                {t("form_email")} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder={t("placeholder_email")}
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                {t("form_subject")} *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder={t("placeholder_subject")}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

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
            className="contact-info"
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
