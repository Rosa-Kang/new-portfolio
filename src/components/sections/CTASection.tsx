'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main CTA Text */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Curious about what we can{' '}
              <span className="text-gray-400">create together?</span>
            </h2>
            <p className="text-3xl md:text-5xl font-bold">
              Let&apos;s bring something extraordinary{' '}
              <span className="text-gray-400">to life!</span>
            </p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </Link>
            
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available For Work</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}