import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AffiliateBox from "@/components/AffiliateBox";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Retatrutide: What the Research Actually Shows (2026)",
  description:
    "Deep-dive into retatrutide research: the triple agonist GLP-1/GIP/glucagon story, Jastreboff Phase 2 data, 24% weight loss signal, regulatory status, and gray-market risks as of April 2026.",
};

export default function RetatrutidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">Retatrutide</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Metabolic
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        Retatrutide: What the Research Actually Shows
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>
      <AuthorByline />

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        Retatrutide is the peptide people start searching for after they learn
        the names Ozempic, Wegovy, Mounjaro, and Zepbound.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        That is not surprising.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Semaglutide changed the public conversation around weight loss.
        Tirzepatide pushed that conversation even further. Then retatrutide
        showed up with Phase 2 data that made a lot of people stop scrolling.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        The headline number is hard to ignore: in a Phase 2 obesity trial, the
        highest retatrutide dose group showed about{" "}
        <strong className="text-navy">
          24% mean body-weight reduction at 48 weeks
        </strong>
        . That is a major signal in this drug class.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        So yes, I understand why people are paying attention.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Retatrutide is one of the most exciting investigational peptides in
        metabolic medicine right now. The science is not vague. This is not
        &ldquo;interesting in mice.&rdquo; This is human clinical trial data
        from a major pharmaceutical company.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        But the next sentence matters just as much:
      </p>
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="text-sm font-semibold text-amber-900/80">
          Retatrutide is not FDA approved.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
          It is investigational. It is being studied by Eli Lilly. Phase 3
          trials are ongoing. There is no currently approved retatrutide product
          you can get from a doctor with a normal prescription today.
        </p>
      </div>
      <p className="mt-4 leading-relaxed text-navy/70">
        That combination is the whole story: very impressive Phase 2 data, no
        approval yet, and a gray-market world already trying to sell it as if
        the future has arrived early.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Where I am stating a fact, I am citing it. Where I am sharing my read on
        the research, I am saying that out loud.
      </p>

      <AffiliateBox
        productName="Retatrutide"
        productUrl="https://ascensionpeptides.com/product/r-10/ref/Biohackingunlocked/"
      />

      {/* What Retatrutide actually is */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What Retatrutide actually is
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Retatrutide is an investigational drug being developed by Eli Lilly,
          the same company behind tirzepatide, sold as Mounjaro for type 2
          diabetes and Zepbound for chronic weight management.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          In the clinical literature, retatrutide is also called LY3437943.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The reason retatrutide is getting so much attention is that it is a{" "}
          <strong className="text-navy">triple agonist</strong>.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That means it activates three hormone receptors:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "GLP-1 receptor",
            "GIP receptor",
            "Glucagon receptor",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is what separates it from the two drugs most people already know.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3">Drug</th>
                <th className="px-4 py-3">Receptors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-navy/70">Semaglutide</td>
                <td className="px-4 py-3 text-navy/70">GLP-1</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-navy/70">Tirzepatide</td>
                <td className="px-4 py-3 text-navy/70">GIP + GLP-1</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-accent-dark">
                  Retatrutide
                </td>
                <td className="px-4 py-3 font-medium text-accent-dark">
                  GIP + GLP-1 + Glucagon
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          That third piece — the glucagon receptor — is the new part.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Glucagon is usually known as the hormone that raises blood sugar. If
          you have only heard about glucagon in a diabetes context, adding
          glucagon activity to a weight-loss drug can sound backwards at first.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But in this design, glucagon receptor activation is not being used
          casually. The theory is that glucagon activity may add a metabolic
          component: increased energy expenditure, increased fat oxidation, and
          effects on liver fat.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Semaglutide mostly changed the &ldquo;eat less&rdquo; side of the
          equation. Tirzepatide added a second incretin pathway. Retatrutide is
          trying to go one step further by combining appetite biology with a
          stronger metabolic push.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: this is why retatrutide has everyone&apos;s attention. It is
          not just another GLP-1 copycat. It is the next experiment in how far
          incretin-based medicine can go.
        </p>
      </section>

      {/* How it's supposed to work */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How it&apos;s supposed to work
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Retatrutide works through three overlapping pathways.
        </p>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">GLP-1 receptor</p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              This is the pathway most people recognize from semaglutide. GLP-1
              receptor activation increases satiety, slows gastric emptying,
              stimulates glucose-dependent insulin release, reduces glucagon
              release in the fed state, and acts on appetite and reward pathways
              in the brain. In plain English: feel full sooner, eat less,
              regulate blood sugar better.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">GIP receptor</p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              This is one of the two pathways involved in tirzepatide. GIP is an
              incretin hormone — gut-derived hormones that help regulate insulin
              and metabolism after eating. GIP receptor agonism appears to work
              with GLP-1 signaling in a way that can improve metabolic effects
              and may help explain why tirzepatide has produced stronger
              weight-loss outcomes than semaglutide in many comparisons. This is
              still an active research area, but the practical point is simple:
              adding GIP to GLP-1 seems to matter.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              Glucagon receptor
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              This is the new piece. Glucagon receptor activation can increase
              energy expenditure and promote fat oxidation. It also has
              liver-related metabolic effects, which is why retatrutide is being
              watched not just for body weight, but for broader metabolic
              outcomes including liver fat.
            </p>
          </div>
        </div>
        <p className="mt-4 font-medium text-navy">
          The plain-English version:
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Semaglutide helps people eat less. Tirzepatide helps people eat less
          and adds another incretin signal. Retatrutide tries to do all three:
          eat less, improve metabolic signaling, and potentially burn more.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is the promise. The clinical trial question is whether that
          promise holds up in Phase 3 and whether the safety profile stays
          acceptable when the study population gets much larger.
        </p>
      </section>

      {/* Phase 2 research */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the Phase 2 research shows
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This is the strongest part of the retatrutide story.
        </p>
        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            The key study is{" "}
            <strong className="text-navy">Jastreboff et al. (2023)</strong> in
            the <em>New England Journal of Medicine</em> (389:514). This was a
            Phase 2 trial of retatrutide in adults with obesity. The trial
            showed substantial dose-dependent weight loss over 48 weeks.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            The headline result: the 12mg dose group showed mean body-weight
            reduction of approximately{" "}
            <strong className="text-navy">24% at 48 weeks</strong>.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          That number is striking.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          For context, semaglutide&apos;s STEP 1 trial produced about 15% mean
          weight loss at 68 weeks (Wilding et al. 2021, <em>NEJM</em>, PMID
          33667417). Tirzepatide&apos;s SURMOUNT-1 program pushed the field
          further (Jastreboff et al. 2022, <em>NEJM</em> 387:205).
          Retatrutide&apos;s Phase 2 result is in the same conversation — and
          potentially beyond it — but the comparison needs to be made carefully.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            Retatrutide&apos;s 24% number is from Phase 2, from the highest dose
            group, at 48 weeks. That is not the same as saying every retatrutide
            user lost 24%. It is not the same as saying the drug is approved. It
            is not the same as saying Phase 3 will automatically reproduce the
            same result.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
            But it is a very strong signal.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          Phase 2 trials are designed to explore dose response, early safety,
          and whether the drug has enough signal to justify larger trials. They
          are not the final approval-standard evidence package. That is what
          Phase 3 is for.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The side-effect profile in the Phase 2 trial looked broadly consistent
          with the incretin class: nausea, vomiting, diarrhea, and other
          gastrointestinal effects were among the most common, especially during
          dose escalation. Anyone familiar with semaglutide or tirzepatide has
          heard this story before. No unique safety signal appeared in Phase 2
          that obviously stopped development. But Phase 2 is not powered to
          catch rare events the way larger Phase 3 programs and post-market
          monitoring can.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: the Phase 2 data is genuinely exciting. This is not hype
          built on a petri dish or a forum thread. It is real human trial data.
          But the correct emotional reaction is not &ldquo;case closed.&rdquo;
          It is &ldquo;this is one of the most important metabolic peptide
          trials to keep watching.&rdquo;
        </p>
      </section>

      {/* What isn't known yet */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What isn&apos;t known yet
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Retatrutide has more clinical evidence than most peptides on this
          site, but there are still major open questions.
        </p>
        <ul className="mt-4 space-y-4">
          {[
            {
              q: "Phase 3 efficacy is not published yet.",
              a: "This is the biggest one. Phase 2 data can be impressive and still change when larger trials are run.",
            },
            {
              q: "Long-term safety is not established.",
              a: "Retatrutide is acting on three receptor systems. That is exciting, but it also means the long-term safety picture needs large datasets.",
            },
            {
              q: "Cardiovascular outcomes are not finished.",
              a: "Semaglutide has major cardiovascular outcomes data from the SELECT trial. Retatrutide does not yet have a completed large MACE outcomes trial.",
            },
            {
              q: "The glucagon component still needs real-world proof.",
              a: "The glucagon receptor piece is what makes retatrutide different. Whether it adds meaningful benefit over tirzepatide in the real world \u2014 not just in theory \u2014 is still being tested.",
            },
            {
              q: "The class warnings still apply.",
              a: "GLP-1 class concerns include gastrointestinal effects, pancreatitis risk, gallbladder disease, gastroparesis concerns, and thyroid C-cell tumor findings in rodent studies where human relevance remains uncertain.",
            },
            {
              q: "The rebound question still applies.",
              a: "With semaglutide and tirzepatide, stopping treatment often leads to weight regain. Retatrutide will need the same question answered.",
            },
            {
              q: "The best dose is not settled for real-world use.",
              a: "The Phase 2 trial explored multiple doses. The highest dose produced the biggest weight-loss number, but the approved dose \u2014 if approval happens \u2014 will depend on the Phase 3 balance of efficacy, tolerability, and safety.",
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

      {/* Regulatory situation */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The regulatory situation (April 2026)
        </h2>
        <p className="mt-4 font-semibold text-navy">
          Retatrutide is not FDA approved.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is the clean sentence.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          It is investigational. Eli Lilly is running Phase 3 trials. As of
          April 2026, there is no publicly confirmed FDA approval timeline and
          no approved retatrutide product available by prescription.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That makes retatrutide categorically different from semaglutide and
          tirzepatide.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Semaglutide is FDA approved. Tirzepatide is FDA approved. Retatrutide
          is not.
        </p>
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-5">
          <p className="text-sm font-semibold text-red-900/80">
            Active FDA enforcement
          </p>
          <p className="mt-2 text-sm leading-relaxed text-red-900/70">
            FDA has directly warned that products containing semaglutide,
            tirzepatide, or retatrutide have been illegally sold as unapproved
            drugs while falsely labeled &ldquo;for research purposes&rdquo; or
            &ldquo;not for human consumption,&rdquo; including products sold
            directly to consumers with dosing instructions. Reuters also
            reported FDA warning letters to online vendors selling unapproved
            GLP-1 drugs, including websites selling retatrutide.
          </p>
        </div>

        <h3 className="mt-6 text-lg font-semibold text-navy">WADA</h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Retatrutide is not currently named on the 2026 WADA Prohibited List,
          which went into effect January 1, 2026. But athletes should not treat
          that as a permanent green light. GLP-1-class drugs have drawn
          sports-world attention because of appetite suppression, weight loss,
          and body-composition effects. The regulatory conversation around this
          drug class is still moving.
        </p>
      </section>

      {/* The gray-market problem */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The gray-market problem
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This section matters more for retatrutide than it does for most
          peptides.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Gray-market retatrutide is already being sold online, often under
          &ldquo;research use only&rdquo; language. Some vendors may provide
          COAs. Some may have professional-looking testing infrastructure. That
          does not make this the same as buying an approved medication from a
          pharmacy.
        </p>
        <p className="mt-4 font-medium text-navy">
          There are four separate problems:
        </p>
        <div className="mt-4 space-y-4">
          {[
            {
              title: "1. Active FDA enforcement",
              desc: "FDA has already warned companies selling unapproved GLP-1 products, including retatrutide, where \"research use only\" labeling is used while products are marketed in ways that direct human use. That is different from a peptide where enforcement attention is theoretical or old.",
            },
            {
              title: "2. Eli Lilly\u2019s active drug development",
              desc: "Retatrutide is an active investigational asset. Eli Lilly is still developing it. That creates a different legal and commercial environment than older research peptides with no active pharmaceutical sponsor.",
            },
            {
              title: "3. Quality verification is harder",
              desc: "Retatrutide is a newer, more complex molecule than many of the peptides sold in the gray market. A COA may look reassuring, but the quality of the lab, the specificity of the identity testing, and the match between the COA and the actual vial matter enormously.",
            },
            {
              title: "4. Dose and titration are not casual details",
              desc: "In clinical trials, retatrutide dosing is carefully structured and monitored. Dose escalation matters because gastrointestinal side effects are common in this class. Gray-market use does not come with trial monitoring, adverse-event capture, prescriber oversight, or pharmaceutical-grade supply-chain control.",
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
        <p className="mt-4 leading-relaxed text-navy/70">
          For readers interested in vendor COA verification, Ascension Peptides
          lists R-10 and R-30 retatrutide products with Freedom Diagnostics
          COAs. That is a vendor-quality data point, not a medical
          recommendation and not a statement that gray-market retatrutide
          carries the same status as an approved drug.
        </p>
      </section>

      {/* Bottom line */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Bottom line</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          My honest read: retatrutide is one of the most exciting metabolic
          peptides in development right now.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The Phase 2 data is genuinely impressive. Mean body-weight reduction
          around 24% at 48 weeks in the 12mg group is the kind of result that
          deserves attention. If that signal holds up in Phase 3 — and that is
          the test — retatrutide could represent a meaningful next step beyond
          the current approved GLP-1/GIP era.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          This is not supplement-style hype. This is real clinical trial data
          from a serious drug-development program.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But &ldquo;promising Phase 2 data&rdquo; and &ldquo;FDA
          approved&rdquo; are completely different sentences.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Retatrutide is still investigational. Phase 3 results are not
          published yet. Rare safety signals can appear later. The
          approval-standard evidence package is not complete.
        </p>
        <p className="mt-4 font-medium text-navy">
          Fascinating science. Real human data. Big Phase 2 weight-loss signal.
          Not approved. Active FDA enforcement against gray-market sellers.
          Phase 3 still pending.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is why retatrutide is worth watching closely — and why it should
          not be treated like the future has already been cleared for takeoff.
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
          is not a medical resource. Retatrutide is investigational and is not
          FDA approved for any indication as of April 2026. Research-use
          products sold online may be unapproved, misbranded, or of unknown
          quality. Anyone considering weight-loss medications or peptides should
          talk with a qualified healthcare provider. See our full{" "}
          <Link href="/disclaimer" className="underline hover:text-accent-dark">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
