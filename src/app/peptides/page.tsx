import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Peptides Hub — Research-Backed Compound Guides",
  description:
    "Your complete peptide resource. Explore compound guides, safety information, storage tips, and sourcing advice. Evidence-based and beginner-friendly.",
};

const educationPages = [
  {
    title: "What Are Peptides?",
    href: "/peptides/what-are-peptides",
    desc: "Complete beginner's guide to peptides",
  },
  {
    title: "How Peptides Work",
    href: "/peptides/how-peptides-work",
    desc: "Mechanisms of action explained simply",
  },
  {
    title: "Peptide Safety",
    href: "/peptides/peptide-safety",
    desc: "Risks, side effects, and safety guide",
  },
  {
    title: "How to Store Peptides",
    href: "/peptides/how-to-store-peptides",
    desc: "Proper storage and handling guide",
  },
  {
    title: "Research vs Pharma Peptides",
    href: "/peptides/research-vs-pharma-peptides",
    desc: "Key differences you need to know",
  },
];

const compoundGuides = [
  {
    name: "BPC-157",
    slug: "bpc-157",
    category: "Recovery",
    summary: "Gastric peptide studied for tissue repair and gut health.",
  },
  {
    name: "TB-500",
    slug: "tb-500",
    category: "Recovery",
    summary: "Thymosin beta-4 fragment studied for tissue repair and flexibility.",
  },
  {
    name: "GHK-Cu",
    slug: "ghk-cu",
    category: "Skin & Anti-Aging",
    summary: "Copper peptide studied for skin health and wound healing.",
  },
  {
    name: "CJC-1295",
    slug: "cjc-1295",
    category: "Growth Hormone",
    summary: "GHRH analog studied for sustained growth hormone release.",
  },
  {
    name: "Ipamorelin",
    slug: "ipamorelin",
    category: "Growth Hormone",
    summary: "Selective GH secretagogue with fewer side effects.",
  },
  {
    name: "Melanotan 2",
    slug: "melanotan-2",
    category: "Tanning",
    summary: "Melanocortin peptide studied for skin pigmentation.",
  },
  {
    name: "Selank",
    slug: "selank",
    category: "Nootropic",
    summary: "Nootropic peptide studied for anxiety and cognition.",
  },
  {
    name: "Semax",
    slug: "semax",
    category: "Nootropic",
    summary: "Nootropic peptide studied for cognitive enhancement and BDNF.",
  },
];

const comparisonPages = [
  { title: "BPC-157 vs TB-500", href: "/bpc-157-vs-tb-500" },
  { title: "CJC-1295 vs Ipamorelin", href: "/cjc-1295-vs-ipamorelin" },
  { title: "GHK-Cu vs Collagen", href: "/ghk-cu-vs-collagen" },
  { title: "Selank vs Semax", href: "/selank-vs-semax" },
];

const goalPages = [
  { title: "Peptides for Recovery", href: "/peptides-for-recovery" },
  { title: "Peptides for Skin", href: "/peptides-for-skin" },
  { title: "Peptides for Fat Loss", href: "/peptides-for-fat-loss" },
  { title: "Peptides for Sleep", href: "/peptides-for-sleep" },
  { title: "Peptides for Brain Health", href: "/peptides-for-brain-health" },
];

export default function PeptidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Peptide Compound Guides
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-navy/70">
        Each guide breaks down what the research actually says — in plain
        English. No miracle claims, no bro-science. Just evidence and honest
        assessments of what we know and what we don&apos;t.
      </p>

      {/* Education Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Learn the Basics</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {educationPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-semibold text-navy group-hover:text-accent-dark transition-colors">
                {page.title}
              </h3>
              <p className="mt-1 text-sm text-navy/60">{page.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Compound Guides */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Individual Compound Guides</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {compoundGuides.map((compound) => (
            <Link
              key={compound.slug}
              href={`/peptides/${compound.slug}`}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
                {compound.category}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-navy group-hover:text-accent-dark transition-colors">
                {compound.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                {compound.summary}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-accent-dark">
                Read guide &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparisons */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Head-to-Head Comparisons</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {comparisonPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-semibold text-navy group-hover:text-accent-dark transition-colors">
                {page.title}
              </h3>
              <span className="mt-2 inline-block text-sm font-medium text-accent-dark">
                Compare &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* By Goal */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Peptides by Goal</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {goalPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
            >
              {page.title}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-xl bg-navy p-8 text-center text-white">
        <h2 className="text-xl font-bold md:text-2xl">
          Looking for Trusted Peptide Sources?
        </h2>
        <p className="mt-2 text-sm text-white/60">
          Every vendor we recommend has been vetted for COA compliance and
          product quality.
        </p>
        <Link
          href="/best-peptide-sources"
          className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Find Trusted Sources
        </Link>
      </section>

      <div className="mt-8">
        <AffiliateDisclosure />
      </div>
    </div>
  );
}
