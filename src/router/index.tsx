import Layout from '@/components/layout'
import Post from '@/pages/post'
import Main from '@/pages/main'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import ErrorPage from '@/pages/error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Main />} />
      <Route path="post" element={<Post />} />
      <Route path="post/:id" element={<Post />} />
    </Route>
  )
)

export default function Router() {
  return <RouterProvider router={router} />
}
