'use client'

// src/components/layout/Header.tsx
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold">
            Therosessom.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                  pathname === item.href ? 'text-black' : 'text-gray-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)} // Always open, X button will be inside menu
            className="md:hidden p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/50 z-30 md:hidden"
              />
              <motion.nav
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="fixed top-0 right-0 h-screen w-[80vw] bg-white z-40 p-6 md:hidden shadow-lg"
              >
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="pt-4 space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-lg font-medium transition-colors hover:text-gray-600 ${
                        pathname === item.href ? 'text-black' : 'text-gray-500'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}