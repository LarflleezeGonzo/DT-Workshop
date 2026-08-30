import { useEffect, useRef, useState } from 'react'
import { AppHeader } from '../components/AppHeader'
import { Button } from '../components/Button'
import { PrivacyNote } from '../components/PrivacyNote'
import { MEETINGS } from '../data/mock'
import { useLang } from '../i18n/LanguageContext'
import type { MsgKey } from '../i18n/strings'
import type { Role } from '../types'
import { initialsOf } from '../i18n/initials'

interface RecordingPageProps {
  meetingId: string
  onBack: () => void
  onFinish: (meetingId: string) => void
}

const TRANSCRIPT: { speaker: MsgKey; role: Role; text: MsgKey }[] = [
  { speaker: 'mock.person.ashok', role: 'CHO', text: 'rec.t1' },
  { speaker: 'mock.person.sunita', role: 'ANM', text: 'rec.t2' },
  { speaker: 'mock.person.ashok', role: 'CHO', text: 'rec.t3' },
  { speaker: 'mock.person.radha', role: 'ASHA', text: 'rec.t4' },
  { speaker: 'mock.person.ashok', role: 'CHO', text: 'rec.t5' },
  { speaker: 'mock.person.kavita', role: 'ASHA', text: 'rec.t6' },
  { speaker: 'mock.person.ashok', role: 'CHO', text: 'rec.t7' },
]

export function RecordingPage({ meetingId, onBack, onFinish }: RecordingPageProps) {
  const { t } = useLang()
  const meeting = MEETINGS.find((m) => m.id === meetingId)
  const [seconds, setSeconds] = useState(0)
  const [paused, setPaused] = useState(false)
  const [lineCount, setLineCount] = useState(1)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(timer)
  }, [paused])

  useEffect(() => {
    if (paused || lineCount >= TRANSCRIPT.length) return
    const timer = setTimeout(() => setLineCount((n) => Math.min(n + 1, TRANSCRIPT.length)), 2200)
    return () => clearTimeout(timer)
  }, [paused, lineCount])

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [lineCount])

  if (!meeting) {
    return (
      <div className="screen">
        <AppHeader title={t('rec.headerFallback')} onBack={onBack} />
        <div className="screen-body"><p className="muted">{t('common.notFound')}</p></div>
      </div>
    )
  }

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')

  return (
    <div className="screen">
      <AppHeader title={t(meeting.title)} subtitle={t('rec.subtitle')} onBack={onBack} />

      <div className="rec-status-bar">
        <span className={`rec-dot ${paused ? 'paused' : ''}`} aria-hidden="true" />
        <span>{paused ? t('rec.paused') : t('rec.recording')}</span>
        <span className="rec-timer">{mm}:{ss}</span>
        <span className="waveform" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className={`wave-bar ${paused ? 'still' : ''}`} style={{ animationDelay: `${i * 0.09}s` }} />
          ))}
        </span>
      </div>

      <div className="screen-body rec-body">
        <PrivacyNote tone="inline">{t('rec.privacyBody')}</PrivacyNote>

        <div className="section-label">{t('rec.liveTranscript')}</div>
        <div className="transcript-box" ref={bodyRef}>
          {TRANSCRIPT.slice(0, lineCount).map((line, i) => (
            <div key={i} className="transcript-line">
              <span className={`avatar-mini ${line.role === 'CHO' ? 'confirmed' : ''}`}>
                {initialsOf(t(line.speaker))}
              </span>
              <div>
                <div className="transcript-speaker">{t(line.speaker)} <span className="muted">· {line.role}</span></div>
                <div className="transcript-text">{t(line.text)}</div>
              </div>
            </div>
          ))}
          {lineCount < TRANSCRIPT.length && !paused && (
            <div className="transcript-typing"><span /><span /><span /></div>
          )}
        </div>

        <div className="rec-actions">
          <Button variant="outline" onClick={() => setPaused((p) => !p)}>
            {paused ? t('rec.resume') : t('rec.pause')}
          </Button>
          <Button onClick={() => onFinish(meeting.id)}>{t('rec.stopSave')}</Button>
        </div>
        <button className="link-inline center-note" onClick={onBack}>{t('rec.discard')}</button>
      </div>
    </div>
  )
}
