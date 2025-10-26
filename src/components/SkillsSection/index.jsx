import SkillCard from "../SkillCard";
import { skills } from "../data/skills";
import "./SkillsSection.css";

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <SkillCard key={idx} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
