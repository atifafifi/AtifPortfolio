"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/resume.jpg"
                    alt="A'tif A'fifi"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                A'tif A'fifi Bin Mohd Zukhi
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/80 mb-8">
              Junior Software Engineer
            </h2>
            <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto">
              Passionate about creating elegant solutions to complex problems.
              Specializing in full-stack development with a focus on user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/atsen1701"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-indigo-500 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/atifafifi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-indigo-500 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:atifafifi16@gmail.com"
              className="text-foreground/60 hover:text-indigo-500 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <a
              href="#about"
              className="text-foreground/60 hover:text-indigo-500 transition-colors"
            >
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
