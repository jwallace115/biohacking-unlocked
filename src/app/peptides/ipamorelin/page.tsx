import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AffiliateBox from "@/components/AffiliateBox";

export const metadata: Metadata = {
  title: "Ipamorelin: What the Research Actually Shows (2026)",
  description:
    "Deep-dive into Ipamorelin research: the selective GHRP story, Raun 1998 human data, the CJC-1295 stack, Beck trial failure, regulatory updates as of April 2026, and purity risks.",
};

export default function IpamorelinPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">Ipamorelin</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Growth Hormone
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        Ipamorelin: What the Research Actually Shows
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        Ipamorelin became the dominant GHRP in the modern biohacking community
        for a reason.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        It was not the first peptide in this category. It was not the strongest
        growth-hormone releaser ever studied. And it is definitely not the only
        peptide people talk about for GH optimization.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        But Ipamorelin did something important: it helped separate the growth
        hormone signal from some of the hormonal noise that made older GHRPs
        messier.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        That is the interesting part.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Older GHRPs like GHRP-2, GHRP-6, and hexarelin could stimulate growth
        hormone, but they also tended to push cortisol and prolactin in ways
        that made the side-effect profile less clean. Ipamorelin got attention
        because it was more selective. It could stimulate GH release without the
        same level of cortisol and prolactin spillover.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        That is a real pharmacological improvement.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        If you came from the CJC-1295 page, you already know half the GH-axis
        story: CJC-1295 works through the GHRH receptor. Ipamorelin works
        through a different receptor — the ghrelin receptor. That is why the two
        are so often discussed together.{" "}
        <Link
          href="/peptides/cjc-1295"
          className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
        >
          Read the CJC-1295 page &rarr;
        </Link>
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Where I am stating a fact, I am citing it. Where I am sharing my read on
        the research, I am saying that out loud.
      </p>

      <AffiliateBox
        productName="Ipamorelin"
        productUrl="https://ascensionpeptides.com/Ipamorelin/ref/Biohackingunlocked/"
      />

      {/* What Ipamorelin actually is */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What Ipamorelin actually is
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Ipamorelin is a synthetic pentapeptide, meaning it is made from five
          amino acids.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Its sequence is usually listed as:
        </p>
        <p className="mt-2 font-mono text-sm text-navy/80 bg-gray-50 rounded-lg px-4 py-2 inline-block">
          Aib-His-D-2-Nal-D-Phe-Lys-NH&#x2082;
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          It was developed in the late 1990s, originally by Novo Nordisk, as
          part of the growth hormone secretagogue research world.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Ipamorelin is a GHS-R1a agonist. That means it binds to the ghrelin
          receptor, also called the growth hormone secretagogue receptor.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That matters because it separates Ipamorelin from peptides like{" "}
          <Link
            href="/peptides/cjc-1295"
            className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
          >
            CJC-1295
          </Link>{" "}
          and Sermorelin. Those are GHRH analogs — they work through the GHRH
          receptor. Ipamorelin works through the ghrelin receptor. Different
          switch. Same general GH-axis neighborhood.
        </p>
        <p className="mt-4 font-medium text-navy">
          Here is the quick comparison that explains why Ipamorelin became the
          community favorite:
        </p>

        {/* GHRP comparison table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3">GHRP</th>
                <th className="px-4 py-3">GH release</th>
                <th className="px-4 py-3">Cortisol</th>
                <th className="px-4 py-3">Prolactin</th>
                <th className="px-4 py-3">Appetite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-navy">GHRP-6</td>
                <td className="px-4 py-3 text-navy/70">Strong</td>
                <td className="px-4 py-3 text-navy/70">Yes</td>
                <td className="px-4 py-3 text-navy/70">Yes</td>
                <td className="px-4 py-3 text-navy/70">Strong</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-navy">GHRP-2</td>
                <td className="px-4 py-3 text-navy/70">Strong</td>
                <td className="px-4 py-3 text-navy/70">Yes</td>
                <td className="px-4 py-3 text-navy/70">Yes</td>
                <td className="px-4 py-3 text-navy/70">Moderate</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-navy">Hexarelin</td>
                <td className="px-4 py-3 text-navy/70">Strong</td>
                <td className="px-4 py-3 text-navy/70">Yes</td>
                <td className="px-4 py-3 text-navy/70">Yes</td>
                <td className="px-4 py-3 text-navy/70">Moderate</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-accent-dark">
                  Ipamorelin
                </td>
                <td className="px-4 py-3 text-navy/70">Strong</td>
                <td className="px-4 py-3 font-medium text-accent-dark">
                  Minimal
                </td>
                <td className="px-4 py-3 font-medium text-accent-dark">
                  Minimal
                </td>
                <td className="px-4 py-3 font-medium text-accent-dark">
                  Minimal
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 leading-relaxed text-navy/70">
          That table is the whole editorial angle in one place.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The older GHRPs were interesting, but they were hormonally louder.
          Ipamorelin was cleaner. Not magic. Not risk-free. But cleaner.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: that selectivity is why Ipamorelin earned its spot. It is not
          just &ldquo;another GH peptide.&rdquo; It is the one where researchers
          got closer to isolating the GH-release signal from the cortisol and
          prolactin side channels.
        </p>
      </section>

      {/* How it's supposed to work */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How it&apos;s supposed to work
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The plain-English version:
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Your stomach releases ghrelin. Ghrelin helps signal hunger, but it
          also tells the pituitary to release growth hormone.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Ipamorelin mimics part of that ghrelin signal at the GHS-R1a receptor.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The interesting part is that Ipamorelin appears to do this selectively.
          It stimulates GH release without strongly triggering the cortisol and
          prolactin increases that were more noticeable with older GHRPs.
        </p>
        <p className="mt-4 font-medium text-navy">
          That is the &ldquo;clean pulse&rdquo; story.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          It is not that Ipamorelin creates a broad hormonal storm. The idea is
          more specific: hit the ghrelin receptor in a way that produces a GH
          pulse while keeping some of the messier hormonal spillover lower.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          From there, the GH-axis chain is familiar: Ipamorelin stimulates GH
          release, GH can contribute to IGF-1 signaling, and IGF-1 is connected
          to growth, repair, metabolism, and body-composition biology.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            But the same principle from the CJC-1295 page applies here: raising
            GH is measurable; proving the downstream outcomes people want in
            healthy adults is the harder question. Ipamorelin can stimulate GH.
            The research supports that. Whether that translates into better body
            composition, better recovery, better sleep, or slower aging in
            healthy adults is a different question — and that is where the
            evidence is still early.
          </p>
        </div>
      </section>

      {/* What the research shows */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the research shows
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The strongest part of the Ipamorelin research story is human
          pharmacology.
        </p>
        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            The foundational paper is{" "}
            <strong className="text-navy">Raun et al. (1998)</strong> in the{" "}
            <em>European Journal of Endocrinology</em> (PMID 9849822). This is
            the original characterization study that established Ipamorelin as a
            potent and selective GH secretagogue in healthy adults, with
            approximately 40 volunteers. It did not just show that Ipamorelin
            could raise GH — it helped establish the selectivity profile: strong
            GH release with minimal cortisol and prolactin elevation compared
            with the older GHRPs.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            That is the reason Ipamorelin became interesting. Not because
            &ldquo;boosts GH&rdquo; is a rare claim in peptide marketing. Plenty
            of compounds can push GH. Ipamorelin&apos;s angle is that it does it
            more cleanly.
          </p>
        </div>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Gobburu et al. (1999)</strong> added
            pharmacokinetic and pharmacodynamic profiling in healthy volunteers,
            helping characterize how Ipamorelin behaves in the human body.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          So the human pharmacology story is real. Ipamorelin stimulates GH
          release with a cleaner cortisol and prolactin profile than older
          GHRPs. That selectivity is the strongest part of the evidence base.
        </p>
        <p className="mt-4 font-medium text-navy">Now for the wrinkle.</p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The largest human trial of Ipamorelin was not a body-composition
          trial, not an anti-aging trial, and not a recovery trial. It was a
          Phase 2 trial for postoperative ileus — a condition where bowel
          function is delayed after surgery.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            That trial was{" "}
            <strong>Beck et al. (2014)</strong>. It included several hundred
            patients and{" "}
            <strong>did not meet its primary endpoint</strong>. Development for
            that indication was discontinued.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
            That belongs in the article. A lower-quality peptide page would skip
            it because it complicates the story. I think it makes the story more
            honest.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          The framing matters: the Beck trial tested Ipamorelin for a specific
          GI motility indication. It was not testing the biohacking
          community&apos;s main GH-axis use case. The negative result does not
          erase the GH-release pharmacology from Raun and other early work.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But it does remind us of something worth keeping in mind: a peptide
          can do something measurable and still fail in a clinical indication.
          That is not a contradiction. That is drug development.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Animal research adds a few more pieces.{" "}
          <strong className="text-navy">Johansen et al. (1999)</strong> looked
          at bone formation and increased bone mass in growing rats.{" "}
          <strong className="text-navy">Venkova et al. (2009)</strong> and{" "}
          <strong className="text-navy">
            Greenwood-Van Meerveld et al. (2012)
          </strong>{" "}
          explored gastric motility effects in rodent models — which connects to
          why researchers pursued the ileus indication in the first place.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The cleanest human takeaway is this: Ipamorelin has real human
          pharmacology data for GH release and selectivity. It does not have
          strong long-term clinical outcome data in healthy adults for body
          composition, recovery, sleep, or anti-aging.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: this is a genuinely interesting GH-axis peptide with a
          cleaner design than older GHRPs. The mechanism is not the weak part.
          The missing piece is outcomes.
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
          In the biohacking community, Ipamorelin is mostly discussed for:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Body recomposition",
            "Lean muscle support",
            "Fat-loss support",
            "Sleep quality",
            "Recovery",
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
            The sleep angle
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            The sleep angle is especially interesting because it connects to
            natural GH rhythm. The body&apos;s largest natural GH pulse usually
            happens during the first part of deep sleep. That is why many
            community protocols place Ipamorelin before bed. The idea is not
            random: time the peptide near the body&apos;s natural overnight GH
            pulse instead of creating a signal at an arbitrary time. Whether that
            timing actually produces better outcomes than other dosing windows is
            not proven, but the reasoning is physiologically coherent.
          </p>
        </div>

        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-semibold text-navy">
            The CJC-1295 + Ipamorelin Stack
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            The canonical stack is{" "}
            <strong className="text-navy">
              CJC-1295 without DAC + Ipamorelin
            </strong>
            .{" "}
            <Link
              href="/peptides/cjc-1295"
              className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
            >
              Read the CJC-1295 page &rarr;
            </Link>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            The short version: CJC-1295 without DAC hits the GHRH receptor.
            Ipamorelin hits the ghrelin receptor. Two different GH switches
            pressed at the same time. The goal is a stronger GH pulse while
            still preserving a pulsatile pattern.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            As community-built protocols go, this one is more coherent than
            most. The logic is not just &ldquo;two peptides must be better than
            one.&rdquo; It is based on two different receptor pathways converging
            on the same GH-release system. But the human clinical outcome data
            on the combination is not there yet.
          </p>
        </div>

        <p className="mt-4 font-medium text-navy">
          Community-reported protocols:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Ipamorelin: 100\u2013300 mcg per dose, 1\u20133 times daily, subcutaneous",
            "Common stack: 100 mcg Ipamorelin paired with 100 mcg CJC-1295 without DAC",
            "Timing: pre-bed dosing is common",
            "Cycle pattern: often 8\u201316 weeks on, followed by time off",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm italic text-navy/50">
          Community only. Not validated medical dosing.
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
          Ipamorelin is not FDA approved for any indication.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          FDA has flagged concerns around compounded Ipamorelin, including
          immunogenicity and active pharmaceutical ingredient characterization
          issues. Ipamorelin was discussed in FDA&apos;s compounding review
          process, including PCAC meetings in October and December 2024.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The same post-April 2026 caution from the CJC-1295 page applies here.
          The April 2026 Federal Register removals primarily covered BPC-157,
          TB-500, GHK-Cu injectable, Semax, Epitalon, MOTs-C, and KPV.
          Ipamorelin&apos;s exact Category 2 status after April 2026 should be
          verified against the current FDA docket before making a hard legal
          claim. The cleaner framing: Ipamorelin is not FDA approved, it has
          been under active FDA compounding-review scrutiny, and its regulatory
          status is worth checking as this space moves quickly.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">WADA</h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          WADA is much clearer. Ipamorelin is explicitly prohibited on the 2026
          WADA Prohibited List under S2.2.4 as a growth hormone secretagogue.
          Banned at all times for WADA-tested athletes.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is not a gray area.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          In the United States, Ipamorelin is commonly sold as a research
          chemical. It is not a controlled substance, but &ldquo;research use
          only&rdquo; is legal framing, not a safety guarantee.
        </p>
      </section>

      {/* The purity problem */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The purity problem</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The vendor question matters with every research peptide. With
          Ipamorelin, it matters even more because Ipamorelin is usually not
          used alone — it is almost always part of a stack.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That means a purity or identity problem in one vial can compromise the
          whole protocol. Clean CJC-1295 and mislabeled Ipamorelin. Or the
          reverse. Or two COAs that look fine but do not actually match the batch
          numbers on the vials.
        </p>
        <p className="mt-4 font-medium text-navy">
          For Ipamorelin, the practical COA questions are:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Does the COA match the exact batch?",
            "Does mass spectrometry confirm the peptide identity?",
            "Is purity confirmed by HPLC?",
            "Is the testing from a real third-party lab?",
            "Are sterility and endotoxin addressed for anything injectable?",
            "Is the product actually Ipamorelin, not another GHRP?",
            "If used in a stack, are both peptides independently verified?",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          A COA is not decoration. It is the receipt — and with Ipamorelin, one
          bad receipt can throw off the whole stack.
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
          space. The peptide can be interesting on paper, but if the vial is
          mislabeled, underdosed, contaminated, or backed by a fake COA, the
          research discussion becomes almost irrelevant.
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
              q: "Does GH elevation from Ipamorelin translate to clinical benefits in healthy adults?",
              a: "The GH-release pharmacology is established. The body-composition, recovery, sleep, and anti-aging outcomes are not.",
            },
            {
              q: "What is the long-term safety picture?",
              a: "Short-term pharmacology data is not the same as long-term repeated-use safety. That dataset does not exist yet.",
            },
            {
              q: "What happens to IGF-1 with chronic use?",
              a: "GH-axis stimulation raises IGF-1. Chronic IGF-1 elevation is associated in epidemiological research with several cancer types. That does not prove Ipamorelin causes cancer, but it is a reason the question cannot be dismissed.",
            },
            {
              q: "What happens to glucose and insulin sensitivity?",
              a: "GH signaling can affect glucose metabolism. Long-term effects in healthy users are not well characterized.",
            },
            {
              q: "Does pre-bed timing actually improve outcomes?",
              a: "The reasoning is physiologically coherent. Better timing logic is not the same as proven better outcomes.",
            },
            {
              q: "Does the CJC-1295 + Ipamorelin stack outperform either compound alone in humans?",
              a: "Mechanistically, the stack makes sense. The clinical outcome data is not there yet.",
            },
            {
              q: "Why did the Beck postoperative ileus trial fail?",
              a: "It may simply mean Ipamorelin was not effective for that GI indication. It may also be a useful reminder that translating receptor activity into real clinical outcomes is harder than the mechanism makes it look.",
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
          My honest read: Ipamorelin earned its place as the dominant GHRP.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is not just community hype. The selectivity profile is a real
          pharmacological achievement. Older GHRPs could stimulate GH, but they
          came with more cortisol, prolactin, and appetite baggage. Ipamorelin
          cleaned up a lot of that noise — and the Raun 1998 human data supports
          that story.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The foundational pharmacology is established. The mechanism makes
          sense. The community use case — especially the CJC-1295 without DAC +
          Ipamorelin stack — is one of the more coherent GH-axis ideas in the
          peptide world.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The Beck 2014 trial failure is worth knowing about. It does not sink
          the GH-release story, because the trial was testing a GI motility
          indication, not the main biohacking use case. But it is a useful
          reminder that pharmacology does not automatically become clinical
          success.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Ipamorelin is not random internet nonsense. It is also not proven
          anti-aging medicine.
        </p>
        <p className="mt-4 font-medium text-navy">
          It sits in the category I find most interesting: real mechanism, real
          human pharmacology, cleaner design than earlier compounds, and a future
          that still needs better outcome data.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is exactly the kind of peptide story worth following.
        </p>
      </section>

      {/* Related Reading */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-navy">Related Reading</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/peptides/cjc-1295"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            CJC-1295: What the Research Actually Shows
          </Link>
          <Link
            href="/peptides/bpc-157"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            BPC-157: What the Research Actually Shows
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
          is not a medical resource. Ipamorelin is not FDA approved for any
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
