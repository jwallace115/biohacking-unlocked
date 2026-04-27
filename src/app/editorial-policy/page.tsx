import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Policy — How We Research & Write",
  description:
    "How Biohacking Unlocked labels evidence, vets vendors, handles affiliate relationships, and maintains editorial standards. Written by Scott Williams.",
};

export default function EditorialPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Editorial Policy
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        Biohacking Unlocked exists to explain what peptide research actually
        shows — not what vendors want it to show, and not what the most
        enthusiastic forum posts claim.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        This page explains how that standard works in practice.
      </p>

      {/* Who writes this site */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Who writes this site</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Every article on Biohacking Unlocked is written by Scott Williams, a
          firefighter and paramedic in Florida with over 25 years of experience
          as a first responder.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Scott is not a doctor, pharmacist, or academic researcher. He is
          someone who applied the same evidence-evaluation discipline he uses
          professionally to a category of compounds his coworkers started using
          — and decided to share what he found.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          All articles reflect Scott&apos;s interpretation of the available
          research. Where facts are stated, they are cited. Where opinions or
          interpretations are offered, that is stated explicitly.
        </p>
      </section>

      {/* How evidence is labeled */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How evidence is labeled
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Every article on this site distinguishes between:
        </p>
        <div className="mt-4 space-y-4">
          {[
            {
              title: "Animal research",
              desc: "Rodent models, in vitro studies, and preclinical data are labeled as such. Animal research generates hypotheses. It does not prove human outcomes.",
            },
            {
              title: "Human research",
              desc: "When human studies exist, they are cited by author, year, and sample size. The quality and size of the evidence is stated directly. A trial with 12 patients is not the same as a trial with 1,200.",
            },
            {
              title: "Community protocols",
              desc: "Dosing protocols and use patterns from the peptide community are documented as community-reported, not as medical guidance or clinical recommendations.",
            },
            {
              title: "Scott\u2019s read",
              desc: "Interpretive conclusions are labeled as \u201cmy read\u201d or \u201cmy honest read.\u201d These are informed opinions, not clinical findings.",
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
          This labeling is not a legal disclaimer exercise. It reflects a
          genuine editorial commitment to not blurring those four categories
          together — which is what most peptide content online does.
        </p>
      </section>

      {/* Vendor and affiliate policy */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Vendor and affiliate policy
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Biohacking Unlocked is ad-free. The only revenue this site generates
          comes from affiliate commissions on purchases made through vendor
          links.
        </p>
        <p className="mt-4 font-medium text-navy">
          A vendor earns a place on this site by passing a COA verification
          standard — not by having an affiliate program.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The verification standard requires:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Batch-specific certificates of analysis",
            "Third-party testing from a named, verifiable laboratory",
            "Identity confirmation by mass spectrometry",
            "Purity confirmation by HPLC",
            "Endotoxin and sterility testing for injectable products where available",
            "A testing lab with an independent online presence and verification portal",
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
        <p className="mt-4 leading-relaxed text-navy/70">
          Affiliate commission does not influence which vendors are listed or
          how they are described. A vendor that fails the COA standard is not
          listed regardless of commission rate. A vendor that passes the COA
          standard is listed based on quality, not on how much commission their
          program offers.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          This site does not accept payment for editorial coverage, sponsored
          content, or product placement.
        </p>
      </section>

      {/* Regulatory currency */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Regulatory currency</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Peptide regulation in the United States is changing rapidly. The April
          2026 FDA Category 2 update affected twelve compounds. PCAC
          consultations are scheduled for July 2026 and February 2027 that will
          shape the next round of changes.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Every article includes a &ldquo;last updated&rdquo; date and a
          regulatory section that reflects the status as of that date. When
          regulatory status changes materially, the relevant pages are updated.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Articles are not static documents. The research on this site is
          treated as a living record that needs to stay current.
        </p>
      </section>

      {/* What this site does not do */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What this site does not do
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Biohacking Unlocked does not:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Provide medical advice or recommendations",
            "Tell readers what to use or what dose to take",
            "Present animal research as proof of human benefit",
            "Present community protocols as clinical guidance",
            "Accept advertising or display ads of any kind",
            "Accept payment to feature or recommend any product or vendor",
            "Overstate the evidence behind compounds with thin human data",
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
      </section>

      {/* Corrections */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Corrections</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          If something on this site is factually wrong, that is worth knowing.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Corrections can be submitted through the{" "}
          <Link
            href="/contact"
            className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
          >
            contact page
          </Link>
          . If a citation is wrong, a regulatory date is outdated, or a factual
          claim is incorrect, it will be reviewed and corrected with a note on
          the relevant page.
        </p>
      </section>
    </article>
  );
}
