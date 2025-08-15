'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const containerVariants = {
  hidden: {}, 
  visible: {
    transition: {
      staggerChildren: 0.15, 
    },
  },
}

const lineVariants = {
  hidden: { y: "100%" },
  visible: { 
    y: "0%",
    transition: {
      duration: 1.2,   
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
}

interface FormData {
  company_name: string
  user_name: string
  user_email: string
  contact_number: string
  pages: string
  budget_range: string
  inquiry_details: string
  reference_url: string
  current_website: string
  source: string[]
  why_choose: string
}

const FAQ_DATA = [
  {
    question: 'What is your creative development process like?',
    answer: 'My process starts with understanding each client\'s industry, brand, and target audience—because fonts, tone, colors, and overall mood must differ for every business. I focus on the purpose of the site, the audience\'s goals, and what style will resonate most, ensuring design and development align from the very first planning stage.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'My typical project timeline depends on the scope. I allocate about 5 days for each stage—planning, design, development, testing, and revisions—with an extra 2–4 days as needed for feedback cycles or content preparation.\n\n• Landing page (1 page): ~5~7 days\n• Website (1–5 pages): ~22–24 days\n• Website (5–10 pages): ~32–34 days\n• Website (10–15 pages): ~42–44 days\n• Website (15+ pages): ~52–54 days\n\n* Timelines may shift based on content readiness, approvals, and integrations.'
  },
  {
    question: 'How do I get started on a project with you?',
    answer: 'Simply reach through the form above!'
  },
  {
    question: 'What should I do if you\'re fully booked?',
    answer: 'If I\'m currently at capacity, I maintain a waiting list!'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    company_name: '',
    user_name: '',
    user_email: '',
    contact_number: '',
    pages: '',
    budget_range: '',
    inquiry_details: '',
    reference_url: '',
    current_website: '',
    source: [],
    why_choose: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      setFormData(prev => ({
        ...prev,
        source: checkbox.checked 
          ? [...prev.source, value]
          : prev.source.filter(item => item !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY)

      const templateParams = {
        company_name: formData.company_name,
        user_name: formData.user_name,
        user_email: formData.user_email,
        contact_number: formData.contact_number,
        pages: formData.pages,
        budget_range: formData.budget_range || 'Not specified',
        inquiry_details: formData.inquiry_details,
        reference_url: formData.reference_url || 'Not provided',
        current_website: formData.current_website || 'Not provided',
        source: formData.source.join(', ') || 'Not specified',
        why_choose: formData.why_choose
      }

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )
      
      console.log('SUCCESS!', response.status, response.text)
      setSubmitStatus('success')
      
      setFormData({
        company_name: '',
        user_name: '',
        user_email: '',
        contact_number: '',
        pages: '',
        budget_range: '',
        inquiry_details: '',
        reference_url: '',
        current_website: '',
        source: [],
        why_choose: ''
      })
      
    } catch (error) {
      console.error('FAILED...', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-32 px-6">
      <div className="max-w-6xl lg:px-16">
        <div className="h-[320px] md:h-[480px]">
          <AnimatePresence mode="wait">
            <motion.h1
              key="request-header-masked"
              className="text-6xl md:text-[11rem] font-semibold"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              aria-label="Shoot a Request"
            >
              <div className="overflow-hidden py-2">
                <motion.div className="block" variants={lineVariants}>
                  SHOOT A
                </motion.div>
              </div>
              <div className="overflow-hidden py-2">
                <motion.span className="block" variants={lineVariants}>
                  REQUEST
                </motion.span>
              </div>
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
      
      <div className="max-w-6xl lg:px-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-5xl mx-auto"
        >
          <div className="mb-8">
            <h2 className='text-center text-5xl text-blue-600 bold py-8'>Let’s Talk</h2>
            <p className="text-sm text-blue-600 mb-2">
              Please fill out the form below and we will contact you within 12 hours.
            </p>
            <p className="text-xs text-gray-500">
              The more detailed your information, the more accurate consultation we can provide.
            </p>
          </div>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
            >
              Thank you! Your inquiry has been sent successfully. We will contact you soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
            >
              Sorry, there was an error sending your message. Please try again or contact us directly.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company/Business Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company_name"
                placeholder="Artist Studio"
                value={formData.company_name}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position/Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="CEO/John Doe"
                value={formData.user_name}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="contact@example.com"
                value={formData.user_email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contact_number"
                placeholder="+1-123-1234-5678"
                value={formData.contact_number}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Desired Number of Pages <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {[
                  { value: 'Landing Page (1p)', label: 'Landing Page (1p)' },
                  { value: 'Basic Website (1-5p)', label: 'Basic Website (1-5p)' },
                  { value: 'Medium Website (5-10p)', label: 'Medium Website (5-10p)' },
                  { value: 'Large Website (10-15p)', label: 'Large Website (10-15p)' },
                  { value: 'Enterprise Website (15p+)', label: 'Enterprise Website (15p+)' },
                  { value: 'Need Consultation (TBD)', label: 'Need Consultation (TBD)' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="pages"
                      value={option.value}
                      checked={formData.pages === option.value}
                      onChange={handleInputChange}
                      className="mr-3 text-black focus:ring-black"
                      required
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Budget Range
              </label>
              <textarea
                name="budget_range"
                placeholder="Please specify your available budget range or 'consultation required'."
                value={formData.budget_range}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-vertical"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Introduction & Inquiry Details <span className="text-red-500">*</span>
              </label>
              <textarea
                name="inquiry_details"
                placeholder="Please provide details about your company, homepage requirements, desired features, target audience, etc."
                value={formData.inquiry_details}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-vertical"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reference Website URL <span>(You can add multiple reference urls)</span>
              </label>
              <input
                type="url"
                name="reference_url"
                placeholder="https://example.com"
                value={formData.reference_url}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                [Optional] Current Operating Website URL
              </label>
              <input
                type="url"
                name="current_website"
                placeholder="https://yoursite.com"
                value={formData.current_website}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How did you find out about us? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {[
                  'Google Search',
                  'Referral',
                  'Instagram',
                  'Social Media',
                  'Other'
                ].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      name="source"
                      value={option}
                      checked={formData.source.includes(option)}
                      onChange={handleInputChange}
                      className="mr-3 text-black focus:ring-black"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why did you choose us? <span className="text-red-500">*</span>
              </label>
              <textarea
                name="why_choose"
                placeholder="Please share why you decided to work with us!"
                value={formData.why_choose}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-vertical"
                required
              />
            </div>
            
            <div className="flex justify-end items-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="max-w-[250px] bg-blue-800 px-8 text-white py-4 rounded-lg font-medium hover:bg-black transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry!'}
            </motion.button>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="py-24"
        >
          <h2 className="text-2xl font-bold mb-8">FAQs.</h2>
          
          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + 0.1 * index }}
                className="border-b border-gray-200 pb-4"
              >
                <button 
                  className="w-full text-left flex items-center justify-between py-4 hover:text-gray-600 transition-colors"
                  onClick={() => handleFaqToggle(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openFaqIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 pb-4 whitespace-pre-line">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}