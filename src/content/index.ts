import { contactLinks } from './contact'
import { en } from './en'
import { id } from './id'
import type { ContentDictionary, Language, SiteContent } from './types'

const dictionaries: Record<Language, ContentDictionary> = { en, id }

/** All supported languages, in the order shown in the language switch. */
export const languages: Language[] = ['en', 'id']

/** Short codes shown on the language switch. */
export const languageCodes: Record<Language, string> = { en: 'EN', id: 'ID' }

/** Full names, used for accessible labels. */
export const languageNames: Record<Language, string> = {
  en: 'English',
  id: 'Bahasa Indonesia',
}

export const defaultLanguage: Language = 'en'

export function isLanguage(value: unknown): value is Language {
  return value === 'en' || value === 'id'
}

/** Resolve the full content set for a language, including contact links. */
export function getContent(language: Language): SiteContent {
  return { ...dictionaries[language], contact: contactLinks }
}

export type { Language, SiteContent, ContentDictionary }
