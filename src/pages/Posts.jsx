import { useLoaderData, useSearchParams } from 'react-router-dom'
import LazyData from '../components/LazyData.jsx'
import PostData from '../components/PostData.jsx'
import PostFilter from '../components/PostFilter.jsx'
import getData from '../helpers/getData.js'

export const postsLoader = async () => {
  const posts = getData('https://jsonplaceholder.typicode.com/posts')

  return { data: posts }
}

const Posts = () => {
  const { data } = useLoaderData()
  const [searchParams, setSearchParams] = useSearchParams()
  const postQuery = searchParams.get('post') || ''
  const latest = searchParams.has('latest')
  const startFrom = latest ? 80 : 1

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-white text-center text-2xl my-10'>Posts Page</h1>
      <PostFilter
        setSearch={setSearchParams}
        latest={latest}
        postQuery={postQuery}
      />
      <LazyData posts={data}>
        <PostData startFrom={startFrom} postQuery={postQuery} />
      </LazyData>
    </div>
  )
}

export default Posts
