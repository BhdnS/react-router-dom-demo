import {Link, useAsyncValue} from 'react-router-dom'

const PostData = () => {
  const data = useAsyncValue()

  return (
    <>
      {data.map((v) => (
        <Link className='flex py-2 px-4 rounded-md bg-slate-700'
              to={`/posts/${v.id}`}
              key={v.id}
        >
          <span className='text-green-300 text-lg'>{v.title}</span>
        </Link>
      ))}
    </>
  )
}

export default PostData
