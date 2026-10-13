import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './styles/global.css'

// Vite exposes the configured base path here (e.g. `/engineering-portofolio/`
// on GitHub Pages, `/` in local dev). React Router wants it without a trailing
// slash so links resolve under the deployed subpath.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Unable to bootstrap app: #root element was not found.')
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
