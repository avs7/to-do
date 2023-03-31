import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function NewTask({ setTasks }) {
  const [isOpen, setIsOpen] = useState(false)
  const [newTask, setNewTask] = useState({
    completed: false,
    title: '',
    priority: '',
    id: null,
  })

  const toggleModal = () => setIsOpen(!isOpen)

  const handleInputChange = event => {
    setNewTask(prev => ({ ...prev, title: event.target.value }))
  }

  const handlePriorityChange = event => {
    setNewTask(prev => ({ ...prev, priority: event.target.value }))
  }

  const handleSubmit = () => {
    setTasks(prev => [...prev, newTask])
  }

  return (
    <>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={toggleModal}>
        New Task
      </button>

      {isOpen && (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div className='fixed inset-0 transition-opacity'>
              <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            </div>
            <span className='hidden sm:inline-block sm:align-middle sm:h-screen'></span>
            &#8203;
            <div
              className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
              role='dialog'
              aria-modal='true'
              aria-labelledby='modal'>
              <div>
                <div className='mt-3 text-center sm:mt-5'>
                  <h3
                    className='text-lg leading-6 font-medium text-gray-900'
                    id='modal'>
                    New Task
                  </h3>
                </div>
                <div className='mt-5'>
                  <form>
                    <div className='mt-5 mb-5'>
                      <label
                        htmlFor='input'
                        className='block text-sm font-medium text-gray-700 mb-2'>
                        Description
                      </label>
                      <input
                        type='text'
                        id='input'
                        name='input'
                        value={newTask.title}
                        onChange={handleInputChange}
                        className='pl-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='option'
                        className='block text-sm font-medium text-gray-700 mb-2'>
                        Priority
                      </label>
                      <select
                        id='option'
                        name='option'
                        value={newTask.priority}
                        onChange={handlePriorityChange}
                        className='pl-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                        <option value=''>Select an option</option>
                        <option value='High'>Normal</option>
                        <option value='Normal'>High</option>
                        <option value='Low'>Low</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className='flex mt-5 sm:mt-6 justify-center'>
                  <button
                    type='button'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
                      rounded mr-1'
                    onClick={handleSubmit}>
                    Save
                  </button>
                  <button
                    type='button'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
                      rounded ml-1'
                    onClick={toggleModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NewTask
