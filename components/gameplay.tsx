export default function Gameplay() {
  return (
    <section id="gameplay" className="py-20 px-4 bg-background relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/gta-v-intense-gameplay-action.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="gta-title text-5xl md:text-6xl mb-6 gradient-yellow-orange">PURE ACTION</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Experience the most immersive action-adventure ever created. Drive stolen vehicles, engage in intense
              firefights, and complete high-stakes missions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With cutting-edge graphics and seamless gameplay, every moment is unforgettable.
            </p>
          </div>
          <div
            className="aspect-video rounded-lg overflow-hidden border-2 border-secondary/50 relative group"
            style={{
              backgroundImage: 'url("/gta-v-gameplay.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-center justify-center group-hover:opacity-0 transition">
              <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition transform hover:scale-110 neon-glow">
                <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
