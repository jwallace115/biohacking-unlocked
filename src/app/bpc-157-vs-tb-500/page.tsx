import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "BPC-157 vs TB-500 — Which Recovery Peptide Is Better?",
  description:
    "Head-to-head comparison of BPC-157 and TB-500. Research, mechanisms, stacking protocols, and which is right for your goals.",
};

export default function BPC157VsTB500Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        BPC-157 vs TB-500
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        Both BPC-157 and TB-500 are widely researched peptides used for tissue
        repair and recovery. This page breaks down how they differ, what the
        research says, and how to decide which one — or both — fits your goals.
      </p>

      {/* Overview */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Overview</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          BPC-157 (Body Protection Compound 157) is a synthetic peptide derived
          from a protein found in gastric juice. It has demonstrated strong
          regenerative and anti-inflammatory effects across a wide range of
          tissue types in preclinical studies. TB-500 is a synthetic version of
          Thymosin Beta-4, an endogenous protein that plays a critical role in
          actin regulation, cell migration, and systemic healing responses.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          While they both target recovery, their mechanisms differ considerably —
          making them complementary rather than direct substitutes for one
          another.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/peptides/bpc-157"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-accent hover:text-accent-dark"
          >
            BPC-157 Full Profile &rarr;
          </Link>
          <Link
            href="/peptides/tb-500"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-accent hover:text-accent-dark"
          >
            TB-500 Full Profile &rarr;
          </Link>
        </div>
      </section>

      {/* Mechanism of Action */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Mechanism of Action</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          BPC-157 works primarily by upregulating growth hormone receptors
          locally, promoting angiogenesis (the formation of new blood vessels),
          and modulating the nitric oxide system. It appears to act through
          several interconnected pathways and has shown particular benefit for
          gut, tendon, and muscle tissue. TB-500 exerts its effects largely by
          binding to actin — a structural protein in cells — and promoting cell
          migration and proliferation throughout the body, giving it a broader,
          more systemic reach.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">BPC-157</th>
                <th className="px-4 py-3">TB-500</th>
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

      {/* Research Comparison */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Research Comparison</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Both peptides have a robust body of preclinical animal research behind
          them. BPC-157 has been particularly well studied in rodent models of
          tendon, ligament, muscle, and gut injuries. TB-500 research has focused
          more on cardiac tissue, wound healing, and systemic anti-inflammatory
          effects. Neither peptide has completed large-scale randomized controlled
          trials in humans as of this writing.
        </p>
        <h3 className="mt-6 text-xl font-semibold text-navy">BPC-157 Research Highlights</h3>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder — key studies on tendon healing, gut repair, and
          neurological effects will be summarized here with linked citations.
        </p>
        <h3 className="mt-6 text-xl font-semibold text-navy">TB-500 Research Highlights</h3>
        <p className="mt-3 leading-relaxed text-navy/70">
          Placeholder — key studies on cardiac repair, wound healing, and
          systemic inflammation will be summarized here with linked citations.
        </p>
      </section>

      {/* Stacking */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Stacking BPC-157 &amp; TB-500</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Because BPC-157 and TB-500 operate through distinct pathways, many
          researchers and users combine them in a protocol sometimes called the
          "healing stack." The idea is that BPC-157 addresses local tissue repair
          while TB-500 promotes the broader cellular migration and systemic
          healing response needed for full recovery.
        </p>
        <h3 className="mt-6 text-xl font-semibold text-navy">Sample Protocol (Placeholder)</h3>
        <p className="mt-3 leading-relaxed text-navy/70">
          Specific dosing, frequency, and duration guidance will be added here.
          Always consult with a qualified healthcare provider before beginning
          any peptide protocol.
        </p>
      </section>

      {/* Which Should You Choose */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Which Should You Choose?</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          If your primary goal is localized healing — a specific joint, tendon,
          or gut-related issue — BPC-157 is often the starting point. If you are
          looking for broader systemic recovery support or have a more diffuse
          injury, TB-500 may be the better fit. For serious or chronic injuries,
          the stack of both is frequently cited in the research community.
        </p>
        <p className="mt-3 leading-relaxed text-navy/70">
          This content is for informational and educational purposes only and
          does not constitute medical advice. Neither peptide is FDA-approved
          for human therapeutic use.
        </p>
      </section>

      {/* Where to Buy */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-navy">Where to Buy</h2>
        <p className="mt-3 leading-relaxed text-navy/70">
          Quality matters significantly with research peptides. We maintain a
          vetted list of vendors who provide current, third-party Certificates
          of Analysis for every batch they sell.
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
