import type { ContactLink } from './types'

/**
 * Public contact links, built from build-time environment variables so personal
 * details stay out of version control. Values come from GitHub Actions
 * repository variables (see README) or a local `.env` file. Anything missing is
 * simply omitted rather than replaced with a fake address.
 *
 * Labels are language-independent, so this is shared across languages.
 */
function buildContactLinks(): ContactLink[] {
  const email = import.meta.env.VITE_CONTACT_EMAIL?.trim()
  const github = import.meta.env.VITE_CONTACT_GITHUB?.trim()
  const linkedin = import.meta.env.VITE_CONTACT_LINKEDIN?.trim()

  const links: ContactLink[] = []

  if (email) {
    links.push({ label: 'Email', href: `mailto:${email}` })
  }
  if (github) {
    links.push({ label: 'GitHub', href: github })
  }
  if (linkedin) {
    links.push({ label: 'LinkedIn', href: linkedin })
  }

  return links
}

export const contactLinks = buildContactLinks()
