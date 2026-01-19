import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        ></div>
        <div className="absolute inset-0 hero-gradient"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
              Wine Applications for<br />the Digital Industry
            </h1>
            <p className="text-xl md:text-2xl text-wine-100 max-w-3xl mx-auto mb-10">
              Modern technology solutions for wineries and wine enthusiasts
              in the Willamette Valley and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary bg-white text-wine-900 hover:bg-wine-100">
                Explore Services
              </Link>
              <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-wine-900">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Two powerful tools designed to transform how wineries operate
              and how enthusiasts enjoy their collections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Tasting Room Scheduling */}
            <div className="bg-wine-100/50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-wine-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-wine-900 mb-4">
                Tasting Room Scheduling
              </h3>
              <p className="text-gray-600 mb-6">
                Replace expensive booking platforms like Tock and OpenTable with a solution
                built specifically for Willamette Valley wineries. Manage reservations,
                optimize capacity, and enhance guest experiences.
              </p>
              <Link to="/services" className="text-wine-900 font-semibold hover:text-wine-700 inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Cellar Tracker */}
            <div className="bg-vine/10 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-vine rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-wine-900 mb-4">
                Cellar Tracker
              </h3>
              <p className="text-gray-600 mb-6">
                Keep track of your wine collection with ease. Catalog bottles, track
                drinking windows, and manage your cellar inventory. A modern alternative
                to apps like Vinocell.
              </p>
              <a
                href="https://cellar-manager-app.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vine font-semibold hover:opacity-80 inline-flex items-center"
              >
                Request Access
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why WADI */}
      <section className="py-20 bg-wine-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why WADI?</h2>
            <p className="section-subtitle">
              Built by wine industry professionals who understand your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-wine-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-wine-900 mb-2">Local Focus</h3>
              <p className="text-gray-600">
                Purpose-built for the Willamette Valley wine community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-wine-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-wine-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600">
                No more excessive fees from national booking platforms.
              </p>
            </div>

            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-wine-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-wine-900 mb-2">Modern Technology</h3>
              <p className="text-gray-600">
                Clean, intuitive interfaces that just work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-wine-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Ready to Transform Your Wine Business?
          </h2>
          <p className="text-wine-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a winery looking for better reservation management or a
            wine enthusiast wanting to organize your collection, we're here to help.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-wine-900 hover:bg-wine-100">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
