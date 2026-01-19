function Login() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wine-100/30 pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl text-wine-900 mb-6">
              Customer Login
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access your WADI account.
            </p>
          </div>
        </div>
      </section>

      {/* Under Construction */}
      <section className="pt-4 pb-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-wine-100/50 rounded-2xl p-12">
            <div className="w-20 h-20 bg-wine-900 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="font-display text-2xl text-wine-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 mb-8">
              We're working on bringing you a secure customer portal.
              Check back soon for access to your account.
            </p>
            <a
              href="mailto:info@weineappdev.com"
              className="text-wine-900 font-semibold hover:text-wine-700 inline-flex items-center"
            >
              Contact us for early access
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
