import { useAsyncValue } from 'react-router-dom'

const CommentsContent = () => {
  const comments = useAsyncValue()

  return (
    <ul className='m-auto w-2/3 bg-sky-600 p-10 rounded-md'>
      {comments.map((v) => (
        <li className='bg-blue-950 p-5 rounded-md mb-4' key={v.id}>
          <p className='text-xl'>
            {v.id}. {v.name}
          </p>
          <p className='text-green-300'>{v.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default CommentsContent
