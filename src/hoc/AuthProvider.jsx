import { useState } from 'react'
import AuthContext from '../context/AuthContext.jsx'

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
  })

  const signIn = (newUser, cb) => {
    setUser(newUser)
    cb()
  }

  const signOut = (cb) => {
    setUser({
      firstName: '',
      lastName: '',
    })
    cb()
  }

  const value = {
    user,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
