'use client'

// src/components/ui/Loading.tsx
import { motion } from 'framer-motion'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'black' | 'white' | 'gray'
  text?: string
}

export function Loading({ size = 'md', color = 'black', text }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const colorClasses = {
    black: 'border-black',
    white: 'border-white',
    gray: 'border-gray-400'
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <motion.div
        className={`
          ${sizeClasses[size]} 
          border-2 ${colorClasses[color]} 
          border-t-transparent 
          rounded-full
        `}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-sm ${color === 'white' ? 'text-white' : 'text-gray-600'}`}
        >
          {text}
        </motion.p>
      )}
    </div>
  )
}

// Skeleton loading component
export function Skeleton({ 
  className = '',
  width = 'w-full',
  height = 'h-4'
}: {
  className?: string
  width?: string
  height?: string
}) {
  return (
    <div
      className={`
        ${width} ${height} 
        bg-gray-200 rounded 
        animate-pulse 
        ${className}
      `}
    />
  )
}

// Page loading component
export function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Loading size="lg" text="Loading..." />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8"
        >
          <p className="text-lg font-medium">Therosessom.</p>
        </motion.div>
      </div>
    </div>
  )
}

// Content loading skeletons
export function ProjectCardSkeleton() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 animate-pulse">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <Skeleton height="h-8" width="w-3/4" />
            <Skeleton height="h-4" width="w-1/2" />
            <div className="space-y-2">
              <Skeleton height="h-4" />
              <Skeleton height="h-4" />
              <Skeleton height="h-4" width="w-3/4" />
            </div>
          </div>
          <Skeleton height="h-6" width="w-32" />
        </div>
        
        <Skeleton height="h-80" className="rounded-xl" />
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8">
          <div className="space-y-4">
            <Skeleton height="h-16" width="w-3/4" />
            <Skeleton height="h-16" width="w-2/3" />
          </div>
          
          <div className="space-y-4">
            <Skeleton height="h-4" width="w-48" />
            <div className="space-y-2">
              <Skeleton height="h-5" />
              <Skeleton height="h-5" />
              <Skeleton height="h-5" width="w-3/4" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <Skeleton className="w-80 h-80 rounded-full" />
        </div>
      </div>
    </div>
  )
}