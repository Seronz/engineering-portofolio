/**
 * Engineering notes index.
 *
 * Notes are technical write-ups. Nothing is listed as published yet — these are
 * topics in progress or planned. Do not publish confidential work incidents or
 * employer-specific information.
 *
 * TODO(owner): move `status` to 'published' and add a body once a note is ready.
 */

export type NoteStatus = 'planned' | 'draft' | 'published'

export interface Note {
  slug: string
  title: string
  summary: string
  tags: string[]
  status: NoteStatus
  /** ISO date string. Empty while the note has no publish date. */
  date: string
}

export const noteStatusLabels: Record<NoteStatus, string> = {
  planned: 'Planned',
  draft: 'Draft',
  published: 'Published',
}

export const notes: Note[] = [
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
    summary: 'A practical path through roles, bindings, and service-account permissions.',
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
]
