import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
}

/**
 * A titled content section used across pages. The eyebrow is a small
 * monospace label (e.g. "selected work") that gives the page an
 * editorial/terminal rhythm without decorative noise.
 */
export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <header className={styles.header}>
        {eyebrow ? <p className="mono-label">{eyebrow}</p> : null}
        <h2 className={styles.title}>{title}</h2>
        {description ? <p className={styles.description}>{description}</p> : null}
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  )
}
