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

    // Create star field with twinkling effects
    const createStarSystem = (count: number, size: number, color: string, spread: number) => {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(count * 3)
      const colors = new Float32Array(count * 3)
      const colorObj = new THREE.Color(color)
      const opacities = new Float32Array(count)
      const twinkleSpeeds = new Float32Array(count)

      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        // Create spherical distribution for galaxy
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const radius = spread * Math.cbrt(Math.random())

        positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[i3 + 2] = radius * Math.cos(phi)

        // Galaxy colors: whites, blues, purples
        colors[i3] = colorObj.r + (Math.random() - 0.5) * 0.2
        colors[i3 + 1] = colorObj.g + (Math.random() - 0.5) * 0.2
        colors[i3 + 2] = colorObj.b + (Math.random() - 0.5) * 0.2

        opacities[i] = 0.3 + Math.random() * 0.7
        twinkleSpeeds[i] = 0.01 + Math.random() * 0.02
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

      const material = new THREE.PointsMaterial({
        size,
        vertexColors: true,
        transparent: true,
        opacity: 1.0,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      })

      const stars = new THREE.Points(geometry, material)
      stars.userData.opacities = opacities
      stars.userData.twinkleSpeeds = twinkleSpeeds
      stars.userData.initialOpacities = opacities.slice()
      return stars
    }

    // Create multiple star layers for galaxy effect
    const stars1 = createStarSystem(3000, 0.02, "#ffffff", 10) // White stars - main field
    const stars2 = createStarSystem(2000, 0.015, "#87ceeb", 8) // Light blue - distant
    const stars3 = createStarSystem(1500, 0.025, "#9370db", 6) // Purple - closer

    scene.add(stars1, stars2, stars3)

    // Comet system
    const comets: { position: THREE.Vector3; velocity: THREE.Vector3; lifetime: number; point: THREE.Points }[] = []
    const cometGeometry = new THREE.BufferGeometry()
    cometGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array([0, 0, 0]), 3))
    const cometMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1, transparent: true, opacity: 1.0 })

    const createComet = () => {
      const startX = (Math.random() - 0.5) * 20
      const startY = (Math.random() - 0.5) * 20
      const startZ = -5

      const point = new THREE.Points(cometGeometry.clone(), cometMaterial.clone())
      point.position.set(startX, startY, startZ)
      scene.add(point)

      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        0.3
      )

      comets.push({
        position: point.position,
        velocity,
        lifetime: 200, // frames
        point
      })
    }

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

    // Animation with galaxy effects
    const animate = () => {
      requestAnimationFrame(animate)

      // Smooth mouse movement with interpolation
      targetX = mouseX * 0.001
      targetY = mouseY * 0.001
      currentX += (targetX - currentX) * 0.05
      currentY += (targetY - currentY) * 0.05

      // Twinkle stars
      const twinkleStars = (stars: THREE.Points) => {
        const opacities = stars.userData.opacities as Float32Array
        const twinkleSpeeds = stars.userData.twinkleSpeeds as Float32Array
        const initialOpacities = stars.userData.initialOpacities as Float32Array

        for (let i = 0; i < opacities.length; i++) {
          opacities[i] = initialOpacities[i] + Math.sin(Date.now() * twinkleSpeeds[i]) * 0.3
          opacities[i] = Math.max(0.1, Math.min(1.0, opacities[i]))
        }

        (stars.material as THREE.PointsMaterial).opacity = 1.0 // Update if needed, but individual opacities not directly supported
      }

      twinkleStars(stars1)
      twinkleStars(stars2)
      twinkleStars(stars3)

      // Rotate stars with mouse interaction for galaxy movement
      stars1.rotation.x += 0.0002 + currentY * 0.3
      stars1.rotation.y += 0.0002 + currentX * 0.3
      stars2.rotation.x -= 0.0001 + currentY * 0.2
      stars2.rotation.y -= 0.0001 + currentX * 0.2
      stars3.rotation.x += 0.0003 + currentY * 0.1
      stars3.rotation.y += 0.0003 + currentX * 0.1

      // Update comets
      for (let i = comets.length - 1; i >= 0; i--) {
        const comet = comets[i]
        comet.point.position.add(comet.velocity)
        comet.lifetime--

        // Fade out
        (comet.point.material as THREE.PointsMaterial).opacity = comet.lifetime / 200

        if (comet.lifetime <= 0) {
          scene.remove(comet.point)
          comet.point.geometry.dispose()
          ;(comet.point.material as THREE.Material).dispose()
          comets.splice(i, 1)
        }
      }

      // Randomly create comets
      if (Math.random() < 0.005) { // Adjust probability for comet frequency
        createComet()
      }

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
      scene.remove(stars1, stars2, stars3)
      stars1.geometry.dispose()
      ;(stars1.material as THREE.Material).dispose()
      stars2.geometry.dispose()
      ;(stars2.material as THREE.Material).dispose()
      stars3.geometry.dispose()
      ;(stars3.material as THREE.Material).dispose()
      // Dispose comets
      comets.forEach(comet => {
        scene.remove(comet.point)
        comet.point.geometry.dispose()
        ;(comet.point.material as THREE.Material).dispose()
      })
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