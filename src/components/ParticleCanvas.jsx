import { useRef, useEffect } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = -Math.random() * 0.5 - 0.1
        this.opacity = Math.random() * 0.5 + 0.1
        this.golden = Math.random() > 0.6
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = Math.random() * 0.02 + 0.005
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.pulse += this.pulseSpeed
        this.opacity = (Math.sin(this.pulse) * 0.3 + 0.3) * 0.6

        if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
          this.reset()
          this.y = canvas.height + 10
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        if (this.golden) {
          ctx.fillStyle = `rgba(212, 168, 67, ${this.opacity})`
        } else {
          ctx.fillStyle = `rgba(200, 200, 255, ${this.opacity * 0.5})`
        }
        ctx.fill()

        // Glow effect for golden particles
        if (this.golden && this.size > 1) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(212, 168, 67, ${this.opacity * 0.1})`
          ctx.fill()
        }
      }
    }

    const init = () => {
      resize()
      particles = Array.from({ length: 80 }, () => new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      animationId = requestAnimationFrame(animate)
    }

    init()
    animate()

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-canvas" />
}
