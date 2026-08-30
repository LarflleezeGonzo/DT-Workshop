import { useState } from 'react'
import { AppHeader } from '../components/AppHeader'
import { Button } from '../components/Button'
import { useLang, T } from '../i18n/LanguageContext'
import type { MsgKey } from '../i18n/strings'
import { DEMO_OTP } from '../hooks/useAuth'

interface OtpPageProps {
  phone: string
  onVerify: (token: string) => Promise<boolean>
  onBack: () => void
  busy: boolean
  error: string
}

export function OtpPage({ phone, onVerify, onBack, busy, error }: OtpPageProps) {
  const { t } = useLang()
  const [token, setToken] = useState('')

  return (
    <div className="screen">
      <AppHeader title={t('otp.title')} subtitle={t('otp.subtitle', { phone })} onBack={onBack} />
      <div className="screen-body login-body">
        <div className="login-intro">
          <h1>{t('otp.heading')}</h1>
          <p>{t('otp.body')}</p>
        </div>

        <T k="otp.demoBanner" as="p" className="dev-banner" />
        <button className="link-inline" onClick={() => setToken(DEMO_OTP)}>
          {t('otp.autofill')}
        </button>

        <label className="field">
          <span className="field-label">{t('otp.label')}</span>
          <input
            className="otp-input"
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder="••••••"
            value={token}
            onChange={(e) => setToken(e.target.value.replace(/\D/g, ''))}
            autoFocus
          />
        </label>

        {error && <p className="field-error">{t(error as MsgKey)}</p>}

        <Button loading={busy} disabled={token.length !== 6} onClick={() => onVerify(token)}>
          {t('otp.verify')}
        </Button>
      </div>
    </div>
  )
}
