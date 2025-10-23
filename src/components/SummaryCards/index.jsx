const SummaryCard = ({ summary }) => {
  return (
    <div className="summary-card">
      <h3 className="summary-title">{summary.title}</h3>
      <p className="summary-description">{summary.description}</p>
    </div>
  );
};

export default SummaryCard;
