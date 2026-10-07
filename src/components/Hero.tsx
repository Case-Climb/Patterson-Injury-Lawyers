import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { AccentRule, ButtonLink, CallButton, CapsuleMotif, Container, cx } from "@/components/ui";

/**
 * Shared navy backdrop: gradient plus the skyline photo set in
 * `site.images.heroSkyline`. `large` is the full-screen homepage hero.
 */
function HeroBackdrop({ large = false }: { large?: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,var(--color-navy)_0%,var(--color-navy-deep)_62%,var(--color-navy-ink)_100%)]" />
      {site.images.heroSkyline ? (
        <>
          <Image
            src={site.images.heroSkyline}
            alt=""
            fill
            preload
            loading="eager"
            sizes="100vw"
            className={cx(
              "object-cover opacity-50 mix-blend-luminosity",
              large ? "object-[50%_100%]" : "object-[50%_74%]",
            )}
          />
          {/* Navy wash from the text side keeps the headline and buttons legible over the photo. */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(30_31_82/0.9)_0%,rgb(30_31_82/0.62)_45%,rgb(30_31_82/0.12)_100%)]" />
        </>
      ) : null}
      {/* The homepage hero shows the skyline photo on its own; inner-page heroes keep the capsule motif. */}
      {large ? null : (
        <CapsuleMotif className="absolute -right-[30%] top-[18%] w-[95%] -rotate-[32deg] opacity-[0.13] sm:-right-[14%] sm:w-[58%] lg:-right-[6%] lg:top-[8%] lg:w-[40%]" />
      )}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
    </div>
  );
}

/** Visible breadcrumb trail plus BreadcrumbList schema. `crumbs` excludes Home. */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-white/70">
          <li>
            <Link href="/" className="hover:text-white">
              Home
            </Link>
          </li>
          {crumbs.map((crumb, i) => {
            const last = i === crumbs.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-1.5">
                <ChevronRight aria-hidden="true" className="size-3.5 text-white/40" />
                {last ? (
                  <span aria-current="page" className="text-white">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.path} className="hover:text-white">
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

/** Navy hero used on every inner page: breadcrumbs, H1, accent rule, optional lead and CTAs. */
export function PageHero({
  title,
  lead,
  crumbs,
  cta = true,
  children,
}: {
  title: string;
  lead?: ReactNode;
  crumbs: Crumb[];
  /** Show the call + free case review buttons. */
  cta?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="on-dark relative isolate">
      <HeroBackdrop />
      <Container className="relative pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 xl:pt-36">
        <Breadcrumbs crumbs={crumbs} />
        <h1 className="mt-6 max-w-4xl text-[clamp(2.25rem,1.3rem+3.6vw,4rem)]">{title}</h1>
        <AccentRule className="mt-6" />
        {lead ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">{lead}</p> : null}
        {cta ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CallButton size="lg" />
            <ButtonLink href="/contact" variant="outline-light" size="lg">
              Get Your Free Case Review
            </ButtonLink>
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}

/** Full-screen homepage hero. */
export function HomeHero() {
  const trust = ["Available 24/7", "No Upfront Fees", "Serving Philadelphia & Surrounding Counties"];

  return (
    <section className="on-dark relative isolate flex min-h-svh flex-col">
      <HeroBackdrop large />
      <Container className="relative flex flex-1 flex-col justify-center pb-12 pt-28">
        {/* Height-aware size keeps the CTAs and trust strip above the fold on short laptop screens. */}
        <h1 className="max-w-[15ch] text-[clamp(2.75rem,min(1.2rem_+_6.4vw,11.5svh),5.75rem)] leading-[1.02]">
          Philadelphia Personal Injury Lawyer
        </h1>
        <AccentRule className="mt-7 w-24" />
        <p className="mt-7 max-w-xl text-xl leading-relaxed text-white/90 sm:text-2xl sm:leading-relaxed">
          {site.tagline}. Free consultation. No fee unless we recover for you.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <CallButton size="lg" />
          <ButtonLink href="/contact" variant="outline-light" size="lg">
            Get Your Free Case Review
          </ButtonLink>
        </div>
      </Container>

      <div className="relative border-t border-white/12 bg-navy-ink/35 backdrop-blur-sm">
        <Container>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 pb-20 pt-4 text-sm font-medium text-white sm:flex-nowrap sm:gap-0 sm:divide-x sm:divide-white/10 sm:py-0 sm:text-[0.95rem] max-md:sm:pb-20">
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-2.5 sm:gap-3 sm:px-7 sm:py-5 sm:first:pl-0">
                <span aria-hidden="true" className="h-1.5 w-4 shrink-0 rounded-full bg-accent sm:w-5" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
