import { SectionHeading } from './SectionHeading'

const metrics = [
  { value: '15+', label: 'REST APIs' },
  { value: '10+', label: 'API defects resolved' },
  { value: '5+', label: 'Client web projects' },
]

export function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container about-layout">
        <SectionHeading eyebrow="01 — ABOUT" title="Engineer with a builder&apos;s mindset." titleId="about-heading" />
        <div className="about-content" data-reveal>
          <p className="lead-copy">I&apos;m a B.Tech graduate in Artificial Intelligence &amp; Data Science with hands-on experience across software engineering, machine learning, backend API development and full-stack web development.</p>
          <p className="body-copy">I&apos;ve worked on end-to-end ML pipelines, scalable REST services, database-backed applications and responsive web experiences through academic, personal and professional projects.</p>
          <dl className="metrics-list">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
