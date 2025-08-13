'use client'

// src/app/page.tsx
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/sections/HeroSection'
import { WorkPreview } from '@/components/sections/WorkPreview'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <WorkPreview />
      <AboutPreview />
      <CTASection />
    </div>
  )
}