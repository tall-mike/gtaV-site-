export default function Pink() {
  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #ff006e 0%, #ff1493 50%, #ff69b4 100%)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/neon-pink-retro-aesthetic.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="gta-title text-6xl md:text-7xl mb-6 drop-shadow-lg">STYLE & ATTITUDE</h2>
        <p className="text-xl md:text-2xl mb-8 drop-shadow font-light">
          GTA V isn't just a game—it's a cultural phenomenon. Express yourself with limitless customization options and
          create your own legend in the streets.
        </p>
        <div className="inline-block">
          <button className="px-10 py-4 bg-white/20 backdrop-blur text-white border-2 border-white rounded text-lg gta-title hover:bg-white/40 transition">
            Join the Culture
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 text-white/20 text-8xl font-bold">♦</div>
      <div className="absolute bottom-10 left-10 text-white/20 text-8xl font-bold">♦</div>
    </section>
  )
}
