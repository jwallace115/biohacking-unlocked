import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import COABadge from "@/components/COABadge";

export const metadata: Metadata = {
  title: "Melanotan 2 — Research Guide & Safety Profile",
  description:
    "What the research says about Melanotan 2 (MT-2). Tanning peptide overview, safety concerns, and current evidence.",
};

export default function Melanotan2Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">Melanotan 2</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Melanocortin / Tanning
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        Melanotan 2 (MT-2)
      </h1>
      <p className="mt-3 text-lg text-navy/70">
        Melanotan 2 is a synthetic analogue of alpha-melanocyte-stimulating
        hormone (alpha-MSH) developed in the early 1990s. It stimulates
        melanogenesis and has been studied for tanning, sexual function, and
        appetite suppression — but carries a notable safety and legal profile
        that warrants careful consideration.
      </p>

      {/* Safety Notice */}
      <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900/80">
        <strong>Important:</strong> Melanotan 2 is not approved by the FDA, TGA,
        EMA, or most other regulatory bodies for any use. It has been the
        subject of health warnings in multiple countries. The information on
        this page is strictly educational.
      </div>

      {/* What is Melanotan 2? */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">What is Melanotan 2?</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Melanotan 2 (MT-2) is a cyclic heptapeptide analogue of alpha-MSH,
          developed at the University of Arizona as part of research into
          melanocortin receptor agonists. It acts primarily on the MC1R
          (melanocortin 1 receptor) to stimulate melanin production in skin
          cells, producing a darkening effect without UV exposure.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          MT-2 also has significant affinity for MC3R, MC4R, and MC5R, which
          accounts for its broader systemic effects including sexual arousal,
          appetite suppression, and cardiovascular activity. It is distinct from
          Melanotan 1 (afamelanotide), which has a more selective melanotropic
          profile.
        </p>
      </section>

      {/* How It Works */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">How It Works</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-base font-semibold text-navy">MC1R Agonism — Tanning</h3>
            <p className="mt-2 leading-relaxed text-sm text-navy/70">
              By binding to MC1R on melanocytes, MT-2 triggers the production
              of eumelanin (brown/black pigment), leading to skin darkening. This
              effect is UV-independent, though UV exposure may amplify it. The
              resulting tan is considered cosmetically similar to a sun-induced
              tan but may not confer the same photoprotective benefits.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-navy">MC4R Agonism — Sexual &amp; Appetite Effects</h3>
            <p className="mt-2 leading-relaxed text-sm text-navy/70">
              Activation of MC4R in the hypothalamus contributes to spontaneous
              erections in male subjects (a well-documented effect in early
              clinical trials), as well as libido effects in both sexes and
              appetite suppression. These off-target effects are prominent and
              contribute significantly to the adverse effect profile.
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Research Overview</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Early Phase I and Phase II trials were conducted in the 1990s and
          early 2000s at the University of Arizona. Development of MT-2 for
          pharmaceutical use was eventually discontinued in favor of the more
          selective MT-1 analogue (afamelanotide, now approved in some markets
          for erythropoietic protoporphyria). The research record for MT-2 is
          therefore predominantly from this early-phase period.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Tanning efficacy:</strong> Phase II
            trials demonstrated significant skin darkening at doses of 0.025
            mg/kg administered subcutaneously, with effects appearing within
            days of starting a course.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Sexual function:</strong> Early trials
            noted spontaneous erections as a prominent side effect in male
            subjects. Subsequent research explored MC4R agonists for erectile
            dysfunction, leading to the separate development of bremelanotide
            (PT-141), which is now FDA-approved for hypoactive sexual desire
            disorder in premenopausal women.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Nevi (mole) changes:</strong> Case
            reports and observational data have linked MT-2 use to changes in
            pre-existing moles and new nevi formation, raising melanoma concern
            flags in regulatory assessments.
          </li>
        </ul>
      </section>

      {/* Safety Concerns */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Safety Concerns</h2>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <ul className="space-y-2">
            {[
              "Nausea, facial flushing, and spontaneous erections are common acute side effects even at low doses.",
              "Changes to moles (nevi) have been reported, with unresolved questions about melanoma risk after prolonged use.",
              "No long-term human safety data exists — pharmaceutical development was halted before such studies were completed.",
              "Unregulated gray-market products may be mislabeled, underdosed, overdosed, or contaminated.",
              "Cardiovascular effects (blood pressure changes) have been noted in early clinical data.",
              "Interactions with other medications or peptides are not characterized.",
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

      {/* Legal Status */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Legal Status</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          The legal status of Melanotan 2 varies significantly by jurisdiction
          and is subject to change. It is not approved for therapeutic use in
          the United States, European Union, United Kingdom, Australia, or Canada.
          In many markets it exists in a gray-market area — not explicitly
          scheduled as a controlled substance in all jurisdictions, but also not
          legally sold for human use.
        </p>
        <div className="mt-4 space-y-3">
          <div>
            <h3 className="text-base font-semibold text-navy">United States</h3>
            <p className="mt-1 text-sm text-navy/70">
              Not FDA-approved. The FDA has issued import alerts and warning
              letters related to MT-2 products. It may be sold as a
              &ldquo;research chemical&rdquo; but human use is not legally
              sanctioned.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-navy">United Kingdom</h3>
            <p className="mt-1 text-sm text-navy/70">
              The MHRA has issued warnings against MT-2 use and classified
              it as an unlicensed medicine. Sale for human use is illegal.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-navy">Australia</h3>
            <p className="mt-1 text-sm text-navy/70">
              Listed as a Schedule 4 prescription-only substance by the TGA,
              making unsupervised use and gray-market purchase illegal.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-navy/60 italic">
          Always verify the current legal status in your jurisdiction before
          researching or purchasing any peptide. This information may not be
          current.
        </p>
      </section>

      {/* Related Reading */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Related Reading</h2>
        <div className="mt-4 flex flex-wrap gap-3">
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
