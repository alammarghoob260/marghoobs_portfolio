import { useEffect } from "react";
import { projects } from "../data/project";
import { useSearch } from "../Search/SearchContext";
import { useTranslation } from "react-i18next";
import { useTheme } from "../Theme/ThemeContext";
import i18n from "../../i18n";

// ✅ Import translation files
import en from "./translation/en.json";
import hi from "./translation/hi.json";
import bn from "./translation/bn.json";
import ur from "./translation/ur.json";

// ✅ Import scoped CSS files
import "./ProjectSection.common.css";
import "./ProjectSection.dark.css";
import "./ProjectSection.light.css";

const ProjectsSection = () => {
  const { registerSearchItem } = useSearch();
  const { t } = useTranslation("projects");
  const { darkMode } = useTheme();

  useEffect(() => {
    i18n.addResourceBundle("en", "projects", en, true, true);
    i18n.addResourceBundle("hi", "projects", hi, true, true);
    i18n.addResourceBundle("bn", "projects", bn, true, true);
    i18n.addResourceBundle("ur", "projects", ur, true, true);

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
    <div className={`projects-group ${darkMode ? "dark" : "light"}`}>
      <div className={`group-header ${darkMode ? "dark" : "light"}`}>
        <h3 className={`group-title ${darkMode ? "dark" : "light"}`}>
          <img
            src={group.logo}
            alt={`${t(group.company)} logo`}
            className="company-logo"
          />
          {t(group.company)} {t("search_title")}
        </h3>
        <p className={`group-meta ${darkMode ? "dark" : "light"}`}>
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
          <div
            key={idx}
            className={`project-card ${darkMode ? "dark" : "light"}`}
          >
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
    <section
      id="projects"
      className={`projects-section ${
        darkMode ? "projects-section-dark" : "projects-section-light"
      }`}
    >
      <h2 className={`projects-title ${darkMode ? "dark" : "light"}`}>
        {t("title")}
      </h2>
      {renderGroup(projects.pwc)}
      {renderGroup(projects.softlogique)}
    </section>
  );
};

export default ProjectsSection;
