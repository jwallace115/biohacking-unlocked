"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie_notice_dismissed") !== "1") {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    localStorage.setItem("cookie_notice_dismissed", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <p className="text-xs text-white/70">
          This site uses cookies for analytics only. No advertising cookies.{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-2 hover:text-white"
          >
            Privacy Policy
          </Link>
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 rounded-md bg-accent px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
