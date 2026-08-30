import { useEffect, useState } from 'react'
import type { Profile } from './types'
import { BottomNav, type Tab } from './components/BottomNav'
import { DashboardPage } from './pages/DashboardPage'
import { AgendaPage } from './pages/AgendaPage'
import { MeetingDetailPage } from './pages/MeetingDetailPage'
import { RecordingPage } from './pages/RecordingPage'
import { AttendancePage } from './pages/AttendancePage'
import { TasksPage } from './pages/TasksPage'
import { TeamPerformancePage } from './pages/TeamPerformancePage'
import { ProfilePage } from './pages/ProfilePage'
import { PrivacyCenterPage } from './pages/PrivacyCenterPage'
import { ScheduleMeetingPage } from './pages/ScheduleMeetingPage'
import { useLang } from './i18n/LanguageContext'

interface AppShellProps {
  profile: Profile
  onSignOut: () => void
}

type Screen =
  | { name: 'meeting'; meetingId: string }
  | { name: 'recording'; meetingId: string }
  | { name: 'attendance'; meetingId: string }
  | { name: 'team' }
  | { name: 'privacy' }
  | { name: 'schedule' }

export function AppShell({ profile, onSignOut }: AppShellProps) {
  const { t } = useLang()
  const [tab, setTab] = useState<Tab>('home')
  const [stack, setStack] = useState<Screen[]>([])
  const [toast, setToast] = useState('')

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), 2600)
    return () => clearTimeout(timer)
  }, [toast])

  const push = (screen: Screen) => setStack((s) => [...s, screen])
  const pop = () => setStack((s) => s.slice(0, -1))
  const resetTo = (nextTab: Tab) => { setStack([]); setTab(nextTab) }

  const top = stack[stack.length - 1]

  const renderTab = () => {
    switch (tab) {
      case 'home':
        return (
          <DashboardPage
            profile={profile}
            onOpenMeeting={(id) => push({ name: 'meeting', meetingId: id })}
            onSchedule={() => push({ name: 'schedule' })}
            onOpenTeam={() => push({ name: 'team' })}
            onGoTasks={() => setTab('tasks')}
          />
        )
      case 'agenda':
        return <AgendaPage onOpenMeeting={(id) => push({ name: 'meeting', meetingId: id })} />
      case 'tasks':
        return <TasksPage />
      case 'profile':
        return (
          <ProfilePage
            profile={profile}
            onOpenPrivacy={() => push({ name: 'privacy' })}
            onSignOut={onSignOut}
          />
        )
    }
  }

  const renderScreen = () => {
    if (!top) return renderTab()
    switch (top.name) {
      case 'meeting':
        return (
          <MeetingDetailPage
            meetingId={top.meetingId}
            onBack={pop}
            onStart={(id, record) =>
              setStack((s) => [
                ...s.slice(0, -1),
                record ? { name: 'recording', meetingId: id } : { name: 'attendance', meetingId: id },
              ])
            }
          />
        )
      case 'recording':
        return (
          <RecordingPage
            meetingId={top.meetingId}
            onBack={pop}
            onFinish={(id) =>
              setStack((s) => [...s.slice(0, -1), { name: 'attendance', meetingId: id }])
            }
          />
        )
      case 'attendance':
        return (
          <AttendancePage
            meetingId={top.meetingId}
            onBack={pop}
            onOpenPrivacy={() => push({ name: 'privacy' })}
            onDone={() => { setToast(t('toast.attendanceSaved')); resetTo('home') }}
          />
        )
      case 'team':
        return <TeamPerformancePage onBack={pop} />
      case 'privacy':
        return <PrivacyCenterPage onBack={pop} />
      case 'schedule':
        return (
          <ScheduleMeetingPage
            onBack={pop}
            onScheduled={() => { setToast(t('toast.meetingScheduled')); resetTo('agenda') }}
          />
        )
    }
  }

  return (
    <div className="app-shell">
      {renderScreen()}
      {!top && <BottomNav active={tab} onChange={resetTo} />}
      {toast && <div className="toast" role="status">{toast}</div>}
    </div>
  )
}
