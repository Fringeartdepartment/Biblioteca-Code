const DEFAULT_SOURCE = "pagina_vendas";

export function buildCheckoutUrlWithTracking(checkoutUrl: string) {
  const url = new URL(checkoutUrl);

  if (typeof window === "undefined") {
    url.searchParams.set("src", DEFAULT_SOURCE);
    return url.toString();
  }

  const currentParams = new URLSearchParams(window.location.search);

  currentParams.forEach((value, key) => {
    url.searchParams.set(key, value);
  });

  if (!url.searchParams.has("src")) {
    url.searchParams.set("src", DEFAULT_SOURCE);
  }

  return url.toString();
}
