import { motion } from "framer-motion";
import "./ContactSection.css";

const ContactSection = () => (
  <section id="contact" className="contact-section">
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-text">
        Feel free to reach out via email or LinkedIn.
      </p>
      <div className="contact-links">
        <a href="mailto:john@example.com" className="contact-email">
          Email
        </a>
        <a
          href="https://linkedin.com/in/johndoe"
          target="_blank"
          rel="noreferrer"
          className="contact-linkedin"
        >
          LinkedIn
        </a>
      </div>
    </motion.div>
  </section>
);

export default ContactSection;
