import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth.jsx'

const BtnLogout = () => {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  const handleClickLogout = () => {
    signOut(() => {
      navigate('/')
    })
  }

  return (
    <button
      className='transition delay-300 ease-in-out hover:text-blue-200'
      onClick={handleClickLogout}
    >
      Logout
    </button>
  )
}

export default BtnLogout
