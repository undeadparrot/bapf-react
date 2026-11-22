import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.less";
import "yet-another-react-lightbox/styles.css";
import { Bapf2026App } from "./year-2026/Bapf2026";
import { Bapf2025App } from "./year-2025/Bapf2025";
import { Bapf2024App } from "./year-2024/Bapf2024";

import { BrowserRouter, Navigate, Route, Routes } from "react-router";

function RedirectTo2026() {
  return <Navigate replace to="2026"/>
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectTo2026 />} />
        <Route path="2026" element={<Bapf2026App />} />
        <Route path="2025" element={<Bapf2025App />} />
        <Route path="2024" element={<Bapf2024App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
