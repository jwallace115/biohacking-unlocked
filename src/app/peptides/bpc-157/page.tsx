import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import COABadge from "@/components/COABadge";
import AffiliateBox from "@/components/AffiliateBox";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "BPC-157: What the Research Actually Shows (2026)",
  description:
    "Deep-dive into BPC-157 research: 30+ years of animal data, early human trials, the VEGFR2 mechanism, regulatory updates as of April 2026, purity risks, and practical guidance.",
};

export default function BPC157Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">BPC-157</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Recovery
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        BPC-157: What the Research Actually Shows
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>
      <AuthorByline />

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        BPC-157 is one of the more interesting peptides I have come across.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        It has 30+ years of animal research behind it. It appears to do things
        most peptides do not — including building new blood vessels into injured
        tissue, which is one of the holy grails of recovery science. It is the
        headline ingredient in the famous &ldquo;Wolverine stack&rdquo; with{" "}
        <Link
          href="/peptides/tb-500"
          className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
        >
          TB-500
        </Link>
        , and it is the peptide most often credited online with healing the kind
        of nagging tendon and ligament injuries that physical therapy could not
        fix.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        So I started digging into the research, and here is what I found: the
        BPC-157 story is genuinely fascinating. The biology is unusual. The
        mechanism makes sense to me. The animal data is hard to ignore. And the
        human research is just getting started — which is exactly the window
        where I find a peptide most worth paying attention to.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        This page is not a recommendation and not medical advice. It is my
        working summary of what the research actually shows, what people are
        using it for, what regulators are saying as of April 2026, and where the
        picture is still being painted. Where I am stating a fact, I am citing
        it. Where I am sharing my read on the research, I am saying that out
        loud.
      </p>

      <AffiliateBox
        productName="BPC-157"
        productUrl="https://ascensionpeptides.com/product/bpc-157-10mg/?ref=Biohackingunlocked"
        size="10mg"
      />

      {/* What BPC-157 actually is */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What BPC-157 actually is
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          BPC-157 stands for Body Protection Compound-157. You may also see it
          called Pentadecapeptide BPC-157, PL 14736, Bepecin, or PL-10.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The &ldquo;pentadecapeptide&rdquo; part just means it is made of 15
          amino acids. Its sequence is GEPPPGKPADDAGLV. That level of detail is
          more than most beginners need, but it explains why researchers and
          vendors talk about it as a defined synthetic peptide rather than a
          vague supplement ingredient. This is a real, characterized molecule
          with a known structure.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          BPC-157 is synthetic, but it was derived from a partial sequence of a
          protective protein found in human gastric juice. That is where the
          story starts, and honestly, it is part of what makes it interesting.
          Researchers in the early 1990s noticed that part of this gastric
          protein seemed to help stomach ulcers heal faster. They isolated the
          active fragment, synthesized it, and called it BPC-157. Sikiric and
          colleagues at the University of Zagreb led most of the early work and
          have stayed central to the research ever since.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          One unusual property: BPC-157 appears to be stable in stomach acid.
          Most peptides do not survive the digestive system — they get broken
          down like food. BPC-157&apos;s acid stability is one of those quirks
          that opens up real questions about delivery, including whether oral
          capsules can produce the systemic effects people claim. The research
          has not fully resolved that question yet, but the gastric stability
          gives the oral idea more biological plausibility than it would have for
          almost any other peptide.
        </p>
      </section>

      {/* How it's supposed to work */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How it&apos;s supposed to work
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The most-cited proposed mechanism is the VEGFR2-Akt-eNOS pathway. That
          is a mouthful, but the simple version is this: VEGFR2 is involved in
          blood vessel growth, Akt is part of a cell-signaling pathway, and eNOS
          helps regulate nitric oxide and vascular function. In animal studies,
          BPC-157 appears to interact with this pathway in ways that support new
          blood vessel formation directly into injured tissue.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is a big deal for tissue repair, and it is the part of the
          BPC-157 story that I find most compelling. Tendons, ligaments, and some
          gut tissues heal slowly because they have poor blood supply. If a
          peptide can route new blood vessels into the injury site —
          angiogenesis, in the technical term — it gives the body more healing
          resources at the right place. That is the core of why BPC-157 has its
          &ldquo;healing peptide&rdquo; reputation, and the mechanism is
          consistent enough across animal models that I can see why the community
          took notice.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          BPC-157 has also been studied for nitric oxide modulation, and this
          part is genuinely interesting because the effect is described as
          bidirectional: raising nitric oxide activity where it is deficient and
          lowering it where it is excessive. That is unusual. Most compounds push
          a system in one direction. A regulatory effect that adjusts in either
          direction is closer to how the body&apos;s own homeostasis works, which
          is the kind of biology that makes me lean in rather than tune out.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Other proposed mechanisms include increased growth hormone receptor
          expression in tendon fibroblasts, fibroblast activation, collagen
          synthesis, cell migration, and broader coordination of wound-healing
          pathways. The mechanism story is rich. It is also still primarily
          animal-derived. The exact human mechanism has not been worked out yet,
          but the biology characterized in animal models is the foundation the
          current human research is being built on.
        </p>
      </section>

      {/* 30 years of animal research */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What 30 years of animal research shows
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This is where the BPC-157 case is at its strongest.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          There are hundreds of preclinical papers across more than 30 years. A
          2025 systematic review by Vasireddi et al. screened roughly 544
          articles, and after quality filtering included about 36 studies — 35
          preclinical and one retrospective clinical study (a small knee-pain
          retrospective covered in the next section).
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The strongest animal-research areas include gastric ulcer healing,
          inflammatory bowel disease models, tendon and ligament repair, muscle
          injury models, ischemia/reperfusion models, nerve regeneration models,
          and NSAID-related gut barrier damage. That is a wide range of tissue
          and injury contexts, which is part of what makes BPC-157 stand out —
          most compounds work in a narrower lane.
        </p>
        <p className="mt-4 font-medium text-navy">
          A few specific studies that built the reputation:
        </p>
        <ul className="mt-4 space-y-3">
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Chang et al. (2011)</strong> found
            accelerated tendon-to-bone healing in transected Achilles tendon
            models in rats — the kind of injury that does not heal well even with
            good rehab.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Gjurasin et al. (2010)</strong>{" "}
            reported nerve regeneration effects in transection models, which is
            mechanistically harder than soft-tissue repair.
          </li>
        </ul>
        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            <strong>One nuance worth knowing:</strong> a large share of the
            BPC-157 literature traces back to one research group — Prof. Predrag
            Sikiric and colleagues at the University of Zagreb. That is not a
            problem in itself. Sikiric&apos;s group has done foundational work,
            and it is normal for one lab to drive a research program for decades.
            But independent replication is the gold standard in science, and
            BPC-157&apos;s independent replication has lagged behind its volume
            of in-house research. That is part of why I think the
            human-research phase happening now is the most interesting chapter to
            watch — it is where outside groups start putting the foundational
            claims to the test.
          </p>
        </div>
      </section>

      {/* Human research reality */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The human research reality
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The cumulative total across published BPC-157 human trials is currently
          fewer than 60 participants. That sounds tiny, and it is — but I think
          the framing matters. The relevant comparison is not &ldquo;BPC-157 vs
          ibuprofen&rdquo; — ibuprofen has been studied for decades in millions
          of people. The relevant question is &ldquo;where is BPC-157 in the
          research arc.&rdquo; It is early. The animal foundation is unusually
          deep for an early-stage compound. The human studies are small but are
          starting to accumulate.
        </p>
        <p className="mt-4 font-medium text-navy">
          Here is what has been published:
        </p>
        <ul className="mt-4 space-y-3">
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Lee and Burgess (2025)</strong> — IV
            safety pilot in <em>Alternative Therapies in Health and Medicine</em>
            , two participants, both women. No biomarker changes, no adverse
            effects. A small but clean safety signal for IV administration.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Lee et al. (2024)</strong> — pilot
            study in interstitial cystitis. Small sample, preliminary.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">NCT02637284 (~2015)</strong> — a Phase
            I trial planned for approximately 42 healthy volunteers for safety
            and pharmacokinetics. The trial appears to have been withdrawn from
            ClinicalTrials.gov, and full results were never published. A 2025
            review reportedly described the compound as safe and well-tolerated,
            but the unpublished status of that specific trial limits what can be
            drawn from it.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            A small retrospective in chronic knee pain — approximately 12–16
            patients, with subjective improvement reported in some participants.
          </li>
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is the dataset. No large efficacy trial has been completed yet,
          and the published evidence is mostly safety-focused and exploratory. My
          honest read: this is roughly where I would expect a peptide of this
          stage to be — animal-rich, human-thin, but with the human work moving
          in the right direction. The early human safety signals are encouraging
          given the sample sizes. The marketing claims are running ahead of the
          human data, which is normal in this space and worth being clear-eyed
          about.
        </p>
      </section>

      {/* Community uses */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the community uses it for
        </h2>
        <p className="mt-2 text-sm italic text-navy/50">
          Community-reported uses — not endorsements
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The community-reported use cases are pretty consistent across forums,
          peptide groups, and biohacking discussions. The most common is tendon
          and ligament injury recovery — the nagging Achilles, elbow, shoulder,
          knee, or soft-tissue issue that has not responded to physical therapy.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Other reported uses include sports injuries, post-surgical recovery,
          gut issues (IBS, IBD, &ldquo;leaky gut&rdquo;), NSAID-related gut
          irritation, joint pain, and chronic pain.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The most-discussed community protocol clusters around 250–500 mcg per
          day, usually subcutaneous, either near the injury site or in the
          abdomen. Cycles of 4–12 weeks on, followed by about 4 weeks off, are
          common in online discussions.
        </p>
        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-semibold text-navy">
            The &ldquo;Wolverine Stack&rdquo;
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            Community shorthand for combining BPC-157 with{" "}
            <Link
              href="/peptides/tb-500"
              className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
            >
              TB-500
            </Link>{" "}
            for general healing or recovery. The combination is mechanistically
            complementary in animal models (BPC-157 emphasizing angiogenesis,
            TB-500 emphasizing cell migration), and it is one of the most-used
            peptide stacks in biohacking circles. There is no validated human
            research on the combination specifically, but the mechanistic logic
            of pairing them is reasonable enough that I can see why it caught on.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          Other reported delivery methods include intramuscular injection, oral
          capsules, topical creams, and nasal sprays. Oral capsules are popular
          because of BPC-157&apos;s acid stability. Topical creams are common for
          skin and localized issues. Nasal sprays appear in some communities for
          systemic delivery.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          One thing to keep in mind: no validated medical dosing standard exists
          for BPC-157. Every protocol you see online is community-built —
          extrapolated from animal studies and individual experiences, not derived
          from human clinical trials.
        </p>
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
        <p className="mt-4 leading-relaxed text-navy/70">
          The big update:{" "}
          <strong className="text-navy">
            BPC-157 was removed from the FDA Category 2 list effective April 22,
            2026
          </strong>
          , under FDA docket FDA-2025-N-6895. Marketing has predictably gone wild
          with this. Some sites are framing it as if FDA approved BPC-157 or gave
          it a green light.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            <strong>It did not.</strong> The removal happened because the
            original nominators withdrew their nominations. Removal from Category
            2 is not approval. It does not turn research-use products into
            FDA-approved medicine. What it does is move BPC-157 toward the next
            decision point — a Pharmacy Compounding Advisory Committee
            consultation scheduled for{" "}
            <strong>July 23, 2026</strong>, which is expected to evaluate BPC-157
            acetate and BPC-157 free base for possible inclusion on the 503A
            bulks list, including consideration of an ulcerative colitis
            indication.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          That July 2026 consultation is the inflection point I would watch most
          closely. Inclusion on the 503A bulks list would mean BPC-157 could be
          legally compounded by licensed pharmacies for specific indications. That
          would be a meaningful regulatory shift — not the same as FDA-approved
          drug status, but a formal pathway that does not currently exist. If
          that consultation opens a clearer pathway, BPC-157 stops being just a
          research-chemical peptide and becomes a peptide with a real regulatory
          lane. That is a story worth tracking.
        </p>
        <p className="mt-4 font-medium text-navy">A few other regulatory notes:</p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-3 text-sm text-navy/70">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong className="text-navy">WADA</strong> has specifically named
              BPC-157 on the Prohibited List under S0 (non-approved substances)
              since the 2022 list. It is banned at all times in WADA-tested
              sport. USADA has explained that BPC-157 was added because it is
              clinically unapproved and sold as an experimental peptide.
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm text-navy/70">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              In the <strong className="text-navy">United States</strong>,
              BPC-157 is commonly sold under &ldquo;for research purposes only /
              not for human consumption&rdquo; labeling. It is not a controlled
              substance, and possession is not treated like possession of a
              scheduled drug.
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm text-navy/70">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong className="text-navy">FDA</strong> has flagged BPC-157
              specifically for peptide impurities, API characterization concerns,
              and lack of adequate human exposure data — concerns that connect
              directly to the purity question covered next.
            </span>
          </li>
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          Bottom line: BPC-157 is in the most active regulatory window of its
          existence. The July 2026 PCAC consultation will probably move things in
          a clearer direction, and that is the date I have circled on the
          calendar.
        </p>
      </section>

      {/* The purity problem */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The purity problem</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This is the part most peptide content skips, and it is the part that
          matters most practically: even if BPC-157 worked exactly the way the
          animal research suggests, you still have to actually get BPC-157 in the
          vial.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Research-grade peptides are not pharmaceutical products. They are not
          manufactured, inspected, or regulated like FDA-approved drugs. Quality
          control depends entirely on the vendor.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Independent testing in the peptide gray market has repeatedly found
          problems: vials labeled BPC-157 containing the wrong peptide, no
          peptide, wildly variable purity, endotoxin contamination, or incorrect
          compounds entirely. That is not a hypothetical risk — it is what the
          testing data shows for the bottom of the market.
        </p>
        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6">
          <p className="leading-relaxed text-navy/70">
            The good news is that the protection is straightforward: a
            third-party Certificate of Analysis tied to the exact batch you are
            buying, from a real lab, with identity and purity testing that can be
            checked.{" "}
            <Link
              href="/peptide-coa-explained"
              className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
            >
              Learn how to read a COA &rarr;
            </Link>
          </p>
          <p className="mt-4 leading-relaxed text-navy/70">
            In my read, this is the single most important practical question for
            any peptide — more important than which specific peptide you are
            looking at. A great peptide from a bad vendor is worse than a good
            vendor&apos;s mediocre product. That is also why the vendor question
            deserves its own deep work.{" "}
            <Link
              href="/best-peptide-sources"
              className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
            >
              See our vetted peptide sources &rarr;
            </Link>
          </p>
          <p className="mt-4 leading-relaxed text-navy/70">
            For anyone going deeper into the gray-market warning signs — fake
            COAs, recycled certificate numbers, missing verification keys — that
            has become its own rabbit hole.{" "}
            <Link
              href="/how-to-identify-fake-peptides"
              className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
            >
              How to identify fake peptides &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* What isn't settled yet */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What isn&apos;t settled yet
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          A few honest open questions worth knowing about, and my read on each:
        </p>
        <ul className="mt-4 space-y-4">
          {[
            {
              q: "Whether the animal effects translate to humans at the same magnitude.",
              a: "Rat tendon healing is the foundation. Human tendon recovery is the next chapter. The early human work is encouraging on safety, and I am genuinely curious to see what the next few years of human studies show.",
            },
            {
              q: "Long-term human safety.",
              a: "The published human studies are short. There is no multi-year follow-up data yet. That is normal for an early-stage research peptide.",
            },
            {
              q: "Effective human dosing.",
              a: "The 250\u2013500 mcg range is community consensus, not medical validation. Eventually this gets pinned down through proper trials.",
            },
            {
              q: "Whether oral BPC-157 produces the systemic effects claimed.",
              a: "Acid stability is real and unusual. Bioavailability and clinical effect through the oral route are less established.",
            },
            {
              q: "Cancer-related considerations.",
              a: "VEGF-mediated angiogenesis is part of why BPC-157 is interesting for tissue repair, but VEGF pathways are also part of how tumors recruit blood supply. There is no human cancer-risk data showing harm or showing safety. It is a reasonable topic to raise with a doctor for anyone with active or recent cancer.",
            },
            {
              q: "Reproductive safety, immunogenicity, drug interactions.",
              a: "Standard gaps for any compound at this research stage.",
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
        <p className="mt-4 leading-relaxed text-navy/70">
          These are not deal-breakers. They are the open questions human research
          is going to fill in over the next several years. I would expect the
          picture to look meaningfully different by 2028.
        </p>
      </section>

      {/* Bottom line */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Bottom line</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          BPC-157 has interesting biology, decades of animal research behind it,
          a small but growing human research base, and a regulatory situation
          that is actively moving as of April 2026. All four of those things are
          true at once, and put together, they make BPC-157 one of the more
          interesting peptides in this category.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The animal evidence is unusually strong for an early-stage compound.
          The mechanisms — angiogenesis, bidirectional nitric oxide modulation,
          fibroblast activation — are the kind of biology that explains why so
          many people in injury-recovery communities have gravitated toward it.
          The human evidence is early but is accumulating. The regulatory
          situation is in a window of active reconsideration that will probably
          resolve into something clearer after the July 2026 PCAC consultation.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My honest read: if July 2026 opens a clearer pathway, this could
          become one of the more important peptides to watch over the next few
          years. The animal data is hard to ignore. The mechanisms make sense.
          The human research is early, but I do not think early automatically
          means worthless — early means early. There is a real difference between
          &ldquo;this peptide is overhyped marketing nonsense&rdquo; and
          &ldquo;this peptide has real biology and is in the early innings of
          human research.&rdquo; BPC-157 is in the second category, and that is
          genuinely interesting.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          For anyone considering BPC-157, the practical questions worth thinking
          through:
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-3 text-sm text-navy/70">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
            Has it been studied in humans for the use case I am thinking about?
            (Partially — and the picture is filling in.)
          </li>
          <li className="flex items-start gap-3 text-sm text-navy/70">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
            <span>
              Where is the product actually coming from? That is the COA and
              vendor question, and in my read, it is the most important practical
              question for any peptide.{" "}
              <Link
                href="/peptide-coa-explained"
                className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
              >
                COA guide
              </Link>
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm text-navy/70">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
            Are there any personal medical reasons this is not a fit for me? That
            is a doctor conversation. Always is, with anything like this.
          </li>
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          The biology is interesting. The research is active. The human picture
          is thin but moving. Adults reading this can take that information and
          make their own call.
        </p>
      </section>

      {/* Related Reading */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-navy">Related Reading</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/bpc-157-vs-tb-500"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            BPC-157 vs TB-500
          </Link>
          <Link
            href="/peptides/tb-500"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            TB-500 Guide
          </Link>
          <Link
            href="/peptides/wolverine-stack"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            The Wolverine Stack: BPC-157 + TB-500
          </Link>
          <Link
            href="/peptides-for-recovery"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Peptides for Recovery
          </Link>
          <Link
            href="/best-peptide-sources"
            className="rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-medium text-accent-dark hover:bg-accent/20 transition-colors"
          >
            Best Peptide Sources
          </Link>
        </div>
      </section>

      {/* Where to Buy */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Where to Buy BPC-157</h2>
        <div className="mt-4">
          <AffiliateDisclosure />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <COABadge />
          <span className="text-sm text-navy/70">
            We only recommend COA-verified vendors.
          </span>
        </div>
        <Link
          href="/best-peptide-sources"
          className="mt-4 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Find Trusted Peptide Sources
        </Link>
      </section>

      {/* Disclaimer */}
      <section className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-5">
        <h2 className="text-sm font-bold text-navy">Disclaimer</h2>
        <p className="mt-2 text-xs leading-relaxed text-navy/60">
          This page is informational and not medical advice. Biohacking Unlocked
          is not a medical resource. BPC-157 is not approved by the FDA for any
          indication, and anything sold as BPC-157 in the US is commonly labeled
          &ldquo;for research purposes only / not for human consumption.&rdquo;
          Anyone considering peptides should talk with a qualified healthcare
          provider. See our full{" "}
          <Link href="/disclaimer" className="underline hover:text-accent-dark">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
