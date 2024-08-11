import { useState } from 'react'
import TextInput from './TextInput'

interface NewEntry {
  date: string
  visibility: string
  weather: string
  comment: string
}

const AddEntryForm = () => {
  const [entryForm, setEntryForm] = useState<NewEntry>({
    date: '',
    visibility: '',
    weather: '',
    comment: '',
  })

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(entryForm)
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
      <section>
        <form onSubmit={handleFormSubmit} className='flex flex-col gap-y-10'>
          <TextInput
            name='date'
            label='Date'
            placeholder='date'
            autoComplete='off'
            value={entryForm.date}
            onChange={handleChangeInput}
          />
          <TextInput
            name='visibility'
            label='Visibility'
            placeholder='visibility'
            autoComplete='off'
            value={entryForm.visibility}
            onChange={handleChangeInput}
          />
          <TextInput
            name='weather'
            label='Weather'
            placeholder='weather'
            autoComplete='off'
            value={entryForm.weather}
            onChange={handleChangeInput}
          />
          <TextInput
            name='comment'
            label='Comment'
            placeholder='comment'
            autoComplete='off'
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
