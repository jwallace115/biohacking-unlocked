import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Biohacking Unlocked — Research First. Hype Never.",
  description:
    "Your trusted starting point for peptides and biohacking. Evidence-based education for complete beginners. No hype, no BS — just science.",
};

const hubs = [
  {
    title: "Peptides",
    description:
      "Explore research-backed peptide compounds like BPC-157, TB-500, GHK-Cu, and more. Complete guides with mechanisms, research, and safety.",
    href: "/peptides",
    available: true,
  },
  {
    title: "Nootropics",
    description:
      "Cognitive enhancers, smart drugs, and brain optimization compounds. Evidence-based guides coming soon.",
    href: "/nootropics",
    available: false,
  },
  {
    title: "Recovery",
    description:
      "Compounds and protocols studied for tissue repair, injury recovery, and post-surgery healing.",
    href: "/recovery",
    available: false,
  },
  {
    title: "Longevity",
    description:
      "Growth hormone secretagogues, anti-aging peptides, and life extension research.",
    href: "/longevity",
    available: false,
  },
];

const popularGuides = [
  { name: "BPC-157", href: "/peptides/bpc-157" },
  { name: "TB-500", href: "/peptides/tb-500" },
  { name: "GHK-Cu", href: "/peptides/ghk-cu" },
  { name: "CJC-1295", href: "/peptides/cjc-1295" },
  { name: "Ipamorelin", href: "/peptides/ipamorelin" },
  { name: "Retatrutide", href: "/peptides/retatrutide" },
  { name: "Selank", href: "/peptides/selank" },
  { name: "Semax", href: "/peptides/semax" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 text-center md:py-32">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Biohacking <span className="text-accent">Unlocked</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 md:text-xl">
            Research First. Hype Never.
          </p>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/50">
            Your trusted starting point for evidence-based peptide and
            biohacking education.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/start-here"
              className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Start Here
            </Link>
            <Link
              href="/best-peptide-sources"
              className="inline-block rounded-lg border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Find Trusted Sources
            </Link>
          </div>
        </div>
      </section>

      {/* What is Biohacking */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            What is Biohacking?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Biohacking is the practice of using science, technology, and
            self-experimentation to optimize your body and mind. It ranges from
            simple lifestyle changes like cold exposure and sleep optimization to
            more advanced interventions like peptide therapy and hormone
            optimization.
          </p>
          <p className="mt-3 text-base leading-relaxed text-navy/70">
            At Biohacking Unlocked, we focus on the research behind these
            interventions. We break down complex studies into plain English so
            you can make informed decisions. No hype, no miracle claims — just
            what the science actually says.
          </p>
        </div>
      </section>

      {/* Explore by Hub */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-navy md:text-3xl">
            Explore by Category
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {hubs.map((hub) => (
              <Link
                key={hub.title}
                href={hub.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-navy group-hover:text-accent-dark transition-colors">
                    {hub.title}
                  </h3>
                  {!hub.available && (
                    <span className="rounded-full bg-navy/5 px-2 py-0.5 text-[10px] font-medium text-navy/50">
                      Soon
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  {hub.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Peptide Guides */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            Popular Peptide Guides
          </h2>
          <p className="mt-3 text-navy/70">
            Dive into our most-read compound guides — each backed by research
            and written in plain English.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {popularGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-accent hover:text-accent-dark transition-colors"
              >
                {guide.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/peptides"
              className="text-sm font-semibold text-accent-dark hover:underline"
            >
              View all peptide guides &rarr;
            </Link>
            <Link
              href="/reviews"
              className="text-sm font-semibold text-accent-dark hover:underline"
            >
              Read vendor reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Problem-Focused Guides */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            Peptides by Goal
          </h2>
          <p className="mt-3 text-navy/70">
            Not sure which peptide is right for you? Start with your goal.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Recovery", href: "/peptides-for-recovery", desc: "Injury, surgery, and exercise recovery" },
              { title: "Skin Health", href: "/peptides-for-skin", desc: "Anti-aging, wound healing, and collagen" },
              { title: "Fat Loss", href: "/peptides-for-fat-loss", desc: "Body composition and metabolic support" },
              { title: "Sleep", href: "/peptides-for-sleep", desc: "Sleep quality and GH optimization" },
              { title: "Brain Health", href: "/peptides-for-brain-health", desc: "Cognition, focus, and neuroprotection" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-semibold text-navy group-hover:text-accent-dark transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-navy/60">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            How We Vet Vendors
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Not all peptide suppliers are created equal. We evaluate every vendor
            against strict criteria before we recommend them:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Third-party Certificate of Analysis (COA) verification",
              "Community reputation across Reddit, forums, and review sites",
              "Years of consistent operation",
              "Responsive customer service",
              "Legal compliance and transparent business practices",
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
          <Link
            href="/best-peptide-sources"
            className="mt-8 inline-block text-sm font-semibold text-accent-dark hover:underline"
          >
            See our vetted sources &rarr;
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Ready to Start Your Research?
          </h2>
          <p className="mt-3 text-white/60">
            Whether you&apos;re a complete beginner or looking for specific compound
            information, we&apos;ve got you covered.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/start-here"
              className="rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Start Here
            </Link>
            <Link
              href="/peptides"
              className="rounded-lg border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Browse Peptides
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-6">
        <AffiliateDisclosure />
      </div>
    </>
  );
}
