import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "How to Store Peptides — Proper Storage & Handling Guide",
  description:
    "Learn how to properly store, reconstitute, and handle peptides to maintain potency. Temperature, light, and storage best practices.",
};

export default function HowToStorePeptidesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">How to Store Peptides</span>
      </nav>

      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        How to Store Peptides
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Proper storage is critical for maintaining peptide potency and safety.
        Peptides are relatively fragile molecules — heat, light, moisture, and
        contamination can all degrade them quickly. Following best practices
        from the point of purchase through each use protects your investment and
        reduces risk.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Temperature Requirements
        </h2>
        <p className="mt-3 text-navy/70">
          Temperature is the most important variable in peptide storage.
          Lyophilized (freeze-dried) peptide powder is far more stable than
          reconstituted solution, but both require careful temperature management.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Lyophilized Powder Storage
        </h3>
        <p className="mt-2 text-navy/70">
          Unopened vials of lyophilized peptide powder can generally be stored
          at 4°C (standard refrigerator temperature) for several months without
          significant degradation. For long-term storage of six months or more,
          −20°C (freezer) is preferred. Some peptides — particularly those with
          oxidation-sensitive residues like cysteine or methionine — benefit from
          −80°C storage.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Reconstituted Solution Storage
        </h3>
        <p className="mt-2 text-navy/70">
          Once a peptide has been reconstituted with bacteriostatic water or
          sterile saline, it should always be refrigerated at 4°C and used within
          28–30 days. The addition of bacteriostatic water (which contains 0.9%
          benzyl alcohol) extends this window compared to plain sterile water.
          Do not freeze reconstituted peptides — freezing can cause aggregation
          and loss of biological activity.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Avoid Temperature Cycling
        </h3>
        <p className="mt-2 text-navy/70">
          Repeated freeze-thaw cycles accelerate peptide degradation. If you
          need to freeze lyophilized powder, allow it to return to room
          temperature before opening the vial to prevent condensation, and
          minimize the number of freeze-thaw events.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Reconstitution Basics
        </h2>
        <p className="mt-3 text-navy/70">
          Reconstitution is the process of adding a liquid diluent to lyophilized
          peptide powder to create an injectable solution. Done correctly, it
          preserves peptide integrity. Done incorrectly, it can damage the
          peptide or introduce contamination.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Choosing a Diluent
        </h3>
        <p className="mt-2 text-navy/70">
          Bacteriostatic water is the preferred diluent for most research
          peptides. The benzyl alcohol it contains inhibits microbial growth,
          extending the usable life of the reconstituted solution. Plain sterile
          water for injection is an acceptable alternative but results in a
          shorter window for use (typically 5–7 days).
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Reconstitution Technique
        </h3>
        <p className="mt-2 text-navy/70">
          Draw the diluent into a clean syringe and inject it slowly down the
          side of the vial — never directly onto the lyophilized powder under
          pressure, as this can denature the peptide. Gently swirl or roll the
          vial to mix; do not vortex or shake vigorously. Allow the powder to
          dissolve completely before use.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Calculating Concentrations
        </h3>
        <p className="mt-2 text-navy/70">
          Accurate dosing requires knowing the concentration of your solution.
          If you add 2 mL of bacteriostatic water to a 5 mg vial, your
          concentration is 2.5 mg/mL (2500 mcg/mL). A 250 mcg dose would then
          require 0.1 mL (10 units on a U-100 insulin syringe). Double-check
          your calculations before each use.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Light & Contamination
        </h2>
        <p className="mt-3 text-navy/70">
          Beyond temperature, light exposure and contamination are the two most
          common causes of preventable peptide degradation.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          UV Light Degradation
        </h3>
        <p className="mt-2 text-navy/70">
          Many peptides are sensitive to ultraviolet light, which can break
          peptide bonds and alter amino acid side chains — particularly those
          containing tryptophan, tyrosine, or phenylalanine residues. Store
          vials in their original packaging or in an opaque container, away from
          direct sunlight and fluorescent lighting.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Maintaining Sterility
        </h3>
        <p className="mt-2 text-navy/70">
          Always use a new, sterile needle each time you withdraw from a vial.
          Wipe the rubber stopper with an alcohol swab before each puncture. Work
          on a clean surface and avoid touching syringe plungers, needle tips,
          or vial stoppers after they have been cleaned. Even bacteriostatic
          water has contamination limits — it does not render a contaminated
          solution safe.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Signs of Degradation or Contamination
        </h3>
        <p className="mt-2 text-navy/70">
          Discard any vial that shows visible particulates, cloudiness in a
          solution that should be clear, unusual color, or an off odor. These
          are indicators of either contamination or significant peptide
          degradation. When in doubt, throw it out.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Shelf Life</h2>
        <p className="mt-3 text-navy/70">
          Shelf life varies by peptide, storage conditions, and whether the
          peptide has been reconstituted. The guidelines below are general
          approximations — always defer to vendor-specific recommendations and
          COA documentation.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Lyophilized Powder
        </h3>
        <p className="mt-2 text-navy/70">
          At 4°C: typically 6–12 months. At −20°C: 1–2 years for most peptides.
          Peptides containing disulfide bonds or oxidation-sensitive residues
          may have shorter effective shelf lives even under ideal conditions.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Reconstituted Solution
        </h3>
        <p className="mt-2 text-navy/70">
          Reconstituted in bacteriostatic water at 4°C: up to 28–30 days for
          most peptides. Reconstituted in plain sterile water at 4°C: 5–7 days.
          Peptides that are particularly susceptible to hydrolysis may degrade
          faster once in solution.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          When to Discard
        </h3>
        <p className="mt-2 text-navy/70">
          Even within the stated shelf life window, peptides should be discarded
          if storage conditions were compromised — for example, if a vial was
          left out of refrigeration for an extended period or exposed to direct
          sunlight. Degraded peptides may be inactive, or in rare cases, degraded
          fragments could produce unexpected biological effects.
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
