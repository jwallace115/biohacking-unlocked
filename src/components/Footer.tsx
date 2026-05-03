import Link from "next/link";

const navLinks = [
  { href: "/start-here", label: "Start Here" },
  { href: "/peptides", label: "Peptides" },
  { href: "/best-peptide-sources", label: "Best Peptide Sources" },
  { href: "/about", label: "About" },
];

const resourceLinks = [
  { href: "/peptide-coa-explained", label: "COA Explained" },
  { href: "/how-to-identify-fake-peptides", label: "Spot Fake Peptides" },
  { href: "/peptide-side-effects", label: "Side Effects" },
  { href: "/peptide-quality-testing", label: "Quality Testing" },
  { href: "/peptide-research-safety", label: "Research Safety" },
];

const legalLinks = [
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white">
              Biohacking<span className="text-accent">Unlocked</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Research First. Hype Never. Your trusted starting point for
              evidence-based biohacking education.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </p>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </p>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed">
              This site contains affiliate links. We may earn a commission when
              you purchase through our links at no extra cost to you.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} Biohacking Unlocked. All rights
          reserved. For educational and research purposes only.
        </div>
      </div>
    </footer>
  );
}
