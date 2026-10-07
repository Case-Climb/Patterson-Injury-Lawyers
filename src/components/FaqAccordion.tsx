"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { Faq } from "@/lib/schema";
import { cx } from "@/components/ui";

/**
 * Accessible accordion. Each question is a real button with aria-expanded and
 * aria-controls; each answer is a labelled region. Answers stay in the DOM
 * when closed (so search engines can read them) and are made inert so they
 * are skipped by the keyboard and screen readers.
 */
export function FaqAccordion({
  faqs,
  defaultOpen = 0,
  headingLevel = "h3",
}: {
  faqs: Faq[];
  /** Index open on first render, or null for all closed. */
  defaultOpen?: number | null;
  headingLevel?: "h3" | "h4";
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();
  const Heading = headingLevel;

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-question-${i}`;
        const panelId = `${baseId}-answer-${i}`;
        return (
          <div key={faq.q}>
            <Heading className="font-sans text-base font-normal tracking-normal">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">{faq.q}</span>
                <span
                  aria-hidden="true"
                  className={cx(
                    "inline-flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
                    isOpen
                      ? "border-accent bg-accent text-navy-ink"
                      : "border-navy/25 text-navy group-hover:border-navy",
                  )}
                >
                  <ChevronDown className={cx("size-4 transition-transform duration-300", isOpen && "rotate-180")} />
                </span>
              </button>
            </Heading>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={cx(
                "grid transition-[grid-template-rows] duration-300 ease-out-soft",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 pr-4 sm:pr-14">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
