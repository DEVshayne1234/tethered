const characters = [
  {
    icon: '🌙',
    name: 'Claire Bennett',
    role: 'The Unmoored',
    desc: `An average barista whose ordinary life shatters the night a stranger saves her from the dark. Drawn irrevocably to Alaric, Claire is soon consumed by phantom memories — flashes of lives she never lived, tears for losses that aren’t hers. As her reality fractures, she must embrace a truth that may shatter her identity forever — or lose herself to Time’s relentless tide.`
  },
  {
    icon: '⚜️',
    name: 'Alaric Thorne',
    role: 'The Keeper of Hours',
    desc: `Enigmatic, elegant, and burdened by a grief he cannot name, Alaric moves through the world like a man out of step with his own century. His past is a constellation of half-truths and silences. Yet when he looks at Claire, something in his careful composure breaks — as though she is the one thread Time was never meant to cut.`
  }
]

export default function Characters() {
  return (
    <section id="characters" className="section characters">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">The Souls</span>
          <h2 className="section-heading">Bound Across the Ages</h2>
          <div className="gold-divider" />
        </div>

        <div className="characters-grid">
          {characters.map((char, i) => (
            <div key={i} className="character-card reveal">
              <span className="character-icon">{char.icon}</span>
              <h3 className="character-name">{char.name}</h3>
              <span className="character-role">{char.role}</span>
              <p className="character-desc">{char.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
