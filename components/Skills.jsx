'use client'

import { useState } from 'react'
import { Code2, Shield, Languages } from 'lucide-react'

const skillsData = {
  software: [
    { icon: '💼', name: 'Data science' },
    { icon: '📊', name: 'Data analyst' },
    { icon: '🤖', name: 'Scikit-learn' },
    { icon: '🐼', name: 'Pandas' },
    { icon: '📈', name: 'Matplotlib' },
    { icon: '🐍', name: 'Python' },
    { name: 'Django Framework' },
    { name: 'REST API / Fast API' },
    { name: 'SQL' },
  ],
  expertise: [
    { name: 'Machine Learning' },
    { name: 'Data Analysis' },
    { name: 'Statistical Modeling' },
    { name: 'Data Visualization' },
    { name: 'Feature Engineering' },
    { name: 'Model Optimization' },
  ],
  language: [
    { name: 'Python' },
    { name: 'SQL' },
    { name: 'JavaScript' },
    { name: 'R' },
  ],
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('software')

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="section-title">Skills</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setActiveTab('software')}
            className={`tab-btn ${activeTab === 'software' ? 'active' : ''}`}
          >
            <Code2 className="w-4 h-4" />
            Software
          </button>
          <button
            onClick={() => setActiveTab('expertise')}
            className={`tab-btn ${activeTab === 'expertise' ? 'active' : ''}`}
          >
            <Shield className="w-4 h-4" />
            Expertise
          </button>
          <button
            onClick={() => setActiveTab('language')}
            className={`tab-btn ${activeTab === 'language' ? 'active' : ''}`}
          >
            <Languages className="w-4 h-4" />
            Language
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData[activeTab].map((skill, index) => (
            <div
              key={index}
              className="card p-5 flex items-center gap-3"
            >
              {skill.icon && (
                <span className="text-xl flex-shrink-0">{skill.icon}</span>
              )}
              <span className="text-gray-light text-base font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
