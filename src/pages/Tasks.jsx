import { useState, useEffect } from 'react'
import NewTask from './NewTask'
import { db } from '../config/firebase'
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'

function Tasks() {
  const [tasks, setTasks] = useState([])

  const tasksCollectionRef = collection(db, 'tasks')

  const getTasks = async () => {
    try {
      const data = await getDocs(tasksCollectionRef)
      const filteredData = data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }))
      setTasks(filteredData)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getTasks()
  }, [])

  const deleteTask = async id => {
    const activeTask = doc(db, 'tasks', id)
    await deleteDoc(activeTask)
    getTasks()
  }

  const updateTask = async id => {
    
  }

  // TODO: update to sync with db instead of just task state
  const toggleCompleted = e => {
    const newTasks = [...tasks]
    const activeTask = newTasks.find(task => task.id === e.target.id)
    activeTask.completed = !activeTask.completed
    setTasks(newTasks)
  }

  const taskElements = tasks.map(task => (
    <div
      className='flex mb-[0.25rem] mt-[1rem] min-h-[1.5rem] pl-[1.5rem] items-center'
      key={task.id}>
      <input
        className='mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] rounded-[0.25rem] border-[0.125rem] hover:cursor-pointer '
        type='checkbox'
        checked={task.completed}
        onChange={e => toggleCompleted(e)}
        id={task.id}
      />
      <div className='flex items-center w-72'>
        <label
          className='pl-[0.15rem] text-lg w-72 truncate'
          htmlFor='checkbox'>
          {task.title}
        </label>

        <div className='flex items-center '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.2}
            stroke='#94a3b8'
            onClick={() => updateTask(task.id)}
            className='w-4 h-4 ml-6 mr-2 hover:cursor-pointer'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.2}
            stroke='#94a3b8'
            onClick={() => deleteTask(task.id)}
            className='w-4 h-4 ml-2 hover:cursor-pointer'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
            />
          </svg>
        </div>
      </div>
    </div>
  ))

  return (
    <div className='flex justify-center items-center flex-col'>
      <NewTask
        setTasks={setTasks}
        tasksCollectionRef={tasksCollectionRef}
        getTasks={getTasks}
      />
      <div className='flex flex-col mt-1'>{taskElements}</div>
    </div>
  )
}

export default Tasks
