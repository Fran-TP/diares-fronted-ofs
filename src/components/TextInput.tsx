import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  error?: string
}

const TextInput = ({ name, label, error, ...rest }: Props) => {
  return (
    <div className='relative'>
      <input
        id={name}
        name={name}
        type='text'
        className={`peer w-full h-10 placeholder-transparent border-b-2 border-gray-400 bg-transparent text-white focus:outline-none focus:border-blue-500 ${
          error ? 'border-red-500' : ''
        }`}
        {...rest}
      />
      <label
        htmlFor={name}
        className='absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-300'
      >
        {label}
      </label>
      {error && <p className='text-red-500 text-sm font-light mt-1'>{error}</p>}
    </div>
  )
}

export default TextInput
