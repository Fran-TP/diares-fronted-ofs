import { type NOTE_FILTERS } from './constants'

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}

export interface DiaryEntry {
  id: string
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type NewEntry = Omit<DiaryEntry, 'id'>

export type FilterValue = (typeof NOTE_FILTERS)[keyof typeof NOTE_FILTERS]
