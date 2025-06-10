"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ResumeModal } from "./resume-modal"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-indigo-500/20"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent hover:from-indigo-600 hover:to-purple-600 transition-all"
          >
            A'tif
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-foreground/80 hover:text-indigo-500 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-foreground/80 hover:text-indigo-500 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-foreground/80 hover:text-indigo-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-indigo-500 transition-colors"
            >
              Contact
            </a>
            <ResumeModal />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground/80 hover:text-indigo-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-indigo-500/20">
            <a
              href="#about"
              className="block text-foreground/80 hover:text-indigo-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="block text-foreground/80 hover:text-indigo-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block text-foreground/80 hover:text-indigo-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block text-foreground/80 hover:text-indigo-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              <ResumeModal />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
