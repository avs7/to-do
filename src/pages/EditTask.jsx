import { useState } from 'react'
import TaskModal from '../components/TaskModal'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

function EditTask({ editing, setEditing, selectedTask, getTasks }) {
  const [updatedTask, setUpdatedTask] = useState({
    title: selectedTask.title,
    priority: selectedTask.priority,
  })

  const closeModal = () => setEditing(!editing)

  const handleInputChange = event => {
    setUpdatedTask(prev => ({ ...prev, title: event.target.value }))
  }

  const handlePriorityChange = event => {
    setUpdatedTask(prev => ({ ...prev, priority: event.target.value }))
  }

  const handleSubmit = async () => {
    const taskDoc = doc(db, 'tasks', selectedTask.id)
    await updateDoc(taskDoc, {
      title: updatedTask.title,
      priority: updatedTask.priority,
    })
    getTasks()
    closeModal()
  }

  return (
    <TaskModal
      taskTitle={updatedTask.title}
      handleInputChange={handleInputChange}
      taskPriority={updatedTask.priority}
      handlePriorityChange={handlePriorityChange}
      handleSubmit={handleSubmit}
      modalType='Edit Task'
      toggleModal={closeModal}
    />
  )
}

export default EditTask
