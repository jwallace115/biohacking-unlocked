import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch",
  description:
    "Have questions about peptides or biohacking? Contact the Biohacking Unlocked team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">Contact Us</h1>
      <p className="mt-4 leading-relaxed text-navy/70">
        Have a question, spotted an error, or want to suggest a topic?
        We&apos;d love to hear from you. Fill out the form below and we&apos;ll
        get back to you as soon as we can.
      </p>

      {/* Get in Touch */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Get in Touch</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: Use the form below to send us a message. We read every
          submission personally. Please be as specific as possible so we can
          give you the most useful response. For urgent matters, include
          &ldquo;URGENT&rdquo; in your subject line.
        </p>

        {/* Placeholder Contact Form */}
        <form className="mt-6 space-y-5" action="#">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-navy"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-navy"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-1.5 block text-sm font-medium text-navy"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="What is your message about?"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-navy"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Your message..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          <button
            type="submit"
            className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* What We Can Help With */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          What We Can Help With
        </h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: We are happy to help with questions about the content on
          this site, including our compound guides, vendor reviews, and
          editorial process. We also welcome feedback, correction submissions,
          and topic suggestions.
        </p>

        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <ul className="space-y-3 text-sm text-navy/70">
            <li>
              <strong className="text-navy">Content questions</strong> — If
              something in one of our guides is unclear or you want to learn
              more about a specific compound or topic.
            </li>
            <li>
              <strong className="text-navy">Corrections</strong> — If you
              believe we have published something inaccurate, please tell us.
              Include the article URL and a source for the correction.
            </li>
            <li>
              <strong className="text-navy">Topic requests</strong> — Is there
              a peptide, protocol, or biohacking topic you would like us to
              cover? We track all suggestions.
            </li>
            <li>
              <strong className="text-navy">Partnership inquiries</strong> —
              For media, editorial collaboration, or other business inquiries.
            </li>
          </ul>
        </div>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          What We Cannot Help With
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Placeholder: We are not medical professionals and cannot provide
          personalized health or medical advice. We cannot recommend specific
          dosing protocols for individuals, diagnose conditions, or substitute
          for the advice of a qualified healthcare provider. Please consult a
          licensed physician for any health-related decisions.
        </p>
      </section>

      {/* Response Time */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Response Time</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: We aim to respond to all messages within 3&ndash;5
          business days. During periods of high volume it may take a little
          longer. We read every message and will respond even if we are unable
          to help directly.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: Correction requests and editorial feedback are
          prioritized. If you submit a correction with supporting sources, you
          can generally expect a response within 48 hours as we take editorial
          accuracy seriously.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Other Ways to Connect
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Placeholder: We also monitor discussions in several online communities
          where biohacking and peptides are discussed. If you prefer to engage
          there, look for our team members using the handle listed in our{" "}
          <Link
            href="/about"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            About page
          </Link>
          .
        </p>
      </section>

      <div className="mt-12">
        <AffiliateDisclosure />
      </div>

      <div className="mt-6">
        <Link
          href="/start-here"
          className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Back to Start Here
        </Link>
      </div>
    </div>
  );
}
