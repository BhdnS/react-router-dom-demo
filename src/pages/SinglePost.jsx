import {Link, useLoaderData} from 'react-router-dom'
import axios from 'axios'

export const singlePostLoader = async ({params}) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

  return data
}

const SinglePost = () => {
  const data = useLoaderData()

  return (
    <>
      <h1 className='text-white text-center text-2xl my-10'>Single Post Page</h1>
      <Link
        className='bg-sky-500 rounded-md px-6 py-2 hover:bg-sky-600 mx-auto flex justify-center max-w-fit'
        to='/posts'
      >
        Back
      </Link>
      <div className='mt-5 flex flex-col gap-2'>
        <p>
          <span className='text-green-300'>Post ID: </span>
          {data.id}
        </p>
        <h2 className='text-xl'>
          <span className='text-green-300'>Post Title: </span>
          {data.title}
        </h2>
        <p>
          <span className='text-green-300'>Post Body: </span>
          {data.body}
        </p>
      </div>
    </>
  )
}

export default SinglePost