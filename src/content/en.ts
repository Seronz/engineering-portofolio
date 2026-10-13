import type { ContentDictionary } from './types'

/**
 * English content. See `src/content/id.ts` for the Indonesian translation — both
 * must satisfy `ContentDictionary`.
 */
export const en: ContentDictionary = {
  siteName: 'Irza Zakaria',
  identity: 'IRZA ZAKARIA / SYSTEMS ENGINEERING',
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
  nav: [
    { label: 'Projects', to: '/projects' },
    { label: 'Notes', to: '/notes' },
    { label: 'About', to: '/about' },
  ],
  projects: [
    {
      slug: 'reliability-lab',
      name: 'Reliability Lab',
      summary:
        'A Go-based exploration of how clients behave when dependencies misbehave.',
      problem:
        'Timeout, retry, and rate-limit handling is often copied between services without being tested against real failure behaviour. It is hard to reason about what a client will actually do when a dependency is slow rather than down.',
      approach:
        'Small, isolated Go experiments covering timeouts, context cancellation, bounded retries with jitter, HTTP 429 handling, and concurrency limits, with tests that drive the failure paths intentionally.',
      status: 'planned',
      technologies: ['Go'],
      links: [],
    },
    {
      slug: 'linux-networking-lab',
      name: 'Linux Networking Lab',
      summary:
        'Reproducible Linux networking experiments for routing, firewalling, and packet-level troubleshooting.',
      problem:
        'Networking problems are difficult to reproduce and reason about without an isolated, repeatable environment. Ad-hoc debugging rarely leaves anything behind to learn from.',
      approach:
        'Reproducible experiments using network namespaces, routing tables, firewall rules, and packet capture, each documented with what to observe and how to troubleshoot it.',
      status: 'planned',
      technologies: ['Linux', 'netns', 'nftables'],
      links: [],
    },
    {
      slug: 'certificate-monitor',
      name: 'Certificate Monitor',
      summary:
        'A certificate-transparency monitoring exploration for tracking issued certificates.',
      problem:
        'Certificate transparency logs are noisy and hard to follow for a specific set of names, making unexpected issuance easy to miss.',
      approach:
        'A small tool to watch certificate-transparency streams and surface issuance for configured names. Not publishable until the code and data are confirmed free of employer-confidential material, secrets, or unauthorized internal information.',
      status: 'planned',
      technologies: [],
      links: [],
    },
  ],
  notes: [
    {
      slug: 'linux-networking-fundamentals',
      title: 'Linux networking, from the interface up',
      summary: 'Notes on interfaces, routes, and how packets actually leave a host.',
      tags: ['Linux', 'networking'],
      status: 'planned',
      date: '',
    },
    {
      slug: 'kubernetes-rbac',
      title: 'Reading Kubernetes RBAC without guessing',
      summary:
        'A practical path through roles, bindings, and service-account permissions.',
      tags: ['Kubernetes', 'RBAC'],
      status: 'planned',
      date: '',
    },
    {
      slug: 'go-concurrency-failure-paths',
      title: 'Go concurrency and failure paths',
      summary: 'Context cancellation, errgroup, and the edges people tend to skip.',
      tags: ['Go', 'concurrency'],
      status: 'planned',
      date: '',
    },
    {
      slug: 'reliability-patterns',
      title: 'Reliability patterns worth understanding',
      summary: 'Timeouts, retries with jitter, hedged requests, and backpressure.',
      tags: ['reliability'],
      status: 'planned',
      date: '',
    },
  ],
  certifications: [{ name: 'CKAD', status: 'In Progress' }],
  ui: {
    skipToContent: 'Skip to content',
    navLabel: 'Primary',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    languageGroupLabel: 'Language',
    focusAreas: 'Focus areas',
    technologies: 'Technologies',
    tags: 'Tags',
    problem: 'Problem',
    approach: 'Approach',
    status: {
      planned: 'Planned',
      'in-progress': 'In progress',
      completed: 'Completed',
    },
    noteStatus: {
      planned: 'Planned',
      draft: 'Draft',
      published: 'Published',
    },
    pendingRepo: 'No public repository or write-up yet.',
    viewProjects: 'View projects',
    aboutMe: 'About me',
    allProjects: 'All projects',
    allNotes: 'All notes',
    moreAbout: 'More about my background',
    approachEyebrow: 'approach',
    selectedWorkEyebrow: 'selected work',
    writingEyebrow: 'writing',
    backgroundEyebrow: 'background',
    contactEyebrow: 'contact',
    contactTitle: 'Get in touch',
    contactFallback:
      'Public contact links are configured at build time and are not set for this deployment.',
    noContact: 'No public contact links are configured for this deployment.',
    footerNote: 'Static site — no trackers, no backend.',
    certificationsTitle: 'Certifications',
    selectedProjects: {
      title: 'Selected projects',
      description:
        'A small set of engineering explorations. Status is shown as-is — most are still planned.',
    },
    notesSection: {
      title: 'Engineering notes',
      description: 'Write-ups on Linux, Kubernetes, Go, and reliability work.',
    },
    experienceSection: {
      title: 'Experience',
    },
    projectsPage: {
      eyebrow: 'projects',
      title: 'Engineering projects',
      lede: 'Case-study style write-ups of systems I am exploring. A project is only marked complete once it is implemented and tested.',
      sectionTitle: 'All projects',
      notice:
        'Individual project detail pages are planned. This route and the cards above describe each project honestly; deeper write-ups will be added in a later change.',
    },
    notesPage: {
      eyebrow: 'notes',
      title: 'Engineering notes',
      lede: 'Technical write-ups on Linux networking, Kubernetes, Go concurrency, and reliability patterns. These are topics in progress, not published articles.',
      sectionTitle: 'Index',
      notice:
        'Individual note pages are planned. Nothing is marked published until it is actually written.',
    },
    aboutPage: {
      eyebrow: 'about',
      title: 'Systems, reliability, and failure modes',
      lede: 'I am a systems and platform engineer focused on how software behaves in the real world — under load, during partial outages, and when dependencies degrade.',
      focusTitle: 'Focus areas',
      contactTitle: 'Contact',
      contactDescription:
        'Public contact links are supplied at build time and never committed to the repository.',
    },
    notFound: {
      code: 'exit status 1 / 404',
      title: 'Path not found',
      body: 'There is nothing at this address. It may have moved, or never existed.',
      link: 'Return home',
    },
  },
}
