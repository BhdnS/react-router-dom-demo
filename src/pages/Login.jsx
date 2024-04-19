import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth.jsx'

const Login = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '' })
  const [isValid, setIsValid] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { signIn } = useAuth()

  const fromPage = location.state?.from?.pathname || '/'

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.firstName === '' || formData.lastName === '') {
      setIsValid(true)
      return
    }

    setIsValid(false)

    signIn(formData, () => {
      navigate(fromPage, { replace: true })
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl p-4'>Login Page</h1>
      <form
        className='flex bg-blue-900 gap-2 p-2 rounded-md text-white'
        onSubmit={handleSubmit}
      >
        <label className='flex bg-slate-950 rounded-md gap-4 p-3'>
          First Name:
          <input
            className='bg-slate-950 focus:outline-none focus:ring-0'
            type='text'
            value={formData.firstName}
            onChange={handleChange}
            name='firstName'
          />
        </label>
        <label className='flex bg-slate-950 rounded-md gap-4 p-3'>
          LastName:
          <input
            className='bg-slate-950 focus:outline-none focus:ring-0'
            type='text'
            value={formData.lastName}
            onChange={handleChange}
            name='lastName'
          />
        </label>
        <button className='transition bg-slate-950 delay-150 p-3 rounded-md hover:bg-sky-600 block'>
          Login
        </button>
      </form>
      {isValid && (
        <h1 className='text-2xl p-2 text-red-500'>Please fill in all fields</h1>
      )}
    </div>
  )
}

export default Login
