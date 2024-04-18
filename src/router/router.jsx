import {createBrowserRouter} from 'react-router-dom'
import Layout from '../pages/Layout.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import Posts, {postsLoader} from '../pages/Posts.jsx'
import SinglePost, {singlePostLoader} from '../pages/SinglePost.jsx'
import AddPost, {addPostAction} from '../pages/AddPost.jsx'
import About, {loaderAbout} from '../pages/About.jsx'
import Team, {teamLoader} from '../pages/Team.jsx'
import Comments, {commentsLoader} from '../pages/Comments.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import RequireAuth from '../hoc/RequireAuth .jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
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
        element: (
          <RequireAuth>
            <AddPost/>
          </RequireAuth>
        ),
        action: addPostAction
      },
      {
        path: 'about',
        element: <About/>,
        loader: loaderAbout,
        children: [
          {
            path: 'team',
            element: <Team/>,
            loader: teamLoader,
          },
          {
            path: 'comments',
            element: <Comments/>,
            loader: commentsLoader,
          }
        ]
      },
      {
        path: 'login',
        element: <Login/>,
      }
    ]
  }
])

export default router