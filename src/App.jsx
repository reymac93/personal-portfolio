import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Skills from './components/Skills/Skills.jsx'
import Services from './components/Services/Services.jsx'
import PortfolioSlider from './components/Portfolio/PortfolioSlider.jsx'
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: 'url(/images/desk-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for readability */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-slate-900/80"
        aria-hidden
      />
      {/* Dotted pattern (same as Contact section) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
        }}
        aria-hidden
      />

      <Header />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <section id="hero" className="scroll-mt-24 rounded-3xl px-4 py-10 sm:px-8 sm:py-14">
          <Hero />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <section id="services" className="scroll-mt-24">
          <Services />
        </section>

        <section id="portfolio" className="scroll-mt-24">
          <PortfolioSlider />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
