const events = [
  {
    title: 'The Rescue',
    desc: 'A brutal night. A dark alley. A mysterious stranger who appears as though summoned by fate itself.'
  },
  {
    title: 'The Pull',
    desc: 'Claire is drawn instantly and irrevocably to Alaric Thorne — a connection that defies all logic.'
  },
  {
    title: 'Phantom Memories',
    desc: 'Flashes of lives she never lived. Tears for losses that aren’t hers. Claire’s reality begins to fracture.'
  },
  {
    title: 'The Spiral',
    desc: 'Their world plunges into a poetic and psychological storm. Alaric’s secrets rise like ghosts.'
  },
  {
    title: 'The Truth',
    desc: 'Claire must embrace a revelation that may fracture her identity forever — or lose everything.'
  },
  {
    title: 'The Thread',
    desc: 'The odds are stacked. Time — the constant observer — is running out. Two souls, one impossible choice.'
  }
]

export default function Timeline() {
  return (
    <section id="timeline" className="section timeline-section">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">The Journey</span>
          <h2 className="section-heading">Where Time Bends</h2>
          <div className="gold-divider" />
        </div>

        <div className="timeline">
          {events.map((event, i) => (
            <div key={i} className="timeline-item reveal">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
