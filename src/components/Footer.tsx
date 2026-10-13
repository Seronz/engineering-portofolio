import { useContent } from '@/i18n/context'
import styles from './Footer.module.css'

// Intentional branding choice: the copyright year is fixed, not derived from
// the current date.
const COPYRIGHT_YEAR = 2023

/**
 * Footer. Kept in English regardless of the selected language, per the site's
 * design: the identity line and the "currently exploring" note never switch.
 */
export function Footer() {
  const content = useContent()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.identity}>{content.identity}</span>
        <span className={styles.note}>{content.ui.currentlyExploring}</span>
        <span className={styles.copy}>
          &copy; {COPYRIGHT_YEAR} {content.siteName}
        </span>
      </div>
    </footer>
  )
}
