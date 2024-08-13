interface Props {
  children: React.ReactNode
}

const ChipContainer = ({ children }: Props) => {
  return (
    <span className='flex items-center space-x-1 border border-neutral-600 px-2 py-1 bg-white/10 w-fit rounded-3xl'>
      {children}
    </span>
  )
}

export default ChipContainer
