'use client'

// src/components/sections/HeroSection.tsx
import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-semibold leading-none"
            >
              ROSA
              <br />
              KANG
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-sm text-gray-600">
              therosessom@gmail.com
            </p>
            
            <div className="max-w-md">
              <p className="text-lg leading-relaxed">
                Hello, I&apos;m Rosa Kang, a Web Developer with years of experience at innovative startups and award-winning agencies. I 
                collaborate with businesses of all sizes worldwide, using the latest 
                technologies.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <Image
              src="/images/rosa-profile.jpg"
              alt="Rosa Kang"
              width={320}
              height={320}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-black"
        />
      </motion.div>
    </section>
  )
}
