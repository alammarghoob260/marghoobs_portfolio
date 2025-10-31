import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSectiom";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FerroLayer from "./FerroLayer";
import SpotlightLayer from "./SpotlightLayer";
import { SearchProvider } from "./components/Search/SearchContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { LanguageProvider } from "./components/TranslationContext/LanguageContext";
import { ThemeProvider, useTheme } from "./components/Theme/ThemeContext"; // ✅ useTheme added
import "./App.css";

// ✅ Wrapper component to apply theme to <html>
const AppContent = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
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
      <FerroLayer />
      <SpotlightLayer />
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

const App = () => {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <LanguageProvider>
          <SearchProvider>
            <AppContent />
          </SearchProvider>
        </LanguageProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
