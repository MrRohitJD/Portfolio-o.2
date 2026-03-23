'use client'

import { useState } from 'react'
import {
  Code2,
  Shield,
  Languages,
  NotebookText,
  Briefcase,
  Laptop,
  Table2,
  ChartColumn,
  Braces,
  Blocks,
  Webhook,
  Database,
} from 'lucide-react'

const skillsData = {
  software: [
    { icon: NotebookText, name: 'Data science' },
    { icon: Briefcase, name: 'Data analyst' },
    { icon: Laptop, name: 'Scikit-learn' },
    { icon: Table2, name: 'Pandas' },
    { icon: ChartColumn, name: 'Matplotlib' },
    { icon: Braces, name: 'Python' },
    { icon: Blocks, name: 'Django Framework' },
    { icon: Webhook, name: 'REST API / Fast API' },
    { icon: Database, name: 'SQL' },
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
      <div className="container mx-auto px-6 max-w-5xl">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillsData[activeTab].map((skill, index) => (
            <div
              key={index}
              className="card min-h-[56px] px-4 py-3 flex items-center gap-2.5"
            >
              {skill.icon && (
                <skill.icon className="w-4 h-4 flex-shrink-0 text-gray-text" />
              )}
              <span className="text-gray-light text-sm md:text-[15px] font-semibold leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
