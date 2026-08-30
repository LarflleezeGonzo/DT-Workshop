import { AppHeader } from '../components/AppHeader'
import { LEADERBOARD } from '../data/mock'
import { useLang } from '../i18n/LanguageContext'

interface TeamPerformancePageProps {
  onBack: () => void
}

// Rewards here are earned by the sector-level AAM team, never by an
// individual worker — no names, no personal scores, no currency.
export function TeamPerformancePage({ onBack }: TeamPerformancePageProps) {
  const { t } = useLang()
  const myTeam = LEADERBOARD.find((row) => row.isYou)

  return (
    <div className="screen">
      <AppHeader title={t('team.title')} subtitle={t('team.subtitle')} onBack={onBack} />
      <div className="screen-body">
        <div className="stat-row">
          <div className="stat-tile">
            <div className="stat-num">#{myTeam?.rank ?? '—'}</div>
            <div className="stat-lab">{t('team.ofTotal', { total: LEADERBOARD.length })}</div>
          </div>
          <div className="stat-tile">
            <div className="stat-num">{myTeam?.score ?? 0}%</div>
            <div className="stat-lab">{t('team.targetStat')}</div>
          </div>
        </div>

        <div className="card">
          <div className="card-title">{t('team.targetTitle')}</div>
          <div className="progress-track" style={{ marginTop: 10 }}>
            <div className="progress-fill" style={{ width: `${myTeam?.score ?? 0}%` }} />
          </div>
          <div className="card-row" style={{ marginTop: 6 }}>
            <span className="muted">{t('team.targetComplete', { pct: myTeam?.score ?? 0 })}</span>
            <span className="muted">{t('team.targetAuto')}</span>
          </div>
        </div>

        <div className="section-label">{t('team.leaderboard')}</div>
        <div className="card leaderboard">
          {LEADERBOARD.map((row) => (
            <div key={row.rank} className={`leader-row ${row.isYou ? 'you' : ''}`}>
              <span className="rank-num">{row.rank}</span>
              <span className={`avatar-mini ${row.rank <= 3 ? 'confirmed' : ''}`}>{row.initials}</span>
              <span className="leader-name">
                {t(row.team)}
                {row.isYou && <span className="chip chip-blue" style={{ marginLeft: 6 }}>{t('team.yours')}</span>}
              </span>
              <span className={`chip ${row.score >= 90 ? 'chip-green' : row.score >= 80 ? 'chip-blue' : 'chip-pink'}`}>
                {row.score}%
              </span>
            </div>
          ))}
        </div>

        <div className="card badge-strip">
          <div className="card-title">{t('team.recognitionTitle')}</div>
          <div className="badges">
            <span className="badge-pill">{t('team.badgeLogged')}</span>
            <span className="badge-pill">{t('team.badgeTurnout')}</span>
            <span className="badge-pill">{t('team.badgeOnTime')}</span>
          </div>
          <p className="muted" style={{ marginTop: 8 }}>{t('team.recognitionNote')}</p>
        </div>
      </div>
    </div>
  )
}
