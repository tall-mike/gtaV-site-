export default function Releases() {
  return (
    <section id="release" className="py-20 px-4 bg-card relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/release-date-calendar.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="gta-title text-5xl md:text-6xl mb-4 gradient-cyan-pink">RELEASE SCHEDULE</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background/60 backdrop-blur border-2 border-primary rounded-lg p-8 hover:border-secondary transition">
            <div className="text-5xl font-bold text-primary mb-4">PC & Console</div>
            <p className="text-2xl gta-title text-accent mb-2">November 2026</p>
            <p className="text-muted-foreground">Available on PlayStation 5, Xbox Series X|S, and PC</p>
          </div>
          <div className="bg-background/60 backdrop-blur border-2 border-secondary rounded-lg p-8 hover:border-accent transition">
            <div className="text-5xl font-bold text-secondary mb-4">GTA Online</div>
            <p className="text-2xl gta-title text-accent mb-2">December 2026</p>
            <p className="text-muted-foreground">Join millions in our multiplayer open-world</p>
          </div>
        </div>
      </div>
    </section>
  )
}
