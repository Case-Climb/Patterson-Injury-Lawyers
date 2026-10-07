import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { AccentRule, ButtonLink, CallButton, CapsuleMotif, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: `Page Not Found | ${site.name}` },
  robots: { index: false, follow: true },
};

const helpful = [
  { label: "Practice areas", href: "/practice-areas" },
  { label: "Attorney", href: "/attorney" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="on-dark relative isolate flex min-h-[80svh] items-center overflow-hidden bg-[linear-gradient(160deg,var(--color-navy)_0%,var(--color-navy-deep)_62%,var(--color-navy-ink)_100%)]">
      <CapsuleMotif className="pointer-events-none absolute -right-[20%] top-[18%] w-[80%] -rotate-[32deg] opacity-[0.12] lg:w-[48%]" />
      <Container className="relative py-36">
        <p className="text-sm font-semibold text-accent">Error 404</p>
        <h1 className="mt-4 max-w-3xl text-[clamp(2.25rem,1.3rem+3.6vw,4rem)]">This page could not be found</h1>
        <AccentRule className="mt-6" />
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          The link may be out of date or the address may have a typo. The pages below will get you back on track, or
          you can call us any time.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="/" size="lg">
            Go to the homepage
          </ButtonLink>
          <CallButton size="lg" variant="outline-light" />
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {helpful.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="prose-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
