import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Best Peptides for Fat Loss — Research-Based Guide",
  description:
    "Evidence-based guide to peptides for fat loss. Research on CJC-1295, Ipamorelin, and growth hormone secretagogues.",
};

export default function PeptidesForFatLossPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Best Peptides for Fat Loss
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Growth hormone secretagogues — peptides that stimulate the pituitary
        gland to release more growth hormone — have attracted significant
        research and community interest for their potential to shift body
        composition toward less fat and more lean mass. This guide examines the
        evidence for the most studied fat loss peptides.
      </p>

      {/* How Peptides Aid Fat Loss */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How Peptides Aid Fat Loss
        </h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Growth hormone (GH) plays a direct role in lipolysis — the breakdown
          of stored fat for energy. As GH levels decline with age (a process
          called somatopause), fat accumulation — particularly visceral fat —
          tends to increase. GH secretagogue peptides work by stimulating the
          body&apos;s own pituitary gland to produce more GH in a pulsatile,
          physiologically normal pattern.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          This is distinct from exogenous HGH administration. Because
          secretagogues work through the pituitary&apos;s natural feedback
          loops, they are less likely to suppress endogenous GH production and
          may carry a more favorable safety profile compared to direct HGH
          injection.
        </p>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="font-semibold text-navy">Key Mechanisms</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy/70">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Stimulating GH release from the pituitary (GHRH pathway)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Increasing IGF-1 levels, which mediates many of GH&apos;s
                metabolic effects
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Enhanced lipolysis — mobilizing stored fat as an energy source
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Potential improvements in lean muscle retention during caloric
                deficit
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm text-amber-900/80">
            <strong>Important:</strong> The information on this page is for
            educational purposes only and is not medical advice. Always consult
            a qualified healthcare professional before using any peptide.
          </p>
        </div>
      </section>

      {/* Top Fat Loss Peptides */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Top Fat Loss Peptides</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          CJC-1295 and Ipamorelin are the two most studied and most commonly
          used GH secretagogues for body composition purposes. They are
          frequently used together.
        </p>

        <div className="mt-6 space-y-4">
          <Link
            href="/peptides/cjc-1295"
            className="block rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-navy">CJC-1295</h3>
            <p className="mt-2 text-sm text-navy/60">
              CJC-1295 is a modified GHRH analog with an extended half-life
              compared to native GHRH. It stimulates sustained GH release and
              has been studied in human clinical trials for its effects on GH
              and IGF-1 levels. It forms the foundation of many GH peptide
              stacks aimed at fat loss and body recomposition.
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-accent-dark">
              Read full guide &rarr;
            </span>
          </Link>

          <Link
            href="/peptides/ipamorelin"
            className="block rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-navy">Ipamorelin</h3>
            <p className="mt-2 text-sm text-navy/60">
              Ipamorelin is a selective GH secretagogue and ghrelin mimetic.
              Unlike older secretagogues, it stimulates GH release with minimal
              effect on cortisol and prolactin — making it one of the
              &ldquo;cleanest&rdquo; GH peptides available. Combined with
              CJC-1295, it creates a synergistic GH pulse that mimics the
              body&apos;s natural release pattern.
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-accent-dark">
              Read full guide &rarr;
            </span>
          </Link>
        </div>
      </section>

      {/* GH Secretagogue Stacks */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          GH Secretagogue Stacks
        </h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          CJC-1295 and Ipamorelin work through different but complementary
          mechanisms: CJC-1295 acts on GHRH receptors while Ipamorelin acts on
          ghrelin receptors (GHSR). Used together, they produce a more robust GH
          pulse than either compound alone.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          This combination is one of the most popular in the community for body
          composition goals. For a detailed breakdown of how these two peptides
          compare and interact, see our{" "}
          <Link
            href="/cjc-1295-vs-ipamorelin"
            className="font-medium text-accent-dark hover:underline"
          >
            CJC-1295 vs Ipamorelin comparison
          </Link>
          .
        </p>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="font-semibold text-navy">
            Typical Stack Considerations (Community-Reported)
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-navy/70">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>Often dosed pre-sleep to align with natural GH pulses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Fasted state dosing is commonly reported to maximize GH release
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Cycles of 12 weeks on, 4 weeks off are common in the community
              </span>
            </li>
          </ul>
          <p className="mt-3 text-xs text-navy/50">
            These are community-reported protocols only. Not medical advice.
          </p>
        </div>
      </section>

      {/* Safety Considerations */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Safety Considerations</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          GH secretagogues carry a different risk profile than anabolic steroids
          or direct HGH. Because they work through the pituitary&apos;s own
          regulatory mechanisms, the risk of GH excess is naturally limited by
          negative feedback. However, elevated GH and IGF-1 over time do carry
          theoretical risks including fluid retention, joint discomfort, and
          potential effects on insulin sensitivity.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Neither CJC-1295 nor Ipamorelin is FDA-approved for human use outside
          of research settings. Individuals with a history of cancer, diabetes,
          or pituitary conditions should consult a physician before considering
          these compounds.
        </p>
      </section>

      {/* Where to Buy */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Where to Buy</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Quality matters enormously with GH peptides — underdosed or impure
          products are common in the market. We vet vendors for third-party COA
          compliance and community reputation so you can source with confidence.
        </p>
        <Link
          href="/best-peptide-sources"
          className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          View our vetted peptide sources &rarr;
        </Link>
        <div className="mt-6">
          <AffiliateDisclosure />
        </div>
      </section>
    </div>
  );
}
