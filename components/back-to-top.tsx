"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={`fixed bottom-4 right-4 rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUp className="h-4 w-4" />
      <span className="sr-only">Back to top</span>
    </Button>
  )
} 