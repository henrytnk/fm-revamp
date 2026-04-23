import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Contact — Fahrenheit Marketing",
  description: "Book a free strategy call with Fahrenheit Marketing. No sales pitch, just honest advice.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#202020] pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#eeba2f] tracking-widest uppercase mb-6">
            Ready When You Are
          </p>
          <h1 className="text-5xl md:text-7xl font-black font-sans text-white leading-tight mb-6">
            Let&apos;s Discuss
            <br />
            <span className="text-[#eeba2f] font-serif italic">Your Growth</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-xl">
            No sales pitch. Just an honest conversation about your goals.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimateOnScroll>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#323232] uppercase tracking-widest mb-2">
                      Name <span className="text-[#ee5a2f]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-[#e5e5e5] rounded-xl text-[#323232] focus:outline-none focus:border-[#eeba2f] transition-colors text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#323232] uppercase tracking-widest mb-2">
                      Email <span className="text-[#ee5a2f]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-[#e5e5e5] rounded-xl text-[#323232] focus:outline-none focus:border-[#eeba2f] transition-colors text-sm"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#323232] uppercase tracking-widest mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-[#e5e5e5] rounded-xl text-[#323232] focus:outline-none focus:border-[#eeba2f] transition-colors text-sm"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#323232] uppercase tracking-widest mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-[#e5e5e5] rounded-xl text-[#323232] focus:outline-none focus:border-[#eeba2f] transition-colors text-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#323232] uppercase tracking-widest mb-2">
                    Service Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-[#e5e5e5] rounded-xl text-[#323232] focus:outline-none focus:border-[#eeba2f] transition-colors text-sm bg-white">
                    <option value="">What are you interested in?</option>
                    <option>AI Growth Systems / SEO</option>
                    <option>AI-Powered Conversion (CRO)</option>
                    <option>Paid Media Intelligence (SEM/PPC)</option>
                    <option>Social Media Marketing</option>
                    <option>Strategic Intelligence</option>
                    <option>Marketing Automation</option>
                    <option>Software Development</option>
                    <option>Full-Service / Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#323232] uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-[#e5e5e5] rounded-xl text-[#323232] focus:outline-none focus:border-[#eeba2f] transition-colors text-sm resize-none"
                    placeholder="Tell us about your business and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#eeba2f] hover:bg-[#d4a528] text-[#202020] font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(238,186,47,0.35)] text-sm"
                >
                  Send Message
                </button>

                <p className="text-xs text-center text-[#666]">
                  We typically respond within 24 hours. No spam, ever.
                </p>
              </form>
            </AnimateOnScroll>

            {/* Info */}
            <AnimateOnScroll delay={200}>
              <div className="lg:pl-8">
                <h2 className="text-2xl font-black text-[#202020] mb-6">
                  Ready to grow like the brands we work with?
                </h2>
                <p className="text-[#666] leading-relaxed mb-10">
                  Ask about our AI-first approach, proven results with brands like PepsiCo, RJ
                  Reynolds, and QuikTrip, or how we measure success.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    "What brands have you worked with?",
                    "How do you measure AI success?",
                    "What makes Fahrenheit different?",
                    "How do we get started?",
                  ].map((q) => (
                    <div
                      key={q}
                      className="px-5 py-3 border border-[#e5e5e5] rounded-xl text-sm text-[#323232] hover:border-[#eeba2f] hover:bg-[#fffbf0] cursor-pointer transition-all duration-200"
                    >
                      {q}
                    </div>
                  ))}
                </div>

                <div className="bg-[#f9f9f7] rounded-2xl p-8 border border-[#e5e5e5]">
                  <div className="text-3xl font-black text-[#eeba2f] mb-1">Austin, Texas</div>
                  <p className="text-sm text-[#666]">AI Enablement · Since 2008</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
