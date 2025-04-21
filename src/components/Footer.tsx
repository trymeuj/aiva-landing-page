"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#E6E6E6] mt-16">
      <div className="max-w-[1200px] mx-auto px-[5%] pt-[80px] pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold text-2xl mb-6 text-[#222222]">AIVA</h3>
            <p className="text-[#444444] text-lg">
              Your autonomous AI agent that connects to all your apps and completes your tasks.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-xl mb-6 text-[#222222]">Company</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-[#444444] text-lg hover:text-[#222222] transition-colors"
                >
                  About
                </button>
              </li>
              {/* <li><Link href="/careers" className="text-[#444444] text-lg hover:text-[#222222] transition-colors">Careers</Link></li> */}
              <li>
                <button 
                  className="text-[#444444] text-lg hover:text-[#222222] transition-colors"
                  data-tally-open="3y7qQB" 
                  data-tally-layout="modal" 
                  data-tally-width="600" 
                  data-tally-hide-title="0" 
                  data-tally-emoji-text="👋" 
                  data-tally-emoji-animation="wave" 
                  data-tally-auto-close="3"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-xl mb-6 text-[#222222]">Follow Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://x.com/AIVA_HQ" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#444444] text-lg hover:text-[#222222] transition-colors flex items-center"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                  X (Twitter)
                </a>
              </li>
              <li>
                <a 
                  href="http://linkedin.com/company/aivajarvis" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#444444] text-lg hover:text-[#222222] transition-colors flex items-center"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                  </svg>
                  LinkedIn
                </a>
              </li>
              {/* <li><Link href="/blog" className="text-[#444444] text-lg hover:text-[#222222] transition-colors">Blog</Link></li> */}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-xl mb-6 text-[#222222]">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-[#444444] text-lg hover:text-[#222222] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[#444444] text-lg hover:text-[#222222] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-[#DDDDDD] flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-[#444444]">
            © {new Date().getFullYear()} AIVA. All rights reserved.
          </p>
{/*           
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a 
              href="https://twitter.com/aiva_ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#444444] hover:text-[#222222] transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>

            <a 
              href="https://linkedin.com/company/aiva-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#444444] hover:text-[#222222] transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 