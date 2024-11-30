'use client'

import React, { useEffect, useRef } from 'react'

const shapes = [
  { type: 'circle', size: 20, color: 'bg-blue-500' },
  { type: 'square', size: 25, color: 'bg-green-500' },
  { type: 'triangle', size: 30, color: 'bg-yellow-500' },
  { type: 'circle', size: 15, color: 'bg-red-500' },
  { type: 'square', size: 35, color: 'bg-purple-500' },
]

export default function AnimationOverlay() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const animateShapes = () => {
      shapes.forEach((shape, index) => {
        const element = container.children[index] as HTMLElement
        if (!element) return

        const startX = Math.random() * window.innerWidth
        const startY = Math.random() * container.clientHeight
        const endX = Math.random() * window.innerWidth
        const endY = Math.random() * container.clientHeight
        const duration = 15 + Math.random() * 20

        element.style.left = `${startX}px`
        element.style.top = `${startY}px`
        element.style.transition = `all ${duration}s linear`

        setTimeout(() => {
          element.style.left = `${endX}px`
          element.style.top = `${endY}px`
        }, 100)

        setTimeout(() => animateShape(element), duration * 1000)
      })
    }

    const animateShape = (element: HTMLElement) => {
      const endX = Math.random() * window.innerWidth
      const endY = Math.random() * container.clientHeight
      const duration = 15 + Math.random() * 20

      element.style.transition = `all ${duration}s linear`
      element.style.left = `${endX}px`
      element.style.top = `${endY}px`

      setTimeout(() => animateShape(element), duration * 1000)
    }

    animateShapes()

    return () => {
      // Clean up animation timeouts if needed
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`absolute ${shape.color} opacity-30 rounded-full`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined,
          }}
        />
      ))}
    </div>
  )
}

