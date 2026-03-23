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
  const cardTheme = {
    progress: {
      outer: 'border-blue-500/20 bg-gradient-to-br from-[#112338] to-[#121b2a]',
      inner: 'border-blue-400/20 bg-[#213750]',
      badge: 'bg-blue-500/20 text-blue-200 border border-blue-400/30',
      dot: 'bg-blue-400',
      date: 'text-blue-400',
      institution: 'text-blue-100',
    },
    done: {
      outer: 'border-emerald-500/20 bg-gradient-to-br from-[#122821] to-[#121e1a]',
      inner: 'border-emerald-400/20 bg-[#1f3a30]',
      badge: 'bg-emerald-500/20 text-emerald-200 border border-emerald-400/30',
      dot: 'bg-emerald-400',
      date: 'text-emerald-400',
      institution: 'text-emerald-100',
    },
  }

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
            <div key={index} className={`rounded-2xl border p-3.5 ${cardTheme[item.status].outer}`}>
              {/* Status Badge and Date */}
              <div className="flex justify-between items-center mb-3 px-1">
                <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-bold leading-none ${cardTheme[item.status].badge}`}>
                  <span className={`h-2.5 w-2.5 rounded-full ${cardTheme[item.status].dot}`}></span>
                  {item.statusText}
                </span>
                <span className={`text-base font-semibold ${cardTheme[item.status].date}`}>
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className={`flex items-start gap-3 rounded-2xl border px-4 py-3.5 ${cardTheme[item.status].inner}`}>
                <FileText className="w-5 h-5 text-gray-200 flex-shrink-0 mt-0.5" strokeWidth={2.4} />
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-1 leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className={`text-lg font-bold leading-snug ${cardTheme[item.status].institution}`}>
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
