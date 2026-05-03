import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "How Peptides Work — Mechanisms of Action Explained",
  description:
    "Understand the science behind how peptides work in your body. From receptor binding to cellular signaling — explained simply.",
  robots: { index: false, follow: false },
};

export default function HowPeptidesWorkPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">How Peptides Work</span>
      </nav>

      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        How Peptides Work
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Peptides achieve their effects by interacting with specific biological
        targets — primarily receptors on cell surfaces. Understanding the
        mechanisms behind these interactions helps clarify both what peptides
        can realistically do and where the limits of current research lie.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Receptor Binding</h2>
        <p className="mt-3 text-navy/70">
          Most peptides work by binding to specific receptors on the surface of
          target cells. This lock-and-key interaction triggers a cascade of
          intracellular events. Specificity is key — a well-designed peptide
          binds its target receptor with high affinity and minimal off-target
          activity, which is one reason peptides are appealing compared to
          small-molecule drugs.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          G Protein-Coupled Receptors (GPCRs)
        </h3>
        <p className="mt-2 text-navy/70">
          Many peptide hormones and research peptides act on GPCRs, the largest
          family of cell-surface receptors in the human body. When a peptide
          binds a GPCR, it activates intracellular G proteins, which modulate
          enzymes like adenylyl cyclase and phospholipase C, altering the
          concentration of second messengers such as cAMP and calcium ions.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Agonists vs Antagonists
        </h3>
        <p className="mt-2 text-navy/70">
          A peptide that activates a receptor upon binding is called an agonist.
          One that blocks the receptor without activating it is an antagonist.
          Some synthetic peptides are partial agonists, producing a submaximal
          response — a property that can be therapeutically useful for
          fine-tuning biological systems.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Cellular Signaling
        </h2>
        <p className="mt-3 text-navy/70">
          Receptor binding is just the first step. The downstream signaling
          cascades that follow determine the actual cellular response — whether
          that means synthesizing a protein, triggering cell growth, modulating
          inflammation, or altering gene expression.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Second Messenger Systems
        </h3>
        <p className="mt-2 text-navy/70">
          Second messengers like cyclic AMP (cAMP), diacylglycerol (DAG), and
          inositol trisphosphate (IP3) relay and amplify the signal from the
          receptor into the interior of the cell. A single receptor activation
          event can trigger thousands of downstream molecular events through
          these amplification cascades.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Gene Expression Changes
        </h3>
        <p className="mt-2 text-navy/70">
          Some peptide signaling pathways ultimately reach the cell nucleus,
          altering which genes are transcribed. This is how growth
          hormone-releasing peptides can stimulate the production of IGF-1 in
          the liver — the peptide signal travels from the pituitary gland
          through the bloodstream and eventually changes gene expression in
          hepatic tissue.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Bioavailability</h2>
        <p className="mt-3 text-navy/70">
          Bioavailability refers to the fraction of an administered dose that
          reaches the systemic circulation in an active form. This is one of the
          primary practical challenges with peptide therapeutics.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Why Oral Bioavailability Is Low
        </h3>
        <p className="mt-2 text-navy/70">
          Peptides are composed of amino acids connected by peptide bonds.
          Digestive enzymes (proteases and peptidases) in the stomach and small
          intestine are specifically designed to cleave these bonds, breaking
          peptides down into individual amino acids long before they can reach
          the bloodstream intact. Most research peptides are therefore
          administered via subcutaneous injection to bypass the gut.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Half-Life Considerations
        </h3>
        <p className="mt-2 text-navy/70">
          Even after injection, peptides are subject to enzymatic degradation in
          the blood. Native peptides often have very short half-lives — sometimes
          minutes. Synthetic modifications such as PEGylation, cyclization, or
          the addition of fatty acid chains can extend half-life significantly,
          which is why compounds like CJC-1295 (with DAC) behave differently
          from shorter-acting analogues.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Routes of Administration
        </h2>
        <p className="mt-3 text-navy/70">
          The route through which a peptide enters the body significantly affects
          its pharmacokinetics — how it is absorbed, distributed, metabolized,
          and excreted.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Subcutaneous Injection
        </h3>
        <p className="mt-2 text-navy/70">
          Injection into the subcutaneous fat layer beneath the skin is the most
          common route for research peptides. It provides consistent absorption
          rates, avoids first-pass hepatic metabolism, and allows for relatively
          slow, sustained release into the bloodstream compared to intravenous
          administration.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Intranasal Administration
        </h3>
        <p className="mt-2 text-navy/70">
          A small number of peptides — notably PT-141 (Bremelanotide) and
          oxytocin — can cross the nasal mucosa with acceptable efficiency.
          Intranasal delivery bypasses the blood-brain barrier challenge by
          accessing the olfactory pathway, which is why some neuropeptides are
          studied via this route.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Emerging Oral Formulations
        </h3>
        <p className="mt-2 text-navy/70">
          Pharmaceutical research is actively exploring lipid nanoparticles,
          protease-resistant analogues, and other formulation strategies to
          improve oral peptide bioavailability. Semaglutide (Rybelsus) represents
          a notable success: an orally bioavailable GLP-1 receptor agonist
          achieved through co-formulation with a novel absorption enhancer.
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
