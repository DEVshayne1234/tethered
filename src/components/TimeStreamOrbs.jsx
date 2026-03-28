import { useMemo } from 'react'

export default function TimeStreamOrbs() {
  const orbs = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.random() * 200 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${Math.random() * 8 + 10}s`,
      golden: Math.random() > 0.5,
    }))
  }, [])

  return (
    <>
      {orbs.map(orb => (
        <div
          key={orb.id}
          className="time-stream-orb"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.left,
            top: orb.top,
            animationDelay: orb.delay,
            animationDuration: orb.duration,
            background: orb.golden
              ? 'radial-gradient(circle, rgba(201,162,67,0.08) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(22,42,74,0.15) 0%, transparent 70%)',
          }}
        />
      ))}
    </>
  )
}
