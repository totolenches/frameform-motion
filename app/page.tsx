"use client";

import Lenis from "lenis";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll
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
    <main className="relative bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8">

          <h1 className="text-sm tracking-[0.4em] uppercase">
            FRAMEFORM
          </h1>

          <div className="hidden md:flex gap-10 text-sm uppercase tracking-[0.25em] text-zinc-300">
            <a href="#">Work</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center text-center px-6">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10">

          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-400">
            Architecture • Automotive • Brand Films
          </p>

          <h1 className="text-6xl md:text-8xl font-light tracking-[0.3em]">
            FRAMEFORM
          </h1>

          <p className="mt-6 max-w-xl text-zinc-300 text-sm md:text-base leading-relaxed mx-auto">
            Cinematic drone films and luxury visual storytelling
            crafted for architecture, automotive and modern brands.
          </p>

          <button className="mt-10 border border-white/30 px-8 py-4 uppercase tracking-[0.3em] text-sm transition hover:bg-white hover:text-black">
            Enter Experience
          </button>

        </div>
      </section>

      {/* SECOND SECTION */}
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

            {/* Image */}
            <div className="group overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000&auto=format&fit=crop"
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Text */}
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