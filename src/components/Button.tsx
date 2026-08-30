import type { ButtonHTMLAttributes } from 'react'
import { useLang } from '../i18n/LanguageContext'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  loading?: boolean
}

export function Button({ variant = 'primary', loading, children, disabled, ...rest }: ButtonProps) {
  const { t } = useLang()
  return (
    <button className={`btn btn-${variant}`} disabled={disabled || loading} {...rest}>
      {loading ? t('common.pleaseWait') : children}
    </button>
  )
}
