import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline'; // Import the User icon
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import Logo from '../components/Logo'; // Ensure this import is correct

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white border-b border-gray-600">
      <nav className="mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-6">
          <a href="/" className="-m-1.5 p-1.5"> {/* Link to the homepage */}
            <Logo /> {/* Call the Logo component here */}
          </a>
        </div>

        {/* Center - Navigation links */}
        <div className="flex-1 flex justify-center space-x-8">
          <Link to="/" className="text-sm font-semibold hover:text-gold transition duration-300">
            Home
          </Link>
          <Link to="/gift-box" className="text-sm font-semibold hover:text-gold transition duration-300">
            Gift Box
          </Link>
          <a href="#" className="text-sm font-semibold hover:text-gold transition duration-300">
            About Us
          </a>
        </div>

        <div className="flex items-center space-x-6">

          <Link to="/auth" className="flex items-center text-sm font-semibold hover:text-gold transition duration-300">
            <UserIcon className="h-5 w-5 mr-1" aria-hidden="true" /> {/* Sign In icon */}
            Sign In
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-4 py-6 sm:max-w-xs sm:ring-1 sm:ring-gray-200">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5"> {/* Link to the homepage in mobile menu */}
              <Logo /> {/* Call the Logo component in mobile menu */}
            </a>
            <button
              type="button"
              className="-m-2.5 p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 space-y-6 border-t border-gray-200 pt-6">
            <Link to="/" className="block text-base font-semibold text-white hover:text-gold transition duration-300">
              Home
            </Link>
            <Link to="/gift-box" className="block text-base font-semibold text-white hover:text-gold transition duration-300">
              Gift Box
            </Link>
            <a href="#" className="block text-base font-semibold text-white hover:text-gold transition duration-300">
              About Us
            </a>
          </div>
          <div className="mt-6 border-t border-gray-200 pt-6">
            <Link to="/auth" className="block text-base font-semibold text-white hover:text-gold transition duration-300">
              <UserIcon className="h-5 w-5 inline mr-1" aria-hidden="true" /> {/* Sign In icon in mobile menu */}
              Sign In
            </Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
