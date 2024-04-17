import {createBrowserRouter} from 'react-router-dom'
import Layout from '../pages/Layout.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import Posts, {postsLoader} from '../pages/Posts.jsx'
import SinglePost, {singlePostLoader} from '../pages/SinglePost.jsx'
import AddPost, {addPostAction} from '../pages/AddPost.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'posts',
        element: <Posts/>,
        loader: postsLoader
      },
      {
        path: 'posts/:id',
        element: <SinglePost/>,
        loader: singlePostLoader
      },
      {
        path: 'add',
        element: <AddPost/>,
        action: addPostAction
      }
    ]
  }
])

export default router