import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='tasks' element={<Tasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
