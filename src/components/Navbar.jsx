import { NavLink } from 'react-router-dom'

function Navbar() {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#0284c7',
    
  }

  return (
    <header>
      <nav className='flex justify-around list-none text-lg font-semibold p-2'>
        <NavLink
          to='.'
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}>
          Dashboard
        </NavLink>

        <NavLink
          to='tasks'
          style={({ isActive }) => (isActive ? activeStyle : null)}>
          {' '}
          Tasks
        </NavLink>
      </nav>
      <hr className='mt-2 mb-4 drop-shadow-sm' />
    </header>
  )
}

export default Navbar
