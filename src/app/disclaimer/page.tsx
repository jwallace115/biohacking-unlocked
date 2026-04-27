import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — Legal, Medical & Affiliate Disclosures",
  description:
    "Full legal disclaimer for Biohacking Unlocked. Not medical advice. Research-use context, affiliate relationships, accuracy limitations, and liability.",
};

export default function DisclaimerPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">Disclaimer</h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>

      {/* Not medical advice */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Not medical advice</h2>
        <p className="mt-4 font-medium text-navy">
          Nothing on Biohacking Unlocked is medical advice.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The content on this site — including all peptide research summaries,
          regulatory overviews, vendor assessments, and editorial commentary — is
          informational only. It is not intended to diagnose, treat, cure, or
          prevent any disease or health condition.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Before making any decision about peptides, supplements, or any other
          health-related matter, consult a qualified healthcare provider who
          knows your personal medical history.
        </p>
      </section>

      {/* Research use context */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Research use context</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The peptides discussed on this site are sold in the United States as
          research chemicals under &ldquo;research use only&rdquo; or &ldquo;not
          for human consumption&rdquo; labeling. They are not FDA-approved drugs
          for the indications discussed on this site unless explicitly stated
          otherwise.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Purchasing, possessing, or using these compounds may carry legal,
          health, and financial risks. Laws and regulations vary by jurisdiction
          and change over time. It is your responsibility to understand and
          comply with the laws applicable to you.
        </p>
      </section>

      {/* Affiliate relationships */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Affiliate relationships
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Biohacking Unlocked participates in affiliate programs. When you click
          a vendor link and make a purchase, this site may earn a commission at
          no additional cost to you.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Affiliate relationships do not influence editorial content. Vendors are
          assessed against an independent COA verification standard. Commission
          rates do not affect which vendors are listed or how they are described.
        </p>
      </section>

      {/* Accuracy and currency */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Accuracy and currency</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Peptide regulation is changing rapidly. While every effort is made to
          keep regulatory information current, information on this site may
          become outdated. Always verify regulatory status through official
          sources before acting on any information found here.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Research summaries reflect the evidence available at the time of
          writing. New studies, systematic reviews, or regulatory actions may
          change the picture. Check the &ldquo;last updated&rdquo; date on each
          page.
        </p>
      </section>

      {/* No warranties */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">No warranties</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This site is provided as-is without warranties of any kind, express or
          implied. Biohacking Unlocked makes no representations about the
          completeness, accuracy, reliability, or suitability of any information
          on this site for any purpose.
        </p>
      </section>

      {/* Limitation of liability */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Limitation of liability
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          To the fullest extent permitted by law, Biohacking Unlocked and its
          author shall not be liable for any loss or damage arising from your use
          of, or reliance on, any information on this site.
        </p>
      </section>
    </article>
  );
}
