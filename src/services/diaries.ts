import axios from 'axios'
import { DiaryEntry, NewEntry } from '../types'
import helpers from '../utils/helpers'

const DIARIES_API_URL = 'http://localhost:3000/api/diaries'


export const getAllDiaries = async () => {
  try {
    const response = await axios.get<DiaryEntry[]>(DIARIES_API_URL)

    return response.data
  } catch (error) {
    const errorMessage = helpers.handleAxiosError(error)

    throw new Error(errorMessage)
  }
}

export const addNewEntry = async (newEntry: NewEntry) => {
  try {
    const response = await axios.post<DiaryEntry>(DIARIES_API_URL, newEntry)

    return response.data
  } catch (error) {
    const errorMessage = helpers.handleAxiosError(error)

    throw new Error(errorMessage)
  }
}