import ReactDOM from 'react-dom/client';
import './index.css';
import {StrictMode} from 'react'
import {RouterProvider} from 'react-router-dom'
import router from './router/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
