"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="gta-title text-2xl text-primary mb-4">GTA V</h3>
            <p className="text-muted-foreground text-sm">
              The ultimate open-world action adventure coming November 2026.
            </p>
          </div>

          <div>
            <h4 className="gta-title text-lg mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Media
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Newswire
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="gta-title text-lg mb-4 text-accent">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Forums
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="gta-title text-lg mb-4 text-secondary">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>info@gta5.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-secondary" />
                <span>1-800-GTA-5NOW</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-accent" />
                <span>Rockstar HQ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Rockstar Games. All rights reserved. | GTA V Coming November 2026</p>
        </div>
      </div>
    </footer>
  )
}
