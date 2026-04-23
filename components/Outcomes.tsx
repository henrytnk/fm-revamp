"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import WordsRotateIn from "./WordsRotateIn";

const outcomes = [
  {
    type: "ENTERPRISE PLATFORM",
    metric: "3.4×",
    metricLabel: "faster content velocity",
    desc: "AI-assisted production pipeline replaced a 12-person editorial workflow.",
  },
  {
    type: "SPECIALTY RETAILER",
    metric: "+28%",
    metricLabel: "revenue growth",
    desc: "Personalized strategy and predictive optimization on existing traffic.",
  },
  {
    type: "B2B RESOURCE HUB",
    metric: "−62%",
    metricLabel: "cost per engaged user",
    desc: "AI-optimized acquisition mix across paid, organic, and retention automations.",
  },
];

export default function Outcomes() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="mb-16">
          <p className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase mb-4">
            04 · Outcomes
          </p>
          <WordsRotateIn>
            <h2 className="text-4xl md:text-5xl font-black font-sans text-[#202020] leading-tight">
              What it looks like when{" "}
              <span className="text-[#eeba2f] font-serif italic">intelligence shows up</span> in the numbers.
            </h2>
          </WordsRotateIn>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((o, i) => (
            <AnimateOnScroll key={o.type} delay={i * 120}>
              <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] border-t-2 border-t-[#eeba2f] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:border-t-[#eeba2f] transition-all duration-300">
                <div className="text-xs font-semibold text-[#666] tracking-widest uppercase mb-6">
                  {o.type}
                </div>
                <div className="text-5xl font-black text-[#eeba2f] mb-2">{o.metric}</div>
                <div className="text-sm font-semibold text-[#202020] mb-4">{o.metricLabel}</div>
                <p className="text-sm text-[#666] leading-relaxed">{o.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
