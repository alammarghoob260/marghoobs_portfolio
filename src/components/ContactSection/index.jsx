import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearch } from "../Search/SearchContext";
import "./ContactSection.css";

const ContactSection = () => {
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
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  // ✅ Register searchable contact info
  const { registerSearchItem } = useSearch();

  useEffect(() => {
    registerSearchItem({
      id: "contact",
      title: "Contact",
      content:
        "Reach out via email, phone, GitHub, or LinkedIn. Email: alammarghoob260@gmail.com. Phone: +91 9038257967. GitHub: alammarghoob260. LinkedIn: marghoob-alam-122688157. Open to collaborations, frontend projects, and meaningful conversations.",
    });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-text">
          Feel free to reach out via email, phone, GitHub, or LinkedIn. I’m
          always open to new opportunities and collaborations.
        </p>

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
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Message"
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              Send Message
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
              <h3 className="contact-details-title">Get In Touch</h3>
              <p className="contact-details-text">
                💡 I'm always open to exciting projects, fresh ideas, and
                meaningful collaborations. Whether you're exploring a new
                venture, seeking a reliable frontend partner 👨‍💻, or simply want
                to connect 🤝, feel free to reach out. I value thoughtful
                conversations 💬 and enjoy helping others bring their vision to
                life 🌱. A quick hello 👋 or a detailed inquiry — either way,
                I’d love to hear from you and see where it leads.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
