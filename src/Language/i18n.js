import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./Json/en.json";
import RU from "./Json/ru.json";
import KA from "./Json/ka.json";

const resources = {
  en: { translation: EN },
  ru: { translation: RU },
  ka: { translation: KA },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
