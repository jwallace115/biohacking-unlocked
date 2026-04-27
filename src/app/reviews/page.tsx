import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Peptide Vendor Reviews — Honest, Research-Based Assessments",
  description:
    "In-depth reviews of peptide vendors. We evaluate COA compliance, reputation, pricing, and customer service.",
};

const reviews = [
  {
    vendor: "Peptide Sciences",
    href: "/reviews/peptide-sciences-review",
    summary:
      "One of the longest-operating research peptide vendors in the US market. Known for consistent COA compliance, broad product selection, and reliable shipping.",
    tags: ["COA Verified", "US-Based", "Wide Selection"],
  },
  {
    vendor: "Swiss Chems",
    href: "/reviews/swiss-chems-review",
    summary:
      "Offers a large catalog spanning peptides, SARMs, and nootropics. Competitive pricing with third-party COAs available for major product lines.",
    tags: ["COA Verified", "SARMs & Peptides", "Competitive Pricing"],
  },
  {
    vendor: "Umbrella Labs",
    href: "/reviews/umbrella-labs-review",
    summary:
      "US-based vendor specializing in SARMs and peptides. Maintains a strong community reputation with batch-specific COAs from independent laboratories.",
    tags: ["COA Verified", "US-Based", "SARMs Specialist"],
  },
];

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Peptide Vendor Reviews
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Finding a trustworthy peptide vendor is not straightforward. Marketing
        claims are cheap — what matters is verifiable COA compliance, a consistent
        multi-year track record, and transparent business practices. Our reviews
        are based on documented evidence, community reputation spanning multiple
        years, and direct evaluation of each vendor's testing documentation.
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
          Each vendor review covers the same core criteria to allow direct
          comparison.
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

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Vendor Reviews</h2>
        <div className="mt-6 space-y-4">
          {reviews.map((review) => (
            <Link
              key={review.vendor}
              href={review.href}
              className="group block rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-navy transition-colors group-hover:text-accent-dark">
                {review.vendor} Review
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                {review.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {review.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-navy/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-block text-sm font-medium text-accent-dark">
                Read full review &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Looking for a Comparison?
        </h2>
        <p className="mt-3 text-navy/70">
          If you want to see all vetted vendors ranked side by side, our best
          peptide sources guide compares options across all key criteria.
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
