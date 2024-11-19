import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 dark:border-border sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link className="text-2xl font-semibold" to={'/'}>
          React Vite
        </Link>

        <div className="flex items-center justify-end gap-2">
          <Link className="font-medium text-blue-500" to={'/'}>
            Home
          </Link>
          <Link className="font-medium text-blue-500" to={'/404'}>
            404
          </Link>
        </div>
      </div>
    </div>
  )
}
