import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeBtn() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button className="w-7.5" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <img src={123} alt="Dark Theme" />
      ) : (
        <img src={123} alt="Light Theme" />
      )}
    </button>
  );
}
