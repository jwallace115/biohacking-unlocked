import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get in Touch — Contact Biohacking Unlocked",
  description:
    "Have a question about the research, a factual correction, or a vendor tip? Contact Scott Williams at Biohacking Unlocked.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Get in Touch
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        If you have a question about the research, a factual correction, or a
        vendor tip — I want to hear it. Corrections especially. If something on
        this site is wrong, that matters.
      </p>

      <ContactForm />
    </article>
  );
}
