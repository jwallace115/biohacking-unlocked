import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AffiliateBox from "@/components/AffiliateBox";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Selank: What the Research Actually Shows (2026)",
  description:
    "Deep-dive into Selank research: the Russian nootropic tradition, tuftsin origins, anxiety and GABA biology, Selank + Semax stack, regulatory status, and Western evidence gap as of April 2026.",
};

export default function SelankPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">Selank</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Nootropic
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        Selank: What the Research Actually Shows
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>
      <AuthorByline />

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        Selank sits in a different category from most peptides on this site.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        It is not an FDA-approved drug. It is not a mainstream Western anxiety
        medication. And it is not backed by the kind of large, multi-center
        trials that would make U.S. clinicians immediately comfortable with it.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        But it is also not just a random internet peptide.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Selank is approved and used clinically in Russia for anxiety and
        stress-related conditions. That matters. It means real clinical use,
        real prescribing history, and a real research tradition behind it.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        That is the interesting middle ground.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Most peptides in the biohacking world live in a gray zone of animal
        studies, mechanisms, and community reports. Selank has more than that.
        It comes from the Russian peptide and nootropic research tradition, and
        it has been used medically in that system.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        But Russian approval is not FDA approval. The study standards are
        different. The papers are mostly Russian-language. The trials are
        generally small. Independent Western replication is limited.
      </p>
      <p className="mt-4 font-medium text-navy">
        That tension is the whole page.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Selank deserves to be taken more seriously than &ldquo;forum nootropic
        peptide.&rdquo; It also should not be treated like an FDA-reviewed
        anxiety medication.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Where I am stating a fact, I am citing it. Where I am sharing my read on
        the research, I am saying that out loud.
      </p>

      <AffiliateBox
        productName="Selank"
        productUrl="https://ascensionpeptides.com/product/selank-10mg/?ref=Biohackingunlocked"
        size="10mg"
      />

      {/* What Selank actually is */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What Selank actually is
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Selank is a synthetic peptide made from seven amino acids.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Its sequence is usually listed as:
        </p>
        <p className="mt-2 font-mono text-sm text-navy/80 bg-gray-50 rounded-lg px-4 py-2 inline-block">
          Thr-Lys-Pro-Arg-Pro-Gly-Pro
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Selank was developed at the Institute of Molecular Genetics of the
          Russian Academy of Sciences. It has been studied since the 1990s and
          is commonly described as a stable synthetic analog of tuftsin.
        </p>

        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-semibold text-navy">
            The tuftsin connection
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            Tuftsin is a naturally occurring tetrapeptide involved in immune
            function. It has been studied for immunomodulatory effects and also
            appears to have some behavioral and neurological relevance. Selank
            was designed as a more stable version of that peptide framework, with
            added anxiolytic — meaning anxiety-reducing — properties.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            That is a real pharmacological design story. This was not just
            &ldquo;let&apos;s throw amino acids together and see what Reddit
            likes.&rdquo;
          </p>
        </div>

        <p className="mt-4 leading-relaxed text-navy/70">
          Researchers started with a natural peptide signal, modified the
          concept, and studied it for anxiety, stress, immune modulation, and
          cognitive effects.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: the origin story is one of the better reasons to be
          interested in Selank. It sits at the intersection of immune signaling,
          stress biology, and nootropic research. That is a fascinating lane.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The caveat is that almost all of this research comes from Russian
          research groups. That does not make it fake. But it does mean we need
          to calibrate how much confidence we put on the claims.
        </p>
      </section>

      {/* How it's supposed to work */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How it&apos;s supposed to work
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Selank&apos;s mechanism is not fully mapped. That is important to say
          up front.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Some peptides have a clean receptor story. Selank is not that clean.
          The research suggests several overlapping pathways.
        </p>
        <div className="mt-4 space-y-4">
          {[
            {
              title: "GABA signaling",
              desc: "Selank is often discussed as having anxiolytic effects that may involve GABA-related pathways. GABA is the brain's main inhibitory neurotransmitter, and many anxiety medications work partly by influencing GABA signaling.",
            },
            {
              title: "BDNF modulation",
              desc: "Selank has been studied for effects on brain-derived neurotrophic factor, or BDNF. BDNF is involved in neuroplasticity, mood regulation, learning, and stress response.",
            },
            {
              title: "Enkephalin system effects",
              desc: "Enkephalins are endogenous opioid peptides involved in pain, stress response, and mood. Selank has been studied for possible effects on this system.",
            },
            {
              title: "Serotonin and dopamine modulation",
              desc: "Some research suggests Selank may influence monoamine systems involved in mood, motivation, and cognition.",
            },
            {
              title: "Immunomodulatory effects",
              desc: "This lines up with Selank's tuftsin heritage. The immune and nervous systems talk to each other more than people realize, especially in stress biology.",
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
        <p className="mt-4 font-medium text-navy">The plain-English version:</p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Selank appears to work on several anxiety and stress-response pathways
          at the same time. The proposed result is calm without heavy sedation.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Not &ldquo;knock you out.&rdquo; Not &ldquo;benzodiazepine-style
          sedation.&rdquo; More like: reduce anxiety and stress reactivity while
          keeping clarity.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is why it became interesting in nootropic circles. But the
          mechanism should not be oversold. The research does not establish one
          clean pathway that explains everything. It suggests a cluster of
          effects that may work together.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: Selank is interesting because it does not look like a
          blunt-force anxiety tool. The idea of anxiety reduction without
          dullness is a good one. The question is whether the human evidence is
          strong enough by Western standards to support the size of the claims
          made around it.
        </p>
      </section>

      {/* What the research shows */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the research shows
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The most important thing to understand about Selank research is the
          research tradition.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            <strong>Almost all of the published work comes from Russian
            research groups.</strong> That is the central evidence caveat. It is
            not a reason to dismiss Selank. Regional research traditions can
            produce real science. But it does mean the evidence does not look
            like a typical FDA-style package. The studies are usually smaller.
            Many are published in Russian-language journals. Independent
            replication outside Russia is limited.
          </p>
        </div>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Animal and mechanistic research
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Animal research suggests anxiolytic effects in rodent models, sometimes
          compared with benzodiazepine-like effects but without the same sedation
          profile. That is a meaningful signal. Benzodiazepines can reduce
          anxiety, but sedation, dependence, tolerance, and cognitive slowing are
          major issues.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Human research
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Human research exists, but it is not large by Western standards.
        </p>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            One of the commonly cited clinical studies is{" "}
            <strong className="text-navy">Medvedev et al. (2014)</strong>, which
            reported anxiolytic and antiasthenic effects in patients with
            generalized anxiety disorder and neurasthenia. Other contributors
            include Kozlovskaya MM and colleagues (foundational pharmacology) and
            Zozulia AA et al. (pharmacological characterization). Research
            indexed under PMID 14552529 documents optimizing action of the
            peptide in human subjects.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          The human evidence is not zero. That matters. Selank is not purely a
          mouse-study peptide. It has regional clinical use and human research
          behind it.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But the human evidence is also not strong enough to treat Selank like
          an FDA-reviewed anxiolytic. The studies are generally small, regionally
          concentrated, and not independently replicated in the kind of large
          Western trials that would settle the question.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: Selank belongs in the &ldquo;promising but differently
          validated&rdquo; category. There is enough here to make it interesting.
          There is not enough here to pretend the evidence standard is the same
          as an FDA-approved anxiety medication.
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
          Selank is mostly discussed for:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Anxiety reduction",
            "Stress resilience",
            "Calm focus",
            "Mood support",
            "Social anxiety",
            "Cognitive clarity",
            "Helping reduce overstimulation from other nootropics",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          The most common route discussed is intranasal. That lines up with how
          Selank is commonly used clinically in Russia.
        </p>

        <p className="mt-4 font-medium text-navy">
          Community-reported protocols:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Intranasal: 250\u2013500 mcg per dose, 2\u20133 times daily",
            "Subcutaneous: 100\u2013300 mcg per dose",
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

        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-semibold text-navy">
            The Selank + Semax Stack
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            Sometimes described as the &ldquo;Russian nootropic stack.&rdquo;
            The logic: Selank for calm and anxiety reduction,{" "}
            <Link
              href="/peptides/semax"
              className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
            >
              Semax
            </Link>{" "}
            for cognitive drive and focus. Together, the goal is &ldquo;calm
            focus.&rdquo;
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            As community stacks go, that one is at least coherent. But the
            combination research is not there. There are no strong human studies
            showing that the Selank + Semax stack produces superior outcomes
            compared with either peptide alone.
          </p>
        </div>
      </section>

      {/* Regulatory situation */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The regulatory situation (April 2026)
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Selank&apos;s regulatory story needs careful wording.
        </p>
        <ul className="mt-4 space-y-4">
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              In Russia, Selank is approved and used clinically.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              That is real. It means Selank has a legitimate regional medical
              history. It has been prescribed to patients. It has been studied
              and used within a national medical system.
            </p>
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              Selank is not FDA approved in the United States.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Russian approval is not a substitute for FDA approval. The
              regulatory process, clinical trial requirements, manufacturing
              oversight, and post-market surveillance systems are different.
            </p>
          </li>
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          As of April 2026, Selank was removed from FDA&apos;s Category 2 list
          after nominator withdrawal — docket FDA-2025-N-6895. That removal does
          not mean FDA approved Selank. Category 2 removal is not a safety
          finding, not an efficacy finding, and not a green light for broad
          human use.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">WADA</h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Selank is not currently named on the 2026 WADA Prohibited List as a
          listed compound. But athletes should still be cautious — it is a
          pharmacologically active CNS peptide that is not approved as a medicine
          in many jurisdictions. Non-approved substances with pharmacological
          activity can create S0 issues for tested athletes.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          In the United States, Selank is generally sold as a research chemical.
          Legal to sell and possess, but &ldquo;research use only&rdquo; is a
          legal framing, not a safety guarantee.
        </p>
      </section>

      {/* The purity problem */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The purity problem</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The standard gray-market peptide concerns apply to Selank.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            <strong>Route-specific issue:</strong> Selank is most commonly
            discussed as an intranasal peptide. People often think injectable
            products are the only ones where quality matters. That is not true.
            For intranasal products, identity, purity, concentration,
            contamination, and formulation still matter.
          </p>
        </div>
        <p className="mt-4 font-medium text-navy">
          For Selank, the COA questions are:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Does the COA match the exact batch?",
            "Does mass spectrometry confirm identity?",
            "Is purity measured by HPLC?",
            "Is the testing from a real third-party lab?",
            "Is concentration clearly labeled?",
            "Is the product appropriate for the route being sold or discussed?",
            "Are sterility and contamination controls addressed?",
            "Is the vendor making medical claims that contradict research-use labeling?",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          A COA is not decoration. It is the receipt. And with intranasal
          peptides, the receipt still matters.
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
          My read: Selank is a good example of why &ldquo;not injectable&rdquo;
          does not mean &ldquo;quality does not matter.&rdquo; Nasal products
          still go into the body. The standard should still be serious.
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
              q: "Does Selank produce meaningful anxiolytic effects in controlled Western trials?",
              a: "That is the big one. The Russian clinical experience is real, but Western replication is limited.",
            },
            {
              q: "How does Selank compare to established anxiety medications?",
              a: "There is not enough high-quality head-to-head research to place it confidently against SSRIs, benzodiazepines, buspirone, or other established options.",
            },
            {
              q: "What is the long-term safety profile?",
              a: "Regional use gives some comfort, but large long-term datasets by Western standards are limited.",
            },
            {
              q: "Are the Russian clinical findings replicable?",
              a: "This is not a criticism. It is the normal scientific question when a compound is studied mostly in one research system.",
            },
            {
              q: "What are the chronic effects on BDNF, GABA, enkephalin, serotonin, and dopamine systems?",
              a: "The mechanism story is interesting, but not fully mapped.",
            },
            {
              q: "Does the Selank + Semax stack actually outperform either peptide alone?",
              a: "The community logic is coherent. Human combination data is not established.",
            },
            {
              q: "What does the U.S. regulatory path look like after Category 2 removal?",
              a: "That remains an open question.",
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
          My honest read: Selank is more interesting than a typical gray-market
          nootropic peptide.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          It has real clinical use in Russia. It has a legitimate research origin
          at the Institute of Molecular Genetics. It was designed from the
          tuftsin framework, not randomly invented for internet biohackers. The
          anxiety and stress-resilience angle is biologically plausible, and the
          community reputation around &ldquo;calm without dullness&rdquo; lines
          up with the intended pharmacological idea.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is worth respecting.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But the Western evidence gap is real too.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Russian approval is meaningful. It is not FDA approval. Regional
          clinical use is a positive signal. It is not the same as large,
          independently replicated Western trials.
        </p>
        <p className="mt-4 font-medium text-navy">
          That puts Selank in one of the more interesting middle categories on
          this site: better credentialed than most research peptides, not
          validated to Western drug standards, promising enough to take
          seriously, not settled enough to overstate.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The Selank +{" "}
          <Link
            href="/peptides/semax"
            className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
          >
            Semax
          </Link>{" "}
          stack is also one of the more coherent community pairings in the
          peptide world. Calm plus focus makes sense. Two peptides from the same
          research tradition makes sense. But the combination still needs actual
          human research.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Selank is not random internet dust.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          It is also not an FDA-approved anxiety medication.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          It is a promising regional peptide with a real story, a positive
          clinical-use signal outside the U.S., and a lot of room for better
          Western validation.
        </p>
      </section>

      {/* Related Reading */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-navy">Related Reading</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/peptides/semax"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Semax: What the Research Actually Shows
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
          is not a medical resource. Selank is not FDA approved in the United
          States, and research-use products are commonly labeled &ldquo;for
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
