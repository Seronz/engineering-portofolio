import { useContent } from '@/i18n/context'
import styles from './Footer.module.css'

export function Footer() {
  const content = useContent()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.identity}>{content.identity}</span>
        <span className={styles.note}>{content.ui.footerNote}</span>
        <span className={styles.copy}>
          &copy; {year} {content.siteName}
        </span>
      </div>
    </footer>
  )
}
