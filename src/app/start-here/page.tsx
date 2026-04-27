import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start Here — Beginner's Guide to Peptides & Biohacking",
  description:
    "New to peptides and biohacking? Start here. Learn what peptides are, how to read a COA, and what to look for in a vendor.",
};

export default function StartHerePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Start Here
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        If you&apos;re brand new to peptides and biohacking, this is the place
        to begin. We&apos;ll walk you through everything you need to know before
        diving in.
      </p>

      {/* What Are Peptides */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">What Are Peptides?</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Peptides are short chains of amino acids — the building blocks of
          proteins. Your body naturally produces many peptides that serve as
          signaling molecules, telling your cells what to do. Synthetic peptides
          are lab-made versions designed to mimic or enhance these natural
          signals.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Different peptides have different functions. Some are studied for
          tissue repair (like BPC-157), others for growth hormone release (like
          CJC-1295 and Ipamorelin), and others for metabolic effects (like
          Semaglutide). The key thing to understand is that the research is still
          evolving — many peptides have strong preclinical data but limited human
          clinical trials.
        </p>
      </section>

      {/* How to Read a COA */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          How to Read a Certificate of Analysis (COA)
        </h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          A Certificate of Analysis (COA) is a document from an independent
          laboratory that verifies what&apos;s actually in a product. It&apos;s
          the single most important thing to check before purchasing any peptide.
        </p>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="font-semibold text-navy">
            Key things to look for on a COA:
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-navy/70">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                <strong>Purity percentage</strong> — Look for 98% or higher. This
                tells you how much of the product is actually the stated compound.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                <strong>Testing method</strong> — HPLC (High-Performance Liquid
                Chromatography) is the gold standard for peptide purity testing.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                <strong>Mass spectrometry data</strong> — Confirms the molecular
                weight matches the expected compound.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                <strong>Third-party lab name</strong> — The COA should come from
                an independent lab, not the vendor&apos;s own in-house testing.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                <strong>Batch/lot number</strong> — Should match the product you
                received.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* What to Look for in a Vendor */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What to Look for in a Vendor
        </h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          The peptide market is largely unregulated, which means vendor quality
          varies wildly. Here&apos;s what separates trustworthy vendors from the
          rest:
        </p>
        <ul className="mt-4 space-y-3 text-sm text-navy/70">
          {[
            "Publicly available or on-request COAs for every batch",
            "Third-party testing from independent laboratories",
            "Established reputation in community forums (Reddit, etc.)",
            "Multiple years in operation",
            "Transparent pricing with no hidden fees",
            "Responsive customer service",
            "Clear legal compliance and proper labeling",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
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

      {/* Explore Compounds */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Ready to Learn More?</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Now that you have the basics, explore individual compounds to
          understand what the research says about each one:
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            { name: "BPC-157", href: "/peptides/bpc-157" },
            { name: "TB-500", href: "/peptides/tb-500" },
            { name: "CJC-1295", href: "/peptides/cjc-1295" },
            { name: "Ipamorelin", href: "/peptides/ipamorelin" },
            { name: "Sermorelin", href: "/peptides/sermorelin" },
            { name: "Semaglutide", href: "/peptides/semaglutide" },
            { name: "AOD-9604", href: "/peptides/aod-9604" },
          ].map((compound) => (
            <Link
              key={compound.href}
              href={compound.href}
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
            >
              {compound.name}
            </Link>
          ))}
        </div>
        <Link
          href="/vendors"
          className="mt-6 inline-block text-sm font-semibold text-accent-dark hover:underline"
        >
          Or check out our vetted vendors &rarr;
        </Link>
      </section>
    </div>
  );
}
