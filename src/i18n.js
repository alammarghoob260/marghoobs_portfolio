import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en", // default language
  fallbackLng: "en", // fallback if translation missing
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
