import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import COABadge from "@/components/COABadge";

export const metadata: Metadata = {
  title: "GHK-Cu — Copper Peptide Research Guide",
  description:
    "Evidence-based guide to GHK-Cu copper peptide. Research on skin health, wound healing, and anti-aging potential.",
};

export default function GhkCuPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">GHK-Cu</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Skin &amp; Wound Healing
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        GHK-Cu (Copper Peptide)
      </h1>
      <p className="mt-3 text-lg text-navy/70">
        GHK-Cu is a naturally occurring copper-binding tripeptide with a growing
        body of research supporting its role in skin repair, wound healing, and
        anti-aging applications.
      </p>

      {/* What is GHK-Cu? */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">What is GHK-Cu?</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          GHK-Cu (glycyl-L-histidyl-L-lysine copper) is a tripeptide that
          naturally occurs in human plasma, saliva, and urine. First isolated in
          the early 1970s, it was found to promote the survival and growth of
          liver cells. Its strong affinity for copper (Cu²⁺) is central to many
          of its proposed biological activities. Levels of GHK-Cu in the body
          decline with age — from roughly 200 ng/mL at age 20 to around 80
          ng/mL by age 60 — which has fueled interest in exogenous
          supplementation as a potential anti-aging strategy.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          In research settings, GHK-Cu is most often studied in topical form for
          skin applications, though injectable preparations are also available
          from research-grade suppliers. It is not approved by the FDA for any
          therapeutic use.
        </p>
      </section>

      {/* Research Overview */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Research Overview</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          The bulk of published GHK-Cu research is preclinical (cell culture and
          animal models). Human clinical data is limited but emerging, primarily
          in the context of topical skincare formulations.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Wound healing:</strong> Multiple in
            vitro and animal studies demonstrate that GHK-Cu accelerates wound
            closure, increases collagen and glycosaminoglycan synthesis, and
            stimulates angiogenesis (new blood vessel formation).
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Skin remodeling:</strong> Topical
            GHK-Cu has been shown in small human trials to improve skin
            elasticity, reduce fine lines, and increase dermal density after 12
            weeks of use compared to placebo.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Gene expression:</strong> Lunde &amp;
            Gould (2018) and follow-up analyses suggest GHK-Cu modulates
            expression of over 4,000 genes, including upregulation of
            antioxidant and tissue-repair pathways and downregulation of
            inflammation-related genes.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Hair growth:</strong> Some animal and
            in vitro data suggest GHK-Cu may stimulate hair follicle
            proliferation, though robust human evidence is currently lacking.
          </li>
        </ul>
      </section>

      {/* Potential Benefits */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Potential Benefits</h2>
        <p className="mt-3 text-sm text-navy/50">
          Based on preclinical and limited clinical evidence. Not medical claims.
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Supports collagen and elastin production in skin",
            "May accelerate wound and tissue repair",
            "Antioxidant activity via copper chelation",
            "Potential reduction in skin photoaging markers",
            "Possible hair follicle stimulation",
            "Anti-inflammatory effects in cellular models",
          ].map((benefit, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* How It's Used */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">How It&apos;s Used</h2>
        <p className="mt-2 text-xs text-navy/50">
          These are community-reported and research-context protocols only. Not
          medical advice. Consult a healthcare professional.
        </p>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-base font-semibold text-navy">Topical</h3>
            <p className="mt-2 leading-relaxed text-sm text-navy/70">
              The most studied delivery route. Concentrations in research
              formulations typically range from 0.1% to 1% GHK-Cu. Applied
              once or twice daily to clean skin. This is the only form with
              meaningful human clinical data.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-navy">
              Subcutaneous Injection (Research Context)
            </h3>
            <p className="mt-2 leading-relaxed text-sm text-navy/70">
              Some researchers use injectable GHK-Cu at doses ranging from 1–2
              mg per injection, administered subcutaneously. Injection site
              delivery is thought to allow more direct tissue exposure than
              systemic circulation. Long-term safety data for injectable use in
              humans is not established.
            </p>
          </div>
        </div>
      </section>

      {/* What We Don't Know */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">What We Don&apos;t Know</h2>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <ul className="space-y-2">
            {[
              "Optimal systemic dosing and frequency for injectable use in humans has not been established in clinical trials.",
              "Long-term safety profile for injectable GHK-Cu is unknown.",
              "Whether the broad gene-expression effects seen in vitro translate meaningfully to in vivo human outcomes is not confirmed.",
              "Bioavailability of topically applied GHK-Cu through intact skin remains debated.",
              "Interaction profile with other peptides or pharmaceuticals is poorly characterized.",
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
            href="/ghk-cu-vs-collagen"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            GHK-Cu vs Collagen — Comparison
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
