'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leckerli_One } from 'next/font/google';

const leckerli = Leckerli_One({ weight: '400', subsets: ['latin'] });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-6">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-[90px] border border-gray-100 shadow-lg">
        <div className="flex justify-between items-center h-16 px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold text-primary-500 ${leckerli.className}`}>Macroware</span>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="relative z-50 w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col justify-between w-6 h-5 transform transition-all duration-300">
              <span className={`bg-gray-600 h-0.5 w-full transform transition-all duration-300 origin-left rounded-full ${isMenuOpen ? 'rotate-45 translate-x-px translate-y-px' : ''}`} />
              <span className={`bg-gray-600 h-0.5 w-full transform transition-all duration-300 rounded-full ${isMenuOpen ? 'scale-0 opacity-0' : 'opacity-100'}`} />
              <span className={`bg-gray-600 h-0.5 w-full transform transition-all duration-300 origin-left rounded-full ${isMenuOpen ? '-rotate-45 translate-x-px -translate-y-px' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-primary-500 z-40"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-primary-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col items-center justify-center h-full">
              <motion.nav 
                className="flex flex-col items-center space-y-8"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                <motion.div
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                >
                  <Link 
                    href="#services" 
                    className="text-4xl font-bold text-white hover:text-primary-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                </motion.div>
                <motion.div
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                >
                  <Link 
                    href="#projects" 
                    className="text-4xl font-bold text-white hover:text-primary-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </motion.div>
                <motion.div
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                >
                  <Link 
                    href="#contact" 
                    className="text-4xl font-bold text-white hover:text-primary-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}