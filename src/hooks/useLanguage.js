import { useCallback, useContext } from 'react'
import { LanguageContext } from '../contexts/languageContext.js'
import { translations } from '../data/translations.js'

export function useLanguage() {
  const { language, setLanguage } = useContext(LanguageContext)

  const t = useCallback(
    (key) => {
      return translations[language]?.[key] ?? key
    },
    [language],
  )

  return {
    language,
    setLanguage,
    t,
  }
}

