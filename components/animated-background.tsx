"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create multiple particle systems with enhanced effects
    const createParticleSystem = (count: number, size: number, color: string, speed: number, spread: number) => {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(count * 3)
      const colors = new Float32Array(count * 3)
      const colorObj = new THREE.Color(color)
      const velocities = new Float32Array(count * 3)

      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        // Create a more spherical distribution
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const radius = spread * Math.cbrt(Math.random())

        positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[i3 + 2] = radius * Math.cos(phi)

        // Add slight color variation
        colors[i3] = colorObj.r + (Math.random() - 0.5) * 0.1
        colors[i3 + 1] = colorObj.g + (Math.random() - 0.5) * 0.1
        colors[i3 + 2] = colorObj.b + (Math.random() - 0.5) * 0.1

        // Add velocity for movement
        velocities[i3] = (Math.random() - 0.5) * 0.001
        velocities[i3 + 1] = (Math.random() - 0.5) * 0.001
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.001
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

      const material = new THREE.PointsMaterial({
        size,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      })

      const particles = new THREE.Points(geometry, material)
      particles.userData.speed = speed
      particles.userData.velocities = velocities
      return particles
    }

    // Create three layers of particles with different characteristics
    const particles1 = createParticleSystem(2000, 0.03, "#4f46e5", 0.0003, 8) // Indigo - outer layer
    const particles2 = createParticleSystem(1500, 0.02, "#7c3aed", 0.0002, 6) // Violet - middle layer
    const particles3 = createParticleSystem(1000, 0.015, "#db2777", 0.0001, 4) // Pink - inner layer

    scene.add(particles1, particles2, particles3)

    // Position camera
    camera.position.z = 5

    // Mouse movement with smooth interpolation
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation with enhanced effects
    const animate = () => {
      requestAnimationFrame(animate)

      // Smooth mouse movement with interpolation
      targetX = mouseX * 0.001
      targetY = mouseY * 0.001
      currentX += (targetX - currentX) * 0.05
      currentY += (targetY - currentY) * 0.05

      // Update particle positions
      const updateParticles = (particles: THREE.Points) => {
        const positions = particles.geometry.attributes.position.array as Float32Array
        const velocities = particles.userData.velocities as Float32Array

        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += velocities[i]
          positions[i + 1] += velocities[i + 1]
          positions[i + 2] += velocities[i + 2]

          // Boundary check and reset
          const distance = Math.sqrt(
            positions[i] * positions[i] +
            positions[i + 1] * positions[i + 1] +
            positions[i + 2] * positions[i + 2]
          )

          if (distance > 10) {
            positions[i] *= 0.9
            positions[i + 1] *= 0.9
            positions[i + 2] *= 0.9
          }
        }

        particles.geometry.attributes.position.needsUpdate = true
      }

      updateParticles(particles1)
      updateParticles(particles2)
      updateParticles(particles3)

      // Rotate particles with mouse interaction
      particles1.rotation.x += particles1.userData.speed + currentY * 0.5
      particles1.rotation.y += particles1.userData.speed + currentX * 0.5
      particles2.rotation.x -= particles2.userData.speed + currentY * 0.3
      particles2.rotation.y -= particles2.userData.speed + currentX * 0.3
      particles3.rotation.x += particles3.userData.speed + currentY * 0.2
      particles3.rotation.y += particles3.userData.speed + currentX * 0.2

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize with debounce
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }, 100)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimeout)
      containerRef.current?.removeChild(renderer.domElement)
      scene.remove(particles1, particles2, particles3)
      particles1.geometry.dispose()
      particles1.material.dispose()
      particles2.geometry.dispose()
      particles2.material.dispose()
      particles3.geometry.dispose()
      particles3.material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 opacity-50"
      style={{ pointerEvents: "none" }}
    />
  )
} 