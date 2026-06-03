'use client'

import { Briefcase, ExternalLink } from 'lucide-react'

const experienceData = [
  {
    role: 'Software Engineer Intern',
    company: 'MHTECHIN',
    dateRange: '07-2023 to 10-2023',
    certificateUrl: 'https://unstop.com/certificate-preview/38e2873a-4e26-4cb9-a048-2999299b8927',
  },
]

export default function WorkExperience() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="section-title">Work Experience</h2>

        <div className="grid grid-cols-1 gap-6">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-dark-border bg-gradient-to-br from-[#232427] to-[#1d1e22] p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-gray-200 flex-shrink-0 mt-1" strokeWidth={2.4} />
                  <div>
                    <h3 className="text-xl font-semibold text-white leading-snug">
                      {item.role}
                    </h3>
                    <p className="text-gray-300 text-base font-semibold">{item.company}</p>
                  </div>
                </div>

                <span className="text-sm font-semibold text-gray-400">
                  {item.dateRange}
                </span>
              </div>

              <div className="experience-certificate mt-4">
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-200 hover:text-white"
                >
                  View Internship Certificate
                  <ExternalLink className="w-4 h-4" />
                </a>
                <div className="experience-preview" role="tooltip" aria-hidden="true">
                  <img
                    src="/images/certificate.jpg"
                    alt="Internship certificate preview"
                    loading="lazy"
                    className="experience-preview-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
