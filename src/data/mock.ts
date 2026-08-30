import type { Meeting, Task, LeaderRow } from '../types'

export const MEETINGS: Meeting[] = [
  {
    id: 'm1',
    title: 'mock.m1.title',
    date: 'mock.m1.date',
    time: 'mock.m1.time',
    location: 'mock.loc.devaliHall',
    distanceKm: 1.2,
    priority: 'high',
    status: 'today',
    participants: [
      { role: 'CHO', name: 'mock.person.ashok', confirmed: true },
      { role: 'ANM', name: 'mock.person.sunita', confirmed: true },
      { role: 'ASHA', name: 'mock.person.radha', confirmed: false },
      { role: 'ASHA', name: 'mock.person.kavita', confirmed: false },
    ],
    agenda: [
      { id: 'a1', label: 'mock.a1', done: true },
      { id: 'a2', label: 'mock.a2', done: true },
      { id: 'a3', label: 'mock.a3', done: false },
      { id: 'a4', label: 'mock.a4', done: false },
      { id: 'a5', label: 'mock.a5', done: false, source: 'analytics' },
    ],
  },
  {
    id: 'm2',
    title: 'mock.m2.title',
    date: 'mock.m2.date',
    time: 'mock.m2.time',
    location: 'mock.loc.devaliHall',
    distanceKm: 1.2,
    priority: 'high',
    status: 'upcoming',
    participants: [
      { role: 'CHO', name: 'mock.person.ashok', confirmed: true },
      { role: 'ANM', name: 'mock.person.sunita', confirmed: false },
    ],
    agenda: [
      { id: 'b1', label: 'mock.b1', done: false },
      { id: 'b2', label: 'mock.b2', done: false },
    ],
  },
  {
    id: 'm3',
    title: 'mock.m3.title',
    date: 'mock.m3.date',
    time: 'mock.m3.time',
    location: 'mock.loc.devaliHall',
    distanceKm: 1.2,
    priority: 'medium',
    status: 'upcoming',
    participants: [
      { role: 'CHO', name: 'mock.person.ashok', confirmed: true },
      { role: 'ANM', name: 'mock.person.sunita', confirmed: false },
      { role: 'ASHA', name: 'mock.person.radha', confirmed: false },
    ],
    agenda: [
      { id: 'c1', label: 'mock.c1', done: false },
      { id: 'c2', label: 'mock.c2', done: false },
    ],
  },
]

export const TASKS: Task[] = [
  { id: 't1', title: 'mock.t1', assignee: 'mock.person.sunita', status: 'todo', priority: 'high' },
  { id: 't2', title: 'mock.t2', assignee: 'mock.person.radha', status: 'todo', priority: 'medium' },
  { id: 't3', title: 'mock.t3', assignee: 'mock.person.kavita', status: 'doing', progress: 60, priority: 'medium' },
  { id: 't4', title: 'mock.t4', assignee: 'mock.person.ashok', status: 'doing', progress: 30, priority: 'high' },
  { id: 't5', title: 'mock.t5', assignee: 'mock.person.sunita', status: 'done', priority: 'routine' },
]

// Sector-level AAM team leaderboard. Teams compete, not individuals — no
// worker is named or scored here. `initials` are the team's short code.
export const LEADERBOARD: LeaderRow[] = [
  { rank: 1, team: 'mock.place.devali', initials: 'DV', score: 98 },
  { rank: 2, team: 'mock.place.kolyari', initials: 'KL', score: 91 },
  { rank: 3, team: 'mock.place.salumber', initials: 'SL', score: 87, isYou: true },
  { rank: 4, team: 'mock.place.jhallara', initials: 'JH', score: 82 },
  { rank: 5, team: 'mock.place.semari', initials: 'SM', score: 78 },
]
