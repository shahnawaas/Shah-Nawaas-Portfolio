export function TerminalVisual() {
  return (
    <div className="terminal-orbit" aria-hidden="true">
      <div className="terminal-window">
        <div className="terminal-topbar">
          <div className="terminal-dots"><span /><span /><span /></div>
          <span>~/shah-nawaas</span>
          <span className="terminal-state">active</span>
        </div>
        <div className="terminal-body">
          <p><span className="terminal-prompt">$</span> <span className="terminal-command">whoami</span></p>
          <p className="terminal-output">shah-nawaas <span>— software engineer</span></p>
          <p className="terminal-spacer"><span className="terminal-prompt">$</span> <span className="terminal-command">cat profile.ts</span></p>
          <pre><code>{`const developer = {
  name: "Shah Nawaas",
  role: "Software Engineer",
  stack: [
    "Python", "Java",
    "FastAPI", "React",
    "ML", "PostgreSQL"
  ],
  build: true
};`}</code></pre>
          <p className="terminal-last"><span className="terminal-prompt">$</span> <span className="cursor" /></p>
        </div>
      </div>
      <div className="orbit-dot orbit-dot-a" />
      <div className="orbit-dot orbit-dot-b" />
      <div className="terminal-caption"><span className="caption-dot" /> BUILDING USEFUL THINGS</div>
    </div>
  )
}
