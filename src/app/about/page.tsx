import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Who We Are & Why We Built This",
  description:
    "Learn about the team behind Biohacking Unlocked, our vetting process, and our commitment to honest, research-first education.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">About Us</h1>

      {/* Who We Are */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Who We Are</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Biohacking Unlocked is an independent educational resource built by
          people who were frustrated with the state of information in the
          peptide and biohacking space. Too many sites are either pushing
          products without context, making unsubstantiated claims, or burying
          useful information behind paywalls.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          We are researchers, writers, and biohacking enthusiasts — not doctors.
          We read the studies, monitor the communities, and translate what we
          find into plain English so you can make informed decisions.
        </p>
      </section>

      {/* Our Vetting Process */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Our Vetting Process</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Every compound guide and vendor review on this site goes through a
          structured process:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            "We review available published research — peer-reviewed studies, clinical trials, and systematic reviews.",
            "We clearly distinguish between human clinical data, animal studies, and in-vitro research.",
            "For vendors, we verify COA documentation, monitor community feedback over months (not days), and assess business practices.",
            "We update our content when new research is published or when vendor practices change.",
            "We disclose all affiliate relationships transparently.",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-navy/70"
            >
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
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
      </section>

      {/* Why We Built This */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">
          Why We Built This Site
        </h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          When we first started exploring peptides, we found the landscape
          confusing and full of noise. Forum posts mixed anecdotal experience
          with scientific claims. Vendor sites made bold promises with no
          citations. And most &ldquo;educational&rdquo; content was thinly
          veiled marketing.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          We built Biohacking Unlocked to be the resource we wished existed when
          we started. A place where beginners can learn the fundamentals, where
          every claim is backed by a citation (or honestly flagged as
          community-reported), and where vendor recommendations are earned, not
          bought.
        </p>
      </section>

      {/* Our Commitment */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">
          Our Commitment to Honesty
        </h2>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <ul className="space-y-3 text-sm text-navy/70">
            <li>
              <strong className="text-navy">We say &ldquo;we don&apos;t know&rdquo;</strong> when we
              don&apos;t know. Every compound page includes a section on gaps in
              the current research.
            </li>
            <li>
              <strong className="text-navy">We never make health claims.</strong>{" "}
              We report what the research says and what the community reports,
              clearly distinguishing between the two.
            </li>
            <li>
              <strong className="text-navy">
                We disclose all affiliate relationships.
              </strong>{" "}
              If we earn money from a vendor link, you&apos;ll always know about
              it.
            </li>
            <li>
              <strong className="text-navy">We update our content.</strong> When
              new research is published or when we learn something was wrong, we
              correct it.
            </li>
            <li>
              <strong className="text-navy">We never recommend products we haven&apos;t vetted.</strong>{" "}
              Our vendor list is small on purpose. We&apos;d rather recommend
              fewer vendors well than many vendors poorly.
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-10">
        <Link
          href="/start-here"
          className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );
}
