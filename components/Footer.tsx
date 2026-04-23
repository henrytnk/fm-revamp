import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const serviceLinks = [
    { label: "SEO", href: "/services/seo" },
    { label: "SEM / PPC", href: "/services/sem" },
    { label: "Social Media", href: "/services/smm" },
    { label: "CRO", href: "/services/cro" },
    { label: "Strategy", href: "/services/strategy" },
    { label: "Marketing Automation", href: "/services/marketing-automation" },
    { label: "Software Development", href: "/services/software-development" },
  ];

  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#202020] text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-[#eeba2f]/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="https://media.base44.com/images/public/user_696032597527e77c90fca3ba/9a7da2942_FahrenheitMarketingLogo.png"
              alt="Fahrenheit Marketing"
              width={180}
              height={48}
              className="h-10 w-auto brightness-0 invert mb-6"
              unoptimized
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              AI-first digital marketing. We design the systems, deploy the models, and operate
              the stack — measured in outcomes, not deliverables.
            </p>
            <p className="text-white/40 text-xs">AI Enablement · Since 2008 · Austin, Texas</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Fahrenheit Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
