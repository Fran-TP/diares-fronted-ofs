import type { SVGProps } from 'react'

const PlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 4.5v15m7.5-7.5h-15'
      />
    </svg>
  )
}

export default PlusIcon
