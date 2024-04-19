import { useLoaderData } from 'react-router-dom'
import LazyData from '../components/LazyData.jsx'
import TeamContent from '../components/TeamContent.jsx'
import getData from '../helpers/getData.js'

export const teamLoader = () => {
  const team = getData('https://jsonplaceholder.typicode.com/users')

  return { data: team }
}

const Team = () => {
  const { data } = useLoaderData()

  return (
    <>
      <h1 className='text-center p-5 text-2xl text-blue-250'>Team</h1>
      <LazyData data={data}>
        <TeamContent />
      </LazyData>
    </>
  )
}

export default Team
