'use client'

import { useState } from 'react'
import { ArrowRight, Star } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-20 pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Intro */}
        <div className="mb-12">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="text-lg text-gray-text max-w-3xl">
            If you're looking for a motivated candidate with skills in data science, Python, and problem-solving, I'd be glad to connect.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold text-white mb-8">Contact Us</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-base text-gray-light font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full bg-dark-light border border-dark-border rounded-lg px-4 py-3 text-gray-light placeholder-gray-600 focus:outline-none focus:border-purple-600 focus:bg-dark-lighter transition-colors"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-base text-gray-light font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full bg-dark-light border border-dark-border rounded-lg px-4 py-3 text-gray-light placeholder-gray-600 focus:outline-none focus:border-purple-600 focus:bg-dark-lighter transition-colors"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-base text-gray-light font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full bg-dark-light border border-dark-border rounded-lg px-4 py-3 text-gray-light placeholder-gray-600 focus:outline-none focus:border-purple-600 focus:bg-dark-lighter transition-colors resize-y min-h-[120px]"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="submit"
                className="btn btn-purple"
              >
                Submit
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://tally.so"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Made with Tally
                <Star className="w-4 h-4" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
