export const NOTE_FILTERS = {
  ALL: 'all',
  COMPLETED: 'completed',
  INCOMPLETE: 'incomplete',
} as const

export const FILTERS_BUTTONS = {
  [NOTE_FILTERS.ALL]: {
    literal: 'All',
    href: `?filter=${NOTE_FILTERS.ALL}`,
  },
  [NOTE_FILTERS.COMPLETED]: {
    literal: 'Completed',
    href: `?filter=${NOTE_FILTERS.COMPLETED}`,
  },
  [NOTE_FILTERS.INCOMPLETE]: {
    literal: 'Incomplete',
    href: `?filter=${NOTE_FILTERS.INCOMPLETE}`,
  },
} as const
