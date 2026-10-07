"use client";

import Link from "next/link";
import { Phone, X } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { site } from "@/config/site";
import { buttonClass, cx } from "@/components/ui";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/**
 * Slim "Free Consultation" bar for desktop practice pages. Appears once the
 * visitor has scrolled past the hero and can be dismissed.
 */
export function StickyConsultBar() {
  const pastHero = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 640,
    () => false,
  );
  const [dismissed, setDismissed] = useState(false);
  const visible = pastHero && !dismissed;

  return (
    <aside
      aria-label="Free consultation"
      inert={!visible}
      className={cx(
        "on-dark fixed inset-x-0 bottom-0 z-40 hidden border-t border-white/10 bg-navy-ink/95 backdrop-blur transition-transform duration-300 ease-out-soft lg:block",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[76rem] items-center justify-between gap-6 pl-8 pr-28 min-[1500px]:pr-8">
        <p className="text-[0.95rem] text-white">
          <span className="font-semibold">Free consultation.</span> No upfront fees, and no fee unless we recover for
          you.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phone.tel}`}
            className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-white hover:text-accent"
          >
            <Phone aria-hidden="true" className="size-4 text-accent" strokeWidth={2.4} />
            {site.phone.display}
          </a>
          <Link href="/contact" className={buttonClass("primary", "md", "min-h-10 px-5 text-[0.9rem]")}>
            Free Case Review
          </Link>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="inline-flex size-9 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
          >
            <X aria-hidden="true" className="size-4" />
            <span className="sr-only">Dismiss free consultation bar</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
