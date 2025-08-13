'use client'

// src/components/sections/AboutPreview.tsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold">about.</h2>
          <Link 
            href="/about" 
            className="text-sm underline hover:no-underline transition-all"
          >
            Show More
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Hello! I am Rosa Kang, a Web Developer with years of valuable 
                experience at innovative startups and award-winning agencies. I 
                collaborate with businesses of all sizes worldwide, using the latest 
                technologies. My designs have also earned multiple awards.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                I&apos;m dedicated to crafting beautiful and highly functional websites that 
                seamlessly align with my clients&apos; unique needs and long-term goals.
              </p>
            </div>

            {/* Interior Design Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <Image
                src="/images/interior-design.jpg"
                alt="Interior Design"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Workspace Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/workspace.jpg"
                alt="Rosa working at desk"
                fill
                className="object-cover"
              />
            </div>
            
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}