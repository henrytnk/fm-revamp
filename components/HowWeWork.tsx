"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    num: "01",
    title: "Diagnose",
    desc: "Map the P&L to the workflows. Identify where AI creates leverage — and where it doesn't.",
  },
  {
    num: "02",
    title: "Deploy",
    desc: "Ship working systems in weeks, not quarters. Models, integrations, strategy — production-grade from day one.",
  },
  {
    num: "03",
    title: "Scale",
    desc: "Operate, measure, and compound. Outcomes reviewed monthly against revenue and efficiency targets.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#202020] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="mb-16">
          <p className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase mb-4">
            05 · How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-black font-sans text-white leading-tight">
            A short engagement.{" "}
            <span className="text-[#eeba2f] font-serif italic">A long runway.</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.num} delay={i * 120}>
              <div className="relative">
                <div className="text-7xl font-black text-white/5 leading-none mb-4">{step.num}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
