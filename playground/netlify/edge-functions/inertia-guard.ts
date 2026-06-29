import type { Context } from 'https://edge.netlify.com'

export default async function (request: Request, context: Context) {
  const url = new URL(request.url)

  // Let static assets (JS, CSS, images, fonts) pass through unchanged
  if (/\.(js|css|png|jpg|svg|ico|woff2?)$/.test(url.pathname)) {
    return
  }

  // JSON page objects requested via Inertia XHR
  if (url.pathname.endsWith('.json') && request.headers.get('x-inertia')) {
    const resp = await fetch(new URL(url.pathname, context.site.url))
    return new Response(resp.body, {
      status: resp.status,
      headers: { 'content-type': 'application/json', 'x-inertia': 'true' },
    })
  }

  // Everything else (browser requests, SPA routes) — serve index.html
  const html = await fetch(new URL('/index.html', context.site.url)).then(r => r.text())
  return new Response(html, {
    status: 200,
    headers: { 'content-type': 'text/html' },
  })
}
