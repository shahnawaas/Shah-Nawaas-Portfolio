import { coursework } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section className="section education-section" id="education" aria-labelledby="education-heading">
      <div className="container education-layout">
        <SectionHeading eyebrow="05 — EDUCATION" title="Grounded in fundamentals." titleId="education-heading" />
        <div className="education-card" data-reveal>
          <div className="education-topline"><span>2022 — 2026</span><span>CHENNAI, IN</span></div>
          <h3>B.Tech — Artificial Intelligence &amp; Data Science</h3>
          <p className="school-name">Mohamed Sathak AJ College of Engineering, Chennai</p>
          <p className="education-period">Sep 2022 – May 2026</p>
          <div className="coursework">
            <span className="coursework-label">RELEVANT COURSEWORK</span>
            <ul>{coursework.map((course) => <li key={course}>{course}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}
