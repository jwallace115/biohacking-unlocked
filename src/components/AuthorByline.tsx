import Link from "next/link";

export default function AuthorByline() {
  return (
    <p className="mt-2 text-xs text-navy/40">
      By{" "}
      <Link
        href="/about"
        className="font-medium text-navy/50 underline underline-offset-2 hover:text-navy/70"
      >
        Scott Williams
      </Link>
      <span className="mx-1.5">&middot;</span>
      Firefighter/Paramedic &middot; 25+ Years
    </p>
  );
}
