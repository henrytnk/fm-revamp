import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services — Fahrenheit Marketing",
  description: "Seven AI-powered systems. One mandate: turn intelligence into revenue.",
};

const services = [
  {
    num: "01",
    tag: "SEO · SEM · Social",
    title: "AI Growth Systems",
    sub: "COMPOUND REVENUE FROM OWNED CHANNELS",
    desc: "Marketing engines that learn. We deploy AI across acquisition, retention, and content so every dollar produces measurable lift — not just activity.",
    features: [
      "AI-powered keyword research",
      "Content strategy & creation",
      "Technical SEO optimization",
      "Link authority building",
    ],
    href: "/services/seo",
  },
  {
    num: "02",
    tag: "CRO · Analytics",
    title: "AI-Powered Conversion",
    sub: "HIGHER CONVERSION, BIGGER RETURN",
    desc: "Intelligent optimization that personalizes, tests, and improves every touchpoint in real time. Built for profit, not just traffic.",
    features: [
      "AI behavioral analysis",
      "Intelligent A/B testing",
      "Landing page optimization",
      "Heatmap & session analysis",
    ],
    href: "/services/cro",
  },
  {
    num: "03",
    tag: "SEM · PPC",
    title: "Paid Media Intelligence",
    sub: "ZERO WASTE. MAXIMUM ROAS.",
    desc: "AI-managed paid campaigns across search, social, and display. Bids, budgets, and creative — optimized 24/7 so you don't have to.",
    features: [
      "AI bid optimization",
      "Precision audience targeting",
      "Ad creative intelligence",
      "Full-funnel attribution",
    ],
    href: "/services/sem",
  },
  {
    num: "04",
    tag: "Social Media",
    title: "Social Media Marketing",
    sub: "SOCIAL THAT ACTUALLY CONVERTS",
    desc: "Vanity metrics don't pay the bills. We build AI-informed social strategies that drive real engagement, qualified traffic, and measurable revenue.",
    features: [
      "AI content intelligence",
      "Audience identification",
      "Paid social amplification",
      "Community management",
    ],
    href: "/services/smm",
  },
  {
    num: "05",
    tag: "Strategy · Planning",
    title: "Strategic Intelligence",
    sub: "INTELLIGENCE, NOT INSTINCT",
    desc: "Data-driven roadmaps built from competitive analysis, market signals, and AI modeling. Your growth strategy shouldn't rely on gut feel.",
    features: [
      "Market intelligence",
      "Channel mix strategy",
      "Predictive growth modeling",
      "Quarterly planning reviews",
    ],
    href: "/services/strategy",
  },
  {
    num: "06",
    tag: "HubSpot · Automation",
    title: "Marketing Automation",
    sub: "STOP DOING MANUAL MARKETING",
    desc: "AI-driven workflows, lead scoring, and nurturing sequences that react in real-time — so your pipeline never sleeps.",
    features: [
      "Workflow automation",
      "Lead intelligence",
      "Email optimization",
      "Revenue operations",
    ],
    href: "/services/marketing-automation",
  },
  {
    num: "07",
    tag: "AI · Development",
    title: "Software Development",
    sub: "ENTERPRISE SOFTWARE. STARTUP BUDGET.",
    desc: "Custom software that once required million-dollar budgets is now within reach. AI-powered development stacks let us build, ship, and scale at a fraction of the traditional cost.",
    features: [
      "Custom web applications",
      "AI integration",
      "Data architecture",
      "Real-time platforms",
    ],
    href: "/services/software-development",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#202020] pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase mb-6">
            What We Do
          </p>
          <h1 className="text-5xl md:text-7xl font-black font-sans text-white leading-tight mb-6">
            Seven Systems.
            <br />
            <span className="text-[#eeba2f] font-serif italic">One Mandate.</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
            Every service we offer is powered by AI — not as a buzzword, but as a fundamental
            operating advantage. We use artificial intelligence to find opportunities faster,
            eliminate waste, and compound results month after month.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.num} delay={i * 60}>
                <div className="bg-[#f9f9f7] rounded-2xl p-8 md:p-10 border border-[#e5e5e5] hover:border-[#eeba2f]/40 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-bold text-[#eeba2f]">{service.num}</span>
                        <span className="text-xs font-semibold text-[#666] tracking-widest uppercase">
                          {service.tag}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-[#ee5a2f] tracking-widest uppercase mb-2">
                        {service.sub}
                      </div>
                      <h2 className="text-2xl font-black text-[#202020] mb-4">{service.title}</h2>
                      <p className="text-[#666] leading-relaxed mb-6">{service.desc}</p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#eeba2f] hover:gap-4 transition-all duration-200"
                      >
                        Learn more →
                      </Link>
                    </div>
                    <div className="shrink-0 md:w-64">
                      <ul className="space-y-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-[#666]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#eeba2f] shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure CTA */}
      <section className="bg-[#202020] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Not sure where to start?</h2>
          <p className="text-white/60 mb-8">
            Book a free 30-minute strategy call. We&apos;ll assess your biggest opportunities and tell
            you exactly which services will move the needle.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#eeba2f] hover:bg-[#d4a528] text-[#202020] font-semibold rounded-xl transition-all duration-300"
          >
            Book a strategy call <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </Link>
        </div>
      </section>
    </>
  );
}
