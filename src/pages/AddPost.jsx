import {Form, redirect} from 'react-router-dom'
import axios from 'axios'

export const addPostAction = async ({ request, params }) => {
  const formData = await request.formData()
  const data = {
    title: formData.get('title'),
    body: formData.get('body'),
    userId: Date.now()
  }

  await axios.post('https://jsonplaceholder.typicode.com/posts', data)

  return redirect('/posts')
}

const AddPost = () => {
  return (
    <Form
      action='/add'
      method='POST'
      className='p-10 bg-slate-800 flex flex-col gap-2'>
      <label className='flex flex-col gap-2'>
        Post title:
        <input
          className='text-black p-2'
          name='title'
          type="text"
        />
      </label>
      <label className='flex flex-col gap-2'>
        Post body:
        <input
          className='text-black p-2'
          name='body'
          type="text"
        />
      </label>
      <button className='transition delay-300 ease-in-out bg-sky-500 rounded-md px-6 py-2 hover:bg-sky-600'>
        Submit
      </button>
    </Form>
  )
}

export default AddPost