import HeroSection from "@/components/hero-section"
import FloatingElements from "@/components/floating-elements"
import FeaturedWork from "@/components/featured-work"
import BookingSection from "@/components/booking-section"
import MerchSection from "@/components/merch-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Animated background elements - placed first to ensure they're in the background */}
      <FloatingElements />

      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* Featured Work */}
      <section id="work" className="container py-20 relative z-10">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
          <span className="text-purple-400">Cosmic</span> Creations
        </h2>
        <FeaturedWork />
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50 z-0"></div>
        <div className="container relative z-10">
          <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
            Book Your <span className="text-purple-400">Stellar</span> Session
          </h2>
          <BookingSection />
        </div>
      </section>

      {/* Merch Section */}
      <section id="merch" className="container py-20 relative z-10">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
          <span className="text-purple-400">Galactic</span> Merchandise
        </h2>
        <MerchSection />
      </section>

      {/* Contact Section */}
      <div className="relative z-10">
        <ContactSection />
      </div>
    </main>
  )
}
