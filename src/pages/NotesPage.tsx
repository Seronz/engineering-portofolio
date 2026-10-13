import { Page } from '@/components/Page'
import { PageIntro } from '@/components/PageIntro'
import { Section } from '@/components/Section'
import { NoteItem } from '@/components/NoteItem'
import { notes } from '@/content/notes'
import styles from './NotesPage.module.css'

/**
 * Foundation stub. The index lists planned/draft notes; no note bodies are
 * published yet. Markdown rendering will be added when the first note is ready.
 */
export function NotesPage() {
  return (
    <Page>
      <PageIntro
        eyebrow="notes"
        title="Engineering notes"
        lede="Technical write-ups on Linux networking, Kubernetes, Go concurrency, and reliability patterns. These are topics in progress, not published articles."
      />

      <Section title="Index">
        <ul className={styles.list}>
          {notes.map((note) => (
            <li key={note.slug}>
              <NoteItem note={note} />
            </li>
          ))}
        </ul>
      </Section>

      <p className={styles.notice}>
        Individual note pages are planned. Nothing is marked published until it is
        actually written.
      </p>
    </Page>
  )
}
