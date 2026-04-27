import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import COABadge from "@/components/COABadge";

export const metadata: Metadata = {
  title: "Peptide Quality Testing — How to Verify Purity & Authenticity",
  description:
    "Learn how peptide quality testing works. HPLC, mass spectrometry, and third-party verification explained.",
};

export default function PeptideQualityTestingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Peptide Quality Testing
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Quality testing is the only objective safeguard against adulterated,
        mislabeled, or sub-potent peptides. Understanding the methods used —
        and what they can and cannot detect — empowers researchers to evaluate
        vendor claims critically.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Why Testing Matters</h2>
        <p className="mt-3 text-navy/70">
          The research peptide market is unregulated in most jurisdictions. Without
          mandatory testing or government oversight, the only assurance of quality
          comes from independent laboratory verification. Studies and community
          investigations have found products with incorrect concentrations,
          contaminating compounds, and in some cases peptides bearing no
          resemblance to what was advertised.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          What Can Go Wrong Without Testing
        </h3>
        <ul className="mt-2 space-y-2 text-navy/70 list-disc list-inside">
          <li>Wrong peptide entirely — mislabeled or substituted compounds</li>
          <li>
            Incorrect concentration — underdosed or overdosed relative to label
          </li>
          <li>
            Impurities — residual solvents, heavy metals, related peptide
            fragments
          </li>
          <li>
            Endotoxin contamination — bacterial byproducts that can cause
            fever and sepsis
          </li>
          <li>
            Microbial contamination — live bacteria or fungi in solution
          </li>
        </ul>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          The COA as Baseline Verification <COABadge />
        </h3>
        <p className="mt-2 text-navy/70">
          A Certificate of Analysis (COA) issued by an independent third-party
          laboratory is the primary document used to communicate testing results.
          Not all COAs are equal — understanding the underlying test methods
          helps researchers evaluate the strength of the evidence.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">HPLC Analysis</h2>
        <p className="mt-3 text-navy/70">
          High-Performance Liquid Chromatography (HPLC) is the gold-standard
          method for measuring peptide purity. It separates the components of a
          sample by passing it through a column under high pressure, and detects
          each component as it elutes.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          How HPLC Works
        </h3>
        <p className="mt-2 text-navy/70">
          The sample is dissolved in a mobile phase (liquid solvent) and forced
          through a stationary phase (solid column material). Different molecules
          interact with the stationary phase differently, causing them to travel
          at different speeds. A UV detector records each peak as molecules exit
          the column. Peak area corresponds to concentration.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          What HPLC Measures
        </h3>
        <p className="mt-2 text-navy/70">
          HPLC measures the relative abundance of each compound in the sample.
          Purity is reported as the percentage of the total peak area attributed
          to the target compound. A purity of 98%+ is generally considered
          acceptable for research-grade peptides; pharmaceutical-grade material
          typically requires 99%+.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Limitations of HPLC Alone
        </h3>
        <p className="mt-2 text-navy/70">
          HPLC confirms purity but does not directly confirm identity. A sample
          could be 99% pure but still be the wrong peptide. This is why HPLC
          results should always be paired with mass spectrometry for complete
          verification.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Mass Spectrometry</h2>
        <p className="mt-3 text-navy/70">
          Mass spectrometry (MS) identifies compounds by measuring the mass-to-
          charge ratio of ionized molecules. It is the definitive method for
          confirming peptide identity.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          How Mass Spectrometry Works
        </h3>
        <p className="mt-2 text-navy/70">
          The sample is ionized (given a charge), then accelerated through a
          magnetic or electric field. The detector measures how long it takes
          molecules of different masses to reach it. The resulting mass spectrum
          is a fingerprint unique to each molecule's molecular weight and
          fragmentation pattern.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Why It Confirms Identity
        </h3>
        <p className="mt-2 text-navy/70">
          Every peptide has a known theoretical molecular weight derived from
          its amino acid sequence. If the measured molecular weight matches the
          theoretical value within acceptable tolerance (typically ±0.01%), the
          compound's identity is confirmed. MS can also detect common substitutions
          and modifications that would change molecular weight.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          LC-MS/MS — The Combination Method
        </h3>
        <p className="mt-2 text-navy/70">
          Liquid chromatography combined with tandem mass spectrometry (LC-MS/MS)
          pairs the separation power of HPLC with the identification power of
          mass spectrometry. This is the most rigorous analytical approach for
          peptides and is increasingly used by top-tier research chemical vendors.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Third-Party Labs</h2>
        <p className="mt-3 text-navy/70">
          The value of any COA is only as good as the independence and
          accreditation of the laboratory that produced it. In-house testing by
          the vendor represents a conflict of interest and should be treated
          accordingly.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          What Makes a Lab Credible
        </h3>
        <ul className="mt-2 space-y-2 text-navy/70 list-disc list-inside">
          <li>
            ISO/IEC 17025 accreditation — the international standard for
            testing laboratory competence
          </li>
          <li>
            GMP (Good Manufacturing Practice) certification for the analysis
            facility
          </li>
          <li>No financial relationship with the vendor supplying the sample</li>
          <li>
            Batch-specific testing — results tied to a specific lot number, not
            a generic product
          </li>
          <li>
            Publicly verifiable identity — the lab's name, address, and
            accreditation number should be traceable
          </li>
        </ul>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Independent Community Testing
        </h3>
        <p className="mt-2 text-navy/70">
          Some community organizations and individuals send purchased peptides to
          independent labs for verification, then publish results publicly. This
          peer-review layer is an important supplement to vendor-supplied COAs and
          can reveal discrepancies between vendor claims and actual product quality.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Red Flags to Watch For
        </h2>
        <p className="mt-3 text-navy/70">
          Not all COAs and testing claims are legitimate. The following patterns
          should raise serious concerns about a vendor's quality assurance.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          COA Red Flags
        </h3>
        <ul className="mt-2 space-y-2 text-navy/70 list-disc list-inside">
          <li>
            Generic COAs not tied to a specific batch or lot number
          </li>
          <li>COAs from unnamed or unverifiable laboratories</li>
          <li>
            COAs that only show HPLC purity without identity confirmation by
            mass spectrometry
          </li>
          <li>
            Suspiciously round purity numbers (e.g., exactly 99.00% with no
            decimal variation)
          </li>
          <li>
            COAs dated years before the product was purchased
          </li>
          <li>Broken or non-functional links to COA documents</li>
        </ul>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Vendor Behavior Red Flags
        </h3>
        <ul className="mt-2 space-y-2 text-navy/70 list-disc list-inside">
          <li>
            Refusal to provide batch-specific COAs upon request
          </li>
          <li>
            Prices significantly below the market average for the compound
          </li>
          <li>
            Aggressive therapeutic claims that exceed regulatory boundaries
          </li>
          <li>
            No verifiable business address or customer service contact
          </li>
        </ul>
      </section>

      <div className="mt-12">
        <Link
          href="/best-peptide-sources"
          className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Find COA-Verified Peptide Sources
        </Link>
      </div>

      <div className="mt-12">
        <AffiliateDisclosure />
      </div>
    </div>
  );
}
