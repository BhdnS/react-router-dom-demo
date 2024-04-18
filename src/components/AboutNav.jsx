import {NavLink} from 'react-router-dom'

const AboutNav = () => {
  return (
    <nav className="bg-slate-950 text-xl p-4 text-white flex justify-center gap-20">
      <NavLink className='transition delay-300 ease-in-out hover:text-blue-200' to="team">Team</NavLink>
      <NavLink className='transition delay-300 ease-in-out hover:text-blue-200' to="comments">Comments</NavLink>
    </nav>
  )
}

export default AboutNav