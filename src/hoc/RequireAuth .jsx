import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth.jsx'

const RequireAuth = ({ children }) => {
  const location = useLocation()
  const { user } = useAuth()
  const isAuth = user.firstName && user.lastName

  if (!isAuth) {
    return <Navigate to='/login' state={{ from: location }} />
  }

  return children
}

export default RequireAuth
