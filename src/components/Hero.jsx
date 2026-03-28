export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-glow" />

      <div className="hero-ornament">&#10022; &#10022; &#10022;</div>

      <h1 className="hero-title">
        Tethered
      </h1>

      <p className="hero-subtitle">The Thread That Broke Time</p>

      <p className="hero-tagline">
        "Some love stories are written in the stars. Theirs was etched into the fabric of time."
      </p>

      <div className="hero-cover-wrapper">
        <img
          src="/cover.jpg"
          alt="Tethered: The Thread That Broke Time by Shayne Nicole Elliott — Book Cover"
          className="hero-cover-img"
        />
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
