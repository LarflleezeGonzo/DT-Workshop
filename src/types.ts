import type { MsgKey } from './i18n/strings'

export type Role = 'CHO' | 'ANM' | 'ASHA'

export interface Profile {
  id: string
  phone: string
  name: MsgKey
  role: Role
  facility: MsgKey
  district: MsgKey
}

export type Priority = 'high' | 'medium' | 'routine'

export interface Meeting {
  id: string
  title: MsgKey
  date: MsgKey
  time: MsgKey
  location: MsgKey
  distanceKm: number
  priority: Priority
  status: 'upcoming' | 'today' | 'done'
  participants: { role: Role; name: MsgKey; confirmed: boolean }[]
  agenda: AgendaItem[]
}

export interface AgendaItem {
  id: string
  label: MsgKey
  done: boolean
  source?: 'analytics'
}

export type TaskStatus = 'todo' | 'doing' | 'done'

export interface Task {
  id: string
  title: MsgKey
  assignee: MsgKey
  status: TaskStatus
  progress?: number
  priority: Priority
}

export interface LeaderRow {
  rank: number
  team: MsgKey
  initials: string
  score: number
  isYou?: boolean
}
