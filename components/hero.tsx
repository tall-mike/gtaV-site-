"use client"

interface HeroProps {
  onContactClick: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/gta-v-cityscape-night-lights.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background z-1" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 inline-block">
          <span className="gta-subtitle text-primary text-sm tracking-widest">COMING SOON</span>
        </div>

        <h1 className="gta-title text-6xl md:text-7xl lg:text-8xl font-black mb-6 gradient-cyan-pink neon-glow">
          GTA V
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          The next evolution of Grand Theft Auto
        </p>

        <p className="text-4xl md:text-5xl gta-title text-accent mb-12 neon-glow">November 2026</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onContactClick}
            className="px-8 py-4 bg-primary text-primary-foreground rounded text-lg gta-title hover:shadow-lg hover:shadow-primary/50 transition transform hover:scale-105 neon-glow"
          >
            Get Notified
          </button>
          <a
            href="#features"
            className="px-8 py-4 border-2 border-secondary text-secondary rounded text-lg gta-title hover:bg-secondary/10 transition"
          >
            Explore
          </a>
        </div>
      </div>

      {/* Animated Bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
