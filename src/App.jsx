import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSectiom";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FerroLayer from "./FerroLayer"; // Modular effect
import "./App.css";

const App = () => {
  useEffect(() => {
    // Smooth scroll handler
    const handleSmoothScroll = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <>
      <FerroLayer /> {/* Ferrofluid effect listener */}
      <Navbar />
      <main>
        <div className="ferro">
          <HeroSection />
        </div>
        <div className="ferro">
          <AboutSection />
        </div>
        <div className="ferro">
          <SkillsSection />
        </div>
        <div className="ferro">
          <ProjectsSection />
        </div>
        <div className="ferro">
          <ContactSection />
        </div>
      </main>
      <div className="ferro">
        <Footer />
      </div>
    </>
  );
};

export default App;
