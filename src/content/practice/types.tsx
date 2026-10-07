import Link from "next/link";
import type { ReactNode } from "react";
import type { PracticeIcon, Step } from "@/components/blocks";
import type { Faq } from "@/lib/schema";

export type PracticeArea = {
  /** Site path, e.g. "/car-accidents/truck-accidents". */
  path: string;
  /** Short name for navigation, cards and breadcrumbs. */
  label: string;
  icon: PracticeIcon;
  /** Photo shown on the practice page and on its card. Path is relative to /public. */
  image: { src: string; alt: string };
  /** Primary keyword. Used as the H1 and in the <title>. */
  keyword: string;
  /** 150 to 160 characters. */
  metaDescription: string;
  /** One or two sentences for cards on the homepage and hub. */
  summary: string;
  heroLead: string;
  intro: { heading: string; body: ReactNode };
  handles: { heading: string; items: string[] };
  /** "Common injuries" on most pages; the heading can be changed where that framing does not fit. */
  injuries: { heading: string; lead?: string; items: string[] };
  /** Page-specific sections. */
  sections: { heading: string; body: ReactNode }[];
  steps: { heading: string; items: Step[] };
  faqHeading: string;
  faqs: Faq[];
  /** Paths of related practice pages. */
  related: string[];
  /** Path of the parent practice page, if any. */
  parent?: string;
  /** Paths of child practice pages, shown as cards. */
  children?: string[];
  cta?: { title: string; text?: string };
};

/** Inline link for running copy. */
export function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="prose-link">
      {children}
    </Link>
  );
}
