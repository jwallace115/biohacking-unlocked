import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Selank vs Semax — Nootropic Peptide Comparison",
  description:
    "Compare Selank and Semax nootropic peptides: cognitive benefits, anxiety reduction, mechanisms, and which to choose.",
};

export default function SelankVsSemaxPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Selank vs Semax
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Selank and Semax are two nootropic peptides developed in Russia with
        decades of research behind them. Both have demonstrated cognitive and
        neurological benefits, but they differ meaningfully in their
        mechanisms, primary effects, and ideal use cases.
      </p>

      {/* Overview */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Overview</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Selank is a synthetic heptapeptide analog of the endogenous
          immunomodulatory peptide tuftsin. It has been studied extensively for
          anxiolytic (anti-anxiety) effects and as a cognitive enhancer, with
          particular interest in its ability to regulate BDNF (brain-derived
          neurotrophic factor) and modulate the GABAergic system. Semax is a
          synthetic analog of ACTH (adrenocorticotropic hormone) that has been
          approved as a pharmaceutical in Russia for conditions including stroke,
          optic nerve atrophy, and cognitive impairment. It shows strong
          nootropic and neuroprotective effects in preclinical and clinical
          research.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/peptides/selank"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-accent hover:text-accent-dark"
          >
            Selank Full Profile &rarr;
          </Link>
          <Link
            href="/peptides/semax"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-accent hover:text-accent-dark"
          >
            Semax Full Profile &rarr;
          </Link>
        </div>
      </section>

      {/* Mechanism of Action */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Mechanism of Action</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Selank is thought to produce its anxiolytic effects primarily through
          modulation of the GABAergic system and by increasing brain serotonin
          metabolism. It also upregulates BDNF expression, which supports
          neuronal survival and synaptic plasticity. Semax operates differently —
          it binds to melanocortin receptors and increases the expression of BDNF
          and its receptor TrkB, while also modulating dopaminergic and
          serotonergic systems. Its ACTH-like sequence gives it additional
          neuroprotective properties not shared by Selank.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">Selank</th>
                <th className="px-4 py-3">Semax</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-navy/70">Primary Use</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-navy/70">Research Level</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-navy/70">Administration</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cognitive Benefits */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Cognitive Benefits</h2>
        <h3 className="mt-6 text-xl font-semibold text-navy">Selank</h3>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder — documented cognitive effects including improved memory
          consolidation, enhanced attention, and learning facilitation will be
          detailed here with linked citations from Russian and international
          research literature.
        </p>
        <h3 className="mt-6 text-xl font-semibold text-navy">Semax</h3>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder — documented nootropic effects including enhanced focus,
          improved working memory, neuroprotection after ischemic events, and
          BDNF upregulation will be detailed here with linked citations including
          clinical trial data.
        </p>
      </section>

      {/* Anxiety & Mood */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Anxiety &amp; Mood</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Selank has a stronger and more direct anxiolytic profile of the two.
          Its GABAergic modulation produces calming effects that have been
          compared to benzodiazepines in some research contexts, but without
          the sedation, dependence risk, or cognitive impairment associated
          with that drug class. Semax can have mild stimulating properties that
          some users report as energizing, but it does not target anxiety as a
          primary endpoint. For individuals dealing primarily with anxiety or
          stress, Selank is generally considered the more appropriate choice.
        </p>
        <h3 className="mt-6 text-xl font-semibold text-navy">Mood Effects (Placeholder)</h3>
        <p className="mt-3 leading-relaxed text-navy/70">
          A deeper comparison of mood-related effects, including data on
          depression, emotional regulation, and stress resilience, will be added
          here.
        </p>
      </section>

      {/* Side Effects */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Side Effects</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Both peptides have demonstrated favorable safety profiles in the
          existing research, which is considerable for Semax given its approved
          pharmaceutical status in Russia. Selank's most commonly reported
          effects are mild sedation at higher doses and occasional transient
          fatigue. Semax side effects are generally mild and may include
          irritability, mild blood pressure changes, or nasal irritation when
          administered intranasally. Neither compound is approved by the FDA
          for human therapeutic use outside of clinical trials.
        </p>
        <h3 className="mt-6 text-xl font-semibold text-navy">Contraindications (Placeholder)</h3>
        <p className="mt-3 leading-relaxed text-navy/70">
          Population-specific considerations, drug interactions, and
          contraindications will be documented here. This page does not
          constitute medical advice.
        </p>
      </section>

      {/* Which Should You Choose */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Which Should You Choose?</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Choose Selank if your primary goal is anxiety reduction, stress
          management, or calm and focused cognition. Its anxiolytic mechanism
          makes it especially well-suited for high-stress periods or situations
          requiring composed, clear thinking.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Choose Semax if your primary goal is cognitive performance, memory
          enhancement, or neuroprotection. Its more activating profile and
          stronger BDNF upregulation make it a better fit for cognitive work
          and long-term brain health applications.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Some researchers use both compounds, alternating or combining them
          based on the context. Placeholder — protocol guidance and cycling
          considerations will be added here.
        </p>
        <Link
          href="/best-peptide-sources"
          className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          View Best Peptide Sources &rarr;
        </Link>
      </section>

      <div className="mt-16">
        <AffiliateDisclosure />
      </div>
    </div>
  );
}
