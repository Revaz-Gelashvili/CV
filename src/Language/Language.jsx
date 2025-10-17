import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";

const languages = ["en", "ru"];
const fonts = {
  en: "'Roboto', sans-serif",
  ru: "'Noto Sans', sans-serif",
};

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    document.body.style.fontFamily = fonts[language] || "Arial, sans-serif";
  }, [language]);

  const handleClick = () => {
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    changeLanguage(languages[nextIndex]);
  };

  return (
    <button onClick={handleClick} className="border rounded w-7.5">
      {language.toUpperCase()}
    </button>
  );
}
