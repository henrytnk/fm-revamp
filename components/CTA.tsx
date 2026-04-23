"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";
import WordsRotateIn from "./WordsRotateIn";

export default function CTA() {
  return (
    <section className="bg-[#fafaf8] py-24 md:py-32 border-t border-[#e5e5e5]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#eeba2f]/60 to-transparent mx-auto mb-10" />
          <p className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase mb-4">
            Ready When You Are
          </p>
          <WordsRotateIn className="mb-6">
            <h2 className="text-4xl md:text-5xl font-black font-sans text-[#202020] leading-tight">
              Bring us a business problem.
              <br />
              <span className="text-[#eeba2f] font-serif italic">We&apos;ll bring the AI.</span>
            </h2>
          </WordsRotateIn>
          <p className="text-lg text-[#666] leading-relaxed mb-10 max-w-xl mx-auto">
            Month-to-month retainers starting at $1,500. A 30-minute strategy call is free — you&apos;ll
            leave with a working hypothesis even if we never work together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#eeba2f] hover:bg-[#d4a528] text-[#202020] font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(238,186,47,0.35)]"
            >
              Book a strategy call ↗
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center px-8 py-4 text-[#202020] hover:text-[#eeba2f] border border-[#e5e5e5] hover:border-[#eeba2f] rounded-xl transition-all duration-300 font-medium"
            >
              See our work
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
