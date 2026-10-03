import { useEffect, useState } from 'react'
import { contact, navigation } from '../data/portfolio'
import { ArrowUpRight, CloseIcon, MenuIcon } from './Icons'

type NavbarProps = { activeSection: string }

export function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <a href="#top" className="brand" aria-label="Shah Nawaas, back to top" onClick={closeMenu}>SN<span>.</span></a>

        <div className={`nav-menu ${isOpen ? 'is-open' : ''}`} id="site-navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? 'is-active' : ''}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a className="resume-link nav-resume" href="/Shah-Nawaas-Resume.pdf" download>Download Resume</a>
          <a className="mobile-contact" href={`mailto:${contact.email}`} onClick={closeMenu}>Let&apos;s Talk <ArrowUpRight size={15} /></a>
        </div>

        <div className="navbar-actions">
          <a className="talk-link" href={`mailto:${contact.email}`}>Let&apos;s Talk <ArrowUpRight size={15} /></a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="site-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
    </header>
  )
}
