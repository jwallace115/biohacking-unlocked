import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biohacking Unlocked — Research-First Biohacking Guides",
  description:
    "Peptides, sleep tools, recovery tech, red light therapy, and supplements — explained in plain English. Research-first. Ad-free. Built by a first responder who did the work.",
};

const categories = [
  {
    title: "Peptides",
    body: "30+ years of animal research, early human data, and a gray market with real quality problems. We cover what the science actually shows \u2014 and what it does not.",
    cta: "Explore Peptides",
    href: "/peptides",
    active: true,
  },
  {
    title: "Sleep",
    body: "Sleep is where recovery, hormones, HRV, and every other biohacking variable either works or doesn\u2019t. We start with the research \u2014 then get to the tools.",
    href: "/start-here",
    active: false,
  },
  {
    title: "Cold & Heat Therapy",
    body: "Cold plunges, saunas, and contrast therapy. The research is more interesting than the marketing \u2014 and usually more useful.",
    href: "/start-here",
    active: false,
  },
  {
    title: "Red Light Therapy",
    body: "Wavelengths, irradiance, skin claims, recovery claims \u2014 there is a lot of noise in this category. Here is what the studies actually show.",
    href: "/start-here",
    active: false,
  },
  {
    title: "Supplements",
    body: "Third-party testing, ingredient evidence, and what\u2019s actually worth a closer look versus what\u2019s just a good label.",
    href: "/start-here",
    active: false,
  },
];

const curatedGuides = [
  {
    title: "BPC-157: What the Research Actually Shows",
    desc: "The peptide that sent a lot of people down the research rabbit hole \u2014 and why the human data still matters.",
    href: "/peptides/bpc-157",
  },
  {
    title: "The Wolverine Stack: BPC-157 + TB-500",
    desc: "Why the BPC-157 + TB-500 stack became popular, and what the evidence can and cannot say.",
    href: "/peptides/wolverine-stack",
  },
  {
    title: "How to Verify a Peptide COA",
    desc: "A COA is not decoration. It is the receipt \u2014 if you know how to read it.",
    href: "/peptide-coa-explained",
  },
  {
    title: "How to Identify Fake Peptides",
    desc: "The vendor question matters as much as the peptide question.",
    href: "/how-to-identify-fake-peptides",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center md:py-32">
          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Biohacking, researched like someone who actually has to make a
            decision.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Peptides, sleep tools, recovery tech, red light therapy, and
            supplements — explained in plain English before you spend money or
            trust the hype.
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
              Explore Peptides
            </Link>
          </div>
        </div>
      </section>

      {/* Category intro */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center text-lg font-medium text-navy md:text-xl">
            Start with the category you are curious about.
          </p>

          {/* Category cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className={`group relative rounded-xl border p-6 transition-shadow hover:shadow-lg ${
                  cat.active
                    ? "border-accent/30 bg-white"
                    : "border-gray-200 bg-gray-50/50"
                }`}
              >
                {!cat.active && (
                  <span className="absolute right-4 top-4 rounded-full bg-navy/5 px-2.5 py-0.5 text-[10px] font-medium text-navy/40">
                    Coming Soon
                  </span>
                )}
                <h3
                  className={`text-lg font-semibold transition-colors ${
                    cat.active
                      ? "text-navy group-hover:text-accent-dark"
                      : "text-navy/70"
                  }`}
                >
                  {cat.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    cat.active ? "text-navy/60" : "text-navy/40"
                  }`}
                >
                  {cat.body}
                </p>
                {cat.active && (
                  <span className="mt-4 inline-block text-sm font-medium text-accent-dark">
                    {cat.cta} &rarr;
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust blocks */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-navy">
                How this site works
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                Every guide on Biohacking Unlocked follows the same standard:
                facts are cited, evidence is labeled, and uncertainty is stated
                clearly. Animal research is labeled as animal research. Community
                protocols are documented as community protocols. My
                interpretation is labeled as my read.
              </p>
              <Link
                href="/editorial-policy"
                className="mt-4 inline-block text-sm font-medium text-accent-dark hover:underline"
              >
                Read the Editorial Policy &rarr;
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy">
                How we make money
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                Biohacking Unlocked is ad-free. Always. The content is free. The
                only way this site makes money is if you click a vendor or
                product link and make a purchase — and only from vendors and
                products that passed our vetting standard. Commission rates
                don&apos;t change what gets recommended. If something isn&apos;t
                worth your money, we won&apos;t link to it.
              </p>
              <Link
                href="/editorial-policy"
                className="mt-4 inline-block text-sm font-medium text-accent-dark hover:underline"
              >
                Full Affiliate Disclosure &rarr;
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy">
                Who&apos;s behind this
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                Scott Williams is a firefighter and paramedic in Florida with
                25+ years of experience. He started researching peptides because
                coworkers were talking about them, using them, and asking
                questions — and he wanted to know what was real, what was hype,
                and what was still unknown. This site is where that research
                goes.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-block text-sm font-medium text-accent-dark hover:underline"
              >
                About Scott &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curated research guides */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            Research Guides Worth Reading
          </h2>
          <p className="mt-3 text-navy/70">
            Start with the guides that explain how we think, not just what to
            buy.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {curatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-semibold text-navy group-hover:text-accent-dark transition-colors">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  {guide.desc}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-accent-dark">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-xl px-4">
          <p className="text-sm text-white/50">Not sure where to start?</p>
          <Link
            href="/start-here"
            className="mt-4 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Start Here
          </Link>
        </div>
      </section>
    </>
  );
}
