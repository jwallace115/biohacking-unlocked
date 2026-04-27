import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Biohacking Unlocked — Who's Behind This Site",
  description:
    "Meet Scott Williams — firefighter, paramedic, and the researcher behind Biohacking Unlocked. 25 years of first-responder experience applied to evidence-based peptide education.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        About Biohacking Unlocked
      </h1>

      {/* Who's behind this site */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Who&apos;s behind this site
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          My name is Scott Williams.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          I&apos;ve been a firefighter and paramedic in Florida for over 25
          years.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          I did not start this site because I was excited about biohacking. I
          started it because my coworkers were injecting things I had never heard
          of, and I wanted to know if any of it was real.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is the honest origin story.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          About two years ago, peptides started showing up in the firehouse the
          way supplements always do — someone tried something, said it helped,
          and suddenly half the crew was asking questions. BPC-157. TB-500.
          CJC-1295. Names I didn&apos;t recognize, from a research world I had
          no background in.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          My instinct as a paramedic was skepticism.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Not the dismissive kind. The kind where you actually go look at the
          evidence before you form an opinion.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          So I started digging.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          What I found was more interesting — and more complicated — than I
          expected.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Some of the peptides people were talking about had decades of animal
          research behind them. Some had real human clinical data, at least for
          specific indications. Some had almost nothing. And most of the content
          online was either vendor marketing dressed up as education, or academic
          writing that assumed you already had a biology degree.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          There wasn&apos;t much in the middle.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          A place where someone could actually understand what the research
          shows, what the regulatory situation is, and what the practical
          questions are — without being sold something or talked down to.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That&apos;s what I wanted to build.
        </p>
      </section>

      {/* The first responder frame */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The first responder frame
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Twenty-five years as a first responder gives you a specific
          relationship with medical information.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          You learn enough to have informed professional opinions. You learn how
          to explain complex things in plain English. You learn that &ldquo;the
          research suggests&rdquo; and &ldquo;this is proven&rdquo; are very
          different sentences. And you learn — from watching what happens to
          people — that the gap between what something is marketed as and what it
          actually does matters enormously.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is the frame I bring to this research.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          I am not a doctor. I am not a researcher. I am not a pharmacist or a
          biochemist.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          I am someone who spent a career making quick decisions based on the
          best available information, and who applied that same discipline to
          understanding a category of compounds that most people are either
          dismissing or overselling.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The goal of every page on this site is to separate those two things:
        </p>
        <p className="mt-4 font-medium text-navy">
          What the research actually shows.
        </p>
        <p className="mt-2 font-medium text-navy">
          What the marketing claims.
        </p>
      </section>

      {/* How this site works */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">How this site works</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Every peptide page on Biohacking Unlocked follows the same standard:
        </p>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              Facts are cited.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              If I&apos;m stating something as a fact, there&apos;s a citation
              behind it. If I&apos;m sharing my interpretation of the research, I
              say that out loud.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              The evidence is labeled.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Animal research is labeled as animal research. Human research —
              when it exists — is labeled by sample size and study type. Community
              protocols are documented as community protocols, not as medical
              guidance.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              The regulatory situation is current.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Peptide regulation is moving fast right now. Every page includes a
              date-stamped regulatory section.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">
              Vendors are vetted independently.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              The only vendors linked on this site are ones I&apos;ve verified
              against a COA standard: third-party testing, batch-specific
              certificates, reputable labs. Affiliate commission doesn&apos;t
              change the vetting standard. Vendors don&apos;t get listed because
              they have an affiliate program. They get listed because they passed
              the quality checks.
            </p>
          </div>
        </div>
      </section>

      {/* Why I waited this long to publish */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Why I waited this long to publish
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          I&apos;ve been researching this space for two years.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          I waited because I wanted to get it right.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          There is a lot of bad peptide content online. Vendor sites pretending
          to be research sites. Affiliate pages that are really just product
          funnels with a thin layer of science language on top. Community forums
          where dosing protocols spread like they&apos;ve been validated in
          clinical trials.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          I didn&apos;t want to add to that.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The research behind this site represents hundreds of hours of
          synthesis across multiple sources — cross-referenced, conflict-logged,
          and updated. The editorial standard is the same one I applied as a
          first responder: what does the evidence actually say, not what do I
          want it to say.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          If the evidence is thin, I say it&apos;s thin.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          If the animal data is interesting but the human data is nearly absent,
          I say both of those things.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          If a compound has real documented safety concerns, they go in the
          article — not buried in a disclaimer.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          That is what I was waiting to be ready to do properly.
        </p>
      </section>

      {/* What this site is not */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What this site is not
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Biohacking Unlocked is not a medical resource.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Nothing on this site is medical advice. Nothing here should replace a
          conversation with a qualified healthcare provider.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          The research I summarize is real. My interpretations are my own. Adults
          can read both and make their own decisions.
        </p>
        <p className="mt-4 font-medium text-navy">That is the deal.</p>
      </section>
    </article>
  );
}
