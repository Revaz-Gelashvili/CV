import Home from "./Pages/Home";
import Additional from "./Pages/Additional";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Menu from "./Components/Header/Menu";
import { ThemeProvider } from "./Components/Theme/ThemeContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/additional" element={<Additional />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
