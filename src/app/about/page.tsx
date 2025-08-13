'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-center pb-16 text-6xl md:text-[12rem] font-semibold mb-4">
            ROSA<br />KANG
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-600">about.</p>
            <p className="text-sm text-gray-500">Read.cv</p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl leading-relaxed font-medium">
                I collaborate with businesses of all sizes worldwide, using the latest technologies.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
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
          </motion.div>

          {/* Workspace Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/workspace-color.jpg"
                alt="Rosa working at desk with color swatches"
                fill
                className="object-cover"
              />
            </div>
            
            
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-8">services.</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'ILLUSTRATION',
                description: 'Custom illustrations and graphic design work'
              },
              {
                title: 'BRAND ART',
                description: 'Brand identity and visual art direction'
              },
              {
                title: 'PHOTO',
                description: 'Professional photography and image editing'
              },
              {
                title: 'UI&UX DESIGN',
                description: 'User interface and experience design'
              },
              {
                title: 'VIDEO EDIT',
                description: 'Video editing and motion graphics'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + 0.1 * index }}
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-700">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients/Partners */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-sm font-medium text-gray-500 mb-8">Trusted by companies worldwide</h3>
          
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            {['Kansas', 'Aurora', 'Seoul', 'venice.', 'Sitemark', 'Rise'].map((client, index) => (
              <motion.span
                key={client}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + 0.1 * index }}
                className="text-sm font-medium"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}