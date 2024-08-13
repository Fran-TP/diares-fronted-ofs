import { useEffect, useState } from 'react'
import Content from './components/Content'
import Header from './components/Header'
import { NOTE_FILTERS } from './constants'
import { DiaryEntry, type FilterValue } from './types'
import { getAllDiaries } from './services/diaries'

const App = () => {
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    NOTE_FILTERS.ALL
  )

  const [diaries, setDiaries] = useState<DiaryEntry[]>([])

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter)
  }

  const handleAddNewEntry = (newEntry: DiaryEntry) => {
    setDiaries(prev => [newEntry, ...prev])
  }

  const sortedDiaries = diaries.sort((a, b) => Number(b.id) - Number(a.id))

  useEffect(() => {
    getAllDiaries().then(data => {
      setDiaries(data)
    })
  }, [])

  return (
    <div className='min-h-full bg-slate-900'>
      <Header />
      <Content
        filterSelected={filterSelected}
        diaries={sortedDiaries}
        onAddNewEntry={handleAddNewEntry}
        onFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
