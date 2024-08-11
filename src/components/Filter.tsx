import { FILTERS_BUTTONS } from '../constants'
import { type FilterValue } from '../types'
import { useTabAnimation } from '../hooks/useTabAnimation'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

const Filter = ({ filterSelected, onFilterChange }: Props) => {
  const { tabRefs, tabWidth, tabOffsetLeft, setSelectedTabIndex } =
    useTabAnimation(filterSelected)

  return (
    <div className='relative flex items-center'>
      <span
        className='absolute py-2 h-full bg-white/10 rounded-3xl transition-all duration-200'
        style={{ width: tabWidth, left: tabOffsetLeft }}
      ></span>
      <ul className='flex space-x-1'>
        {Object.entries(FILTERS_BUTTONS).map(
          ([key, { literal, href }], index) => {
            const isSelected = filterSelected === key

            return (
              <li key={key} className='text-center font-light'>
                <a
                  className={`inline-block text-white text-opacity-60 ${
                    isSelected ? 'opacity-100' : 'hover:text-neutral-300'
                  } px-3 py-1 relative z-10 transition-all duration-500`}
                  ref={element => {
                    tabRefs.current[index] = element
                  }}
                  href={href}
                  onClick={event => {
                    event.preventDefault()

                    onFilterChange(key as FilterValue)
                    setSelectedTabIndex(index)
                  }}
                >
                  {literal}
                </a>
              </li>
            )
          }
        )}
      </ul>
    </div>
  )
}

export default Filter
