import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Research vs Pharmaceutical Peptides — Key Differences",
  description:
    "Understand the differences between research-grade and pharmaceutical-grade peptides. Quality, regulation, and what it means for you.",
};

export default function ResearchVsPharmaPeptidesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">Research vs Pharmaceutical Peptides</span>
      </nav>

      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Research vs Pharmaceutical Peptides
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Not all peptides are created equal. The distinction between
        research-grade and pharmaceutical-grade peptides has significant
        implications for quality, safety, legality, and how these compounds
        should be approached. Understanding the difference is essential for
        anyone navigating this space.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          What Are Research Peptides?
        </h2>
        <p className="mt-3 text-navy/70">
          Research peptides are synthetic peptides sold for laboratory and
          scientific research purposes. They are not approved by regulatory
          bodies such as the FDA or EMA for human use, and vendors are legally
          required to sell them labeled as "for research purposes only" — not
          for human consumption, veterinary use, or food production.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          The Research Market
        </h3>
        <p className="mt-2 text-navy/70">
          A large market of research peptide suppliers exists primarily online.
          Quality among these vendors varies enormously. Some operate with
          rigorous third-party testing and transparent COAs; others sell
          substandard or mislabeled products with minimal quality controls. The
          lack of regulatory oversight is the defining characteristic of this
          market segment.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Common Research Peptides
        </h3>
        <p className="mt-2 text-navy/70">
          BPC-157, TB-500 (Thymosin Beta-4 fragment), Ipamorelin, CJC-1295,
          Hexarelin, and MOTS-c are among the most widely studied compounds in
          the research peptide category. None of these are approved for human
          use in most countries, though some are actively being investigated
          in clinical trials.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          What Are Pharma Peptides?
        </h2>
        <p className="mt-3 text-navy/70">
          Pharmaceutical-grade peptides are those that have completed the full
          regulatory approval process — including Phase I, II, and III clinical
          trials — and have been approved by a regulatory authority for
          therapeutic use in humans. They are manufactured under strict Good
          Manufacturing Practice (GMP) conditions and are dispensed through
          licensed pharmacies with a valid prescription.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Examples of Approved Peptide Drugs
        </h3>
        <p className="mt-2 text-navy/70">
          Semaglutide (Ozempic, Wegovy), liraglutide (Victoza), tesamorelin
          (Egrifta), and sermorelin (in compounded form) are examples of
          peptide-based drugs that have cleared regulatory approval. Insulin —
          itself a peptide hormone — is the most widely used therapeutic peptide
          in the world.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Compounded Peptides
        </h3>
        <p className="mt-2 text-navy/70">
          An intermediate category exists: compounded peptides prepared by
          licensed compounding pharmacies. These are made to order, often
          without FDA approval for their specific formulation, but are
          manufactured under pharmacy regulatory oversight. Access typically
          requires a physician's prescription and varies by jurisdiction.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Quality Differences
        </h2>
        <p className="mt-3 text-navy/70">
          The quality gap between research and pharmaceutical peptides can be
          substantial, though the best research peptide vendors do close much
          of this gap through rigorous voluntary quality controls.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          GMP Manufacturing Standards
        </h3>
        <p className="mt-2 text-navy/70">
          Pharmaceutical peptides are produced under GMP conditions with
          validated manufacturing processes, environmental controls, equipment
          qualification, and comprehensive documentation. Batch-to-batch
          consistency is mandated. Research peptide manufacturers are not
          subject to GMP requirements, though some voluntarily adopt GMP-aligned
          practices.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Testing Requirements
        </h3>
        <p className="mt-2 text-navy/70">
          Pharmaceutical peptides undergo extensive analytical testing including
          identity confirmation, potency assay, endotoxin testing, sterility
          testing, and stability studies under multiple conditions. Research
          peptides are tested at the discretion of the vendor — the best vendors
          provide HPLC purity analysis and mass spectrometry from independent
          labs, but this is voluntary.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Formulation Differences
        </h3>
        <p className="mt-2 text-navy/70">
          Pharmaceutical formulations include precisely controlled excipients,
          pH adjusters, and preservatives optimized for safety and stability.
          Research peptides are typically sold as plain lyophilized powder,
          requiring the end user to handle reconstitution — introducing an
          additional source of variability and potential error.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Legal Considerations
        </h2>
        <p className="mt-3 text-navy/70">
          The legal landscape for research peptides is complex, jurisdiction-
          dependent, and evolving. What is legal in one country may be
          prohibited in another, and regulations change as authorities respond
          to the growing use of these compounds.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          United States
        </h3>
        <p className="mt-2 text-navy/70">
          In the United States, research peptides occupy a grey area. They are
          not approved drugs, so they cannot legally be sold for human use.
          However, simple possession for personal use is not explicitly
          criminalized for most peptides. The FDA has taken action against
          vendors making therapeutic claims, and some peptides (such as BPC-157)
          have been placed on the FDA's list of bulk drug substances that may not
          be compounded, complicating pharmacy access.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          International Variation
        </h3>
        <p className="mt-2 text-navy/70">
          Regulations vary significantly across jurisdictions. Australia has
          stricter controls, classifying many peptides as prescription-only
          substances. The United Kingdom and European Union each have their own
          frameworks. Always verify the legal status of a specific compound
          in your jurisdiction before obtaining it.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Anti-Doping Considerations
        </h3>
        <p className="mt-2 text-navy/70">
          Most growth hormone secretagogues and many other research peptides are
          prohibited under the World Anti-Doping Agency (WADA) code. Athletes
          subject to anti-doping rules should be aware that research peptides
          may trigger positive tests and result in sanctions regardless of their
          legal status in their country of residence.
        </p>
      </section>

      <div className="mt-12">
        <Link
          href="/best-peptide-sources"
          className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Find Trusted Peptide Sources
        </Link>
      </div>

      <div className="mt-12">
        <AffiliateDisclosure />
      </div>
    </div>
  );
}
