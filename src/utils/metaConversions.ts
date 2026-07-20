const META_CONVERSIONS_ENDPOINT = "/api/meta-conversions";
const trackedEvents = new Set<string>();

type MetaConversionPayload = {
  eventName: "PageView" | "ViewContent" | "InitiateCheckout";
  customData?: Record<string, unknown>;
  dedupeKey: string;
};

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

function setCookie(name: string, value: string) {
  const maxAge = 60 * 60 * 24 * 90;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

function createEventId(eventName: string, dedupeKey: string) {
  const randomId = window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `${eventName}.${dedupeKey}.${randomId}`;
}

function getFbp() {
  const currentFbp = getCookie("_fbp");

  if (currentFbp) {
    return currentFbp;
  }

  const fbp = `fb.1.${Date.now()}.${Math.floor(Math.random() * 10 ** 10)}`;
  setCookie("_fbp", fbp);
  return fbp;
}

function getFbc() {
  const currentFbc = getCookie("_fbc");

  if (currentFbc) {
    return currentFbc;
  }

  const fbclid = new URLSearchParams(window.location.search).get("fbclid");

  if (!fbclid) {
    return undefined;
  }

  const fbc = `fb.1.${Date.now()}.${fbclid}`;
  setCookie("_fbc", fbc);
  return fbc;
}

export function trackMetaConversion({ eventName, customData = {}, dedupeKey }: MetaConversionPayload) {
  if (typeof window === "undefined") {
    return;
  }

  const eventKey = `${eventName}:${dedupeKey}`;

  if (trackedEvents.has(eventKey)) {
    return;
  }

  trackedEvents.add(eventKey);

  const payload = {
    eventName,
    eventId: createEventId(eventName, dedupeKey),
    eventSourceUrl: window.location.href,
    customData,
    fbp: getFbp(),
    fbc: getFbc(),
  };

  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon(META_CONVERSIONS_ENDPOINT, blob);
    return;
  }

  fetch(META_CONVERSIONS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
    keepalive: true,
  }).catch(() => {
    trackedEvents.delete(eventKey);
  });
}
