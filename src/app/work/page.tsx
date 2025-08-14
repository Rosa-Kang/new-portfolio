'use client'

// src/app/work/page.tsx
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '@/data/projects'
import Link from 'next/link'
import Image from 'next/image'

const containerVariants = {
  hidden: {}, 
  visible: {
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const lineVariants = {
  hidden: { y: "100%" },
  visible: { 
    y: "0%",
    transition: {
      duration: 1.2,   
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-16 h-[320px] md:h-[480px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key="work-header-masked"
              className="text-6xl md:text-[11rem] font-semibold mb-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              aria-label="WORK"
            >
              <div className="overflow-hidden py-2">
                <motion.div className="block" variants={lineVariants}>
                  WORK
                </motion.div>
              </div>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 max-w-2xl"
            >
              work 2021 - 2025
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Mobile Mockups Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="bg-gray-200 rounded-3xl aspect-[9/16] relative overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="absolute inset-4 bg-white rounded-[28px] overflow-hidden">
                {/* VMC Phone mockup content */}
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

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="grid lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-sm text-gray-500 mb-4">
                        {project.industry} • {project.year}
                      </p>
                      <p className="text-lg leading-relaxed">
                        {project.description.substring(0, 200)}...
                      </p>
                    </div>
                    
                    <div className="inline-flex items-center text-sm font-medium group-hover:underline">
                      View Project →
                    </div>
                  </div>
                  
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}