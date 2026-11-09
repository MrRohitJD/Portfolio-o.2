'use client'

import Snowfall from 'react-snowfall'

const leaves = Array.from({ length: 18 }, (_, index) => ({
  left: `${(index * 53 + 8) % 104 - 2}%`,
  size: `${12 + ((index * 5) % 9)}px`,
  duration: `${14 + ((index * 7) % 12)}s`,
  delay: `${-((index * 17) % 25)}s`,
  drift: `${-90 + ((index * 43) % 181)}px`,
  rotation: `${-90 + ((index * 47) % 181)}deg`,
  color: ['#f59e0b', '#ef4444', '#d97706', '#dc2626', '#f97316'][index % 5],
}))

export default function SeasonalEffects() {
  return (
    <div className="seasonal-effects" aria-hidden="true">
      <Snowfall
        color="#ffffff"
        snowflakeCount={90}
        style={{ opacity: 0.6 }}
      />

      <div className="leaves-layer">
        {leaves.map((leaf, index) => (
          <span
            className="falling-leaf"
            key={`leaf-${index}`}
            style={{
              '--leaf-left': leaf.left,
              '--leaf-size': leaf.size,
              '--leaf-duration': leaf.duration,
              '--leaf-delay': leaf.delay,
              '--leaf-drift': leaf.drift,
              '--leaf-rotation': leaf.rotation,
              '--leaf-color': leaf.color,
            }}
          />
        ))}
      </div>
    </div>
  )
}
