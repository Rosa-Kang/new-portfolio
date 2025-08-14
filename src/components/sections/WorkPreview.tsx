'use client'

// src/components/sections/WorkPreview.tsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'


export function WorkPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  

  return (
    <section ref={ref} className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold">work.</h2>
          <div className="text-right">
            <Link 
              href="/work" 
              className="text-sm underline hover:no-underline transition-all"
            >
              Show More
            </Link>
          </div>
        </motion.div>

        {/* Mobile Mockups Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gray-200 rounded-3xl aspect-[9/16] relative overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="absolute inset-4 bg-white rounded-[28px] overflow-hidden">
                {/* Phone mockup content */}
                <div className="h-full bg-gradient-to-b from-orange-200 via-pink-200 to-purple-200 relative">
                  <div className="absolute top-4 left-4 right-4">
                    <div className="flex items-center justify-between text-xs">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-black rounded-sm"></div>
                        <div className="w-1 h-2 bg-black rounded-sm"></div>
                        <div className="w-4 h-2 bg-black rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-16 left-4 right-4">
                    <div className="text-sm font-bold mb-2">vmc</div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold leading-tight">
                        generating<br />
                        wealth in a<br />
                        digital economy
                      </h3>
                      
                      <div className="bg-white/80 rounded-lg p-3 text-xs">
                        <p className="mb-3">
                          Don&apos;t give away your profits to the competition. Let VMC 
                          guide your business to its place atop the digital economy.
                        </p>
                        <button className="bg-black text-white px-4 py-2 rounded text-xs">
                          GET STARTED
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}