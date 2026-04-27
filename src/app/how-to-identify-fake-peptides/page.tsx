import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "How to Identify Fake Peptides and Bad Vendors (2026)",
  description:
    "12 red flag patterns for spotting fake peptides and untrustworthy vendors. COA forgery, enforcement cases, verification key removal, and the vendor checklist.",
};

export default function HowToIdentifyFakePeptidesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        How to Identify Fake Peptides and Bad Vendors
      </h1>
      <p className="mt-2 text-sm text-navy/50">Last updated: April 2026</p>
      <AuthorByline />

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        The gray-market peptide world has vendors who take quality seriously and
        vendors who are running a convincing imitation of a vendor who takes
        quality seriously.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        The difference is not always obvious from the outside.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        This page documents the patterns that separate real vendors from bad
        ones — drawn from direct research into vendor practices, community
        testing reports, and documented cases of fraud and regulatory enforcement
        in the peptide market.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        None of this is abstract. Every pattern here has a real example behind
        it.
      </p>

      {/* The first rule */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The first rule</h2>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-semibold text-amber-900/80">
            If a vendor cannot show you a current, batch-specific COA from a
            named third-party laboratory, the conversation is over.
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-navy/70">
          Everything else on this page assumes a vendor has at least cleared that
          bar. Most of the patterns below are about what to look for after you
          have the COA in hand.
        </p>
        <p className="mt-4 leading-relaxed text-navy/70">
          For a full explanation of how to evaluate a COA, read{" "}
          <Link
            href="/peptide-coa-explained"
            className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
          >
            How to Verify a Peptide COA
          </Link>
          .
        </p>
      </section>

      {/* Red flag patterns */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Red flag patterns</h2>
        <div className="mt-4 space-y-6">
          {[
            {
              num: "1",
              title: "Verification key removed from the COA",
              desc: "Janoshik COAs include a verification key that links to their portal. Some fake COAs have had this key physically removed, smudged, or cropped out.",
              action: "Go to janoshik.com and try to verify the COA directly. If the key is missing, treat the COA as unverified.",
            },
            {
              num: "2",
              title: "Certificate ID reused across vendors or products",
              desc: "A real COA is batch-specific. The certificate ID is unique to one vendor, one product, one batch. In documented cases, vendors have reused certificate IDs from other vendors or products.",
              action: "Search the certificate ID number online. If you find the same ID on a different vendor\u2019s site, the COA has been reused.",
            },
            {
              num: "3",
              title: "\u201cIn-house\u201d lab with no independent presence",
              desc: "Some vendors claim in-house testing or name a lab that has no website, phone, verifiable address, or online presence. That is the vendor issuing their own certificate about their own product.",
              action: "Search the lab name. If it has no independent online presence and no verification portal, the COA cannot be confirmed.",
            },
            {
              num: "4",
              title: "Fake third-party verification infrastructure",
              desc: "Some bad actors have built fake verification portals that mimic legitimate lab sites. Documented case: ggpeps.net created fake infrastructure mimicking Janoshik\u2019s portal format.",
              action: "Use the actual lab\u2019s known URL directly \u2014 not a link on the vendor\u2019s site. Go to janoshik.com or freedomdiagnosticstesting.com directly.",
            },
            {
              num: "5",
              title: "Health claims contradicting research-use disclaimers",
              desc: "Some vendors maintain \u201cresearch use only\u201d disclaimers while publishing blog posts and product copy describing specific human health benefits. That contradiction is a compliance red flag.",
              action: "Read the vendor\u2019s marketing alongside their legal disclaimers. If the marketing reads like drug claims while the footer says \u201cnot for human use,\u201d that is intentional.",
            },
            {
              num: "6",
              title: "Prices significantly below market",
              desc: "Peptide synthesis and quality testing have real costs. Documented patterns include vendors selling peptides 30\u201350% below market that were later found to be underdosed, mislabeled, or never shipped.",
              action: "Know the approximate market price range. Prices dramatically better than everyone else should raise a question, not trigger a click.",
            },
            {
              num: "7",
              title: "Tablets, capsules, or consumer-format products",
              desc: "Real research peptides are sold as lyophilized powder or reconstituted solutions in vials. Peptides in tablets or capsules are designed for human consumption \u2014 contradicting \u201cresearch use only\u201d framing. Documented cases include vendors facing federal criminal charges for selling peptides in tablet form.",
              action: "If a vendor\u2019s catalog includes tablet or capsule formats, treat their \u201cresearch use only\u201d framing as a legal fiction.",
            },
            {
              num: "8",
              title: "Affiliate marketing launched before testing is complete",
              desc: "Documented pattern: vendors launching affiliate programs and recruiting content creators before completing endotoxin and sterility testing for injectable products.",
              action: "Ask vendors directly about their testing. A vendor who has not completed endotoxin and sterility testing is treating buyers as the testing population.",
            },
            {
              num: "9",
              title: "Trustpilot profile removed",
              desc: "Trustpilot does not typically remove profiles for trivial reasons. Common reasons include vendor-incentivized review schemes or patterns suggesting fake reviews.",
              action: "Search the vendor\u2019s Trustpilot profile directly before purchasing. If removed, investigate why.",
            },
            {
              num: "10",
              title: "Crypto-only or unusual payment methods",
              desc: "Vendors refused by credit card processors often move to crypto-only or workarounds like Zelle or Cash App. Processors refuse for compliance reasons. Crypto payments have no chargeback protection.",
              action: "If a vendor only accepts crypto, ask why. Their answer will tell you something.",
            },
            {
              num: "11",
              title: "No physical address",
              desc: "A vendor with no verifiable physical address has no accountability mechanism. No legal entity to contact, no state registration to verify.",
              action: "Search the vendor\u2019s address. A virtual office is a yellow flag. No address at all is a red one.",
            },
            {
              num: "12",
              title: "COAs older than 12 months on injectable products",
              desc: "Peptides degrade over time. Vendors who recycle old COAs across current inventory may have no current data on what they are selling.",
              action: "Check the date on every COA. For injectables, anything older than 12 months should prompt a question. Older than 18\u201324 months is a red flag.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="rounded-lg border border-gray-200 bg-gray-50 p-5"
            >
              <p className="text-sm font-semibold text-navy">
                {item.num}. {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                {item.desc}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                <strong className="text-navy">What to do:</strong> {item.action}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The enforcement context */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">
          The enforcement context
        </h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          The peptide market has seen real federal enforcement actions. These are
          not theoretical risks.
        </p>
        <p className="mt-4 font-medium text-navy">
          Documented cases from 2022–2026:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            "All American Peptide \u2014 federal forfeiture of over $3 million",
            "Tailor Made Compounding \u2014 federal criminal conviction",
            "Paradigm Peptides \u2014 federal criminal plea (December 2025)",
            "Amino Asylum \u2014 alleged FDA raid (June 2025), domain fragmentation",
            "Peptide Sciences \u2014 voluntary shutdown (March 2026), with subsequent impersonator domains appearing within weeks",
          ].map((item) => (
            <li
              key={item}
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-900/70"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-navy/70">
          The enforcement pattern has included seizures, criminal charges, and
          civil forfeiture. It has targeted vendors selling compounds with
          explicit health claims, vendors selling to athletic populations, and
          vendors operating under &ldquo;research use only&rdquo; framing while
          directing human use.
        </p>
      </section>

      {/* The short version */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The short version</h2>
        <p className="mt-4 leading-relaxed text-navy/70">
          A vendor worth using can answer yes to all of these:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Is there a current, batch-specific COA from a named third-party lab?",
            "Does the COA include identity confirmation by mass spectrometry?",
            "Can the COA be independently verified through the lab\u2019s portal?",
            "Does the batch number on the COA match the vial?",
            "Is the COA dated within the last 12 months?",
            "Does the vendor have a real address and customer service contact?",
            "Is the vendor\u2019s marketing consistent with their legal disclaimers?",
            "Has the vendor been in operation for at least 2 years without major red flags?",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
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
        <div className="mt-6 flex flex-col gap-2">
          <Link
            href="/best-peptide-sources"
            className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
          >
            Our current verified vendor recommendations &rarr;
          </Link>
          <Link
            href="/peptide-coa-explained"
            className="font-medium text-accent-dark underline underline-offset-2 hover:text-accent"
          >
            How to verify a COA in detail &rarr;
          </Link>
        </div>
      </section>

      {/* AffiliateDisclosure */}
      <section className="mt-10">
        <AffiliateDisclosure />
      </section>

      {/* Disclaimer */}
      <section className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-5">
        <h2 className="text-sm font-bold text-navy">Disclaimer</h2>
        <p className="mt-2 text-xs leading-relaxed text-navy/60">
          This page is informational only. Biohacking Unlocked is not a medical
          resource and does not provide legal advice. Vendor assessments reflect
          available research and community documentation at the time of writing.
          Research-use peptides are not FDA-approved drugs. Always consult a
          qualified healthcare provider before making health-related decisions.
          See our full{" "}
          <Link href="/disclaimer" className="underline hover:text-accent-dark">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
