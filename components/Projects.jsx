'use client'

import { useState } from 'react'
import { Star, Clock, Folder } from 'lucide-react'

const projectsData = {
  featured: [
    {
      title: '(SpeakFrame) Audio & Embeddings Toolkit (RAG base)',
      description: 'A collection of Python scripts to transcribe audio, create and store text embeddings, and retrieve matching text chunks for use with large language models. It supports local audio processing, embedding generation, and semantic search workflows.',
      tags: ['RAG'],
      tagType: 'rag'
    },
    {
      title: 'Universal Knowledge Agent (RAG)',
      description: 'Universal Knowledge Agent is a RAG-powered engine using Gemini 2.5 Flash and ChromaDB. It transforms .txt and .md files into interactive bots with source attribution and zero hallucinations. Features include web scraping, smart chunking, and a sleek Streamlit UI.',
      tags: ['RAG'],
      tagType: 'rag'
    },
    {
      title: 'Placement Cell Web App',
      description: 'Developed a web-based system to bridge the gap between students and recruiters, featuring role-based access for admins and applicants to manage the end-to-end placement cycle.',
      tags: ['Django'],
      tagType: 'django'
    },
  ],
  past: [
    {
      title: 'Machine Learning Pipeline',
      description: 'Built an end-to-end ML pipeline for data preprocessing, model training, and deployment.',
      tags: ['ML'],
      tagType: 'rag'
    },
  ],
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('featured')
  const tabItems = [
    { key: 'featured', label: 'Featured', icon: Star },
    { key: 'past', label: 'Past Projects', icon: Clock },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="section-title">Projects</h2>

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

        {/* Projects Grid */}
        <div key={activeTab} className="animate-skills-tab-in grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectsData[activeTab].map((project, index) => (
            <div key={index} className="rounded-2xl border border-dark-border bg-gradient-to-br from-[#232427] to-[#1d1e22] p-5">
              {/* Header */}
              <div className="flex items-start gap-2.5 mb-3">
                <Folder className="w-5 h-5 text-gray-200 flex-shrink-0 mt-0.5" strokeWidth={2.4} />
                <h3 className="text-lg md:text-xl font-semibold text-white leading-snug tracking-tight">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-base font-light leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`inline-flex items-center rounded-md px-2.5 py-1 text-sm font-bold leading-none ${
                      project.tagType === 'django'
                        ? 'bg-blue-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
