import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePlay from "./pages/GamePlay.tsx";
import FirstScene from "./pages/FirstScene.tsx";
import Documentations from "./pages/Documentations.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/play" element={<GamePlay />} />
        <Route path="/firstScene" element={<FirstScene />} />
        <Route path="/documentation" element={<Documentations />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
