import {useLoaderData} from 'react-router-dom'
import PostData from '../components/PostData.jsx'
import getData from '../helpers/getData.js'
import LazyData from '../components/LazyData.jsx'

export const postsLoader = async () => {
  const posts = getData('https://jsonplaceholder.typicode.com/posts')

  return { data: posts }
}

const Posts = () => {
  const { data } = useLoaderData()

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-white text-center text-2xl my-10'>
        Posts Page
      </h1>
      <LazyData posts={data}>
        <PostData/>
      </LazyData>
    </div>
  )
}

export default Posts