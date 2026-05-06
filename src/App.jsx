import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects.jsx'
import Skills from './components/Skills/Skills.jsx'
import Services from './components/Services/Services.jsx'
import SelectedSystems from './components/SelectedSystems/SelectedSystems.jsx'
import MoreProjects from './components/MoreProjects/MoreProjects.jsx'
import Proof from './components/Proof/Proof.jsx'
import FinalCTA from './components/FinalCTA/FinalCTA.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 dark:bg-[#1f1f1f] dark:text-[#999999] transition-colors duration-300">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f1f1f] via-[#252525] to-[#1f1f1f]" />
        <div className="absolute inset-0 opacity-40 dark:opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <Header />

      <main className="relative z-10">
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <Hero />
        </section>

        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FeaturedProjects />
          </div>
        </section>

        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <Skills />
          </div>
        </section>

        <section id="build" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <Services />
          </div>
        </section>

        <section id="systems" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <SelectedSystems />
          </div>
        </section>

        <section id="more-projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <MoreProjects />
          </div>
        </section>

        <section id="proof" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <Proof />
          </div>
        </section>

        <section id="final-cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <FinalCTA />
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
