import type { Context } from 'https://edge.netlify.com'

export default async function (request: Request, context: Context) {
  const url = new URL(request.url)

  // Let static assets (JS, CSS, images, fonts) pass through unchanged
  if (/\.(js|css|png|jpg|svg|ico|woff2?)$/.test(url.pathname)) {
    return
  }

  // JSON page objects
  if (url.pathname.endsWith('.json')) {
    if (request.headers.get('x-inertia')) {
      // Inertia XHR — fetch and serve the JSON file directly
      const resp = await fetch(new URL(url.pathname, context.site.url))
      return new Response(resp.body, {
        status: resp.status,
        headers: { ...Object.fromEntries(resp.headers), 'x-inertia': 'true' },
      })
    }
    // Browser request — serve the SPA instead of raw JSON
    return new Response(
      await fetch(new URL('/index.html', context.site.url)).then(r => r.text()),
      { status: 200, headers: { 'content-type': 'text/html', 'x-inertia': 'true' } },
    )
  }

  // All other routes pass through (SPA fallback in redirect rules will handle)
  return
}
