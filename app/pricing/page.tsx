import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Pricing — Fahrenheit Marketing",
  description: "Month-to-month retainers starting at $1,500. No contracts. Cancel anytime.",
};

const plans = [
  {
    name: "Growth",
    price: "$1,500",
    period: "/month",
    desc: "Ideal for startups and small businesses ready to build a strong digital foundation with AI-powered marketing.",
    features: [
      "AI-powered content strategy",
      "One primary channel focus (SEO, SEM, or Social)",
      "PPC campaign management",
      "Monthly data mining & insights report",
      "AI competitive analysis",
      "Dedicated account manager",
      "Monthly performance review",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Scale",
    price: "$3,500",
    period: "/month",
    desc: "For growing companies that need a multi-channel approach with deeper strategic oversight and AI optimization.",
    features: [
      "Everything in Growth, plus:",
      "Multi-channel strategy (SEO + SEM + Social)",
      "Advanced AI audience segmentation",
      "Conversion rate optimization",
      "Content creation & optimization",
      "Full-funnel attribution modeling",
      "Bi-weekly strategy calls",
      "Custom AI reporting dashboard",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For established organizations requiring comprehensive digital transformation and dedicated AI infrastructure.",
    features: [
      "Everything in Scale, plus:",
      "Dedicated strategy team",
      "Custom AI stack deployment",
      "Enterprise-level reporting",
      "Quarterly business reviews",
      "Priority support & SLA",
      "Multi-market / multi-location support",
      "Executive-level insights & board reporting",
    ],
    cta: "Get Started",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#202020] pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase mb-6">
            Transparent Pricing
          </p>
          <h1 className="text-5xl md:text-7xl font-black font-sans text-white leading-tight mb-6">
            Month-to-Month.
            <br />
            <span className="text-[#eeba2f] font-serif italic">No Contracts.</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto mb-8">
            We must earn your trust every single month. If we don&apos;t deliver results, you walk.
            It&apos;s that simple.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Month-to-month", "Cancel anytime", "AI-powered"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-white/60">
                <svg className="w-4 h-4 text-[#eeba2f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <AnimateOnScroll key={plan.name} delay={i * 120}>
                <div
                  className={`relative rounded-2xl p-8 border flex flex-col h-full ${
                    plan.popular
                      ? "bg-[#202020] border-[#eeba2f] shadow-[0_0_60px_rgba(238,186,47,0.15)]"
                      : "bg-[#f9f9f7] border-[#e5e5e5]"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#eeba2f] text-[#202020] text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className={`text-lg font-bold mb-2 ${plan.popular ? "text-white" : "text-[#202020]"}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-end gap-1 mb-4">
                      <span className={`text-4xl font-black ${plan.popular ? "text-[#eeba2f]" : "text-[#202020]"}`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className={`text-sm mb-1 ${plan.popular ? "text-white/50" : "text-[#666]"}`}>
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed ${plan.popular ? "text-white/60" : "text-[#666]"}`}>
                      {plan.desc}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <svg
                          className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-[#eeba2f]" : "text-[#ee5a2f]"}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={plan.popular ? "text-white/70" : "text-[#666]"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#eeba2f] text-[#202020] hover:bg-[#d4a528]"
                        : "bg-[#202020] text-white hover:bg-[#323232]"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* What's included */}
          <AnimateOnScroll className="mt-20" delay={300}>
            <div className="bg-[#f9f9f7] rounded-2xl p-10 border border-[#e5e5e5]">
              <h3 className="text-2xl font-black text-[#202020] mb-8">What&apos;s Included — and What Isn&apos;t</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "AI Stack: Included.",
                    desc: "The AI tools we deploy to power your campaigns, reporting, and automation are part of your retainer — no separate bills, no surprise costs.",
                  },
                  {
                    title: "Ad Spend: Separate.",
                    desc: "Your advertising budget is paid directly to the platforms (Google, Meta, LinkedIn, etc.). You control exactly how much you spend, and we optimize every dollar of it.",
                  },
                  {
                    title: "Why Month-to-Month?",
                    desc: "We believe in earning your business, not locking you in. Every month, we deliver results that justify your investment. If we don't, you're free to leave.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-[#202020] mb-2">{item.title}</h4>
                    <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#202020] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to See What AI Can Do for Your Business?
          </h2>
          <p className="text-white/60 mb-8">
            Start with a conversation. No obligations, no pressure — just honest advice about your
            growth potential.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#eeba2f] hover:bg-[#d4a528] text-[#202020] font-semibold rounded-xl transition-all duration-300"
          >
            Schedule a Free Consultation ↗
          </Link>
        </div>
      </section>
    </>
  );
}
