'use client'

import { motion } from 'framer-motion'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProjectBySlug, projects } from '@/data/projects'

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
                <p>{project.detail.experience}</p>
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
            {project.liveLink && (
              <Link 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:no-underline"
              >
                See It Live
              </Link>
            )}
          </div>
          
          <p className="text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Phone Mockup */}
          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <div className="relative aspect-1 mx-auto">
              <Image
                src={project.imageUrl}
                alt={`${project.title} mobile view`}
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Challenge Section */}
      {project.detail.challenge && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-6 mb-24"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">challenge.</h2>
            <p className="text-lg leading-relaxed mb-12">{project.detail.challenge}</p>
          
          </div>
        </motion.section>
      )}

      {/* Results Section */}
      {project.detail.results && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="px-6 mb-24"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">results.</h2>
            <p className="text-lg leading-relaxed mb-12">{project.detail.results}</p>
          </div>
        </motion.section>
      )}

      {/* Testimonial Section */}
      {project.detail.testimonial && (
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
                {project.detail.testimonial.text}
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                
                <div className="text-left">
                  <div className="font-medium">{project.detail.testimonial.author}</div>
                  <div className="text-sm text-gray-600">{project.detail.testimonial.role}</div>
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
            {project.detail.images.slice(0, 2).map((otherImg, index) => (
              <div key={`more-image-${index}`} className="bg-gray-200 rounded-3xl aspect-[9/16] relative overflow-hidden">
                <div className="absolute inset-4 bg-white rounded-[28px] overflow-hidden">
                  <div 
                    className={`h-full relative ${
                      otherImg
                        ? '' 
                        : 'bg-gradient-to-b from-orange-200 via-pink-200 to-purple-200'
                    }`}
                    style={
                      otherImg
                        ? {
                            backgroundImage: `url(${otherImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }
                        : {}
                    }
                  >
                    {otherImg && (
                      <div className="absolute inset-0 bg-black/20"></div>
                    )}
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