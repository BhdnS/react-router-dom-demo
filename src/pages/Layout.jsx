import Header from '../components/Header.jsx'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className='min-h-screen bg-slate-900 font-sans text-white pb-20'>
      <Header/>
      <div className='mx-auto'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout