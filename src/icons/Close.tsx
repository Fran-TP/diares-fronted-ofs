import { SVGProps } from 'react'

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 10.586l-4.293-4.293-1.414 1.414L10.586 12l-4.293 4.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L13.414 12l4.293-4.293-1.414-1.414L12 10.586z'
        fill='currentColor'
      />
    </svg>
  )
}

export default CloseIcon
