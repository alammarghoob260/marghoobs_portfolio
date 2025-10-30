import { createContext, useContext, useState } from "react";
import i18n from "../../i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // default language

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang); // ✅ Sync with i18next
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ✅ Custom hook for easy access
export const useLanguage = () => useContext(LanguageContext);
