"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WordsRotateIn from "./WordsRotateIn";

const clients = [
  { name: "PepsiCo", src: "https://media.base44.com/images/public/69e6c4bd9bbd15c86a9a4b38/7c2ebee46_image.png" },
  { name: "Transcore", src: "https://media.base44.com/images/public/69e6c4bd9bbd15c86a9a4b38/61e429771_image.png" },
  { name: "CITGO", src: "https://media.base44.com/images/public/69e6c4bd9bbd15c86a9a4b38/205fec2dc_image.png" },
  { name: "Portacool", src: "https://media.base44.com/images/public/69e6c4bd9bbd15c86a9a4b38/5ceeef5bf_image.png" },
  { name: "Blink", src: "https://companieslogo.com/img/orig/BLNK_BIG-e55db701.png?t=1720244491" },
  { name: "Northern Reflections", src: "https://media.base44.com/images/public/69e6c4bd9bbd15c86a9a4b38/de5dc611b_image.png" },
  { name: "Sentech", src: "https://media.base44.com/images/public/69e6c4bd9bbd15c86a9a4b38/91cfda926_image.png" },
  { name: "Cactus Life Sciences", src: "https://media.base44.com/images/public/69e6c4bd9bbd15c86a9a4b38/afa88c46a_image.png" },
  { name: "Lammes", src: "https://media.base44.com/images/public/69e6c4bd9bbd15c86a9a4b38/811331bf4_image.png" },
  { name: "Solnexus", src: "https://media.base44.com/images/public/69e6c4bd9bbd15c86a9a4b38/876f14635_image.png" },
  { name: "EliteCEU", src: "https://media.base44.com/images/public/69e6c4bd9bbd15c86a9a4b38/afc229c76_image.png" },
  { name: "Barbara Bush Foundation", src: "https://media.base44.com/images/public/69e6c4bd9bbd15c86a9a4b38/73ae57c73_image.png" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#202020]">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(238,186,47,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(238,186,47,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(238,186,47,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-20 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#eeba2f]/30 bg-[#eeba2f]/10 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#eeba2f] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#eeba2f]" />
          </span>
          <span className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase">
            AI Enablement · Since 2008
          </span>
        </motion.div>

        {/* Headline */}
        <WordsRotateIn immediate={true} delay={200} className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-sans text-white leading-[1.05] tracking-tight">
            We don&apos;t sell hours.
            <br />
            <span className="text-[#eeba2f] font-serif italic">We sell profit</span>
            <br />
            &amp; growth.
          </h1>
        </WordsRotateIn>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed mb-10"
        >
          Fahrenheit is an AI enablement partner for companies ready to turn intelligence into
          revenue. We design the systems, deploy the models, and operate the stack — measured
          in outcomes, not deliverables.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center mb-12"
        >
          {[
            { value: "18+", label: "YEARS BUILDING" },
            { value: "350+", label: "GLOBAL CLIENTS" },
            { value: "1000+", label: "CAMPAIGNS MANAGED" },
          ].map((stat, i, arr) => (
            <div key={stat.label} className={`text-center px-8 md:px-14 ${i < arr.length - 1 ? "border-r border-white/10" : ""}`}>
              <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs font-semibold text-white/40 tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#eeba2f] hover:bg-[#d4a528] text-[#202020] font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(238,186,47,0.35)] text-sm"
          >
            Book a Free Strategy Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 font-medium text-sm"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-8">
            Trusted Where Performance Is Measured
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#eeba2f]/40 to-transparent mx-auto mb-8" />
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
            {clients.slice(0, 8).map((client) => (
              <div key={client.name} className="opacity-50 hover:opacity-80 transition-opacity">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={100}
                  height={40}
                  className="h-8 w-auto object-contain filter grayscale brightness-[2]"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
