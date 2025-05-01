"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"

export default function BookingSection() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Booking request submitted! We'll contact you to confirm.")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <Card className="bg-black/60 backdrop-blur-md border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-2xl">Book Your Appointment</CardTitle>
            <CardDescription>Select your preferred date and time for your cosmic ink session</CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <div className="bg-purple-900/20 p-4 rounded-lg">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="mx-auto"
                    disabled={(date) => {
                      // Disable past dates and Sundays
                      return date < new Date() || date.getDay() === 0
                    }}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"].map((time) => (
                    <Button key={time} variant="outline" className="border-purple-500/30 hover:bg-purple-900/30">
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Your name" className="bg-purple-900/20 border-purple-500/30" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-purple-900/20 border-purple-500/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      placeholder="Your phone number"
                      className="bg-purple-900/20 border-purple-500/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="tattoo-type" className="text-sm font-medium">
                      Tattoo Type
                    </label>
                    <Select>
                      <SelectTrigger className="bg-purple-900/20 border-purple-500/30">
                        <SelectValue placeholder="Select tattoo type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="blackwork">Blackwork</SelectItem>
                        <SelectItem value="portrait">Portrait</SelectItem>
                        <SelectItem value="custom">Custom Design</SelectItem>
                        <SelectItem value="coverup">Cover Up</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">
                      Description
                    </label>
                    <Textarea
                      id="description"
                      placeholder="Describe your tattoo idea"
                      className="bg-purple-900/20 border-purple-500/30 min-h-[100px]"
                    />
                  </div>
                </div>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 && (
              <Button variant="outline" onClick={handlePrevStep}>
                Previous
              </Button>
            )}
            {step < 2 ? (
              <Button className="ml-auto bg-purple-600 hover:bg-purple-700" onClick={handleNextStep}>
                Next
              </Button>
            ) : (
              <Button className="ml-auto bg-purple-600 hover:bg-purple-700" onClick={handleSubmit}>
                Submit Booking
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <Card className="bg-black/60 backdrop-blur-md border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-2xl">Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-4">
              <MapPin className="text-purple-400 mt-1" />
              <div>
                <h4 className="font-medium">Space Ghost Tattoo Studio</h4>
                <p className="text-gray-400">123 Cosmic Avenue</p>
                <p className="text-gray-400">Los Angeles, CA 90001</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/60 backdrop-blur-md border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-2xl">Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-4">
              <Clock className="text-purple-400 mt-1" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span>10:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span>12:00 PM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-red-400">Closed</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/60 backdrop-blur-md border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-2xl">Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              For urgent inquiries or to discuss custom designs, please contact us directly:
            </p>
            <div className="bg-purple-900/30 p-4 rounded-lg text-center">
              <p className="text-xl font-semibold text-purple-300">+1 (808) 726-9956</p>
              <p className="text-sm text-gray-400 mt-1">Text "SPACE" or DM on Instagram @spaceghostt__</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
