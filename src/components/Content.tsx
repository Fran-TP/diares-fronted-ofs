import { useAutoAnimate } from '@formkit/auto-animate/react'
import BackgroundGlowing from '../assets/glowing'
import PlusIcon from '../icons/Plus'
import { type DiaryEntry, type FilterValue } from '../types'
import Diary from './Diary'
import Filter from './Filter'
import Modal from './Modal'
import { useState } from 'react'
import AddEntryForm from './AddEntryForm'

interface Props {
  filterSelected: FilterValue
  diaries: DiaryEntry[]
  onFilterChange: (filter: FilterValue) => void
}

const Content = ({ filterSelected, diaries, onFilterChange }: Props) => {
  const [parentRef] = useAutoAnimate()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className='px-12 py-5'>
      <header className='mb-4'>
        <h1 className='text-2xl text-white'>Your notes</h1>
      </header>
      <nav className='flex justify-between items-center relative z-10'>
        <div className='border border-neutral-600 rounded-[28px] p-1 w-fit'>
          <Filter
            filterSelected={filterSelected}
            onFilterChange={onFilterChange}
          />
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className='bg-blue-500 p-2 rounded-full flex justify-center items-center space-x-1 border-2 border-transparent hover:border-blue-500 hover:bg-blue-600 transition-colors duration-300'
        >
          <PlusIcon className='h-5 w-5 stroke-2 stroke-white' />
        </button>
      </nav>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AddEntryForm />
      </Modal>
      <div className='pt-4'>
        <div className='absolute h-full w-full left-0 top-0'>
          <BackgroundGlowing className='absolute max-w-screen-lg m-auto inset-0 object-cover' />
        </div>
        <div
          ref={parentRef}
          className='w-full relative z-[10] grid gap-4 grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        >
          {diaries.map(diary => (
            <Diary key={diary.id} {...diary} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Content
