import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-wine-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="/logo.png"
              alt="WADI"
              className="h-20 w-auto mb-4"
            />
            <p className="text-wine-100 text-sm max-w-md">
              Empowering wineries and wine enthusiasts with modern technology solutions
              for the Willamette Valley and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-wine-100 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-wine-100 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-wine-100 hover:text-white text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-wine-100 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-wine-100 hover:text-white text-sm transition-colors">
                  Tasting Room Scheduling
                </Link>
              </li>
              <li>
                <a
                  href="https://cellar-manager-app.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wine-100 hover:text-white text-sm transition-colors"
                >
                  Cellar Tracker
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-wine-700 mt-8 pt-8 text-center">
          <p className="text-wine-100 text-sm">
            &copy; {currentYear} WADI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
