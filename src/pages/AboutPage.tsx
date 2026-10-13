import { Page } from '@/components/Page'
import { PageIntro } from '@/components/PageIntro'
import { Section } from '@/components/Section'
import { profile } from '@/content/profile'
import styles from './AboutPage.module.css'

/**
 * Foundation stub. The biography is intentionally thin — only verified,
 * non-confidential information belongs here (see src/content/profile.ts).
 */
export function AboutPage() {
  return (
    <Page>
      <PageIntro
        eyebrow="about"
        title="Systems, reliability, and failure modes"
        lede="I am a systems and platform engineer focused on how software behaves in the real world — under load, during partial outages, and when dependencies degrade."
      />

      <Section title={profile.approach.heading}>
        <div className={styles.prose}>
          {profile.approach.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section title="Focus areas">
        <ul className={styles.list}>
          {profile.focusAreas.map((area) => (
            <li key={area} className={styles.listItem}>
              {area}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Contact"
        description="These are the only public contact points. Update them in the content source before publishing."
      >
        <ul className={styles.list}>
          {profile.contact.map((link) => (
            <li key={link.href} className={styles.listItem}>
              <a href={link.href} target="_blank" rel="noreferrer noopener">
                {link.label}
              </a>
              {link.hint ? <span className={styles.hint}>{link.hint}</span> : null}
            </li>
          ))}
        </ul>
      </Section>
    </Page>
  )
}
