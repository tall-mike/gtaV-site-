"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Characters from "@/components/characters"
import Features from "@/components/features"
import Gameplay from "@/components/gameplay"
import Pink from "@/components/pink-section"
import Releases from "@/components/releases"
import Footer from "@/components/footer"
import ContactModal from "@/components/contact-modal"

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onContactClick={() => setShowContactModal(true)} />
      <Hero onContactClick={() => setShowContactModal(true)} />
      <Characters />
      <Features />
      <Gameplay />
      <Pink />
      <Releases />
      <Footer />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  )
}
