import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Sermorelin: What the Research Actually Shows (2026)",
  description:
    "Deep-dive into Sermorelin research: the FDA history, Geref approval and discontinuation, adult anti-aging evidence gap, compounding vs research-grade, and regulatory updates as of April 2026.",
};

export default function SermorelinPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">Sermorelin</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Growth Hormone
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        Sermorelin: What the Research Actually Shows
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        Most peptides on this site have never been anywhere near FDA approval.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Sermorelin is different.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        That is what makes it one of the more interesting GH-axis peptides to
        write about. Sermorelin actually went through FDA trials. It was
        approved in 1997 as Geref for pediatric growth hormone deficiency. It
        was used clinically for more than a decade.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        That is not nothing.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        In fact, among the GH-axis peptides covered on Biohacking Unlocked,
        sermorelin has the most legitimate historical regulatory track record.
        That history deserves to be treated seriously.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        But it also creates the biggest misconception around sermorelin today.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        You will often see clinics or peptide sites say, &ldquo;Sermorelin is
        FDA-approved.&rdquo;
      </p>
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="text-sm leading-relaxed text-amber-900/80">
          <strong>
            That statement is historically true and practically misleading.
          </strong>
        </p>
        <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
          Sermorelin <em>was</em> FDA-approved. The branded product, Geref, was
          discontinued by the manufacturer in 2008 for commercial and
          manufacturing reasons — not because FDA found it unsafe or
          ineffective. There is no currently marketed FDA-approved finished
          sermorelin product. What clinics and vendors sell today is compounded
          sermorelin or gray-market research sermorelin — and that is not the
          same thing as the original Geref product that went through FDA review.
        </p>
      </div>
      <p className="mt-4 leading-relaxed text-navy/70">
        That distinction is the whole page.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        If you came from the CJC-1295 or Ipamorelin pages, sermorelin is the
        more historically credentialed cousin in the GH-axis family.{" "}
        <Link
          href="/peptides/cjc-1295"
          className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
        >
          CJC-1295
        </Link>{" "}
        has the fascinating drug-chemistry story.{" "}
        <Link
          href="/peptides/ipamorelin"
          className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
        >
          Ipamorelin
        </Link>{" "}
        has the selectivity story. Sermorelin has the real FDA history.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Where I am stating a fact, I am citing it. Where I am sharing my read on
        the research, I am saying that out loud.
      </p>

      {/* What Sermorelin actually is */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What Sermorelin actually is
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Sermorelin is a synthetic peptide also known as sermorelin acetate,
          GHRH 1-29, GRF 1-29, and Geref — the former brand name.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Native human GHRH is 44 amino acids long. Sermorelin is made from the
          first 29 amino acids of that natural hormone — the biologically active
          portion needed to stimulate the GHRH receptor.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          In plain English, sermorelin is the active &ldquo;message&rdquo; piece
          of the body&apos;s own GHRH signal.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          It works through the GHRH receptor in the anterior pituitary — same
          receptor lane as CJC-1295, but with a much shorter half-life and a
          more natural rhythm.
        </p>
        <p className="mt-4 font-medium text-navy">
          Sermorelin&apos;s half-life is roughly 10–20 minutes. Very short.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But short is part of the point. A short half-life means sermorelin
          gives the pituitary a brief signal and clears quickly. It does not
          keep the signal active for days the way CJC-1295 with DAC can. It does
          not bypass the pituitary the way exogenous growth hormone does.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is why sermorelin is often viewed as the most physiologically
          conservative GHRH analog.
        </p>
        <p className="mt-4 text-sm text-navy/50">
          Regulatory history: sermorelin was FDA-approved in 1997 as Geref, made
          by Serono, for pediatric growth hormone deficiency. The manufacturer
          discontinued Geref in 2008 for commercial and manufacturing reasons —
          not a safety withdrawal, not a failed efficacy finding.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: sermorelin is the GH-axis peptide where the history matters
          most. It is more credentialed than the average research peptide, but
          the current market often uses that credential in a way that needs more
          context.
        </p>
      </section>

      {/* How it's supposed to work */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How it&apos;s supposed to work
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The plain-English version: sermorelin is the active piece of your
          body&apos;s own GHRH signal. It tells the pituitary to release growth
          hormone, then gets out of the way.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The GH axis works roughly like this: the hypothalamus releases GHRH,
          GHRH tells the pituitary to release growth hormone, GH drives
          downstream IGF-1 signaling through the liver and other tissues, and
          IGF-1 is connected to growth, tissue repair, metabolism, and
          body-composition biology.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Sermorelin acts at the GHRH receptor in the anterior pituitary —
          encouraging GH release using a pathway the body already uses. The
          pituitary is still involved. The body&apos;s feedback loops are still
          part of the system. It is not forcing growth hormone in from the
          outside.
        </p>
        <p className="mt-4 font-medium text-navy">
          That is the physiological argument for sermorelin, and it is a
          coherent one.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          It produces a brief GH pulse, clears quickly, and works with the
          body&apos;s existing signaling architecture. Of all the GHRH analogs,
          it is the closest to how the body actually runs this system.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            The same principle from the CJC-1295 and Ipamorelin pages applies
            here: raising GH is measurable; proving body-composition, recovery,
            sleep, or anti-aging outcomes in healthy adults is the harder
            question. With sermorelin, the mechanism is clean and the regulatory
            history is real. The adult wellness outcomes are where the evidence
            gets thinner.
          </p>
        </div>
      </section>

      {/* What the research shows */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the research shows
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The strongest human evidence for sermorelin comes from pediatric
          growth hormone deficiency — the basis of the original FDA approval.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Sermorelin was studied as a diagnostic and therapeutic GHRH analog for
          children with GH deficiency. The clinical trials supporting Geref
          established that sermorelin could stimulate endogenous GH release and
          support treatment goals in a specific patient population. That is real
          clinical history. We are not just talking about animal models or forum
          reports. Sermorelin went through a regulatory pathway and was approved
          for a defined medical use.
        </p>
        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            Foundational clinical work on GHRH(1-29) by Thorner and colleagues
            in the 1980s and 1990s established how the active GHRH fragment
            behaves in humans.{" "}
            <strong className="text-navy">Aimaretti et al. (1998)</strong>{" "}
            studied GHRH-related testing in the evaluation of pituitary GH
            reserve.{" "}
            <strong className="text-navy">Prakash and Goa (1999)</strong>{" "}
            reviewed sermorelin&apos;s therapeutic and diagnostic role in{" "}
            <em>BioDrugs</em> (PMID 18031173).
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          Those are the clean historical lanes: pediatric GH deficiency and
          diagnostic pituitary evaluation.
        </p>
        <p className="mt-4 font-medium text-navy">
          Then there is the adult anti-aging discussion.
        </p>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            The key source often cited here is{" "}
            <strong className="text-navy">Walker (2006)</strong> in{" "}
            <em>Clinical Interventions in Aging</em> — &ldquo;Sermorelin: a
            better approach to management of adult-onset growth hormone
            insufficiency?&rdquo; Walker&apos;s argument: if you can stimulate
            the body&apos;s own GH release in a pulsatile way, that may be more
            physiologically sensible than exogenous GH. That argument helped
            drive sermorelin&apos;s popularity in anti-aging clinic circles. I
            understand why it caught on.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            But Walker should be read with context. It is an advocate-style
            review making the case for sermorelin. It is not a large randomized
            controlled trial proving adult wellness benefits in healthy
            non-deficient adults.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          What the research shows: sermorelin can stimulate GH through the
          body&apos;s natural GHRH pathway. The pediatric deficiency data was
          strong enough for FDA approval. The diagnostic use case has real
          clinical grounding.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          What the research does not show: large controlled trials demonstrating
          that sermorelin produces meaningful anti-aging, body-composition,
          recovery, or sleep benefits in healthy non-deficient adults. The
          wellness market leans heavily on the physiological rationale and the
          historical approval — both real, but not the same as proving adult
          wellness claims.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: sermorelin has one of the better evidence stories in the
          GH-axis category, but only if we keep the indication straight.
          Pediatric GH deficiency is one thing. Healthy adult optimization is a
          different question.
        </p>
      </section>

      {/* Community uses */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the community uses it for
        </h2>
        <p className="mt-2 text-sm italic text-navy/50">
          Community and clinic-reported uses — not endorsements.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Sermorelin is most commonly discussed in anti-aging clinics and GH
          optimization programs, used for body recomposition, sleep quality,
          recovery, and general anti-aging protocols. It is often marketed as
          the &ldquo;gentler&rdquo; or more physiological GHRH option compared
          with CJC-1295 with DAC — and that framing has a legitimate basis in
          the mechanism.
        </p>

        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-semibold text-navy">
            The Sermorelin + Ipamorelin Stack
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            The most common stack is{" "}
            <strong className="text-navy">Sermorelin + Ipamorelin</strong>,
            which follows the same two-switch logic as CJC-1295 + Ipamorelin:
            sermorelin hits the GHRH receptor, Ipamorelin hits the ghrelin
            receptor, and both signals converge on GH release. The community and
            clinic world generally considers this stack more conservative than
            CJC-1295 + Ipamorelin because sermorelin&apos;s short half-life
            keeps the GH elevation more physiological.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            The human clinical outcome data on the combination is not
            established. There are no large controlled trials showing sermorelin
            plus Ipamorelin improves body composition, sleep, recovery, or aging
            markers in healthy adults.
          </p>
        </div>

        <p className="mt-4 font-medium text-navy">
          Community and clinic-reported protocols:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Sermorelin: 100\u2013500 mcg at night, subcutaneous",
            "Timing: before bed",
            "Pattern: 5 nights on, 2 nights off is common in clinic-style protocols",
            "Stacks: often combined with Ipamorelin",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm italic text-navy/50">
          Community and clinic protocols only. Not validated medical dosing.
        </p>

        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            <strong>Hard avoidance categories:</strong> active or recent cancer,
            uncontrolled diabetes, untreated sleep apnea, pregnancy or
            breastfeeding, and anyone under 18 outside of appropriate pediatric
            endocrine care.
          </p>
        </div>
      </section>

      {/* Regulatory situation */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The regulatory situation (April 2026)
        </h2>
        <p className="mt-2 text-sm text-navy/50">
          This is the most important section of the page, because
          sermorelin&apos;s regulatory history is both its strongest credential
          and its most common marketing confusion.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Three things are all true at the same time:
        </p>
        <ul className="mt-4 space-y-4">
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              Sermorelin was FDA-approved in 1997 as Geref for pediatric GH
              deficiency.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              That approval was real. It went through clinical trials. It
              represents the strongest historical regulatory record of any
              GH-axis peptide in this series.
            </p>
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              Geref was voluntarily discontinued in 2008 for commercial and
              manufacturing reasons.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Not for safety, not for efficacy. The drug worked. The company
              stopped making it. That matters because &ldquo;discontinued&rdquo;
              can sound like &ldquo;pulled for safety,&rdquo; and that is not
              what happened here.
            </p>
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              There is no currently marketed FDA-approved finished sermorelin
              product.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Compounded sermorelin does not automatically inherit the FDA
              approval, manufacturing controls, or finished-drug review of the
              discontinued Geref. When someone says &ldquo;sermorelin is
              FDA-approved,&rdquo; the accurate response is: it was approved
              historically; there is no currently approved finished product.
            </p>
          </li>
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          Sermorelin also has a different legal lane from most gray-market
          peptides. Compounded sermorelin can be prescribed through licensed 503A
          compounding pharmacies — a legitimate prescription pathway that
          CJC-1295 and Ipamorelin do not have. A prescription compounded product
          from a licensed pharmacy and a research-use vial from an online vendor
          should not be treated as equivalent.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">WADA</h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          WADA is straightforward: sermorelin is explicitly prohibited on the
          2026 WADA Prohibited List under S2.2.4 — &ldquo;growth
          hormone-releasing hormone (GHRH) and its analogues (e.g. CJC-1293,
          CJC-1295, sermorelin and tesamorelin).&rdquo; Banned at all times for
          tested athletes.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: sermorelin is the best example on this site of why regulatory
          nuance matters. Its FDA history is real and positive. But using that
          history to imply today&apos;s compounded product is FDA-approved is
          not clean framing — and serious practitioners know the difference.
        </p>
      </section>

      {/* The purity problem */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The purity problem</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Sermorelin has two quality conversations that should not be conflated.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Compounded sermorelin
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Prescription compounded sermorelin from a licensed 503A pharmacy
          operates under pharmacy regulation, USP standards, and sterility
          requirements. That is a meaningfully higher quality floor than a
          gray-market research vial — while still not being the same as the
          original Geref product.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Gray-market sermorelin
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          For gray-market sermorelin, the standard COA checklist applies:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Does the COA match the exact batch?",
            "Does mass spectrometry confirm identity?",
            "Is purity confirmed by HPLC?",
            "Is the testing from a real third-party lab?",
            "Are sterility and endotoxin addressed?",
            "Is the product actually sermorelin and not another GHRH analog?",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          A COA is not decoration. It is the receipt — and sermorelin&apos;s
          regulatory history can create false confidence that needs to be
          verified, not assumed.
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
      </section>

      {/* What isn't settled yet */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What isn&apos;t settled yet
        </h2>
        <ul className="mt-4 space-y-4">
          {[
            {
              q: "Does sermorelin produce meaningful clinical benefits in healthy non-deficient adults?",
              a: "The pediatric GH deficiency history is real. Adult wellness outcomes are a separate evidence question.",
            },
            {
              q: "How consistent is compounded sermorelin compared with Geref?",
              a: "Compounded products can be legitimate, but they are not the same as an FDA-approved finished drug product.",
            },
            {
              q: "What is the long-term safety picture for adult anti-aging use?",
              a: "The FDA approval was for pediatric deficiency, not broad adult wellness use.",
            },
            {
              q: "What happens to IGF-1 with chronic use?",
              a: "Chronic GH-axis stimulation raises the same IGF-1-related questions as other GH peptides. Not proof of harm, but a reason the question belongs in the conversation.",
            },
            {
              q: "What about thyroid function?",
              a: "GH-axis stimulation can interact with thyroid physiology. Hypothyroidism is worth monitoring in this category \u2014 not the headline concern, but a real enough endocrine consideration to note.",
            },
            {
              q: "What about glucose metabolism?",
              a: "Growth hormone can affect insulin sensitivity, relevant for anyone with diabetes risk or existing glucose-control issues.",
            },
            {
              q: "Does Sermorelin + Ipamorelin produce better outcomes than either alone?",
              a: "The mechanism is coherent. Human outcome data on the combination is not established.",
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
          My honest read: sermorelin is the GH-axis peptide with the most
          legitimate historical credentials on this site.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Real FDA trials. Real approval. Real clinical use for more than a
          decade. That is a major distinction — it separates sermorelin from
          CJC-1295, Ipamorelin, and most of the research peptides available
          online.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The physiological argument is also the strongest in this category.
          Short half-life. Brief pulse. Pituitary still in the loop. Feedback
          loops preserved. If someone is thinking about the GHRH analog
          category, sermorelin is the most defensible concept from a &ldquo;work
          with the body&apos;s rhythm&rdquo; perspective — and the historical
          data backs that framing more than any other peptide in the GH-axis
          series.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The tense matters though. Sermorelin <em>was</em> FDA-approved. There
          is no currently marketed FDA-approved finished product. What clinics
          and vendors sell today is compounded or research-use sermorelin — not
          Geref.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The clinical outcomes gap is also real. Pediatric GH deficiency data
          does not automatically prove adult wellness benefits. Anti-aging
          clinics have built a lot of messaging on a reasonable physiological
          argument, but the large healthy-adult outcome trials are not there yet.
        </p>
        <p className="mt-4 font-medium text-navy">
          That is the honest middle: sermorelin is not just random peptide
          marketing. It is also not proven anti-aging medicine. It is one of the
          more credible and interesting GH-axis peptides — as long as we tell
          the regulatory story in the right tense.
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
            href="/peptides/ipamorelin"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Ipamorelin: What the Research Actually Shows
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
          is not a medical resource. Sermorelin is not currently available as an
          FDA-approved marketed finished drug product, and compounded or
          research-use products are commonly labeled &ldquo;for research
          purposes only / not for human consumption.&rdquo; Anyone considering
          peptides should talk with a qualified healthcare provider. See our
          full{" "}
          <Link href="/disclaimer" className="underline hover:text-accent-dark">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
