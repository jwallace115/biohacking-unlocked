import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biohacking Unlocked — Research First. Hype Never.",
  description:
    "Your trusted starting point for peptides and biohacking. Evidence-based education for complete beginners. No hype, no BS — just science.",
};

const categories = [
  {
    title: "Peptides",
    description:
      "Explore research-backed peptide compounds like BPC-157, TB-500, and more.",
    href: "/peptides",
  },
  {
    title: "Recovery",
    description:
      "Learn about compounds studied for tissue repair, gut health, and injury recovery.",
    href: "/peptides",
  },
  {
    title: "Longevity",
    description:
      "Discover growth hormone secretagogues and compounds studied for anti-aging potential.",
    href: "/peptides",
  },
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
          <Link
            href="/start-here"
            className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Start Here
          </Link>
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

      {/* Featured Categories */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-navy md:text-3xl">
            Explore by Category
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-navy group-hover:text-accent-dark transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  {cat.description}
                </p>
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
            href="/vendors"
            className="mt-8 inline-block text-sm font-semibold text-accent-dark hover:underline"
          >
            See our vetted vendors &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
