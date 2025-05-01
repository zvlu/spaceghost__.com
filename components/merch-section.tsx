"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"

const merchItems = [
  {
    id: 1,
    name: "Cosmic Skull Tee",
    price: 35,
    image: "/images/merch1.png",
    category: "clothing",
    rating: 4.8,
    reviews: 24,
    isNew: true,
  },
  {
    id: 2,
    name: "Space Ghost Hoodie",
    price: 65,
    image: "/images/merch2.png",
    category: "clothing",
    rating: 4.9,
    reviews: 36,
    isNew: true,
  },
  {
    id: 3,
    name: "Astronaut Art Print",
    price: 25,
    image: "/images/merch3.png",
    category: "art",
    rating: 4.7,
    reviews: 18,
    isNew: false,
  },
  {
    id: 4,
    name: "Galaxy Snapback",
    price: 30,
    image: "/images/merch4.png",
    category: "accessories",
    rating: 4.6,
    reviews: 12,
    isNew: false,
  },
]

export default function MerchSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {merchItems.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: item.id * 0.1 }}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
          className="group"
        >
          <Card className="bg-black border-purple-500/30 overflow-hidden h-full flex flex-col">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {item.isNew && <Badge className="absolute top-2 right-2 bg-purple-600">New</Badge>}
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{item.name}</CardTitle>
              <CardDescription className="capitalize">{item.category}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{item.rating}</span>
                <span className="text-sm text-gray-400">({item.reviews} reviews)</span>
              </div>
            </CardContent>
            <CardFooter className="pt-2 mt-auto">
              <div className="flex items-center justify-between w-full">
                <span className="text-xl font-bold">${item.price}</span>
                <Button
                  size="sm"
                  className={`bg-purple-600 hover:bg-purple-700 transition-all duration-300 ${
                    hoveredItem === item.id ? "w-auto" : "w-10"
                  }`}
                >
                  <ShoppingCart className="h-4 w-4 mr-0 group-hover:mr-2" />
                  <span
                    className={`overflow-hidden transition-all duration-300 ${
                      hoveredItem === item.id ? "w-auto opacity-100" : "w-0 opacity-0"
                    }`}
                  >
                    Add to Cart
                  </span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
