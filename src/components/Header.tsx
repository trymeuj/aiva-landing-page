"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-[#F6F6F6] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-[5%] py-6 flex justify-between items-center">
        <Link href="/" className="font-bold text-3xl">
          <span className="text-[#222222]">AIVA</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-12">
          <Link 
            href="/#use-cases"
            className="text-[#333333] hover:text-[#222222] transition-colors duration-200 py-2 text-lg"
          >
            Use Cases
          </Link>
          <Link 
            href="/#features"
            className="text-[#333333] hover:text-[#222222] transition-colors duration-200 py-2 text-lg"
          >
            Features
          </Link>
          <Link 
            href="/blog"
            className="text-[#333333] hover:text-[#222222] transition-colors duration-200 py-2 text-lg"
          >
            Blog
          </Link>
          <Link
            href="/demo"
            className="text-[#333333] hover:text-[#222222] transition-colors duration-200 py-2 text-lg"
          >
            Demo
          </Link>
          <Link 
            href="/get-started"
            className="bg-[#111111] text-white px-7 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </nav>
        
        <button 
          className="md:hidden z-50" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-[#F6F6F6] md:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ zIndex: 40 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              href="/#use-cases"
              className="text-[#333333] hover:text-[#222222] transition-colors duration-200 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link 
              href="/#features"
              className="text-[#333333] hover:text-[#222222] transition-colors duration-200 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/blog"
              className="text-[#333333] hover:text-[#222222] transition-colors duration-200 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/demo"
              className="text-[#333333] hover:text-[#222222] transition-colors duration-200 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </Link>
            <Link 
              href="/get-started"
              className="bg-[#111111] text-white px-7 py-3 rounded-md hover:opacity-90 transition-opacity text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;