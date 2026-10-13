/**
 * Site-wide identity and personal content.
 *
 * Everything the owner might reasonably want to change lives here rather than
 * inside components. Fields marked with a TODO are placeholders and must be
 * replaced with verified, non-confidential information before publishing.
 */

export interface NavItem {
  label: string
  to: string
}

export interface ContactLink {
  label: string
  href: string
}

export interface ExperienceEntry {
  role: string
  context: string
  period: string
  summary: string
}

export interface Profile {
  /** Short name used in the document title and footer. */
  siteName: string
  /** Header identity line. */
  identity: string
  tagline: string
  hero: {
    headline: string
    lede: string
  }
  approach: {
    heading: string
    body: string[]
  }
  focusAreas: string[]
  experience: ExperienceEntry[]
  contact: ContactLink[]
}

export const navigation: NavItem[] = [
  { label: 'Projects', to: '/projects' },
  { label: 'Notes', to: '/notes' },
  { label: 'About', to: '/about' },
]

/**
 * Public contact links, built from build-time environment variables so personal
 * details stay out of version control. Values are provided as GitHub Actions
 * repository variables (see README) or a local `.env` file. Anything missing is
 * simply omitted from the site rather than replaced with a fake address.
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

export const profile: Profile = {
  siteName: 'SERONZ',
  identity: 'SERONZ / SYSTEMS ENGINEERING',
  tagline: 'I work on the systems behind the software.',
  hero: {
    headline: 'I work on the systems behind the software.',
    lede: 'Platform engineering, reliability, Linux, networking, and tools built to understand how systems behave when things go wrong.',
  },
  approach: {
    heading: 'How I approach systems',
    body: [
      'I care about failure modes more than feature lists. When I look at a system I try to understand what happens under load, during a partial outage, and when a dependency is slow rather than down.',
      'That usually means small, reproducible experiments: timeouts, retries, backpressure, and the operating system and network behaviour underneath. The goal is operational clarity — knowing what a system will do before it surprises you in production.',
    ],
  },
  focusAreas: [
    'Platform Engineering',
    'Site Reliability Engineering',
    'Linux & Networking',
    'Kubernetes',
    'Go',
    'Infrastructure Reliability & Incident Response',
  ],
  // TODO(owner): replace with verified, non-confidential experience only.
  experience: [
    {
      role: 'Placeholder role',
      context: 'Placeholder context',
      period: 'Year – Year',
      summary:
        'This entry is intentionally empty. Add only verified, non-confidential roles, dates, and outcomes here.',
    },
  ],
  contact: buildContactLinks(),
}
