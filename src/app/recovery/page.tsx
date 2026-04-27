import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recovery Hub — Injury, Exercise & Surgery Recovery Guides (Coming Soon)",
  description:
    "Evidence-based recovery guides covering peptides, protocols, and compounds for injury, exercise, and surgery recovery. Coming soon.",
};

export default function RecoveryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-dark">
        Coming Soon
      </span>
      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        Recovery
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Our recovery hub is currently under development. We&apos;re building
        comprehensive, evidence-based guides on recovery compounds, protocols,
        and strategies.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">What to Expect</h2>
        <p className="mt-3 text-navy/70">
          This section will cover research-backed recovery interventions for
          injury, exercise, and surgical recovery.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Peptide protocols for recovery support",
            "Post-surgery recovery compounds",
            "Exercise recovery optimization",
            "Tendon and ligament repair research",
            "Gut health and recovery",
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
          Explore Recovery Peptides Now
        </h2>
        <p className="mt-3 text-navy/70">
          While this hub is in progress, check out our existing recovery guides:
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/peptides/bpc-157"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            BPC-157
          </Link>
          <Link
            href="/peptides/tb-500"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            TB-500
          </Link>
          <Link
            href="/peptides-for-recovery"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Peptides for Recovery
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
