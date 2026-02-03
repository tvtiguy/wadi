function About() {
  const founders = [
    {
      name: 'Mark Watson',
      role: 'Co-Founder',
      bio: 'After a decade in broadcasting Mark made his way to Oregon to join Intel. After starting his own company providing software to MLB and NHL teams, he\'s ready to start his next adventure.',
      image: '/mark-watson.jpg',
    },
    {
      name: 'Darryl Nicholson',
      role: 'Co-Founder',
      bio: 'After leaving British Columbia and Nortel in the rearview mirror, Darryl came to Oregon to be immersed in the startup world. After completing exits with Janrain and Legit Script he\'s ready to start his next adventure.',
      image: '/darryl-nicholson.png',
    },
    {
      name: 'Ken Rhodes',
      role: 'Co-Founder',
      bio: 'Bio coming soon.',
      image: null, // Add path when available
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wine-100/30 pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl text-wine-900 mb-6">
              About WADI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wine Applications for the Digital Industry — building modern tools
              for the wine community by people who love wine.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pt-4 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                The wine industry deserves technology that works as beautifully
                as the wines themselves. Too often, wineries are forced to use
                expensive, clunky booking systems designed for restaurants, while
                wine collectors struggle with apps that feel like spreadsheets.
              </p>
              <p className="text-gray-600 mb-6">
                WADI was founded to change that. We're building purpose-built
                solutions starting right here in the Willamette Valley — one of
                the world's premier wine regions and our home.
              </p>
              <p className="text-gray-600">
                Our tasting room scheduling platform gives wineries an affordable
                alternative to Tock and OpenTable, while our Cellar Tracker helps
                enthusiasts manage their collections with the elegance they deserve.
              </p>
            </div>
            <div className="bg-wine-100/50 rounded-2xl p-8">
              <blockquote className="text-xl text-wine-900 font-display italic">
                "We believe technology should enhance the wine experience,
                not complicate it."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-wine-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet the Founders</h2>
            <p className="section-subtitle">
              Wine enthusiasts and technology professionals united by a
              shared vision for the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-wine-100 flex items-center justify-center">
                  {founder.image ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-wine-500">
                      <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-wine-900 mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-vine font-medium text-sm mb-4">
                    {founder.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Willamette Valley Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Proudly Based in the Willamette Valley</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Oregon's Willamette Valley is home to over 700 wineries and some of
              the finest Pinot Noir in the world. It's also our home, and we're
              committed to serving this remarkable wine community first.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              As we grow, we plan to expand our services to other wine regions,
              but our roots will always be here in Oregon.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
