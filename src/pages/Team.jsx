import getData from '../helpers/getData.js'
import {Await, useLoaderData} from 'react-router-dom'
import {Suspense} from 'react'
import Loader from '../components/Loader.jsx'
import TeamContent from '../components/TeamContent.jsx'

export const teamLoader = () => {
  const team = getData('https://jsonplaceholder.typicode.com/users')

  return team
}

const Team = () => {
  const team = useLoaderData()

  return (
    <>
      <h1 className='text-center p-5 text-2xl text-blue-250'>Team</h1>
      <Suspense fallback={<Loader/>}>
        <Await resolve={team}>
          <TeamContent/>
        </Await>
      </Suspense>
    </>
  )
}

export default Team