'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'

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
  {projects.slice(0, 4).map((project, index) => (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="bg-gray-200 rounded-3xl aspect-[9/16] relative overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <div className="absolute inset-4 bg-white rounded-[28px] overflow-hidden">
        {/* Phone mockup content */}
        <div 
          className={`h-full relative ${
            project.detail.images && project.detail.images[0] 
              ? '' 
              : 'bg-gradient-to-b from-orange-200 via-pink-200 to-purple-200'
          }`}
          style={
            project.detail.images && project.detail.images[0] 
              ? {
                  backgroundImage: `url(${project.detail.images[0]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }
              : {}
          }
        >
          {/* Overlay for better text readability when background image is used */}
          {project.detail.images && project.detail.images[0] && (
            <div className="absolute inset-0 bg-black/45"></div>
          )}

          <div className="absolute top-[10rem] left-4 right-4 z-10">
            <div className={`text-sm font-bold mb-2 ${project.detail.images && project.detail.images[0] ? 'text-white' : 'text-black'}`}>
              {project.title.toLowerCase()}
            </div>
            <div className="space-y-4">
              <h3 className={`text-lg font-bold leading-tight ${project.detail.images && project.detail.images[0] ? 'text-white' : 'text-black'}`}>
                {project.description}
              </h3>
              
              <div className="bg-white/80 rounded-lg p-3 text-xs">
                <p className="mb-3 text-black">
                  {project.detail.experience.length > 120 
                    ? `${project.detail.experience.substring(0, 120)}...` 
                    : project.detail.experience
                  }
                </p>
                <Link href={`/work/${project.slug}`}>
                  <button className="bg-black text-white px-4 py-2 rounded text-xs hover:bg-gray-800 transition-colors duration-200">
                    LEARN MORE
                  </button>
                </Link>
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