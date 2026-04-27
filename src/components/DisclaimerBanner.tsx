"use client";

import { useState } from "react";

export default function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-navy-light text-white text-center text-xs py-2 px-4 relative">
      <p>
        This site is for informational purposes only. We are not medical
        professionals. Adults only (18+).
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
        aria-label="Dismiss banner"
      >
        &times;
      </button>
    </div>
  );
}
