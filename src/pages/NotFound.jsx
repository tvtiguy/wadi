import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  // Vercel rewrites every unknown path to index.html with a 200, so tell
  // search engines not to index these pages as real content.
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return (
    <div>
      <section className="bg-wine-100/30 pt-20 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-wine-900 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-vine font-medium text-sm tracking-widest uppercase mb-4">
            Error 404
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-wine-900 mb-6">
            This Bottle Is Empty
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            We couldn't find the page you were looking for. It may have moved,
            or the link may be mistyped.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound
