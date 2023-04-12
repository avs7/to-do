import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Home() {
  return (
    <>
      <Header />
      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Track your tasks
            </h2>
            <p className='mt-6 mb-8 text-lg leading-8 text-gray-600'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
              Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
              veniam occaecat fugiat aliqua.
            </p>
            <Link
              className='bg-sky-600 p-2 rounded-lg text-slate-200 text-lg'
              to='/main'>
              Open Tasks
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
