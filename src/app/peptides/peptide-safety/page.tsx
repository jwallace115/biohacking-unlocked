import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Peptide Safety — What You Need to Know",
  description:
    "Understanding peptide safety: risks, side effects, quality concerns, and how to minimize harm. Research-based safety guide.",
  robots: { index: false, follow: false },
};

export default function PeptideSafetyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">Peptide Safety</span>
      </nav>

      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Peptide Safety Guide
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Safety is the most important consideration when researching or using
        peptides. This guide covers what we currently know about risks, side
        effects, and quality concerns — and how to approach peptides with a
        rational, evidence-informed mindset.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          General Safety Considerations
        </h2>
        <p className="mt-3 text-navy/70">
          Peptides are not uniformly safe or unsafe — safety depends on the
          specific compound, dose, frequency of use, route of administration,
          and individual health status. Unlike pharmaceutical drugs, most
          research peptides have not completed Phase III human clinical trials,
          meaning long-term safety data in humans is limited.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          The Regulatory Gap
        </h3>
        <p className="mt-2 text-navy/70">
          In most jurisdictions, research peptides exist in a grey area. They
          are not approved for human use but are not always explicitly
          prohibited. This regulatory gap means there is no mandatory safety
          surveillance, no standardized dosing guidelines, and no requirement
          for adverse event reporting by sellers.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Individual Variability
        </h3>
        <p className="mt-2 text-navy/70">
          Genetics, existing health conditions, medications, and baseline hormone
          levels all influence how an individual responds to a given peptide.
          What is well-tolerated by one person may cause significant side effects
          in another. Consulting a knowledgeable physician before use is
          strongly advised.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Common Side Effects
        </h2>
        <p className="mt-3 text-navy/70">
          Side effect profiles differ by peptide class, but several effects
          appear across multiple compounds in research and anecdotal reports.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Injection Site Reactions
        </h3>
        <p className="mt-2 text-navy/70">
          Redness, swelling, itching, and minor pain at the injection site are
          among the most commonly reported issues. These are usually transient
          and related to injection technique or carrier solvents rather than the
          peptide itself.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Hormonal Effects
        </h3>
        <p className="mt-2 text-navy/70">
          Growth hormone secretagogues (e.g., Ipamorelin, CJC-1295) stimulate
          GH release, which can affect insulin sensitivity, water retention, and
          cortisol levels. Prolonged elevation of GH or IGF-1 beyond normal
          physiological ranges carries theoretical risks including increased
          cancer cell proliferation, though this remains an area of ongoing
          research.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Flushing and Headache
        </h3>
        <p className="mt-2 text-navy/70">
          Some peptides, particularly those affecting vasodilation or neuropeptide
          pathways, are associated with transient flushing, headache, or
          lightheadedness, especially at higher doses.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Quality & Purity Concerns
        </h2>
        <p className="mt-3 text-navy/70">
          The single largest modifiable safety risk for anyone using research
          peptides is source quality. Impurities, bacterial endotoxins, incorrect
          concentrations, and even completely mislabeled compounds have been
          documented in the research peptide market.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          What to Look For in a COA
        </h3>
        <p className="mt-2 text-navy/70">
          A Certificate of Analysis (COA) from a reputable third-party laboratory
          should confirm: peptide identity (by mass spectrometry), purity
          percentage (by HPLC, ideally above 98%), absence of heavy metals, and
          endotoxin levels below accepted thresholds. Batch-specific COAs —
          not generic ones — are the gold standard.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Red Flags in Vendors
        </h3>
        <p className="mt-2 text-navy/70">
          Be cautious of vendors who cannot provide batch-specific COAs,
          who offer prices significantly below market rate, who make therapeutic
          claims on their product pages, or whose COAs come from in-house labs
          rather than independent third parties.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          When to Avoid Peptides
        </h2>
        <p className="mt-3 text-navy/70">
          There are circumstances where peptide use carries elevated risk and
          should be avoided or approached only under medical supervision.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Active Cancer or Cancer History
        </h3>
        <p className="mt-2 text-navy/70">
          Peptides that elevate growth hormone or IGF-1 are generally
          contraindicated for individuals with active cancer or a history of
          hormone-sensitive cancers. Growth factors can theoretically accelerate
          tumor growth, though direct causal evidence in humans is limited.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Pregnancy and Breastfeeding
        </h3>
        <p className="mt-2 text-navy/70">
          Safety data for peptides during pregnancy or breastfeeding is virtually
          nonexistent. Given unknown teratogenic potential, use during these
          periods is not advisable.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Drug Interactions
        </h3>
        <p className="mt-2 text-navy/70">
          Peptides can interact with medications, particularly those affecting
          hormonal axes, blood glucose regulation, or immune function. Always
          disclose peptide use to your prescribing physician.
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
