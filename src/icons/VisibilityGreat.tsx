import { SVGProps } from 'react'

const VisibilityGreatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 12h1' />
      <path d='M12 3v1' />
      <path d='M20 12h1' />
      <path d='M5.6 5.6l.7 .7' />
      <path d='M18.4 5.6l-.7 .7' />
      <path d='M8 12a4 4 0 1 1 8 0' />
      <path d='M3 16h18' />
      <path d='M3 20h18' />
    </svg>
  )
}

export default VisibilityGreatIcon
