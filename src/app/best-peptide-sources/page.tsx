import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import COABadge from "@/components/COABadge";

export const metadata: Metadata = {
  title: "Best Peptide Sources (2026) — How We Vet Vendors",
  description:
    "Find the most trusted peptide sources. Our vendor vetting standard explained — COA verification, batch testing, and why the list is short on purpose. Updated April 2026.",
};

const ascensionUrl =
  "https://ascensionpeptides.com/ref/Biohackingunlocked/";

export default function BestPeptideSourcesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        The Best Peptide Sources: How We Vet Vendors
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        Finding a peptide is one thing. Finding a vendor you can actually trust
        is the harder part.
      </p>

      {/* Hero Affiliate Box */}
      <div className="mt-8 rounded-xl border-2 border-accent/30 bg-navy p-6 md:p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
          Our Current Recommended Source
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <p className="text-xl font-bold">Ascension Peptides</p>
          <COABadge />
        </div>
        <p className="mt-2 text-sm text-white/60">
          COA-verified &middot; MZ Biolabs &middot; US-based
        </p>
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
            Code: BIOHACKING
            <span className="text-accent/70">
              &mdash; 50% off first order
            </span>
          </span>
        </div>
        <a
          href={ascensionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Shop Ascension Peptides &rarr;
        </a>
        <p className="mt-4 text-[11px] text-white/30">
          Affiliate link. We may earn a commission at no extra cost to you.
        </p>
      </div>

      <div className="mt-6">
        <AffiliateDisclosure />
      </div>

      {/* Why the vendor question matters */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Why the vendor question matters more than most people realize
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is the practical reality of this space. The peptide you choose
          matters, but the vendor question may matter even more. A
          well-researched peptide from a bad vendor is worse than a less-exciting
          peptide from a serious one.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Because at the end of the day, you still have to answer the basic
          question:
        </p>
        <p className="mt-4 font-medium text-navy text-lg">
          What is actually in the vial?
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is why this page exists.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          This is not a &ldquo;top 10 peptide sites&rdquo; listicle. I do not
          think that format is very useful in a market where quality control,
          batch testing, labeling, and regulatory posture matter this much.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          This page is the Biohacking Unlocked vendor vetting page. The goal is
          simple: show the standard, explain what we checked, and only list
          vendors that clear the bar.
        </p>
      </section>

      {/* The vetting standard */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The Biohacking Unlocked vendor standard
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Before any vendor gets listed here, we look for a few things.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Not vibes. Not influencer claims. Not &ldquo;everybody on Reddit says
          they&apos;re good.&rdquo;
        </p>
        <p className="mt-4 font-medium text-navy">Actual quality signals:</p>
        <ul className="mt-4 space-y-2">
          {[
            "Third-party COAs \u2014 testing should come from an outside lab, not only from the vendor",
            "Batch-specific testing \u2014 the COA should match the batch number on the product",
            "Reputable lab \u2014 Janoshik, Colmaric, MZ Biolabs, or an equivalent lab with real testing credibility",
            "Purity standards \u2014 99%+ preferred, 95%+ minimum depending on peptide and formulation",
            "Identity confirmation \u2014 purity is not enough; the test should help confirm the compound is what the label says it is",
            "Clean research-use posture \u2014 vendors should not contradict their own \u201cresearch use only\u201d labeling with aggressive health claims",
            "Real customer service \u2014 phone, email, contact information, and a way to reach a human",
            "Real operating history \u2014 not a site that appeared yesterday with perfect reviews and miracle claims",
            "No unresolved red flags \u2014 fake COAs, enforcement actions, fake reviews, serious customer complaints, or affiliate non-payment issues matter",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-navy/70"
            >
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-medium text-navy">
          That is why this list is short.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          A short list is not a bug. It is the point.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          If we cannot verify enough, the vendor does not get listed as
          recommended. They may go into our research database. They may go onto
          the watch list. They may get reviewed later. But they do not get
          recommended here until the basics are clear.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My honest read: in the peptide world, the vendor question matters as
          much as the peptide question. A COA is not decoration. It is the
          receipt.
        </p>
      </section>

      {/* Regulatory context */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Regulatory context — April 2026
        </h2>
        <p className="mt-2 text-sm text-navy/50">
          Peptide regulation is moving fast, so this section is current as of
          April 2026.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The big thing to understand: the April 2026 FDA Category 2 removals
          did not make peptides &ldquo;FDA approved.&rdquo; Several peptides
          were removed from Category 2 because nominations were withdrawn. That
          is not the same as FDA saying they are safe, effective, legal for broad
          human use, or approved as drugs.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The next major regulatory inflection point is the FDA Pharmacy
          Compounding Advisory Committee process, including the July 2026
          consultations for several peptides.
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            Buying from a COA-vetted vendor does not change the legal or
            regulatory status of a peptide. It does not turn a research-use
            peptide into an FDA-approved medicine. What it can do is help answer
            the practical quality question: does this product appear to match
            what the label says?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
            That is the lane of this page.
          </p>
        </div>
      </section>

      {/* Ascension full write-up */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Ascension Peptides — full write-up
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Ascension Peptides is our current recommended peptide source because it
          cleared the Biohacking Unlocked vetting standard.
        </p>
        <p className="mt-4 font-medium text-navy">
          The most important part: third-party, batch-specific COA testing
          through MZ Biolabs.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is what earned the recommendation.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Ascension is Colorado-based and offers U.S. domestic shipping. The
          company provides a public COA library, and the testing we reviewed
          showed current batch-specific documentation across products. Multiple
          products had more than one batch posted — a good sign because it shows
          an active testing cadence rather than one old COA being recycled
          forever.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          A vendor can make a polished website in a weekend. They cannot fake a
          serious testing cadence as easily.
        </p>

        <p className="mt-6 font-medium text-navy">
          Why Ascension made the list:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "MZ Biolabs third-party testing confirmed",
            "Batch-specific COAs across all products",
            "Public COA library, currently maintained",
            "Multiple product batches available for review",
            "Pre-mixed stacks also independently COA\u2019d",
            "Clean research-use-only labeling",
            "No contradictory health claims",
            "U.S. domestic operation, Colorado-based",
            "Real customer service: (303) 518-6550, Monday\u2013Friday 9am\u20135pm CST",
            "Clear affiliate and coupon structure",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-navy/70"
            >
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm leading-relaxed text-navy/70">
            <strong className="text-navy">Affiliate relationship:</strong>{" "}
            Biohacking Unlocked earns a commission if you purchase through our
            Ascension link. The recommendation came first. The affiliate
            relationship came after. Vendors do not get listed because they have
            an affiliate program. They get listed because they cleared the
            quality checks.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
          <p className="font-medium text-navy">
            Current offer: Use code{" "}
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-0.5 text-sm font-semibold text-accent-dark">
              BIOHACKING
            </span>{" "}
            for 50% off your first purchase.
          </p>
          <a
            href={ascensionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Shop Ascension Peptides &rarr;
          </a>
        </div>
      </section>

      {/* Also on our radar */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Also on our radar</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The list is short right now because we are still finishing verification
          on other vendors. That is intentional. I would rather publish one
          verified recommendation than a long list of maybes.
        </p>
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-navy">Swiss Chems</h3>
            <span className="mt-1 inline-block rounded-full bg-navy/5 px-2.5 py-0.5 text-[11px] font-medium text-navy/50">
              Verification in progress
            </span>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">
              One of the most cross-verified active vendors in our research
              database. Long operating history, public affiliate program, and
              broad recognition in the peptide space. We are finishing direct
              verification of the testing lab and COA workflow before adding them
              as a full recommendation.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-navy">
              Sports Technology Labs
            </h3>
            <span className="mt-1 inline-block rounded-full bg-navy/5 px-2.5 py-0.5 text-[11px] font-medium text-navy/50">
              Verification in progress
            </span>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">
              Also high on our radar. MZ Biolabs third-party testing confirmed,
              and a 60-day refund policy that is a meaningful operational signal.
              Affiliate program status still in progress — will be added as a
              full recommendation once confirmed.
            </p>
          </div>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          As we finish vetting more vendors, this page will grow. Slowly. On
          purpose.
        </p>
      </section>

      {/* Vendors we don't recommend */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Vendors we don&apos;t recommend
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This page is meant to stay positive and practical, so this is not a
          call-out list. But the patterns are worth knowing.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Several vendors we reviewed did not make the page because their health
          claims contradicted their own &ldquo;research use only&rdquo;
          disclaimers. Others had unresolved complaints around fake reviews, poor
          customer service, affiliate non-payment, or unclear business
          continuity. Some were tied to closures or enforcement activity in
          2025–2026. Some were simply too new to verify.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          If a vendor you have heard of is not on this page, one of two things
          is probably true: we have not finished reviewing them yet, or something
          in the vetting process raised a flag we could not resolve.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Not drama. Not gossip. Just a clear line between verified, pending, and
          not recommended.
        </p>
      </section>

      {/* How to verify any vendor yourself */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How to verify any vendor yourself
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          I would rather teach readers how to verify a vendor than ask them to
          blindly trust this page.
        </p>
        <p className="mt-4 font-medium text-navy">The basic checklist:</p>
        <ul className="mt-4 space-y-2">
          {[
            "Find the COA before buying",
            "Confirm the COA is batch-specific",
            "Confirm the testing lab is real and third-party",
            "Look for mass spectrometry identity confirmation",
            "Look for HPLC purity testing",
            "Check whether injectable products address sterility and endotoxin",
            "Make sure the vendor\u2019s claims match its legal posture",
            "Avoid vendors using miracle language, disease claims, or fake urgency",
            "Watch for perfect review profiles that look manufactured",
            "Be cautious with vendors with no address, no phone, no testing history, or recycled COAs",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-navy/70"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          A serious vendor should make verification easier, not harder.
        </p>

        <p className="mt-4 font-medium text-navy">For a deeper breakdown:</p>
        <div className="mt-4 flex flex-col gap-2">
          <Link
            href="/peptide-coa-explained"
            className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
          >
            How to read a COA &rarr;
          </Link>
          <Link
            href="/how-to-identify-fake-peptides"
            className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
          >
            How to identify fake peptides &rarr;
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-5">
        <h2 className="text-sm font-bold text-navy">Disclaimer</h2>
        <p className="mt-2 text-xs leading-relaxed text-navy/60">
          This page contains affiliate links. Biohacking Unlocked may earn a
          commission if you purchase through those links, including from
          Ascension Peptides. This page is informational only and is not medical
          advice. Peptides discussed on this site may not be FDA approved for
          human use, and research-use products are commonly labeled &ldquo;for
          research purposes only / not for human consumption.&rdquo; Vendor
          vetting does not change the legal or medical status of any peptide.
          Always do your own research and speak with a qualified healthcare
          provider before making health-related decisions. See our full{" "}
          <Link href="/disclaimer" className="underline hover:text-accent-dark">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
