'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { SiLeetcode, SiKaggle } from 'react-icons/si'

const footerLinks = [
  {
    name: 'Mail',
    href: 'mailto:rohitjadhav.604.2@gmail.com',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rohitjd/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/MrRohitJD',
    icon: Github,
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/Rohit_JD/',
    icon: SiLeetcode,
  },
  {
    name: 'Kaggle',
    href: 'https://www.kaggle.com/',
    icon: SiKaggle,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 py-8">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center justify-center gap-4">
          {footerLinks.map((link) => {
            const Icon = link.icon
            const isInternal = link.href.startsWith('#')

            return (
              <a
                key={link.name}
                href={link.href}
                target={isInternal ? undefined : '_blank'}
                rel={isInternal ? undefined : 'noopener noreferrer'}
                aria-label={link.name}
                title={link.name}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
