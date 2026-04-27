import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/peptides", label: "Peptides" },
  { href: "/vendors", label: "Vendors" },
  { href: "/start-here", label: "Start Here" },
  { href: "/about", label: "About" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
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

          {/* Nav */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Navigate
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
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
            <p className="text-xs leading-relaxed">
              This site is for informational and educational purposes only. We
              are not medical professionals. Nothing on this site should be
              construed as medical advice. All products discussed are intended
              for research purposes only. Adults only (18+).
            </p>
            <p className="mt-3 text-xs leading-relaxed">
              This site contains affiliate links. We may earn a commission when
              you purchase through our links at no extra cost to you. We only
              recommend vendors we have personally vetted for COA compliance.
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
