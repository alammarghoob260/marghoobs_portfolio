import { useEffect } from "react";
import "./SkillsSection.css";
import { skills } from "../data/skills";
import { useSearch } from "../Search/SearchContext";

const SkillsSection = () => {
  const { registerSearchItem } = useSearch();

  useEffect(() => {
    // ✅ Flatten skills into searchable text
    const progressSkills = skills.progress.map((s) => s.name).join(", ");
    const categorySkills = skills.categories
      .map((cat) => `${cat.title}: ${cat.items.map((i) => i.name).join(", ")}`)
      .join(" | ");

    registerSearchItem({
      id: "skills",
      title: "Skills",
      content: `Technical skills include: ${progressSkills}. Categorized skills: ${categorySkills}.`,
    });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>

      {/* Progress Bars */}
      <div className="progress-grid">
        {skills.progress.map((skill, idx) => (
          <div key={idx} className="progress-item">
            <div className="progress-label">
              <div className="skill-name">
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                <span>{skill.name}</span>
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
      <div className="category-grid">
        {skills.categories.map((category, idx) => (
          <div key={idx} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <h3 className="category-title">{category.title}</h3>
            <ul className="category-list">
              {category.items.map((item, i) => (
                <li key={i} className="category-item">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="category-logo"
                  />
                  <span>{item.name}</span>
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
