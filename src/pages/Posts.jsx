import {Await, useLoaderData} from 'react-router-dom'
import {Suspense} from 'react'
import PostData from '../components/PostData.jsx'
import Loader from '../components/Loader.jsx'
import getData from '../helpers/getData.js'

export const postsLoader = async () => {
  const posts = getData('https://jsonplaceholder.typicode.com/posts')

  return posts
}

const Posts = () => {
  const posts = useLoaderData()

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-white text-center text-2xl my-10'>
        Posts Page
      </h1>
      <Suspense fallback={<Loader/>}>
        <Await resolve={posts}>
          <PostData/>
        </Await>
      </Suspense>
    </div>
  )
}

export default Posts