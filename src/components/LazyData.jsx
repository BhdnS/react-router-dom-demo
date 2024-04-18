import {Suspense} from 'react'
import Loader from './Loader.jsx'
import {Await, useLoaderData} from 'react-router-dom'

const LazyData = ({ children }) => {
  const { data } = useLoaderData()
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Await resolve={data}>
          {children}
        </Await>
      </Suspense>
    </>
  )
}

export default LazyData