import { useLoaderData } from 'react-router-dom'
import CommentsContent from '../components/CommentsContent.jsx'
import LazyData from '../components/LazyData.jsx'
import getData from '../helpers/getData.js'

export const commentsLoader = () => {
  const comments = getData('https://jsonplaceholder.typicode.com/comments')

  return { data: comments }
}

const Comments = () => {
  const { data } = useLoaderData()

  return (
    <>
      <h1 className='text-center p-5 text-2xl text-blue-250'>Comments</h1>
      <LazyData data={data}>
        <CommentsContent />
      </LazyData>
    </>
  )
}

export default Comments
