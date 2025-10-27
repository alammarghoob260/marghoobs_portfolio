import "./ProjectSection.css";
import { projects } from "../data/project";

const ProjectsSection = () => {
  const renderGroup = (group) => (
    <div className="projects-group">
      <div className="group-header">
        <h3 className="group-title">
          <img
            src={group.logo}
            alt={`${group.company} logo`}
            className="company-logo"
          />
          {group.company} Projects
        </h3>
        <p className="group-meta">
          <strong>Role:</strong> {group.role} <br />
          <strong>Tenure:</strong> {group.tenure}
          {group.note && (
            <>
              <br />
              <strong>Note:</strong> {group.note}
            </>
          )}
        </p>
      </div>

      <div className="projects-grid">
        {group.items.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h4 className="project-name">{proj.name}</h4>
            <p className="project-company">
              {group.company} • <span>{proj.duration}</span>
            </p>
            <p className="project-description">{proj.description}</p>
            <ul className="project-highlights">
              {proj.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="project-tech">
              {proj.tech.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Professional Projects</h2>
      {renderGroup(projects.pwc)}
      {renderGroup(projects.softlogique)}
    </section>
  );
};

export default ProjectsSection;
