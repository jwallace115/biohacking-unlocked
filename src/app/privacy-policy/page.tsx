import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Privacy Policy — How We Handle Your Data",
  description:
    "Read our privacy policy to understand how Biohacking Unlocked collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 leading-relaxed text-navy/70">
        Your privacy matters to us. This policy explains what information
        Biohacking Unlocked collects, how it is used, and what rights you have
        over your data. By using this site, you agree to the practices described
        below.
      </p>
      <p className="mt-2 text-sm text-navy/50">
        Last updated: April 26, 2026
      </p>

      {/* Information We Collect */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">
          Information We Collect
        </h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: We collect information in two ways — information you
          provide directly, and information collected automatically when you
          visit the site. Directly provided information may include your name
          and email address if you contact us or subscribe to our newsletter.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: Automatically collected information includes standard
          server log data such as your IP address, browser type, referring URL,
          pages visited, and time spent on the site. This data is used in
          aggregate form and is not linked to individual identities unless
          required by law.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Information You Provide
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Placeholder: If you fill out a contact form or subscribe to updates,
          we store your name and email address. We do not sell, rent, or share
          this information with third parties for marketing purposes. You may
          request deletion of this data at any time.
        </p>
      </section>

      {/* How We Use Your Information */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">
          How We Use Your Information
        </h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: We use the information we collect to operate and improve
          the site, respond to your messages, send updates you have opted into,
          and analyze how visitors interact with our content so we can make it
          more useful.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: We do not use your personal information for automated
          decision-making or profiling. We do not sell your data to data brokers
          or advertising networks. Any use of your data beyond what is described
          in this policy will be communicated to you before it occurs.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Email Communications
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Placeholder: If you subscribe to our newsletter or update list, you
          will receive periodic emails about new content, research summaries,
          and site updates. Every email includes an unsubscribe link. We process
          unsubscribe requests promptly and do not continue sending emails after
          you opt out.
        </p>
      </section>

      {/* Cookies & Tracking */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Cookies &amp; Tracking</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: This site uses cookies and similar tracking technologies
          to enhance your browsing experience and collect analytics data. A
          cookie is a small text file stored on your device by your browser.
          Cookies are used to remember your preferences, understand how pages
          are used, and support affiliate link attribution.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: You can control cookies through your browser settings.
          Disabling cookies may affect certain site functionality. We use
          analytics tools such as Google Analytics to understand aggregate
          traffic patterns. This data is anonymized and not tied to individual
          users without consent.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Affiliate Link Tracking
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Placeholder: Affiliate links on this site use tracking parameters to
          credit us with referrals when you make a purchase. This tracking is
          conducted by third-party affiliate networks and is subject to their
          own privacy policies. We do not have access to your purchase
          information beyond the fact that a referral was credited.
        </p>
      </section>

      {/* Third-Party Services */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Third-Party Services</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: We use third-party services to operate this site,
          including hosting providers, analytics platforms, email service
          providers, and affiliate networks. Each of these services has its own
          privacy policy governing the data they handle on our behalf.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: We do not embed third-party social media tracking
          pixels. Links to external sites, including vendor sites, are governed
          by those sites&apos; own privacy policies once you click through. We
          are not responsible for the privacy practices of third-party sites.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Data Processors
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Placeholder: A list of our current third-party data processors,
          including their locations and the specific data they process, will be
          maintained here. We review these relationships regularly and remove
          processors that no longer meet our standards.
        </p>
      </section>

      {/* Your Rights */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Your Rights</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: Depending on your location, you may have certain rights
          regarding your personal data. These may include the right to access
          the personal data we hold about you, the right to correct inaccurate
          data, the right to request deletion, and the right to object to
          certain types of processing.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: Residents of the European Union have additional rights
          under the General Data Protection Regulation (GDPR). California
          residents have rights under the California Consumer Privacy Act
          (CCPA). To exercise any of these rights, please contact us using the
          information below.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-navy">
          Data Retention
        </h3>
        <p className="mt-2 leading-relaxed text-navy/70">
          Placeholder: We retain personal data only for as long as necessary to
          fulfill the purposes for which it was collected, or as required by
          law. Contact form submissions are retained for up to 12 months.
          Newsletter subscriber data is retained until you unsubscribe.
        </p>
      </section>

      {/* Contact Us */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Contact Us</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: If you have questions about this privacy policy, wish to
          exercise your data rights, or want to report a privacy concern, please
          reach out to us via our{" "}
          <Link
            href="/contact"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            contact page
          </Link>
          . We will respond to all privacy-related requests within 30 days.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder: We reserve the right to update this privacy policy at
          any time. Material changes will be communicated via a notice on the
          site or by email to subscribers. Continued use of the site after a
          policy update constitutes acceptance of the revised policy.
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
