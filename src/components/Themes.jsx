const themes = [
  {
    icon: '⏳',
    name: 'Time & Memory',
    desc: 'Claire is haunted by time slips — ghosts of herself from fractured timelines bleeding into her world. What begins as her private unravelling soon becomes visible to everyone around her, as the timelines converge to erase the fracture they cannot abide.'
  },
  {
    icon: '🕯️',
    name: 'Love & Sacrifice',
    desc: 'Claire and Alaric are drawn together by a force neither of them can explain — but their connection comes at a devastating cost. The closer they hold on, the faster the world unravels, and the price of staying together may be everything.'
  },
  {
    icon: '🖤',
    name: 'Grief & Secrets',
    desc: 'Alaric carries a grief he cannot name and truths he will not speak. Claire senses the weight of what he hides, but the closer she gets to the answers, the more she discovers that some burdens were never meant to be shared.'
  },
  {
    icon: '💫',
    name: 'Erasure & Existence',
    desc: 'The timelines are converging with a single purpose: to erase the fracture point. And that fracture is Claire. Time itself — silent, sentient, patient — has set its sights on undoing her entirely.'
  }
]

export default function Themes() {
  return (
    <section className="section themes">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">The Heart</span>
          <h2 className="section-heading">Themes Woven Through Time</h2>
          <div className="gold-divider" />
        </div>

        <div className="themes-grid">
          {themes.map((theme, i) => (
            <div key={i} className="theme-card reveal">
              <span className="theme-icon">{theme.icon}</span>
              <h3 className="theme-name">{theme.name}</h3>
              <p className="theme-desc">{theme.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
