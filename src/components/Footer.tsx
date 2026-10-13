import { profile } from '@/content/profile'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.identity}>{profile.identity}</span>
        <span className={styles.note}>Static site — no trackers, no backend.</span>
        <span className={styles.copy}>
          &copy; {year} {profile.siteName}
        </span>
      </div>
    </footer>
  )
}
