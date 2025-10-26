const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card" data-level={skill.level}>
      <h3 className="skill-name">{skill.name}</h3>
      <p className="skill-level">{skill.level}</p>
    </div>
  );
};

export default SkillCard;
