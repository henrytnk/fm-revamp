"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";

const services = [
  {
    num: "01",
    tag: "SEO · SEM · Social",
    title: "AI Growth Systems",
    sub: "COMPOUND REVENUE FROM OWNED CHANNELS",
    desc: "Marketing engines that learn. We deploy AI across acquisition, retention, and content so every dollar produces measurable lift — not just activity.",
    href: "/services/seo",
  },
  {
    num: "02",
    tag: "CRO · Analytics",
    title: "AI-Powered Conversion",
    sub: "HIGHER CONVERSION, BIGGER RETURN",
    desc: "Intelligent optimization that personalizes, tests, and improves every touchpoint in real time. Built for profit, not just traffic.",
    href: "/services/cro",
  },
  {
    num: "03",
    tag: "SEM · PPC",
    title: "Paid Media Intelligence",
    sub: "ZERO WASTE. MAXIMUM ROAS.",
    desc: "AI-managed paid campaigns across search, social, and display. Bids, budgets, and creative — optimized 24/7 so you don't have to.",
    href: "/services/sem",
  },
  {
    num: "04",
    tag: "Social Media",
    title: "Social Media Marketing",
    sub: "SOCIAL THAT ACTUALLY CONVERTS",
    desc: "Vanity metrics don't pay the bills. We build AI-informed social strategies that drive real engagement, qualified traffic, and measurable revenue.",
    href: "/services/smm",
  },
  {
    num: "05",
    tag: "Strategy · Planning",
    title: "Strategic Intelligence",
    sub: "INTELLIGENCE, NOT INSTINCT",
    desc: "Data-driven roadmaps built from competitive analysis, market signals, and AI modeling. Your growth strategy shouldn't rely on gut feel.",
    href: "/services/strategy",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="mb-16">
          <p className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase mb-4">
            02 · What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-black font-sans text-[#202020] leading-tight mb-4">
            Five systems. One mandate:<br />
            <span className="text-[#eeba2f] font-serif italic">turn AI into P&amp;L.</span>
          </h2>
        </AnimateOnScroll>

        {/* Services list */}
        <div className="flex flex-col divide-y divide-[#e5e5e5]">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.num} delay={i * 80}>
              <Link
                href={service.href}
                className="group flex flex-col md:flex-row md:items-center gap-4 py-8 -mx-4 px-4 rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-[#f4f4f0] hover:to-transparent border-l-2 border-transparent hover:border-[#eeba2f] hover:pl-6"
              >
                <div className="text-sm font-semibold text-[#eeba2f] w-16 shrink-0">{service.num}</div>
                <div className="text-xs font-semibold text-[#666] tracking-widest uppercase w-48 shrink-0">
                  {service.tag}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-[#ee5a2f] tracking-widest uppercase mb-1">
                    {service.sub}
                  </div>
                  <h3 className="text-xl font-bold text-[#202020] mb-2 group-hover:text-[#eeba2f] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed max-w-lg">{service.desc}</p>
                </div>
                <div className="text-[#eeba2f] font-semibold text-sm flex items-center gap-1 group-hover:gap-3 transition-all duration-300 shrink-0">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-10" delay={400}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#202020] font-semibold hover:text-[#eeba2f] transition-colors"
          >
            Explore all services →
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
