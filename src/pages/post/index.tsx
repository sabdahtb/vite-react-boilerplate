import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Post() {
  const [customParam, setCustomParam] = useState('')
  const params = useParams()
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (customParam) {
      navigate(`/post/${customParam}`)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Post</h1>
      {params?.id ? (
        <pre className="mt-4 w-fit rounded border p-4 text-sm">
          {JSON.stringify({ params }, null, 2)}
        </pre>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex w-fit items-center gap-2 rounded border p-4"
        >
          <input
            type="text"
            name="params"
            id="params"
            value={customParam}
            className="bg-gray-100 px-2 py-1"
            onChange={(e) => setCustomParam(e.target.value)}
            placeholder="Input custom params..."
          />
          <button type="submit" className="bg-blue-600 px-2 py-1 text-white">
            Navigate
          </button>
        </form>
      )}
    </div>
  )
}
