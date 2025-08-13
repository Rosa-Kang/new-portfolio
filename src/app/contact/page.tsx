'use client'

// src/app/contact/page.tsx
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl px-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-[11rem] font-semibold mb-8 py-16">
            SHOOT A<br />REQUEST
          </h1>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
        >
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2"><a href="mailto:therosessom@gmail.com">therosessom@gmail.com</a></p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Masterpiece Starts Here"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-vertical"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gray-700 text-white py-4 rounded-lg font-medium hover:bg-black transition-colors"
            >
              Send It!
            </motion.button>
          </form>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-2xl font-bold mb-8">FAQs.</h2>
          
          <div className="space-y-4">
            {[
              {
                question: 'What is your creative design process like?',
                answer: 'My design process starts with understanding your unique needs and goals...'
              },
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary depending on scope and complexity...'
              },
              {
                question: 'How do I get started on a project with you?',
                answer: 'Simply reach out through the contact form above...'
              },
              {
                question: 'What should I do if you\'re fully booked?',
                answer: 'If I\'m currently at capacity, I maintain a waiting list...'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + 0.1 * index }}
                className="border-b border-gray-200 pb-4"
              >
                <button className="w-full text-left flex items-center justify-between py-4 hover:text-gray-600 transition-colors">
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-2xl">+</span>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}