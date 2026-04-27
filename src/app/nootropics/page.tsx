import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nootropics Hub — Cognitive Enhancement Guides (Coming Soon)",
  description:
    "Explore evidence-based nootropic guides. Smart drugs, cognitive enhancers, and brain optimization — coming soon to Biohacking Unlocked.",
};

export default function NootropicsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-dark">
        Coming Soon
      </span>
      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        Nootropics
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Our nootropics hub is currently under development. We&apos;re researching
        and writing evidence-based guides on cognitive enhancers, smart drugs,
        and brain optimization compounds.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">What to Expect</h2>
        <p className="mt-3 text-navy/70">
          This section will cover research-backed nootropic compounds, their
          mechanisms of action, safety profiles, and practical guidance. As
          always, we&apos;ll focus on what the science actually says.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Individual compound guides with research summaries",
            "Mechanism of action breakdowns",
            "Safety and side effect profiles",
            "Comparison guides between popular nootropics",
            "Stack guides for cognitive optimization",
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
          Explore Our Nootropic Peptides
        </h2>
        <p className="mt-3 text-navy/70">
          While this hub is in progress, you can already explore our guides on
          nootropic peptides:
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/peptides/selank"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Selank
          </Link>
          <Link
            href="/peptides/semax"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Semax
          </Link>
          <Link
            href="/peptides-for-brain-health"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Peptides for Brain Health
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
