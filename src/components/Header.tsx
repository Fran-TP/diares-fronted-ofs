import GitHubIcon from '../icons/GitHub'

const Header = () => {
  return (
    <header className='relative z-20'>
      <nav className='bg-gray-800'>
        <div className='flex justify-between items-center p-4'>
          <h1 className='text-white text-2xl'>AppEntry</h1>
          <ul className='flex items-center'>
            <li className='text-white'>
              <a
                className='rounded-full'
                href='https://github.com/Fran-TP'
                target='_blank'
              >
                <GitHubIcon className='h-5 w-5 opacity-80 hover:opacity-100 transition-opacity' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
