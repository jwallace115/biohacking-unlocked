import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

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
          CJC-1295 and Ipamorelin), and others for cognitive enhancement (like
          Selank and Semax). The key thing to understand is that the research is
          still evolving — many peptides have strong preclinical data but limited
          human clinical trials.
        </p>
        <Link
          href="/peptides/what-are-peptides"
          className="mt-4 inline-block text-sm font-semibold text-accent-dark hover:underline"
        >
          Read our full guide: What Are Peptides? &rarr;
        </Link>
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
            {[
              { label: "Purity percentage", desc: "Look for 98% or higher." },
              { label: "Testing method", desc: "HPLC is the gold standard." },
              { label: "Mass spectrometry data", desc: "Confirms molecular weight." },
              { label: "Third-party lab name", desc: "Must be independent." },
              { label: "Batch/lot number", desc: "Should match your product." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  <strong>{item.label}</strong> — {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/peptide-coa-explained"
          className="mt-4 inline-block text-sm font-semibold text-accent-dark hover:underline"
        >
          Full COA guide &rarr;
        </Link>
      </section>

      {/* Safety */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Safety First
        </h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Before exploring any peptide, understand the safety landscape.
          Most peptides lack long-term human clinical data, and quality varies
          wildly between vendors.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/peptides/peptide-safety"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Peptide Safety Guide
          </Link>
          <Link
            href="/peptide-side-effects"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Side Effects
          </Link>
          <Link
            href="/peptide-quality-testing"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Quality Testing
          </Link>
          <Link
            href="/how-to-identify-fake-peptides"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
          >
            Spot Fake Peptides
          </Link>
        </div>
      </section>

      {/* Explore Compounds */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Explore Compounds</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Now that you have the basics, explore individual compounds to
          understand what the research says about each one:
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            { name: "BPC-157", href: "/peptides/bpc-157" },
            { name: "TB-500", href: "/peptides/tb-500" },
            { name: "GHK-Cu", href: "/peptides/ghk-cu" },
            { name: "CJC-1295", href: "/peptides/cjc-1295" },
            { name: "Ipamorelin", href: "/peptides/ipamorelin" },
            { name: "Melanotan 2", href: "/peptides/melanotan-2" },
            { name: "Selank", href: "/peptides/selank" },
            { name: "Semax", href: "/peptides/semax" },
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
      </section>

      {/* Find Sources */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Find Trusted Sources</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          The peptide market is largely unregulated. We&apos;ve vetted vendors
          so you don&apos;t have to gamble on quality.
        </p>
        <Link
          href="/best-peptide-sources"
          className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          View Trusted Peptide Sources
        </Link>
      </section>

      <div className="mt-12">
        <AffiliateDisclosure />
      </div>
    </div>
  );
}
