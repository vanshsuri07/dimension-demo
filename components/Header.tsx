"use client";

import Link from "next/link";
import { useEffect} from "react";
import React from "react";

interface HeaderProps {
  className?: string;
}

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#careers' },
  { label: 'Blog', href: '#blog' },
  { label: 'Changelog', href: '#changelog' },
];

const Header: React.FC<HeaderProps> = ({className=''}) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 }${className}`}>
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className={`flex h-16 items-center transition-all duration-500 ${
          isScrolled ? 'justify-center' : 'justify-between'
        }`}>
              <div className={`flex items-center transition-all duration-500 ${
            isScrolled 
              ? 'opacity-0 pointer-events-none absolute left-6' 
              : 'opacity-100'
          }`}>
                <Link href="/" className="flex items-center space-x-2  font-bold">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-400 via-rose-400 to-yellow-200 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>  
                </div>
                <span className="text-xl font-semibold">Dimension</span>
                </Link>
            </div>

          <div className={`hidden md:flex items-center mx-5 space-x-8 border border-gray-300 px-6 py-3 rounded-4xl   ${
            isScrolled 
              ? 'opacity-0 pointer-events-none absolute left-1/2 transform -translate-x-1/2' 
              : ''
          } `}>
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

      {isScrolled ? (
 
  <div className="hidden md:flex items-center mx-5 space-x-8 border border-gray-300 px-6 py-1 rounded-4xl  ">
    {navigationItems.map((item) => (
      <a
        key={item.label}
        href={item.href}
        className="text-gray-600 hover:text-gray-900  text-sm font-medium"
      >
        {item.label}
      </a>
    ))}
    <a
      href="#waitlist"
      className="bg-gradient-to-br from-violet-400 via-rose-400 to-yellow-200 text-white px-4 py-2 rounded-4xl text-sm font-medium  hover:scale-105 whitespace-nowrap"
    >
      Join Waitlist
    </a>
  </div>
) : (
 
   <div className="hidden md:flex items-center  "
           >
            <a
              href="#waitlist"
              className="bg-gradient-to-tl from-indigo-900 via-gray-600 to-indigo-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
            >
              Join Waitlist
            </a>
          </div>
)}
 <div className={`md:hidden transition-all duration-500 ${
            isScrolled 
              ? 'absolute right-6' 
              : ''
          }`}>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100 pb-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="pt-4 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <a
                href="#signin"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </a>
              <a
                href="#waitlist"
                className="block bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium text-center transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </a>
            </div>
          </div>



            </div>
        </nav>
     </header>
  );
};

export default Header;
