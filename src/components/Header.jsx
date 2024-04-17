import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-slate-950 text-xl p-4 text-white flex justify-center gap-20">
      <NavLink className='transition delay-300 ease-in-out hover:text-blue-200' to="/">Home</NavLink>
      <NavLink className='transition delay-300 ease-in-out hover:text-blue-200' to="posts">Posts</NavLink>
      <NavLink className='transition delay-300 ease-in-out hover:text-blue-200' to="add">Add Post</NavLink>
    </div>
  )
}

export default Header