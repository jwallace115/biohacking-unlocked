import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "GHK-Cu vs Collagen — Which Is Better for Skin & Healing?",
  description:
    "Compare GHK-Cu copper peptide and collagen supplements for skin health, wound healing, and anti-aging.",
};

export default function GHKCuVsCollagenPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        GHK-Cu vs Collagen
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        GHK-Cu (copper peptide) and collagen supplements are both popular for
        skin health and wound healing, but they work through fundamentally
        different mechanisms. This comparison breaks down the science behind
        each and helps you determine which is the better fit for your goals.
      </p>

      {/* Overview */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Overview</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          GHK-Cu is a naturally occurring copper peptide complex (glycyl-L-
          histidyl-L-lysine bound to copper) first isolated from human plasma.
          It has shown activity across a wide range of biological processes
          including wound healing, anti-inflammation, antioxidant activity,
          and stimulation of collagen and elastin synthesis. Collagen
          supplements, typically derived from bovine or marine sources, provide
          the body with amino acid building blocks — primarily glycine, proline,
          and hydroxyproline — that support the body's own collagen production.
        </p>
        <div className="mt-6">
          <Link
            href="/peptides/ghk-cu"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-accent hover:text-accent-dark"
          >
            GHK-Cu Full Profile &rarr;
          </Link>
        </div>
      </section>

      {/* What is GHK-Cu */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">What is GHK-Cu?</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          GHK-Cu is a tripeptide-copper complex that plays an active signaling
          role in the body rather than simply acting as a structural precursor.
          It has been shown in preclinical research to stimulate the production
          of collagen, elastin, and glycosaminoglycans, modulate the activity
          of matrix metalloproteinases (enzymes responsible for skin remodeling),
          and promote angiogenesis. Its anti-inflammatory and antioxidant
          properties have also been documented across multiple cell and animal
          studies.
        </p>
        <h3 className="mt-6 text-xl font-semibold text-navy">Key Research Areas</h3>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder — research highlights covering wound healing acceleration,
          skin tightening, hair follicle stimulation, and gene expression effects
          will be detailed here with linked citations.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">GHK-Cu</th>
                <th className="px-4 py-3">Collagen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-navy/70">Primary Use</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-navy/70">Research Level</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-navy/70">Administration</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What is Collagen */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">What is Collagen?</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Collagen is the most abundant protein in the human body and serves as
          a structural scaffold for skin, tendons, ligaments, cartilage, and
          bone. Collagen supplements — most commonly hydrolyzed collagen peptides
          — are broken down into short amino acid chains that the body can absorb
          and use as raw material for collagen synthesis. Human clinical trial
          data for collagen supplementation is more extensive than for most
          research peptides, with several double-blind, placebo-controlled trials
          showing benefits for skin hydration, elasticity, and joint comfort.
        </p>
        <h3 className="mt-6 text-xl font-semibold text-navy">Types of Collagen</h3>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder — an overview of Type I, II, III, and V collagen and
          their respective applications for skin, joints, and gut health will
          be added here.
        </p>
      </section>

      {/* Research Comparison */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Research Comparison</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Collagen has the stronger human clinical trial base of the two.
          Multiple randomized controlled trials have confirmed benefits for skin
          and joint outcomes. GHK-Cu, while supported by a compelling body of
          in-vitro and animal research, has fewer published human trials —
          though topical applications have been studied in dermatology contexts.
          GHK-Cu operates as an active biological signal rather than a passive
          substrate, which some researchers argue makes it the more mechanistically
          interesting option.
        </p>
        <h3 className="mt-6 text-xl font-semibold text-navy">Head-to-Head Evidence Summary</h3>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder — a structured comparison of study quality, sample sizes,
          outcome measures, and overall evidence grade will be added here.
        </p>
      </section>

      {/* Which Is Right for You */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Which Is Right for You?</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          For individuals seeking a well-studied, widely accessible supplement
          with a strong safety record, hydrolyzed collagen peptides are an
          excellent starting point — particularly for joint and skin support.
          For those interested in a more targeted biological signaling approach,
          particularly for wound healing or advanced skin health, GHK-Cu
          presents a compelling option backed by substantial preclinical evidence.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          The two approaches are not mutually exclusive. Collagen provides the
          structural building blocks while GHK-Cu signals the body to use them
          more effectively. This content is for informational purposes only and
          does not constitute medical advice.
        </p>
      </section>

      {/* Where to Buy */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Where to Buy</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Source purity matters for both compounds. For GHK-Cu as a research
          peptide, third-party COA verification is essential. We maintain an
          up-to-date list of vetted suppliers.
        </p>
        <Link
          href="/best-peptide-sources"
          className="mt-4 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          View Best Peptide Sources &rarr;
        </Link>
      </section>

      <div className="mt-16">
        <AffiliateDisclosure />
      </div>
    </div>
  );
}
