import {useAsyncValue} from 'react-router-dom'

const TeamContent = () => {
  const team = useAsyncValue()

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {team.map((v) => (
        <div
          className='bg-blue-900 font-bold rounded-md p-4 w-1/3 text-white text-2xl'
          key={v.id}
        >
          <h1>Name: {v.name}</h1>
          <p>E-Mail: {v.email}</p>
          <div>
            <p>Address:</p>
            <ul>
              <li>Street: {v.address.street}</li>
              <li>Suite: {v.address.suite}</li>
              <li>City: {v.address.city}</li>
              <li>Zipcode: {v.address.zipcode}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TeamContent