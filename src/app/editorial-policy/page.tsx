import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Editorial Policy — How We Research & Write",
  description:
    "Learn about our editorial standards, fact-checking process, and commitment to evidence-based biohacking content.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Editorial Policy
      </h1>
      <p className="mt-4 leading-relaxed text-navy/70">
        Everything published on Biohacking Unlocked is held to a consistent
        standard of accuracy, transparency, and intellectual honesty. This page
        explains exactly how we research, write, and maintain our content.
      </p>

      {/* Our Standards */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Our Standards</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: We hold every piece of content on this site to a strict
          set of editorial standards. Claims must be traceable to a source —
          either peer-reviewed research, official regulatory guidance, or
          clearly flagged community reporting. We never publish speculative
          content without labeling it as such.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: Opinion is always distinguished from fact. When
          something is our interpretation of the available evidence, we say so.
          When the evidence is weak, thin, or conflicting, we say that too.
          We would rather publish a shorter, honest article than a long one
          padded with unverified claims.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Levels of Evidence
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Placeholder: We classify every factual claim according to its
          evidence level — human clinical trials, animal studies, in-vitro
          research, or community-reported anecdote. Each level is clearly
          labeled so readers can weigh the information appropriately.
        </p>
      </section>

      {/* Research Process */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Research Process</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: Before any guide or review is written, we conduct a
          structured literature review using PubMed, Google Scholar, and other
          scientific databases. We prioritize systematic reviews and
          meta-analyses, followed by randomized controlled trials, then
          observational studies, then animal and in-vitro data.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: For vendor reviews, our process includes ordering
          products, reviewing Certificates of Analysis, monitoring long-term
          community sentiment across forums and social channels, and assessing
          business practices such as shipping reliability and customer support.
          This process takes months, not days.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Primary Sources Only
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Placeholder: We read primary research papers, not just abstracts or
          secondary summaries. Where a secondary source is used, it is
          disclosed. We do not cite other biohacking blogs or marketing
          materials as sources of fact.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Conflict of Interest Disclosure
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Placeholder: Any potential conflict of interest — including affiliate
          relationships, free product samples, or paid partnerships — is
          disclosed prominently on every relevant page. Affiliate revenue never
          influences editorial recommendations.
        </p>
      </section>

      {/* Fact-Checking */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Fact-Checking</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: Every factual claim in our articles is reviewed before
          publication. Citations are verified to confirm they actually support
          the claim made. We do not rely on abstracts alone — the full text of
          studies is reviewed whenever accessible.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: When a claim cannot be directly verified from a
          trustworthy primary source, it is either removed, clearly labeled as
          community-reported, or flagged with a note that evidence is
          insufficient. We set a high bar and would rather say less than
          overstate.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Review Cycle
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Placeholder: Core content pages are reviewed on a regular cycle to
          ensure they remain current with the latest published research. When
          new studies are published that materially affect a topic, we update
          the relevant pages promptly and note the revision date at the bottom
          of each article.
        </p>
      </section>

      {/* Corrections Policy */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Corrections Policy</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: We take corrections seriously. If we publish something
          that is factually wrong, we correct it promptly and transparently.
          Corrections are noted at the top or bottom of the affected article
          with a brief explanation of what changed and why.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: We do not silently delete or rewrite content to hide
          errors. If a material change is made to an article, the revision
          history is noted. Readers who spot errors or have questions about our
          sourcing are encouraged to contact us — we treat every correction
          request as a genuine opportunity to improve.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          How to Report an Error
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Placeholder: If you believe something on this site is inaccurate,
          please use our{" "}
          <Link
            href="/contact"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            contact page
          </Link>{" "}
          to let us know. Include the article URL, the specific claim in
          question, and any sources that support a correction. We will review
          every submission and respond.
        </p>
      </section>

      <div className="mt-12">
        <AffiliateDisclosure />
      </div>

      <div className="mt-6">
        <Link
          href="/start-here"
          className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Back to Start Here
        </Link>
      </div>
    </div>
  );
}
