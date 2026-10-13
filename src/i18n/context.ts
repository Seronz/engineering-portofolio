import { createContext, useContext } from 'react'
import type { Language, SiteContent } from '@/content'

export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  content: SiteContent
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

/** Access the active language, a setter, and the matching content. */
export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}

/** Convenience hook for components that only need the translated content. */
export function useContent(): SiteContent {
  return useLanguage().content
}
