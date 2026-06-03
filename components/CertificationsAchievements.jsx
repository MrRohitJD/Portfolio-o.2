'use client'

import { Award, ExternalLink, Trophy } from 'lucide-react'

const certifications = [
  {
    title: 'Machine Learning with Python',
    issuer: 'Coursera and IBM',
    issued: 'May 2026',
    credentialId: '3J6IY7TBN4CZ',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/3J6IY7TBN4CZ',
    imageUrl: '/images/Coursera_ibm.jpg',
  },
]

const achievements = [
  'Solved 90+ Data Structures and Algorithms problems on LeetCode',
]

export default function CertificationsAchievements() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="section-title">Certifications &amp; Achievements</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-dark-border bg-gradient-to-br from-[#232427] to-[#1d1e22] p-6"
            >
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-gray-200 flex-shrink-0 mt-1" strokeWidth={2.4} />
                <div>
                  <h3 className="text-xl font-semibold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-base font-semibold">
                    {item.issuer}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-1.5 text-sm text-gray-300">
                <p>
                  <span className="text-gray-400">Issued:</span> {item.issued}
                </p>
                <p>
                  <span className="text-gray-400">Credential ID:</span> {item.credentialId}
                </p>
              </div>

              <div className="experience-certificate mt-4">
                <a
                  href={item.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-200 hover:text-white"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </a>
                <div className="experience-preview" role="tooltip" aria-hidden="true">
                  <img
                    src={item.imageUrl}
                    alt="Machine Learning with Python certificate preview"
                    loading="lazy"
                    className="experience-preview-image"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-dark-border bg-gradient-to-br from-[#232427] to-[#1d1e22] p-6">
            <div className="flex items-start gap-3">
              <Trophy className="w-5 h-5 text-gray-200 flex-shrink-0 mt-1" strokeWidth={2.4} />
              <div>
                <h3 className="text-xl font-semibold text-white leading-snug">Achievements</h3>
                <p className="text-gray-300 text-base font-semibold">Highlights</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-gray-300 text-base">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
