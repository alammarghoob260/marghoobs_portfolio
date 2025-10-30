import { useState, useEffect, useRef } from "react";
import { useSearch } from "../Search/SearchContext";
import SearchResults from "../Search/SearchResults";
import SunIcon from "../../assets/SunIcon";
import MoonIcon from "../../assets/MoonIcon";
import { useLanguage } from "../TranslationContext/LanguageContext";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import Select, { components } from "react-select";
import { Globe } from "react-feather";
import { useTheme } from "../Theme/ThemeContext";
import en from "./translation/en.json";
import hi from "./translation/hi.json";
import bn from "./translation/bn.json";
import ur from "./translation/ur.json";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);
  const { searchData } = useSearch();
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation("navbar");
  const { darkMode, toggleTheme } = useTheme(); // ✅ Global theme state

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
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <span className="toggle-icon">
              {darkMode ? <MoonIcon /> : <SunIcon />}
            </span>
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
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.2)",
                color: "#e0e0e0",
                backdropFilter: "blur(6px)",
                borderRadius: "6px",
                fontSize: "0.9rem",
                minWidth: "120px",
                cursor: "pointer",
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: "#1e1e1e",
                borderRadius: "6px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                zIndex: 9999,
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? "#333" : "#1e1e1e",
                color: "#e0e0e0",
                padding: "8px 12px",
                cursor: "pointer",
              }),
              singleValue: (base) => ({
                ...base,
                color: "#e0e0e0",
              }),
              dropdownIndicator: (base) => ({
                ...base,
                color: "#ccc",
              }),
              indicatorSeparator: () => ({
                display: "none",
              }),
            }}
          />
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

      {/* 🔎 Search Results */}
      <SearchResults
        query={query}
        results={results}
        onSelect={() => setQuery("")}
      />
    </nav>
  );
};

export default Navbar;
