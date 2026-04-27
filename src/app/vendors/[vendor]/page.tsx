import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { vendors, getVendor } from "@/data/vendors";
import COABadge from "@/components/COABadge";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export function generateStaticParams() {
  return vendors.map((v) => ({ vendor: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vendor: string }>;
}): Promise<Metadata> {
  const { vendor: slug } = await params;
  const vendor = getVendor(slug);
  if (!vendor) return {};
  return {
    title: `${vendor.name} Review — Honest Vendor Assessment`,
    description: `Our honest review of ${vendor.name}. COA verification status, pricing, reputation, pros & cons, and our verdict.`,
  };
}

export default async function VendorPage({
  params,
}: {
  params: Promise<{ vendor: string }>;
}) {
  const { vendor: slug } = await params;
  const vendor = getVendor(slug);
  if (!vendor) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/vendors" className="hover:text-accent-dark">
          Vendors
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">{vendor.name}</span>
      </nav>

      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold text-navy md:text-4xl">
          {vendor.name}
        </h1>
        {vendor.coaVerified && <COABadge />}
      </div>

      <p className="mt-1 text-sm text-navy/50">
        {vendor.yearsOperating}+ years in operation
      </p>

      {/* Overview */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-navy">Overview</h2>
        <p className="mt-3 leading-relaxed text-navy/70">{vendor.overview}</p>
      </section>

      {/* COA Status */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-navy">
          COA Verification Status
        </h2>
        <div className="mt-3 flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
          {vendor.coaVerified ? (
            <>
              <COABadge />
              <span className="text-sm text-navy/70">
                This vendor provides third-party COA documentation for their
                products.
              </span>
            </>
          ) : (
            <span className="text-sm text-navy/70">
              COA verification is pending for this vendor.
            </span>
          )}
        </div>
      </section>

      {/* What They Carry */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-navy">What They Carry</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {vendor.carries.map((item) => (
            <Link
              key={item}
              href={`/peptides/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-navy hover:border-accent hover:text-accent-dark transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing & Shipping */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-navy">Pricing &amp; Shipping</h2>
        <div className="mt-3 space-y-3">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-sm font-semibold text-navy">Pricing</h3>
            <p className="mt-1 text-sm text-navy/70">{vendor.pricing}</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-sm font-semibold text-navy">Shipping</h3>
            <p className="mt-1 text-sm text-navy/70">{vendor.shipping}</p>
          </div>
        </div>
      </section>

      {/* Community Reputation */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-navy">Community Reputation</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          {vendor.reputation}
        </p>
      </section>

      {/* Pros & Cons */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-navy">Pros &amp; Cons</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <h3 className="text-sm font-bold text-green-800">Pros</h3>
            <ul className="mt-2 space-y-1.5">
              {vendor.pros.map((pro, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-green-800/80"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
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
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <h3 className="text-sm font-bold text-red-800">Cons</h3>
            <ul className="mt-2 space-y-1.5">
              {vendor.cons.map((con, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-red-800/80"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-navy">Our Verdict</h2>
        <p className="mt-3 leading-relaxed text-navy/70">{vendor.verdict}</p>
      </section>

      {/* Affiliate CTA */}
      <section className="mt-8">
        <AffiliateDisclosure />
        <a
          href={vendor.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Visit {vendor.name}
        </a>
      </section>

      {/* Disclaimer */}
      <section className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-5">
        <h2 className="text-sm font-bold text-navy">Disclaimer</h2>
        <p className="mt-2 text-xs leading-relaxed text-navy/60">
          This review is for informational purposes only. We are not medical
          professionals. Vendor recommendations are based on our research and
          community feedback. All products are intended for research purposes
          only. See our full{" "}
          <Link href="/disclaimer" className="underline hover:text-accent-dark">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
