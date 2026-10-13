/**
 * Project content.
 *
 * This is deliberately honest: nothing here is presented as finished unless it
 * actually is. Each project carries an explicit `status`, and the home page and
 * project cards render that status rather than implying shipped work.
 *
 * TODO(owner): update `status`, `repoUrl`, and descriptions as real work lands.
 */

export type ProjectStatus = 'planned' | 'in-progress' | 'completed'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  slug: string
  name: string
  /** One-line description of the area being explored. */
  summary: string
  /** The problem or question the project is trying to answer. */
  problem: string
  /** The engineering approach being taken. */
  approach: string
  status: ProjectStatus
  /** Technologies actually used. Empty when nothing is implemented yet. */
  technologies: string[]
  links: ProjectLink[]
}

export const statusLabels: Record<ProjectStatus, string> = {
  planned: 'Planned',
  'in-progress': 'In progress',
  completed: 'Completed',
}

export const projects: Project[] = [
  {
    slug: 'reliability-lab',
    name: 'Reliability Lab',
    summary: 'A Go-based exploration of how clients behave when dependencies misbehave.',
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
]
