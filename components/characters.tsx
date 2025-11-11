export default function Characters() {
  return (
    <section
      id='characters'
      className='py-20 px-4 bg-background relative overflow-hidden'
    >
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: 'url("/gta-v-characters-action.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      <div className='relative z-10 max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='gta-title text-5xl md:text-6xl mb-4 gradient-cyan-pink'>
            EPIC CHARACTERS
          </h2>
          <p className='text-muted-foreground text-lg'>
            Meet the legends behind the story
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {["Michael", "Trevor", "Franklin"].map((char) => (
            <div key={char} className='group relative'>
              <div className='bg-card rounded-lg p-8 border border-primary/30 hover:border-primary/80 transition overflow-hidden'>
                <div
                  className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300'
                  style={{
                    backgroundImage: 'url("/mikemadeit.webp")',
                    backgroundSize: "cover",
                  }}
                />
                <div className='relative z-10 aspect-square rounded mb-6 bg-muted flex items-center justify-center'>
                  <span className='text-4xl font-bold text-primary/50'>
                    {char[0]}
                  </span>
                </div>
                <h3 className='gta-title text-2xl mb-2 text-secondary'>
                  {char}
                </h3>
                <p className='text-muted-foreground'>
                  Embark on an unforgettable journey with {char} in this
                  action-packed thriller.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
