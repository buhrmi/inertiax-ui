import type { Context } from 'https://edge.netlify.com'

export default async function (request: Request, context: Context) {
  const url = new URL(request.url)

  // Let static assets (JS, CSS, images, fonts) pass through unchanged
  if (/\.(js|css|png|jpg|svg|ico|woff2?)$/.test(url.pathname)) {
    return
  }

  // JSON page objects requested via Inertia XHR — serve file with header
  if (url.pathname.endsWith('.json') && request.headers.get('x-inertia')) {
    const response = await context.next()
    response.headers.set('x-inertia', 'true')
    return response
  }

  // Everything else (browser requests, SPA routes) — serve index.html
  return context.rewrite('/index.html')
}
