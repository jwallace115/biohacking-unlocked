import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Peptide Side Effects — Complete Guide to Risks & Reactions",
  description:
    "Understand common and rare peptide side effects. Learn what to watch for and when to seek medical attention.",
};

export default function PeptideSideEffectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Peptide Side Effects
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        No compound is without risk. Understanding the side effect profile of
        research peptides — from the mundane to the medically significant —
        is essential before beginning any protocol. This guide summarizes what
        the available research and community experience tell us.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">Common Side Effects</h2>
        <p className="mt-3 text-navy/70">
          These effects are reported across a wide range of peptides and are
          generally transient and mild in nature. They do not necessarily indicate
          a dangerous reaction, but should be monitored.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Injection Site Reactions
        </h3>
        <p className="mt-2 text-navy/70">
          Redness, swelling, localized pain, and minor bruising at the injection
          site are among the most frequently reported side effects. These are
          often technique-related or attributable to the carrier solvent (typically
          bacteriostatic water) rather than the peptide itself. Rotating injection
          sites and using proper aseptic technique reduces incidence significantly.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Fatigue and Lethargy
        </h3>
        <p className="mt-2 text-navy/70">
          Some users report temporary fatigue, particularly when starting a new
          peptide or increasing doses. This is especially common with growth
          hormone secretagogues during the initial adaptation period. Symptoms
          typically resolve within one to two weeks.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Water Retention
        </h3>
        <p className="mt-2 text-navy/70">
          Growth hormone-related peptides (Ipamorelin, CJC-1295, Sermorelin) can
          cause transient fluid retention, most noticeable as mild puffiness in
          the extremities. This typically subsides as the body adjusts and is
          dose-dependent.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Headache and Flushing
        </h3>
        <p className="mt-2 text-navy/70">
          Certain peptides, particularly those with vasodilatory mechanisms (e.g.,
          BPC-157 at higher doses), can cause transient headaches or facial
          flushing. These usually pass within an hour of administration.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Nausea
        </h3>
        <p className="mt-2 text-navy/70">
          Mild nausea is occasionally reported with ghrelin mimetics such as
          MK-677 and GHRP-6. Administering with food or adjusting timing of doses
          often resolves this.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Rare but Serious Reactions
        </h2>
        <p className="mt-3 text-navy/70">
          While uncommon, the following reactions require prompt medical attention.
          Their rarity does not make them negligible — understanding them is a
          core part of responsible research.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Anaphylaxis and Severe Allergic Response
        </h3>
        <p className="mt-2 text-navy/70">
          True anaphylaxis to peptides is rare but documented. Symptoms include
          hives, throat swelling, difficulty breathing, and a sudden drop in blood
          pressure. Emergency services should be contacted immediately if these
          symptoms occur. Individuals with known peptide or amino acid allergies
          should be especially cautious.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Endotoxin Reactions (Contaminated Product)
        </h3>
        <p className="mt-2 text-navy/70">
          Bacterial endotoxins from poorly manufactured or improperly stored
          peptides can cause fever, chills, rigors, hypotension, and in severe
          cases septic shock. This is one of the most serious risks of using
          low-quality or unverified peptide sources. Always verify COA endotoxin
          levels.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Hormonal Dysregulation
        </h3>
        <p className="mt-2 text-navy/70">
          Prolonged or high-dose use of GH-stimulating peptides can suppress
          endogenous pituitary signaling. There is also theoretical risk of
          elevated IGF-1 contributing to insulin resistance over extended periods.
          Baseline and follow-up labs are strongly recommended.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Injection Site Abscess or Infection
        </h3>
        <p className="mt-2 text-navy/70">
          If aseptic technique is not maintained, bacterial infection at the
          injection site can develop into a serious abscess requiring medical
          drainage and antibiotic treatment. Signs include increasing redness,
          warmth, pus, and fever.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          Compound-Specific Side Effects
        </h2>
        <p className="mt-3 text-navy/70">
          Different peptide classes carry distinct risk profiles. The following
          are notable examples from commonly researched compounds.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          BPC-157
        </h3>
        <p className="mt-2 text-navy/70">
          Generally considered well-tolerated in animal models. Reported human
          side effects include nausea, dizziness, and mild gastrointestinal
          discomfort. Some users report vivid dreams. Longer-term safety in humans
          is unknown.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          TB-500 (Thymosin Beta-4 Fragment)
        </h3>
        <p className="mt-2 text-navy/70">
          Head rush and temporary lightheadedness immediately following injection
          are frequently reported. Some users note mild fatigue. TB-500 promotes
          angiogenesis, which theoretically raises concerns in individuals with
          any pre-existing neoplastic conditions.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Ipamorelin / CJC-1295
        </h3>
        <p className="mt-2 text-navy/70">
          Water retention, increased appetite, and mild tingling in the
          extremities (related to GH release) are commonly reported. Cortisol and
          prolactin elevation, more common with GHRP-2 and GHRP-6, are less
          pronounced with Ipamorelin but not absent.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Melanotan II (PT-141)
        </h3>
        <p className="mt-2 text-navy/70">
          Nausea is very common, particularly with nasal administration. Facial
          flushing, spontaneous erections, and increased libido are pharmacological
          effects that can also be experienced as side effects depending on context.
          Darkening of existing moles and new pigmentation changes have been
          reported with extended use.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Semaglutide / GLP-1 Agonists
        </h3>
        <p className="mt-2 text-navy/70">
          Gastrointestinal side effects dominate: nausea, vomiting, diarrhea, and
          constipation are common especially during dose escalation. Rare but
          serious risks include pancreatitis, gallbladder disease, and a theoretical
          risk of thyroid C-cell tumors noted in rodent studies.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-navy">
          When to Seek Medical Help
        </h2>
        <p className="mt-3 text-navy/70">
          Not all side effects require emergency care, but certain presentations
          should never be managed at home. Seek immediate medical attention for
          any of the following:
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Seek Emergency Care Immediately If You Experience:
        </h3>
        <ul className="mt-2 space-y-2 text-navy/70 list-disc list-inside">
          <li>Difficulty breathing or throat swelling</li>
          <li>Sudden severe drop in blood pressure or loss of consciousness</li>
          <li>High fever (above 38.5°C / 101.3°F) following injection</li>
          <li>Severe abdominal pain or signs of pancreatitis</li>
          <li>Rapidly expanding redness, warmth, or pus at an injection site</li>
          <li>Chest pain or irregular heartbeat</li>
        </ul>
        <h3 className="mt-6 text-lg font-semibold text-navy">
          Consult a Physician Within 24–48 Hours For:
        </h3>
        <ul className="mt-2 space-y-2 text-navy/70 list-disc list-inside">
          <li>Persistent injection site swelling not improving after 48 hours</li>
          <li>Unusual pigmentation changes (mole growth or new dark spots)</li>
          <li>Significant changes in mood, cognition, or sleep</li>
          <li>Any hormonal symptoms (unexpected lactation, gynecomastia, etc.)</li>
          <li>Any side effect that concerns you, regardless of severity</li>
        </ul>
        <p className="mt-4 text-navy/70">
          Disclosing peptide use to your physician is important even if it feels
          uncomfortable. Accurate clinical history is essential for correct
          diagnosis and treatment.
        </p>
      </section>

      <div className="mt-12">
        <Link
          href="/best-peptide-sources"
          className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
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
