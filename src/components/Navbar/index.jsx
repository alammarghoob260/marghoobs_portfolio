import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Toggle state

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">MyPortfolio</div>
        </div>

        <div className="navbar-center">
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
        </div>

        <div className="navbar-right">
          {/* 🔹 Fancy Toggle Button */}
          <button
            className={`theme-toggle ${darkMode ? "dark" : "light"}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
          >
            <span className="toggle-icon">{darkMode ? "🌙" : "☀️"}</span>
          </button>

          {/* Hamburger */}
          <div className="navbar-hamburger">
            <button onClick={() => setOpen(!open)}>
              <span>☰</span>
            </button>
          </div>
        </div>
      </div>

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
    </nav>
  );
};

export default Navbar;
