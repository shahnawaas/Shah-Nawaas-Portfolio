import { contact } from '../data/portfolio'
import { ArrowUpRight } from './Icons'

export function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-inner" data-reveal>
        <p className="eyebrow">07 — CONTACT</p>
        <h2 id="contact-heading">Have a problem<br />worth <em>building?</em></h2>
        <p className="contact-summary">I&apos;m open to Software Engineering, Backend, Full-Stack, AI/ML and Data-focused opportunities.</p>
        <a className="contact-email" href={`mailto:${contact.email}`}>{contact.email} <ArrowUpRight size={28} /></a>
        <div className="contact-links">
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} /></a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
        </div>
      </div>
    </section>
  )
}
