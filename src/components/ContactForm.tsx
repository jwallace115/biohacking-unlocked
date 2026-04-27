"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xzdylevv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-8 rounded-lg border border-accent/30 bg-accent/5 p-6">
        <p className="font-medium text-navy">Message received.</p>
        <p className="mt-1 text-sm text-navy/60">
          I&apos;ll get back to you if a response is needed.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <input
        type="hidden"
        name="_subject"
        value="Biohacking Unlocked Contact Form"
      />

      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-navy"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-navy"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>

      <div>
        <label
          htmlFor="reason"
          className="mb-1.5 block text-sm font-medium text-navy"
        >
          Reason
        </label>
        <select
          id="reason"
          name="reason"
          required
          defaultValue=""
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-navy focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          <option value="" disabled>
            Select a reason
          </option>
          <option value="Question about research">
            Question about research
          </option>
          <option value="Factual correction">Factual correction</option>
          <option value="Vendor tip">Vendor tip</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-navy"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Your message..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Try again or email directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
