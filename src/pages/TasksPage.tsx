import { useState } from 'react'
import { AppHeader } from '../components/AppHeader'
import { TASKS } from '../data/mock'
import type { Task, TaskStatus } from '../types'
import { useLang } from '../i18n/LanguageContext'
import type { MsgKey } from '../i18n/strings'
import { initialsOf } from '../i18n/initials'

const COLUMNS: { key: TaskStatus; labelKey: MsgKey }[] = [
  { key: 'todo', labelKey: 'tasks.colTodo' },
  { key: 'doing', labelKey: 'tasks.colDoing' },
  { key: 'done', labelKey: 'tasks.colDone' },
]

const FILTER_LABEL_KEY: Record<TaskStatus | 'all', MsgKey> = {
  all: 'tasks.filterAll',
  todo: 'tasks.filterTodo',
  doing: 'tasks.filterDoing',
  done: 'tasks.filterDone',
}

export function TasksPage() {
  const { t } = useLang()
  const [tasks, setTasks] = useState<Task[]>(TASKS)
  const [filter, setFilter] = useState<TaskStatus | 'all'>('all')

  const advance = (id: string) =>
    setTasks((ts) =>
      ts.map((task) => {
        if (task.id !== id) return task
        const next: Record<TaskStatus, TaskStatus> = { todo: 'doing', doing: 'done', done: 'done' }
        return { ...task, status: next[task.status], progress: next[task.status] === 'done' ? 100 : task.progress }
      }),
    )

  const shown = COLUMNS.filter((c) => filter === 'all' || c.key === filter)

  return (
    <div className="screen">
      <AppHeader title={t('tasks.title')} subtitle={t('tasks.subtitle')} />
      <div className="screen-body">
        <div className="segmented">
          {(['all', 'todo', 'doing', 'done'] as const).map((f) => (
            <button
              key={f}
              className={`seg ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {t(FILTER_LABEL_KEY[f])}
            </button>
          ))}
        </div>

        {shown.map((col) => {
          const items = tasks.filter((task) => task.status === col.key)
          return (
            <div key={col.key} className="task-col">
              <div className="section-label">{t(col.labelKey)} · {items.length}</div>
              {items.length === 0 && <p className="muted empty-line">{t('tasks.empty')}</p>}
              {items.map((task) => (
                <div key={task.id} className={`card task-card ${task.status === 'done' ? 'task-done' : ''}`}>
                  <div className="task-top">
                    <span className={`avatar-mini ${task.status !== 'todo' ? 'confirmed' : ''}`}>
                      {initialsOf(t(task.assignee))}
                    </span>
                    <div className="task-meta">
                      <span className={`task-title ${task.status === 'done' ? 'strike' : ''}`}>{t(task.title)}</span>
                      <span className="muted">{t(task.assignee)}</span>
                    </div>
                    {task.priority === 'high' && task.status !== 'done' && (
                      <span className="chip chip-pink">{t('common.priorityHigh')}</span>
                    )}
                  </div>
                  {task.status === 'doing' && typeof task.progress === 'number' && (
                    <div className="progress-track"><div className="progress-fill" style={{ width: `${task.progress}%` }} /></div>
                  )}
                  {task.status !== 'done' && (
                    <button className="task-advance" onClick={() => advance(task.id)}>
                      {task.status === 'todo' ? t('tasks.start') : t('tasks.markDone')}
                    </button>
                  )}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
