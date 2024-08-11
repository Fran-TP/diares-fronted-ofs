import { useEffect, useRef, useState } from 'react'
import { type FilterValue } from '../types'
import { NOTE_FILTERS } from '../constants'

export const useTabAnimation = (filterSelected: FilterValue) => {
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(() => {
    const selectedIndex = Object.entries(NOTE_FILTERS).findIndex(
      ([, value]) => value === filterSelected
    )

    return selectedIndex === -1 ? 0 : selectedIndex
  })
  const [tabWidth, setTabWidth] = useState(0)
  const [tabOffsetLeft, setTabOffsetLeft] = useState(0)

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabRefs.current[selectedTabIndex] as HTMLAnchorElement

      setTabOffsetLeft(currentTab.offsetLeft)
      setTabWidth(currentTab.clientWidth)
    }

    setTabPosition()
  }, [selectedTabIndex])

  return {
    tabRefs,
    selectedTabIndex,
    setSelectedTabIndex,
    tabWidth,
    tabOffsetLeft,
  }
}
