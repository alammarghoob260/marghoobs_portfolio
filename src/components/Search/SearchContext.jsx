// src/components/Search/SearchContext.jsx
import { createContext, useContext, useState } from "react";

// Create context
const SearchContext = createContext();

// Custom hook for easy access
export const useSearch = () => useContext(SearchContext);

// Provider component
export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState([]);

  // Register a new searchable item
  const registerSearchItem = (item) => {
    setSearchData((prev) => {
      // Avoid duplicate IDs
      const exists = prev.some((i) => i.id === item.id);
      return exists ? prev : [...prev, item];
    });
  };

  return (
    <SearchContext.Provider value={{ searchData, registerSearchItem }}>
      {children}
    </SearchContext.Provider>
  );
};
