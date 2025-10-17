import React from "react";
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./Language/LanguageContext";
import { ThemeProvider } from "./Theme/ThemeContext";
import Home from "./Pages/Home";
import Additional from "./Pages/Additional";
import Header from "./Components/Header/Header";
import Menu from "./Components/Header/Menu";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/additional" element={<Additional />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}
