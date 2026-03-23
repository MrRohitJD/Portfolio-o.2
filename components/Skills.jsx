'use client'

import { useState } from 'react'
import {
  Code2,
  Shield,
  Languages,
  FlaskConical,
  LineChart,
  Cpu,
  Table2,
  BarChart3,
  Braces,
  Blocks,
  Webhook,
  Database,
  Brain,
  PieChart,
  TrendingUp,
  BarChart2,
  Wrench,
  Gauge,
  FileCode2,
} from 'lucide-react'

const skillsData = {
  software: [
    { icon: FlaskConical, name: 'Data science' },
    { icon: LineChart, name: 'Data analyst' },
    { icon: Cpu, name: 'Scikit-learn' },
    { icon: Table2, name: 'Pandas' },
    { icon: BarChart3, name: 'Matplotlib' },
    { icon: Braces, name: 'Python' },
    { icon: Blocks, name: 'Django Framework' },
    { icon: Webhook, name: 'REST API / Fast API' },
    { icon: Database, name: 'SQL' },
  ],
  expertise: [
    { icon: Brain, name: 'Machine Learning' },
    { icon: PieChart, name: 'Data Analysis' },
    { icon: TrendingUp, name: 'Statistical Modeling' },
    { icon: BarChart2, name: 'Data Visualization' },
    { icon: Wrench, name: 'Feature Engineering' },
    { icon: Gauge, name: 'Model Optimization' },
  ],
  language: [
    { icon: Braces, name: 'Python' },
    { icon: Database, name: 'SQL' },
    { icon: FileCode2, name: 'Java' },
  ],
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('software')
  const tabItems = [
    { key: 'software', label: 'Software', icon: Code2 },
    { key: 'expertise', label: 'Expertise', icon: Shield },
    { key: 'language', label: 'Language', icon: Languages },
  ]

  return (
    <section className="pt-[20px] pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="section-title">Skills</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabItems.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.key

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-bold leading-none transition-all duration-500 ease-out ${
                  isActive
                    ? 'bg-dark-lighter text-white border border-dark-border shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]'
                    : 'text-gray-text border border-transparent hover:text-gray-light'
                }`}
              >
                <Icon className="w-[18px] h-[18px]" strokeWidth={2.5} />
                <span className="text-base font-extrabold tracking-tight">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div key={activeTab} className="animate-skills-tab-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillsData[activeTab].map((skill, index) => (
            <div
              key={index}
              className="card min-h-[56px] px-4 py-3 flex items-center gap-2.5"
            >
              {skill.icon && (
                <skill.icon className="w-5 h-5 flex-shrink-0 text-gray-light" strokeWidth={2.4} />
              )}
              <span className="text-white text-base font-bold leading-tight tracking-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
