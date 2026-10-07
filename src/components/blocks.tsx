import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Car,
  Check,
  Dog,
  Footprints,
  HardHat,
  HeartHandshake,
  ImageIcon,
  TriangleAlert,
  Truck,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { fullAddress, site } from "@/config/site";
import { faqSchema, type Faq } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { ButtonLink, CallButton, CapsuleMotif, Container, Section, SectionHeading, cx } from "@/components/ui";

/* -------------------------------------------------------------------------- */
/* CTA band                                                                    */
/* -------------------------------------------------------------------------- */

/** Full-width call to action. Sits directly above the footer on every page. */
export function CtaBand({
  title = "Injured? Don't wait.",
  text,
}: {
  title?: string;
  text?: ReactNode;
}) {
  return (
    <section aria-labelledby="cta-band-title" className="on-dark relative isolate overflow-hidden bg-navy">
      <CapsuleMotif
        className="pointer-events-none absolute -bottom-[55%] -left-[18%] w-[70%] rotate-[18deg] opacity-[0.1] sm:w-[46%]"
      />
      <Container className="relative py-16 sm:py-20">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="cta-band-title" className="text-[clamp(2rem,1.2rem+2.8vw,3.25rem)]">
              {title}
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-white/90">
              {text ?? (
                <>
                  Call{" "}
                  <a href={`tel:${site.phone.tel}`} className="font-semibold text-white underline decoration-accent decoration-2 underline-offset-4">
                    {site.phone.display}
                  </a>
                  , 24/7. The consultation is free, and there is no fee unless we recover for you.
                </>
              )}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <CallButton size="lg" />
            <ButtonLink href="/contact" variant="outline-light" size="lg">
              Get Your Free Case Review
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ section (accordion + FAQPage schema)                                    */
/* -------------------------------------------------------------------------- */

export function FaqSection({
  id = "faq",
  title,
  lead,
  faqs,
  tone = "paper",
  footer,
}: {
  id?: string;
  title: string;
  lead?: ReactNode;
  faqs: Faq[];
  tone?: "white" | "paper";
  footer?: ReactNode;
}) {
  return (
    <Section tone={tone} labelledBy={`${id}-title`} id={id}>
      <JsonLd data={faqSchema(faqs)} />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
        <Reveal>
          <SectionHeading id={`${id}-title`} title={title} lead={lead} />
          {footer ? <div className="mt-6">{footer}</div> : null}
        </Reveal>
        <Reveal delay={0.05}>
          <FaqAccordion faqs={faqs} />
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Process timeline                                                            */
/* -------------------------------------------------------------------------- */

export type Step = { title: string; body: string };

/** Numbered steps. Markers are capsules, echoing the logo mark. */
export function ProcessTimeline({ steps, onDark = false }: { steps: Step[]; onDark?: boolean }) {
  return (
    <Stagger
      as="ol"
      className={cx(
        "grid grid-cols-1 gap-x-8 gap-y-10",
        steps.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3",
      )}
    >
      {steps.map((step, i) => (
        <StaggerItem as="li" key={step.title} className="relative">
          <div className="flex items-center gap-4">
            <span
              className={cx(
                "inline-flex h-9 w-16 shrink-0 items-center justify-center rounded-full text-base font-semibold",
                onDark ? "bg-accent text-navy-ink" : "bg-navy text-white",
              )}
            >
              <span className="sr-only">Step </span>
              {i + 1}
            </span>
            <span aria-hidden="true" className={cx("h-px flex-1", onDark ? "bg-white/20" : "bg-navy/15")} />
          </div>
          <h3 className="mt-5 text-2xl">{step.title}</h3>
          <p className="mt-3">{step.body}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/* -------------------------------------------------------------------------- */
/* Practice area cards                                                         */
/* -------------------------------------------------------------------------- */

export type PracticeIcon =
  | "car"
  | "truck"
  | "motorcycle"
  | "pedestrian"
  | "slip"
  | "dog"
  | "work"
  | "wrongful-death";

const practiceIcons: Record<PracticeIcon, LucideIcon> = {
  car: Car,
  truck: Truck,
  motorcycle: Bike,
  pedestrian: Footprints,
  slip: TriangleAlert,
  dog: Dog,
  work: HardHat,
  "wrongful-death": HeartHandshake,
};

export type CardItem = {
  title: string;
  text: string;
  href: string;
  icon: PracticeIcon;
  image?: { src: string; alt: string };
};

/** Linked card grid used for practice areas on the homepage, hub and parent pages. */
export function CardGrid({ items, columns = 4 }: { items: CardItem[]; columns?: 3 | 4 }) {
  return (
    <Stagger
      as="ul"
      className={cx("grid grid-cols-1 gap-5 sm:grid-cols-2", columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}
    >
      {items.map((item) => {
        const Icon = practiceIcons[item.icon];
        return (
          <StaggerItem as="li" key={item.href} className="h-full">
            <Link
              href={item.href}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_24px_50px_-28px_rgb(30_31_82/0.55)]"
            >
              {item.image ? (
                <div className="relative aspect-[3/2] overflow-hidden bg-navy">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    loading="lazy"
                    sizes={
                      columns === 4
                        ? "(min-width: 1024px) 18rem, (min-width: 640px) 46vw, 92vw"
                        : "(min-width: 1024px) 24rem, (min-width: 640px) 46vw, 92vw"
                    }
                    className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.04]"
                  />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-6">
                {/* With a photo, the icon capsule straddles the edge between photo and text. */}
                <span
                  className={cx(
                    "relative inline-flex h-11 w-[4.25rem] items-center justify-center rounded-full bg-navy text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-navy-ink",
                    item.image && "-mt-[2.875rem] ring-4 ring-white",
                  )}
                >
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 text-xl">{item.title}</h3>
                <p className="mt-2.5 flex-1 text-[0.975rem] leading-relaxed">{item.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-accent-ink">
                  Learn more
                  <span className="sr-only"> about {item.title}</span>
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

/* -------------------------------------------------------------------------- */
/* Check list                                                                  */
/* -------------------------------------------------------------------------- */

export function CheckList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={cx("grid grid-cols-1 gap-x-8 gap-y-3.5", columns === 2 && "sm:grid-cols-2")}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-navy-ink">
            <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------------------- */
/* Photos with graceful placeholders                                           */
/* -------------------------------------------------------------------------- */

/**
 * Renders the real photo when `src` is set in src/config/site.ts, otherwise a
 * clearly marked placeholder block at the same aspect ratio (so layout never
 * shifts when the photo is added). The placeholder still exposes the alt text.
 */
export function PhotoSlot({
  src,
  alt,
  width,
  height,
  sizes,
  placeholderLabel,
  className,
}: {
  src: string | null;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  placeholderLabel: string;
  className?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading="lazy"
        className={cx("h-full w-full object-cover", className)}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={alt}
      data-placeholder="photo"
      style={{ aspectRatio: `${width} / ${height}` }}
      className={cx(
        "flex w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(160deg,#35367d,#1e1f52)] px-6 text-center text-white/75",
        className,
      )}
    >
      <ImageIcon aria-hidden="true" className="size-8 text-accent" strokeWidth={1.5} />
      <p className="text-sm font-semibold text-white">Photo placeholder</p>
      <p className="max-w-[16rem] text-sm leading-snug">
        {placeholderLabel}
        <br />
        {width} × {height}px
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Map                                                                         */
/* -------------------------------------------------------------------------- */

export function MapEmbed({ className }: { className?: string }) {
  return (
    <div className={cx("overflow-hidden rounded-3xl border border-line bg-paper", className)}>
      <iframe
        src={site.mapsEmbedUrl}
        title={`Map showing ${site.name} at ${fullAddress}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block h-[22rem] w-full border-0 sm:h-[26rem]"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Small shared pieces                                                         */
/* -------------------------------------------------------------------------- */

/** Required note on pages that touch Pennsylvania law. */
export function GeneralInfoNote({ className }: { className?: string }) {
  return (
    <p className={cx("border-l-4 border-accent pl-4 text-[0.95rem] leading-relaxed", className)}>
      Every case is different. This page is general information, not legal advice.
    </p>
  );
}

/** Row of related internal links, shown near the end of a page. */
export function RelatedLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-navy/20 bg-white px-5 text-[0.95rem] font-semibold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
            >
              {link.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
