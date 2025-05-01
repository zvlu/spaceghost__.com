"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", name: "All Work" },
  { id: "blackwork", name: "Blackwork" },
  { id: "portraits", name: "Portraits" },
  { id: "custom", name: "Custom" },
]

const tattooWorks = [
  {
    id: 1,
    title: "Skull Design",
    category: "blackwork",
    image: "/images/tattoo1.png",
  },
  {
    id: 2,
    title: "Portrait",
    category: "portraits",
    image: "/images/tattoo2.png",
  },
  {
    id: 3,
    title: "Arm Sleeve",
    category: "custom",
    image: "/images/tattoo3.png",
  },
  {
    id: 4,
    title: "Rose Design",
    category: "blackwork",
    image: "/images/tattoo4.png",
  },
  {
    id: 5,
    title: "Native American Portrait",
    category: "portraits",
    image: "/images/tattoo5.png",
  },
  {
    id: 6,
    title: "Neck Piece",
    category: "custom",
    image: "/images/tattoo6.png",
  },
]

export default function FeaturedWork() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredWorks =
    selectedCategory === "all" ? tattooWorks : tattooWorks.filter((work) => work.category === selectedCategory)

  return (
    <div>
      <Tab.Group onChange={(index) => setSelectedCategory(categories[index].id)}>
        <Tab.List className="flex space-x-1 rounded-xl bg-purple-900/20 p-1 mb-8 max-w-md mx-auto">
          {categories.map((category) => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                cn(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-purple-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-purple-600 text-white shadow"
                    : "text-purple-100 hover:bg-purple-800/30 hover:text-white",
                )
              }
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {categories.map((category) => (
            <Tab.Panel key={category.id} className="focus:outline-none">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {filteredWorks.map((work) => (
                  <motion.div
                    key={work.id}
                    className="group relative overflow-hidden rounded-xl bg-black"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: work.id * 0.1 }}
                  >
                    <div className="aspect-square relative overflow-hidden rounded-xl">
                      <Image
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white">{work.title}</h3>
                        <p className="text-purple-300 capitalize">{work.category}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
