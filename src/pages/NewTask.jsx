import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { addDoc } from 'firebase/firestore'
import TaskModal from '../components/TaskModal'

function NewTask({ getTasks, tasksCollectionRef }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen)

  const [newTask, setNewTask] = useState({
    completed: false,
    title: '',
    priority: '',
    id: '',
  })

  const handleInputChange = event => {
    setNewTask(prev => ({ ...prev, title: event.target.value, id: uuid() }))
  }

  const handlePriorityChange = event => {
    setNewTask(prev => ({ ...prev, priority: event.target.value }))
  }

  const handleSubmit = async () => {
    try {
      await addDoc(tasksCollectionRef, {
        completed: newTask.completed,
        id: newTask.id,
        priority: newTask.priority,
        title: newTask.title,
      })
      toggleModal()
      getTasks()
      setNewTask({
        completed: false,
        title: '',
        priority: '',
        id: '',
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <button
        className='bg-sky-600 p-2 rounded-lg text-slate-200 text-lg'
        onClick={toggleModal}>
        New Task
      </button>

      <TaskModal
        taskTitle={newTask.title}
        handleInputChange={handleInputChange}
        taskPriority={newTask.priority}
        handlePriorityChange={handlePriorityChange}
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        toggleModal={toggleModal}
        modalType='New Task'
      />
    </>
  )
}

export default NewTask
