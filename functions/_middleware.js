// functions/_middleware.js
export async function onRequest(context) {
  const clientIP = context.request.headers.get("CF-Connecting-IP");

  const blockedIPs = [
    "117.150.164.227",
    "117.150.164.57",
    "117.150.164.3"
  ];

  if (blockedIPs.includes(clientIP)) {
    return new Response("你已被阻断", {
      status: 403,
      headers: {
        "content-type": "text/plain; charset=utf-8"
      }
    });
  }

  return await context.next();
}
