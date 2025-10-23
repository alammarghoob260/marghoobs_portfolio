import { motion } from "framer-motion";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.4 }}
    className="project-card"
  >
    <h3 className="project-title">{project.name}</h3>
    <p className="project-description">{project.description}</p>
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="project-link"
    >
      View Project
    </a>
  </motion.div>
);

export default ProjectCard;
