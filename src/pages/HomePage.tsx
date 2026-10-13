import { Link } from 'react-router-dom'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/ProjectCard'
import { NoteItem } from '@/components/NoteItem'
import { useContent } from '@/i18n/context'
import styles from './HomePage.module.css'

const SELECTED_PROJECT_COUNT = 2
const RECENT_NOTE_COUNT = 3

export function HomePage() {
  const content = useContent()
  const { ui } = content

  const selectedProjects = content.projects.slice(0, SELECTED_PROJECT_COUNT)
  const recentNotes = content.notes.slice(0, RECENT_NOTE_COUNT)

  return (
    <Page>
      <section className={styles.hero} aria-labelledby="hero-heading">
        <p className="mono-label">{content.identity}</p>
        <h1 id="hero-heading" className={styles.headline}>
          {content.hero.headline}
        </h1>
        <p className={styles.lede}>{content.hero.lede}</p>
        <ul className={styles.focus} aria-label={ui.focusAreas}>
          {content.focusAreas.map((area) => (
            <li key={area} className={styles.focusItem}>
              {area}
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Link className={styles.primaryAction} to="/projects">
            {ui.viewProjects}
          </Link>
          <Link className={styles.secondaryAction} to="/about">
            {ui.aboutMe}
          </Link>
        </div>
      </section>

      <Section
        id="approach"
        eyebrow={ui.approachEyebrow}
        title={content.approach.heading}
      >
        <div className={styles.prose}>
          {content.approach.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow={ui.selectedWorkEyebrow}
        title={ui.selectedProjects.title}
        description={ui.selectedProjects.description}
      >
        <div className={styles.projectList}>
          {selectedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <p className={styles.more}>
          <Link to="/projects">{ui.allProjects} &rarr;</Link>
        </p>
      </Section>

      <Section
        id="notes"
        eyebrow={ui.writingEyebrow}
        title={ui.notesSection.title}
        description={ui.notesSection.description}
      >
        <ul className={styles.noteList}>
          {recentNotes.map((note) => (
            <li key={note.slug}>
              <NoteItem note={note} />
            </li>
          ))}
        </ul>
        <p className={styles.more}>
          <Link to="/notes">{ui.allNotes} &rarr;</Link>
        </p>
      </Section>

      <Section
        id="experience"
        eyebrow={ui.backgroundEyebrow}
        title={ui.experienceSection.title}
      >
        <ul className={styles.experience}>
          {content.experience.map((entry) => (
            <li key={`${entry.role}-${entry.period}`} className={styles.experienceItem}>
              <div className={styles.experienceHead}>
                <h3 className={styles.experienceRole}>{entry.role}</h3>
                <span className={styles.experiencePeriod}>{entry.period}</span>
              </div>
              <p className={styles.experienceContext}>{entry.context}</p>
              <p className={styles.experienceSummary}>{entry.summary}</p>
            </li>
          ))}
        </ul>
        <p className={styles.more}>
          <Link to="/about">{ui.moreAbout} &rarr;</Link>
        </p>
      </Section>

      <Section id="contact" eyebrow={ui.contactEyebrow} title={ui.contactTitle}>
        {content.contact.length > 0 ? (
          <ul className={styles.contact}>
            {content.contact.map((link) => (
              <li key={link.href} className={styles.contactItem}>
                <a
                  href={link.href}
                  {...(link.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.contactFallback}>{ui.contactFallback}</p>
        )}
      </Section>
    </Page>
  )
}
