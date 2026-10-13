import { Page } from '@/components/Page'
import { PageIntro } from '@/components/PageIntro'
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/ProjectCard'
import { useContent } from '@/i18n/context'
import styles from './ProjectsPage.module.css'

/**
 * Foundation stub. The index works, but per-project detail routes are not built
 * yet. Content here is honest: nothing is presented as shipped.
 */
export function ProjectsPage() {
  const content = useContent()
  const { projectsPage } = content.ui

  return (
    <Page>
      <PageIntro
        eyebrow={projectsPage.eyebrow}
        title={projectsPage.title}
        lede={projectsPage.lede}
      />

      <Section title={projectsPage.sectionTitle}>
        <div className={styles.list}>
          {content.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <p className={styles.notice}>{projectsPage.notice}</p>
    </Page>
  )
}
