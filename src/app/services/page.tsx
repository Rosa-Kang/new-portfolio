'use client'

// src/app/services/page.tsx
import { AnimatePresence, motion } from 'framer-motion'
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

export default function ServicesPage() {
  const services = [
    {
      title: 'ILLUSTRATION',
      description: 'Custom illustrations and graphic design that capture your brand\'s unique personality and vision.',
      features: ['Custom artwork', 'Brand illustrations', 'Icon design', 'Print graphics']
    },
    {
      title: 'BRAND ART',
      description: 'Comprehensive brand identity design that tells your story and connects with your audience.',
      features: ['Logo design', 'Brand guidelines', 'Visual identity', 'Brand strategy']
    },
    {
      title: 'PHOTO',
      description: 'Professional photography and image editing services for web, print, and marketing materials.',
      features: ['Product photography', 'Portrait sessions', 'Image retouching', 'Creative direction']
    },
    {
      title: 'UI&UX DESIGN',
      description: 'User-centered design that creates intuitive and engaging digital experiences.',
      features: ['User research', 'Wireframing', 'Prototyping', 'Usability testing']
    },
    {
      title: 'VIDEO EDIT',
      description: 'Professional video editing and motion graphics to bring your content to life.',
      features: ['Video editing', 'Motion graphics', 'Color grading', 'Sound design']
    }
  ]

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-16 h-[320px] md:h-[480px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key="services-header-masked"
              className="text-center pb-16 text-6xl md:text-8xl font-black mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              aria-label="SERVICES"
            >
              <div className="overflow-hidden py-2">
                <motion.div className="block" variants={lineVariants}>
                  SERVICES
                </motion.div>
              </div>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              I offer a comprehensive range of creative services to help bring your vision to life.
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-700">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">My Process</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We start by understanding your goals, target audience, and project requirements.'
              },
              {
                step: '02',
                title: 'Design',
                description: 'I create concepts and iterate based on your feedback to achieve the perfect solution.'
              },
              {
                step: '03',
                title: 'Delivery',
                description: 'Final assets are delivered with ongoing support to ensure your success.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + 0.1 * index }}
                className="text-center"
              >
                <div className="text-4xl font-black text-gray-300 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Creative Images */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-2 gap-8 mb-24"
        >
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/drawing-process.jpg"
              alt="Creative drawing process"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/photography-setup.jpg"
              alt="Photography setup"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-black text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your vision and create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </a>
            
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available For Work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}