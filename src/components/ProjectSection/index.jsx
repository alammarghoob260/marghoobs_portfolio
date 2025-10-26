import ProjectCard from "../ProjectCard";
import { projects } from "../data/project";
import "./ProjectSection.css";

const ProjectsSection = () => (
  <section id="projects" className="projects-section">
    <h2 className="projects-title">Projects</h2>
    <div className="projects-grid">
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} project={proj} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
