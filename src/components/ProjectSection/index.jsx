import { useEffect } from "react";
import "./ProjectSection.css";
import { projects } from "../data/project";
import { useSearch } from "../Search/SearchContext";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

// ✅ Import translation files
import en from "./translation/en.json";
import hi from "./translation/hi.json";
import bn from "./translation/bn.json";
import ur from "./translation/ur.json";

const ProjectsSection = () => {
  const { registerSearchItem } = useSearch();
  const { t } = useTranslation("projects");

  useEffect(() => {
    // ✅ Inject translations
    i18n.addResourceBundle("en", "projects", en, true, true);
    i18n.addResourceBundle("hi", "projects", hi, true, true);
    i18n.addResourceBundle("bn", "projects", bn, true, true);
    i18n.addResourceBundle("ur", "projects", ur, true, true);

    // ✅ Flatten all project data into searchable text
    const allProjects = [];

    Object.values(projects).forEach((group) => {
      group.items.forEach((proj) => {
        allProjects.push(
          `${t(proj.name)} (${t(group.company)}) — ${t(proj.description)}. ${t(
            "tech_label"
          )} ${proj.tech.map(t).join(", ")}. ${t(
            "highlights_label"
          )} ${proj.highlights.map(t).join(", ")}`
        );
      });
    });

    registerSearchItem({
      id: "projects",
      title: t("search_title"),
      content: allProjects.join(" | "),
    });
  }, [registerSearchItem, t]);

  const renderGroup = (group) => (
    <div className="projects-group">
      <div className="group-header">
        <h3 className="group-title">
          <img
            src={group.logo}
            alt={`${t(group.company)} logo`}
            className="company-logo"
          />
          {t(group.company)} {t("search_title")}
        </h3>
        <p className="group-meta">
          <strong>{t("role_label")}</strong> {t(group.role)} <br />
          <strong>{t("tenure_label")}</strong> {t(group.tenure)}
          {group.note && (
            <>
              <br />
              <strong>{t("note_label")}</strong> {t(group.note)}
            </>
          )}
        </p>
      </div>

      <div className="projects-grid">
        {group.items.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h4 className="project-name">{t(proj.name)}</h4>
            <p className="project-company">
              {t(group.company)} • <span>{t(proj.duration)}</span>
            </p>
            <p className="project-description">{t(proj.description)}</p>
            <ul className="project-highlights">
              {proj.highlights.map((point, i) => (
                <li key={i}>{t(point)}</li>
              ))}
            </ul>
            <div className="project-tech">
              {proj.tech.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {t(tech)}
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
      <h2 className="projects-title">{t("title")}</h2>
      {renderGroup(projects.pwc)}
      {renderGroup(projects.softlogique)}
    </section>
  );
};

export default ProjectsSection;
