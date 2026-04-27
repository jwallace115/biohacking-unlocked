import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AffiliateBox from "@/components/AffiliateBox";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Melanotan II: What the Research Actually Shows (2026)",
  description:
    "Deep-dive into Melanotan II research: melanocortin biology, tanning mechanism, mole and melanoma concerns, PT-141 connection, regulatory status, and safety profile as of April 2026.",
};

export default function MelanotanIIPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">Melanotan II</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Tanning / Melanocortin
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        Melanotan II: What the Research Actually Shows
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>
      <AuthorByline />

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        Melanotan II is one of the more complicated peptides to write about
        honestly.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        The mechanism is genuinely interesting. The original idea made sense: if
        researchers could create a tan with less UV exposure, maybe they could
        reduce sun damage and lower skin-cancer risk. That was a serious
        research goal, not random internet peptide culture.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        The work came out of the University of Arizona in the 1980s, where
        researchers were studying melanocortin biology and synthetic analogs of
        alpha-melanocyte-stimulating hormone. The goal was UV-independent
        tanning — or at least UV-reduced tanning — as a possible skin cancer
        prevention strategy.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        That is the interesting side.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        The complicated side is that Melanotan II does not only hit the tanning
        pathway.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        It activates multiple melanocortin receptors at once. That means the
        tanning effect, the sexual arousal effect, appetite suppression, blood
        pressure effects, nausea, flushing, and mole changes are all part of
        the same non-selective receptor story.
      </p>
      <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-5">
        <p className="text-sm leading-relaxed text-red-900/70">
          With some peptides, the safety concerns are mostly theoretical. With
          Melanotan II, several of the concerns are documented in the literature:
          mole changes, new moles, melanoma case reports, priapism, nausea, and
          other effects.
        </p>
      </div>
      <p className="mt-4 leading-relaxed text-navy/70">
        That does not mean every user develops a serious problem. It also does
        not mean the mechanism is fake.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        It means this is the peptide where the interesting biology and the
        concerning safety record live in the same molecule.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Where I am stating a fact, I am citing it. Where I am sharing my read on
        the research, I am saying that out loud.
      </p>

      <AffiliateBox
        productName="Melanotan II"
        productUrl="https://ascensionpeptides.com/product/melanotan-ii-10mg/?ref=Biohackingunlocked"
        size="10mg"
      />

      {/* What Melanotan II actually is */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What Melanotan II actually is
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Melanotan II, often written as MT-II, is a synthetic analog of
          alpha-melanocyte-stimulating hormone, or alpha-MSH.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Alpha-MSH is part of the body&apos;s melanocortin system. That system
          influences pigmentation, appetite, sexual function, inflammation, and
          other biological pathways.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Melanotan II is a cyclic heptapeptide, meaning it is a
          seven-amino-acid cyclic peptide. The cyclic structure helped make it
          more potent and longer-lasting than the natural hormone signal it was
          based on.
        </p>
        <p className="mt-4 font-medium text-navy">
          The original research goal was tanning.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The idea was simple enough: stimulate melanin production without
          requiring the same level of ultraviolet exposure. More melanin could
          theoretically mean more natural photoprotection. Less UV exposure could
          theoretically mean less skin damage.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is not a silly idea. It was a real scientific direction.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But Melanotan II itself never became an FDA-approved tanning drug.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          One of the reasons is that MT-II was not selective enough. It
          activated multiple melanocortin receptors, and that produced effects
          beyond tanning.
        </p>

        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-semibold text-navy">
            The PT-141 / Bremelanotide connection
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            A related compound, bremelanotide, also known as PT-141, was
            developed from this melanocortin research path. Bremelanotide was
            engineered toward a more selective sexual-function target, especially
            involving MC4R activity. It eventually became Vyleesi, an
            FDA-approved drug for hypoactive sexual desire disorder in
            premenopausal women.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            That connection is useful, but it needs to be framed carefully.
            Bremelanotide&apos;s approval validates that melanocortin receptor
            biology is real and clinically relevant. It does not validate
            Melanotan II&apos;s non-selective profile as safe or approved.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: the science behind Melanotan II is real. The problem is not
          that the molecule does nothing. The problem is that it does too many
          things at once.
        </p>
      </section>

      {/* How it's supposed to work */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How it&apos;s supposed to work
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Melanotan II is a non-selective melanocortin receptor agonist.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That means it activates several melanocortin receptors, including:
        </p>
        <div className="mt-4 space-y-4">
          {[
            {
              title: "MC1R — the tanning pathway",
              desc: "Activating MC1R increases melanin production in melanocytes. This is the effect most people are chasing when they use MT-II for tanning.",
            },
            {
              title: "MC3R & MC4R — CNS effects",
              desc: "Involved in central nervous system effects, including appetite and sexual arousal pathways. This is why MT-II became known for spontaneous erections, libido effects, and appetite suppression.",
            },
            {
              title: "MC4R — autonomic effects",
              desc: "Also tied to blood pressure and autonomic effects, which helps explain why blood pressure changes and flushing are part of the concern profile.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4"
            >
              <p className="text-sm font-semibold text-navy">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-navy/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 font-medium text-navy">
          Plain English: Melanotan II hits multiple switches at once.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The tanning switch is one of them. The sexual arousal switch is
          another. Appetite suppression is another. Blood pressure effects are
          another. Nausea and flushing are part of the same broad receptor
          activity picture.
        </p>
        <p className="mt-4 font-medium text-navy">
          You do not get to pick only the tanning switch.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That non-selectivity is the core pharmacological issue.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The biology is fascinating. But fascinating is not the same as clean.
        </p>
      </section>

      {/* What the research shows */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the research shows
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The human research on Melanotan II is real, but it is small and dated.
        </p>
        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            The foundational tanning study is{" "}
            <strong className="text-navy">Dorr et al. (1996)</strong>. This was
            an early Phase 1 study looking at Melanotan II in healthy
            volunteers. The sample size was extremely small — some protocols
            involved only three healthy male volunteers. Low-dose subcutaneous
            MT-II increased pigmentation, but side effects were also documented,
            including nausea, fatigue, and spontaneous erections.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is the basic MT-II story in miniature: Yes, the tanning effect
          showed up. So did the off-target effects.
        </p>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Wessells et al. (1998)</strong>{" "}
            studied MT-II in men with psychogenic erectile dysfunction. In one
            small cohort, 8 of 10 men developed clinically apparent erections.
            Related dose-response work reported increased sexual desire after 13
            of 19 MT-II doses compared with 4 of 21 placebo doses.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is real pharmacodynamic activity. But again, the studies were
          small and early-stage. They were not large long-term safety trials.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The human evidence tells us MT-II can affect pigmentation and sexual
          function pathways. It does not give us a clean long-term safety
          profile.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: Melanotan II clearly does something. The problem is not lack
          of activity. The problem is the activity is broad, messy, and tied to
          safety signals that are hard to ignore.
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
          Melanotan II is mostly used in the community for tanning. The common
          goal is darker pigmentation with less sun exposure, faster tanning, or
          less burning.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            <strong>Key point:</strong> UV exposure is still usually required
            for tanning to develop. MT-II may stimulate melanin production, but
            the visible tanning process still generally involves UV exposure.
            Some people may still increase UV exposure because they want to get
            darker faster. That changes the risk picture.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          Melanotan II is also used for sexual arousal effects. Sometimes people
          see that as a benefit. Sometimes it is unwanted. Appetite suppression
          is another reported use, though MT-II is not an approved
          weight-management drug.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Common community-reported dosing often clusters around 250–500 mcg
          daily during loading, then lower maintenance use once desired
          pigmentation is reached.
        </p>
        <p className="mt-4 text-sm italic text-navy/50">
          Community protocols only. Not validated medical dosing.
        </p>
      </section>

      {/* Safety */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Safety — what the documented concerns actually are
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This section gets its own heading because Melanotan II has one of the
          more documented safety concern profiles of any peptide on this site.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Not every concern is proven causation. But several are documented
          enough that they belong in the main article, not hidden in the
          disclaimer.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Mole changes and new moles
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          This is the most consistent skin-related concern. Dermatology
          literature has described changes in existing nevi and new moles
          appearing in people using Melanotan II.{" "}
          <strong className="text-navy">Cardones and Grichnik (2009)</strong>{" "}
          documented changes in melanocytic nevi associated with MT-II use.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Melanoma case reports
        </h3>
        <div className="mt-2 rounded-lg border border-red-200 bg-red-50 p-5">
          <p className="text-sm leading-relaxed text-red-900/70">
            There are case reports of melanoma being diagnosed during or shortly
            after Melanotan II use. Causation has not been established. But the
            signal is documented enough that it should not be dismissed.
          </p>
          <p className="mt-2 text-sm font-semibold text-red-900/80">
            Anyone with a personal or family history of melanoma or skin cancer
            should avoid Melanotan II.
          </p>
        </div>

        <h3 className="mt-6 text-lg font-semibold text-navy">Priapism</h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Priapism — a prolonged, painful erection — has been reported with
          Melanotan II use. This is not just an awkward side effect. Priapism
          can be a medical emergency because prolonged erections can damage
          tissue if not treated.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Nausea and vomiting
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Nausea is one of the most common effects reported with MT-II. This
          showed up in early human research and is widely reported in community
          use.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Other documented effects
        </h3>
        <ul className="mt-2 space-y-2">
          {[
            "Facial flushing",
            "Yawning and stretching (a known melanocortin effect)",
            "Spontaneous erections",
            "Appetite suppression",
            "Hyperpigmentation patches",
            "Darkening of freckles or moles",
            "Blood pressure changes",
            "Fatigue",
            "Injection site reactions",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-semibold text-amber-900/80">
            Survivor bias in community reports
          </p>
          <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
            The people who love MT-II and keep using it are the ones most likely
            to post about their results. People who stopped because of mole
            changes, nausea, anxiety, flushing, or other side effects may
            disappear from the conversation. Community enthusiasm can
            underrepresent bad experiences.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: this is the one peptide where I would not let the community
          reputation carry the discussion. The safety signals are specific
          enough that they deserve to lead the conversation.
        </p>
      </section>

      {/* Regulatory situation */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The regulatory situation (April 2026)
        </h2>
        <p className="mt-4 font-semibold text-navy">
          Melanotan II is not FDA approved.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The April 2026 FDA Category 2 update included Melanotan II in the
          group of peptides removed after nominator withdrawal, with Pharmacy
          Compounding Advisory Committee consultation expected before the end of
          February 2027.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That does not mean FDA approved Melanotan II. Category 2 removal is
          not approval. It is not a finding of safety or effectiveness.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          FDA and other regulators have historically warned about unregulated
          Melanotan products, especially because of skin and melanoma-related
          concerns.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">WADA</h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Melanotan II is not specifically named on the 2026 WADA Prohibited
          List as a listed compound. But because it is not approved for human
          therapeutic use, it can fall under the S0 non-approved substances
          category. That makes it high-risk for WADA-tested athletes.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: the regulatory status fits the rest of the story. This is a
          biologically active compound with real effects, real concern signals,
          and no approved product pathway.
        </p>
      </section>

      {/* The purity problem */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The purity problem</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The standard gray-market peptide concerns apply here. But with
          Melanotan II, dosing and identity matter even more because the receptor
          profile is non-selective.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          If the vial is underdosed, someone may use more than they think they
          are using. If the vial is overdosed, they may get more of every effect
          — not just more tanning. More nausea. More flushing. More blood
          pressure effect. More sexual arousal effect.
        </p>
        <p className="mt-4 font-medium text-navy">
          For MT-II, the COA questions are:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Does the COA match the exact batch?",
            "Is identity confirmed by mass spectrometry?",
            "Is purity measured by HPLC?",
            "Is the testing from a real third-party lab?",
            "Are sterility and endotoxin addressed?",
            "Does the vendor avoid health claims?",
            "Is the product clearly labeled as MT-II and not confused with PT-141?",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          A COA is not decoration. It is the receipt. But with MT-II, even a
          real COA does not erase the receptor biology or the skin-safety
          concerns. It only helps answer whether the vial matches the label.
        </p>
        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6">
          <div className="flex flex-col gap-2">
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
          </div>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: vendor quality matters, but Melanotan II is not a peptide
          where quality control solves the whole problem. A clean vial of a
          higher-risk compound is still a higher-risk compound.
        </p>
      </section>

      {/* What isn't settled yet */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What isn&apos;t settled yet
        </h2>
        <ul className="mt-4 space-y-4">
          {[
            {
              q: "Does Melanotan II cause melanoma, or does it reveal pre-existing risk?",
              a: "This is not settled. Case reports exist, but causation is not proven.",
            },
            {
              q: "What is the long-term mole-change profile?",
              a: "We do not have large, long-term monitored datasets of repeated community-style use.",
            },
            {
              q: "Is appetite suppression medically meaningful?",
              a: "The pathway is real, but MT-II is not an approved weight-management drug and the non-selective effect profile makes this a rough tool for that goal.",
            },
            {
              q: "What are the cardiovascular effects with chronic use?",
              a: "Blood pressure effects and autonomic symptoms are part of the melanocortin receptor story, but long-term data is limited.",
            },
            {
              q: "Is non-selective melanocortin activation inherently harder to manage?",
              a: "My read is yes, conceptually. The more switches a peptide hits, the harder it is to isolate the effect you want from the effects you do not.",
            },
            {
              q: "What will the PCAC consultation conclude?",
              a: "The February 2027 FDA process is worth watching, especially given the safety history around MT-II.",
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
          My honest read: Melanotan II is one of the most genuinely complicated
          peptides on this site.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The science is real. The original idea was interesting. The
          melanocortin biology is legitimate. The tanning effect is documented. A
          more selective descendant of this research path eventually became an
          FDA-approved drug.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is the positive side, and it should not be ignored.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But the concern profile is also real.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Mole changes. New moles. Melanoma case reports. Priapism. Nausea.
          Blood pressure effects. Those are not imaginary worst-case scenarios
          invented to scare people. They are documented signals in the
          literature and in clinical discussion.
        </p>
        <p className="mt-4 font-medium text-navy">
          The honest position is this:
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          If the documented skin concerns were absent, Melanotan II would be an
          interesting research peptide with a non-selective mechanism and thin
          human evidence.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          With the documented skin concerns present, it sits in a different
          category from most peptides on this site.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That does not mean every user will develop a problem.
        </p>
        <p className="mt-4 font-medium text-navy">
          It means Melanotan II is the page where the concerns belong front and
          center, not as a footnote.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Interesting biology. Real tanning effect. Non-selective mechanism.
          Documented safety signals.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is the whole picture.
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
          is not a medical resource. Melanotan II is not FDA approved for any
          indication, and research-use products are commonly labeled &ldquo;for
          research purposes only / not for human consumption.&rdquo; Anyone
          considering peptides should talk with a qualified healthcare provider,
          especially anyone with a personal or family history of skin cancer,
          cardiovascular concerns, or medications that affect blood pressure. See
          our full{" "}
          <Link href="/disclaimer" className="underline hover:text-accent-dark">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
