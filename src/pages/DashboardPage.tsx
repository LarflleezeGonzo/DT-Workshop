import type { Profile } from '../types'
import { Button } from '../components/Button'
import { MEETINGS, TASKS, LEADERBOARD } from '../data/mock'
import { useLang } from '../i18n/LanguageContext'

interface DashboardPageProps {
  profile: Profile
  onOpenMeeting: (id: string) => void
  onSchedule: () => void
  onOpenTeam: () => void
  onGoTasks: () => void
}

export function DashboardPage({
  profile,
  onOpenMeeting,
  onSchedule,
  onOpenTeam,
  onGoTasks,
}: DashboardPageProps) {
  const { t } = useLang()
  const today = MEETINGS.find((m) => m.status === 'today')
  const pendingTasks = TASKS.filter((task) => task.status !== 'done').length
  const myTeam = LEADERBOARD.find((row) => row.isYou)

  return (
    <div className="screen">
      <header className="app-header dashboard-header">
        <div className="app-header-row">
          <span className="app-header-title">{t('dash.greeting', { name: t(profile.name).split(' ')[0] })}</span>
        </div>
        <div className="app-header-subtitle">
          {t('dash.location', { facility: t(profile.facility), district: t(profile.district) })}
        </div>
      </header>

      <div className="screen-body dashboard-body">
        <div className="stat-row">
          <button className="stat-tile stat-tile-btn" onClick={onGoTasks}>
            <div className="stat-num">2</div>
            <div className="stat-lab">{t('dash.statMeetings')}</div>
          </button>
          <button className="stat-tile stat-tile-btn" onClick={onGoTasks}>
            <div className="stat-num">{pendingTasks}</div>
            <div className="stat-lab">{t('dash.statPendingTasks')}</div>
          </button>
          <div className="stat-tile">
            <div className="stat-num">86%</div>
            <div className="stat-lab">{t('dash.statAttendance')}</div>
          </div>
        </div>

        {today && (
          <button className="card meeting-card card-btn" onClick={() => onOpenMeeting(today.id)}>
            <div className="card-row">
              <span className="chip chip-blue">{t('dash.upcomingChip')}</span>
              <span className="muted">{t('dash.distanceAway', { km: today.distanceKm })}</span>
            </div>
            <div className="card-title">{t(today.title)}</div>
            <div className="muted">
              {t(today.date)} · {t(today.time)} · {t(today.location)}
            </div>
            <div className="card-cta">{t('dash.openMeeting')}</div>
          </button>
        )}

        <div className="card">
          <div className="card-title">{t('dash.teamStatus')}</div>
          <div className="card-row" style={{ marginTop: 10, flexWrap: 'wrap', gap: 6, justifyContent: 'flex-start' }}>
            <span className="chip chip-green">{t('dash.anmConfirmed')}</span>
            <span className="chip chip-pink">{t('dash.ashaPending', { n: 2 })}</span>
          </div>
        </div>

        {myTeam && (
          <button className="card team-teaser card-btn" onClick={onOpenTeam}>
            <div className="card-row">
              <div>
                <div className="card-title">{t('dash.yourTeamRank', { rank: myTeam.rank })}</div>
                <div className="muted">{t('dash.teamTargetPct', { pct: myTeam.score })}</div>
              </div>
              <span className="card-cta">{t('common.view')}</span>
            </div>
          </button>
        )}

        <Button onClick={onSchedule}>{t('dash.scheduleBtn')}</Button>
      </div>
    </div>
  )
}
