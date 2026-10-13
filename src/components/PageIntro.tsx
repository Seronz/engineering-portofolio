import styles from './PageIntro.module.css'

interface PageIntroProps {
  eyebrow: string
  title: string
  lede: string
}

/** Shared page heading block used by the non-home routes. */
export function PageIntro({ eyebrow, title, lede }: PageIntroProps) {
  return (
    <header className={styles.intro}>
      <p className="mono-label">{eyebrow}</p>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.lede}>{lede}</p>
    </header>
  )
}
