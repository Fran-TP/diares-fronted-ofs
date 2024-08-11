import { useAutoAnimate } from '@formkit/auto-animate/react'
import CloseIcon from '../icons/Close'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ children, isOpen, onClose }: Props) => {
  const [animationParent] = useAutoAnimate()

  if (!isOpen) return null

  return (
    <div
      ref={animationParent}
      className='fixed inset-0 z-20 bg-black/10 backdrop-blur-sm flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={event => {
          event.stopPropagation()
        }}
        className='relative bg-slate-900 border border-neutral-700 rounded-lg'
      >
        {children}
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-lg text-white'
        >
          <CloseIcon className='h-7 w-7 opacity-80 hover:opacity-100 transition-opacity' />
        </button>
      </div>
    </div>
  )
}

export default Modal
