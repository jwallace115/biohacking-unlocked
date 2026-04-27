import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AffiliateBox from "@/components/AffiliateBox";

export const metadata: Metadata = {
  title: "Semax: What the Research Actually Shows (2026)",
  description:
    "Deep-dive into Semax research: the ACTH-fragment origin, BDNF and neuroprotection, Russian stroke-recovery data, Selank + Semax stack, regulatory status, and July 2026 PCAC review.",
};

export default function SemaxPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">Semax</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Nootropic
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        Semax: What the Research Actually Shows
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        Semax starts from an unexpected place.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        It comes from a fragment of ACTH — adrenocorticotropic hormone — one of
        the body&apos;s stress-axis hormones. ACTH is the signal the pituitary
        uses to tell the adrenal glands to release cortisol.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        That sounds like an odd starting point for a nootropic peptide.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        But that is what makes Semax interesting.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Researchers took a short fragment of ACTH, separated it from the
        cortisol-triggering part of the hormone, and studied it for almost the
        opposite kind of purpose: not activating the stress response, but
        potentially protecting the brain from its consequences.
      </p>
      <p className="mt-4 font-medium text-navy">
        That is a real pharmacological pivot. From stress-hormone fragment to
        possible neuroprotective peptide.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Semax was developed in the Russian peptide research tradition, at the
        same institute that developed{" "}
        <Link
          href="/peptides/selank"
          className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
        >
          Selank
        </Link>
        . It is used clinically in Russia, especially in stroke recovery and
        cognitive-disorder contexts. That is not nothing. Stroke recovery is a
        much harder clinical anchor than vague &ldquo;brain optimization.&rdquo;
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        But the same evidence caveat applies here as with Selank: Russian
        clinical use is real, and Russian approval is meaningful, but it is not
        the same as FDA review. The studies are mostly Russian-language, the
        research groups are regionally concentrated, and large independent
        Western replication is limited.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Semax has a fascinating origin story, a real medical-use history in
        Russia, and a plausible neuroprotective mechanism. It also has a Western
        validation gap.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Where I am stating a fact, I am citing it. Where I am sharing my read on
        the research, I am saying that out loud.
      </p>

      <AffiliateBox
        productName="Semax"
        productUrl="https://ascensionpeptides.com/product/semax-10mg/?ref=Biohackingunlocked"
        size="10mg"
      />

      {/* What Semax actually is */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What Semax actually is
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Semax is a synthetic seven-amino-acid peptide.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Its sequence is usually listed as:
        </p>
        <p className="mt-2 font-mono text-sm text-navy/80 bg-gray-50 rounded-lg px-4 py-2 inline-block">
          Met-Glu-His-Phe-Pro-Gly-Pro
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Semax is derived from a fragment of ACTH, the hormone involved in the
          hypothalamic-pituitary-adrenal stress response system.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Most sources describe Semax as being based on ACTH(4-7). Some sources
          describe the parent fragment more broadly as ACTH(4-10). The core
          point is the same: Semax comes from a short central fragment of ACTH,
          not from the full hormone.
        </p>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            That distinction matters because full ACTH stimulates cortisol
            release through the adrenal glands.{" "}
            <strong className="text-navy">
              Semax was designed to preserve neuroactive properties of the ACTH
              fragment without triggering the full adrenal/cortisol pathway.
            </strong>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            That is the clever part.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          Semax was developed at the Institute of Molecular Genetics of the
          Russian Academy of Sciences, the same research ecosystem behind
          Selank. It has been studied since the 1980s and is used clinically in
          Russia for neurologic and cognitive indications, especially ischemic
          stroke recovery and cognitive disorders.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          This gives Semax a very different feel from a lot of internet
          nootropic compounds. It is not just a molecule that got popular
          because someone on a forum liked it. It came from a specific research
          program, with a specific clinical direction: brain protection,
          neurologic recovery, and cognitive function.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: the ACTH origin story makes Semax one of the more interesting
          nootropic peptides. Taking a stress-hormone fragment and steering it
          toward neuroprotection is a sharper story than &ldquo;may support
          focus.&rdquo; There is real design logic here.
        </p>
      </section>

      {/* How it's supposed to work */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How it&apos;s supposed to work
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Semax&apos;s mechanism is not perfectly settled, but the research
          points toward several overlapping brain-related pathways.
        </p>
        <div className="mt-4 space-y-4">
          {[
            {
              title: "BDNF modulation",
              desc: "Brain-derived neurotrophic factor. Involved in neuron survival, synaptic plasticity, learning, memory, mood, and stress resilience. Semax has been studied for effects on BDNF expression in animal and mechanistic models. BDNF is not a buzzword \u2014 it is one of those molecules where, if a peptide reliably affects it in the right direction, the research is worth understanding.",
            },
            {
              title: "NGF modulation",
              desc: "Nerve growth factor. Involved in neuron survival and repair, especially relevant to cholinergic neurons tied to memory, attention, and cognitive function. Some Semax research suggests NGF-related effects, fitting the broader neurotrophin-modulation story.",
            },
            {
              title: "Neuroprotective effects",
              desc: "The most medically grounded part of the Semax story. Studied in stroke and ischemic injury models, where the goal is protecting brain tissue under stress \u2014 not \"better focus for work.\" Proposed effects involve reduced excitotoxicity, oxidative stress, inflammation, and injury-related signaling.",
            },
            {
              title: "Dopamine, serotonin, and cholinergic effects",
              desc: "Some animal and mechanistic research suggests Semax may influence dopamine, serotonin, and cholinergic systems. Those systems matter for motivation, mood, attention, and memory. This helps explain why the community talks about Semax as a focus and drive peptide.",
            },
            {
              title: "Possible melanocortin pathway involvement",
              desc: "Because Semax comes from an ACTH fragment, researchers have also looked at possible melanocortin receptor interactions. This is part of what gives Semax such a unique profile compared with other nootropic peptides.",
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
          Semax appears to interact with brain repair and signaling pathways —
          especially neurotrophins like BDNF and NGF — while also being studied
          for protection in stroke and ischemic injury models. Whether that
          translates into meaningful cognitive enhancement in healthy,
          non-injured adults is the open question.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: the neuroprotection angle is the serious one. The nootropic
          angle is interesting, but it is the extrapolation layer.
        </p>
      </section>

      {/* What the research shows */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the research shows
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The strongest Semax research story comes from Russian neurologic and
          stroke-related work. That is important.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Semax is not mainly built on &ldquo;healthy people felt more
          focused&rdquo; anecdotes. Its clinical anchor is stroke recovery and
          neurologic support in Russia.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Animal research
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Animal studies have reported neuroprotective effects in rodent stroke
          and ischemic injury models, including reduced injury markers and
          improved recovery-related outcomes. Some experimental work has also
          looked at cognitive-task performance, BDNF/NGF-related effects, and
          neurodegenerative-disease models.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Human research
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          The human side is more regionally concentrated.
        </p>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            Russian clinical studies have reported Semax use in ischemic stroke
            recovery and cognitive disorders. Researchers often associated with
            this work include{" "}
            <strong className="text-navy">Gusev EI and Skvortsova VI</strong> in
            Russian stroke research, and{" "}
            <strong className="text-navy">Kaplan AYa</strong> and colleagues in
            EEG and cognitive studies.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            Some reports describe a stroke-recovery trial involving approximately
            200 patients. That is meaningful compared with many peptide pages on
            this site.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            Mechanism-focused work includes{" "}
            <strong className="text-navy">Medvedeva EV et al. (2014)</strong>,
            and more recent review work such as &ldquo;The Potential of the
            Peptide Drug Semax&rdquo; (PMID 41479572).
          </p>
        </div>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            <strong>The calibration:</strong> the studies are largely Russian,
            methodological transparency can be variable by Western standards, and
            the work has not been independently replicated in large U.S. or
            Western European trials. That does not make it worthless. It means we
            should not treat it as equivalent to a Western Phase 3 program.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          Semax has more clinical grounding than most nootropic peptides because
          it has been used in a real medical context for stroke and cognitive
          disorders in Russia.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But most people searching Semax online are not recovering from ischemic
          stroke in a Russian clinical setting. They are interested in focus,
          motivation, mental energy, and cognitive performance.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is where the extrapolation happens. Stroke recovery evidence does
          not automatically prove healthy-brain enhancement.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: Semax has a stronger clinical anchor than most focus peptides.
          But the evidence is still split between legitimate regional medical use
          and a community nootropic use case that has not been validated to the
          same standard.
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
          In the community, Semax is mostly discussed for:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Focus and mental drive",
            "Mental energy and motivation",
            "Recovery from brain fog",
            "Cognitive performance",
            "Neuroprotection",
            "Mood support",
            "Stroke recovery, in the Russian clinical context",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          The most common community route is intranasal.
        </p>
        <p className="mt-4 font-medium text-navy">
          Community-reported protocols:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Intranasal: 250\u2013600 mcg per dose, 1\u20133 times daily",
            "Usually taken earlier in the day \u2014 some users report stimulation that makes evening use less desirable",
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
            From the Semax side, the logic is simple: Semax is the
            cognitive-drive peptide,{" "}
            <Link
              href="/peptides/selank"
              className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
            >
              Selank
            </Link>{" "}
            handles the anxiety and calm side. Together the goal is &ldquo;calm
            focus.&rdquo; Two peptides from the same research tradition, often
            used intranasally, discussed for complementary effects.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            But the combination research is not there. There are no strong human
            studies showing the Selank + Semax stack outperforms either compound
            alone.
          </p>
        </div>
      </section>

      {/* Regulatory situation */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The regulatory situation (April 2026)
        </h2>
        <ul className="mt-4 space-y-4">
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              In Russia, Semax is approved and used clinically.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Primarily for stroke recovery and cognitive disorders. That is a
              real regional medical history. It matters.
            </p>
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              Semax is not FDA approved in the United States.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Russian approval is not FDA approval. The clinical standards,
              regulatory process, manufacturing oversight, and post-market
              systems are different.
            </p>
          </li>
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          As of April 2026, Semax was removed from FDA&apos;s Category 2 list
          after nominator withdrawal — docket FDA-2025-N-6895. Category 2
          removal is not a finding of safety or efficacy.
        </p>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">
              FDA&apos;s Pharmacy Compounding Advisory Committee consultation for
              Semax acetate and Semax free base is scheduled for July 24, 2026.
            </strong>{" "}
            Whatever FDA does in that process will be the next meaningful U.S.
            regulatory signal for Semax. That is worth watching.
          </p>
        </div>

        <h3 className="mt-6 text-lg font-semibold text-navy">WADA</h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          WADA is not currently listing Semax by name on the 2026 Prohibited
          List. But tested athletes should still be cautious — Semax is a
          pharmacologically active CNS peptide, not approved in many
          jurisdictions, and non-approved substances with pharmacological
          activity can raise S0 concerns.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          In the United States, Semax is generally sold as a research chemical.
          Legal to sell and possess, but &ldquo;research use only&rdquo; is a
          legal framing, not a safety guarantee.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: the July 2026 PCAC date makes Semax one of the more
          interesting regulatory watches on the site. This is not just an old
          Russian nootropic sitting in the background. It is actively coming up
          in the U.S. compounding conversation.
        </p>
      </section>

      {/* The purity problem */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The purity problem</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The standard gray-market peptide concerns apply to Semax.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            <strong>Intranasal quality matters:</strong> People sometimes treat
            nasal peptides as if the quality bar is lower because they are not
            injected. That is not the right way to look at it. A nasal peptide
            still enters the body. Concentration still matters. Purity still
            matters. Contamination still matters.
          </p>
        </div>
        <p className="mt-4 font-medium text-navy">
          For Semax, the practical COA questions are:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Does the COA match the exact batch?",
            "Does mass spectrometry confirm identity?",
            "Is purity measured by HPLC?",
            "Is the testing from a real third-party lab?",
            "Is concentration clearly labeled?",
            "Is the product actually Semax and not Selank or another peptide?",
            "Are contamination controls addressed?",
            "Is the vendor avoiding inappropriate medical claims?",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          A COA is not decoration. It is the receipt. And for Semax, the receipt
          matters because concentration errors directly affect the experience —
          and identity errors mean the entire research discussion no longer
          applies.
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
      </section>

      {/* What isn't settled yet */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What isn&apos;t settled yet
        </h2>
        <ul className="mt-4 space-y-4">
          {[
            {
              q: "Does Semax improve cognition in healthy, non-injured adults?",
              a: "The stroke evidence does not automatically answer this. That extrapolation needs its own research.",
            },
            {
              q: "Are the Russian stroke findings replicable in Western trials?",
              a: "Stroke recovery is a serious endpoint that deserves rigorous independent replication.",
            },
            {
              q: "What are the long-term effects of BDNF and NGF modulation?",
              a: "Neurotrophin pathways are exciting. Chronic modulation over years is a different question.",
            },
            {
              q: "Does Semax have meaningful HPA-axis interactions with repeated use?",
              a: "Because Semax comes from an ACTH fragment, it is fair to ask whether repeated use has any stress-axis effects, even though it was designed not to trigger the adrenal cortisol pathway.",
            },
            {
              q: "Does the Selank + Semax stack outperform either compound alone?",
              a: "The pairing makes sense. Combination data is not established.",
            },
            {
              q: "What happens at the July 2026 PCAC consultation?",
              a: "That will be the next meaningful U.S. regulatory signal.",
            },
            {
              q: "How much of the nootropic reputation is extrapolated from stroke and injury contexts?",
              a: "This is not a criticism. It is the key evidence question.",
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
          My honest read: Semax has one of the better origin stories in the
          peptide nootropic world.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          It starts with ACTH, a stress-hormone signal. Researchers isolated a
          fragment, moved away from the cortisol-triggering pathway, and studied
          it for brain protection, neurotrophin modulation, and neurologic
          recovery.
        </p>
        <p className="mt-4 font-medium text-navy">
          That is a specific research path. Not just &ldquo;take this for
          focus.&rdquo;
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The Russian stroke and cognitive-disorder use gives Semax more clinical
          weight than most nootropic peptides. Stroke recovery is not a soft
          endpoint. A compound used in that context deserves more respect than a
          random focus supplement.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But the extrapolation line is real. &ldquo;Used in Russia for stroke
          recovery and cognitive disorders&rdquo; is not the same as
          &ldquo;proven to make healthy adults sharper.&rdquo; That is where the
          community enthusiasm runs ahead of the evidence.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Still, I get the interest.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The BDNF and NGF story is compelling. The ACTH-fragment origin is
          fascinating. The intranasal use history is different from the usual
          peptide-vial conversation. And the July 2026 PCAC review gives Semax a
          real U.S. regulatory moment to watch.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Semax is a serious regional neuropeptide with a strong origin story, a
          real Russian clinical-use history, and a plausible cognitive and
          neuroprotective mechanism.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          It is not FDA approved. It is not proven healthy-brain enhancement.
          But it is absolutely one of the more interesting peptides in the
          nootropic category.
        </p>
      </section>

      {/* Related Reading */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-navy">Related Reading</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/peptides/selank"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Selank: What the Research Actually Shows
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
          is not a medical resource. Semax is not FDA approved in the United
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
