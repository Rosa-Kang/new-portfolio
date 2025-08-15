'use client'

// src/app/work/page.tsx
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/projects'


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
    <div className="pt-32 px-6">
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
          </AnimatePresence>
        </div>

        {/* Mobile Mockups Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="bg-gray-200 rounded-3xl aspect-[9/16] relative overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
            <Link href={`/work/${project.slug}`}>
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
                        <p className="mb-3">
                          {project.detail.experience.length > 120 
                            ? `${project.detail.experience.substring(0, 120)}...` 
                            : project.detail.experience
                          }
                        </p>
                        
                          <button className="bg-black text-white px-4 py-2 rounded text-xs hover:bg-gray-800 transition-colors duration-200">
                            LEARN MORE
                          </button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}