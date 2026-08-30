import { AppHeader } from '../components/AppHeader'
import { MEETINGS } from '../data/mock'
import type { Priority } from '../types'
import { useLang } from '../i18n/LanguageContext'
import type { MsgKey } from '../i18n/strings'
import { initialsOf } from '../i18n/initials'

interface AgendaPageProps {
  onOpenMeeting: (id: string) => void
}

const PRIORITY_CHIP: Record<Priority, string> = {
  high: 'chip-pink',
  medium: 'chip-blue',
  routine: 'chip-green',
}
const PRIORITY_LABEL_KEY: Record<Priority, MsgKey> = {
  high: 'common.priorityHigh',
  medium: 'common.priorityMedium',
  routine: 'common.priorityRoutine',
}

export function AgendaPage({ onOpenMeeting }: AgendaPageProps) {
  const { t } = useLang()
  return (
    <div className="screen">
      <AppHeader title={t('agenda.title')} subtitle={t('agenda.subtitle')} />
      <div className="screen-body">
        <div className="section-label">{t('agenda.thisWeek')}</div>
        {MEETINGS.map((m) => (
          <button key={m.id} className="card card-btn meeting-list-card" onClick={() => onOpenMeeting(m.id)}>
            <div className="card-row">
              <span className={`chip ${PRIORITY_CHIP[m.priority]}`}>{t(PRIORITY_LABEL_KEY[m.priority])}</span>
              <span className="muted">{t(m.date)} · {t(m.time)}</span>
            </div>
            <div className="card-title">{t(m.title)}</div>
            <div className="muted">{t(m.location)}</div>
            <div className="meeting-list-foot">
              <div className="avatar-stack">
                {m.participants.slice(0, 3).map((p, i) => (
                  <span key={i} className={`avatar-mini ${p.confirmed ? 'confirmed' : ''}`}>
                    {initialsOf(t(p.name))}
                  </span>
                ))}
              </div>
              <span className="muted">
                {t('agenda.confirmedCount', {
                  n: m.participants.filter((p) => p.confirmed).length,
                  m: m.participants.length,
                })}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
