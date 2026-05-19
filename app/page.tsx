"use client";
import Lenis from "lenis";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
}, []);
  return (
    <main className="relative bg-black text-white">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6">
        
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-400">
          Architecture • Automotive • Brand Films
        </p>

        <h1 className="text-6xl md:text-8xl font-light tracking-[0.3em]">
          FRAMEFORM
        </h1>

        <p className="mt-6 max-w-xl text-zinc-300 text-sm md:text-base leading-relaxed">
          Cinematic drone films and luxury visual storytelling
          crafted for architecture, automotive and modern brands.
        </p>

        <button className="mt-10 border border-white/30 px-8 py-4 uppercase tracking-[0.3em] text-sm transition hover:bg-white hover:text-black">
          Enter Experience
        </button>

      </section>
<section className="relative min-h-screen bg-zinc-950 px-10 py-32">
  
  <div className="mx-auto max-w-6xl">
    
    <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
      Selected Work
    </p>

    <h2 className="mb-20 text-5xl md:text-7xl font-light tracking-[0.15em]">
      Cinematic
      <br />
      Experiences
    </h2>

    <div className="grid gap-8 md:grid-cols-2">
      
      <div className="group overflow-hidden rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop"
          className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-center">
        <p className="mb-6 text-zinc-400 uppercase tracking-[0.3em] text-sm">
          Architecture Film
        </p>

        <h3 className="mb-8 text-4xl font-light">
          Modern spaces deserve cinematic storytelling.
        </h3>

        <p className="max-w-lg text-zinc-500 leading-relaxed">
          Luxury drone cinematography crafted for premium
          architecture, real estate and modern visual branding.
        </p>
      </div>

    </div>

  </div>

</section>
    </main>
  );
}