import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AffiliateBox from "@/components/AffiliateBox";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "The GH Stack: CJC-1295 + Ipamorelin — What the Research Shows (2026)",
  description:
    "Deep-dive into the GH Stack: CJC-1295 without DAC + Ipamorelin. Two-switch GH-release logic, individual research, safety picture, community protocols, and why the combination has not been clinically proven.",
};

export default function GHStackPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">GH Stack</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        GH Stack
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        The GH Stack: CJC-1295 + Ipamorelin
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>
      <AuthorByline />

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        The GH Stack caught on because the idea is simple, but the biology
        behind it is actually pretty smart.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Your pituitary has more than one way to release growth hormone.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        <Link href="/peptides/cjc-1295" className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent">CJC-1295 without DAC</Link>{" "}
        presses one button.{" "}
        <Link href="/peptides/ipamorelin" className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent">Ipamorelin</Link>{" "}
        presses another. Press both at the same time, and you can create a
        stronger GH pulse than either one produces alone.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        And unlike some peptide combinations that feel like two popular names
        got stapled together, this one has a real pharmacology story behind it.
        The community did not invent the idea that GHRH and GHRP pathways work
        together. Researchers studying growth hormone secretion have known for a
        long time that those two pathways can be synergistic.
      </p>
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="text-sm leading-relaxed text-amber-900/80">
          <strong>The honest caveat is just as important:</strong> there are no
          published human clinical outcomes trials showing that this specific
          stack improves body composition, recovery, sleep, or anti-aging
          markers in healthy adults.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
          The GH pulse logic is real. The clinical outcome claims are not
          proven. Both things can be true.
        </p>
      </div>
      <p className="mt-4 leading-relaxed text-navy/70">
        Where I am stating a fact, I am citing it. Where I am sharing my read on
        the research, I am saying that out loud.
      </p>

      <AffiliateBox
        productName="CJC-1295 + Ipamorelin"
        productUrl="https://ascensionpeptides.com/product/fit-stack-cjc-1295-ipamorelin/ref/Biohackingunlocked/"
      />

      {/* What the GH Stack actually is */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the GH Stack actually is
        </h2>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              <Link href="/peptides/cjc-1295" className="text-accent-dark underline underline-offset-2 hover:text-accent">CJC-1295 without DAC</Link>{" "}
              (Mod GRF 1-29)
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Short-acting GHRH analog with a roughly 30-minute half-life.
              Produces a brief GH signal and clears quickly. This is the version
              the standard GH Stack is built around — not the long-acting DAC
              version.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              <Link href="/peptides/ipamorelin" className="text-accent-dark underline underline-offset-2 hover:text-accent">Ipamorelin</Link>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Selective growth hormone secretagogue working through the ghrelin
              receptor (GHS-R1a). Known for stimulating GH with less cortisol
              and prolactin spillover than older GHRPs.
            </p>
          </div>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          So the stack is not &ldquo;two peptides doing the exact same
          thing.&rdquo; It is two different receptor pathways aimed at the same
          output: a GH pulse.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: the GH Stack is one of the cleaner community protocols from
          a mechanism standpoint. It does not make the clinical claims proven,
          but the receptor logic is real.
        </p>
      </section>

      {/* Why two switches instead of one */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Why two switches instead of one
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Growth hormone release can be stimulated through more than one
          pathway.
        </p>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              The GHRH receptor pathway
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              The signal your hypothalamus naturally uses to tell the pituitary
              to release GH. CJC-1295 without DAC mimics that signal. Think of
              it as the body&apos;s classic GH-release instruction.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              The ghrelin receptor pathway
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Ghrelin is best known as a hunger hormone, but it also helps
              stimulate GH release. Ipamorelin mimics part of that signal
              selectively. Think of this as a second GH-release instruction from
              a different lane.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-semibold text-navy">The synergy</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            When both pathways are activated together, the GH pulse can be
            larger than either pathway produces alone.
          </p>
          <p className="mt-2 text-sm font-medium text-navy">
            One pathway tells the pituitary, &ldquo;release GH.&rdquo; The
            other pathway tells the pituitary, &ldquo;yes, release more
            GH.&rdquo;
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            This is not the same kind of stack as BPC-157 + TB-500. The
            Wolverine Stack is two different repair angles. The GH Stack is two
            switches on the same system. That is why it feels tighter
            mechanistically.
          </p>
        </div>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Why pulsatility matters
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          The body does not release GH in a flat line all day. It releases GH in
          pulses, especially during deep sleep. That is why the community
          usually prefers CJC-1295 without DAC for this stack. The short-acting
          version fits the pulse concept better — it comes in, helps trigger the
          signal, and then clears.
        </p>
      </section>

      {/* What the individual research shows */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the individual research shows
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The GH Stack is built from two separate research stories.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">CJC-1295</h3>
        <div className="mt-2 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Teichman et al. (2006)</strong>{" "}
            <em>JCEM</em> (PMID 16352683) studied CJC-1295 in healthy adults
            and found dose-dependent increases in GH and IGF-1.{" "}
            <strong className="text-navy">
              Ionescu and Frohman (2006)
            </strong>{" "}
            <em>JCEM</em> (PMID 17018654) found CJC-1295 elevated trough and
            mean GH secretion while preserving pulsatility.
          </p>
        </div>
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-5">
          <p className="text-sm font-semibold text-red-900/80">Safety event</p>
          <p className="mt-2 text-sm leading-relaxed text-red-900/70">
            A Phase II clinical trial of CJC-1295 in lipodystrophy was halted
            after a participant death. FDA has also flagged serious adverse
            events including increased heart rate and systemic vasodilatory
            reaction.
          </p>
        </div>

        <h3 className="mt-6 text-lg font-semibold text-navy">Ipamorelin</h3>
        <div className="mt-2 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Raun et al. (1998)</strong>{" "}
            <em>Eur J Endocrinol</em> (PMID 9849822) characterized Ipamorelin
            as a potent and selective GH secretagogue, with minimal cortisol and
            prolactin elevation.{" "}
            <strong className="text-navy">Beck et al. (2014)</strong>, a Phase 2
            trial in postoperative ileus, did not meet its primary endpoint.
          </p>
        </div>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          The combination
        </h3>
        <div className="mt-2 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-semibold text-amber-900/80">
            There are no published human clinical outcomes trials testing
            CJC-1295 without DAC plus Ipamorelin for body composition, recovery,
            sleep, or anti-aging in healthy adults.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
            The synergy concept is real at the pharmacodynamic level. But the
            specific community stack is not clinically proven as an outcomes
            protocol. That distinction is everything.
          </p>
        </div>
      </section>

      {/* Community protocol */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the community protocol looks like
        </h2>
        <p className="mt-2 text-sm italic text-navy/50">
          Community-reported protocols — not endorsements.
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "CJC-1295 without DAC: 100 mcg per dose",
            "Ipamorelin: 100 mcg per dose",
            "Route: subcutaneous injection",
            "Frequency: 1\u20133 times daily",
            "Timing: pre-bed dosing is the most common",
            "Cycle pattern: often 8\u201316 weeks on, followed by time off",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          The two peptides are often combined in the same injection. The pre-bed
          timing is not random — the body&apos;s largest natural GH pulse
          typically happens during the first part of deep sleep.
        </p>
        <p className="mt-4 text-sm italic text-navy/50">
          Community protocols only. Not validated medical dosing.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            <strong>Hard avoidance categories:</strong> active or recent cancer,
            uncontrolled diabetes, untreated or significant sleep apnea,
            pregnancy or breastfeeding, and anyone under 18 or not past skeletal
            maturity.
          </p>
        </div>
      </section>

      {/* The safety picture */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The safety picture</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This stack deserves a dedicated safety section because of the CJC-1295
          side. The GH Stack is not in the same risk category as a topical
          cosmetic peptide. This is endocrine signaling.
        </p>
        <div className="mt-4 space-y-4">
          {[
            {
              title: "CJC-1295-specific concerns",
              desc: "Phase II trial halted after a participant death. FDA has flagged serious adverse events including increased heart rate and systemic vasodilatory reaction.",
              style: "red" as const,
            },
            {
              title: "IGF-1 and cancer",
              desc: "IGF-1 elevation is epidemiologically associated with several cancer types. That does not prove this stack causes cancer, but the question cannot be dismissed with long-term use.",
              style: "amber" as const,
            },
            {
              title: "Glucose metabolism",
              desc: "Growth hormone signaling can affect insulin sensitivity. Relevant for anyone with diabetes risk, metabolic syndrome, or poor glucose control.",
              style: "amber" as const,
            },
            {
              title: "Outcome claims are unproven",
              desc: "Better body composition, improved recovery, better sleep, and anti-aging effects have not been proven in controlled trials for this combination.",
              style: "amber" as const,
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-lg border p-4 ${
                item.style === "red"
                  ? "border-red-200 bg-red-50"
                  : "border-amber-200 bg-amber-50"
              }`}
            >
              <p
                className={`text-sm font-semibold ${
                  item.style === "red"
                    ? "text-red-900/80"
                    : "text-amber-900/80"
                }`}
              >
                {item.title}
              </p>
              <p
                className={`mt-1 text-sm leading-relaxed ${
                  item.style === "red"
                    ? "text-red-900/70"
                    : "text-amber-900/80"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: Ipamorelin is the cleaner half of the stack. CJC-1295 is the
          part that makes the safety discussion heavier. That does not kill the
          stack concept. It just means the stack deserves more respect than
          casual &ldquo;anti-aging peptide&rdquo; marketing gives it.
        </p>
      </section>

      {/* Regulatory situation */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The regulatory situation (April 2026)
        </h2>
        <p className="mt-4 font-semibold text-navy">
          CJC-1295 and Ipamorelin are both not FDA approved.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Both have been part of FDA&apos;s compounding-review conversation,
          including PCAC discussions around the October and December 2024
          meetings.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-navy">WADA</h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          CJC-1295 is explicitly prohibited under S2.2.4 as a GHRH analog.
          Ipamorelin is also explicitly prohibited under S2.2.4 as a growth
          hormone secretagogue. For tested athletes, the GH Stack is not a gray
          area.
        </p>
      </section>

      {/* The purity problem */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The purity problem</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The purity problem is sharper with stacks. One compound means one
          quality-control chain. Two compounds means two.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            <strong>The CJC-1295 naming issue matters here.</strong> A vial
            labeled &ldquo;CJC-1295&rdquo; could be with DAC, without DAC,
            mislabeled, underdosed, or backed by a generic non-matching COA. If
            someone thinks they are using without DAC but actually has the
            with-DAC version, they are getting a much longer-acting GH signal
            than intended. That is not a minor labeling mistake — it changes the
            pharmacology of the protocol.
          </p>
        </div>
        <p className="mt-4 font-medium text-navy">
          For both peptides, the COA checklist:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Does the COA match the exact batch?",
            "Does mass spectrometry confirm identity?",
            "Is purity measured by HPLC?",
            "Is the testing from a real third-party lab?",
            "Are sterility and endotoxin addressed?",
            "Does the CJC-1295 COA specify with DAC or without DAC?",
            "Does the vendor avoid claims that contradict research-use-only labeling?",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6">
          <div className="flex flex-col gap-2">
            <Link href="/peptide-coa-explained" className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent">
              How to read a COA &rarr;
            </Link>
            <Link href="/best-peptide-sources" className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent">
              See our vetted peptide sources &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom line */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Bottom line</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          My honest read: the GH Stack is one of the most logical community
          protocols in the peptide world.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The two-switch idea is real pharmacology. CJC-1295 without DAC
          activates the GHRH receptor. Ipamorelin activates the ghrelin
          receptor. Both converge on GH release. Together, they can produce a
          stronger GH pulse than either pathway alone.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But the outcome gap is still real. Moving GH is pharmacodynamics.
          Proving better body composition, recovery, sleep, or anti-aging
          effects in healthy adults is clinical outcomes research. That has not
          been done for this specific stack.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The safety picture also deserves respect. The CJC-1295 Phase II trial
          event and FDA-flagged cardiovascular reactions put this stack in a more
          serious category than casual peptide marketing suggests.
        </p>
        <p className="mt-4 font-medium text-navy">
          Not hype. Not dismissal. A smart idea that still needs the kind of
          human outcome data it has not gotten yet.
        </p>
      </section>

      {/* Related Reading */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-navy">Related Reading</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/peptides/cjc-1295" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors">
            CJC-1295: What the Research Actually Shows
          </Link>
          <Link href="/peptides/ipamorelin" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors">
            Ipamorelin: What the Research Actually Shows
          </Link>
          <Link href="/best-peptide-sources" className="rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-medium text-accent-dark hover:bg-accent/20 transition-colors">
            Best Peptide Sources
          </Link>
        </div>
      </section>

      {/* AffiliateDisclosure */}
      <section className="mt-10">
        <AffiliateDisclosure />
      </section>

      {/* Disclaimer */}
      <section className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-5">
        <h2 className="text-sm font-bold text-navy">Disclaimer</h2>
        <p className="mt-2 text-xs leading-relaxed text-navy/60">
          This page is informational and not medical advice. Biohacking Unlocked
          is not a medical resource. CJC-1295 and Ipamorelin are not FDA
          approved for any indication, and research-use products are commonly
          labeled &ldquo;for research purposes only / not for human
          consumption.&rdquo; Anyone considering peptides should talk with a
          qualified healthcare provider. See our full{" "}
          <Link href="/disclaimer" className="underline hover:text-accent-dark">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
