import { Link } from 'react-router-dom'
import { Page } from '@/components/Page'
import { useContent } from '@/i18n/context'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  const content = useContent()
  const { notFound } = content.ui

  return (
    <Page>
      <div className={styles.wrap}>
        <p className="mono-label">{notFound.code}</p>
        <h1 className={styles.title}>{notFound.title}</h1>
        <p className={styles.body}>{notFound.body}</p>
        <Link className={styles.link} to="/">
          {notFound.link}
        </Link>
      </div>
    </Page>
  )
}
