import { useState, useEffect, useRef } from "react";
import { useSearch } from "../Search/SearchContext";
import SearchResults from "../Search/SearchResults";
import SunIcon from "../../assets/SunIcon";
import MoonIcon from "../../assets/MoonIcon";
import { useLanguage } from "../TranslationContext/LanguageContext";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import Select, { components } from "react-select";
import { Globe, Search } from "react-feather";
import { useTheme } from "../Theme/ThemeContext";
import en from "./translation/en.json";
import hi from "./translation/hi.json";
import bn from "./translation/bn.json";
import ur from "./translation/ur.json";
import "./Navbar.common.css";
import "./Navbar.light.css";
import "./Navbar.dark.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);
  const { searchData } = useSearch();
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation("navbar");
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    i18n.addResourceBundle("en", "navbar", en, true, true);
    i18n.addResourceBundle("hi", "navbar", hi, true, true);
    i18n.addResourceBundle("bn", "navbar", bn, true, true);
    i18n.addResourceBundle("ur", "navbar", ur, true, true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("search-active", showSearchPanel);
  }, [showSearchPanel]);

  const results = searchData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase())
  );

  const languageOptions = [
    { value: "en", label: "🇬🇧 EN" },
    { value: "hi", label: "🇮🇳 हिन्दी" },
    { value: "bn", label: "🇧🇩 বাংলা" },
    { value: "ur", label: "🇵🇰 اردو" },
  ];

  const SingleValue = (props) => (
    <components.SingleValue {...props}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <Globe size={16} color="#ccc" />
        {props.data.label}
      </div>
    </components.SingleValue>
  );

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}>
        <div className="navbar-container">
          {/* 🔹 Left: Logo */}
          <div className="navbar-left">
            <div className="navbar-logo">{t("logo")}</div>
          </div>

          {/* 🔹 Center: Nav Links */}
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

          {/* 🔹 Right: Search + Language + Theme */}
          <div className="navbar-right">
            {/* 🔍 Search Icon */}
            <button
              className="search-icon-button"
              onClick={() => setShowSearchPanel(true)}
              aria-label="Open Search"
            >
              <Search size={20} />
            </button>

            {/* 🌐 Language Switcher */}
            <Select
              className="language-switcher-select"
              classNamePrefix="lang"
              options={languageOptions}
              value={languageOptions.find((opt) => opt.value === language)}
              onChange={(opt) => changeLanguage(opt.value)}
              isSearchable={false}
              aria-label="Language Switcher"
              components={{ SingleValue }}
            />

            {/* 🌗 Theme Toggle */}
            <button
              className={`theme-toggle ${darkMode ? "dark" : "light"}`}
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              <span className="toggle-icon">
                {darkMode ? <MoonIcon /> : <SunIcon />}
              </span>
            </button>
          </div>

          {/* 🍔 Hamburger */}
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
      </nav>

      {/* 🔎 Search Panel Below Navbar */}
      {showSearchPanel && (
        <div
          className={`search-panel ${
            darkMode ? "navbar-dark" : "navbar-light"
          }`}
        >
          <div className="search-panel-content">
            <button
              className="search-panel-close"
              onClick={() => setShowSearchPanel(false)}
              aria-label="Close Search"
            >
              ✕
            </button>
            <div className="search-input-wrapper">
              <Search size={18} className="search-input-icon" />
              <input
                type="text"
                placeholder={t("search_placeholder")}
                className="search-panel-input"
                ref={searchRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
            </div>
            <SearchResults
              query={query}
              results={results}
              onSelect={() => {
                setQuery("");
                setShowSearchPanel(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
