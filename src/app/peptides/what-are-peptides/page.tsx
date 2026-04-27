import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "What Are Peptides? — Complete Beginner's Guide",
  description:
    "Learn what peptides are, how they work in your body, and why they matter for biohacking. Evidence-based guide for beginners.",
};

export default function WhatArePeptidesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">What Are Peptides?</span>
      </nav>

      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        What Are Peptides?
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Peptides are short chains of amino acids — the same building blocks that
        make up proteins. They act as biological messengers, signaling your
        cells to perform specific functions. Understanding what peptides are is
        the first step to understanding why they have attracted so much attention
        in biohacking and longevity research.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Peptides vs Proteins
        </h2>
        <p className="mt-3 text-navy/70">
          The primary difference between a peptide and a protein is length.
          Peptides are generally defined as chains of 2–50 amino acids, while
          proteins are longer and typically fold into complex three-dimensional
          structures. Because peptides are shorter, they are often more targeted
          in their action and can be absorbed or synthesized more easily by the
          body.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Why Size Matters
        </h3>
        <p className="mt-2 text-navy/70">
          Shorter chains mean faster degradation by enzymes but also more
          specific receptor interactions. Many therapeutic peptides are designed
          to mimic naturally occurring signaling molecules, allowing researchers
          to study isolated biological pathways without the complexity of full
          proteins.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Overlap and Nuance
        </h3>
        <p className="mt-2 text-navy/70">
          The line between peptides and small proteins is blurry. Insulin, for
          example, is often categorized as a peptide hormone despite having 51
          amino acids. Context and function matter as much as chain length when
          classifying these molecules.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Types of Peptides</h2>
        <p className="mt-3 text-navy/70">
          Peptides are not a monolithic category. Researchers classify them in
          several ways depending on their origin, function, or target tissue.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Endogenous Peptides
        </h3>
        <p className="mt-2 text-navy/70">
          These are peptides your body produces naturally. Examples include
          endorphins, oxytocin, and growth hormone-releasing hormone (GHRH).
          They regulate everything from pain perception to social bonding to
          metabolism.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Synthetic Peptides
        </h3>
        <p className="mt-2 text-navy/70">
          Synthetic peptides are manufactured in laboratories, either as exact
          copies of natural peptides or as novel sequences designed to achieve a
          specific outcome. BPC-157 and TB-500 are common examples studied for
          their potential roles in tissue repair.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Peptide Hormones
        </h3>
        <p className="mt-2 text-navy/70">
          A subset of peptides that function as hormones, traveling through the
          bloodstream to act on distant tissues. Growth hormone secretagogues
          like Ipamorelin and CJC-1295 fall into this category.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          How Peptides Are Made
        </h2>
        <p className="mt-3 text-navy/70">
          In the body, peptides are synthesized by ribosomes from genetic
          instructions encoded in DNA. Enzymes then cleave larger precursor
          proteins into smaller, active peptide fragments. In the lab, peptides
          are typically manufactured using solid-phase peptide synthesis (SPPS),
          a method that strings amino acids together one at a time on a solid
          resin support.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Solid-Phase Peptide Synthesis
        </h3>
        <p className="mt-2 text-navy/70">
          SPPS allows chemists to build peptides of defined sequence with high
          precision. After synthesis, the peptide is cleaved from the resin,
          purified — typically by HPLC — and lyophilized (freeze-dried) into a
          stable powder form.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Purity and Quality Control
        </h3>
        <p className="mt-2 text-navy/70">
          Synthesis quality varies significantly between manufacturers. Reputable
          suppliers publish Certificates of Analysis (COAs) confirming purity
          levels, typically expressed as a percentage. Lower purity means more
          impurities, which increases unknown risk.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Are Peptides Safe?
        </h2>
        <p className="mt-3 text-navy/70">
          Safety is compound-specific, dose-dependent, and highly dependent on
          source quality. Many peptides have favorable safety profiles in
          research settings, but the research landscape is still maturing. No
          peptide should be considered risk-free, and most have not undergone the
          rigorous human clinical trials required of pharmaceutical drugs.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Research Context
        </h3>
        <p className="mt-2 text-navy/70">
          The majority of peptide research has been conducted in animal models.
          Extrapolating animal data to human outcomes requires caution. Some
          findings translate well; others do not.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          The Source Problem
        </h3>
        <p className="mt-2 text-navy/70">
          Even a peptide with a solid safety profile becomes dangerous if it
          comes from a low-quality supplier. Contamination, incorrect
          concentration, and misidentified compounds are real risks in the
          research peptide market. Sourcing from vendors who provide
          third-party-verified COAs is essential.
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
