import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">MyPortfolio</div>
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
        <div className="navbar-hamburger">
          <button onClick={() => setOpen(!open)}>
            <span>☰</span>
          </button>
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
