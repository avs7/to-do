import { useState } from 'react'

function Dashboard() {
  const taskCount = useState([])

  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
          <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#b91c1c'
              viewBox='0 0 24 24'
              strokeWidth={1.2}
              stroke='#94a3b8'
              className='w-16 h-16 mr- ml-2'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
              />
            </svg>
            <div className=' text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
              44
            </div>
            <div className='text-base leading-7 text-gray-600'>Urgent</div>
          </div>

          <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#facc15'
              viewBox='0 0 24 24'
              strokeWidth={1.2}
              stroke='#94a3b8'
              className='w-16 h-16 mr- ml-2'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
              />
            </svg>
            <div className=' text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
              105
            </div>
            <div className='text-base leading-7 text-gray-600'>Normal</div>
          </div>

          <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#4d7c0f'
              viewBox='0 0 24 24'
              strokeWidth={1.2}
              stroke='#94a3b8'
              className='w-16 h-16 mr- ml-2'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
              />
            </svg>
            <div className=' text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
              6
            </div>
            <div className='text-base leading-7 text-gray-600'>Low</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
