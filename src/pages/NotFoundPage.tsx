import { Link } from 'react-router-dom'
import { Page } from '@/components/Page'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <Page>
      <div className={styles.wrap}>
        <p className="mono-label">exit status 1 / 404</p>
        <h1 className={styles.title}>Path not found</h1>
        <p className={styles.body}>
          There is nothing at this address. It may have moved, or never existed.
        </p>
        <Link className={styles.link} to="/">
          Return home
        </Link>
      </div>
    </Page>
  )
}
