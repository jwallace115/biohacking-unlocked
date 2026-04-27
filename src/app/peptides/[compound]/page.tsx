import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compounds, getCompound } from "@/data/compounds";
import { vendors } from "@/data/vendors";
import COABadge from "@/components/COABadge";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export function generateStaticParams() {
  return compounds.map((c) => ({ compound: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ compound: string }>;
}): Promise<Metadata> {
  const { compound: slug } = await params;
  const compound = getCompound(slug);
  if (!compound) return {};
  return {
    title: `${compound.name} — What the Research Says`,
    description: compound.summary,
  };
}

export default async function CompoundPage({
  params,
}: {
  params: Promise<{ compound: string }>;
}) {
  const { compound: slug } = await params;
  const compound = getCompound(slug);
  if (!compound) notFound();

  const recommendedVendors = vendors.filter((v) =>
    compound.vendors.includes(v.slug)
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">{compound.name}</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        {compound.category}
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        {compound.name}
      </h1>
      <p className="mt-3 text-lg text-navy/70">{compound.summary}</p>

      {/* What is it */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">
          What is {compound.name}?
        </h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          {compound.whatIsIt}
        </p>
      </section>

      {/* Research */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">
          What the Research Says
        </h2>
        <ul className="mt-4 space-y-3">
          {compound.research.map((item, i) => (
            <li
              key={i}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Common Uses */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">
          Common Uses in the Community
        </h2>
        <ul className="mt-4 space-y-2">
          {compound.commonUses.map((use, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {use}
            </li>
          ))}
        </ul>
      </section>

      {/* Unknowns */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">
          What We Don&apos;t Know Yet
        </h2>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <ul className="space-y-2">
            {compound.unknowns.map((item, i) => (
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

      {/* Protocols */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">
          Typical Protocols (Community-Reported)
        </h2>
        <p className="mt-2 text-xs text-navy/50">
          These are community-reported protocols and are NOT medical advice.
          Always consult a healthcare professional.
        </p>
        <ul className="mt-4 space-y-2">
          {compound.protocols.map((protocol, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-navy/70"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {protocol}
            </li>
          ))}
        </ul>
      </section>

      {/* Vendor Recommendations */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">
          Vendor Recommendations
        </h2>
        <div className="mt-4">
          <AffiliateDisclosure />
        </div>
        <div className="mt-4 space-y-4">
          {recommendedVendors.map((vendor) => (
            <Link
              key={vendor.slug}
              href={`/vendors/${vendor.slug}`}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-navy">{vendor.name}</span>
                  {vendor.coaVerified && <COABadge />}
                </div>
                <p className="mt-1 text-sm text-navy/60">
                  {vendor.yearsOperating}+ years operating
                </p>
              </div>
              <span className="text-sm font-medium text-accent-dark">
                View vendor &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-5">
        <h2 className="text-sm font-bold text-navy">Disclaimer</h2>
        <p className="mt-2 text-xs leading-relaxed text-navy/60">
          The information on this page is for educational and informational
          purposes only. It is not intended as medical advice. We are not medical
          professionals. All compounds discussed are intended for research
          purposes only. Always consult with a qualified healthcare professional
          before making any decisions about peptides or supplements. Individual
          results may vary. See our full{" "}
          <Link href="/disclaimer" className="underline hover:text-accent-dark">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
