import getData from '../helpers/getData.js'
import {Suspense} from 'react'
import Loader from '../components/Loader.jsx'
import {Await, useLoaderData} from 'react-router-dom'
import CommentsContent from '../components/CommentsContent.jsx'

export const commentsLoader = () => {
  const comments = getData('https://jsonplaceholder.typicode.com/comments')

  return comments
}

const Comments = () => {
  const comments = useLoaderData()

  return (
    <>
      <h1 className='text-center p-5 text-2xl text-blue-250'>Comments</h1>
      <Suspense fallback={<Loader/>}>
        <Await resolve={comments}>
          <CommentsContent/>
        </Await>
      </Suspense>
    </>
  )
}

export default Comments