import { contact } from '../data/portfolio'
import { ArrowDown, ArrowUpRight } from './Icons'
import { TerminalVisual } from './TerminalVisual'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero-grid container">
        <div className="hero-copy" data-reveal>
          <div className="availability"><span className="availability-dot" /> OPEN TO OPPORTUNITIES</div>
          <p className="eyebrow hero-eyebrow">SOFTWARE ENGINEER <span>·</span> AI/ML <span>·</span> FULL STACK</p>
          <h1 id="hero-heading">Turning ideas into<br /><em>working software.</em></h1>
          <p className="hero-summary">B.Tech graduate in Artificial Intelligence &amp; Data Science building backend systems, machine-learning solutions and polished web applications.</p>
          <div className="hero-buttons">
            <a href="#work" className="button button-primary">Explore my work <ArrowDown size={17} /></a>
            <a href={`mailto:${contact.email}`} className="button button-secondary">Get in touch <ArrowUpRight size={17} /></a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} /></a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
            <a href={`mailto:${contact.email}`}>Email <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <div className="hero-visual" data-reveal><TerminalVisual /></div>
      </div>
      <div className="hero-bottomline container" aria-hidden="true"><span>SCROLL TO EXPLORE</span><i /></div>
    </section>
  )
}
