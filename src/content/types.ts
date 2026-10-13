/**
 * Shared content types.
 *
 * Content is authored per language (see `src/content/en.ts` and
 * `src/content/id.ts`). Both files must satisfy `ContentDictionary`, so a
 * missing translation becomes a type error rather than an empty string at
 * runtime.
 */

export type Language = 'en' | 'id'

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

export type ProjectStatus = 'planned' | 'in-progress' | 'completed'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  slug: string
  name: string
  summary: string
  problem: string
  approach: string
  status: ProjectStatus
  technologies: string[]
  links: ProjectLink[]
}

export type NoteStatus = 'planned' | 'draft' | 'published'

export interface Note {
  slug: string
  title: string
  summary: string
  tags: string[]
  status: NoteStatus
  date: string
}

/** Labels and short copy used by the UI chrome rather than by content data. */
export interface UiStrings {
  skipToContent: string
  navLabel: string
  openMenu: string
  closeMenu: string
  languageGroupLabel: string
  focusAreas: string
  technologies: string
  tags: string
  problem: string
  approach: string
  status: Record<ProjectStatus, string>
  noteStatus: Record<NoteStatus, string>
  pendingRepo: string
  viewProjects: string
  aboutMe: string
  allProjects: string
  allNotes: string
  moreAbout: string
  approachEyebrow: string
  selectedWorkEyebrow: string
  writingEyebrow: string
  backgroundEyebrow: string
  contactEyebrow: string
  contactTitle: string
  contactFallback: string
  noContact: string
  footerNote: string
  selectedProjects: { title: string; description: string }
  notesSection: { title: string; description: string }
  experienceSection: { title: string }
  projectsPage: {
    eyebrow: string
    title: string
    lede: string
    sectionTitle: string
    notice: string
  }
  notesPage: {
    eyebrow: string
    title: string
    lede: string
    sectionTitle: string
    notice: string
  }
  aboutPage: {
    eyebrow: string
    title: string
    lede: string
    focusTitle: string
    contactTitle: string
    contactDescription: string
  }
  notFound: { code: string; title: string; body: string; link: string }
}

/** A complete set of translated content for one language, minus contact links. */
export interface ContentDictionary {
  siteName: string
  identity: string
  tagline: string
  hero: { headline: string; lede: string }
  approach: { heading: string; body: string[] }
  focusAreas: string[]
  experience: ExperienceEntry[]
  nav: NavItem[]
  projects: Project[]
  notes: Note[]
  ui: UiStrings
}

/** Content plus the build-time contact links, which are language-independent. */
export interface SiteContent extends ContentDictionary {
  contact: ContactLink[]
}
