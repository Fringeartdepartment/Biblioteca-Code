const fileMode = window.location.protocol === "file:";

function normalizePath(pathname: string) {
  const cleaned = pathname.replace(/\/$/, "");
  return cleaned || "/";
}

export function getCurrentRoute() {
  const pathname = normalizePath(window.location.pathname);
  const hashRoute = window.location.hash.replace(/^#/, "");

  if (pathname === "/oraculo-de-bolso-dos-sonhos" || hashRoute === "/oraculo-de-bolso-dos-sonhos") {
    return "oraculo-sonhos";
  }

  if (pathname === "/planos" || hashRoute === "/planos") {
    return "planos";
  }

  return "home";
}

export function buildRoute(route: "/" | "/planos" | "/oraculo-de-bolso-dos-sonhos") {
  if (fileMode) {
    if (route === "/") {
      return "./index.html";
    }

    return `./index.html#${route}`;
  }

  return route;
}
