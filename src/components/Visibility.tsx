import VisibilityGoodIcon from '../icons/VisibilityGood'
import VisibilityGreatIcon from '../icons/VisibilityGreat'
import VisibilityLowIcon from '../icons/VisibilityLow'
import VisibilityOkIcon from '../icons/VisibilityOk'
import ChipContainer from '../layout/ChipContainer'
import { Visibility as EntryVisibilityType } from '../types'

interface Props {
  visibility: EntryVisibilityType
}

const Visibility = ({ visibility }: Props) => {
  switch (visibility) {
    case EntryVisibilityType.Great:
      return (
        <ChipContainer>
          <span className='text-sm'>{visibility.toUpperCase()}</span>
          <VisibilityGreatIcon className='h-5 w-5' />
        </ChipContainer>
      )
    case EntryVisibilityType.Good:
      return (
        <ChipContainer>
          <span className='text-sm'>{visibility.toUpperCase()}</span>
          <VisibilityGoodIcon className='h-5 w-5' />
        </ChipContainer>
      )
    case EntryVisibilityType.Ok:
      return (
        <ChipContainer>
          <span className='text-sm'>{visibility.toUpperCase()}</span>
          <VisibilityOkIcon className='h-5 w-5' />
        </ChipContainer>
      )
    case EntryVisibilityType.Poor:
      return (
        <ChipContainer>
          <span className='text-sm'>{visibility.toUpperCase()}</span>
          <VisibilityLowIcon className='h-5 w-5' />
        </ChipContainer>
      )
    default:
      // eslint-disable-next-line no-case-declarations
      const _exhaustiveCheck: never = visibility

      return _exhaustiveCheck
  }
}

export default Visibility
