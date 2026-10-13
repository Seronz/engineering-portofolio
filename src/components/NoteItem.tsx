import type { Note } from '@/content/notes'
import { noteStatusLabels } from '@/content/notes'
import styles from './NoteItem.module.css'

/** A single entry in the notes index. Notes are not yet linked to a body. */
export function NoteItem({ note }: { note: Note }) {
  return (
    <article className={styles.item}>
      <div className={styles.head}>
        <h3 className={styles.title}>{note.title}</h3>
        <span className={styles.status} data-status={note.status}>
          {noteStatusLabels[note.status]}
        </span>
      </div>
      <p className={styles.summary}>{note.summary}</p>
      <ul className={styles.tags} aria-label="Tags">
        {note.tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}
