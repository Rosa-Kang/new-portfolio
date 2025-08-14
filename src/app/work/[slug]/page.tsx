'use client'

// src/app/work/[slug]/page.tsx
import { motion } from 'framer-motion'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProjectBySlug } from '@/data/projects'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-right text-sm text-gray-500 mb-4">
                <p>INDUSTRY: {project.industry}</p>
                <p>CLIENT: {project.client}</p>
                <p>YEAR: {project.year}</p>
                <p>{project.experience}</p>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black">{project.title}</h1>
            </div>

            <div className="relative aspect-[9/16] max-w-md mx-auto">
              <Image
                src={project.detail.images[0]}
                alt={project.title}
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-6 mb-24"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">about.</h2>
            <Link href="/work/vmc" className="text-sm underline hover:no-underline">
              See It Live
            </Link>
          </div>
          
          <p className="text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Phone Mockup */}
          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <div className="relative aspect-[9/16] max-w-sm mx-auto">
              <Image
                src={project.detail.images[1]}
                alt={`${project.title} mobile view`}
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Challenge Section */}
      {project.challenge && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-6 mb-24"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">challenge.</h2>
            <p className="text-lg leading-relaxed mb-12">{project.challenge}</p>
            
            {/* Stone Images Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {project.detail.images.slice(2, 6).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + 0.1 * index }}
                  className="relative aspect-square rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${project.title} challenge image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Results Section */}
      {project.results && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="px-6 mb-24"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">results.</h2>
            <p className="text-lg leading-relaxed mb-12">{project.results}</p>
            
            {/* Additional result images */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/stone-result-1.jpg"
                  alt="Stone mind result 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/stone-result-2.jpg"
                  alt="Stone mind result 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Testimonial Section */}
      {project.testimonial && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="px-6 mb-24"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">testimonial.</h2>
            
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="text-6xl text-gray-300 mb-4">&ldquo;</div>
              <blockquote className="text-xl font-medium mb-8 leading-relaxed">
                {project.testimonial.quote}
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                {project.testimonial.avatar && (
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={project.testimonial.avatar}
                      alt={project.testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="text-left">
                  <div className="font-medium">{project.testimonial.author}</div>
                  <div className="text-sm text-gray-600">{project.testimonial.position}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* More Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">more to explore.</h2>
            <Link href="/work" className="text-sm underline hover:no-underline">
              Show More
            </Link>
          </div>
          
          {/* More project mockups */}
          <div className="grid grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <div key={item} className="bg-gray-200 rounded-3xl aspect-[9/16] relative overflow-hidden">
                <div className="absolute inset-4 bg-white rounded-[28px] overflow-hidden">
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
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}