import { SectionHeading } from './SectionHeading'

const certifications = [
  'Java Full Stack — TNS Foundation',
  'MERN Full Stack — Revamp Academy',
  'IBM Career Education Program — CognitiveClass',
  'Power BI — IBM',
]

export function Certifications() {
  return (
    <section className="section certifications-section" id="certifications" aria-labelledby="certifications-heading">
      <div className="container">
        <SectionHeading eyebrow="06 — CREDENTIALS" title="Learning by building." titleId="certifications-heading" />
        <div className="credentials-layout">
          <div className="certifications-list" data-reveal>
            <span className="credential-label">CERTIFICATIONS</span>
            <ul>{certifications.map((certificate, index) => <li key={certificate}><span>0{index + 1}</span>{certificate}</li>)}</ul>
          </div>
          <aside className="leadership-card" data-reveal>
            <span className="credential-label">AWARD / LEADERSHIP</span>
            <h3>Hackathon Coordinator</h3>
            <p>Star Systems</p>
            <div><span>24-hour event</span><span>100+ participants</span></div>
          </aside>
        </div>
      </div>
    </section>
  )
}
