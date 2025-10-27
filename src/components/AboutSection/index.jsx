import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaRobot } from "react-icons/fa";
import "./AboutSection.css";

const AboutSection = () => (
  <section id="about" className="about-section">
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="about-title">About Me</h2>

      <p className="about-text">
        I'm a frontend developer with over 3 years of experience specializing in
        React.js and modern web technologies. Currently working at PwC India, I
        focus on building scalable, user-friendly applications that solve real
        business problems. I’m involved in the full development lifecycle — from
        requirement analysis to production deployment — and I love creating
        interactive dashboards, data visualizations, and responsive interfaces.
      </p>

      {/* AI Enhanced Box */}
      <div className="info-box center-box">
        <FaRobot className="info-icon" />
        <div>
          <h3 className="info-heading">AI-Enhanced Development</h3>
          <p className="info-text">
            I actively leverage AI tools and assistants to enhance my
            development workflow, improve code quality, accelerate
            problem-solving, and stay at the cutting edge of technology. This
            approach enables me to deliver superior user experiences faster
            while continuously learning and adapting to new technologies.
          </p>
        </div>
      </div>

      {/* Side-by-side Boxes inside same width as AI box */}
      <div className="info-row-wrapper">
        <div className="info-row">
          {/* Education Box */}
          <div className="info-box half-box">
            <h3 className="info-heading">Education</h3>
            <ul className="info-list">
              <li>Bachelor in Computer Application</li>
              <li>BP Poddar Institute of Management & Technology</li>
              <li>CGPA: 1.8 (2018–2021)</li>
            </ul>
          </div>

          {/* Certification Box */}
          <div className="info-box half-box">
            <h3 className="info-heading">Certification</h3>
            <ul className="info-list">
              <li>React Basics by Meta</li>
              <li>
                <a
                  href="https://www.example.com/certificate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Certificate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Icons */}
      <div className="contact-bar">
        <a href="mailto:your.email@example.com" className="contact-icon">
          <FaEnvelope />
        </a>
        <a href="tel:+919876543210" className="contact-icon">
          <FaPhone />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaLinkedin />
        </a>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
