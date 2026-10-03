type ProjectVisualProps = { type: 'signal' | 'api' | 'dashboard' | 'layout' }

export function ProjectVisual({ type }: ProjectVisualProps) {
  if (type === 'signal') {
    return (
      <div className="project-visual visual-signal" aria-hidden="true">
        <div className="visual-label"><span className="pulse-dot" /> NETWORK SIGNAL</div>
        <div className="signal-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="signal-readout"><span>ANOMALY SCORE</span><strong>0.94</strong><em>DETECTED</em></div>
      </div>
    )
  }

  if (type === 'api') {
    return (
      <div className="project-visual visual-api" aria-hidden="true">
        <div className="visual-label"><span className="pulse-dot" /> ORDER API</div>
        <div className="api-route"><span>POST</span><code>/v1/orders</code><b>201</b></div>
        <div className="api-code"><span>{'{'}</span><p>&nbsp;&nbsp;&quot;id&quot;: <i>&quot;ord_82a&quot;</i>,</p><p>&nbsp;&nbsp;&quot;status&quot;: <i>&quot;confirmed&quot;</i>,</p><p>&nbsp;&nbsp;&quot;locked&quot;: <b>true</b></p><span>{'}'}</span></div>
      </div>
    )
  }

  if (type === 'dashboard') {
    return (
      <div className="project-visual visual-dashboard" aria-hidden="true">
        <div className="visual-label">MALL MANAGEMENT</div>
        <div className="dashboard-grid"><span /><span /><span /><span /><span /><span /></div>
        <div className="dashboard-bars"><i /><i /><i /><i /><i /><i /><i /></div>
      </div>
    )
  }

  return (
    <div className="project-visual visual-layout" aria-hidden="true">
      <div className="visual-label">RESPONSIVE MENU</div>
      <div className="layout-nav"><span /><span /><span /></div>
      <div className="layout-hero"><i /><i /></div>
      <div className="layout-cards"><i /><i /><i /></div>
    </div>
  )
}
