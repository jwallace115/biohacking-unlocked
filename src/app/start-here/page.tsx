import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start Here — Choose Your Research Path",
  description:
    "New to biohacking? Start here. Choose from peptides, sleep, cold & heat therapy, red light therapy, and supplements — all explained in plain English.",
};

const paths = [
  {
    title: "I\u2019m curious about peptides",
    body: "Start here if you want to understand what peptides are, why people talk about BPC-157, TB-500, GHK-Cu, CJC-1295, Ipamorelin, and what \u201cresearch use only\u201d actually means.",
    cta: "Explore Peptides",
    href: "/peptides",
    active: true,
  },
  {
    title: "I want to understand sleep and recovery",
    body: "Sleep is the boring biohack that everything else depends on. This section will cover sleep research, HRV, recovery tracking, Apple Watch, Oura Ring, Whoop, Garmin, and what sleep trackers can actually tell you.",
    active: false,
  },
  {
    title: "I\u2019m interested in cold plunges, saunas, and contrast therapy",
    body: "Cold and heat therapy are everywhere in the biohacking world. This section will separate the recovery research from the marketing claims.",
    active: false,
  },
  {
    title: "I want to understand red light therapy",
    body: "Wavelengths, irradiance, skin health, recovery claims, device quality \u2014 this category needs plain-English research before anyone spends hundreds or thousands of dollars.",
    active: false,
  },
  {
    title: "I want supplement research without the hype",
    body: "This section will focus on ingredient evidence, third-party testing, quality standards, and which claims deserve a closer look.",
    active: false,
  },
];

export default function StartHerePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 py-20 md:py-28">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Start here.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Biohacking can get noisy fast. Peptides, sleep trackers, red light
            panels, supplements, cold plunges — everyone has a claim. This page
            helps you choose the research path that fits what you are actually
            trying to understand.
          </p>
        </div>
      </section>

      {/* Intro copy */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-navy/70">
            We are not starting with &ldquo;what should you buy?&rdquo;
          </p>
          <p className="mt-4 text-lg font-medium text-navy">
            We are starting with a better question: What are you trying to
            understand about your body?
          </p>
          <p className="mt-4 text-navy/70">
            Pick a path below. Some sections are live now. Others are coming
            soon, but they show where Biohacking Unlocked is headed.
          </p>
        </div>
      </section>

      {/* Path cards */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          {paths.map((path) => (
            <div
              key={path.title}
              className={`relative rounded-xl border p-6 ${
                path.active
                  ? "border-accent/30 bg-white"
                  : "border-gray-200 bg-gray-50/50"
              }`}
            >
              {!path.active && (
                <span className="absolute right-4 top-4 rounded-full bg-navy/5 px-2.5 py-0.5 text-[10px] font-medium text-navy/40">
                  Coming Soon
                </span>
              )}
              <h2
                className={`text-lg font-semibold ${
                  path.active ? "text-navy" : "text-navy/70"
                }`}
              >
                {path.title}
              </h2>
              <p
                className={`mt-2 leading-relaxed ${
                  path.active ? "text-navy/70" : "text-navy/40"
                }`}
              >
                {path.body}
              </p>
              {path.active && path.href && (
                <Link
                  href={path.href}
                  className="mt-4 inline-block rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                >
                  {path.cta} &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Featured live section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-navy">
            Available Now: Peptides
          </h2>
          <p className="mt-4 leading-relaxed text-navy/70">
            The peptide section is the first full Biohacking Unlocked research
            hub. It covers individual peptide guides, safety basics, vendor
            quality, COAs, and the difference between animal research, human
            evidence, and community use.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/peptides"
              className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Explore Peptides
            </Link>
            <Link
              href="/peptide-coa-explained"
              className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-accent hover:text-accent-dark"
            >
              Read the COA Guide
            </Link>
            <Link
              href="/peptides/peptide-safety"
              className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-accent hover:text-accent-dark"
            >
              Peptide Safety
            </Link>
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-navy">
            The Biohacking Unlocked standard
          </h2>
          <p className="mt-4 leading-relaxed text-navy/70">
            Facts are cited. Evidence is labeled. Uncertainty is not hidden.
            Affiliate links do not decide what gets recommended. The site is
            free to read and ad-free by design.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/editorial-policy"
              className="text-sm font-medium text-accent-dark hover:underline"
            >
              Editorial Policy &rarr;
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-accent-dark hover:underline"
            >
              About Scott &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
