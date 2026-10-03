import type { CSSProperties } from 'react'
import { skills } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading eyebrow="02 — TOOLKIT" title="My technical stack." titleId="skills-heading" />
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className={`skill-card ${'featured' in group && group.featured ? 'skill-card-featured' : ''}`} key={group.category} data-reveal style={{ '--reveal-delay': `${index * 50}ms` } as CSSProperties}>
              <div className="skill-card-top"><span>0{index + 1}</span><span className="skill-line" /></div>
              <h3>{group.category}</h3>
              <ul className="skill-tags">
                {group.items.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
