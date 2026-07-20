const DEFAULT_PIXEL_ID = "120249872736350189";
const DEFAULT_API_VERSION = "v25.0";

function getClientIp(request) {
  const forwardedFor = request.headers["x-forwarded-for"];

  if (typeof forwardedFor === "string" && forwardedFor.length > 0) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.socket?.remoteAddress;
}

function getUserAgent(request) {
  const userAgent = request.headers["user-agent"];
  return typeof userAgent === "string" ? userAgent : undefined;
}

function json(response, statusCode, payload) {
  response.status(statusCode).json(payload);
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    json(response, 405, { ok: false, error: "Method not allowed" });
    return;
  }

  const accessToken = process.env.META_CONVERSIONS_ACCESS_TOKEN;
  const pixelId = process.env.META_PIXEL_ID || DEFAULT_PIXEL_ID;
  const apiVersion = process.env.META_GRAPH_API_VERSION || DEFAULT_API_VERSION;

  if (!accessToken) {
    json(response, 500, {
      ok: false,
      error: "Missing META_CONVERSIONS_ACCESS_TOKEN",
    });
    return;
  }

  let body = request.body || {};

  if (typeof body === "string") {
    try {
      body = JSON.parse(body || "{}");
    } catch {
      json(response, 400, {
        ok: false,
        error: "Invalid JSON body",
      });
      return;
    }
  }

  const {
    eventName,
    eventId,
    eventSourceUrl,
    customData,
    fbp,
    fbc,
  } = body;

  if (!eventName || !eventId || !eventSourceUrl) {
    json(response, 400, {
      ok: false,
      error: "Missing eventName, eventId or eventSourceUrl",
    });
    return;
  }

  const userData = {
    client_ip_address: getClientIp(request),
    client_user_agent: getUserAgent(request),
    fbp,
    fbc,
  };

  Object.keys(userData).forEach((key) => {
    if (!userData[key]) {
      delete userData[key];
    }
  });

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        event_source_url: eventSourceUrl,
        user_data: userData,
        custom_data: customData || {},
      },
    ],
  };

  if (process.env.META_TEST_EVENT_CODE) {
    payload.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  try {
    const metaResponse = await fetch(`https://graph.facebook.com/${apiVersion}/${pixelId}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        access_token: accessToken,
      }),
    });

    const metaPayload = await metaResponse.json();

    if (!metaResponse.ok) {
      json(response, metaResponse.status, {
        ok: false,
        meta: metaPayload,
      });
      return;
    }

    json(response, 200, {
      ok: true,
      meta: metaPayload,
    });
  } catch (error) {
    json(response, 500, {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
