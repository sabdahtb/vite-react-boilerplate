import Layout from '@/components/layout'
import NotFound from '@/pages/404'
import Main from '@/pages/main'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="404" element={<NotFound />} />
    </Route>
  )
)

export default function Router() {
  return <RouterProvider router={router} />
}
