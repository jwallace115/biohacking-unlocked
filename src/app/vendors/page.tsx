import type { Metadata } from "next";
import Link from "next/link";
import { vendors } from "@/data/vendors";
import COABadge from "@/components/COABadge";

export const metadata: Metadata = {
  title: "Vetted Vendors — Trusted Peptide Suppliers",
  description:
    "Our curated list of peptide vendors vetted for COA compliance, reputation, and quality. We only recommend vendors we trust.",
};

const vettingCriteria = [
  {
    title: "COA Verification",
    description:
      "Every recommended vendor provides third-party Certificates of Analysis for their products.",
  },
  {
    title: "Community Reputation",
    description:
      "We monitor Reddit, forums, and review sites to assess real customer experiences over time.",
  },
  {
    title: "Years in Operation",
    description:
      "We prioritize vendors with a proven track record and consistent quality over multiple years.",
  },
  {
    title: "Customer Service",
    description:
      "Responsive support, clear communication, and fair return policies are required.",
  },
  {
    title: "Legal Compliance",
    description:
      "Vendors must operate within legal frameworks with proper labeling and transparent business practices.",
  },
];

export default function VendorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Vetted Vendors
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-navy/70">
        We personally evaluate every vendor before recommending them. Here&apos;s
        how we vet, and who made the cut.
      </p>

      {/* Vetting Criteria */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Our Vetting Criteria
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vettingCriteria.map((c) => (
            <div
              key={c.title}
              className="rounded-lg border border-gray-200 bg-white p-5"
            >
              <h3 className="font-semibold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vendor Cards */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Recommended Vendors</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {vendors.map((vendor) => (
            <Link
              key={vendor.slug}
              href={`/vendors/${vendor.slug}`}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-navy group-hover:text-accent-dark transition-colors">
                  {vendor.name}
                </h3>
                {vendor.coaVerified && <COABadge />}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                {vendor.overview.slice(0, 150)}...
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {vendor.carries.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-navy/60"
                  >
                    {item}
                  </span>
                ))}
                {vendor.carries.length > 4 && (
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-navy/60">
                    +{vendor.carries.length - 4} more
                  </span>
                )}
              </div>
              <p className="mt-3 text-xs text-navy/50">
                {vendor.yearsOperating}+ years in operation
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-accent-dark">
                Full review &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
