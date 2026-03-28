import { useEffect, useRef } from 'react'

export default function GoldenThreads() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let threads = []
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    class Thread {
      constructor(index, total) {
        this.index = index
        this.total = total
        this.baseY = (index / total) * canvas.height
        this.amplitude = 80 + Math.random() * 120
        this.frequency = 0.001 + Math.random() * 0.002
        this.speed = 0.003 + Math.random() * 0.004
        this.phase = Math.random() * Math.PI * 2
        this.opacity = 0.18 + Math.random() * 0.2
        this.width = 2 + Math.random() * 2.5
        this.direction = Math.random() > 0.5 ? 1 : -1
        this.yDrift = (Math.random() - 0.5) * 0.3
        this.amp2 = 20 + Math.random() * 50
        this.freq2 = 0.003 + Math.random() * 0.004
        this.phase2 = Math.random() * Math.PI * 2
      }

      draw(t) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(201, 162, 67, ${this.opacity})`
        ctx.lineWidth = this.width
        ctx.lineCap = 'round'

        const steps = 200
        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * canvas.width
          const wave1 = Math.sin(x * this.frequency + t * this.speed + this.phase) * this.amplitude
          const wave2 = Math.sin(x * this.freq2 + t * this.speed * 0.7 + this.phase2) * this.amp2
          const drift = Math.sin(t * 0.002 + this.index) * 30
          const y = this.baseY + wave1 + wave2 + drift

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()

        // Glow
        ctx.beginPath()
        ctx.strokeStyle = `rgba(219, 185, 99, ${this.opacity * 0.5})`
        ctx.lineWidth = this.width + 8
        ctx.lineCap = 'round'

        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * canvas.width
          const wave1 = Math.sin(x * this.frequency + t * this.speed + this.phase) * this.amplitude
          const wave2 = Math.sin(x * this.freq2 + t * this.speed * 0.7 + this.phase2) * this.amp2
          const drift = Math.sin(t * 0.002 + this.index) * 30
          const y = this.baseY + wave1 + wave2 + drift

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }
    }

    const init = () => {
      resize()
      const threadCount = 30
      threads = Array.from({ length: threadCount }, (_, i) => new Thread(i, threadCount))
    }

    const animate = () => {
      time++
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      threads.forEach(thread => thread.draw(time))
      animationId = requestAnimationFrame(animate)
    }

    init()
    animate()

    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(init, 200)
    }

    window.addEventListener('resize', handleResize)

    const resizeObserver = new ResizeObserver(() => {
      canvas.height = document.documentElement.scrollHeight
    })
    resizeObserver.observe(document.body)

    return () => {
      window.removeEventListener('resize', handleResize)
      resizeObserver.disconnect()
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="golden-threads-canvas" />
}
