import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import COABadge from "@/components/COABadge";

export const metadata: Metadata = {
  title: "Semax — Nootropic Peptide Research Guide",
  description:
    "Evidence-based guide to Semax peptide. Research on cognitive enhancement, neuroprotection, and BDNF.",
};

export default function SemaxPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">Semax</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Nootropic / Neuroprotective
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        Semax
      </h1>
      <p className="mt-3 text-lg text-navy/70">
        Semax is a synthetic heptapeptide derived from ACTH(4-10), developed in
        Russia as a nootropic and neuroprotective agent. It is among the most
        researched peptide nootropics, with clinical use in Russia for stroke
        recovery, cognitive decline, and attention disorders.
      </p>

      {/* What is Semax? */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">What is Semax?</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Semax (Met-Glu-His-Phe-Pro-Gly-Pro) was developed at the Institute of
          Molecular Genetics of the Russian Academy of Sciences as a metabolically
          stable analogue of the ACTH(4-7) fragment. The ACTH(4-10) fragment was
          known to have cognitive-enhancing effects but was rapidly degraded in
          the body; Semax was designed to extend its half-life through structural
          modifications.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Semax is approved in Russia as a pharmaceutical drug for cerebrovascular
          disease, stroke, and cognitive impairment, administered intranasally.
          Outside of Russia and Ukraine (where it also holds approval), it is
          classified as a research compound. A modified version, N-Acetyl Semax,
          is also available in research markets and is believed to have enhanced
          stability.
        </p>
      </section>

      {/* Mechanism of Action */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Mechanism of Action</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Semax acts through several complementary mechanisms that collectively
          support cognitive function and neuroprotection:
        </p>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-base font-semibold text-navy">
              BDNF &amp; NGF Upregulation
            </h3>
            <p className="mt-2 leading-relaxed text-sm text-navy/70">
              Semax robustly increases brain-derived neurotrophic factor (BDNF)
              and nerve growth factor (NGF) in the hippocampus and other brain
              regions. BDNF is critical for synaptic plasticity, long-term
              potentiation (LTP), and neurogenesis — the cellular underpinnings
              of learning and memory. This is considered Semax&apos;s primary
              mechanism for cognitive enhancement.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-navy">
              Dopaminergic &amp; Serotonergic Modulation
            </h3>
            <p className="mt-2 leading-relaxed text-sm text-navy/70">
              Research indicates Semax increases dopamine and serotonin turnover
              in the brain, which may contribute to improvements in motivation,
              focus, and mood observed in both animal models and human subjects.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-navy">
              Neuroprotection
            </h3>
            <p className="mt-2 leading-relaxed text-sm text-navy/70">
              In stroke models, Semax significantly reduces infarct size and
              improves neurological outcomes when administered shortly after
              ischemic events. Mechanisms appear to include anti-inflammatory
              effects, reduced oxidative stress, and preservation of mitochondrial
              function in neurons.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-navy">
              Melanocortin Receptor Activity
            </h3>
            <p className="mt-2 leading-relaxed text-sm text-navy/70">
              As an ACTH analogue, Semax interacts with melanocortin receptors
              (MC4R, MC5R) in the brain, contributing to attentional and
              arousal-related effects independent of the HPA axis (it does not
              stimulate cortisol release in the same way as full-length ACTH).
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Research Overview</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Semax has a broader clinical research record than many peptide
          nootropics, though the bulk of this research comes from Russian
          institutions. Independent Western replication is limited.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Stroke &amp; ischemia:</strong>{" "}
            Multiple Russian clinical trials demonstrate Semax reduces neurological
            deficit and improves recovery outcomes in ischemic stroke when
            administered intranasally within the first hours to days post-event.
            This is the indication for which clinical evidence is strongest.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Cognitive enhancement:</strong>{" "}
            Studies in healthy volunteers and patients with cognitive impairment
            report improvements in attention, memory, and processing speed.
            Effect sizes and methodology vary across studies.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">ADHD:</strong> Preliminary Russian
            research examined Semax in attention deficit disorders with
            encouraging results, but no rigorous double-blind RCTs comparable
            to Western ADHD drug trials exist.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Optic nerve disease:</strong> Some
            research explored Semax in glaucoma and optic neuritis, with animal
            models showing neuroprotective effects on retinal ganglion cells.
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
            "Cognitive enhancement — attention, working memory, and processing speed",
            "Neuroprotective effects, particularly relevant after ischemic events",
            "Increased BDNF expression supporting neuroplasticity",
            "Potential support for recovery from brain injury or stroke",
            "Mood stabilization and increased motivation in some reports",
            "May improve focus and reduce cognitive fatigue",
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
          Semax has a relatively well-characterized safety profile given its
          clinical use in Russia since the 1980s and 1990s. Key considerations
          for researchers include:
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <ul className="space-y-2">
            {[
              "Generally well-tolerated in clinical data; most reported side effects are mild and transient (nasal irritation with intranasal use, mild anxiety or over-stimulation at higher doses).",
              "Stimulating effects may disrupt sleep if taken late in the day — most protocols recommend morning administration.",
              "No physical dependence has been reported in clinical literature, but subjective reports of tolerance at consistent doses exist in user communities.",
              "Long-term effects on the dopaminergic system from chronic use are not established in clinical data.",
              "The research evidence base is predominantly from Russian sources, limiting independent verification of safety claims.",
              "Drug interactions with psychiatric medications, stimulants, or nootropic stacks are not characterized in the literature.",
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
