'use client'

// src/components/ui/Form.tsx
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

// Input component
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helper?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helper, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3 border border-gray-200 rounded-lg',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent',
            'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
            error && 'border-red-300 focus:ring-red-500',
            className
          )}
          {...props}
        />
        
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-600"
          >
            {error}
          </motion.p>
        )}
        
        {helper && !error && (
          <p className="text-sm text-gray-500">{helper}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

// Textarea component
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helper?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helper, id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full px-4 py-3 border border-gray-200 rounded-lg',
            'transition-all duration-200 resize-vertical',
            'focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent',
            'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
            error && 'border-red-300 focus:ring-red-500',
            className
          )}
          {...props}
        />
        
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-600"
          >
            {error}
          </motion.p>
        )}
        
        {helper && !error && (
          <p className="text-sm text-gray-500">{helper}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

// Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
  whileHover?: MotionProps['whileHover']
  whileTap?: MotionProps['whileTap']
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    loading = false,
    disabled,
    children,
    whileHover,
    whileTap,
    ...props 
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'bg-black text-white hover:bg-gray-800 focus:ring-black',
      secondary: 'bg-gray-100 text-black hover:bg-gray-200 focus:ring-gray-500',
      outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500'
    }
    
    const sizes = {
      sm: 'px-3 py-2 text-sm rounded-md',
      md: 'px-4 py-3 text-base rounded-lg',
      lg: 'px-6 py-4 text-lg rounded-lg'
    }

    return (
            <motion.button
        ref={ref}
        whileHover={whileHover || { scale: disabled || loading ? 1 : 1.02 }}
        whileTap={whileTap || { scale: disabled || loading ? 1 : 0.98 }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || loading}
        {...(props as MotionProps)}
      >
        {loading && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
          />
        )}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

// Form wrapper component
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

export const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn('space-y-6', className)}
        {...props}
      >
        {children}
      </form>
    )
  }
)

Form.displayName = 'Form'

// Field wrapper component
interface FieldProps {
  children: React.ReactNode
  className?: string
}

export function Field({ children, className }: FieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {children}
    </div>
  )
}

// Form validation hook
import { useState, useCallback } from 'react'

type ValidationRule<T> = {
  test: (value: T) => boolean
  message: string
}

type ValidationRules<T extends Record<string, unknown>> = {
  [K in keyof T]?: ValidationRule<T[K]>[]
}

export function useFormValidation<T extends Record<string, unknown>>(
  initialValues: T,
  validationRules: ValidationRules<T>
) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})

  const validateField = useCallback((field: keyof T, value: T[keyof T]) => {
    const rules = validationRules[field]
    if (!rules) return null

    for (const rule of rules) {
      if (!rule.test(value)) {
        return rule.message
      }
    }
    return null
  }, [validationRules])

  const setValue = useCallback((field: keyof T, value: T[keyof T]) => {
    setValues(prev => ({ ...prev, [field]: value }))
    
    // Validate if field has been touched
    if (touched[field]) {
      const error = validateField(field, value)
      setErrors(prev => ({ ...prev, [field]: error || undefined }))
    }
  }, [touched, validateField])

  const setTouchedField = useCallback((field: keyof T) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    
    // Validate when field is touched
    const error = validateField(field, values[field])
    setErrors(prev => ({ ...prev, [field]: error || undefined }))
  }, [values, validateField])

  const validateAll = useCallback(() => {
    const newErrors: Partial<Record<keyof T, string>> = {}
    let isValid = true

    Object.keys(values).forEach(key => {
      const field = key as keyof T
      const error = validateField(field, values[field])
      if (error) {
        newErrors[field] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    setTouched(Object.keys(values).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {}))

    return isValid
  }, [values, validateField])

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }, [initialValues])

  return {
    values,
    errors,
    touched,
    setValue,
    setTouched: setTouchedField,
    validateAll,
    reset
  }
}