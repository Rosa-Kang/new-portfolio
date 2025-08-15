'use client'
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

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <AnimatePresence mode="wait">
              <motion.h1
                key="homepage-header-masked"
                className="text-left py-16 text-6xl md:text-[12rem] font-semibold"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                aria-label="ROSA KANG"
              >
                <div className="overflow-hidden py-2">
                  <motion.div className="block" variants={lineVariants}>
                    ROSA
                  </motion.div>
                </div>
                <div className="overflow-hidden py-2">
                  <motion.div className="block" variants={lineVariants}>
                    KANG
                  </motion.div>
                </div>
              </motion.h1>
          </AnimatePresence>
          </div>
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

            <div className="max-w-8xl mx-auto grid lg:grid-cols-[1fr_3fr] gap-32 items-start justify-between pt-8 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
            <p className="text-lg text-gray-600">
              <a href="mailto:therosessom@gmail.com">therosessom@gmail.com</a>
            </p>
           </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <div className="max-w-xl">
              <p className="text-3xl leading-relaxed">
                Hello, I&apos;m Rosa Kang, a Web Developer with 4+ years of experience at innovative startups, and award-winning agencies.
                I feel great joy in bringing my ideas to life through code. Let&apos;s create!
              </p>
            </div>
          </motion.div>
            
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
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