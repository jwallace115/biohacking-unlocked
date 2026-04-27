import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Peptide Vendor Reviews — Honest, Research-Based Assessments",
  description:
    "In-depth reviews of peptide vendors. We evaluate COA compliance, reputation, pricing, and customer service.",
};

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Peptide Vendor Reviews
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Finding a trustworthy peptide vendor is not straightforward. Marketing
        claims are cheap — what matters is verifiable COA compliance, a
        consistent track record, and transparent business practices.
      </p>

      <section className="mt-4">
        <p className="text-navy/70">
          We do not accept payment for positive reviews. Where we have affiliate
          relationships with vendors, this is disclosed on the relevant page.
          Our editorial process is governed by our{" "}
          <Link
            href="/editorial-policy"
            className="text-accent-dark underline hover:no-underline"
          >
            editorial policy
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">How We Evaluate</h2>
        <p className="mt-3 text-navy/70">
          Each vendor review covers the same core criteria.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "COA Compliance",
              desc: "Does the vendor provide batch-specific COAs from accredited independent labs, including both HPLC and mass spectrometry?",
            },
            {
              title: "Community Reputation",
              desc: "What does multi-year forum history on Reddit, Longecity, and other communities show about product consistency and customer experience?",
            },
            {
              title: "Pricing",
              desc: "How does pricing compare to market benchmarks? Is it in a range consistent with quality synthesis and testing costs?",
            },
            {
              title: "Shipping & Fulfillment",
              desc: "How reliable and discreet is shipping? Are orders fulfilled accurately and within reasonable timeframes?",
            },
            {
              title: "Customer Service",
              desc: "Is support responsive and helpful? How does the vendor handle disputes, damaged goods, or incorrect orders?",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-gray-200 bg-white p-5"
            >
              <h3 className="font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ascension Peptides */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Our Recommended Vendor
        </h2>
        <div className="mt-6 rounded-xl border-2 border-accent/30 bg-white p-6">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-bold text-navy">
              Ascension Peptides
            </h3>
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent-dark">
              Top Rated
            </span>
          </div>
          <p className="mt-3 leading-relaxed text-navy/70">
            Colorado-based. COA-verified through MZ Biolabs. Batch-specific
            testing on all products. Use code{" "}
            <code className="rounded bg-navy/5 px-1.5 py-0.5 text-xs font-semibold text-navy/70">
              BIOHACKING
            </code>{" "}
            for 50% off your first order.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["COA Verified", "MZ Biolabs", "US-Based", "Batch-Specific"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-navy/60"
                >
                  {tag}
                </span>
              )
            )}
          </div>
          <a
            href="https://ascensionpeptides.com/ref/Biohackingunlocked/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Shop Ascension Peptides &rarr;
          </a>
        </div>
      </section>

      {/* Swiss Chems */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Pending Verification
        </h2>
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-semibold text-navy">Swiss Chems</h3>
            <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-xs font-medium text-navy/50">
              Verification Pending
            </span>
          </div>
          <p className="mt-3 leading-relaxed text-navy/70">
            Offers a large catalog spanning peptides, SARMs, and nootropics.
            Competitive pricing with third-party COAs available for major
            product lines. Application submitted — full review pending
            verification of testing lab and COA workflow.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["SARMs & Peptides", "Competitive Pricing", "Broad Catalog"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-navy/60"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Looking for Our Full Vendor Guide?
        </h2>
        <p className="mt-3 text-navy/70">
          Our best peptide sources page explains the full vetting standard,
          shows how we verify COAs, and lists every vendor that has passed.
        </p>
        <Link
          href="/best-peptide-sources"
          className="mt-4 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          View Best Peptide Sources
        </Link>
      </section>

      <div className="mt-12">
        <AffiliateDisclosure />
      </div>
    </div>
  );
}
