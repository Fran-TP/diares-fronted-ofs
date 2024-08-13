import { useState } from 'react'
import TextInput from './TextInput'
import { addNewEntry } from '../services/diaries'
import { DiaryEntry, NewEntry, Visibility, Weather } from '../types'
import helpers from '../utils/helpers'

interface Props {
  onAddNewEntry: (newEntry: DiaryEntry) => void
  onClose: () => void
}

const AddEntryForm = ({ onAddNewEntry, onClose }: Props) => {
  const [entryForm, setEntryForm] = useState<NewEntry>({
    date: '',
    visibility: Visibility.Great,
    weather: Weather.Sunny,
    comment: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [inputErrors, setInputErrors] = useState<Record<string, string>>({})

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { hasError, errors } = helpers.handleEntryFormErrors(entryForm)

    if (hasError) {
      setInputErrors(errors)
      return
    } else {
      setInputErrors({})
    }

    addNewEntry(entryForm)
      .then(data => {
        onAddNewEntry(data as DiaryEntry)
        setError(null)
        onClose()
      })
      .catch(error => {
        setError(error.message)
      })
  }

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setEntryForm(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <article className='p-5 w-96'>
      <header className='mb-10'>
        <h2 className='text-2xl font-semibold text-white'>
          Create a new entry
        </h2>
      </header>
      {error && <p className='text-red-500 mb-5'>{error}</p>}
      <section>
        <form onSubmit={handleFormSubmit} className='flex flex-col gap-y-7'>
          <TextInput
            name='date'
            label='Date'
            placeholder='date'
            autoComplete='off'
            error={inputErrors.date}
            value={entryForm.date}
            onChange={handleChangeInput}
            type='date'
          />
          <fieldset className='flex justify-evenly px-2 pb-3 border-2 border-gray-400 rounded-lg'>
            <legend className='text-white text-sm px-2'>
              Please select visibility
            </legend>
            {Object.entries(Visibility).map(([key, value]) => (
              <label key={key} className='text-white'>
                <input
                  type='radio'
                  name='visibility'
                  value={value}
                  checked={entryForm.visibility === value}
                  onChange={handleChangeInput}
                  className='mr-2 align-middle'
                />
                {value}
              </label>
            ))}
          </fieldset>
          <fieldset className='flex justify-evenly px-2 pb-3 border-2 border-gray-400 rounded-lg'>
            <legend className='text-white text-sm px-2'>
              Please select weather
            </legend>
            {Object.entries(Weather).map(([key, value]) => (
              <label key={key} className='text-white'>
                <input
                  type='radio'
                  name='weather'
                  value={value}
                  checked={entryForm.weather === value}
                  onChange={handleChangeInput}
                  className='mr-2 align-middle'
                />
                {value}
              </label>
            ))}
          </fieldset>
          <TextInput
            name='comment'
            label='Comment'
            placeholder='comment'
            autoComplete='off'
            error={inputErrors.comment}
            value={entryForm.comment}
            onChange={handleChangeInput}
          />
          <button
            type='submit'
            className='bg-blue-500 text-white p-2 rounded-lg'
          >
            Save
          </button>
        </form>
      </section>
    </article>
  )
}

export default AddEntryForm
