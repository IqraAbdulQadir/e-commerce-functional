import React from 'react'

import Link from 'next/link'


    // components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 transition-all ease-in-out duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
              EternaLuxe
            </h2>
          </div>

          {/* Links */}
          <div className="flex justify-center">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-lg hover:text-purple-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-lg hover:text-purple-400 transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-lg hover:text-purple-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M22.46 6c-.77.34-1.6.57-2.46.67a4.19 4.19 0 0 0 1.83-2.31 8.37 8.37 0 0 1-2.65 1.01A4.14 4.14 0 0 0 16.56 4a4.13 4.13 0 0 0-4.12 4.14c0 .33.04.65.12.96a11.74 11.74 0 0 1-8.5-4.3 4.12 4.12 0 0 0-.56 2.08 4.13 4.13 0 0 0 1.83 3.45 4.08 4.08 0 0 1-1.87-.52v.05a4.12 4.12 0 0 0 3.31 4.06 4.07 4.07 0 0 1-1.86.07 4.14 4.14 0 0 0 3.87 2.88A8.29 8.29 0 0 1 2 19.54a11.67 11.67 0 0 0 6.29 1.84c7.54 0 11.7-6.24 11.7-11.67 0-.18 0-.36-.02-.53A8.31 8.31 0 0 0 22.46 6z"></path>
              </svg>
            </Link>
            <Link href="https://facebook.com" target="_blank" className="hover:text-blue-600 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M22.46 6c-.77.34-1.6.57-2.46.67a4.19 4.19 0 0 0 1.83-2.31 8.37 8.37 0 0 1-2.65 1.01A4.14 4.14 0 0 0 16.56 4a4.13 4.13 0 0 0-4.12 4.14c0 .33.04.65.12.96a11.74 11.74 0 0 1-8.5-4.3 4.12 4.12 0 0 0-.56 2.08 4.13 4.13 0 0 0 1.83 3.45 4.08 4.08 0 0 1-1.87-.52v.05a4.12 4.12 0 0 0 3.31 4.06 4.07 4.07 0 0 1-1.86.07 4.14 4.14 0 0 0 3.87 2.88A8.29 8.29 0 0 1 2 19.54a11.67 11.67 0 0 0 6.29 1.84c7.54 0 11.7-6.24 11.7-11.67 0-.18 0-.36-.02-.53A8.31 8.31 0 0 0 22.46 6z"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-sm mt-6">
          <p>© 2025 BrandName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
