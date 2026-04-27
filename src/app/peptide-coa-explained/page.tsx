import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import COABadge from "@/components/COABadge";

export const metadata: Metadata = {
  title: "Certificate of Analysis (COA) Explained — How to Read a Peptide COA",
  description:
    "Learn how to read and verify a Certificate of Analysis for peptides. Understand purity, testing methods, and batch verification.",
};

export default function PeptideCOAExplainedPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Peptide COA Explained
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        A Certificate of Analysis (COA) is the primary document used to verify
        the purity, identity, and quality of a research peptide. Knowing how to
        read one — and how to tell a genuine COA from a fabricated or inadequate
        one — is an essential skill for any informed researcher.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">What is a COA?</h2>
        <p className="mt-3 text-navy/70">
          A Certificate of Analysis is a document issued by a testing laboratory
          that records the results of analytical tests performed on a specific
          batch of a chemical compound. For peptides, the COA serves as evidence
          that the product has been independently verified to meet stated
          specifications for identity, purity, and — in some cases — safety
          parameters like endotoxin levels.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Why It Matters <COABadge />
        </h3>
        <p className="mt-2 text-navy/70">
          Because the research peptide market is unregulated, a COA from an
          independent laboratory is the primary safeguard consumers have against
          adulterated, mislabeled, or sub-potent products. Without a credible COA,
          a buyer has no objective basis for trusting what is in their vial.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          COA vs. In-House Testing
        </h3>
        <p className="mt-2 text-navy/70">
          A meaningful COA comes from an independent third-party laboratory with
          no financial relationship to the vendor. Some vendors publish testing
          results from their own in-house labs — while this is better than no
          testing at all, it carries an obvious conflict of interest and should
          be weighted accordingly. Look for the testing lab's name, accreditation,
          and contact information on the document.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Key Components of a COA
        </h2>
        <p className="mt-3 text-navy/70">
          A comprehensive peptide COA should contain the following elements. Any
          significant omission is worth questioning.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Product and Batch Identification
        </h3>
        <p className="mt-2 text-navy/70">
          The COA should clearly state the compound name (including any common
          aliases), the lot or batch number tied to the specific production run,
          and the quantity tested. Batch-specific COAs demonstrate that the
          actual product you purchased was tested — not a generic sample submitted
          once at launch.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Laboratory Information
        </h3>
        <p className="mt-2 text-navy/70">
          The issuing laboratory's full name, physical address, accreditation
          number (ideally ISO/IEC 17025), and contact details should be present.
          A reputable lab is verifiable — you should be able to independently
          confirm its existence and accreditation status.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Test Date and Expiry
        </h3>
        <p className="mt-2 text-navy/70">
          The date of testing should be recent relative to your purchase date.
          A COA from several years ago does not reflect the current batch's
          quality. Some COAs also note a shelf life for the compound under
          specified storage conditions.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Purity Result (HPLC)
        </h3>
        <p className="mt-2 text-navy/70">
          The purity percentage, determined by HPLC (High-Performance Liquid
          Chromatography), indicates what proportion of the sample is the target
          compound versus related impurities. Research-grade peptides should
          ideally exceed 98% purity. The COA should specify the detection
          wavelength and method used.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Identity Confirmation (Mass Spectrometry)
        </h3>
        <p className="mt-2 text-navy/70">
          Mass spectrometry (MS) data confirms that the compound's molecular
          weight matches the theoretical weight for the stated peptide. The COA
          should list the observed molecular weight alongside the theoretical
          value and confirm a match. Without this, HPLC purity alone cannot
          confirm you have the right compound.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Endotoxin Testing (Where Applicable)
        </h3>
        <p className="mt-2 text-navy/70">
          For injectable peptides, endotoxin (LAL) testing is an important
          safety parameter. Endotoxins are bacterial cell wall remnants that can
          cause severe immune reactions. Acceptable levels are typically below
          1–5 EU/mg depending on the intended use. Many vendor COAs omit this
          — it is worth specifically requesting for injectable applications.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          How to Verify a COA
        </h2>
        <p className="mt-3 text-navy/70">
          Possessing a COA is not enough — verifying its authenticity adds an
          essential layer of assurance.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Step 1: Confirm the Lab Exists
        </h3>
        <p className="mt-2 text-navy/70">
          Search for the laboratory by name and address. Verify it is a real
          business with a web presence, accreditation listing, and contact details
          that match the COA. If the lab cannot be independently verified, the
          COA's credibility is significantly undermined.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Step 2: Check the Batch Number Matches
        </h3>
        <p className="mt-2 text-navy/70">
          Compare the lot or batch number on the COA with the number on your
          product vial or packaging. A legitimate vendor will ensure these match.
          A generic COA with no batch number, or a batch number that does not
          correspond to your order, is a significant red flag.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Step 3: Evaluate the Test Methods
        </h3>
        <p className="mt-2 text-navy/70">
          Confirm that both HPLC (purity) and mass spectrometry (identity) are
          included. A COA showing only HPLC or only MS provides an incomplete
          picture. The specific method, instrument, and conditions should ideally
          be noted.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Step 4: Cross-Reference Community Testing
        </h3>
        <p className="mt-2 text-navy/70">
          Community organizations and independent researchers periodically purchase
          and test peptides from popular vendors, publishing their results publicly.
          Cross-referencing vendor-supplied COAs with community testing results
          provides an additional validation layer.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Common Red Flags</h2>
        <p className="mt-3 text-navy/70">
          The following characteristics in a COA should prompt serious caution
          before purchasing or using a product.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Documentation Red Flags
        </h3>
        <ul className="mt-2 space-y-2 text-navy/70 list-disc list-inside">
          <li>No batch number or a generic non-specific identifier</li>
          <li>Laboratory name absent, unnamed, or not independently verifiable</li>
          <li>Only HPLC shown — no mass spectrometry identity confirmation</li>
          <li>
            Testing date significantly predates your purchase (more than 12–18
            months)
          </li>
          <li>
            Suspiciously perfect purity (e.g., exactly 99.00% with no variance)
          </li>
          <li>
            COA is a low-resolution image that appears scanned or digitally
            altered
          </li>
        </ul>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Vendor Behavior Red Flags
        </h3>
        <ul className="mt-2 space-y-2 text-navy/70 list-disc list-inside">
          <li>COA is difficult to find or requires special request to obtain</li>
          <li>
            Vendor becomes defensive or evasive when COA details are questioned
          </li>
          <li>
            All products share the same COA regardless of batch or compound
          </li>
          <li>
            The "third-party lab" is an entity with the same or similar ownership
            to the vendor
          </li>
        </ul>
      </section>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/peptide-quality-testing"
          className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Learn About Testing Methods
        </Link>
        <Link
          href="/best-peptide-sources"
          className="inline-block rounded-lg border border-accent px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
        >
          Find Verified Sources
        </Link>
      </div>

      <div className="mt-12">
        <AffiliateDisclosure />
      </div>
    </div>
  );
}
