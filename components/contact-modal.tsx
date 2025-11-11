"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-card border-2 border-primary rounded-lg p-8 max-w-md w-full relative shadow-2xl shadow-primary/50"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition"
        >
          <X size={24} />
        </button>

        <h2 className="gta-title text-3xl mb-2 gradient-cyan-pink">Contact Us</h2>
        <p className="text-muted-foreground mb-6">Get in touch with our team</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-background border border-primary/30 rounded px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-background border border-primary/30 rounded px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-background border border-primary/30 rounded px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition resize-none h-28"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-secondary text-secondary-foreground py-2 rounded font-semibold gta-title hover:bg-secondary/80 transition neon-glow"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
