import ReactDOM from 'react-dom/client';
import './index.css';
import {StrictMode} from 'react'
import {RouterProvider} from 'react-router-dom'
import router from './router/router.jsx'
import AuthProvider from './hoc/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>
)
