import { useState } from 'react'
import { AppHeader } from '../components/AppHeader'
import { Button } from '../components/Button'
import { LanguageSwitch } from '../components/LanguageSwitch'
import { useLang, T } from '../i18n/LanguageContext'
import type { MsgKey } from '../i18n/strings'

interface LoginPageProps {
  onSubmit: (phone: string) => Promise<boolean>
  busy: boolean
  error: string
}

export function LoginPage({ onSubmit, busy, error }: LoginPageProps) {
  const { t } = useLang()
  const [phone, setPhone] = useState('')

  const digitsOnly = phone.replace(/\D/g, '')
  const canSubmit = digitsOnly.length === 10

  return (
    <div className="screen">
      <AppHeader title={t('common.appName')} subtitle={t('login.subtitle')} />
      <div className="screen-body login-body">
        <LanguageSwitch />

        <div className="login-intro">
          <h1>{t('login.heading')}</h1>
          <p>{t('login.body')}</p>
        </div>

        <T k="login.demoBanner" as="p" className="dev-banner" />

        <label className="field">
          <span className="field-label">{t('login.mobileLabel')}</span>
          <div className="phone-input">
            <span className="phone-prefix">+91</span>
            <input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder={t('login.mobilePlaceholder')}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoFocus
            />
          </div>
        </label>

        {error && <p className="field-error">{t(error as MsgKey)}</p>}

        <Button
          loading={busy}
          disabled={!canSubmit}
          onClick={() => onSubmit(`+91${digitsOnly}`)}
        >
          {t('login.sendOtp')}
        </Button>

        <T k="login.choOnlyNote" as="p" className="login-note" />
      </div>
    </div>
  )
}
