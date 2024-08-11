import { SVGProps } from 'react'

const WeatherCloudyIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path d='M3 18h13c3.866 0 7 -3.582 7 -8a5 5 0 0 0 -9.9 -1' />
      <path d='M18 16a5 5 0 0 0 -9.9 -1' />
    </svg>
  )
}

export default WeatherCloudyIcon
