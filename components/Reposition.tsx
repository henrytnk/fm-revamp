"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import WordsRotateIn from "./WordsRotateIn";

const retired = [
  { from: "Billable hours", to: "Outcome pricing" },
  { from: "Campaign theater", to: "Compounding systems" },
  { from: "AI pilots that die", to: "Shipped, owned, measured" },
  { from: "Reports you ignore", to: "Dashboards your CFO reads" },
];

export default function Reposition() {
  return (
    <section className="bg-[#202020] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="mb-16">
          <p className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase mb-4">
            03 · The Reposition
          </p>
          <WordsRotateIn>
            <h2 className="text-4xl md:text-5xl font-black font-sans text-white leading-tight max-w-2xl">
              The agency model is burned out.
              <span className="text-[#eeba2f] font-serif italic">We rebuilt it around AI</span> — and your P&amp;L.
            </h2>
          </WordsRotateIn>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-16">
            Marketing spend has never been higher. Attention has never been lower. The difference
            between companies that win the next decade and ones that fade won't be creative — it'll
            be intelligence, deployed.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {retired.map((item, i) => (
            <AnimateOnScroll key={item.from} delay={i * 100}>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
                <div className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-2">
                  We Retired
                </div>
                <div className="text-lg font-bold text-white/50 line-through decoration-[#ee5a2f] mb-5">
                  {item.from}
                </div>
                <div className="w-8 h-px bg-[#eeba2f]/40 mb-5" />
                <div className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase mb-2">
                  In Favor Of
                </div>
                <div className="text-xl font-bold text-white">{item.to}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
