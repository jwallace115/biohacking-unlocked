import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "CJC-1295 vs Ipamorelin — Growth Hormone Peptide Comparison",
  description:
    "Compare CJC-1295 and Ipamorelin: mechanisms, benefits, side effects, and why they're often stacked together.",
};

export default function CJC1295VsIpamorelinPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        CJC-1295 vs Ipamorelin
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        CJC-1295 and Ipamorelin are two of the most frequently discussed
        growth hormone-releasing peptides. They act through different receptors
        but are often used together for a synergistic effect. Here is what the
        research says about each and how they compare.
      </p>

      {/* Overview */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Overview</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          CJC-1295 is a synthetic analog of growth hormone-releasing hormone
          (GHRH). It stimulates the pituitary gland to produce and release
          growth hormone by binding to GHRH receptors. The DAC (Drug Affinity
          Complex) version extends its half-life significantly, allowing for
          less frequent dosing. Ipamorelin is a growth hormone secretagogue
          that works via ghrelin receptors (GHS-R), triggering a sharp,
          pulse-like release of growth hormone with a high degree of
          selectivity and relatively few side effects.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/peptides/cjc-1295"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-accent hover:text-accent-dark"
          >
            CJC-1295 Full Profile &rarr;
          </Link>
          <Link
            href="/peptides/ipamorelin"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-accent hover:text-accent-dark"
          >
            Ipamorelin Full Profile &rarr;
          </Link>
        </div>
      </section>

      {/* How They Work */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">How They Work</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          The key distinction is receptor pathway. CJC-1295 acts on GHRH
          receptors, amplifying the body's baseline growth hormone output over
          an extended period. Ipamorelin acts on ghrelin receptors and triggers
          discrete, pulsatile GH release that more closely mirrors the body's
          natural secretion pattern. Using both simultaneously targets two
          different receptor systems, which is why the combination is considered
          synergistic.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">CJC-1295</th>
                <th className="px-4 py-3">Ipamorelin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-navy/70">Primary Use</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-navy/70">Research Level</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-navy/70">Administration</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
                <td className="px-4 py-3 text-navy/70">Placeholder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Benefits Comparison</h2>
        <h3 className="mt-6 text-xl font-semibold text-navy">CJC-1295 Benefits</h3>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder — documented benefits including increased lean muscle mass,
          improved fat metabolism, enhanced recovery, and potential anti-aging
          effects will be detailed here with supporting research citations.
        </p>
        <h3 className="mt-6 text-xl font-semibold text-navy">Ipamorelin Benefits</h3>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder — documented benefits including selective GH release,
          improved sleep quality, body composition improvements, and lower
          side-effect profile compared to older secretagogues will be detailed
          here with supporting research citations.
        </p>
      </section>

      {/* Side Effects */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Side Effects</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Both peptides are generally considered to have favorable safety
          profiles in the research literature when used appropriately. Common
          reported side effects across both compounds include transient water
          retention, mild flushing, and injection-site discomfort. CJC-1295
          with DAC has been associated with a longer-lasting GH bleed, which
          may increase the chance of side effects. Ipamorelin's selectivity
          means it does not significantly raise cortisol or prolactin, which
          distinguishes it from earlier generation GH secretagogues.
        </p>
        <h3 className="mt-6 text-xl font-semibold text-navy">Important Caveats</h3>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder — contraindications, long-term safety considerations, and
          population-specific notes will be added here. This page does not
          constitute medical advice.
        </p>
      </section>

      {/* The Stack */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">The CJC/Ipa Stack</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          The CJC-1295 + Ipamorelin stack is one of the most commonly discussed
          GH peptide protocols in the research community. By combining a GHRH
          analog with a GHRP, users aim to saturate both stimulatory pathways
          simultaneously. The result is a more robust and sustained GH pulse
          than either peptide can produce alone.
        </p>
        <h3 className="mt-6 text-xl font-semibold text-navy">Sample Protocol (Placeholder)</h3>
        <p className="mt-3 leading-relaxed text-navy/70">
          Specific dosing, injection timing, cycle length, and post-cycle
          considerations will be detailed here. Always work with a qualified
          healthcare provider before starting any peptide protocol.
        </p>
      </section>

      {/* Where to Buy */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Where to Buy</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Sourcing from vendors who publish current, third-party Certificates
          of Analysis is essential for both safety and efficacy. We have
          reviewed and listed the best options below.
        </p>
        <Link
          href="/best-peptide-sources"
          className="mt-4 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          View Best Peptide Sources &rarr;
        </Link>
      </section>

      <div className="mt-16">
        <AffiliateDisclosure />
      </div>
    </div>
  );
}
