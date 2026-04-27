import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AffiliateBox from "@/components/AffiliateBox";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "TB-500: What the Research Actually Shows (2026)",
  description:
    "Deep-dive into TB-500 and thymosin beta-4 research: the identity problem, animal and human data, the Wolverine stack, regulatory updates as of April 2026, and purity risks.",
};

export default function TB500Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-navy/50">
        <Link href="/peptides" className="hover:text-accent-dark">
          Peptides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">TB-500</span>
      </nav>

      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Recovery
      </span>

      <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
        TB-500: What the Research Actually Shows
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>
      <AuthorByline />

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        TB-500 is one of the more interesting peptides in biohacking — and one
        of the easier ones to misunderstand.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        It is usually talked about as the other half of the famous
        &ldquo;Wolverine stack&rdquo; with{" "}
        <Link
          href="/peptides/bpc-157"
          className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
        >
          BPC-157
        </Link>
        , the combo people bring up when they are researching soft-tissue repair,
        tendon issues, muscle strains, and general recovery. If you came here
        from the BPC-157 page, that is probably why.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        But TB-500 has a twist that most peptide marketing slides right past:
        TB-500 is not exactly the same thing as thymosin beta-4.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        That matters a lot.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Full thymosin beta-4 is a natural 43-amino-acid protein found in human
        cells. TB-500 is usually sold as a shorter synthetic fragment related to
        that molecule. And then there is a third question that may be the most
        practical one of all: what is actually inside a commercial vial labeled
        &ldquo;TB-500&rdquo;?
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        So I started digging into the research, and the story turned out to be
        more layered than the usual &ldquo;healing peptide&rdquo; pitch.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Where I am stating a fact, I am citing it. Where I am sharing my read on
        the research, I am saying that out loud.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        This page is not a recommendation and not medical advice. It is my
        working summary of what TB-500 is, what thymosin beta-4 research
        actually shows, what the community is doing with it, what regulators are
        saying as of April 2026, and where the picture is still being painted.
      </p>

      <AffiliateBox
        productName="TB-500"
        productUrl="https://ascensionpeptides.com/product/tb-500-5mg/?ref=Biohackingunlocked"
        size="5mg"
      />

      {/* What TB-500 actually is */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What TB-500 actually is
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The first thing to understand is that &ldquo;TB-500&rdquo; is more of
          a vendor and community term than a clean research-standard name.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The molecule it gets compared to is{" "}
          <strong className="text-navy">thymosin beta-4</strong>, often
          shortened to <strong className="text-navy">TB4</strong> or{" "}
          <strong className="text-navy">T&beta;4</strong>. Full thymosin beta-4
          is a naturally occurring 43-amino-acid protein found in nearly all
          human cells. It has been studied since the 1980s, especially for cell
          migration, wound healing, tissue repair, inflammation, angiogenesis,
          and cardiac repair models.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Allan Goldstein at George Washington University is one of the
          foundational names connected to thymosin beta-4 research. That history
          matters because the science around full TB4 did not come from peptide
          forums. There is a real research lineage here.
        </p>
        <p className="mt-4 font-medium text-navy">TB-500 is different.</p>
        <p className="mt-4 leading-relaxed text-navy/70">
          TB-500 usually refers to a synthetic short fragment associated with the{" "}
          <strong className="text-navy">LKKTETQ</strong> region of thymosin
          beta-4, often described as the 17-23 fragment. Some commercial products
          call it &ldquo;Thymosin Beta-4 Fragment 17-23.&rdquo; Some vendors
          simply call it TB-500. Some products may vary in fragment length, salt
          form, purity, or even identity.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is the core issue.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          There are three separate things people often collapse into one bucket:
        </p>
        <ol className="mt-4 space-y-2 list-decimal list-inside">
          <li className="text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Full thymosin beta-4</strong> — the
            natural 43-amino-acid protein with the strongest research base.
          </li>
          <li className="text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">TB-500</strong> — the marketed short
            synthetic fragment, often associated with LKKTETQ.
          </li>
          <li className="text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">
              Commercial products labeled &ldquo;TB-500&rdquo;
            </strong>{" "}
            — which may or may not match what the label claims.
          </li>
        </ol>
        <p className="mt-4 leading-relaxed text-navy/70">
          That distinction is not nitpicking. It changes how we read the
          research.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          When a study shows something interesting with full thymosin beta-4,
          that does not automatically prove the same result for the TB-500
          fragment sold by peptide vendors. The fragment may share some activity.
          It may capture part of the biology. But &ldquo;related to&rdquo; is
          not the same as &ldquo;identical to.&rdquo;
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is the part most marketing skips.
        </p>
      </section>

      {/* How it's supposed to work */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How it&apos;s supposed to work
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The cell-migration piece is what makes TB-500 interesting to me.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Full thymosin beta-4 is best known as an{" "}
          <strong className="text-navy">actin-binding peptide</strong>. Actin is
          one of the structural proteins cells use to move, change shape, and
          organize themselves. If you think of a cell as a tiny living
          construction crew, actin is part of the scaffolding and movement
          system.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          TB4 binds to G-actin monomers and helps regulate actin
          polymerization. In plain English: it helps manage the way cells move
          and reorganize.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That matters because tissue repair is not just about &ldquo;healing
          faster.&rdquo; It requires the right cells to get to the right place
          at the right time. Endothelial cells help form new blood vessels.
          Keratinocytes help rebuild skin surfaces. Other cells participate in
          remodeling the extracellular matrix, calming inflammation, and
          rebuilding damaged tissue.
        </p>
        <p className="mt-4 font-medium text-navy">
          The proposed TB4/TB-500 story includes several overlapping mechanisms:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            { label: "Actin regulation", desc: "helping control the cell movement machinery." },
            { label: "Cell migration", desc: "encouraging repair-related cells to move toward injury sites." },
            { label: "Anti-inflammatory signaling", desc: "modulating pro-inflammatory cytokine activity in experimental models." },
            { label: "Angiogenesis", desc: "supporting new blood vessel formation." },
            { label: "Extracellular matrix remodeling", desc: "helping tissue reorganize during repair." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                <strong className="text-navy">{item.label}</strong> —{" "}
                {item.desc}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-semibold text-navy">
            The Wolverine Stack pairing
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            The simplified logic goes like this:{" "}
            <Link
              href="/peptides/bpc-157"
              className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
            >
              BPC-157
            </Link>{" "}
            is often discussed around angiogenesis and blood-vessel signaling,
            while TB4/TB-500 is discussed around cell migration and actin
            regulation. On paper, those mechanisms complement each other. One is
            about improving the repair environment. The other is about helping
            the right cells move through that environment.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            That is why I understand the Wolverine stack&apos;s appeal. It is
            not just two random peptides thrown together because the names sound
            cool. There is at least a biological idea behind the pairing.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            But that word matters: <strong className="text-navy">idea</strong>.
            There is no strong human clinical research showing that the BPC-157 +
            TB-500 combination produces better outcomes in people. The community
            built the protocol before clinical research caught up.
          </p>
        </div>

        <p className="mt-4 leading-relaxed text-navy/70">
          The big unresolved question is simple: does the short TB-500 fragment
          actually reproduce the useful effects of full thymosin beta-4 in
          humans?
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is where the research gets thinner.
        </p>
      </section>

      {/* Animal research */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the animal research shows
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This is where the TB4 case is at its strongest — but with one very
          important nuance.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Most of the strongest research is on{" "}
          <strong className="text-navy">full thymosin beta-4</strong>, not the
          TB-500 fragment that is typically sold.
        </p>
        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            The standout animal study is{" "}
            <strong className="text-navy">Malinda KM et al. (1999)</strong>. In
            a rat wound model, thymosin beta-4 increased re-epithelialization by{" "}
            <strong className="text-navy">42% at day 4</strong> and up to{" "}
            <strong className="text-navy">61% at day 7</strong> compared with
            saline controls. Those numbers made me slow down and pay attention.
          </p>
          <p className="mt-2 text-sm italic text-navy/50">
            That research was on full thymosin beta-4, not the TB-500 fragment
            that is typically sold.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          Animal models have also explored thymosin beta-4 in several other
          repair contexts:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Wound healing — the strongest and cleanest research area.",
            "Cardiac repair after myocardial infarction — studied in rodent and pig models.",
            "Corneal wound healing — studied in animal eye-injury models.",
            "Hair regrowth — explored in rodent models.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          There is also in vitro work on{" "}
          <strong className="text-navy">human nucleus pulposus cells</strong>,
          where thymosin beta-4-related research showed reduced apoptosis and
          slower senescence. That is interesting, especially for people thinking
          about disc and connective-tissue biology, but it needs to be labeled
          correctly: that was work on human cells in a lab, not a clinical trial
          in humans.
        </p>
        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            <strong>The identity issue follows us through the whole page.</strong>{" "}
            If the study used full thymosin beta-4, we should say full thymosin
            beta-4. If the product being sold is a synthetic fragment, we should
            say synthetic fragment. Those are not the same sentence.
          </p>
        </div>
      </section>

      {/* Human research reality */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The human research reality
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This is where TB-500 gets more interesting than BPC-157 — but also
          more complicated.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Full thymosin beta-4 has moved further into human research than BPC-157
          has in some specific contexts. That is worth saying clearly.
        </p>
        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            The most important human wound-healing reference is{" "}
            <strong className="text-navy">Treadwell et al. (2012)</strong>.
            These were Phase 2 clinical wound-healing trials involving venous
            stasis ulcers and pressure ulcers. The study reported accelerated
            healing among patients who healed.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            That matters because we are no longer talking only about rats, cells,
            or theory. We are talking about human wound-healing trials.
          </p>
          <p className="mt-2 text-sm italic text-navy/50">
            That research was on full thymosin beta-4, not the TB-500 fragment
            that is typically sold.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          The Treadwell study supports interest in full thymosin beta-4 as a
          wound-healing molecule. It does not automatically validate every
          commercial vial labeled TB-500.
        </p>
        <p className="mt-4 font-medium text-navy">
          Other TB4-related development programs include:
        </p>
        <ul className="mt-4 space-y-3">
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">RGN-259</strong> — a thymosin
            beta-4-related compound studied for dry eye. Results were modest, and
            it did not reach FDA approval.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">RGN-352</strong> — a thymosin
            beta-4-related compound studied for cardiac repair. Results were also
            modest, and it did not reach approval.
          </li>
          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-navy/70">
            General Phase II work on full TB4 has reportedly suggested safety
            and possible effectiveness in areas like venous stasis ulcers and dry
            eye syndrome, but the evidence should be framed carefully.
          </li>
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          My read: full thymosin beta-4 has a more serious human-research
          footprint than many people probably realize. That does not mean the
          case is settled. It means the molecule has crossed into human clinical
          work in a way many research peptides have not.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The marketed TB-500 fragment is a step removed from that evidence.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is the tension of this peptide. The full molecule has interesting
          human data. The fragment sold online has far less direct human
          evidence. Vendors often lean on the full TB4 literature without
          explaining that distinction.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is where the marketing starts moving faster than the evidence.
        </p>
      </section>

      {/* Community uses */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What the community uses it for
        </h2>
        <p className="mt-2 text-sm italic text-navy/50">
          Community use is not the same thing as clinical evidence — this section
          is documentation, not endorsement.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          TB-500 is most commonly discussed for:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Soft-tissue injuries",
            "Tendon and ligament issues",
            "Muscle strains",
            "Post-surgical recovery",
            "Scar reduction",
            "General \"recovery\" protocols",
            "Hair regrowth, in a smaller subset of users",
            "Flexibility and range-of-motion claims",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-semibold text-navy">
            The Wolverine Stack
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            The most famous community use pairs TB-500 with{" "}
            <Link
              href="/peptides/bpc-157"
              className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
            >
              BPC-157
            </Link>
            . The logic is easy to understand: BPC-157 is discussed around
            angiogenesis and repair signaling, while TB-500 is discussed around
            cell migration and actin regulation. Put those together, and the
            community sees a broader &ldquo;repair stack.&rdquo;
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            My read on the stack is pretty simple: I understand the logic, but
            the combo research is not there yet. This is one of those places
            where the community got out in front of the published human evidence.
          </p>
        </div>

        <p className="mt-4 leading-relaxed text-navy/70">
          Community-reported protocols often cluster around{" "}
          <strong className="text-navy">2–5 mg per week</strong>, usually split
          into two subcutaneous doses. Some users describe a &ldquo;loading
          phase&rdquo; of 4–8 weeks at higher weekly amounts, followed by lower
          maintenance use. Subcutaneous use is the most common route discussed,
          though topical use appears in some community conversations too.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is community-reported behavior, not a validated medical dosing
          standard.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          No approved human dosing standard exists for TB-500 as a research
          peptide. There is also no guarantee that one vendor&apos;s
          &ldquo;TB-500&rdquo; is identical to another vendor&apos;s
          &ldquo;TB-500,&rdquo; which makes community protocol discussions even
          messier.
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
          The headline:{" "}
          <strong className="text-navy">
            TB-500, specifically Thymosin Beta-4 Fragment 17-23, was removed from
            the FDA Category 2 list effective April 22, 2026.
          </strong>{" "}
          The relevant docket is{" "}
          <strong className="text-navy">FDA-2025-N-6895</strong>.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            <strong>That sounds bigger than it is.</strong> Removal from Category
            2 does <strong>not</strong> mean FDA approval. It does not mean FDA
            found TB-500 safe or effective. It does not mean broad consumer use
            is authorized. The removal happened because nominators withdrew the
            nominations.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          The next important checkpoint is{" "}
          <strong className="text-navy">July 23, 2026</strong>, when the
          Pharmacy Compounding Advisory Committee consultation is scheduled for
          TB-500 acetate and TB-500 free base. The review includes consideration
          of a wound-healing indication.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is the date I would circle.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          If the wound-healing pathway clears the PCAC process, TB-500 could
          stop being purely a research-chemical orphan and move toward a more
          defined compounded-use pathway. That would be a meaningful shift. But
          as of April 2026, that has not happened.
        </p>
        <p className="mt-4 font-semibold text-navy">
          TB-500 is not FDA approved for any indication.
        </p>
        <p className="mt-4 font-medium text-navy">
          A few other regulatory notes:
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-3 text-sm text-navy/70">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong className="text-navy">WADA</strong> explicitly prohibits
              &ldquo;Thymosin-&beta;4 and its derivatives&rdquo; under S2,
              Peptide Hormones, Growth Factors, Related Substances and Mimetics.
              That means TB-500 is banned at all times in WADA-tested sport.
              TB-500 derivatives are directly named in the prohibited category.
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm text-navy/70">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              In the <strong className="text-navy">United States</strong>,
              TB-500 is generally sold under research-chemical labeling. It is
              legal to sell as a research chemical and legal to possess. It is
              not a controlled substance. But &ldquo;research use only&rdquo; is
              a legal and commercial framing, not a safety guarantee and not FDA
              approval.
            </span>
          </li>
        </ul>
      </section>

      {/* The purity problem */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The purity problem</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This is the part most peptide content skips, and it is the part that
          matters most practically.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          A great peptide from a bad vendor is worse than a less-exciting peptide
          from a serious vendor. With TB-500, the vendor question matters even
          more than usual.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Why? Because TB-500 has an unusually messy identity problem in the gray
          market.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          First, the molecule itself can vary between vendors. Some products are
          described as the short LKKTETQ fragment. Some use broader
          &ldquo;thymosin beta-4 fragment&rdquo; language. Some products may not
          clearly state the exact sequence, salt form, or identity being sold.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Second, full thymosin beta-4 is a larger 43-amino-acid molecule and is
          more expensive to synthesize than a short fragment. That creates an
          obvious incentive problem. A vendor can market the peptide using the
          reputation of full TB4 research while selling a cheaper fragment.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Third, there is no clean industry-wide standard for what a bottle
          labeled &ldquo;TB-500&rdquo; should be.
        </p>
        <p className="mt-4 font-medium text-navy">
          That is why COA verification matters so much here:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Does the COA match the batch number?",
            "Was identity confirmed, not just purity?",
            "Does the test show mass spectrometry or another identity-confirmation method?",
            "Is the lab real and independently verifiable?",
            "Is the COA current?",
            "Does the sequence being tested match what the vendor is claiming?",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          A generic COA is not enough. A COA without batch matching is not
          enough. A fake-looking PDF with no lab verification is not enough.
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
          My read: with TB-500, the practical question is not only &ldquo;is the
          biology interesting?&rdquo; It is &ldquo;did the vial actually contain
          the peptide the label says it contains?&rdquo;
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That sounds basic, but in this market it is not a small detail.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          You still have to actually get the peptide in the vial.
        </p>
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
              q: "Does the TB-500 fragment reproduce full thymosin beta-4 effects?",
              a: "This is the core question. Full TB4 has the stronger research base. TB-500 is usually a synthetic fragment. The fragment may capture some relevant biology, but the human clinical evidence does not fully answer that.",
            },
            {
              q: "What is the long-term human safety profile?",
              a: "The human research is limited, especially for the TB-500 fragment specifically. Short-term signals from TB4-related research are useful, but they do not replace multi-year safety data.",
            },
            {
              q: "What is an effective human dose?",
              a: "Community consensus around 2\u20135 mg per week is not the same thing as a medically validated dosing standard. It is a pattern of reported use, not a clinical guideline.",
            },
            {
              q: "What about cancer risk?",
              a: "This is theoretical, but worth mentioning once. TB4 is overexpressed in some tumor types, and the biology involves angiogenesis and cell migration. That does not prove TB-500 causes cancer. It means the question cannot be waved away. There is no good human cancer-risk dataset for TB-500 specifically.",
            },
            {
              q: "Do commercial TB-500 products match the research molecule?",
              a: "This is the TB-500-specific issue that makes the page different from BPC-157. If a product labeled TB-500 is actually a different fragment, underdosed, contaminated, or mislabeled, then the research comparison becomes shaky from the start.",
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
          Other gaps remain too: reproductive safety, immunogenicity, drug
          interactions, route-specific effects, and whether topical or injectable
          forms behave meaningfully differently in real-world use.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          None of that makes the biology boring. It just means the honest answer
          is still incomplete.
        </p>
      </section>

      {/* Bottom line */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Bottom line</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          My honest read: TB-500 is one of the more interesting peptides in the
          tissue-repair category, but the name creates more confusion than almost
          any other peptide I have looked at.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The biology is genuinely interesting. Cell migration, actin regulation,
          angiogenesis, and tissue remodeling are real pieces of repair biology.
          The Malinda 1999 wound-healing data on full thymosin beta-4 is
          especially worth paying attention to.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The human research is also more interesting than people might expect.
          Treadwell et al. 2012 is one of the stronger human wound-healing
          signals in the research-peptide category. Full thymosin beta-4 has
          moved further into human clinical work than BPC-157 has in some
          specific contexts.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          But TB-500 has one giant asterisk: the product people buy as
          &ldquo;TB-500&rdquo; is usually not full thymosin beta-4.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That changes the whole interpretation.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Full TB4 is the better-studied molecule. TB-500 is the marketed
          fragment. Commercial &ldquo;TB-500&rdquo; is the vial you hope matches
          the label. Those are three different levels of confidence.
        </p>
        <p className="mt-4 font-medium text-navy">
          That sentence is basically the whole page.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          There is a real difference between &ldquo;this is overhyped
          nonsense&rdquo; and &ldquo;this is interesting biology with an evidence
          gap.&rdquo; TB-500 is in the second category.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The Wolverine stack with{" "}
          <Link
            href="/peptides/bpc-157"
            className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
          >
            BPC-157
          </Link>{" "}
          makes mechanistic sense on paper. I understand why people talk about
          pairing angiogenesis-focused repair signaling with
          cell-migration-focused repair signaling. But there is no strong human
          combination research showing that the stack works the way the community
          says it does.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The regulatory side is also worth tracking. The April 22, 2026
          Category 2 removal is not FDA approval, but the July 23, 2026 PCAC
          consultation is a real checkpoint. If TB-500 moves toward a defined
          wound-healing compounding pathway, that would be a meaningful
          development.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Until then, the most practical concern is purity and identity.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          For TB-500, the question is not only &ldquo;what does the research
          say?&rdquo; It is also &ldquo;what is actually in the vial?&rdquo;
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Adults reading this can take that information and make their own call.
          My job is to separate the full TB4 research from the TB-500 fragment
          claims, explain why the biology is interesting, and be honest about
          where the evidence still has holes.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          This is one I would keep an eye on, especially with the July 2026
          review coming up.
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
            href="/peptides/wolverine-stack"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            The Wolverine Stack: BPC-157 + TB-500
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
        <div className="mt-4">
          <AffiliateDisclosure />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-5">
        <h2 className="text-sm font-bold text-navy">Disclaimer</h2>
        <p className="mt-2 text-xs leading-relaxed text-navy/60">
          This page is informational and not medical advice. Biohacking Unlocked
          is not a medical resource. TB-500 is not approved by the FDA for any
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
