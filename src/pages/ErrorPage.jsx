import {Link, useRouteError} from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className='min-h-screen bg-slate-900 font-sans text-white flex justify-center items-center flex-col gap-10'>
      <h1>{error.statusText}</h1>
      <h2>{error.status}</h2>
      <Link
        className='transition delay-300 ease-in-out bg-sky-500 rounded-md px-6 py-2 hover:bg-sky-600'
        to='/'
      >
        Back
      </Link>
    </div>
  )
}

export default ErrorPage