import { useState } from 'react'
import { AppHeader } from '../components/AppHeader'
import { Button } from '../components/Button'
import { PrivacyNote } from '../components/PrivacyNote'
import { useLang } from '../i18n/LanguageContext'
import type { MsgKey } from '../i18n/strings'

interface ScheduleMeetingPageProps {
  onBack: () => void
  onScheduled: () => void
}

const SLOT_KEYS: MsgKey[] = ['schedule.slot1', 'schedule.slot2', 'schedule.slot3']
const ROLES = ['CHO', 'ANM', 'ASHA'] as const

export function ScheduleMeetingPage({ onBack, onScheduled }: ScheduleMeetingPageProps) {
  const { t } = useLang()
  const [title, setTitle] = useState(t('mock.m1.title'))
  const [slot, setSlot] = useState<MsgKey>(SLOT_KEYS[0])
  const [notify, setNotify] = useState<Record<string, boolean>>({ CHO: true, ANM: true, ASHA: true })

  return (
    <div className="screen">
      <AppHeader title={t('schedule.title')} subtitle={t('schedule.subtitle')} onBack={onBack} />
      <div className="screen-body">
        <label className="field">
          <span className="field-label">{t('schedule.titleLabel')}</span>
          <input className="text-input" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <div className="field">
          <span className="field-label">{t('schedule.timeLabel')}</span>
          <div className="slot-list">
            {SLOT_KEYS.map((s) => (
              <button key={s} className={`slot ${slot === s ? 'active' : ''}`} onClick={() => setSlot(s)}>
                {t(s)}
              </button>
            ))}
          </div>
          <p className="muted" style={{ marginTop: 6 }}>{t('schedule.slotNote')}</p>
        </div>

        <div className="field">
          <span className="field-label">{t('schedule.notifyLabel')}</span>
          <div className="chip-toggle-row">
            {ROLES.map((r) => (
              <button
                key={r}
                className={`chip-toggle ${notify[r] ? 'on' : ''}`}
                onClick={() => setNotify((n) => ({ ...n, [r]: !n[r] }))}
              >
                {notify[r] ? '✓ ' : ''}{r}
              </button>
            ))}
          </div>
        </div>

        <PrivacyNote tone="inline">{t('schedule.privacyBody')}</PrivacyNote>

        <Button onClick={onScheduled}>{t('schedule.submit')}</Button>
      </div>
    </div>
  )
}
