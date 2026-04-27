import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import COABadge from "@/components/COABadge";

export const metadata: Metadata = {
  title: "TB-500 — Research Guide, Benefits & Safety",
  description:
    "Evidence-based guide to TB-500 peptide. Research on tissue repair, flexibility, and inflammation. Mechanisms, protocols, and safety.",
};

export default function TB500Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">TB-500</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Recovery
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        TB-500
      </h1>
      <p className="mt-3 text-lg text-navy/70">
        A synthetic fragment of thymosin beta-4, researched for its potential
        role in tissue repair, flexibility, and inflammation reduction.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">What is TB-500?</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          TB-500 is a synthetic version of a region of thymosin beta-4, a
          naturally occurring peptide found in nearly all human and animal cells.
          It has been studied primarily in veterinary and preclinical settings
          for its potential effects on wound healing and tissue repair.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">What the Research Says</h2>
        <ul className="mt-4 space-y-3">
          {[
            "Animal studies indicate TB-500 may promote cell migration and blood vessel formation (Goldstein et al., Expert Opinion on Biological Therapy, 2012).",
            "Preclinical research suggests potential anti-inflammatory properties.",
            "Human clinical data remains very limited.",
          ].map((item, i) => (
            <li
              key={i}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Common Uses</h2>
        <ul className="mt-4 space-y-2">
          {[
            "Muscle and tissue recovery",
            "Flexibility and mobility support",
            "Often stacked with BPC-157 in community protocols",
          ].map((use, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {use}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">
          What We Don&apos;t Know Yet
        </h2>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <ul className="space-y-2">
            {[
              "Human safety profile is not established through clinical trials.",
              "Optimal dosing in humans is not validated.",
              "Long-term effects are unknown.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-amber-900/80"
              >
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Related Reading</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/bpc-157-vs-tb-500"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            BPC-157 vs TB-500
          </Link>
          <Link
            href="/peptides/bpc-157"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            BPC-157 Guide
          </Link>
          <Link
            href="/peptides-for-recovery"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Peptides for Recovery
          </Link>
          <Link
            href="/best-peptide-sources"
            className="rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-medium text-accent-dark hover:bg-accent/20 transition-colors"
          >
            Best Peptide Sources
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Where to Buy TB-500</h2>
        <div className="mt-4">
          <AffiliateDisclosure />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <COABadge />
          <span className="text-sm text-navy/70">
            We only recommend COA-verified vendors.
          </span>
        </div>
        <Link
          href="/best-peptide-sources"
          className="mt-4 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Find Trusted Peptide Sources
        </Link>
      </section>

      <section className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-5">
        <h2 className="text-sm font-bold text-navy">Disclaimer</h2>
        <p className="mt-2 text-xs leading-relaxed text-navy/60">
          The information on this page is for educational and informational
          purposes only. It is not intended as medical advice. See our full{" "}
          <Link href="/disclaimer" className="underline hover:text-accent-dark">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
