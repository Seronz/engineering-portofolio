import { languageCodes, languageNames, languages } from '@/content'
import { useLanguage } from '@/i18n/context'
import styles from './LanguageToggle.module.css'

/**
 * Small segmented control for switching language. Uses aria-pressed so screen
 * readers announce which language is active.
 */
export function LanguageToggle() {
  const { language, setLanguage, content } = useLanguage()

  return (
    <div
      className={styles.toggle}
      role="group"
      aria-label={content.ui.languageGroupLabel}
    >
      {languages.map((option) => {
        const isActive = option === language
        return (
          <button
            key={option}
            type="button"
            className={styles.option}
            aria-pressed={isActive}
            onClick={() => setLanguage(option)}
          >
            <span aria-hidden="true">{languageCodes[option]}</span>
            <span className="visually-hidden">{languageNames[option]}</span>
          </button>
        )
      })}
    </div>
  )
}
