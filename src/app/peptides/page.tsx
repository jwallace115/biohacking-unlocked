import type { Metadata } from "next";
import Link from "next/link";
import { compounds } from "@/data/compounds";

export const metadata: Metadata = {
  title: "Peptides Hub — Research-Backed Compound Guides",
  description:
    "Explore our library of research-backed peptide guides. Learn about BPC-157, TB-500, CJC-1295, Ipamorelin, Sermorelin, Semaglutide, and more.",
};

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

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {compounds.map((compound) => (
          <Link
            key={compound.slug}
            href={`/peptides/${compound.slug}`}
            className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
              {compound.category}
            </span>
            <h2 className="mt-3 text-lg font-semibold text-navy group-hover:text-accent-dark transition-colors">
              {compound.name}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-navy/60">
              {compound.summary}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-accent-dark">
              Read guide &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
