import { useState } from 'react'
import { AppHeader } from '../components/AppHeader'
import { Button } from '../components/Button'
import { PrivacyNote } from '../components/PrivacyNote'
import { MEETINGS } from '../data/mock'
import { useLang, T } from '../i18n/LanguageContext'
import { initialsOf } from '../i18n/initials'

interface AttendancePageProps {
  meetingId: string
  onBack: () => void
  onDone: () => void
  onOpenPrivacy: () => void
}

type CaptureMode = 'none' | 'photo' | 'manual'

export function AttendancePage({ meetingId, onBack, onDone, onOpenPrivacy }: AttendancePageProps) {
  const { t } = useLang()
  const meeting = MEETINGS.find((m) => m.id === meetingId)
  const [mode, setMode] = useState<CaptureMode>('none')
  const [present, setPresent] = useState<Record<string, boolean>>(
    () => Object.fromEntries((meeting?.participants ?? []).map((p) => [p.name, p.confirmed])),
  )
  const [showWhoSees, setShowWhoSees] = useState(false)

  if (!meeting) {
    return (
      <div className="screen">
        <AppHeader title={t('att.headerFallback')} onBack={onBack} />
        <div className="screen-body"><p className="muted">{t('common.notFound')}</p></div>
      </div>
    )
  }

  const toggle = (name: string) => setPresent((p) => ({ ...p, [name]: !p[name] }))
  const presentCount = Object.values(present).filter(Boolean).length

  return (
    <div className="screen">
      <AppHeader title={t('att.title')} subtitle={t(meeting.title)} onBack={onBack} />
      <div className="screen-body">
        <PrivacyNote title={t('att.privacyTitle')}>
          {t('att.privacyBody')}
          <button className="link-inline" onClick={onOpenPrivacy}>{t('att.privacyLink')}</button>
        </PrivacyNote>

        {mode === 'none' && (
          <div className="card capture-choice">
            <div className="card-title">{t('att.chooseTitle')}</div>
            <p className="muted" style={{ marginTop: 4 }}>{t('att.chooseBody')}</p>
            <div className="capture-options">
              <button className="capture-option" onClick={() => setMode('photo')}>
                <span className="capture-option-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="6" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
                    <circle cx="12" cy="13" r="3.4" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M8 6l1.4-2h5.2L16 6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="capture-option-title">{t('att.groupPhoto')}</span>
                <span className="capture-option-sub">{t('att.groupPhotoSub')}</span>
              </button>
              <button className="capture-option" onClick={() => setMode('manual')}>
                <span className="capture-option-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="capture-option-title">{t('att.manual')}</span>
                <span className="capture-option-sub">{t('att.manualSub')}</span>
              </button>
            </div>
          </div>
        )}

        {mode === 'photo' && (
          <div className="card">
            <div className="camera-frame" aria-label={t('att.cameraPreview')}>
              <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
                <circle cx="12" cy="10" r="3.4" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 20c0-3.9 3.1-6 8-6s8 2.1 8 6" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <span>{t('att.cameraPreview')}</span>
            </div>
            <div className="capture-meta">
              <div className="capture-meta-item">
                <span className="muted">{t('att.capturedWith')}</span>
                <strong>{t('att.timeLabel', { time: t(meeting.time) })}</strong>
              </div>
              <div className="capture-meta-item">
                <span className="muted">{t('att.place')}</span>
                <strong>{t(meeting.location)}</strong>
              </div>
            </div>
            <button className="link-inline" onClick={() => setMode('manual')} style={{ marginTop: 10 }}>
              {t('att.switchManual')}
            </button>
          </div>
        )}

        <div className="section-label">{t('att.presentToday')}</div>
        <div className="card">
          {meeting.participants.map((p) => (
            <button key={p.name} className="present-row" onClick={() => toggle(p.name)}>
              <span className={`avatar-mini ${present[p.name] ? 'confirmed' : ''}`}>
                {initialsOf(t(p.name))}
              </span>
              <div className="participant-meta">
                <span className="participant-name">{t(p.name)}</span>
                <span className="muted">{p.role}</span>
              </div>
              <span className={`checkbox ${present[p.name] ? 'checked' : ''}`} aria-hidden="true" />
            </button>
          ))}
        </div>

        <button className="who-sees-toggle" onClick={() => setShowWhoSees((s) => !s)}>
          <span>{t('att.whoSees')}</span>
          <span className={`chev ${showWhoSees ? 'open' : ''}`}>›</span>
        </button>
        {showWhoSees && (
          <div className="who-sees-body">
            <T k="att.whoSeesTeam" as="p" />
            <T k="att.whoSeesYou" as="p" />
            <p className="muted">{t('att.whoSeesNote')}</p>
          </div>
        )}

        <Button onClick={onDone}>
          {t('att.save', { n: presentCount, m: meeting.participants.length })}
        </Button>
        <p className="muted center-note">{t('att.editLaterNote')}</p>
      </div>
    </div>
  )
}
