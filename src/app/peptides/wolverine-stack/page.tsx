import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AffiliateBox from "@/components/AffiliateBox";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "The Wolverine Stack: BPC-157 + TB-500 — What the Research Shows (2026)",
  description:
    "Deep-dive into the Wolverine Stack: BPC-157 + TB-500 for tissue repair. The mechanistic logic, individual research, community protocols, purity risks, and why the combination has not been clinically tested.",
};

export default function WolverineStackPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">Wolverine Stack</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Recovery Stack
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        The Wolverine Stack: BPC-157 + TB-500
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>
      <AuthorByline />

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        The Wolverine Stack might be the most famous peptide combination in the
        biohacking world.
      </p>
      <p className="mt-4 font-medium text-navy">BPC-157 plus TB-500.</p>
      <p className="mt-4 leading-relaxed text-navy/70">
        If someone is researching peptides for soft-tissue repair, tendon
        problems, ligament issues, muscle injuries, or general recovery, this is
        the stack they usually run into first.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        And honestly, I understand why this stack caught on. The logic is not
        random.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        <Link href="/peptides/bpc-157" className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent">BPC-157</Link>{" "}
        and{" "}
        <Link href="/peptides/tb-500" className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent">TB-500</Link>{" "}
        are both discussed in tissue-repair contexts, but they are usually
        discussed as working from different angles. BPC-157 is often framed
        around angiogenesis, local repair signaling, and injury-site
        environment. TB-500 is usually framed around cell migration, actin
        regulation, and broader tissue remodeling.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        That is a coherent pairing on paper.
      </p>
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="text-sm font-semibold text-amber-900/80">
          But here is the important line:
        </p>
        <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
          There are no published controlled human trials testing BPC-157 and
          TB-500 together. The stack is a community-built hypothesis based on
          two separate research literatures.
        </p>
      </div>
      <p className="mt-4 leading-relaxed text-navy/70">
        That does not make it nonsense. It does mean the evidence has to be read
        correctly.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Where I am stating a fact, I am citing it. Where I am sharing my read on
        the research, I am saying that out loud.
      </p>

      <AffiliateBox
        productName="Wolverine Stack"
        productUrl="https://ascensionpeptides.com/product/wolverine-stack/ref/Biohackingunlocked/"
      />

      {/* What the Wolverine Stack actually is */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the Wolverine Stack actually is
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The Wolverine Stack is the community name for combining BPC-157 and
          TB-500.
        </p>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              <Link href="/peptides/bpc-157" className="text-accent-dark underline underline-offset-2 hover:text-accent">BPC-157</Link>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Body Protection Compound-157. A 15-amino-acid synthetic peptide
              derived from a protective protein sequence found in human gastric
              juice. Mostly discussed for tendon, ligament, gut, muscle, and
              general tissue-repair contexts.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              <Link href="/peptides/tb-500" className="text-accent-dark underline underline-offset-2 hover:text-accent">TB-500</Link>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              A synthetic peptide marketed as related to thymosin beta-4, a
              naturally occurring 43-amino-acid peptide involved in actin
              regulation, cell migration, and tissue repair. Important caveat:
              most deeper research is on full thymosin beta-4, not always the
              exact short TB-500 fragment sold by vendors.
            </p>
          </div>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          The stack is usually discussed for tendon injuries, ligament issues,
          muscle strains, post-surgical recovery, joint irritation, and general
          recovery support.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: as peptide stacks go, this one has one of the cleaner
          biological stories. It is not just &ldquo;throw two popular peptides
          together.&rdquo; There is a real hypothesis behind the pairing.
        </p>
      </section>

      {/* The mechanistic logic */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The mechanistic logic — why these two together
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          BPC-157 and TB-500 are not usually described as doing the exact same
          thing. They are described as helping different parts of the repair
          process. That is why the stack caught on.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          BPC-157&apos;s proposed role: infrastructure
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          BPC-157 is usually discussed around the local injury environment. In
          animal models, it has been studied for angiogenesis, tendon and
          ligament healing, gut repair, muscle injury recovery, nitric oxide
          modulation, and local tissue repair signaling.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Injury sites need blood supply. They need signaling. They need the
          local environment to support repair. That is why the tendon and
          ligament world took notice — tendons and ligaments are notoriously slow
          to heal because blood supply is not great.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          TB-500&apos;s proposed role: cellular response
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          TB-500 is usually discussed around cell movement and tissue
          remodeling. The thymosin beta-4 research world focuses heavily on
          actin regulation — part of the cellular skeleton that helps cells
          move, change shape, and respond to injury.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Repair is not just about signals existing in a tissue. Repair also
          requires the right cells to move into the right place and do the work.
        </p>

        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-semibold text-navy">
            Why the pairing makes sense
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            BPC-157 may help improve the infrastructure of repair. TB-500 may
            help support the cellular response.
          </p>
          <p className="mt-2 text-sm font-medium text-navy">
            One is the roadwork. The other is the crew moving through the site.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            The missing piece is controlled research testing the combination.
            The mechanism makes sense as a hypothesis. It is not yet proven as a
            human protocol.
          </p>
        </div>
      </section>

      {/* What the individual research shows */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the individual research shows
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          There is research on BPC-157 by itself. There is research on thymosin
          beta-4 and TB-500-related biology by itself. There is community
          reporting on the combination. Those are three different things.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">BPC-157</h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          BPC-157 has decades of animal research, especially in rodent models
          involving gut injury, tendon injury, ligament repair, muscle damage,
          and blood vessel formation. The human evidence is much thinner.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            A 2025 systematic review by Vasireddi et al. screened hundreds of
            articles and found the included evidence was overwhelmingly
            preclinical: 35 preclinical studies and one retrospective clinical
            study involving 12 patients.
          </p>
        </div>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          TB-500 / thymosin beta-4
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          TB-500 has a different evidence problem. The deeper research literature
          is mostly on full thymosin beta-4, not always the commercial TB-500
          fragment.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The animal wound-healing literature on thymosin beta-4 is genuinely
          interesting. Malinda et al. (1999) reported accelerated wound healing
          in a rat model. Treadwell et al. (2012) studied thymosin beta-4 in
          Phase 2 wound-healing trials — but that was full thymosin beta-4, not
          necessarily the same TB-500 fragment sold online.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          The combination
        </h3>
        <div className="mt-2 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-semibold text-amber-900/80">
            There are no published controlled human trials testing BPC-157 and
            TB-500 together.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
            There are also no strong published animal trials specifically
            validating the combination as a stack. The Wolverine Stack is
            community-built.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: the individual research gives the stack a reason to exist as
          a hypothesis. It does not prove the stack works as a protocol.
        </p>
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
            "BPC-157: 250\u2013500 mcg per day",
            "TB-500: 2\u20135 mg per week",
            "Route: usually subcutaneous injection",
            "TB-500 timing: often split into two weekly doses",
            "Duration: often 4\u20138 weeks as a \u201cloading\u201d phase",
            "Use case: active injury, tendon/ligament problems, muscle strains, post-surgical recovery",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm italic text-navy/50">
          No validated medical dosing standard exists for either compound, and
          definitely not for the combination.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: the community protocol is coherent enough to understand why
          it spread. But the research has not caught up with the protocol.
        </p>
      </section>

      {/* What the stack does not have */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the stack does not have
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This section is important because the name &ldquo;Wolverine
          Stack&rdquo; can make the combination sound more established than it
          is.
        </p>
        <div className="mt-4 space-y-4">
          {[
            {
              title: "No human combination trial data",
              desc: "Zero published controlled human trials testing BPC-157 plus TB-500 together. Every research claim comes from one compound alone or from community reports.",
            },
            {
              title: "Very thin BPC-157 human data",
              desc: "BPC-157 has a large animal-research footprint, but the Vasireddi 2025 systematic review shows how much of the evidence is still preclinical.",
            },
            {
              title: "TB-500 identity confusion",
              desc: "Full thymosin beta-4 and commercial TB-500 fragments are not automatically interchangeable. The strongest human data belongs to the thymosin beta-4 side.",
            },
            {
              title: "No proof that stacking fixes the evidence gaps",
              desc: "If BPC-157 alone has limited human evidence, and TB-500 has identity and evidence questions, combining them does not automatically solve those problems. Stacking can create a better hypothesis. It does not create clinical proof.",
            },
            {
              title: "Both compounds are WADA prohibited",
              desc: "BPC-157 is prohibited under S0 as a non-approved substance. TB-500 falls under S2 where thymosin-beta-4 derivatives are prohibited. For tested athletes, the Wolverine Stack is not a gray area.",
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
      </section>

      {/* Regulatory situation */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The regulatory situation (April 2026)
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Both peptides in the Wolverine Stack are in active regulatory
          territory.
        </p>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">BPC-157</p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Not FDA approved. Removed from Category 2 effective April 22,
              2026 after nominator withdrawal. Scheduled for PCAC consultation
              on July 23, 2026. WADA prohibited under S0.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">TB-500</p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Not FDA approved. Also removed from Category 2 effective April 22,
              2026. Also scheduled for PCAC consultation on July 23, 2026. WADA
              prohibits thymosin-beta-4 and its derivatives under S2.
            </p>
          </div>
        </div>
        <p className="mt-4 font-medium text-navy">
          That shared July 23, 2026 date is worth watching.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          For the Wolverine Stack, both compounds are moving through the same
          FDA advisory window at the same time. Whatever happens there will
          shape the next version of the regulatory story.
        </p>
      </section>

      {/* The purity problem — doubled */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The purity problem — doubled
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The purity problem is bigger with stacks. With one peptide, you have
          one vial, one COA, one batch number, one identity question, one
          sterility question, and one vendor-quality question.
        </p>
        <p className="mt-4 font-medium text-navy">
          With the Wolverine Stack, you have two.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That means two opportunities for mislabeling, underdosing,
          contamination, fake COAs, old COAs, batch mismatches, identity
          problems, and vendor inconsistency.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          And TB-500 adds an extra issue: identity. A vial labeled
          &ldquo;TB-500&rdquo; may not always map cleanly onto the thymosin
          beta-4 research literature. Running TB-500 with BPC-157 does not fix
          that problem. It stacks on top of it.
        </p>
        <p className="mt-4 font-medium text-navy">
          For both peptides, the COA checklist:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Does the COA match the exact batch?",
            "Does mass spectrometry confirm identity?",
            "Is purity measured by HPLC?",
            "Is the testing from a real third-party lab?",
            "Are sterility and endotoxin addressed for injectable products?",
            "Is the vendor using clean research-use-only language?",
            "Does the TB-500 COA identify the actual fragment or sequence?",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          A COA is not decoration. It is the receipt. And with a stack, you need
          two receipts.
        </p>
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
          My honest read: the Wolverine Stack is one of the more compelling
          community-built peptide ideas.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The name is dramatic, but the underlying logic is not silly. BPC-157
          and TB-500 are both discussed in tissue-repair contexts, and they are
          usually discussed from different mechanistic angles. BPC-157 is the
          local repair-environment peptide. TB-500 is the cell-migration and
          tissue-remodeling peptide.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That pairing makes sense as a hypothesis. And I get why people are
          excited about it.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But the evidence line has to stay clean. The individual compounds have
          interesting research behind them, especially in animal models and
          thymosin-beta-4 wound-healing literature. The combination itself has
          not been tested in controlled human trials.
        </p>
        <p className="mt-4 font-medium text-navy">
          That means the Wolverine Stack is a hypothesis, not a proven protocol.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is not a negative take. It is the honest take.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The stack is coherent. The biology is interesting. The community
          enthusiasm makes sense. The regulatory story is active. The
          quality-control burden is doubled. And the human combination evidence
          is not there yet.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But combining two early-stage peptides does not magically turn them
          into settled medicine. It turns them into a bigger hypothesis.
        </p>
        <p className="mt-4 font-medium text-navy">
          And this is one of the peptide hypotheses I would most like to see
          properly studied.
        </p>
      </section>

      {/* Related Reading */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-navy">Related Reading</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/peptides/bpc-157" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors">
            BPC-157: What the Research Actually Shows
          </Link>
          <Link href="/peptides/tb-500" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors">
            TB-500: What the Research Actually Shows
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
          is not a medical resource. BPC-157 and TB-500 are not FDA approved for
          any indication, and research-use products are commonly labeled
          &ldquo;for research purposes only / not for human
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
