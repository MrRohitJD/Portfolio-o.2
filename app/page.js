import { Hero, Skills, Projects, CertificationsAchievements, WorkExperience, Education, Contact, Footer, SeasonalEffects } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SeasonalEffects />
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
