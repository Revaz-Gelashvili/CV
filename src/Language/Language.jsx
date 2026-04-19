import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";

const languages = ["en", "ru", "ka"];

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    languages.forEach((lng) => document.body.classList.remove(lng));
    document.body.classList.add(language);
  }, [language]);

  const handleClick = () => {
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    changeLanguage(languages[nextIndex]);
  };

  return (
    <button onClick={handleClick} className="border rounded w-7.5 text-2xl p-2">
      {language.toUpperCase()}
    </button>
  );
}
