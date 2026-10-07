import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark } from "lucide-react";
import type { CountyPage } from "@/content/locations";
import { practiceLinks } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { CtaBand, GeneralInfoNote, RelatedLinks } from "@/components/blocks";
import { OfficeDetails } from "@/components/blocks-office";
import { PageHero } from "@/components/Hero";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { Section, SectionHeading } from "@/components/ui";

export function countyMetadata(county: CountyPage): Metadata {
  return pageMetadata({ title: county.keyword, description: county.metaDescription, path: county.path });
}

/** Shared layout for the Montgomery County and Delaware County pages. */
export function CountyTemplate({ county }: { county: CountyPage }) {
  return (
    <>
      <PageHero title={county.keyword} lead={county.heroLead} crumbs={[{ name: county.label, path: county.path }]} />

      <Section labelledBy="county-intro-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <h2 id="county-intro-title" className="text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)]">
              {county.intro.heading}
            </h2>
            <div className="prose-pil mt-6 max-w-[42rem]">{county.intro.body}</div>
          </Reveal>
          <Reveal delay={0.08}>
            <aside aria-labelledby="towns-title" className="rounded-3xl bg-paper p-7 sm:p-9">
              <h2 id="towns-title" className="text-2xl sm:text-[1.75rem]">
                {county.towns.heading}
              </h2>
              <p className="mt-3">{county.towns.lead}</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {county.towns.items.map((town) => (
                  <li
                    key={town}
                    className="rounded-full border border-navy/20 bg-white px-4 py-2 text-[0.95rem] font-medium text-ink"
                  >
                    {town}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper" labelledBy="situations-title">
        <Reveal>
          <SectionHeading id="situations-title" title={county.situations.heading} lead={county.situations.lead} />
        </Reveal>
        <Stagger as="ul" className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {county.situations.items.map((item) => (
            <StaggerItem as="li" key={item.title} className="border-t-2 border-navy pt-5">
              <h3 className="text-xl sm:text-[1.4rem]">{item.title}</h3>
              <p className="mt-2.5 text-[0.975rem] leading-relaxed">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section labelledBy="county-court-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-navy text-accent">
              <Landmark aria-hidden="true" className="size-6" strokeWidth={1.6} />
            </span>
            <h2 id="county-court-title" className="mt-6 text-[clamp(1.7rem,1.2rem+1.6vw,2.25rem)]">
              {county.courthouse.heading}
            </h2>
            <div className="prose-pil mt-5 max-w-[42rem]">{county.courthouse.body}</div>
            <GeneralInfoNote className="mt-8" />
          </Reveal>
          <Reveal delay={0.08}>
            <OfficeDetails headingId="county-office-title" title="Our Philadelphia office" />
            <Link href="/philadelphia" className="prose-link mt-5 inline-flex items-center gap-2">
              About our Philadelphia office <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper">
        <Reveal>
          <RelatedLinks
            title={`Cases we handle in ${county.label}`}
            links={[...practiceLinks, { label: "All practice areas", href: "/practice-areas" }]}
          />
        </Reveal>
      </Section>

      <CtaBand title={county.cta} />
    </>
  );
}
