import { Outlet } from 'react-router-dom'
import Header from './Header'

import Navbar from './Navbar'

function Layout() {
  return (
    <>
      <Header />
      <div className='p-8'>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default Layout
