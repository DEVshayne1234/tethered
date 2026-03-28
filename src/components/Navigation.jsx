import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="nav-logo">Tethered</a>
      <ul className="nav-links">
        <li><a href="#synopsis">Synopsis</a></li>
        <li><a href="#characters">Characters</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#excerpt">Excerpt</a></li>
        <li><a href="#author">Author</a></li>
      </ul>
    </nav>
  )
}
