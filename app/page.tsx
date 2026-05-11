export default function DroneStudioLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop"
          alt="Cinematic Architecture"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <header className="absolute top-0 left-0 w-full z-20 px-8 md:px-14 py-10 flex items-center justify-between">
          <div>
            <h1 className="text-2xl tracking-[0.35em] font-light">
              FRAMEFORM
            </h1>

            <p className="text-sm tracking-[0.5em] text-zinc-300 mt-1">
              MOTION
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-12 text-sm tracking-[0.25em] uppercase text-zinc-200">
            <a href="#" className="hover:text-white transition">
              Work
            </a>

            <a href="#" className="hover:text-white transition">
              About
            </a>

            <a href="#" className="hover:text-white transition">
              Services
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </header>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="uppercase tracking-[0.45em] text-zinc-300 text-sm mb-8">
            Cinematic Visual Storytelling
          </p>

          <h2 className="text-6xl md:text-[10rem] font-extralight tracking-[0.22em] leading-none">
            FRAMEFORM
          </h2>

          <h3 className="text-2xl md:text-5xl tracking-[0.7em] font-extralight mt-4 text-zinc-200">
            MOTION
          </h3>

          <div className="w-20 h-px bg-white/40 my-10" />

          <p className="uppercase tracking-[0.35em] text-zinc-300 text-sm md:text-base">
            Architecture • Automotive • Brand Films
          </p>

          <button className="mt-14 border border-white/30 px-10 py-4 uppercase tracking-[0.3em] text-sm hover:bg-white hover:text-black transition duration-500 rounded-full">
            Enter Experience
          </button>

          <div className="absolute bottom-12 flex flex-col items-center gap-4 text-zinc-300">
            <div className="w-[1px] h-14 bg-white/30" />

            <p className="uppercase tracking-[0.3em] text-xs">
              Scroll
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}