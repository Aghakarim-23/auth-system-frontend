import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <span className="text-[10rem] font-extrabold text-slate-200 leading-none select-none">
            404
          </span>
        </div>

        <div className="mb-2 w-16 h-1 bg-indigo-400 rounded-full mx-auto" />

        <h1 className="text-2xl font-semibold text-slate-700 mb-3">
          Page not found
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            Go back
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 transition-colors"
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
