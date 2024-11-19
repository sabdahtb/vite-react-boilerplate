export default function Main() {
  const envName = process.env.USER_NAME

  return (
    <div>
      <h1 className="text-3xl font-bold">React + Vite!</h1>
      <pre className="mt-4 text-sm">{JSON.stringify({ envName }, null, 2)}</pre>
    </div>
  )
}
