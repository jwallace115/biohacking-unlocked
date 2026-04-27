import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Longevity Hub — Anti-Aging & Life Extension Guides (Coming Soon)",
  description:
    "Evidence-based longevity guides covering anti-aging peptides, GH secretagogues, and life extension research. Coming soon.",
};

export default function LongevityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-dark">
        Coming Soon
      </span>
      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        Longevity
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Our longevity hub is currently under development. We&apos;re researching
        and writing evidence-based guides on anti-aging compounds, GH
        secretagogues, and life extension strategies.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">What to Expect</h2>
        <p className="mt-3 text-navy/70">
          This section will cover research-backed longevity interventions and
          anti-aging compounds.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Growth hormone secretagogue guides",
            "Anti-aging peptide research summaries",
            "Longevity biomarker tracking",
            "NAD+ and mitochondrial health",
            "Caloric restriction mimetics",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">
          Explore Longevity Peptides Now
        </h2>
        <p className="mt-3 text-navy/70">
          While this hub is in progress, check out our existing longevity-related
          guides:
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/peptides/cjc-1295"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            CJC-1295
          </Link>
          <Link
            href="/peptides/ipamorelin"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Ipamorelin
          </Link>
          <Link
            href="/peptides/ghk-cu"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            GHK-Cu
          </Link>
        </div>
      </section>

      <div className="mt-10">
        <Link
          href="/peptides"
          className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Explore Peptide Guides
        </Link>
      </div>
    </div>
  );
}
