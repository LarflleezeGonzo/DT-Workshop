import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { M, type MsgKey } from './strings'

export type Lang = 'hi' | 'en'

const STORAGE_KEY = 'aam.lang'

function readStoredLang(): Lang {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'hi' || v === 'en') return v
  } catch {
    // localStorage unavailable (private mode, disabled storage) — fall through
  }
  return 'hi'
}

function interpolate(str: string, vars?: Record<string, string | number>): string {
  if (!vars) return str
  return str.replace(/\{(\w+)\}/g, (match, key: string) => (key in vars ? String(vars[key]) : match))
}

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: MsgKey, vars?: Record<string, string | number>) => string
}

const LangContext = createContext<LangContextValue | null>(null)

/** Wrap the app once, near the root. Defaults to Hindi; persists the choice locally. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // best-effort persistence only
    }
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])

  const t = useCallback(
    (key: MsgKey, vars?: Record<string, string | number>) => {
      const idx = lang === 'hi' ? 0 : 1
      return interpolate(M[key][idx], vars)
    },
    [lang],
  )

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang() must be used within a LanguageProvider')
  return ctx
}

interface TProps {
  k: MsgKey
  vars?: Record<string, string | number>
  as?: 'span' | 'p' | 'div' | 'h1' | 'strong'
  className?: string
}

/**
 * Renders a catalog entry that contains inline markup (e.g. <strong>).
 * Catalog content is authored by us, never user input, so this is safe.
 */
export function T({ k, vars, as: As = 'span', className }: TProps) {
  const { t } = useLang()
  return <As className={className} dangerouslySetInnerHTML={{ __html: t(k, vars) }} />
}
