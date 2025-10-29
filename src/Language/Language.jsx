import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";

const languages = ["en", "ru", "ka"];
const fonts = {
  en: "'Noto Sans', sans-serif",
  ru: "'Nunito', sans-serif",
  ka: "'Nato Sans', sans-serif",
};

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    document.body.style.fontFamily =
      fonts[language] || "'Noto Sans', sans-serif";
  }, [language]);

  const handleClick = () => {
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    changeLanguage(languages[nextIndex]);
  };

  return (
    <button onClick={handleClick} className="border rounded w-7.5 text-2xl">
      {language.toUpperCase()}
    </button>
  );
}
