import { NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth.jsx'
import BtnLogout from './BtnLogout.jsx'

const Header = () => {
  const { user } = useAuth()
  const isAuth = user.firstName !== '' && user.lastName !== ''

  return (
    <nav className='bg-slate-950 text-xl py-4 flex justify-center gap-10'>
      <NavLink
        className='transition delay-300 ease-in-out hover:text-blue-200'
        to='/'
      >
        Home
      </NavLink>
      <NavLink
        className='transition delay-300 ease-in-out hover:text-blue-200'
        to='posts'
      >
        Posts
      </NavLink>
      <NavLink
        className='transition delay-300 ease-in-out hover:text-blue-200'
        to='about'
      >
        About
      </NavLink>
      <NavLink
        className='transition delay-300 ease-in-out hover:text-blue-200'
        to='add'
      >
        Add Post
      </NavLink>
      {isAuth && <BtnLogout />}
      {!isAuth && (
        <NavLink
          className='transition delay-300 ease-in-out hover:text-blue-200'
          to='login'
        >
          Login
        </NavLink>
      )}
    </nav>
  )
}

export default Header
