import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { getCurrentRoute } from "./utils/routes";
import "./styles/global.css";

const currentRoute = getCurrentRoute();
const Home = lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const OraculoSonhos = lazy(() =>
  import("./pages/OraculoSonhos").then((module) => ({ default: module.OraculoSonhos })),
);
const Plans = lazy(() => import("./pages/Plans").then((module) => ({ default: module.Plans })));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={null}>
      {currentRoute === "oraculo-sonhos" ? <OraculoSonhos /> : currentRoute === "planos" ? <Plans /> : <Home />}
    </Suspense>
  </StrictMode>,
);
