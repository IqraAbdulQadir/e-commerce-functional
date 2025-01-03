'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CartIcon from './CartIcon';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white top-0 left-0 w-full shadow-md z-50 relative">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
          <Link href="/">EternaLuxe</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={handleOpen}
          className="md:hidden block text-xl"
          aria-label="Toggle Navigation"
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`flex flex-col md:flex-row md:items-center gap-6 md:static absolute bg-gray-900 w-full md:w-auto top-[64px] left-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } md:opacity-100 md:visible`}
        >
          <Link
            href="/"
            className={`px-4 py-2 hover:text-purple-500-500 hover:underline ${
              pathname === '/' ? 'text-purple-900 font-bold' : ''
            }`}
            onClick={handleOpen}
          >
            Home
          </Link>

          <Link
            href="/Products"
            className={`px-4 py-2 hover:text-purple-500 hover:underline ${
              pathname === '/Products' ? 'text-purple-500 font-bold' : ''
            }`}
            onClick={handleOpen}
          >
           Products
          </Link>

          <Link
            href="/About"
            className={`px-4 py-2 hover:text-purple-500 hover:underline ${
              pathname === '/About' ? 'text-purple-500 font-bold' : ''
            }`}
            onClick={handleOpen}
          >
            About
          </Link>
          
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
