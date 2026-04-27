import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Best Peptides for Recovery — Evidence-Based Guide",
  description:
    "Discover the best peptides for recovery from injury, surgery, and exercise. Research-backed guide covering BPC-157, TB-500, and more.",
};

export default function PeptidesForRecoveryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Best Peptides for Recovery
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Whether you&apos;re recovering from a sports injury, surgery, or pushing
        hard in training, certain peptides have attracted significant research
        interest for their potential roles in tissue repair and healing. This
        guide covers the evidence on the most studied recovery peptides.
      </p>

      {/* Why Peptides for Recovery */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Why Peptides for Recovery?
        </h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          The body&apos;s natural healing process is driven by signaling
          molecules — and many peptides act as precisely these kinds of signals.
          By mimicking or amplifying the body&apos;s own repair mechanisms,
          certain synthetic peptides may help accelerate the recovery timeline
          for musculoskeletal injuries, reduce inflammation, and support
          connective tissue regeneration.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Most recovery-focused peptides work through pathways involving growth
          factors, angiogenesis (formation of new blood vessels), and collagen
          synthesis. The research is primarily preclinical at this stage, but
          the results have driven substantial community interest among athletes
          and biohackers.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm text-amber-900/80">
            <strong>Important:</strong> The information on this page is for
            educational purposes only and is not medical advice. Always consult
            a qualified healthcare professional before using any peptide.
          </p>
        </div>
      </section>

      {/* Top Recovery Peptides */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Top Recovery Peptides</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          These two compounds are the most studied and most widely discussed
          recovery peptides in both the scientific literature and the biohacking
          community.
        </p>

        <div className="mt-6 space-y-4">
          <Link
            href="/peptides/bpc-157"
            className="block rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-navy">BPC-157</h3>
            <p className="mt-2 text-sm text-navy/60">
              Body Protective Compound-157 is a synthetic peptide derived from a
              protein found in gastric juice. It has shown striking results in
              animal models for tendon, ligament, muscle, and gut healing, and
              is one of the most popular recovery peptides in the community.
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-accent-dark">
              Read full guide &rarr;
            </span>
          </Link>

          <Link
            href="/peptides/tb-500"
            className="block rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-navy">TB-500</h3>
            <p className="mt-2 text-sm text-navy/60">
              Thymosin Beta-4 (TB-500) is a naturally occurring peptide with a
              strong record in preclinical research for promoting wound healing,
              reducing inflammation, and supporting muscle repair. It&apos;s
              frequently stacked with BPC-157 for synergistic recovery effects.
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-accent-dark">
              Read full guide &rarr;
            </span>
          </Link>
        </div>
      </section>

      {/* How They Work Together */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How They Work Together
        </h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          BPC-157 and TB-500 are frequently combined because they appear to
          operate through complementary mechanisms. BPC-157 is thought to work
          more locally — concentrating effects near the injection site — while
          TB-500 is believed to act more systemically through the bloodstream.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Together, they may address both the site of injury and broader
          systemic recovery factors. This combination is sometimes called the
          &ldquo;recovery stack&rdquo; in biohacking circles. For a detailed
          comparison of the two, see our{" "}
          <Link
            href="/bpc-157-vs-tb-500"
            className="font-medium text-accent-dark hover:underline"
          >
            BPC-157 vs TB-500 comparison guide
          </Link>
          .
        </p>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="font-semibold text-navy">Mechanisms at a Glance</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy/70">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                <strong>BPC-157:</strong> Promotes angiogenesis, upregulates
                growth hormone receptors, may modulate nitric oxide pathways
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                <strong>TB-500:</strong> Regulates actin — a key structural
                protein in cells — promoting cell migration and tissue
                regeneration
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                <strong>Combined:</strong> Potentially complementary local and
                systemic effects on healing and inflammation
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Safety Considerations */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Safety Considerations</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          The safety profiles of BPC-157 and TB-500 are considered favorable in
          preclinical studies, with no significant toxicity observed even at
          high doses in animal models. However, long-term human safety data is
          largely absent, as most research has not progressed to large-scale
          clinical trials.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Key considerations include sourcing quality (purity matters
          enormously), proper reconstitution and storage, and avoiding
          self-administration without medical supervision. Neither peptide is
          FDA-approved for human therapeutic use.
        </p>
      </section>

      {/* Where to Buy */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Where to Buy</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Sourcing from a reputable vendor with third-party Certificate of
          Analysis (COA) documentation is critical. Purity, sterility, and
          accurate peptide content can vary dramatically between suppliers.
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
