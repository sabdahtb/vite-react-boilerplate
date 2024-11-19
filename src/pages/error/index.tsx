import { Link, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError()

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-bold">{error?.status ?? 404}</h1>
      <h1 className="text-2xl font-bold">
        {error?.statusText ?? 'Page Not Found'}
      </h1>
      <p className="my-4 italic">
        {error?.data ?? 'The page you are looking for does not exist.'}
      </p>
      <Link to={'/'} className="rounded bg-gray-300 px-4 py-2 font-medium">
        Go Back Home
      </Link>
    </div>
  )
}
