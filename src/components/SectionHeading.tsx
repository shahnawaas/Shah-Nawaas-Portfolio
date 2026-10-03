type SectionHeadingProps = {
  eyebrow: string
  title: string
  titleId?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, titleId, className = '' }: SectionHeadingProps) {
  return (
    <header className={`section-heading ${className}`.trim()} data-reveal>
      <p className="eyebrow section-eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
    </header>
  )
}
