import { useEffect, useRef, useState } from 'react'
import { FILTERS_BUTTONS, NOTE_FILTERS } from '../constants'
import { type FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

const Filter = ({ filterSelected, onFilterChange }: Props) => {
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(() => {
    const selectedIndex = Object.entries(NOTE_FILTERS).findIndex(
      ([, value]) => value === filterSelected
    )

    return selectedIndex === -1 ? 0 : selectedIndex
  })
  const [tabWidth, setTabWidth] = useState(0)
  const [tabOffsetLeft, setTabOffsetLeft] = useState(0)

  console.log(tabRefs)

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabRefs.current[selectedTabIndex] as HTMLAnchorElement

      setTabOffsetLeft(currentTab.offsetLeft)
      setTabWidth(currentTab.clientWidth)
    }

    setTabPosition()
  }, [selectedTabIndex])

  return (
    <div className='relative'>
      <span
        className='absolute flex py-2'
        style={{ width: tabWidth, left: tabOffsetLeft }}
      ></span>
      <ul className='flex gap-4'>
        {Object.entries(FILTERS_BUTTONS).map(
          ([key, { literal, href }], index) => {
            const isSelected = filterSelected === key

            return (
              <li
                key={key}
                className={`min-w-[5%] text-center ${
                  isSelected ? 'font-semibold' : 'font-light'
                }`}
              >
                <a
                  ref={element => (tabRefs.current[index] = element)}
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
