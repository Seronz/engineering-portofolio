import { Link } from 'react-router-dom'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/ProjectCard'
import { NoteItem } from '@/components/NoteItem'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'
import { notes } from '@/content/notes'
import styles from './HomePage.module.css'

const SELECTED_PROJECT_COUNT = 2
const RECENT_NOTE_COUNT = 3

export function HomePage() {
  const selectedProjects = projects.slice(0, SELECTED_PROJECT_COUNT)
  const recentNotes = notes.slice(0, RECENT_NOTE_COUNT)

  return (
    <Page>
      <section className={styles.hero} aria-labelledby="hero-heading">
        <p className="mono-label">{profile.identity}</p>
        <h1 id="hero-heading" className={styles.headline}>
          {profile.hero.headline}
        </h1>
        <p className={styles.lede}>{profile.hero.lede}</p>
        <ul className={styles.focus} aria-label="Focus areas">
          {profile.focusAreas.map((area) => (
            <li key={area} className={styles.focusItem}>
              {area}
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Link className={styles.primaryAction} to="/projects">
            View projects
          </Link>
          <Link className={styles.secondaryAction} to="/about">
            About me
          </Link>
        </div>
      </section>

      <Section id="approach" eyebrow="approach" title={profile.approach.heading}>
        <div className={styles.prose}>
          {profile.approach.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="selected work"
        title="Selected projects"
        description="A small set of engineering explorations. Status is shown as-is — most are still planned."
      >
        <div className={styles.projectList}>
          {selectedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <p className={styles.more}>
          <Link to="/projects">All projects &rarr;</Link>
        </p>
      </Section>

      <Section
        id="notes"
        eyebrow="writing"
        title="Engineering notes"
        description="Write-ups on Linux, Kubernetes, Go, and reliability work."
      >
        <ul className={styles.noteList}>
          {recentNotes.map((note) => (
            <li key={note.slug}>
              <NoteItem note={note} />
            </li>
          ))}
        </ul>
        <p className={styles.more}>
          <Link to="/notes">All notes &rarr;</Link>
        </p>
      </Section>

      <Section id="experience" eyebrow="background" title="Experience">
        <ul className={styles.experience}>
          {profile.experience.map((entry) => (
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
          <Link to="/about">More about my background &rarr;</Link>
        </p>
      </Section>

      <Section id="contact" eyebrow="contact" title="Get in touch">
        {profile.contact.length > 0 ? (
          <ul className={styles.contact}>
            {profile.contact.map((link) => (
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
          <p className={styles.contactFallback}>
            Public contact links are configured at build time and are not set for this
            deployment.
          </p>
        )}
      </Section>
    </Page>
  )
}
