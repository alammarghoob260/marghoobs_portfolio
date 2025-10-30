import { useEffect } from "react";
import "./SkillsSection.css";
import { skills } from "../data/skills";
import { useSearch } from "../Search/SearchContext";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

// ✅ Import translation files
import en from "./translation/en.json";
import hi from "./translation/hi.json";
import bn from "./translation/bn.json";
import ur from "./translation/ur.json";

const SkillsSection = () => {
  const { registerSearchItem } = useSearch();
  const { t } = useTranslation("skills");

  useEffect(() => {
    // ✅ Inject translations
    i18n.addResourceBundle("en", "skills", en, true, true);
    i18n.addResourceBundle("hi", "skills", hi, true, true);
    i18n.addResourceBundle("bn", "skills", bn, true, true);
    i18n.addResourceBundle("ur", "skills", ur, true, true);

    // ✅ Register searchable content with translated strings
    const progressSkills = skills.progress.map((s) => t(s.name)).join(", ");
    const categorySkills = skills.categories
      .map(
        (cat) =>
          `${t(cat.title)}: ${cat.items.map((i) => t(i.name)).join(", ")}`
      )
      .join(" | ");

    registerSearchItem({
      id: "skills",
      title: t("search_title"),
      content: `${t("search_intro")} ${progressSkills}. ${t(
        "search_categories"
      )} ${categorySkills}.`,
    });
  }, [registerSearchItem, t]);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">{t("title")}</h2>

      {/* Progress Bars */}
      <h3 className="skills-subheading">{t("progress_heading")}</h3>
      <div className="progress-grid">
        {skills.progress.map((skill, idx) => (
          <div key={idx} className="progress-item">
            <div className="progress-label">
              <div className="skill-name">
                <img
                  src={skill.logo}
                  alt={t(skill.name)}
                  aria-label={t(skill.name)}
                  className="skill-logo"
                />
                <span>{t(skill.name)}</span>
              </div>
              <span>{skill.percent}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Categorized Panels */}
      <h3 className="skills-subheading">{t("category_heading")}</h3>
      <div className="category-grid">
        {skills.categories.map((category, idx) => (
          <div key={idx} className="category-card">
            <div className="category-icon" aria-label={t(category.title)}>
              {category.icon}
            </div>
            <h3 className="category-title">{t(category.title)}</h3>
            <ul className="category-list">
              {category.items.map((item, i) => (
                <li key={i} className="category-item">
                  <img
                    src={item.logo}
                    alt={t(item.name)}
                    aria-label={t(item.name)}
                    className="category-logo"
                  />
                  <span>{t(item.name)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
