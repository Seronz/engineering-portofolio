import { Page } from '@/components/Page'
import { PageIntro } from '@/components/PageIntro'
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/content/projects'
import styles from './ProjectsPage.module.css'

/**
 * Foundation stub. The index works, but per-project detail routes are not built
 * yet. Content here is honest: nothing is presented as shipped.
 */
export function ProjectsPage() {
  return (
    <Page>
      <PageIntro
        eyebrow="projects"
        title="Engineering projects"
        lede="Case-study style write-ups of systems I am exploring. A project is only marked complete once it is implemented and tested."
      />

      <Section title="All projects">
        <div className={styles.list}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <p className={styles.notice}>
        Individual project detail pages are planned. This route and the cards above
        describe each project honestly; deeper write-ups will be added in a later change.
      </p>
    </Page>
  )
}
