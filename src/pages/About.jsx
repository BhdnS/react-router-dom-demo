import {Outlet, useLoaderData, useOutlet} from 'react-router-dom'
import AboutNav from '../components/AboutNav.jsx'
import getData from '../helpers/getData.js'
import AboutContent from '../components/AboutContent.jsx'
import LazyData from '../components/LazyData.jsx'

export const loaderAbout = () => {
  const contact = getData('https://jsonplaceholder.typicode.com/users')

  return { data: contact }
}

const About = () => {
  const view = useOutlet()
  const { data } = useLoaderData()

  return (
    <>
      <AboutNav/>
      {!view && <h1 className="text-center text-4xl pt-5">About Page</h1>}
      {!view &&
        <LazyData data={data}>
          <AboutContent/>
        </LazyData>
      }
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default About