import { Hero, Skills, Projects, CertificationsAchievements, WorkExperience, Education, Contact, Footer } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <CertificationsAchievements />
      <WorkExperience />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
