import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-gray-900 text-white">
    <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} project={proj} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
