import { Page } from '@/components/Page'
import { PageIntro } from '@/components/PageIntro'
import { Section } from '@/components/Section'
import { useContent } from '@/i18n/context'
import styles from './AboutPage.module.css'

/**
 * Foundation stub. The biography is intentionally thin — only verified,
 * non-confidential information belongs here (see src/content/en.ts).
 */
export function AboutPage() {
  const content = useContent()
  const { ui } = content
  const { aboutPage } = ui

  return (
    <Page>
      <PageIntro
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        lede={aboutPage.lede}
      />

      <Section title={content.approach.heading}>
        <div className={styles.prose}>
          {content.approach.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section title={aboutPage.focusTitle}>
        <ul className={styles.list}>
          {content.focusAreas.map((area) => (
            <li key={area} className={styles.listItem}>
              {area}
            </li>
          ))}
        </ul>
      </Section>

      <Section title={ui.certificationsTitle}>
        <ul className={styles.list}>
          {content.certifications.map((certification) => (
            <li key={certification.name} className={styles.listItem}>
              {certification.name} — {certification.status}
            </li>
          ))}
        </ul>
      </Section>

      <Section title={aboutPage.contactTitle} description={aboutPage.contactDescription}>
        {content.contact.length > 0 ? (
          <ul className={styles.list}>
            {content.contact.map((link) => (
              <li key={link.href} className={styles.listItem}>
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
          <p className={styles.hint}>{ui.noContact}</p>
        )}
      </Section>
    </Page>
  )
}
