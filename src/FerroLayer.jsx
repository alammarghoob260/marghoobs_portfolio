import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSectiom";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
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

    // Ferrofluid effect
    const handleMouseMove = (e) => {
      const elements = document.querySelectorAll(".ferro");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        // Apply a subtle transform for magnetic/ferrofluid effect
        el.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px) rotateX(${
          -y * 0.02
        }deg) rotateY(${x * 0.02}deg)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection className="ferro" />
        <AboutSection className="ferro" />
        <SkillsSection className="ferro" />
        <ProjectsSection className="ferro" />
        <ContactSection className="ferro" />
      </main>
      <Footer className="ferro" />
    </>
  );
};

export default App;
