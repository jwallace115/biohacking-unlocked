import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import COABadge from "@/components/COABadge";

export const metadata: Metadata = {
  title: "Best Peptide Sources (2026) — Vetted & COA-Verified Vendors",
  description:
    "Find the most trusted peptide sources. Every vendor is personally vetted for COA compliance, purity testing, and reputation. Updated for 2026.",
};

const vendors = [
  {
    name: "Peptide Sciences",
    slug: "peptide-sciences-review",
    highlight: "Industry Gold Standard",
    description:
      "Widely regarded as the most reputable US-based peptide supplier. Every batch includes third-party COA verification with HPLC and mass spectrometry testing.",
    pros: [
      "Third-party COA for every batch",
      "99%+ purity consistently verified",
      "Extensive product catalog",
      "Fast US shipping",
    ],
    coaVerified: true,
  },
  {
    name: "Swiss Chems",
    slug: "swiss-chems-review",
    highlight: "Best Product Range",
    description:
      "A well-established vendor offering peptides, SARMs, and nootropics. Known for competitive pricing and broad selection with COA documentation available.",
    pros: [
      "Wide product selection",
      "Competitive pricing",
      "COA documentation available",
      "Multiple payment options",
    ],
    coaVerified: true,
  },
  {
    name: "Umbrella Labs",
    slug: "umbrella-labs-review",
    highlight: "Trusted Alternative",
    description:
      "A reliable vendor with a growing reputation in the research community. Offers peptides and SARMs with third-party testing documentation.",
    pros: [
      "Third-party tested products",
      "Good community reputation",
      "Responsive customer service",
      "US-based operations",
    ],
    coaVerified: true,
  },
];

export default function BestPeptideSourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Best Peptide Sources (2026)
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-navy/70">
        Every vendor on this page has been personally vetted for COA compliance,
        product purity, community reputation, and customer service. We only
        recommend sources we trust.
      </p>

      <div className="mt-6">
        <AffiliateDisclosure />
      </div>

      {/* How We Vet */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How We Vet Peptide Vendors
        </h2>
        <p className="mt-3 text-navy/70">
          Our vetting process is rigorous. Every vendor on this list has passed
          our multi-point evaluation:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "COA Verification",
              desc: "We verify that every vendor provides legitimate third-party Certificates of Analysis for each batch.",
            },
            {
              title: "Purity Testing",
              desc: "We look for HPLC purity results of 98% or higher, verified by independent laboratories.",
            },
            {
              title: "Community Reputation",
              desc: "We monitor Reddit, forums, and review sites for consistent positive feedback over months, not days.",
            },
            {
              title: "Business Practices",
              desc: "We evaluate shipping speed, customer service responsiveness, return policies, and legal compliance.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-gray-200 bg-gray-50 p-5"
            >
              <div className="flex items-center gap-2">
                <COABadge />
                <h3 className="font-semibold text-navy">{item.title}</h3>
              </div>
              <p className="mt-2 text-sm text-navy/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vendor Cards */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Our Recommended Vendors
        </h2>
        <div className="mt-6 space-y-6">
          {vendors.map((vendor, i) => (
            <div
              key={vendor.slug}
              className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-sm font-medium text-accent-dark">
                    #{i + 1} Pick
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-navy">
                    {vendor.name}
                  </h3>
                  <span className="mt-1 inline-block rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy/70">
                    {vendor.highlight}
                  </span>
                </div>
                {vendor.coaVerified && <COABadge />}
              </div>
              <p className="mt-4 text-navy/70">{vendor.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-navy">Highlights:</h4>
                <ul className="mt-2 space-y-1">
                  {vendor.pros.map((pro) => (
                    <li
                      key={pro}
                      className="flex items-center gap-2 text-sm text-navy/60"
                    >
                      <svg
                        className="h-4 w-4 shrink-0 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/reviews/${vendor.slug}`}
                className="mt-6 inline-block rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Read Full Review
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Warning Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How to Spot Untrustworthy Vendors
        </h2>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <ul className="space-y-2">
            {[
              "No COA available or COA from in-house testing only",
              "Prices that seem too good to be true",
              "No verifiable business address or contact information",
              "Brand new websites with no community track record",
              "Making health claims or therapeutic promises",
            ].map((item) => (
              <li
                key={item}
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
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/how-to-identify-fake-peptides"
            className="text-sm font-medium text-accent-dark hover:underline"
          >
            How to Identify Fake Peptides &rarr;
          </Link>
          <Link
            href="/peptide-coa-explained"
            className="text-sm font-medium text-accent-dark hover:underline"
          >
            How to Read a COA &rarr;
          </Link>
          <Link
            href="/peptide-quality-testing"
            className="text-sm font-medium text-accent-dark hover:underline"
          >
            Peptide Quality Testing &rarr;
          </Link>
        </div>
      </section>

      {/* Bottom Disclaimer */}
      <section className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-5">
        <h2 className="text-sm font-bold text-navy">Disclaimer</h2>
        <p className="mt-2 text-xs leading-relaxed text-navy/60">
          The information on this page is for educational and informational
          purposes only. All compounds discussed are intended for research
          purposes only. We are not medical professionals. See our full{" "}
          <Link href="/disclaimer" className="underline hover:text-accent-dark">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
