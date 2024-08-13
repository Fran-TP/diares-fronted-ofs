import axios from 'axios'
import { NewEntry } from '../types'

const handleAxiosError = (error: unknown) => {
  let errorMessage = ''

  if (axios.isAxiosError(error)) {
    if (error.response) {
      errorMessage = error.response.data.error
    } else if (error.request) {
      errorMessage += error.message
    } else {
      errorMessage += error.message
    }
  }

  return errorMessage
}

const handleEntryFormErrors = (entryForm: NewEntry) => {
  const errors: Record<string, string> = {}

  Object.entries(entryForm).forEach(([key, value]) => {
    if (value === '') {
      errors[key] = `${key} is required`
    }
  })

  const hasError = Object.values(errors).some(error => error !== '')

  return { hasError, errors }
}

export default {
  handleAxiosError,
  handleEntryFormErrors
}
