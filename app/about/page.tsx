import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About — Fahrenheit Marketing",
  description:
    "Since 2008, Fahrenheit Marketing has been at the forefront of digital innovation. Today, we're an AI-first agency.",
};

const philosophy = [
  {
    num: "01",
    title: "AI-First, Always",
    desc: "Every process, strategy, and decision is enhanced by artificial intelligence — not as a gimmick, but as a fundamental competitive advantage for our clients.",
  },
  {
    num: "02",
    title: "Radical Transparency",
    desc: "No hidden fees, no jargon, no smoke and mirrors. You see exactly what we do, why we do it, and what it costs. Month-to-month because we believe in earning trust.",
  },
  {
    num: "03",
    title: "Human + Machine",
    desc: "AI handles the data, pattern recognition, and optimization. Our experienced team handles strategy, creativity, and relationships. The best of both worlds.",
  },
  {
    num: "04",
    title: "Results Over Everything",
    desc: "We don't celebrate vanity metrics. We celebrate revenue growth, conversion improvements, and ROI. If it doesn't move your business forward, we don't do it.",
  },
];

const aiFirstFeatures = [
  { title: "Campaign Optimization", sub: "24/7 AI monitoring & adjustment", href: "/services/sem" },
  { title: "Data Interpretation", sub: "Real-time insights, not monthly reports", href: "/services/strategy" },
  { title: "Budget Efficiency", sub: "AI eliminates waste before it happens", href: "/services/cro" },
  { title: "Competitive Intelligence", sub: "Continuous market signal analysis", href: "/services/seo" },
];

const team = [
  { name: "Ricardo Casas", role: "CEO", img: "https://www.fahrenheitmarketing.com/app/uploads/2022/06/Ricardo.webp" },
  { name: "Brandon Dunham", role: "COO", img: "https://www.fahrenheitmarketing.com/app/uploads/2014/10/Brandon_New-1-768x967.webp" },
  { name: "Evan Casas", role: "Account Manager", img: "https://www.fahrenheitmarketing.com/app/uploads/2022/10/Evan_pic-1-768x958.jpg.webp" },
  { name: "Courtney Canham", role: "Account Manager", img: "https://www.fahrenheitmarketing.com/app/uploads/2024/03/Courtney-768x967.jpg.webp" },
  { name: "Alex Veldsman", role: "Account Manager", img: "https://www.fahrenheitmarketing.com/app/uploads/2026/02/alex-headshot-768x960.webp" },
  { name: "Chelsea Gardner", role: "UX/UI Designer", img: "https://www.fahrenheitmarketing.com/app/uploads/2023/06/Chelsea-768x960.jpg.webp" },
  { name: "Henry Tanaka", role: "Web Developer", img: "https://www.fahrenheitmarketing.com/app/uploads/2020/06/henry-headshot-768x960.jpg.webp" },
  { name: "Ian Aleck", role: "Web Developer", img: "https://www.fahrenheitmarketing.com/app/uploads/2018/07/ian-aleck-768x960.jpg.webp" },
  { name: "Jorge Roberto", role: "Web Developer", img: "https://www.fahrenheitmarketing.com/app/uploads/2022/06/Jorge-.webp" },
  { name: "Laurel Casas", role: "Financial Services", img: "https://www.fahrenheitmarketing.com/app/uploads/2016/08/Laurel-768x960.jpg.webp" },
  { name: "Louis Van Den Berg", role: "Senior Marketing Associate", img: "https://www.fahrenheitmarketing.com/app/uploads/2025/06/Louis-1-768x967.webp" },
  { name: "Nick Erasmus", role: "Creative Director", img: "https://www.fahrenheitmarketing.com/app/uploads/2022/06/Nick-.webp" },
  { name: "Steven Bosch", role: "Marketing Director", img: "https://www.fahrenheitmarketing.com/app/uploads/2023/11/Steven-768x961.jpg.webp" },
  { name: "Tita Ilunga", role: "Web Developer", img: "https://www.fahrenheitmarketing.com/app/uploads/2023/06/Tita-768x964.jpg.webp" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#202020] pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase mb-6">
            About Fahrenheit
          </p>
          <h1 className="text-5xl md:text-7xl font-black font-sans text-white leading-tight mb-8">
            The Agency That
            <br />
            <span className="text-[#eeba2f] font-serif italic">Bets on Itself</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mb-12">
            Since 2008, Fahrenheit Marketing has been at the forefront of digital innovation.
            Today, we&apos;re an AI-first agency — combining intelligent technology with seasoned
            professionals to deliver marketing that actually works.
          </p>
          <p className="text-white/60 mb-8">We don&apos;t ask for long-term contracts because we don&apos;t need them. Our work speaks for itself, month after month.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#eeba2f] hover:bg-[#d4a528] text-[#202020] font-semibold rounded-xl transition-all duration-300"
          >
            Let&apos;s Talk
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { value: "2008", label: "Founded in Austin, TX" },
              { value: "18+", label: "Years in Business" },
              { value: "350+", label: "Global Clients Served" },
              { value: "$0", label: "Long-Term Contracts" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-black text-[#eeba2f] mb-2">{stat.value}</div>
                <div className="text-sm text-white/50 uppercase tracking-widest font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase mb-4">
              Leadership
            </p>
            <h2 className="text-4xl font-black text-[#202020] mb-16">Meet the Founder</h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="shrink-0">
                <Image
                  src="https://media.base44.com/images/public/69e6c4bd9bbd15c86a9a4b38/1e2a5c8c8_generated_image.png"
                  alt="Ricardo Casas"
                  width={280}
                  height={280}
                  className="rounded-2xl object-cover w-64 h-64"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-black text-[#202020] mb-1">Ricardo Casas</h3>
                <p className="text-sm font-semibold text-[#eeba2f] tracking-widest uppercase mb-4">
                  Founder & CEO
                </p>
                <div className="flex gap-4 mb-6">
                  <a
                    href="https://www.linkedin.com/in/ricardocasas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#202020] hover:text-[#eeba2f] transition-colors border-b border-current pb-0.5 inline-flex items-center gap-1"
                  >
                    LINKEDIN
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M10 7H17V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a
                    href="https://forbes.com/councils/forbesagencycouncil/people/ricardocasas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#202020] hover:text-[#eeba2f] transition-colors border-b border-current pb-0.5 inline-flex items-center gap-1"
                  >
                    FORBES COUNCIL
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M10 7H17V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
                <blockquote className="text-lg font-serif italic text-[#666] border-l-4 border-[#eeba2f] pl-6 mb-6">
                  &quot;I left a larger outfit, tired of the attitude. I knew we could deliver
                  enterprise-level results with humility and better data.&quot;
                </blockquote>
                <p className="text-[#666] leading-relaxed mb-4">
                  Ricardo Casas founded Fahrenheit Marketing in April 2008 — right as the financial
                  crisis was reshaping how businesses thought about marketing. Formally trained as a
                  creative director but wired like a data strategist, Ricardo built Fahrenheit on a
                  simple premise: exceptional work, radical transparency, and zero long-term contracts.
                </p>
                <p className="text-[#666] leading-relaxed mb-6">
                  The agency was profitable from day one. By 2010, Fahrenheit had signed its first
                  publicly traded client. Today, the agency&apos;s portfolio includes PepsiCo, Gatorade,
                  QuikTrip, CITGO, TransCore, the Barbara Bush Foundation, RJ Reynolds, and more —
                  all served by a team with an average tenure of 11 years and senior staff bringing
                  as many as 25 years of industry experience.
                </p>
                <p className="text-[#666] leading-relaxed">
                  A Forbes Agency Council member and longtime Austin resident, Ricardo is a vocal
                  champion of data-first strategy — long before AI made it fashionable.
                </p>
                <div className="flex gap-12 mt-8">
                  <div>
                    <div className="text-3xl font-black text-[#202020]">25+</div>
                    <div className="text-xs font-semibold text-[#666] tracking-widest uppercase">
                      Years in Digital Marketing
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#202020]">11 yrs</div>
                    <div className="text-xs font-semibold text-[#666] tracking-widest uppercase">
                      Avg. Employee Tenure
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#f9f9f7] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll className="mb-16">
            <p className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase mb-4">
              Our Philosophy
            </p>
            <h2 className="text-4xl font-black text-[#202020]">What We Stand For</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophy.map((item, i) => (
              <AnimateOnScroll key={item.num} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5]">
                  <div className="text-4xl font-black text-[#e5e5e5] mb-4">{item.num}</div>
                  <h3 className="text-xl font-bold text-[#202020] mb-3">{item.title}</h3>
                  <p className="text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* AI First */}
      <section className="bg-[#202020] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll className="mb-16">
            <p className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase mb-4">
              Our Approach
            </p>
            <h2 className="text-4xl font-black text-white mb-6">Why AI-First?</h2>
            <p className="text-white/60 leading-relaxed max-w-2xl mb-4">
              Traditional agencies hire more people to do more work. We build smarter systems. Our
              AI-first approach means your campaigns are optimized 24/7, insights surface in
              real-time, and every decision is backed by data — not guesswork.
            </p>
            <p className="text-white/60 leading-relaxed max-w-2xl">
              This isn&apos;t about replacing human expertise — it&apos;s about amplifying it. Our
              strategists think bigger because AI handles the data. Your investment goes further
              because AI eliminates waste. The result? Better outcomes at lower cost.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aiFirstFeatures.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 80}>
                <Link
                  href={f.href}
                  className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#eeba2f]/40 transition-all duration-300 block"
                >
                  <h3 className="font-bold text-white group-hover:text-[#eeba2f] transition-colors mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-white/50 inline-flex items-center gap-1">
                    {f.sub}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll className="mb-16">
            <p className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase mb-4">
              Our Team
            </p>
            <h2 className="text-4xl font-black text-[#202020]">The People Behind the Work</h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 60}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-[#1a1a1a]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Always-visible bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-[#202020]/20 to-transparent" />
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="w-6 h-px bg-[#eeba2f] mb-3 transition-all duration-300 group-hover:w-10" />
                    <h3 className="font-black text-white text-sm leading-tight mb-1">{member.name}</h3>
                    <p className="text-[10px] font-semibold text-[#eeba2f] tracking-widest uppercase">{member.role}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
