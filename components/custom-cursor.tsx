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
        {/* Fish body */}
        <motion.div
          className="w-8 h-4 bg-indigo-500 rounded-full"
          animate={{
            scaleX: isHovering ? 1.2 : 1,
          }}
        />
        {/* Fish tail */}
        <motion.div
          className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-500"
          style={{
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
          }}
          animate={{
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Fish eye */}
        <motion.div
          className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
          animate={{
            scale: isHovering ? 1.2 : 1,
          }}
        />
        {/* Fish pupil */}
        <motion.div
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1 h-1 bg-black rounded-full"
        />
      </motion.div>
    </motion.div>
  )
} 