import { useEffect, useRef } from 'react'

export default function Sparkles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let sparkles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Sparkle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.maxOpacity = Math.random() * 0.8 + 0.2
        this.opacity = 0
        this.phase = Math.random() * Math.PI * 2
        this.speed = 0.02 + Math.random() * 0.04
        this.life = 0
        this.lifespan = 120 + Math.random() * 200
        this.golden = Math.random() > 0.3
        this.twinkleSpeed = 0.05 + Math.random() * 0.08
        this.rays = Math.random() > 0.5 // whether to draw star rays
        this.rayLength = this.size * (2 + Math.random() * 3)
      }

      update() {
        this.life++
        this.phase += this.twinkleSpeed

        // Fade in, twinkle, fade out
        const progress = this.life / this.lifespan
        if (progress < 0.15) {
          this.opacity = (progress / 0.15) * this.maxOpacity
        } else if (progress > 0.8) {
          this.opacity = ((1 - progress) / 0.2) * this.maxOpacity
        } else {
          this.opacity = this.maxOpacity * (0.6 + Math.sin(this.phase) * 0.4)
        }

        if (this.life >= this.lifespan) {
          this.reset()
        }
      }

      draw() {
        const color = this.golden
          ? `rgba(219, 185, 99, ${this.opacity})`
          : `rgba(230, 230, 255, ${this.opacity * 0.6})`
        const glowColor = this.golden
          ? `rgba(201, 162, 67, ${this.opacity * 0.3})`
          : `rgba(200, 200, 255, ${this.opacity * 0.2})`

        // Glow
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = glowColor
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()

        // Star rays
        if (this.rays && this.opacity > 0.3) {
          ctx.strokeStyle = color
          ctx.lineWidth = 0.5

          // 4-point star
          const len = this.rayLength * this.opacity
          ctx.beginPath()
          ctx.moveTo(this.x - len, this.y)
          ctx.lineTo(this.x + len, this.y)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(this.x, this.y - len)
          ctx.lineTo(this.x, this.y + len)
          ctx.stroke()

          // Diagonal rays (smaller)
          const dLen = len * 0.5
          ctx.beginPath()
          ctx.moveTo(this.x - dLen, this.y - dLen)
          ctx.lineTo(this.x + dLen, this.y + dLen)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(this.x + dLen, this.y - dLen)
          ctx.lineTo(this.x - dLen, this.y + dLen)
          ctx.stroke()
        }
      }
    }

    const init = () => {
      resize()
      sparkles = Array.from({ length: 50 }, () => {
        const s = new Sparkle()
        s.life = Math.floor(Math.random() * s.lifespan)
        return s
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      sparkles.forEach(s => {
        s.update()
        s.draw()
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

  return <canvas ref={canvasRef} className="sparkles-canvas" />
}
