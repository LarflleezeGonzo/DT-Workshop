import { AppHeader } from '../components/AppHeader'
import { Button } from '../components/Button'
import { useLang } from '../i18n/LanguageContext'

interface RestrictedPageProps {
  onSignOut: () => void
}

// Dormant in the current demo build (useAuth never enters the 'restricted'
// stage — there is no backend to reject a role against). Kept translated
// and wired so CHO-only gating can come back once a real auth backend does.
export function RestrictedPage({ onSignOut }: RestrictedPageProps) {
  const { t } = useLang()
  return (
    <div className="screen">
      <AppHeader title={t('common.appName')} />
      <div className="screen-body restricted-body">
        <div className="restricted-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
            <path d="M12 8v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="16" r="1" fill="currentColor" />
          </svg>
        </div>
        <h1>{t('restricted.heading')}</h1>
        <p>{t('restricted.body')}</p>
        <Button variant="outline" onClick={onSignOut}>
          {t('restricted.tryAgain')}
        </Button>
      </div>
    </div>
  )
}
