import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wine-100/30 pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl text-wine-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two powerful applications designed to serve both wineries and
              wine enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Tasting Room Scheduling */}
      <section className="pt-4 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-wine-100 text-wine-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                For Wineries
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-wine-900 mb-6">
                Tasting Room Scheduling
              </h2>
              <p className="text-gray-600 mb-6">
                Manage your winery's reservations without the hefty fees of national
                booking platforms. Our scheduling system is designed specifically for
                the wine industry, with features that Tock and OpenTable simply don't offer.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-vine mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    <strong className="text-wine-900">Flexible booking windows</strong> — Set up
                    tastings, tours, and special events with custom time slots and capacity limits.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-vine mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    <strong className="text-wine-900">Wine club integration</strong> — Give your
                    members priority access and special perks.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-vine mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    <strong className="text-wine-900">Affordable pricing</strong> — No per-cover
                    fees eating into your margins.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-vine mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    <strong className="text-wine-900">Local support</strong> — We're right here in
                    the Willamette Valley when you need us.
                  </span>
                </li>
              </ul>

              <div className="bg-wine-100/50 rounded-xl p-6">
                <p className="text-wine-900 font-medium mb-2">Coming Soon</p>
                <p className="text-gray-600 text-sm">
                  Our tasting room scheduling platform is currently in development.
                  Contact us to learn more or join our pilot program.
                </p>
                <Link to="/contact" className="btn-primary mt-4">
                  Get Early Access
                </Link>
              </div>
            </div>

            <div className="bg-wine-900 rounded-2xl p-8 text-white">
              <h3 className="font-display text-2xl mb-6">Why Switch from Tock?</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-wine-100 text-sm mb-1">Monthly fee with Tock</p>
                  <p className="text-3xl font-bold">$199 - $700/month</p>
                </div>
                <div>
                  <p className="text-wine-100 text-sm mb-1">Monthly fee with WADI</p>
                  <p className="text-3xl font-bold text-white">As low as $99/month</p>
                </div>
                <div className="border-t border-wine-700 pt-6">
                  <p className="text-wine-100 text-sm">
                    That's up to <strong className="text-white">$1,200/year</strong> in
                    savings you could invest back into your winery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cellar Tracker */}
      <section className="py-12 bg-wine-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src="/cellar-bg.jpg"
                    alt="Wine cellar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-wine-900/20"></div>
                </div>
                <p className="text-center text-gray-600 text-sm p-4">
                  Try our Cellar Tracker app — it's live now!
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center bg-vine/20 text-vine px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                For Wine Enthusiasts
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-wine-900 mb-6">
                Cellar Tracker
              </h2>
              <p className="text-gray-600 mb-6">
                Keep track of your wine collection with an app that's as refined as
                the wines you collect. Say goodbye to clunky spreadsheets and
                outdated inventory systems.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-wine-900 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    <strong className="text-wine-900">Easy cataloging</strong> — Add wines quickly
                    with smart search and autofill.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-wine-900 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    <strong className="text-wine-900">Drinking windows</strong> — Know when each
                    bottle is at its peak.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-wine-900 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    <strong className="text-wine-900">Tasting notes</strong> — Record your
                    impressions and ratings.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-wine-900 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    <strong className="text-wine-900">Clean interface</strong> — A modern experience
                    that's a joy to use.
                  </span>
                </li>
              </ul>

              <a
                href="https://cellar-manager-app.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-vine inline-flex items-center"
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

      {/* CTA */}
      <section className="py-20 bg-wine-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Interested in Our Services?
          </h2>
          <p className="text-wine-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a winery looking to streamline reservations or a collector
            wanting to organize your cellar, we'd love to hear from you.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-wine-900 hover:bg-wine-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
