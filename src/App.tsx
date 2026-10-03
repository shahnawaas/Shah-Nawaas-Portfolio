import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

const trackedSections = ['about', 'skills', 'work', 'experience']

function usePortfolioEffects() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]')

    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-revealed'))
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            revealObserver.unobserve(entry.target)
          }
        }),
        { threshold: 0.12 },
      )
      revealItems.forEach((item) => revealObserver.observe(item))
      return () => revealObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const sections = trackedSections
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const sectionObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      }),
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach((section) => sectionObserver.observe(section))
    return () => sectionObserver.disconnect()
  }, [])

  useEffect(() => {
    const capablePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!capablePointer || reducedMotion) return

    const setPointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', setPointer, { passive: true })
    return () => window.removeEventListener('pointermove', setPointer)
  }, [])

  return activeSection
}

export default function App() {
  const activeSection = usePortfolioEffects()

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="cursor-glow" aria-hidden="true" />
      <Navbar activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
