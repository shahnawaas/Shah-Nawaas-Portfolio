import type { CSSProperties } from 'react'
import { projects } from '../data/portfolio'
import { ArrowUpRight } from './Icons'
import { ProjectVisual } from './ProjectVisual'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="work" className="section projects-section" aria-labelledby="work-heading">
      <div className="container">
        <SectionHeading eyebrow="03 — SELECTED WORK" title="Things I&apos;ve built." titleId="work-heading" />
        <div className="project-list">
          {projects.map((project, index) => (
            <article className={`project-card project-${project.index}`} key={project.title} data-reveal style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}>
              <div className="project-card-header">
                <span className="project-index">{project.index}</span>
                <span className="project-category">{project.category}</span>
                <span className="project-arrow"><ArrowUpRight size={18} /></span>
              </div>
              <ProjectVisual type={project.visual} />
              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-details">
                  {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                <p className="project-tech">{project.tech}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
