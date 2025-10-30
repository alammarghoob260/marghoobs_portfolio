import { useState, useEffect, useRef } from "react";
import { useSearch } from "../Search/SearchContext";
import SearchResults from "../Search/SearchResults";
import SunIcon from "../../assets/SunIcon";
import MoonIcon from "../../assets/MoonIcon";
import { useLanguage } from "../TranslationContext/LanguageContext";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

// ✅ Import translation files
import en from "./translation/en.json";
import hi from "./translation/hi.json";
import bn from "./translation/bn.json";
import ur from "./translation/ur.json";

import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);
  const { searchData } = useSearch();
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation("navbar");

  // ✅ Load translations
  useEffect(() => {
    i18n.addResourceBundle("en", "navbar", en, true, true);
    i18n.addResourceBundle("hi", "navbar", hi, true, true);
    i18n.addResourceBundle("bn", "navbar", bn, true, true);
    i18n.addResourceBundle("ur", "navbar", ur, true, true);
  }, []);

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
          <div className="navbar-logo">{t("logo")}</div>
        </div>

        {/* 🔍 Center: Search Bar */}
        <div className="navbar-search">
          <input
            type="text"
            placeholder={t("search_placeholder")}
            className="search-input"
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* 🔹 Right: Links + Theme + Language */}
        <div className="navbar-right">
          <div className="navbar-links-desktop">
            <a href="#home" className="navbar-link">
              {t("nav_home")}
            </a>
            <a href="#about" className="navbar-link">
              {t("nav_about")}
            </a>
            <a href="#skills" className="navbar-link">
              {t("nav_skills")}
            </a>
            <a href="#projects" className="navbar-link">
              {t("nav_projects")}
            </a>
            <a href="#contact" className="navbar-link">
              {t("nav_contact")}
            </a>
          </div>

          {/* 🌗 Theme Toggle */}
          <button
            className={`theme-toggle ${darkMode ? "dark" : "light"}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
          >
            <span className="toggle-icon">
              {darkMode ? <MoonIcon /> : <SunIcon />}
            </span>
          </button>

          {/* 🌐 Language Switcher */}
          <select
            className="language-switcher"
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="hi">हिन्दी</option>
            <option value="bn">বাংলা</option>
            <option value="ur">اردو</option>
          </select>
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
          <a href="#home" className="navbar-link">
            {t("nav_home")}
          </a>
          <a href="#about" className="navbar-link">
            {t("nav_about")}
          </a>
          <a href="#skills" className="navbar-link">
            {t("nav_skills")}
          </a>
          <a href="#projects" className="navbar-link">
            {t("nav_projects")}
          </a>
          <a href="#contact" className="navbar-link">
            {t("nav_contact")}
          </a>
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
