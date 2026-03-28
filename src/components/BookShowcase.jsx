export default function BookShowcase() {
  return (
    <section className="book-showcase">
      <div className="section-inner">
        <div className="book-showcase-content reveal">
          <div className="book-meta">
            <div className="book-meta-item">
              <span className="book-meta-value">364</span>
              <span className="book-meta-label">Pages</span>
            </div>
            <div className="book-meta-item">
              <span className="book-meta-value">Nov 2025</span>
              <span className="book-meta-label">Published</span>
            </div>
            <div className="book-meta-item">
              <span className="book-meta-value">English</span>
              <span className="book-meta-label">Language</span>
            </div>
          </div>

          <a
            href="https://a.co/d/0aCnxbpN"
            target="_blank"
            rel="noopener noreferrer"
            className="book-buy-btn"
          >
            Order on Amazon
          </a>
        </div>
      </div>
    </section>
  )
}
