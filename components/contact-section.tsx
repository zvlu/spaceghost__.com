"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Mail, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-black/50 z-0"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            <span className="text-purple-400">Contact</span> The Void
          </h2>
          <p className="text-xl text-gray-300">
            Have questions about tattoos, merchandise, or want to discuss a custom design? Reach out and let's create
            something cosmic together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="contact-name" placeholder="Your name" className="bg-purple-900/20 border-purple-500/30" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="Your email"
                    className="bg-purple-900/20 border-purple-500/30"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    placeholder="Your message"
                    className="bg-purple-900/20 border-purple-500/30 min-h-[150px]"
                  />
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-purple-300">+1 (808) 726-9956</p>
                    <p className="text-sm text-gray-400 mt-1">Text "SPACE" for faster response</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-purple-300">contact@spaceghosttattoo.com</p>
                    <p className="text-sm text-gray-400 mt-1">For bookings and inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Instagram</h4>
                    <p className="text-purple-300">@spaceghostt__</p>
                    <p className="text-sm text-gray-400 mt-1">DM for quick responses</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-purple-500/30">
                <h4 className="font-medium mb-4">Studio Hours</h4>
                <div className="space-y-2 text-sm">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
