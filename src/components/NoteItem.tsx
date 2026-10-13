import type { Note } from '@/content/types'
import { useContent } from '@/i18n/context'
import styles from './NoteItem.module.css'

/** A single entry in the notes index. Notes are not yet linked to a body. */
export function NoteItem({ note }: { note: Note }) {
  const { ui } = useContent()

  return (
    <article className={styles.item}>
      <div className={styles.head}>
        <h3 className={styles.title}>{note.title}</h3>
        <span className={styles.status} data-status={note.status}>
          {ui.noteStatus[note.status]}
        </span>
      </div>
      <p className={styles.summary}>{note.summary}</p>
      <ul className={styles.tags} aria-label={ui.tags}>
        {note.tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}
