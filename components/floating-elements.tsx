"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

type FloatingObject = {
  id: number
  x: number
  y: number
  size: number
  speed: number
  rotation: number
  rotationSpeed: number
  type: "planet" | "star" | "astronaut" | "spaceship"
}

export default function FloatingElements() {
  const objectsRef = useRef<FloatingObject[]>([])

  useEffect(() => {
    // Generate random floating objects
    const objects: FloatingObject[] = []

    // Generate planets
    for (let i = 0; i < 3; i++) {
      objects.push({
        id: objects.length,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 60 + Math.random() * 100,
        speed: 0.5 + Math.random() * 1.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
        type: "planet",
      })
    }

    // Generate stars
    for (let i = 0; i < 30; i++) {
      objects.push({
        id: objects.length,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        speed: 0.2 + Math.random() * 0.8,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        type: "star",
      })
    }

    // Add astronaut
    objects.push({
      id: objects.length,
      x: 85,
      y: 15,
      size: 100,
      speed: 0.8,
      rotation: 15,
      rotationSpeed: 0.1,
      type: "astronaut",
    })

    // Add spaceship
    objects.push({
      id: objects.length,
      x: 10,
      y: 70,
      size: 80,
      speed: 1.2,
      rotation: -10,
      rotationSpeed: -0.05,
      type: "spaceship",
    })

    objectsRef.current = objects
  }, [])

  const renderObject = (obj: FloatingObject) => {
    const variants = {
      float: {
        x: [`${obj.x}%`, `${obj.x + obj.speed * 10}%`, `${obj.x}%`],
        y: [`${obj.y}%`, `${obj.y - obj.speed * 5}%`, `${obj.y}%`],
        rotate: [obj.rotation, obj.rotation + obj.rotationSpeed * 30, obj.rotation],
        transition: {
          duration: 10 + obj.speed * 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
    }

    let element

    switch (obj.type) {
      case "planet":
        element = (
          <div
            className="rounded-full bg-gradient-to-br from-purple-600 to-indigo-900 opacity-20"
            style={{ width: obj.size, height: obj.size }}
          />
        )
        break
      case "star":
        element = (
          <div
            className="rounded-full bg-white opacity-60"
            style={{
              width: obj.size,
              height: obj.size,
              boxShadow: `0 0 ${obj.size * 0.5}px ${obj.size * 0.3}px rgba(255, 255, 255, 0.8)`,
            }}
          />
        )
        break
      case "astronaut":
        element = (
          <div
            className="w-full h-full bg-contain bg-center bg-no-repeat opacity-30"
            style={{
              width: obj.size,
              height: obj.size,
              backgroundImage: `url('/images/astronaut.png')`,
            }}
          />
        )
        break
      case "spaceship":
        element = (
          <div
            className="w-full h-full bg-contain bg-center bg-no-repeat opacity-30"
            style={{
              width: obj.size,
              height: obj.size,
              backgroundImage: `url('/images/spaceship.png')`,
            }}
          />
        )
        break
    }

    return (
      <motion.div
        key={obj.id}
        className="absolute"
        style={{
          left: `${obj.x}%`,
          top: `${obj.y}%`,
          zIndex: 0,
        }}
        variants={variants}
        animate="float"
      >
        {element}
      </motion.div>
    )
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">{objectsRef.current.map(renderObject)}</div>
  )
}
