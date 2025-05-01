"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const calculateMovement = (axis: "x" | "y", factor = 20) => {
    const value = axis === "x" ? mousePosition.x : mousePosition.y
    const windowSize = axis === "x" ? window.innerWidth : window.innerHeight
    return (value - windowSize / 2) / factor
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax stars background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[url('/images/stars-bg.png')] bg-repeat opacity-50"
          style={{
            transform: `translateX(${calculateMovement("x", -40)}px) translateY(${calculateMovement("y", -40)}px)`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-purple-400">Spaceghostt</span>__
              <span className="block text-3xl md:text-5xl mt-2">Tattoo Artist</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Cosmic ink that transcends dimensions. Elevate your body art with designs inspired by the vastness of
              space.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/20">
                Explore Gallery
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            style={{
              transform: `translateX(${calculateMovement("x", 30)}px) translateY(${calculateMovement("y", 30)}px)`,
            }}
          >
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden border-4 border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.4)]">
              <Image
                src="/images/space-hero.png"
                alt="Space themed image with astronaut helmet"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30 shadow-lg">
              <p className="text-lg font-semibold">Booking: May/June</p>
              <p className="text-sm text-gray-400">Los Angeles</p>
              <p className="text-sm text-purple-400 mt-2">+1 (808) 726-9956</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
