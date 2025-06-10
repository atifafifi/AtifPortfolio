"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
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
  }, [])

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
            isHovering ? "scale-150" : "scale-100"
          }`}
        />
      </div>
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`w-8 h-8 border-2 border-white rounded-full transition-all duration-200 ${
            isHovering ? "scale-150 opacity-50" : "scale-100 opacity-100"
          }`}
        />
      </div>
    </>
  )
} 