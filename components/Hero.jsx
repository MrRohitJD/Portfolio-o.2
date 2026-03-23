'use client'

import { Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <h1 className="text-4xl font-bold text-white mb-10">Portfolio</h1>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Hello, I'm ROHIT JADHAV.
            </h2>

            <p className="text-lg text-gray-text mb-4">
              I'm an <strong className="text-gray-light font-semibold">aspiring Data Scientist</strong>, passionate about turning data into meaningful insights.
            </p>

            <p className="text-lg text-gray-text mb-8">
              I build and optimize data-driven solutions using Python and Machine Learning, so you can <strong className="text-gray-light font-semibold">make better decisions and solve real-world problems efficiently</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-linkedin"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center items-center md:order-first lg:order-last">
            <svg
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-sm"
            >
              <g transform="translate(100, 80)">
                {/* Head */}
                <ellipse cx="100" cy="60" rx="45" ry="50" fill="#fff" stroke="#000" strokeWidth="3"/>

                {/* Hair */}
                <path d="M 60 40 Q 55 20 75 15 Q 95 10 110 15 Q 130 20 125 40" fill="#000"/>

                {/* Glasses */}
                <circle cx="85" cy="65" r="12" fill="none" stroke="#000" strokeWidth="3"/>
                <circle cx="115" cy="65" r="12" fill="none" stroke="#000" strokeWidth="3"/>
                <line x1="97" y1="65" x2="103" y2="65" stroke="#000" strokeWidth="3"/>

                {/* Smile */}
                <path d="M 85 80 Q 100 88 115 80" fill="none" stroke="#000" strokeWidth="2"/>

                {/* Body/Shirt */}
                <rect x="60" y="110" width="80" height="100" fill="#fff" stroke="#000" strokeWidth="3"/>

                {/* Collar */}
                <polygon points="85,110 100,120 115,110" fill="#fff" stroke="#000" strokeWidth="3"/>

                {/* Laptop */}
                <rect x="30" y="180" width="120" height="80" fill="#e5e7eb" stroke="#000" strokeWidth="3"/>
                <rect x="40" y="190" width="100" height="50" fill="#1f2937"/>

                {/* Arms */}
                <path d="M 60 130 L 45 160 L 50 180" fill="none" stroke="#000" strokeWidth="3"/>
                <path d="M 140 130 L 155 160 L 145 180" fill="none" stroke="#000" strokeWidth="3"/>

                {/* Hands on laptop */}
                <ellipse cx="60" cy="200" rx="15" ry="10" fill="#fff" stroke="#000" strokeWidth="2"/>
                <ellipse cx="135" cy="200" rx="15" ry="10" fill="#fff" stroke="#000" strokeWidth="2"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
