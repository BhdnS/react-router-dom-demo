import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth.jsx'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { signIn } = useAuth()

  const fromPage = location.state?.from?.pathname || '/'

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = e.target
    const user = formData.name.value

    signIn(user, () => {
      navigate(fromPage, { replace: true })
    })
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl p-4'>Login Page</h1>
      <form
        className='flex bg-blue-900 rounded-md text-white'
        onSubmit={handleSubmit}
      >
        <label className='flex gap-4 p-3'>
          Name:
          <input
            className='bg-blue-900 focus:outline-none focus:ring-0'
            type='text'
            name='name'
          />
        </label>
        <button className='transition delay-150 p-3 rounded-r-md hover:bg-sky-600 block'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
