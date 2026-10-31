'use client'

import { useState } from 'react'
import { Star, Clock, Folder, Github, ArrowUpRight } from 'lucide-react'

const projectsData = {
  featured: [
    {
      title: 'AI-Powered Gmail Assistant & Email Automation',
      description: 'Full-stack AI Gmail assistant that connects to Gmail through Google OAuth and the Gmail API. Enables users to retrieve, classify, search, and manage emails through an AI chatbot, including composing and sending emails to specific recipients using natural-language commands.',
      tags: ['React', 'FastAPI', 'Python', 'Gmail API', 'Google OAuth', 'PostgreSQL', 'NLP', 'AI Agents', 'Generative AI'],
      tagType: 'ai-agent',
      liveUrl: 'https://mail-assistant.rohit-jadhav.dev/',
    },
    {
      title: 'AI-Powered CCTV Surveillance & Intrusion Detection',
      description: 'Real-time AI surveillance system for person and vehicle detection, multi-object tracking, and intrusion-zone monitoring. Built scalable FastAPI services with YOLO, ByteTrack, and Re-ID for consistent object tracking and PostgreSQL for detection data management.',
      tags: ['YOLO', 'ByteTrack', 'Re-ID', 'FastAPI', 'Python', 'PostgreSQL', 'OpenCV', 'Computer Vision'],
      tagType: 'computer-vision',
    },
    {
      title: '(SpeakFrame) Audio & Embeddings Toolkit (RAG base)',
      description: 'A collection of Python scripts to transcribe audio, create and store text embeddings, and retrieve matching text chunks for use with large language models. It supports local audio processing, embedding generation, and semantic search workflows.',
      tags: ['RAG'],
      tagType: 'rag',
      githubUrl: 'https://github.com/MrRohitJD/VideoFrame---Videos-Search-Timestamp-Toolkit'
    },
    {
      title: 'Universal RAG System',
      description: 'Universal Knowledge Agent is a RAG-powered engine using Gemini 2.5 Flash and ChromaDB. It transforms .txt and .md files into interactive bots with source attribution and zero hallucinations. Features include web scraping, smart chunking, and a sleek Streamlit UI.',
      tags: ['RAG'],
      tagType: 'rag',
      githubUrl: 'https://github.com/MrRohitJD/Universal-Knowledge-Agent'
    },
  ],
  past: [
    {
      title: 'ML Credit Score',
      description: 'Built an end-to-end Credit Risk Prediction Web App using Kaggle\'s dataset, achieving 86.41 ROC-AUC (close to top leaderboard score of 86.64).Trained models (Logistic Regression, XGBoost, Balanced Random Forest) with strong preprocessing and class imbalance handling. Developed a Django-based app with real-time predictions, dashboard insights, and SQLite integration for a complete ML deployment.',
      tags: ['Scikit-learn', 'XGBoost', 'Optuna',  'imbalanced-learn'],
      tagType: 'ML pipeline',
      githubUrl: 'https://github.com/MrRohitJD/CreditScore-ML-project'
    },
    {
      title: 'Placement Cell Web Application',
      description: 'Developed a web-based system to bridge the gap between students and recruiters, featuring role-based access for admins and applicants to manage the end-to-end placement cycle.',
      tags: ['Django'],
      tagType: 'django',
      githubUrl: 'https://github.com/MrRohitJD/Placement--Cell'
    },
    {
      title: 'Smart Learning Gap Detection System',
      description: 'AI-powered EdTech solution addressing the Silent Academic Dropout Crisis by tracking student understanding and detecting learning gaps in real time. It dynamically adapts learning paths to strengthen weak concepts and prevent long-term academic failure. Built to deliver personalised, accessible education for every learner.',
      tags: ['ML', 'Scikit-learn'],
      tagType: 'ML pipeline',
      githubUrl: 'https://github.com/MrRohitJD/Only-AI'
    },
    {
      title: 'Stock Market Management System',
      description: 'Full-stack stock market web application built with Spring Boot and Thymeleaf for managing and displaying stock-related data through a server-side rendered interface. Uses Spring Data JPA and MySQL for persistent data management, with validation, email integration, and Spring Actuator for application monitoring and management.',
      tags: ['Java', 'Spring Boot', 'Spring MVC', 'Thymeleaf', 'Spring Data JPA', 'MySQL', 'Spring Mail', 'Hibernate', 'Maven', 'Lombok', 'REST API', 'Bean Validation', 'Spring Actuator'],
      tagType: 'spring',
    },
    {
      title: 'My Awesome Card — Personalized Greeting Card E-Commerce Platform',
      description: 'Django-based e-commerce and blogging platform where users can discover, customize, and purchase personalized greeting cards. Includes authentication, product browsing, cart and checkout, image and text customization, search, reviews, a blog, and an admin dashboard for managing products, orders, users, and posts.',
      tags: ['Python', 'Django', 'Django ORM', 'SQLite', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Pillow', 'Gunicorn', 'Django Admin', 'Authentication', 'E-Commerce', 'Blog CMS'],
      tagType: 'django',
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

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live demo (opens in a new tab)`}
                  className="mt-4 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-gray-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Live Demo
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-200 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repo
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
