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
  /** Optional short description shown next to the link. */
  hint?: string
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
  // TODO(owner): confirm these are the public contact points you want to publish.
  contact: [
    {
      label: 'Email',
      href: 'mailto:you@example.com',
      hint: 'Replace with your public contact address.',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/your-handle',
      hint: 'Replace with your public profile.',
    },
  ],
}
