"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  // Smooth spring animation for cursor movement
  const springConfig = { damping: 30, stiffness: 200 }
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)

  const [isHovering, setIsHovering] = useState(false)

  // Use useRef for prevPosition to avoid it being a dependency of useEffect
  const prevPosition = useRef({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // Update Framer Motion values directly
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      const currentX = e.clientX
      const currentY = e.clientY

      // Calculate rotation based on movement direction
      const dx = currentX - prevPosition.current.x
      const dy = currentY - prevPosition.current.y
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI)
        setRotation(angle)
      }
      prevPosition.current = { x: currentX, y: currentY } // Update ref
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button") || target.closest("a")) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, []) // Empty dependency array as values are updated directly or are stable refs

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        x: cursorX, // Use Framer Motion values for position
        y: cursorY, // Use Framer Motion values for position
        rotate: rotation,
      }}
    >
      <motion.div
        className="relative"
        animate={{
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-12 h-12"
          animate={{
            scale: isHovering ? 1.2 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <defs>
            <radialGradient id="planetGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#16a34a" />
            </radialGradient>
            <radialGradient id="flameGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#15803d" />
            </radialGradient>
          </defs>
          {/* Planet core */}
          <circle cx="50" cy="50" r="20" fill="url(#planetGradient)" />
          {/* Encapsulating flames */}
          <path d="M50 20 Q60 10 70 20 Q60 30 50 20" fill="url(#flameGradient)" opacity="0.8" />
          <path d="M50 80 Q60 90 70 80 Q60 70 50 80" fill="url(#flameGradient)" opacity="0.8" />
          <path d="M20 50 Q10 40 20 30 Q30 40 20 50" fill="url(#flameGradient)" opacity="0.8" />
          <path d="M80 50 Q90 40 80 30 Q70 40 80 50" fill="url(#flameGradient)" opacity="0.8" />
          <path d="M35 25 Q45 15 55 25 Q45 35 35 25" fill="url(#flameGradient)" opacity="0.6" />
          <path d="M35 75 Q45 85 55 75 Q45 65 35 75" fill="url(#flameGradient)" opacity="0.6" />
          <path d="M65 25 Q75 15 85 25 Q75 35 65 25" fill="url(#flameGradient)" opacity="0.6" />
          <path d="M65 75 Q75 85 85 75 Q75 65 65 75" fill="url(#flameGradient)" opacity="0.6" />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
} 