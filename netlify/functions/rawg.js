export default async (req) => {
  const API_KEY = process.env.RAWG_API_KEY;

  if (!API_KEY) {
    return new Response(
      JSON.stringify({ error: "Missing API key" }),
      { status: 500 }
    );
  }

  const incomingUrl = new URL(req.url);

  // Remove "/api" prefix
  const path = incomingUrl.pathname.replace(/^\/api/, "");

  const target = new URL(`https://api.rawg.io/api${path}`);

  // Copy all query params except "key"
  incomingUrl.searchParams.forEach((value, key) => {
    if (key !== "key") {
      target.searchParams.append(key, value);
    }
  });

  // Add secret key
  target.searchParams.set("key", API_KEY);

  try {
    const response = await fetch(target.toString());
    const data = await response.text();

    return new Response(data, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Request failed" }),
      { status: 500 }
    );
  }
};

// Route /api/* to this function
export const config = {
  path: "/api/*",
};