'use client'

// src/components/layout/Footer.tsx
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Therosessom.
          </Link>

          {/* Navigation Links */}
          <nav className="flex space-x-8">
            <Link href="/work" className="text-sm hover:text-gray-300 transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-sm hover:text-gray-300 transition-colors">
              About
            </Link>
            
            <Link href="/contact" className="text-sm hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2025 Therosessom. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}