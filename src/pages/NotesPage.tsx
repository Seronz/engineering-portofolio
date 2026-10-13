import { Page } from '@/components/Page'
import { PageIntro } from '@/components/PageIntro'
import { Section } from '@/components/Section'
import { NoteItem } from '@/components/NoteItem'
import { useContent } from '@/i18n/context'
import styles from './NotesPage.module.css'

/**
 * Foundation stub. The index lists planned/draft notes; no note bodies are
 * published yet. Markdown rendering will be added when the first note is ready.
 */
export function NotesPage() {
  const content = useContent()
  const { notesPage } = content.ui

  return (
    <Page>
      <PageIntro
        eyebrow={notesPage.eyebrow}
        title={notesPage.title}
        lede={notesPage.lede}
      />

      <Section title={notesPage.sectionTitle}>
        <ul className={styles.list}>
          {content.notes.map((note) => (
            <li key={note.slug}>
              <NoteItem note={note} />
            </li>
          ))}
        </ul>
      </Section>

      <p className={styles.notice}>{notesPage.notice}</p>
    </Page>
  )
}
