import Link from "next/link";

export default function AffiliateBox({
  productName,
  productUrl,
  size,
}: {
  productName: string;
  productUrl: string;
  size?: string;
}) {
  return (
    <div className="mt-8 rounded-lg border border-gray-200 border-l-[3px] border-l-accent bg-gray-50/50 px-5 py-4 md:px-6 md:py-5">
      <p className="text-[10px] font-medium uppercase tracking-widest text-navy/30">
        Verified Source
      </p>
      <p className="mt-2 text-sm font-medium text-navy">
        Ascension Peptides
        {size && (
          <span className="ml-2 text-navy/40">{size}</span>
        )}
      </p>
      <p className="mt-0.5 text-xs text-navy/45">
        COA-verified &middot; MZ Biolabs &middot; US domestic
      </p>
      <p className="mt-3 text-xs text-navy/60">
        Use code{" "}
        <code className="rounded bg-navy/5 px-1.5 py-0.5 text-[11px] font-semibold text-navy/70">
          BIOHACKING
        </code>{" "}
        for 50% off your first order
      </p>
      <a
        href={productUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block rounded-md border border-accent px-4 py-1.5 text-xs font-semibold text-accent-dark transition-colors hover:bg-accent hover:text-white"
      >
        Shop {productName} &rarr;
      </a>
      <p className="mt-3 text-[10px] text-navy/30">
        We only recommend vendors that pass our COA standard.{" "}
        <Link
          href="/best-peptide-sources"
          className="underline underline-offset-2 hover:text-navy/50"
        >
          How we vet &rarr;
        </Link>
      </p>
    </div>
  );
}
