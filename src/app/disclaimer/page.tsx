import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — Legal, Medical & Affiliate Disclosures",
  description:
    "Full legal disclaimer, medical disclaimer, affiliate disclosure, and research use notice for Biohacking Unlocked.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">Disclaimer</h1>
      <p className="mt-4 text-navy/70">
        Please read this disclaimer carefully before using this website.
      </p>

      {/* General Disclaimer */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">General Disclaimer</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          The information provided on Biohacking Unlocked
          (biohackingunlocked.com) is for general informational and educational
          purposes only. All information on the site is provided in good faith,
          however we make no representation or warranty of any kind, express or
          implied, regarding the accuracy, adequacy, validity, reliability,
          availability, or completeness of any information on the site.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Under no circumstance shall we have any liability to you for any loss
          or damage of any kind incurred as a result of the use of the site or
          reliance on any information provided on the site. Your use of the site
          and your reliance on any information on the site is solely at your own
          risk.
        </p>
      </section>

      {/* Medical Disclaimer */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Medical Disclaimer</h2>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="leading-relaxed text-sm text-amber-900/80">
            <strong>We are not medical professionals.</strong> The content on
            this website is not intended to be a substitute for professional
            medical advice, diagnosis, or treatment. Always seek the advice of
            your physician or other qualified health provider with any questions
            you may have regarding a medical condition or treatment and before
            undertaking a new health care regimen. Never disregard professional
            medical advice or delay in seeking it because of something you have
            read on this website.
          </p>
          <p className="mt-3 leading-relaxed text-sm text-amber-900/80">
            The compounds discussed on this site have varying levels of
            scientific evidence. Some have been studied in human clinical trials,
            while others have only been studied in animal models or in-vitro
            settings. We clearly indicate the level of evidence for each
            compound, but this should not be interpreted as an endorsement or
            recommendation for use.
          </p>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Affiliate Disclosure</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Biohacking Unlocked is a participant in affiliate programs. This means
          that when you click on certain links on our site and make a purchase,
          we may receive a commission at no additional cost to you.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          Our affiliate relationships do not influence our vendor reviews or
          recommendations. We only recommend vendors we have personally vetted
          for COA compliance, reputation, and quality. We have and will continue
          to decline affiliate partnerships with vendors that do not meet our
          standards.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          All pages containing affiliate links are clearly disclosed with an
          affiliate disclosure notice.
        </p>
      </section>

      {/* Research Use Only */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">
          Research Use Only Notice
        </h2>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="leading-relaxed text-sm text-navy/70">
            Many of the compounds discussed on this website are sold and labeled
            &ldquo;for research purposes only&rdquo; and are not approved by the
            FDA for human consumption unless specifically noted otherwise (such
            as FDA-approved medications like Semaglutide when obtained through
            proper medical channels).
          </p>
          <p className="mt-3 leading-relaxed text-sm text-navy/70">
            We do not encourage or endorse the use of any compound outside of
            its intended and legally approved applications. Information about
            community-reported protocols is provided for educational context only
            and should not be interpreted as instructions or recommendations.
          </p>
        </div>
      </section>

      {/* Age Restriction */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Age Restriction</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          This website and its content are intended for adults aged 18 and older.
          By using this website, you confirm that you are at least 18 years of
          age.
        </p>
      </section>

      {/* Contact */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-navy">Contact</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          If you have any questions about this disclaimer, please reach out to
          us through our website contact channels.
        </p>
      </section>

      <p className="mt-12 text-xs text-navy/40">
        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>
    </div>
  );
}
