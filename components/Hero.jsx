'use client'

import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-12 md:py-14">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-bold text-white mt-[85px] md:mt-[93px] mb-8">Portfolio</h1>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight sm:whitespace-nowrap">
              Hello, I&apos;m ROHIT JADHAV.
            </h2>

            <p className="text-lg text-gray-text mb-4">
              I&apos;m an <strong className="text-gray-light font-semibold">aspiring Data Scientist</strong>, passionate about turning data into meaningful insights.
            </p>

            <p className="text-lg text-gray-text mb-8">
              I build and optimize data-driven solutions using Python and Machine Learning, so you can <strong className="text-gray-light font-semibold">make better decisions and solve real-world problems efficiently</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/MrRohitJD"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rohitjd/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-linkedin"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://drive.google.com/file/d/1pkwOd-4QT0SckXktqzVUBHtaJfWkgqR2/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-gray-100"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center items-center md:order-first lg:order-last">
            <Image
              src="/images/hero-laptop.svg"
              alt="Rohit using a laptop illustration"
              width={420}
              height={420}
              priority
              className="w-full max-w-[360px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
