import {Await, useLoaderData} from 'react-router-dom'
import axios from 'axios'
import {Suspense} from 'react'
import PostData from '../components/PostData.jsx'
import Loader from '../components/Loader.jsx'

export const postsLoader = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log(data)
  return data
}

const Posts = () => {
  const data = useLoaderData()

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-white text-center text-2xl my-10'>
        Posts Page
      </h1>
      <Suspense fallback={<Loader/>}>
        <Await resolve={data}>
          <PostData/>
        </Await>
      </Suspense>
    </div>
  )
}

export default Posts