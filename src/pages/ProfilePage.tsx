import type { Profile } from '../types'
import { AppHeader } from '../components/AppHeader'
import { Button } from '../components/Button'
import { LanguageSwitch } from '../components/LanguageSwitch'
import { useLang } from '../i18n/LanguageContext'
import { initialsOf } from '../i18n/initials'

interface ProfilePageProps {
  profile: Profile
  onOpenPrivacy: () => void
  onSignOut: () => void
}

export function ProfilePage({ profile, onOpenPrivacy, onSignOut }: ProfilePageProps) {
  const { t } = useLang()
  const initials = initialsOf(t(profile.name))

  return (
    <div className="screen">
      <AppHeader title={t('profile.title')} />
      <div className="screen-body">
        <div className="card profile-card">
          <span className="avatar-lg">{initials}</span>
          <div className="profile-id">
            <div className="card-title">{t(profile.name)}</div>
            <span className="chip chip-blue">{profile.role}</span>
          </div>
        </div>

        <div className="card kv-card">
          <div className="kv-row"><span className="muted">{t('profile.facility')}</span><strong>{t(profile.facility)}</strong></div>
          <div className="kv-divider" />
          <div className="kv-row"><span className="muted">{t('profile.district')}</span><strong>{t(profile.district)}</strong></div>
          <div className="kv-divider" />
          <div className="kv-row"><span className="muted">{t('profile.mobile')}</span><strong>{profile.phone || '—'}</strong></div>
        </div>

        <div className="section-label">{t('profile.settings')}</div>
        <button className="list-row" onClick={onOpenPrivacy}>
          <span className="list-row-ic" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 3l7 3v5c0 4.4-3 8-7 10-4-2-7-5.6-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="list-row-text">
            <span className="list-row-title">{t('profile.privacyTitle')}</span>
            <span className="muted">{t('profile.privacySub')}</span>
          </div>
          <span className="chev">›</span>
        </button>

        <div className="list-row list-row-static">
          <span className="list-row-ic" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </span>
          <div className="list-row-text">
            <span className="list-row-title">{t('profile.language')}</span>
            <span className="muted">{t('profile.languageSub')}</span>
          </div>
        </div>
        <LanguageSwitch className="profile-lang-switch" />

        <div className="signout-row">
          <Button variant="outline" onClick={onSignOut}>{t('profile.signOut')}</Button>
        </div>
        <p className="muted center-note">{t('profile.footer')}</p>
      </div>
    </div>
  )
}
