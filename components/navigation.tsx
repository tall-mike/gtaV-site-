"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  onContactClick: () => void
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-primary/20">
      <div className="px-6 py-4 flex justify-between items-center">
        <h1 className="gta-title text-3xl text-primary cursor-pointer">GTA V</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#features" className="text-foreground hover:text-primary transition">
            Features
          </a>
          <a href="#gameplay" className="text-foreground hover:text-primary transition">
            Gameplay
          </a>
          <a href="#release" className="text-foreground hover:text-secondary transition">
            Release
          </a>
          <button
            onClick={onContactClick}
            className="px-6 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80 transition gta-title"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary hover:text-accent transition">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed right-0 top-16 h-screen w-64 bg-card border-l border-primary/20 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 p-8">
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="text-lg text-foreground hover:text-primary transition gta-subtitle"
          >
            Features
          </a>
          <a
            href="#gameplay"
            onClick={() => setIsOpen(false)}
            className="text-lg text-foreground hover:text-primary transition gta-subtitle"
          >
            Gameplay
          </a>
          <a
            href="#release"
            onClick={() => setIsOpen(false)}
            className="text-lg text-foreground hover:text-primary transition gta-subtitle"
          >
            Release
          </a>
          <button
            onClick={() => {
              onContactClick()
              setIsOpen(false)
            }}
            className="px-6 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80 transition gta-title"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  )
}
