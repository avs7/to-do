import { Outlet } from 'react-router-dom'
import Header from './Header'

import Navbar from './Navbar'
import Footer from './footer'

function Layout() {
  return (
    <>
      <Header />
      <div className='p-8'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Layout
