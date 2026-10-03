import { experience } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
      <div className="container">
        <SectionHeading eyebrow="04 — EXPERIENCE" title="Where I&apos;ve worked." titleId="experience-heading" />
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={item.company} data-reveal>
              <div className="timeline-marker"><span /></div>
              <p className="timeline-period">{item.period}</p>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <p className="company-name">{item.company}</p>
                <p>{item.description}</p>
              </div>
              <span className="timeline-number">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
