import { Hero, Skills, Projects, Education, Contact, Footer } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
