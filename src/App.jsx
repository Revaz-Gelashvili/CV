import Home from "./Pages/Home";
import Additional from "./Pages/Additional";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/additional" element={<Additional />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
}
