"use client";

import Link from "next/link";
import { useState } from "react";

const topLinks = [
  { href: "/start-here", label: "Start Here" },
  { href: "/best-peptide-sources", label: "Best Sources" },
  { href: "/about", label: "About" },
];

const peptideLinks = [
  { href: "/peptides/bpc-157", label: "BPC-157" },
  { href: "/peptides/tb-500", label: "TB-500" },
  { href: "/peptides/ghk-cu", label: "GHK-Cu" },
  { href: "/peptides/cjc-1295", label: "CJC-1295" },
  { href: "/peptides/ipamorelin", label: "Ipamorelin" },
  { href: "/peptides/sermorelin", label: "Sermorelin" },
  { href: "/peptides/retatrutide", label: "Retatrutide" },
  { href: "/peptides/melanotan-2", label: "Melanotan II" },
  { href: "/peptides/selank", label: "Selank" },
  { href: "/peptides/semax", label: "Semax" },
];

const stackLinks = [
  { href: "/peptides/wolverine-stack", label: "Wolverine Stack" },
  { href: "/peptides/gh-stack", label: "GH Stack" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [peptidesOpen, setPeptidesOpen] = useState(false);

  return (
    <nav className="bg-navy text-white">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Biohacking<span className="text-accent">Unlocked</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/start-here"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Start Here
          </Link>

          {/* Peptides dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPeptidesOpen(true)}
            onMouseLeave={() => setPeptidesOpen(false)}
          >
            <Link
              href="/peptides"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Peptides
            </Link>
            {peptidesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                <div className="w-64 rounded-lg border border-white/10 bg-navy-light shadow-xl p-4">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-white/30">
                    Compounds
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-1">
                    {peptideLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded px-2 py-1.5 text-xs text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                        onClick={() => setPeptidesOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 border-t border-white/10 pt-3">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-white/30">
                      Stacks
                    </p>
                    <div className="mt-2 space-y-1">
                      {stackLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block rounded px-2 py-1.5 text-xs text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                          onClick={() => setPeptidesOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 border-t border-white/10 pt-3">
                    <Link
                      href="/peptides"
                      className="block text-xs font-medium text-accent hover:text-accent-dark transition-colors"
                      onClick={() => setPeptidesOpen(false)}
                    >
                      View all guides &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/best-peptide-sources"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Best Sources
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            About
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4">
          {topLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-sm text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-3 border-t border-white/10 pt-3">
            <p className="text-[10px] font-medium uppercase tracking-widest text-white/30">
              Peptides
            </p>
            {peptideLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-1.5 text-sm text-white/60 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-3 border-t border-white/10 pt-3">
            <p className="text-[10px] font-medium uppercase tracking-widest text-white/30">
              Stacks
            </p>
            {stackLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-1.5 text-sm text-white/60 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
