import Link from "next/link";
import type { ReactNode } from "react";
import { legalLinks } from "@/lib/routes";
import type { Crumb } from "@/lib/schema";
import { PageHero } from "@/components/Hero";
import { Container } from "@/components/ui";

/** Shared layout for the disclaimer, privacy policy and terms pages. */
export function LegalPage({
  title,
  crumb,
  updated,
  children,
}: {
  title: string;
  crumb: Crumb;
  /** Human-readable "last updated" date. */
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero title={title} crumbs={[crumb]} cta={false} lead={`Last updated ${updated}`} />
      <div className="bg-white py-14 sm:py-20">
        <Container>
          <article className="prose-pil mx-auto max-w-[44rem]">{children}</article>
          <nav aria-label="Legal pages" className="mx-auto mt-14 max-w-[44rem] border-t border-line pt-8">
            <h2 className="font-sans text-sm font-semibold tracking-wide text-ink">Related pages</h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks
                .filter((link) => link.href !== crumb.path)
                .map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="prose-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/contact" className="prose-link">
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </>
  );
}
