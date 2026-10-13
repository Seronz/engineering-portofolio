import type { ReactNode } from 'react'
import styles from './Page.module.css'

/**
 * Standard page wrapper: consistent vertical rhythm and max width for every
 * route, so individual pages only worry about their own content.
 */
export function Page({ children }: { children: ReactNode }) {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.stack}>{children}</div>
    </div>
  )
}
