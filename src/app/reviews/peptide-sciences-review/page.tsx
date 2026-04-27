import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import COABadge from "@/components/COABadge";

export const metadata: Metadata = {
  title: "Peptide Sciences Review (2026) — Is It Legit?",
  description:
    "Honest review of Peptide Sciences. COA verification, product quality, pricing, shipping, and customer service assessment.",
};

export default function PeptideSciencesReviewPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/reviews" className="hover:text-accent-dark">
          Reviews
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">Peptide Sciences</span>
      </nav>

      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Peptide Sciences Review
      </h1>
      <p className="mt-2 text-sm text-navy/50">Updated April 2026</p>
      <p className="mt-4 text-lg text-navy/70">
        Peptide Sciences has been one of the more visible US-based research
        peptide vendors for several years. This review evaluates the company
        based on publicly available COA documentation, community reputation,
        pricing analysis, and reported customer experience.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Company Overview</h2>
        <p className="mt-3 text-navy/70">
          Peptide Sciences is a US-based company that has operated in the research
          peptide market for over a decade. The company markets itself as a
          supplier for research purposes only and maintains a large catalog
          spanning common peptides, growth hormone secretagogues, and specialty
          compounds. Their website is established and professional, with a
          documented history in the research community.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Product Catalog
        </h3>
        <p className="mt-2 text-navy/70">
          The catalog includes widely researched compounds such as BPC-157,
          TB-500, Ipamorelin, CJC-1295 (with and without DAC), Semax, Selank,
          Epithalon, and many others. Availability is generally consistent and
          vials are typically sold in standard lyophilized form.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Years of Operation
        </h3>
        <p className="mt-2 text-navy/70">
          Peptide Sciences has been in continuous operation for over ten years,
          which is notable in a market where vendors frequently appear and
          disappear. Longevity is one meaningful signal of operational stability,
          though it is not a substitute for current COA verification.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Product Quality & COA <COABadge />
        </h2>
        <p className="mt-3 text-navy/70">
          COA compliance is the primary quality metric we assess. Peptide Sciences
          provides Certificates of Analysis for their products, and the following
          summarizes what we found.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          COA Availability
        </h3>
        <p className="mt-2 text-navy/70">
          COAs are accessible on product pages for major compounds. The documents
          include HPLC purity data and, for most products, mass spectrometry
          identity confirmation. Third-party laboratory identification is present
          on the documents we reviewed.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Purity Levels Reported
        </h3>
        <p className="mt-2 text-navy/70">
          Reported purity levels on available COAs are generally in the 98–99%+
          range by HPLC. These figures are consistent with what would be expected
          from a manufacturer maintaining quality synthesis standards.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Community-Corroborated Testing
        </h3>
        <p className="mt-2 text-navy/70">
          Independent testing results from community sources have generally aligned
          with Peptide Sciences' vendor-supplied COAs, though independent
          verification coverage is not complete across all products and batches.
          Researchers are always encouraged to cross-reference available
          independent test results.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Pricing</h2>
        <p className="mt-3 text-navy/70">
          Peptide Sciences is positioned at the mid-to-premium end of the pricing
          spectrum for US-based vendors. Their prices are not the lowest available,
          but they are within a range consistent with proper synthesis and
          third-party testing costs.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Price vs. Value
        </h3>
        <p className="mt-2 text-navy/70">
          For researchers prioritizing COA documentation and vendor stability over
          lowest unit cost, Peptide Sciences represents reasonable value.
          Significant discounts relative to this vendor's pricing should be treated
          as a potential quality signal elsewhere in the market.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Discounts and Promotions
        </h3>
        <p className="mt-2 text-navy/70">
          The company periodically runs site-wide promotions. Bulk pricing is
          available for larger quantity orders. Coupon codes are occasionally
          distributed through affiliated sites — where applicable we include
          current offers in our vendor listings.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Shipping & Delivery
        </h2>
        <p className="mt-3 text-navy/70">
          Shipping performance is a consistent point of discussion in the research
          community. Here is what the documented community history shows for
          Peptide Sciences.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Domestic Shipping (US)
        </h3>
        <p className="mt-2 text-navy/70">
          US orders are generally fulfilled within 1–3 business days and delivered
          within standard USPS timeframes. Packaging is discrete with no external
          indication of contents. Cold packs are used for temperature-sensitive
          orders where applicable.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          International Shipping
        </h3>
        <p className="mt-2 text-navy/70">
          International availability and customs clearance vary significantly by
          destination country. Researchers outside the US should verify current
          shipping policies and applicable import regulations for their
          jurisdiction before ordering.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Customer Service</h2>
        <p className="mt-3 text-navy/70">
          Customer service quality is assessed based on community-reported
          experiences and direct inquiry responsiveness.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Responsiveness
        </h3>
        <p className="mt-2 text-navy/70">
          Community reports generally indicate responsive email support with
          turnaround times of 24–48 business hours for routine inquiries.
          Resolution of order issues has been reported as generally fair by the
          community over the vendor's operating history.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Issue Resolution
        </h3>
        <p className="mt-2 text-navy/70">
          Documented cases of missing or damaged orders have generally been
          resolved with replacement shipments. The company's longevity suggests
          an operational interest in maintaining customer relationships, which
          is reflected in the customer service track record.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Verdict</h2>
        <p className="mt-3 text-navy/70">
          Peptide Sciences is among the more established and consistently
          documented vendors in the US research peptide market. COA availability
          is above average for the space, pricing is fair relative to what is
          offered, and multi-year community reputation is generally positive.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">Who It Suits</h3>
        <p className="mt-2 text-navy/70">
          Researchers who prioritize documentation quality and vendor stability
          over lowest cost. Those seeking a broad US-based catalog with available
          COAs for most products.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Considerations
        </h3>
        <p className="mt-2 text-navy/70">
          Pricing is mid-to-premium. Independent verification of batch-specific
          COAs against purchased product is always recommended regardless of
          vendor reputation.
        </p>
      </section>

      <div className="mt-12">
        <Link
          href="/best-peptide-sources"
          className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Compare All Vetted Sources
        </Link>
      </div>

      <div className="mt-12">
        <AffiliateDisclosure />
      </div>
    </div>
  );
}
