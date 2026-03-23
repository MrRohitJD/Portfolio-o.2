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

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="section-title">Projects</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setActiveTab('featured')}
            className={`tab-btn ${activeTab === 'featured' ? 'active' : ''}`}
          >
            <Star className="w-4 h-4" />
            Featured
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
          >
            <Clock className="w-4 h-4" />
            Past Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectsData[activeTab].map((project, index) => (
            <div key={index} className="card p-6">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <Folder className="w-6 h-6 text-gray-text flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-text text-base leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`tag tag-${project.tagType}`}
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
