import { Outlet } from 'react-router-dom'
import { cn } from '@/lib/utils'
import Navbar from '../navbar'
import Footer from '../footer'

export default function Layout() {
  return (
    <div className={cn('grid min-h-screen grid-rows-[auto,1fr,auto]')}>
      <Navbar />
      <div className="container mx-auto h-full px-4 pb-12 pt-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
