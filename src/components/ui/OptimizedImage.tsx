'use client'

// src/components/ui/OptimizedImage.tsx
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  containerClassName?: string
  priority?: boolean
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  showLoading?: boolean
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  onLoad?: () => void
  onError?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  containerClassName = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  showLoading = true,
  objectFit = 'cover',
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  const imageProps = {
    src,
    alt,
    quality,
    priority,
    sizes,
    placeholder,
    blurDataURL,
    onLoad: handleLoad,
    onError: handleError,
    className: cn(
      'transition-opacity duration-300',
      isLoading && 'opacity-0',
      !isLoading && 'opacity-100',
      className
    ),
    style: fill ? { objectFit } : undefined,
    ...(fill ? { fill: true } : { width, height })
  }

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      {/* Loading skeleton */}
      <AnimatePresence>
        {isLoading && showLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-200 animate-pulse rounded-inherit"
          />
        )}
      </AnimatePresence>

      {/* Error state */}
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 opacity-50">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
            </div>
            <p className="text-sm">Failed to load image</p>
          </div>
        </div>
      ) : (
        <Image {...imageProps} />
      )}
    </div>
  )
}

// Gallery image component with zoom functionality
interface GalleryImageProps extends Omit<OptimizedImageProps, 'onClick' | 'alt'> {
  onClick?: () => void
  zoomable?: boolean
  alt: string
}

export function GalleryImage({ 
  onClick, 
  zoomable = true, 
  containerClassName,
  alt,
  ...props 
}: GalleryImageProps) {
  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-lg cursor-pointer group',
        containerClassName
      )}
      whileHover={zoomable ? { scale: 1.05 } : undefined}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <OptimizedImage
        {...props}
        alt={alt}
        containerClassName="relative"
      />
      
      {/* Overlay on hover */}
      {zoomable && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/45 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

// Profile image component
interface ProfileImageProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  online?: boolean
}

export function ProfileImage({ 
  src, 
  alt, 
  size = 'md', 
  className = '',
  online = false 
}: ProfileImageProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }

  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        className="rounded-full object-cover"
        sizes="(max-width: 768px) 100px, 200px"
      />
      
      {/* Online indicator */}
      {online && (
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
      )}
    </div>
  )
}