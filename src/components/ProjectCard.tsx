import type { Project } from '@/content/types'
import { useContent } from '@/i18n/context'
import styles from './ProjectCard.module.css'

/**
 * A project rendered as a short case study rather than a logo wall.
 * The status badge is always visible so planned work is never mistaken for
 * shipped work.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { ui } = useContent()

  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <h3 className={styles.name}>{project.name}</h3>
        <span className={styles.status} data-status={project.status}>
          {ui.status[project.status]}
        </span>
      </div>

      <p className={styles.summary}>{project.summary}</p>

      <dl className={styles.meta}>
        <div className={styles.metaRow}>
          <dt className={styles.metaTerm}>{ui.problem}</dt>
          <dd className={styles.metaDetail}>{project.problem}</dd>
        </div>
        <div className={styles.metaRow}>
          <dt className={styles.metaTerm}>{ui.approach}</dt>
          <dd className={styles.metaDetail}>{project.approach}</dd>
        </div>
      </dl>

      {project.technologies.length > 0 ? (
        <ul className={styles.tags} aria-label={ui.technologies}>
          {project.technologies.map((tech) => (
            <li key={tech} className={styles.tag}>
              {tech}
            </li>
          ))}
        </ul>
      ) : null}

      <div className={styles.links}>
        {project.links.length > 0 ? (
          <ul className={styles.linkList}>
            {project.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer noopener">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.pending}>{ui.pendingRepo}</p>
        )}
      </div>
    </article>
  )
}
