import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation, profile } from '@/content/profile'
import styles from './Header.module.css'

/**
 * Compact navigation header. On small screens the links collapse behind a
 * toggle button; on larger screens they sit inline. The menu closes itself on
 * navigation and exposes aria-expanded/aria-controls for assistive tech.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.identity}>
          <span className={styles.prompt} aria-hidden="true">
            ./
          </span>
          <span>{profile.identity}</span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.toggleIcon} aria-hidden="true">
            {menuOpen ? '\u00d7' : '\u2261'}
          </span>
          <span className="visually-hidden">
            {menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={styles.nav}
          data-open={menuOpen || undefined}
          aria-label="Primary"
        >
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navLink} ${styles.navLinkActive}`
                      : styles.navLink
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
