// import "./SearchResults.css"; // optional if you want separate styling

const SearchResults = ({ query, results, onSelect }) => {
  if (!query) return null;

  if (results.length === 0) {
    return <p className="no-results">No results found.</p>;
  }

  return (
    <div className="search-results-dropdown">
      {results.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="search-result-item"
          onClick={() => onSelect(item)}
        >
          <strong>{item.title}</strong>
          <p>{item.content.slice(0, 60)}...</p>
        </a>
      ))}
    </div>
  );
};

export default SearchResults;
