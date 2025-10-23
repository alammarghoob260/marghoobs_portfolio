import { motion } from "framer-motion";

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.4 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg"
  >
    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="text-blue-400 hover:underline"
    >
      View Project
    </a>
  </motion.div>
);

export default ProjectCard;
