import { useState } from 'react'
import { AppHeader } from '../components/AppHeader'
import { Button } from '../components/Button'
import { PrivacyNote } from '../components/PrivacyNote'
import { MEETINGS } from '../data/mock'
import type { AgendaItem } from '../types'
import { useLang } from '../i18n/LanguageContext'
import { initialsOf } from '../i18n/initials'

interface MeetingDetailPageProps {
  meetingId: string
  onBack: () => void
  onStart: (meetingId: string, record: boolean) => void
}

export function MeetingDetailPage({ meetingId, onBack, onStart }: MeetingDetailPageProps) {
  const { t } = useLang()
  const meeting = MEETINGS.find((m) => m.id === meetingId)
  const [agenda, setAgenda] = useState<AgendaItem[]>(meeting?.agenda ?? [])
  const [recordMeeting, setRecordMeeting] = useState(false)

  if (!meeting) {
    return (
      <div className="screen">
        <AppHeader title={t('meeting.headerFallback')} onBack={onBack} />
        <div className="screen-body"><p className="muted">{t('common.notFound')}</p></div>
      </div>
    )
  }

  const toggle = (id: string) =>
    setAgenda((items) => items.map((a) => (a.id === id ? { ...a, done: !a.done } : a)))

  return (
    <div className="screen">
      <AppHeader
        title={t(meeting.title)}
        subtitle={`${t(meeting.date)} · ${t(meeting.time)} · ${t(meeting.location)}`}
        onBack={onBack}
      />
      <div className="screen-body">
        <div className="card">
          <div className="section-label" style={{ marginTop: 0 }}>{t('meeting.participants')}</div>
          <div className="participant-list">
            {meeting.participants.map((p, i) => (
              <div key={i} className="participant-row">
                <span className={`avatar-mini ${p.confirmed ? 'confirmed' : ''}`}>
                  {initialsOf(t(p.name))}
                </span>
                <div className="participant-meta">
                  <span className="participant-name">{t(p.name)}</span>
                  <span className="muted">{p.role}</span>
                </div>
                <span className={`chip ${p.confirmed ? 'chip-green' : 'chip-pink'}`}>
                  {p.confirmed ? t('common.confirmed') : t('common.pending')}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="section-label">{t('meeting.suggestedAgenda')}</div>
        <div className="card agenda-card">
          {agenda.map((item) => (
            <button key={item.id} className="agenda-item" onClick={() => toggle(item.id)}>
              <span className={`checkbox ${item.done ? 'checked' : ''}`} aria-hidden="true" />
              <span className={`agenda-label ${item.done ? 'done' : ''}`}>
                {t(item.label)}
                {item.source === 'analytics' && <span className="chip chip-purple agenda-src">{t('meeting.fromAnalytics')}</span>}
              </span>
            </button>
          ))}
        </div>

        <div className="card toggle-card">
          <button
            className="toggle-row"
            role="switch"
            aria-checked={recordMeeting}
            onClick={() => setRecordMeeting((v) => !v)}
          >
            <span className="toggle-row-ic" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <div className="toggle-row-text">
              <span className="list-row-title">{t('meeting.recordToggle')}</span>
              <span className="muted">{t('meeting.recordToggleSub')}</span>
            </div>
            <span className={`switch ${recordMeeting ? 'on' : ''}`} aria-hidden="true">
              <span className="switch-knob" />
            </span>
          </button>

          {recordMeeting && (
            <PrivacyNote tone="inline" title={t('meeting.privacyTitle')}>
              {t('meeting.privacyBody')}
            </PrivacyNote>
          )}
        </div>

        <Button onClick={() => onStart(meeting.id, recordMeeting)}>
          {recordMeeting ? t('meeting.startRecord') : t('meeting.startAttendance')}
        </Button>
      </div>
    </div>
  )
}
