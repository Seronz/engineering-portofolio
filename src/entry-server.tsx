import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { App } from './App'

/**
 * Build-time entry used by `scripts/prerender.mjs`. Rendering the home page to
 * static HTML means crawlers and no-JS visitors get the real content in the
 * initial response instead of an empty `#root`. The client still boots normally
 * from `main.tsx`.
 */
export function render(): string {
  const baseUrl = import.meta.env.BASE_URL
  const basename = baseUrl.replace(/\/$/, '')

  return renderToString(
    <StrictMode>
      <StaticRouter basename={basename || '/'} location={baseUrl}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
