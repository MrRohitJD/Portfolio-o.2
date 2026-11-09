'use client'

import { useEffect, useState } from 'react'
import Snowfall from 'react-snowfall'

const snowflakeSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M16 2v28M3.9 9l24.2 14M3.9 23L28.1 9M10 5.5l6 3.5 6-3.5M10 26.5l6-3.5 6 3.5M5.5 16l3.5-6M5.5 16l3.5 6M26.5 16l-3.5-6M26.5 16l-3.5 6" />
    </g>
  </svg>
`

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
  const [snowflakeImages, setSnowflakeImages] = useState([])

  useEffect(() => {
    let mounted = true
    const snowflakeImage = new Image()

    snowflakeImage.onload = () => {
      if (mounted) setSnowflakeImages([snowflakeImage])
    }
    snowflakeImage.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(snowflakeSvg)}`

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="seasonal-effects" aria-hidden="true">
      <Snowfall
        color="#ffffff"
        images={snowflakeImages.length ? snowflakeImages : undefined}
        radius={[4, 8]}
        speed={[0.7, 1.8]}
        wind={[-0.7, 0.8]}
        rotationSpeed={[-2, 2]}
        snowflakeCount={70}
        style={{ opacity: 0.75 }}
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
          >
            <svg viewBox="0 0 100 100" focusable="false">
              <path
                className="leaf-shape"
                d="M8 82C13 43 42 12 92 8C87 55 58 86 8 82Z"
              />
              <path
                className="leaf-vein"
                d="M12 80C35 61 56 38 86 12M35 61L28 40M53 44L48 24M68 30L68 17"
              />
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}
