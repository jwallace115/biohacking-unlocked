import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — How We Handle Your Data",
  description:
    "Privacy policy for Biohacking Unlocked. What we collect, how we use it, third-party services, cookies, affiliate links, and your rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>

      <p className="mt-6 leading-relaxed text-navy/70">
        This Privacy Policy describes how Biohacking Unlocked collects, uses,
        and handles information when you visit this site.
      </p>

      {/* What we collect */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">What we collect</h2>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Automatically collected data
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          When you visit this site, standard web server logs may collect basic
          information including your IP address, browser type, pages visited, and
          time of visit. This site uses analytics tools to understand how
          visitors use the site. This data is aggregated and not used to identify
          individual visitors.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Contact form submissions
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          If you submit the contact form, your name, email address, and message
          are transmitted to Formspree, a third-party form processing service,
          and forwarded to the site author. This information is used only to
          respond to your message and is not shared with third parties or used
          for marketing.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">Cookies</h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          This site may use essential cookies for basic site functionality. No
          advertising cookies or tracking cookies are used. This site does not
          run ads and does not participate in behavioral advertising networks.
        </p>
      </section>

      {/* Affiliate links */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Affiliate links</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This site contains affiliate links to third-party vendors. When you
          click an affiliate link, you are leaving this site and the privacy
          practices of the destination site apply. Biohacking Unlocked is not
          responsible for the privacy practices of linked sites.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          Affiliate links may set cookies on your device per the destination
          vendor&apos;s policies.
        </p>
      </section>

      {/* Third-party services */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Third-party services</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This site uses the following third-party services:
        </p>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">Vercel</p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Hosting and deployment. Vercel may collect standard server log
              data.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">Formspree</p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              Contact form processing. Messages submitted through the contact
              form are processed by Formspree per their privacy policy at
              formspree.io.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-navy">Analytics</p>
            <p className="mt-1 text-sm leading-relaxed text-navy/70">
              This site may use privacy-focused analytics to understand traffic
              patterns. No personally identifiable information is collected
              through analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Data retention */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Data retention</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Contact form submissions are retained only as long as needed to respond
          to your inquiry. Server log data is retained per standard hosting
          provider policies.
        </p>
      </section>

      {/* Your rights */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Your rights</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          If you have submitted a contact form message and wish to request
          deletion of that data, contact us through the{" "}
          <Link
            href="/contact"
            className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
          >
            contact page
          </Link>{" "}
          and we will accommodate that request.
        </p>
      </section>

      {/* Children */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Children</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This site is not directed at children under 13 and does not knowingly
          collect information from children.
        </p>
      </section>

      {/* Changes to this policy */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          Changes to this policy
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          This policy may be updated from time to time. The &ldquo;last
          updated&rdquo; date at the top of this page reflects the most recent
          revision.
        </p>
      </section>

      {/* Contact */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Contact</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          Questions about this privacy policy can be submitted through the{" "}
          <Link
            href="/contact"
            className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
          >
            contact page
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
