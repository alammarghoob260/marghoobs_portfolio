import { useState, useEffect, useRef } from "react";
import { useSearch } from "../Search/SearchContext"; // ✅ Context
import SearchResults from "../Search/SearchResults"; // ✅ NEW: Import component
import "./Navbar.css";
import SunIcon from "../../assets/SunIcon";
import MoonIcon from "../../assets/MoonIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  const { searchData } = useSearch();

  const results = searchData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleShortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* 🔹 Left: Logo */}
        <div className="navbar-left">
          <div className="navbar-logo">Portfolio</div>
        </div>

        {/* 🔍 Center: Search Bar */}
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search (Ctrl + K)"
            className="search-input"
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* 🔹 Right: Links + Toggle */}
        <div className="navbar-right">
          <div className="navbar-links-desktop">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="navbar-link"
              >
                {link}
              </a>
            ))}
          </div>

          <button
            className={`theme-toggle ${darkMode ? "dark" : "light"}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
          >
            <span className="toggle-icon">
              {darkMode ? <MoonIcon /> : <SunIcon />}
            </span>
          </button>
        </div>

        {/* 🔹 Mobile Hamburger */}
        <div className="navbar-hamburger">
          <button onClick={() => setOpen(!open)}>
            <span>☰</span>
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Links */}
      {open && (
        <div className="navbar-links-mobile">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="navbar-link"
            >
              {link}
            </a>
          ))}
        </div>
      )}

      {/* 🔎 Modular Search Results */}
      <SearchResults
        query={query}
        results={results}
        onSelect={() => setQuery("")}
      />
    </nav>
  );
};

export default Navbar;
