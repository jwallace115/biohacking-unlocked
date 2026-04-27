import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import COABadge from "@/components/COABadge";

export const metadata: Metadata = {
  title: "Selank — Nootropic Peptide Research Guide",
  description:
    "Evidence-based guide to Selank peptide. Research on anxiety, cognition, and immune function.",
};

export default function SelankPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">Selank</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Nootropic / Anxiolytic
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        Selank
      </h1>
      <p className="mt-3 text-lg text-navy/70">
        Selank is a synthetic heptapeptide derived from the endogenous
        neuropeptide tuftsin. Originally developed in Russia, it has been
        studied primarily for anxiolytic and nootropic effects, and holds
        approved status in Russia for anxiety and immunomodulation.
      </p>

      {/* What is Selank? */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">What is Selank?</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Selank (Thr-Lys-Pro-Arg-Pro-Gly-Pro) was developed at the Institute
          of Molecular Genetics of the Russian Academy of Sciences as a stable
          analogue of tuftsin, a tetrapeptide that plays a role in immune
          regulation. By adding three additional amino acids (Pro-Gly-Pro),
          researchers created a compound with enhanced metabolic stability and
          CNS activity.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Selank is approved in Russia as a pharmaceutical drug (under the brand
          name Selank) for generalized anxiety disorder and as a nootropic.
          Outside Russia, it remains a research compound with no regulatory
          approval.
        </p>
      </section>

      {/* Mechanism of Action */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Mechanism of Action</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Selank&apos;s precise mechanism of action is not fully characterized,
          but several pathways have been identified in preclinical research:
        </p>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-base font-semibold text-navy">
              GABAergic Modulation
            </h3>
            <p className="mt-2 leading-relaxed text-sm text-navy/70">
              Selank appears to enhance the function of the GABAergic system —
              the primary inhibitory neurotransmitter system in the brain —
              which may underlie its anxiolytic effects. Unlike benzodiazepines,
              it does not directly bind to GABA-A receptors, suggesting a
              modulatory rather than direct agonist mechanism.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-navy">
              Enkephalin Stabilization
            </h3>
            <p className="mt-2 leading-relaxed text-sm text-navy/70">
              Research suggests Selank inhibits enkephalin-degrading enzymes,
              increasing levels of endogenous enkephalins (endogenous opioid
              peptides involved in mood and stress regulation).
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-navy">
              BDNF &amp; Serotonin Interaction
            </h3>
            <p className="mt-2 leading-relaxed text-sm text-navy/70">
              Some studies indicate Selank influences brain-derived neurotrophic
              factor (BDNF) expression and interacts with serotonergic pathways,
              which may contribute to its reported cognitive and mood effects.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-navy">
              Immunomodulation
            </h3>
            <p className="mt-2 leading-relaxed text-sm text-navy/70">
              As a tuftsin analogue, Selank retains some of tuftsin&apos;s
              immunomodulatory properties, with animal research suggesting
              effects on cytokine expression (notably IL-6) and natural killer
              cell activity.
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Research Overview</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          The majority of Selank research originates from Russian institutions
          and has been published predominantly in Russian-language journals,
          limiting independent replication in Western research settings. The
          quality and design of available studies varies considerably.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Anxiety:</strong> Russian clinical
            trials with generalized anxiety disorder patients report significant
            reductions in anxiety scores with intranasal Selank, with effects
            described as comparable to benzodiazepines but without sedation or
            dependence.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Cognition:</strong> Preclinical data
            shows improvements in memory consolidation and learning in rodent
            models. Human data on cognitive enhancement is limited and primarily
            observational.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Immune function:</strong> Animal and
            in vitro studies suggest Selank modulates cytokine expression,
            though the clinical significance of this in healthy humans is
            unclear.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">PTSD &amp; stress:</strong> Some
            Russian research examined Selank in stress-related conditions with
            promising preliminary results, but robust RCT data is lacking.
          </li>
        </ul>
      </section>

      {/* Potential Benefits */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Potential Benefits</h2>
        <p className="mt-3 text-sm text-navy/50">
          Based on available research. Not medical claims.
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Anxiolytic effects without reported sedation or dependence",
            "May support working memory and learning",
            "Potential immunomodulatory activity",
            "Reported mood stabilization",
            "May reduce stress-related cognitive impairment",
            "Well-tolerated in available clinical data with low reported side effects",
          ].map((benefit, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Safety Profile */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Safety Profile</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Selank has a notably favorable safety profile in available clinical
          data compared to traditional anxiolytics. Key considerations:
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <ul className="space-y-2">
            {[
              "No physical dependence or withdrawal has been reported in clinical trials, in contrast to benzodiazepines.",
              "Sedation is not a commonly reported side effect at therapeutic doses.",
              "Long-term safety data beyond the Russian clinical trials is not available.",
              "The research literature is largely from a single research tradition — independent replication is limited.",
              "Route of administration (intranasal) may affect outcomes compared to injectable forms available on the gray market.",
              "Drug interaction profile with modern pharmaceuticals is not well characterized.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-amber-900/80"
              >
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Reading */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Related Reading</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/selank-vs-semax"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Selank vs Semax — Comparison
          </Link>
          <Link
            href="/best-peptide-sources"
            className="rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-medium text-accent-dark hover:bg-accent/20 transition-colors"
          >
            Best Peptide Sources
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-5">
        <h2 className="text-sm font-bold text-navy">Disclaimer</h2>
        <p className="mt-2 text-xs leading-relaxed text-navy/60">
          The information on this page is for educational and informational
          purposes only. It is not intended as medical advice. We are not medical
          professionals. All compounds discussed are intended for research
          purposes only. Always consult with a qualified healthcare professional
          before making any decisions about peptides or supplements. Individual
          results may vary. See our full{" "}
          <Link href="/disclaimer" className="underline hover:text-accent-dark">
            disclaimer
          </Link>
          .
        </p>
      </section>

      <div className="mt-8">
        <AffiliateDisclosure />
      </div>
    </div>
  );
}
