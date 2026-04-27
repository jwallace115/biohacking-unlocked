import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import COABadge from "@/components/COABadge";

export const metadata: Metadata = {
  title: "CJC-1295 — Growth Hormone Peptide Research Guide",
  description:
    "Evidence-based guide to CJC-1295 peptide. Research on growth hormone release, body composition, and anti-aging. With and without DAC variants explained.",
};

export default function CJC1295Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">CJC-1295</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Growth Hormone
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        CJC-1295
      </h1>
      <p className="mt-3 text-lg text-navy/70">
        A synthetic growth hormone-releasing hormone (GHRH) analog studied for
        its potential to increase growth hormone levels.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">What is CJC-1295?</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          CJC-1295 is a synthetic analog of growth hormone-releasing hormone
          (GHRH). It was developed to provide a longer-lasting stimulation of
          growth hormone release compared to natural GHRH. It is often discussed
          in the context of anti-aging and body composition research.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">What the Research Says</h2>
        <ul className="mt-4 space-y-3">
          {[
            "Clinical studies have shown CJC-1295 can increase plasma GH and IGF-1 levels in healthy adults (Teichman et al., JCEM, 2006).",
            "Research suggests sustained GH elevation for 6-8 days after a single dose with DAC variant.",
            "More research is needed on long-term outcomes and safety.",
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
              "Long-term effects of sustained GH elevation are not fully understood.",
              "Individual response can vary significantly.",
              "Safety in populations with existing health conditions needs more study.",
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
            href="/peptides/ipamorelin"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Ipamorelin Guide
          </Link>
          <Link
            href="/peptides-for-fat-loss"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Peptides for Fat Loss
          </Link>
          <Link
            href="/peptides-for-sleep"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Peptides for Sleep
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
        <h2 className="text-xl font-bold text-navy">Where to Buy CJC-1295</h2>
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
