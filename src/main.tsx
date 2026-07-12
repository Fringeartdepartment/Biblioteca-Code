import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./pages/Home";
import { OraculoSonhos } from "./pages/OraculoSonhos";
import { Plans } from "./pages/Plans";
import { getCurrentRoute } from "./utils/routes";
import "./styles/global.css";

const currentRoute = getCurrentRoute();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {currentRoute === "oraculo-sonhos" ? <OraculoSonhos /> : currentRoute === "planos" ? <Plans /> : <Home />}
  </StrictMode>,
);
