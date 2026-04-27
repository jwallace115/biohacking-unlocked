import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AffiliateBox from "@/components/AffiliateBox";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "CJC-1295: What the Research Actually Shows (2026)",
  description:
    "Deep-dive into CJC-1295 research: with DAC vs without DAC, Phase 1 human data, the Ipamorelin stack, GH-axis pharmacology, regulatory updates as of April 2026, and purity risks.",
};

export default function CJC1295Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">CJC-1295</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Growth Hormone
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        CJC-1295: What the Research Actually Shows
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>
      <AuthorByline />

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        Most people searching for CJC-1295 do not realize they may be looking at
        two different molecules with almost the same name.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        That is the first thing to get straight — and honestly, it is one of the
        more interesting entry points in the whole GH-axis peptide category.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        There is CJC-1295 with DAC, and there is CJC-1295 without DAC. Those
        names sound like minor product variations, but they are not. They behave
        differently in the body, they create different growth hormone patterns,
        and the community talks about them in ways that can get confusing fast.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        One vendor might call something &ldquo;CJC-1295 no DAC.&rdquo; Another
        might call it &ldquo;Mod GRF 1-29.&rdquo; Another might just write
        &ldquo;CJC-1295&rdquo; and leave the buyer guessing.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        That is not a small labeling issue. With this peptide, the name tells
        you what kind of growth hormone signal you are creating.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        This is also the first GH-axis peptide page on Biohacking Unlocked.{" "}
        <Link
          href="/peptides/bpc-157"
          className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
        >
          BPC-157
        </Link>
        ,{" "}
        <Link
          href="/peptides/tb-500"
          className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
        >
          TB-500
        </Link>
        , and GHK-Cu are mostly tissue-repair stories. CJC-1295 is a different
        category: it is a growth-hormone-releasing peptide. The biology is
        genuinely interesting, and the pharmacokinetics story here is one of the
        more fascinating ones I have come across in this space.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Where I am stating a fact, I am citing it. Where I am sharing my read on
        the research, I am saying that out loud.
      </p>

      <AffiliateBox
        productName="CJC-1295"
        productUrl="https://ascensionpeptides.com/product/cjc-1295-5mg/ref/Biohackingunlocked/"
        size="5mg"
      />

      {/* What CJC-1295 actually is */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What CJC-1295 actually is
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          CJC-1295 is a synthetic modified analog of GHRH — growth
          hormone-releasing hormone.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          To understand why that matters, the basic GH axis is worth a quick
          sketch:
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The hypothalamus releases GHRH. GHRH tells the anterior pituitary to
          release growth hormone. GH signals the liver and other tissues, which
          produce IGF-1. IGF-1 is one of the downstream signals tied to growth,
          repair, metabolism, and body composition.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          CJC-1295 mimics GHRH. It does not bypass the pituitary the way
          injecting exogenous GH would. The pituitary is still in the loop. The
          body&apos;s own regulation is still involved. That is the part that
          makes GHRH analogs a pharmacologically interesting category.
        </p>
        <p className="mt-4 font-medium text-navy">
          Now the naming issue — because it genuinely matters:
        </p>

        {/* Comparison table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Also called</th>
                <th className="px-4 py-3">Half-life</th>
                <th className="px-4 py-3">GH pattern</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-navy">
                  CJC-1295 with DAC
                </td>
                <td className="px-4 py-3 text-navy/70">DAC-GRF</td>
                <td className="px-4 py-3 text-navy/70">6–8 days</td>
                <td className="px-4 py-3 text-navy/70">
                  Sustained elevation; higher trough GH
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-navy">
                  CJC-1295 without DAC
                </td>
                <td className="px-4 py-3 text-navy/70">
                  Mod GRF 1-29, Modified GRF 1-29
                </td>
                <td className="px-4 py-3 text-navy/70">~30 minutes</td>
                <td className="px-4 py-3 text-navy/70">
                  Brief pulse, more physiological
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 leading-relaxed text-navy/70">
          The with-DAC version includes a Drug Affinity Complex — a
          maleimidopropionic acid linker that allows the molecule to bind albumin
          in the bloodstream. That binding dramatically extends half-life. A
          short-acting GHRH signal becomes something that stays
          pharmacologically active for nearly a week.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The result is what the community often calls a &ldquo;GH bleed&rdquo;
          — not necessarily zero pulses, but a much more sustained elevation with
          higher baseline GH for days after a single injection.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The without-DAC version is different. No albumin binding. Half-life of
          roughly 30 minutes. It produces a brief GH pulse that is closer to the
          way the body naturally releases GH — in peaks, not in a sustained
          drip.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The pharmacokinetics story here is what I find most compelling: adding
          one chemical modification to a peptide can stretch its half-life from
          30 minutes to nearly a week. That is a real piece of drug chemistry.
          And it is also why the community has largely moved toward the
          without-DAC version — because continuous GH elevation is not how the
          body normally works, and shorter pulses feel more defensible as a
          concept.
        </p>
        <p className="mt-4 text-sm text-navy/50">
          Original developer: ConjuChem, early 2000s. Native GHRH is 44 amino
          acids; CJC-1295 is a 29–30 amino acid modified analog with four amino
          acid substitutions that resist enzymatic breakdown.
        </p>
      </section>

      {/* How it's supposed to work */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How it&apos;s supposed to work
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The plain-English version: your pituitary already makes GH. CJC-1295
          tells it to make more.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The mechanism is well-established. CJC-1295 binds GHRH receptors in
          the anterior pituitary, stimulating GH release. GH travels to the
          liver and other tissues, contributing to IGF-1 production. The
          pharmacodynamic effects — GH going up, IGF-1 going up — have been
          measured in human trials.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That part of the story is solid.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            <strong>Here is the part worth being clear-eyed about:</strong>{" "}
            Stimulating GH release is measurable. Whether that translates to
            better body composition, faster recovery, improved sleep, or
            anti-aging effects in healthy adults is a much harder question — and
            the clinical outcomes evidence mostly has not caught up yet.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
            That gap — &ldquo;we can measure GH moving&rdquo; versus &ldquo;we
            can prove it does what people want it to do&rdquo; — is the central
            tension in the whole GH-axis peptide category.
          </p>
        </div>
      </section>

      {/* What the research shows */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the research shows
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This is where CJC-1295 actually has a more interesting story than the
          tissue-repair peptides.
        </p>
        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            The key study is{" "}
            <strong className="text-navy">Teichman et al. (2006)</strong> in the{" "}
            <em>Journal of Clinical Endocrinology &amp; Metabolism</em> (PMID
            16352683). This was a Phase 1 trial in approximately 50 healthy
            adults. Single-dose CJC-1295 with DAC produced dose-dependent mean
            GH increases of roughly{" "}
            <strong className="text-navy">2- to 10-fold for six days</strong> or
            more, and mean IGF-1 increases of roughly{" "}
            <strong className="text-navy">
              1.5- to 3-fold for 9–11 days
            </strong>
            . The estimated half-life was about 5.8–8.1 days.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            That is real Phase 1 human data. A controlled study, healthy adults,
            measurable results.
          </p>
        </div>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            A second important paper is{" "}
            <strong className="text-navy">
              Ionescu and Frohman (2006)
            </strong>
            , also in <em>JCEM</em> (PMID 17018654), which found that CJC-1295
            increased trough and mean GH secretion and IGF-1 production while GH
            pulsatility was preserved. The takeaway is not that pulses disappear
            — it is that baseline GH is elevated substantially, which changes the
            overall GH environment even between pulses.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is where the pharmacology gets philosophically interesting: is
          sustained GH elevation for days actually what you want, or is a shorter
          pulse that respects the body&apos;s natural timing a better concept?
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The research answers the &ldquo;does it work pharmacologically&rdquo;
          question clearly. It does. CJC-1295 moves GH and IGF-1 in humans.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          What the research does not answer is whether those GH and IGF-1
          changes produce the body-composition, recovery, or anti-aging outcomes
          people are actually looking for in healthy adults.
        </p>
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-5">
          <p className="text-sm font-semibold text-red-900/80">
            Safety event
          </p>
          <p className="mt-2 text-sm leading-relaxed text-red-900/70">
            A Phase II clinical trial of CJC-1295 in lipodystrophy was halted
            after a participant death. The relationship to the drug was
            investigated. FDA has also identified serious adverse events
            including increased heart rate and systemic vasodilatory reaction,
            and has noted concerns around immunogenicity and characterization of
            the peptide.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-red-900/70">
            That belongs here. It changes the risk category for CJC-1295
            compared to a tissue-repair peptide.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: the pharmacology story here is one of the more interesting
          ones on this site. The human signal is real. But the Phase 1 data
          proves the drug does something — it does not prove it does everything
          the community wants it to do.
        </p>
      </section>

      {/* Community uses */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the community uses it for
        </h2>
        <p className="mt-2 text-sm italic text-navy/50">
          Community-reported uses — not endorsements.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          CJC-1295 shows up in biohacking and performance communities mostly
          for:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Body recomposition (fat loss and lean muscle)",
            "Recovery",
            "Sleep quality",
            "Anti-aging",
            "General GH optimization",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-semibold text-navy">
            The CJC-1295 + Ipamorelin Stack
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            The most popular use is the{" "}
            <strong className="text-navy">
              CJC-1295 without DAC + Ipamorelin stack
            </strong>
            , and the reasoning behind it is actually one of the more
            mechanistically coherent ideas in the community.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            CJC-1295 without DAC hits the GHRH receptor — one GH switch.
            Ipamorelin hits the ghrelin receptor, also called the growth hormone
            secretagogue receptor — a different GH switch. Push both at the same
            time and you get a stronger GH pulse than either compound alone,
            while still preserving a pulsatile pattern rather than keeping GH
            elevated continuously.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            That is why the stack caught on. There is at least a real biological
            idea behind it, not just two random peptides combined because the
            names sound good.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            What is not there yet is human clinical outcomes research showing the
            stack delivers on the downstream promises — body composition,
            recovery, sleep quality in healthy adults.
          </p>
        </div>

        <p className="mt-4 font-medium text-navy">
          Community-reported protocols:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Without DAC (Mod GRF 1-29): often discussed around 100 mcg, 1\u20133 times daily, subcutaneous, commonly paired with 100 mcg Ipamorelin in the same injection",
            "With DAC: often discussed around 1\u20132 mg per week, subcutaneous",
            "Common cycle pattern: 8\u201316 weeks on, followed by time off",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm italic text-navy/50">
          Community protocols only. Not validated medical dosing.
        </p>

        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            <strong>Hard avoidance categories:</strong> active or recent cancer,
            uncontrolled diabetes, untreated sleep apnea, pregnancy or
            breastfeeding, and anyone under 18 or not past skeletal maturity.
            GH-axis manipulation raises specific concerns in all of those
            situations.
          </p>
        </div>
      </section>

      {/* Regulatory situation */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The regulatory situation (April 2026)
        </h2>
        <p className="mt-2 text-sm text-navy/50">
          Regulatory status is the part of any peptide page that goes stale
          fastest, so this section is current as of April 2026.
        </p>
        <p className="mt-4 font-semibold text-navy">
          CJC-1295 is not FDA approved for any indication.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          FDA has flagged safety concerns with CJC-1295 specifically — including
          cardiovascular-type reactions and questions around immunogenicity and
          API characterization. PCAC discussions involving CJC-1295 occurred in
          October and December 2024.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          One note on current status: the April 2026 Federal Register removals
          primarily covered BPC-157, TB-500, GHK-Cu injectable, Semax, Epitalon,
          MOTs-C, and KPV. CJC-1295&apos;s exact Category 2 status after April
          2026 should be verified against the current FDA docket before
          publishing any hard legal claim. This page reflects the cleaner
          framing: CJC-1295 is not FDA approved, it has been under active FDA
          compounding-review scrutiny, and its regulatory status is worth
          checking as this space moves quickly.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">WADA</h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          WADA is much clearer. CJC-1295 is explicitly prohibited. The 2026 WADA
          Prohibited List names it specifically under S2.2.4 — &ldquo;growth
          hormone-releasing hormone (GHRH) and its analogues (e.g. CJC-1293,
          CJC-1295, sermorelin and tesamorelin).&rdquo; Banned at all times.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is not a gray area for tested athletes.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          In the United States, CJC-1295 is sold as a research chemical. Legal
          to sell and possess. Not a controlled substance. But &ldquo;research
          use only&rdquo; is a legal framing, not a safety guarantee.
        </p>
      </section>

      {/* The purity problem */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The purity problem</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The vendor question matters with every research peptide. With
          CJC-1295, the naming problem becomes a direct mislabeling risk.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          A vial labeled &ldquo;CJC-1295&rdquo; could contain the with-DAC
          version, the without-DAC version, or a product that does not cleanly
          match either. Gray-market peptide purity is inconsistent across the
          research-chemical space, and CJC-1295 is one of the peptides where the
          naming inconsistency compounds the usual quality-control concerns.
        </p>
        <p className="mt-4 font-medium text-navy">
          The COA question for CJC-1295 goes beyond basic purity:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Is this with DAC or without DAC?",
            "Does the test confirm the exact sequence or modification?",
            "Does mass spectrometry confirm the DAC modification if the product claims to have it?",
            "Does the batch number match the vial?",
            "Is purity confirmed by HPLC?",
            "Is the lab real and third-party verifiable?",
            "Are sterility and endotoxin addressed?",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          A COA is not decoration. It is the receipt — and for CJC-1295, the
          receipt needs to identify the exact molecule, not just put a purity
          number next to the name.
        </p>

        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6">
          <p className="leading-relaxed text-navy/70">
            For beginners, this is where I would spend the most time before even
            thinking about vendor comparisons:
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="/peptide-coa-explained"
              className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
            >
              How to read a COA &rarr;
            </Link>
            <Link
              href="/best-peptide-sources"
              className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
            >
              See our vetted peptide sources &rarr;
            </Link>
            <Link
              href="/how-to-identify-fake-peptides"
              className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
            >
              How to identify fake peptides &rarr;
            </Link>
          </div>
        </div>

        <p className="mt-4 leading-relaxed text-navy/70">
          My read: vendor quality is the practical bottleneck in this entire
          space. With CJC-1295, the naming problem means a buyer can think they
          ordered one molecule and receive a meaningfully different one. That is
          not hypothetical — it is one of the more common failure points in the
          gray-market peptide world.
        </p>
      </section>

      {/* What isn't settled yet */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What isn&apos;t settled yet
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          A few honest open questions, and my read on each:
        </p>
        <ul className="mt-4 space-y-4">
          {[
            {
              q: "Does GH/IGF-1 elevation in healthy adults translate to clinical benefits?",
              a: "The pharmacology is established. The clinical outcomes in healthy people are not.",
            },
            {
              q: "What are the long-term cardiovascular effects?",
              a: "The Phase II event and FDA-flagged reactions mean this deserves a real answer that the current data does not fully provide.",
            },
            {
              q: "Does the DAC version carry extra risk from sustained GH elevation?",
              a: "The Ionescu paper shows pulsatility is preserved but trough GH is elevated. Whether a chronically elevated GH baseline has different long-term consequences than a pulsatile-only pattern is not established.",
            },
            {
              q: "What happens to glucose metabolism with chronic use?",
              a: "GH axis stimulation can affect insulin sensitivity. The long-term picture for healthy users is not well characterized.",
            },
            {
              q: "Cancer risk via IGF-1?",
              a: "IGF-1 elevation is associated in epidemiological research with several cancer types. That does not prove CJC-1295 causes cancer, but it is a reason the question cannot be dismissed, especially with long-term use.",
            },
            {
              q: "Does the CJC-1295 + Ipamorelin stack produce meaningful outcomes?",
              a: "The mechanistic rationale is real. Human clinical outcome data on the combination in healthy adults is not there yet.",
            },
            {
              q: "Does with-DAC offer any practical advantage over without-DAC?",
              a: "The longer half-life is measurable. Whether that translates to better outcomes compared to a more physiological short-pulse approach has not been established.",
            },
          ].map((item) => (
            <li
              key={item.q}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4"
            >
              <p className="text-sm font-semibold text-navy">{item.q}</p>
              <p className="mt-1 text-sm leading-relaxed text-navy/70">
                {item.a}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Bottom line */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Bottom line</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          My honest read: CJC-1295 is one of the more pharmacologically
          interesting peptides I have looked at in this category.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The pharmacokinetics story alone is worth understanding — the
          difference between a 30-minute half-life and a 6-8-day half-life
          coming down to a single albumin-binding modification is genuinely
          fascinating drug chemistry. And unlike the tissue-repair peptides,
          CJC-1295 has a real Phase 1 human study showing measurable GH and
          IGF-1 elevation in healthy adults. That is a more direct human signal
          than a lot of what is in the biohacking space.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The CJC-1295 + Ipamorelin stack is one of the more coherent community
          ideas I have come across. Two different GH switches hit at the same
          time, preserving pulsatility, aiming for a synergistic GH pulse. The
          community worked out the mechanism before clinical research caught up —
          and the mechanism genuinely makes sense.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But the clinical outcomes gap is real. Moving GH and IGF-1 is step one
          of a long chain. Whether healthy adults actually get the
          body-composition, recovery, and anti-aging results they are looking for
          is a question the evidence has not answered yet.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The with-DAC version is the one I find more complicated conceptually.
          Keeping GH elevated at a higher baseline for days changes the hormonal
          environment in ways that are less physiological than a short pulse. The
          without-DAC version, the short-acting Mod GRF 1-29, is a more
          defensible concept — it respects the body&apos;s natural pulsing
          rhythm instead of overriding it.
        </p>
        <p className="mt-4 font-medium text-navy">
          And for athletes: CJC-1295 is named on the WADA Prohibited List. That
          part of the conversation is settled.
        </p>
      </section>

      {/* Related Reading */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-navy">Related Reading</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/peptides/bpc-157"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            BPC-157: What the Research Actually Shows
          </Link>
          <Link
            href="/peptides/gh-stack"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            The GH Stack: CJC-1295 + Ipamorelin
          </Link>
          <Link
            href="/peptides/tb-500"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            TB-500: What the Research Actually Shows
          </Link>
          <Link
            href="/best-peptide-sources"
            className="rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-medium text-accent-dark hover:bg-accent/20 transition-colors"
          >
            Best Peptide Sources
          </Link>
        </div>
      </section>

      {/* AffiliateDisclosure */}
      <section className="mt-10">
        <div className="mt-4">
          <AffiliateDisclosure />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-5">
        <h2 className="text-sm font-bold text-navy">Disclaimer</h2>
        <p className="mt-2 text-xs leading-relaxed text-navy/60">
          This page is informational and not medical advice. Biohacking Unlocked
          is not a medical resource. CJC-1295 is not FDA approved for any
          indication, and research-use products are commonly labeled &ldquo;for
          research purposes only / not for human consumption.&rdquo; Anyone
          considering peptides should talk with a qualified healthcare provider.
          See our full{" "}
          <Link href="/disclaimer" className="underline hover:text-accent-dark">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
