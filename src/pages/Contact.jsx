function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wine-100/30 pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl text-wine-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our services? Want to join our pilot program?
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pt-4 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl text-wine-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're based in the Willamette Valley and always happy to connect
              with wineries and wine enthusiasts. Drop us a line and we'll
              get back to you as soon as possible.
            </p>

            {/* Email CTA */}
            <a
              href="mailto:info@weineappdev.com"
              className="btn-primary inline-flex items-center text-lg"
            >
              <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@weineappdev.com
            </a>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-wine-100/50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-wine-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-wine-900 mb-2">Location</h3>
              <p className="text-gray-600">Willamette Valley, Oregon</p>
            </div>

            <div className="bg-wine-100/50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-wine-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-wine-900 mb-2">Email</h3>
              <a href="mailto:info@weineappdev.com" className="text-wine-700 hover:text-wine-900 transition-colors">
                info@weineappdev.com
              </a>
            </div>
          </div>

          {/* Interest Areas */}
          <div className="mt-16 p-8 bg-vine/10 rounded-2xl">
            <h3 className="font-display text-xl text-wine-900 mb-6 text-center">
              We're Especially Interested In
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center justify-center sm:justify-start">
                <svg className="w-5 h-5 text-vine mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Willamette Valley wineries</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <svg className="w-5 h-5 text-vine mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Cellar Tracker feedback</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <svg className="w-5 h-5 text-vine mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Partnership opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
