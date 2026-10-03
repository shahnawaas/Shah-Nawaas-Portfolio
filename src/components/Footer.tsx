import { contact } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="#top" className="brand" aria-label="Shah Nawaas, back to top">SN<span>.</span></a>
        <p>Designed &amp; built by Shah Nawaas</p>
        <a href={`mailto:${contact.email}`}>Say hello</a>
      </div>
    </footer>
  )
}
