import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import COABadge from "@/components/COABadge";

export const metadata: Metadata = {
  title: "Ipamorelin — Selective GH Secretagogue Research Guide",
  description:
    "Evidence-based guide to Ipamorelin peptide. Research on growth hormone release, sleep quality, and body composition with fewer side effects.",
};

export default function IpamorelinPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">Ipamorelin</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Growth Hormone
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        Ipamorelin
      </h1>
      <p className="mt-3 text-lg text-navy/70">
        A selective growth hormone secretagogue studied for its targeted
        stimulation of growth hormone release with fewer side effects than other
        GH peptides.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">What is Ipamorelin?</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Ipamorelin is a synthetic pentapeptide that acts as a selective growth
          hormone secretagogue. Unlike other GH-releasing peptides, it is
          considered more targeted in its action, stimulating GH release without
          significantly affecting cortisol or prolactin levels.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">What the Research Says</h2>
        <ul className="mt-4 space-y-3">
          {[
            "Studies show Ipamorelin selectively stimulates GH release in a dose-dependent manner (Raun et al., European Journal of Endocrinology, 1998).",
            "Research indicates it does not significantly increase cortisol, ACTH, or prolactin at therapeutic doses.",
            "Clinical data on long-term use in humans is limited.",
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
        <h2 className="text-xl font-bold text-navy">
          What We Don&apos;t Know Yet
        </h2>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <ul className="space-y-2">
            {[
              "Long-term safety data in humans is lacking.",
              "Interactions with other peptides need more research.",
              "Effects may vary based on age and baseline GH levels.",
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
            href="/cjc-1295-vs-ipamorelin"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            CJC-1295 vs Ipamorelin
          </Link>
          <Link
            href="/peptides/cjc-1295"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            CJC-1295 Guide
          </Link>
          <Link
            href="/peptides-for-sleep"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Peptides for Sleep
          </Link>
          <Link
            href="/peptides-for-fat-loss"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Peptides for Fat Loss
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
        <h2 className="text-xl font-bold text-navy">Where to Buy Ipamorelin</h2>
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
