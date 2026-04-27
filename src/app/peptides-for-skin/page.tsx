import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Best Peptides for Skin — Anti-Aging & Healing Guide",
  description:
    "Explore the best peptides for skin health, anti-aging, and wound healing. Research on GHK-Cu, BPC-157, and collagen peptides.",
};

export default function PeptidesForSkinPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Best Peptides for Skin
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Peptides have become one of the most researched categories in both
        dermatology and biohacking for their potential to support collagen
        synthesis, reduce inflammation, accelerate wound healing, and address
        visible signs of aging. This guide covers the science behind the most
        promising skin-focused peptides.
      </p>

      {/* Why Peptides for Skin */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Why Peptides for Skin?
        </h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Skin health is fundamentally about collagen integrity, cellular
          turnover, and controlled inflammation. As we age, collagen production
          declines, wound healing slows, and inflammatory processes can become
          dysregulated. Peptides that target these pathways offer a potentially
          precise approach to supporting skin from the inside out or directly at
          the skin surface.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Unlike traditional skincare actives that work primarily at the surface
          level, certain peptides — particularly copper peptides like GHK-Cu —
          have been studied for their ability to influence gene expression
          related to collagen, elastin, and glycosaminoglycan production.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm text-amber-900/80">
            <strong>Important:</strong> The information on this page is for
            educational purposes only and is not medical advice. Always consult
            a qualified healthcare professional before using any peptide.
          </p>
        </div>
      </section>

      {/* Top Skin Peptides */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Top Skin Peptides</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          These compounds have the most evidence base for skin-related
          applications, ranging from topical anti-aging to wound healing and
          systemic skin repair.
        </p>

        <div className="mt-6 space-y-4">
          <Link
            href="/peptides/ghk-cu"
            className="block rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-navy">GHK-Cu</h3>
            <p className="mt-2 text-sm text-navy/60">
              Glycine-Histidine-Lysine Copper (GHK-Cu) is one of the most
              studied peptides in dermatology. Research suggests it stimulates
              collagen and elastin synthesis, promotes wound healing, and may
              modulate hundreds of genes related to tissue remodeling and
              anti-aging. Available in both topical and injectable forms.
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-accent-dark">
              Read full guide &rarr;
            </span>
          </Link>

          <Link
            href="/peptides/bpc-157"
            className="block rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-navy">BPC-157</h3>
            <p className="mt-2 text-sm text-navy/60">
              While primarily known for musculoskeletal recovery, BPC-157 has
              shown notable results in preclinical wound healing models,
              including skin wounds. It promotes angiogenesis and fibroblast
              activity — both critical for skin repair — and has been explored
              for its potential in accelerating dermal healing.
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-accent-dark">
              Read full guide &rarr;
            </span>
          </Link>
        </div>
      </section>

      {/* Topical vs Injectable */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Topical vs Injectable
        </h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          A key consideration for skin peptides is the route of administration.
          GHK-Cu, for example, is available in both topical serums and as an
          injectable peptide, and the evidence base differs substantially between
          these two forms.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-navy">Topical</h3>
            <ul className="mt-3 space-y-2 text-sm text-navy/70">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>Lower systemic exposure, generally considered safer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>Penetration limited by skin barrier</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>Well-studied for GHK-Cu specifically</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-navy">Injectable</h3>
            <ul className="mt-3 space-y-2 text-sm text-navy/70">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>Higher bioavailability, systemic distribution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>Requires sterile technique and quality sourcing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>Less studied for cosmetic skin endpoints</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          For a direct comparison of GHK-Cu against collagen supplements, see
          our{" "}
          <Link
            href="/ghk-cu-vs-collagen"
            className="font-medium text-accent-dark hover:underline"
          >
            GHK-Cu vs Collagen guide
          </Link>
          .
        </p>
      </section>

      {/* Safety Considerations */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Safety Considerations</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Topical GHK-Cu has a strong safety record from decades of cosmetic
          use. Injectable forms carry greater risk, primarily related to
          injection technique, sterility, and product purity. As with all
          research peptides, long-term human safety data is limited, and neither
          compound is FDA-approved as a therapeutic drug.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Individuals with copper metabolism disorders should exercise particular
          caution with GHK-Cu. Always consult a dermatologist or healthcare
          professional before adding peptides to your skin health regimen.
        </p>
      </section>

      {/* Where to Buy */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Where to Buy</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Purity verification through third-party COA testing is essential for
          any peptide you plan to use on or in your body. We have reviewed the
          most reputable research peptide vendors so you don&apos;t have to.
        </p>
        <Link
          href="/best-peptide-sources"
          className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          View our vetted peptide sources &rarr;
        </Link>
        <div className="mt-6">
          <AffiliateDisclosure />
        </div>
      </section>
    </div>
  );
}
