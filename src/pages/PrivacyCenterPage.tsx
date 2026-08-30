import { AppHeader } from '../components/AppHeader'
import { PrivacyNote } from '../components/PrivacyNote'
import { useLang } from '../i18n/LanguageContext'
import type { MsgKey } from '../i18n/strings'

interface PrivacyCenterPageProps {
  onBack: () => void
}

const FAQS: { qKey: MsgKey; aKey: MsgKey }[] = [
  { qKey: 'privacy.faq1q', aKey: 'privacy.faq1a' },
  { qKey: 'privacy.faq2q', aKey: 'privacy.faq2a' },
  { qKey: 'privacy.faq3q', aKey: 'privacy.faq3a' },
  { qKey: 'privacy.faq4q', aKey: 'privacy.faq4a' },
  { qKey: 'privacy.faq5q', aKey: 'privacy.faq5a' },
  { qKey: 'privacy.faq6q', aKey: 'privacy.faq6a' },
]

export function PrivacyCenterPage({ onBack }: PrivacyCenterPageProps) {
  const { t } = useLang()
  return (
    <div className="screen">
      <AppHeader title={t('privacy.title')} subtitle={t('privacy.subtitle')} onBack={onBack} />
      <div className="screen-body">
        <PrivacyNote title={t('privacy.introTitle')}>{t('privacy.introBody')}</PrivacyNote>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-q">
                {t(f.qKey)}
                <span className="chev">›</span>
              </summary>
              <p className="faq-a">{t(f.aKey)}</p>
            </details>
          ))}
        </div>

        <div className="card pledge-card">
          <div className="card-title">{t('privacy.pledgeTitle')}</div>
          <ul className="pledge-list">
            <li>{t('privacy.pledge1')}</li>
            <li>{t('privacy.pledge2')}</li>
            <li>{t('privacy.pledge3')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
