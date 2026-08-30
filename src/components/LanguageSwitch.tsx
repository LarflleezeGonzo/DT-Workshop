import { useLang } from '../i18n/LanguageContext'

/**
 * हिन्दी / English toggle. Option labels are proper nouns for the
 * languages themselves, so they are not run through t() — "हिन्दी" reads
 * the same regardless of which locale is currently active.
 */
export function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLang()
  return (
    <div className={`segmented lang-switch ${className ?? ''}`} role="group" aria-label="Language / भाषा">
      <button className={`seg ${lang === 'hi' ? 'active' : ''}`} onClick={() => setLang('hi')}>
        हिन्दी
      </button>
      <button className={`seg ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>
        English
      </button>
    </div>
  )
}
