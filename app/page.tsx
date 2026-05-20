"use client";

import Lenis from "lenis";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    const lenis = new Lenis({
  duration: 3.5,
  smoothWheel: true,
  lerp: 0.06,
});

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

    {/* Logo */}
    <h1 className="text-sm tracking-[0.5em] uppercase">
      FRAMEFORM
    </h1>

    {/* Links */}
    <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.3em] text-zinc-300">
      <a href="#work" className="hover:text-white transition">
        Work
      </a>

      <a href="#services" className="hover:text-white transition">
        Services
      </a>

      <a href="#contact" className="hover:text-white transition">
        Contact
      </a>
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
      <motion.section
  id="work"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.9,
    ease: "easeOut",
  },
}}
  transition={{ duration: 1.2 }}
  viewport={{ once: true, amount: 0.3 }}
  className="relative min-h-screen bg-zinc-95n0 px-10 py-32"
>

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
      </motion.section>
{/* SHOWREEL SECTION */}X
<section
  id="services"
  className="relative h-screen overflow-hidden"
>

  {/* Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/videos/showreel.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

    <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-300">
      Visual Storytelling
    </p>

    <h2 className="max-w-5xl text-5xl md:text-7xl font-light leading-tight">
      Every frame should
      <br />
      feel unforgettable.
    </h2>

    <button className="mt-10 border border-white/30 px-8 py-4 uppercase tracking-[0.3em] text-sm transition hover:bg-white hover:text-black">
      Play Reel
    </button>

  </div>

</section>
{/* SERVICES */}
<motion.section className="relative bg-black px-10 py-32">

  <div className="mx-auto max-w-7xl">

    <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
      Services
    </p>

    <h2 className="mb-20 text-5xl md:text-7xl font-light tracking-[0.15em]">
      Crafted for
      <br />
      cinematic impact.
    </h2>

    <div className="grid gap-8 md:grid-cols-3">

      {/* CARD 1 */}
      <div className="group rounded-3xl border border-white/10 bg-zinc-950 p-10 transition duration-500 hover:-translate-y-2 hover:border-white/30">

        <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
          01
        </p>

        <h3 className="mb-6 text-3xl font-light">
          Drone Films
        </h3>

        <p className="leading-relaxed text-zinc-500">
          Cinematic aerial visuals crafted to create immersive
          visual experiences.
        </p>

      </div>

      {/* CARD 2 */}
      <div className="group rounded-3xl border border-white/10 bg-zinc-950 p-10 transition duration-500 hover:-translate-y-2 hover:border-white/30">

        <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
          02
        </p>

        <h3 className="mb-6 text-3xl font-light">
          Architecture
        </h3>

        <p className="leading-relaxed text-zinc-500">
          Modern architectural storytelling designed with motion,
          atmosphere and precision.
        </p>

      </div>

      {/* CARD 3 */}
      <div className="group rounded-3xl border border-white/10 bg-zinc-950 p-10 transition duration-500 hover:-translate-y-2 hover:border-white/30">

        <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
          03
        </p>

        <h3 className="mb-6 text-3xl font-light">
          Automotive
        </h3>

        <p className="leading-relaxed text-zinc-500">
          Dynamic automotive visuals with cinematic movement,
          energy and premium presentation.
        </p>

      </div>

    </div>

  </div>

</motion.section>
 {/* CONTACT */}
<motion.section
  id="contact"
  className="relative overflow-hidden bg-zinc-950 px-10 py-40"
>

  <div className="mx-auto max-w-5xl text-center">

    <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
      Contact
    </p>

    <h2 className="text-5xl md:text-7xl font-light leading-tight tracking-[0.15em]">
      Let’s create
      <br />
      something cinematic.
    </h2>

    <p className="mx-auto mt-10 max-w-2xl text-zinc-500 leading-relaxed">
      Available for architecture, automotive and premium
      visual storytelling projects worldwide.
    </p>

    <div className="mt-16 flex flex-col items-center gap-6 md:flex-row md:justify-center">

      <a
        href="mailto:hello@frameform.com"
        className="border border-white/20 px-8 py-4 uppercase tracking-[0.3em] text-sm transition hover:bg-white hover:text-black"
      >
        Email
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        className="text-sm uppercase tracking-[0.3em] text-zinc-400 transition hover:text-white"
      >
        Instagram
      </a>

    </div>

  </div>

</motion.section>
    </main>
  );
}