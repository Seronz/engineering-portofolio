/// <reference types="vite/client" />

/**
 * Public contact details are supplied at build time so they never live in the
 * repository. They are still inlined into the shipped site — this only keeps
 * personal information out of version control, it does not make it secret.
 */
interface ImportMetaEnv {
  readonly VITE_CONTACT_EMAIL?: string
  readonly VITE_CONTACT_GITHUB?: string
  readonly VITE_CONTACT_LINKEDIN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
