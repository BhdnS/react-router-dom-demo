import {Await, Outlet, useLoaderData, useOutlet} from 'react-router-dom'
import AboutNav from '../components/AboutNav.jsx'
import getData from '../helpers/getData.js'
import {Suspense} from 'react'
import Loader from '../components/Loader.jsx'
import AboutContent from '../components/AboutContent.jsx'

export const loaderAbout = () => {
  const contact = getData('https://jsonplaceholder.typicode.com/users')

  return contact
}

const About = () => {
  const view = useOutlet()
  const contact = useLoaderData()

  return (
    <>
      <AboutNav/>
      {!view && <h1 className="text-center text-4xl pt-5">About Page</h1>}
      {!view && <Suspense fallback={<Loader/>}>
        <Await resolve={contact}>
          <AboutContent/>
        </Await>
      </Suspense>}
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default About