import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import styles from './SiteLayout.module.css'

/**
 * Shared page chrome: skip link, header, routed content, footer.
 * Keeping it in one place means every route gets consistent structure and
 * accessibility affordances without repeating markup.
 */
export function SiteLayout() {
  return (
    <div className={styles.layout}>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
