import { useState, useEffect, useRef } from 'react'
import ParticleCanvas from './components/ParticleCanvas'
import GoldenThreads from './components/GoldenThreads'
import Sparkles from './components/Sparkles'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import BookShowcase from './components/BookShowcase'
import Synopsis from './components/Synopsis'
import Characters from './components/Characters'
import Timeline from './components/Timeline'
import Excerpt from './components/Excerpt'
import Themes from './components/Themes'
import Author from './components/Author'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import TimeStreamOrbs from './components/TimeStreamOrbs'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <>
      <ParticleCanvas />
      <GoldenThreads />
      <Sparkles />
      <TimeStreamOrbs />
      <Navigation />
      <Hero />
      <BookShowcase />
      <Synopsis />
      <Characters />
      <Timeline />
      <Excerpt />
      <Themes />
      <Author />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
