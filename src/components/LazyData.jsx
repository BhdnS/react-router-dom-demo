import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import Loader from './Loader.jsx'

const LazyData = ({ children }) => {
  const { data } = useLoaderData()
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Await resolve={data}>{children}</Await>
      </Suspense>
    </>
  )
}

export default LazyData
