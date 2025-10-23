const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <h3 className="skill-name">{skill.name}</h3>
      <p className="skill-level">{skill.level}</p>
    </div>
  );
};

export default SkillCard;
