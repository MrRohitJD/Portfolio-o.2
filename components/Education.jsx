'use client'

import { Clock, FileText } from 'lucide-react'

const educationData = [
  {
    title: 'Master of Computer Applications (data science)',
    institution: '- Ajeenkya D. Y. Patil university',
    status: 'progress',
    statusText: 'In progress',
    date: 'June 1, 2027',
  },
  {
    title: 'Bachelor of Computer Applications',
    institution: '- Rani Channamma University',
    status: 'done',
    statusText: 'Done',
    date: 'September 12, 2024',
  },
]

export default function Education() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="section-title">Education</h2>

        {/* Timeline Tab */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="tab-btn active">
            <Clock className="w-4 h-4" />
            Timeline view
          </button>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {educationData.map((item, index) => (
            <div key={index} className="card p-6">
              {/* Status Badge and Date */}
              <div className="flex justify-between items-center mb-4">
                <span className={`badge badge-${item.status}`}>
                  {item.statusText}
                </span>
                <span className="text-gray-text text-sm">
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-gray-text flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-text text-base">
                    {item.institution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
