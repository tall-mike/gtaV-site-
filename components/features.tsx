export default function Features() {
  const features = [
    { title: "Open World", desc: "Explore vast, detailed environments" },
    { title: "4K Graphics", desc: "Stunning visual fidelity" },
    { title: "Multiplayer", desc: "Play with friends online" },
    { title: "Customization", desc: "Personalize your experience" },
    { title: "Dynamic Weather", desc: "Living, breathing world" },
    { title: "Immersive Story", desc: "Unforgettable narrative" },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-card relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/gta-gaming-features.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="gta-title text-5xl md:text-6xl mb-16 text-center gradient-green-cyan">FEATURES</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-background/50 backdrop-blur border border-accent/30 rounded-lg p-8 hover:border-accent/80 transition transform hover:scale-105"
            >
              <h3 className="gta-subtitle text-xl mb-3 text-accent neon-glow">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
