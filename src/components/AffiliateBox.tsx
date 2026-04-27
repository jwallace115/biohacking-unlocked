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
    <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-navy/40">
        Where We Source This
      </p>
      <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="text-lg font-bold text-navy">Ascension Peptides</p>
        {size && (
          <span className="text-sm text-navy/50">{size}</span>
        )}
      </div>
      <p className="mt-1 text-sm text-navy/60">
        COA-verified &middot; MZ Biolabs tested
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-dark">
          Code: BIOHACKING
          <span className="text-accent-dark/60">&mdash; 50% off first order</span>
        </span>
      </div>
      <a
        href={productUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
      >
        Shop {productName} &rarr;
      </a>
      <p className="mt-3 text-[11px] text-navy/40">
        Affiliate link. We may earn a commission at no extra cost to you.
      </p>
    </div>
  );
}
