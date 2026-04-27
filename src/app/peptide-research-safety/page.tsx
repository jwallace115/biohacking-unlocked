import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Peptide Research Safety — Best Practices & Protocols",
  description:
    "Safety protocols for peptide research. Proper handling, storage, contamination prevention, and responsible use.",
};

export default function PeptideResearchSafetyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Peptide Research Safety
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Safe peptide research begins long before the first injection. Proper
        handling, storage, and documentation practices reduce contamination risk,
        preserve compound integrity, and protect both the researcher and any
        subjects involved. This guide outlines best practices based on laboratory
        standards adapted for the research context.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Handling Best Practices
        </h2>
        <p className="mt-3 text-navy/70">
          Peptides are delicate molecules that can degrade rapidly with improper
          handling. Establishing consistent handling habits protects the compound
          and reduces contamination vectors.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Workspace Preparation
        </h3>
        <p className="mt-2 text-navy/70">
          Always work on a clean, dry surface. Wipe down the workspace with 70%
          isopropyl alcohol before beginning. Avoid working near open windows,
          fans, or air vents that could introduce airborne contaminants. A
          dedicated, organized workspace reduces error and cross-contamination
          risk.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Personal Protective Equipment (PPE)
        </h3>
        <p className="mt-2 text-navy/70">
          Nitrile gloves should be worn at all times when handling vials,
          syringes, and reconstitution solvents. Change gloves if contamination
          is suspected. Eye protection is advisable when working with pressurized
          vials or solvents. A face mask reduces the risk of exhaled particles
          contaminating open vials.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Reconstitution Technique
        </h3>
        <p className="mt-2 text-navy/70">
          Use bacteriostatic water (BW) or sterile water for reconstitution.
          Bacteriostatic water, which contains 0.9% benzyl alcohol, inhibits
          microbial growth and is preferred for multi-dose vials. Inject the
          solvent slowly down the side of the vial — never directly onto the
          lyophilized powder, which can denature the peptide. Swirl gently; do
          not shake.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Needle and Syringe Hygiene
        </h3>
        <p className="mt-2 text-navy/70">
          Use a new needle for every injection. Never recap a used needle with
          two hands. Wipe vial stoppers with an alcohol swab before each
          withdrawal. Use insulin syringes (typically U-100, 29–31 gauge) for
          subcutaneous administration to minimize tissue trauma.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Contamination Prevention
        </h2>
        <p className="mt-3 text-navy/70">
          Contamination — whether microbial, chemical, or particulate — is one
          of the most serious risks in peptide research. Prevention is
          significantly easier than detection or treatment.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Maintaining the Sterile Field
        </h3>
        <p className="mt-2 text-navy/70">
          Treat every needle tip and vial stopper as potentially exposed. Wipe
          all rubber stoppers with a fresh alcohol swab before piercing. Do not
          touch the needle tip to any surface, including gloves. Once the needle
          has been used, it is no longer sterile — do not reuse.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Solvent Quality
        </h3>
        <p className="mt-2 text-navy/70">
          Only use pharmaceutical-grade bacteriostatic water from sealed,
          single-use ampoules where possible, or from reputable multi-dose vials
          within their use-by date. Avoid using tap water, distilled water from
          unknown sources, or expired solvents for reconstitution.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Visual Inspection
        </h3>
        <p className="mt-2 text-navy/70">
          Before every injection, inspect the reconstituted solution against a
          white background and light source. Any cloudiness, particulate matter,
          unusual color, or precipitate is a sign of contamination or degradation
          — discard the vial immediately. A properly reconstituted peptide
          solution should be clear and colorless.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Avoiding Cross-Contamination Between Compounds
        </h3>
        <p className="mt-2 text-navy/70">
          If researching multiple peptides simultaneously, use dedicated equipment
          for each compound. Label all vials clearly with compound name,
          concentration, reconstitution date, and expiry. Store separate compounds
          in separate sections of the refrigerator to prevent mix-ups.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Proper Disposal</h2>
        <p className="mt-3 text-navy/70">
          Safe disposal of sharps and biological materials is both a legal
          obligation and an ethical responsibility. Improper disposal exposes
          others — including sanitation workers and children — to needle-stick
          injuries and contamination.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Sharps Disposal
        </h3>
        <p className="mt-2 text-navy/70">
          Used needles and syringes must be placed in an approved sharps
          container — a rigid, puncture-resistant container specifically designed
          for this purpose. Never dispose of loose needles in regular household
          trash or recycling. Most pharmacies accept full sharps containers for
          disposal at no charge.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Expired or Unused Peptide Disposal
        </h3>
        <p className="mt-2 text-navy/70">
          Reconstituted peptides past their use-by date (typically 28–30 days
          refrigerated) should be discarded. Lyophilized powder that has been
          improperly stored or shows signs of moisture intrusion should also be
          discarded. Mix with an absorbent material (e.g., used coffee grounds or
          cat litter) before placing in sealed trash if local pharmaceutical
          disposal programs are unavailable.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Local Regulations
        </h3>
        <p className="mt-2 text-navy/70">
          Sharps and pharmaceutical disposal regulations vary by jurisdiction.
          Check with your local health department or pharmacy for approved
          disposal options in your area. Many regions have designated take-back
          programs or mail-in sharps disposal services.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Documentation & Record Keeping
        </h2>
        <p className="mt-3 text-navy/70">
          Accurate records are not bureaucratic overhead — they are a fundamental
          safety tool. Good documentation enables identification of problematic
          batches, correlation of side effects with specific compounds or doses,
          and informed communication with healthcare providers.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          What to Record
        </h3>
        <ul className="mt-2 space-y-2 text-navy/70 list-disc list-inside">
          <li>Compound name, vendor, and batch/lot number</li>
          <li>Date of reconstitution and calculated concentration</li>
          <li>Date, time, dose, and route of administration</li>
          <li>Injection site used (rotate and record to avoid overuse)</li>
          <li>Any observed effects — both desired and adverse</li>
          <li>Lab results (baseline and follow-up bloodwork)</li>
        </ul>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Format and Storage
        </h3>
        <p className="mt-2 text-navy/70">
          A simple spreadsheet or dedicated notebook is sufficient. Digital
          records with timestamped entries are preferable for long-term retention.
          Store records securely and privately. In the event of an adverse
          reaction, having precise documentation of what was taken, when, and from
          which batch is invaluable for medical personnel.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Retaining COAs and Purchase Records
        </h3>
        <p className="mt-2 text-navy/70">
          Keep copies of all Certificates of Analysis alongside purchase records.
          If a batch is later found to be problematic — whether through your own
          experience or a community-wide report — having the COA and vendor
          receipt allows for accurate reporting and potential recourse.
        </p>
      </section>

      <div className="mt-12">
        <Link
          href="/peptide-quality-testing"
          className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Learn About Peptide Quality Testing
        </Link>
      </div>

      <div className="mt-12">
        <AffiliateDisclosure />
      </div>
    </div>
  );
}
