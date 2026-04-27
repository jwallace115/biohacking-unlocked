import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "How to Verify a Peptide COA — The 6-Point Check (2026)",
  description:
    "Learn how to verify a peptide Certificate of Analysis. Lab verification, batch matching, identity vs purity, COA forgery patterns, and the approved testing labs.",
};

export default function PeptideCOAExplainedPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        How to Verify a Peptide COA
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>
      <AuthorByline />

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        A certificate of analysis is not a marketing document.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        It is supposed to be a third-party record of what was actually in a vial
        — who tested it, what they found, and when. In the peptide gray market,
        a COA is often the only independent quality signal a buyer has access to.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        The problem is that COAs can be real, fake, incomplete, outdated, or
        recycled. A document that looks professional is not the same as a
        document that means anything.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        This page explains how to tell the difference.
      </p>

      {/* What a COA actually is */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What a COA actually is
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          A COA — certificate of analysis — is a document produced by a testing
          laboratory that records the results of analytical testing on a specific
          product batch.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          For a peptide, a serious COA should confirm two things:
        </p>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">Identity</p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Is the molecule in the vial actually what the label says it is?
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">Purity</p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              What percentage of the contents is the target compound versus
              impurities, degradation products, or contaminants?
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-amber-900/80">
            A COA that only shows purity without confirming identity is
            incomplete. Purity of 99% is meaningless if the 99% is the wrong
            molecule.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          For injectable peptide products, a serious COA should also address{" "}
          <strong className="text-navy">sterility</strong> and{" "}
          <strong className="text-navy">endotoxin</strong>. Most gray-market
          peptide COAs do not include sterility and endotoxin testing. That is a
          meaningful gap.
        </p>
      </section>

      {/* The six COA tests */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The six COA tests</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Before trusting any peptide COA, run it through these six checks.
        </p>
        <div className="mt-4 space-y-4">
          {[
            {
              num: "1",
              title: "Lab name",
              desc: "The COA should name a real, independent third-party laboratory. Acceptable labs include Janoshik Analytical, Colmaric Analyticals, MZ Biolabs, Freedom Diagnostics, and their equivalent. \"In-house lab\" or a lab name with no online presence is not third-party testing.",
            },
            {
              num: "2",
              title: "Batch number match",
              desc: "The COA must have a batch or lot number. That number must match the batch number on the vial label when the product arrives. No batch number means the COA is generic \u2014 it may or may not represent the product you received.",
            },
            {
              num: "3",
              title: "Certificate ID uniqueness",
              desc: "The certificate ID on the COA should be unique to that vendor, product, and batch. If you can find another vendor with the same certificate ID on a different product, the COA has been reused. That is a forgery signal.",
            },
            {
              num: "4",
              title: "Date currency",
              desc: "The COA should be recent. A COA older than 12 months is a yellow flag. A COA older than 18\u201324 months for an injectable product is a red one. Peptides degrade. A test from two years ago does not tell you what is in the vial in front of you.",
            },
            {
              num: "5",
              title: "Tests included",
              desc: "A complete peptide COA includes HPLC purity (with chromatogram if available), mass spectrometry identity confirmation, endotoxin testing for injectables, sterility testing for injectables, and heavy metals / residual solvents where relevant.",
            },
            {
              num: "6",
              title: "Independent verification",
              desc: "The best testing labs have public verification portals. Janoshik Analytical allows independent COA verification through their website. If the lab has no website, no verification portal, and no independent online presence, the COA cannot be confirmed as real.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4"
            >
              <p className="text-sm font-semibold text-navy">
                {item.num}. {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-navy/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The verification workflow */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The verification workflow
        </h2>
        <p className="mt-4 font-medium text-navy">Before ordering:</p>
        <ol className="mt-4 space-y-2 list-decimal list-inside">
          {[
            "Find the COA on the vendor\u2019s site",
            "Confirm the lab is a real, named third-party lab",
            "Confirm the COA includes both identity and purity testing",
            "Check the date \u2014 is it recent?",
            "Verify the certificate ID through the lab\u2019s portal if possible",
            "Search the certificate ID online to confirm it is not reused across other vendors",
          ].map((item) => (
            <li key={item} className="text-sm leading-relaxed text-navy/70">
              {item}
            </li>
          ))}
        </ol>
        <p className="mt-4 font-medium text-navy">When the order arrives:</p>
        <ol className="mt-4 space-y-2 list-decimal list-inside" start={7}>
          <li className="text-sm leading-relaxed text-navy/70">
            Match the batch number on the vial label to the batch number on the
            COA
          </li>
          <li className="text-sm leading-relaxed text-navy/70">
            If they do not match, contact the vendor before using the product
          </li>
        </ol>
        <p className="mt-4 leading-relaxed text-navy/70">
          That process takes less than five minutes. It is the minimum.
        </p>
      </section>

      {/* The approved labs */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The approved labs</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Not all testing labs are equal. The ones with the most consistent
          track record in the research peptide community:
        </p>
        <div className="mt-4 space-y-4">
          {[
            {
              name: "Janoshik Analytical",
              detail: "Czech Republic based. Public COA verification portal. The gold standard reference in the community.",
            },
            {
              name: "Colmaric Analyticals",
              detail: "US based. Well-regarded in the peptide testing community.",
            },
            {
              name: "MZ Biolabs",
              detail: "US based. Used by vendors including Sports Technology Labs and Ascension Peptides.",
            },
            {
              name: "Freedom Diagnostics",
              detail: "Franklin, Tennessee. Public COA lookup portal. US-based with fast turnaround.",
            },
          ].map((lab) => (
            <div
              key={lab.name}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4"
            >
              <p className="text-sm font-semibold text-navy">{lab.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-navy/70">
                {lab.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          Labs that cannot be independently verified, have no web presence, or
          have no public portal should be treated with skepticism regardless of
          how professional the COA looks.
        </p>
      </section>

      {/* What COA forgery looks like */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What COA forgery looks like
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          COA forgery exists in the peptide gray market. The most documented
          patterns:
        </p>
        <div className="mt-4 space-y-4">
          {[
            {
              title: "Verification key removal",
              desc: "Janoshik COAs include a verification key that links to their portal. Some fake COAs have had this key physically removed or blurred. If a Janoshik COA does not have a verification key, it cannot be confirmed as real.",
            },
            {
              title: "Certificate ID reuse",
              desc: "Using the same certificate ID across multiple products or vendors. A real COA is batch-specific. Reusing an ID from a different batch, vendor, or product is fraud.",
            },
            {
              title: "Lab substitution",
              desc: "Using a real lab\u2019s name and format on a document that was never actually issued by that lab. The only defense is independent verification through the lab\u2019s own portal.",
            },
            {
              title: "Date manipulation",
              desc: "Changing the date on an old COA to make it appear current.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-red-200 bg-red-50 p-4"
            >
              <p className="text-sm font-semibold text-red-900/80">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-red-900/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          The defense against all of these is independent verification. If you
          can confirm the COA through the lab&apos;s own portal, matched to the
          specific batch number, you have done the most important verification
          step.
        </p>
      </section>

      {/* What a complete COA should look like */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What a complete COA should look like
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          A real, complete peptide COA contains:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Laboratory name and contact information",
            "Date of testing",
            "Specific batch or lot number matching the product",
            "Product name and molecular identity",
            "Test methods used (HPLC, MS, etc.)",
            "HPLC purity result with chromatogram",
            "Mass spectrometry result with identity confirmation",
            "Purity result with impurity profile",
            "Endotoxin testing result (for injectables)",
            "Sterility testing result (for injectables)",
            "Pass/fail specifications",
            "Lab signature, certification, or QR code for independent verification",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
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
          Any COA missing the batch number, the identity confirmation, or the
          lab verification mechanism should be treated as incomplete.
        </p>
      </section>

      {/* The practical bottom line */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The practical bottom line
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The peptide market has vendors who take testing seriously and vendors
          who treat COAs as marketing decoration.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The difference is visible if you know what to look for.
        </p>
        <p className="mt-4 font-medium text-navy">
          A COA is not decoration. It is the receipt — and in this market, it is
          often the only independent record of what you are actually getting.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Check the lab. Match the batch number. Verify through the portal.
          Check the date. Look for identity confirmation, not just purity.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Five minutes of verification is worth doing.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Link
            href="/best-peptide-sources"
            className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
          >
            Our current vendor recommendations &rarr;
          </Link>
          <Link
            href="/how-to-identify-fake-peptides"
            className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
          >
            How to identify fake peptides &rarr;
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
          This page is informational only. Biohacking Unlocked is not a medical
          resource. Research-use peptides are not FDA-approved drugs. COA
          verification helps assess product quality — it does not change the
          regulatory or legal status of any compound. Always consult a qualified
          healthcare provider before making health-related decisions. See our
          full{" "}
          <Link href="/disclaimer" className="underline hover:text-accent-dark">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
