import { SVGProps } from 'react'

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path d='M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4' />
      <path d='M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
      <path d='M15 3v4' />
      <path d='M7 3v4' />
      <path d='M3 11h16' />
      <path d='M18 16.496v1.504l1 1' />
    </svg>
  )
}

export default CalendarIcon
