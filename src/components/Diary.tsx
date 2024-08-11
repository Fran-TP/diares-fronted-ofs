import CalendarIcon from '../icons/Calendar'
import type { DiaryEntry } from '../types'
import Visibility from './Visibility'
import Weather from './Weather'

const Diary = ({ id, date, visibility, weather, comment }: DiaryEntry) => {
  return (
    <article className='flex flex-col space-y-2 justify-between border bg-white/10 border-neutral-600 rounded-lg p-4 text-white font-light'>
      <h1 className='font-semibold text-xl mb-2'>Note {id}</h1>
      <section>
        <p>{comment}</p>
      </section>
      <section className='flex flex-col space-y-3'>
        <p className='flex space-x-1'>
          <span>Visibility</span>
          <Visibility visibility={visibility} />
        </p>
        <p className='flex space-x-1'>
          <span>Weather</span>
          <Weather weather={weather} />
        </p>
      </section>
      <footer>
        <p className='flex items-center justify-end space-x-2'>
          <CalendarIcon className='h-5 w-5' />
          <span className='text-sm'>{date}</span>
        </p>
      </footer>
    </article>
  )
}

export default Diary
