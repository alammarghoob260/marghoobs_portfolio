import { motion } from "framer-motion";
import SummaryCard from "../SummaryCards";
import "./AboutSection.css";

const summaries = [
  {
    title: "3+ Years Experience",
    description: "Building modern web applications with React and TypeScript",
  },
  {
    title: "50+ Projects",
    description: "Successfully delivered projects for clients worldwide",
  },
  {
    title: "Clean Code",
    description:
      "Writing maintainable and scalable code following best practices",
  },
];

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
        I'm a frontend developer with 5 years of experience in building
        responsive, user-friendly websites using React, Tailwind CSS, and modern
        web technologies.
      </p>

      {/* Summary Cards Grid */}
      <div className="summary-grid">
        {summaries.map((summary, idx) => (
          <SummaryCard key={idx} summary={summary} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
