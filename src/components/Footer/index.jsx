import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Marghoob Alam. All rights reserved.</p>

    <div className="footer-row">
      <span className="footer-item">
        Built with React
        <img
          src="../../../public/React-icon..svg"
          alt="React"
          className="footer-icon-inline"
        />
        + Vite
        <img
          src="../../../public/Vite2.svg"
          alt="Vite"
          className="footer-icon-inline"
        />
      </span>
    </div>

    <div className="footer-row">
      <span className="footer-item">
        Code Editor: VS Code
        <img
          src="../../../public/VsCode.svg"
          alt="VS Code"
          className="footer-icon-inline"
        />
        | Styling: CSS
        <img
          src="../../../public/CSS3.svg"
          alt="CSS"
          className="footer-icon-inline"
        />
      </span>
    </div>

    <div className="footer-row">
      <span className="footer-item">
        Powered by Framer Motion
        <img
          src="../../../public/framer-motion.svg"
          alt="Framer Motion"
          className="footer-icon-inline"
        />
        & React Icons
        <img
          src="../../../public/React-icon..svg"
          alt="React Icons"
          className="footer-icon-inline"
        />
      </span>
    </div>

    <div className="footer-row">
      <span className="footer-item">
        Thanks to Claude
        <img
          src="../../../public/Claude.svg"
          alt="Claude"
          className="footer-icon-inline"
        />
        , ChatGPT
        <img
          src="../../../public/ChatGPT-Logo.svg"
          alt="ChatGPT"
          className="footer-icon-inline"
        />
        , Copilot
        <img
          src="../../../public/Copilot-Logo.svg"
          alt="Copilot"
          className="footer-icon-inline"
        />
        , Nanobana
        <img
          src="../../../public/banana-decoration.svg"
          alt="Nanobana"
          className="footer-icon-inline"
        />
        , and Google
        <img
          src="../../../public/Google_Logo.svg"
          alt="Google"
          className="footer-icon-inline"
        />
      </span>
    </div>

    <div className="footer-row">
      <span className="footer-item">
        Made with ❤️ from India
        <img
          src="../../../public/India_Logoi.svg"
          alt="India"
          className="footer-icon-inline"
        />
      </span>
    </div>
  </footer>
);

export default Footer;
