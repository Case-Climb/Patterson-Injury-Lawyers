"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { CONSENT_STORAGE_KEY as STORAGE_KEY } from "@/lib/consent";
import { buttonClass } from "@/components/ui";

/**
 * Cookie consent.
 *
 * Non-essential (analytics) storage is DENIED by default: the GA4 tag in
 * src/app/layout.tsx starts with Google Consent Mode set to "denied" and only
 * this banner's Accept button switches analytics_storage to "granted".
 * The choice is remembered in localStorage (key in src/lib/consent.ts). The
 * inline script in layout.tsx reads the same key on later visits.
 */

type Choice = "granted" | "denied" | "unset";

const listeners = new Set<() => void>();
/** Fallback for browsers that block localStorage, so the banner can still be dismissed. */
let memoryChoice: Choice = "unset";

function readChoice(): Choice {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "granted" || stored === "denied") return stored;
  } catch {
    /* storage blocked */
  }
  return memoryChoice;
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function applyChoice(choice: Choice) {
  memoryChoice = choice;
  try {
    if (choice === "unset") window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    /* storage blocked */
  }
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("consent", "update", { analytics_storage: choice === "granted" ? "granted" : "denied" });
  listeners.forEach((listener) => listener());
}

export function CookieConsent() {
  // "pending" on the server and during hydration, so nothing renders until the stored choice is known.
  const choice = useSyncExternalStore<Choice | "pending">(subscribe, readChoice, () => "pending");
  if (choice !== "unset") return null;

  return (
    <section
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-20 z-[60] rounded-3xl border border-line bg-white p-5 shadow-[0_24px_60px_-18px_rgb(21_22_59/0.55)] sm:inset-x-auto sm:bottom-24 sm:right-6 sm:max-w-md sm:p-6"
    >
      <h2 className="font-sans text-base font-semibold tracking-normal text-ink">Cookies on this site</h2>
      <p className="mt-2 text-[0.925rem] leading-relaxed">
        We use essential cookies to run this site. With your permission we also use analytics cookies to see how
        visitors use it. Analytics stay off unless you accept. Read our{" "}
        <Link href="/privacy-policy" className="prose-link">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2.5 min-[380px]:flex-row">
        <button type="button" onClick={() => applyChoice("denied")} className={buttonClass("outline-dark", "md", "flex-1")}>
          Decline
        </button>
        <button type="button" onClick={() => applyChoice("granted")} className={buttonClass("primary", "md", "flex-1")}>
          Accept analytics
        </button>
      </div>
    </section>
  );
}

/** Footer control that reopens the banner so a visitor can change their choice. */
export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={() => applyChoice("unset")} className={className}>
      Cookie preferences
    </button>
  );
}
