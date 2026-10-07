import Link from "next/link";
import { Landmark } from "lucide-react";
import { site } from "@/config/site";
import { practiceCards } from "@/content/practice";
import { localBusinessSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { CardGrid, CtaBand, GeneralInfoNote, MapEmbed, PhotoSlot } from "@/components/blocks";
import { OfficeDetails } from "@/components/blocks-office";
import { PageHero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Motion";
import { Section, SectionHeading } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Personal Injury Lawyer Philadelphia, PA",
  description:
    `Visit our personal injury lawyer in Philadelphia, PA at 1650 Market Street, Center City. Free consultation and no upfront fees. Call ${site.phone.display}, 24/7.`,
  path: "/philadelphia",
});

export default function PhiladelphiaPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <PageHero
        title="Personal Injury Lawyer in Philadelphia, PA"
        lead="Our office is in Center City, a few blocks from City Hall. Our clients come from every corner of the city."
        crumbs={[{ name: "Philadelphia", path: "/philadelphia" }]}
      />

      <Section labelledBy="philly-intro-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <h2 id="philly-intro-title" className="text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)]">
              A Philadelphia firm, through and through
            </h2>
            <div className="prose-pil mt-6 max-w-[42rem]">
              <p>
                Our office is in the heart of Center City, at {site.address.street}, {site.address.suite}, a few
                blocks west of City Hall. It is where we meet clients, prepare cases and, when it comes to that, get
                ready for court. Most people first reach us by phone, though, often from home or a hospital room, and
                that works just as well. The line is answered 24/7.
              </p>
              <p>
                {site.name} is a Philadelphia firm through and through. Attorney{" "}
                <Link href="/attorney">Derek M. Patterson</Link> was born and raised in West Philadelphia. He has
                worked at several highly regarded plaintiff firms here, as well as at a respected insurance defense
                firm, so he knows how injury claims in this city are built and how insurers evaluate them.
              </p>
              <p>
                We represent people injured anywhere in the city: a rear-end crash on Roosevelt Boulevard in
                Northeast Philadelphia, a fall on an icy sidewalk in Germantown, a pedestrian struck in a South
                Philadelphia crosswalk, a construction injury on a Center City job site. Wherever it happened, the
                terms are the same. The consultation is free, there are no upfront fees, and we are not paid unless
                we recover for you.
              </p>
              <p>If getting to the office is difficult, tell us. We will find a way to talk that works for you.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <OfficeDetails headingId="office-title" />
          </Reveal>
        </div>
      </Section>

      <Section tone="paper" labelledBy="map-title">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="map-title"
              title="Find us in Center City"
              lead={`${site.address.street} is on Market Street between 16th and 17th Streets, close to Suburban Station, City Hall and the Market-Frankford and Broad Street lines.`}
            />
            <div className="mt-8 overflow-hidden rounded-3xl">
              <PhotoSlot
                src={site.images.centerCity}
                alt="A Center City Philadelphia avenue at dusk, lined with office towers and looking toward City Hall"
                width={1600}
                height={1063}
                sizes="(min-width: 1024px) 28rem, 90vw"
                placeholderLabel="Center City street scene"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <MapEmbed />
          </Reveal>
        </div>
      </Section>

      <Section labelledBy="neighborhoods-title">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 id="neighborhoods-title" className="text-[clamp(1.7rem,1.2rem+1.6vw,2.25rem)]">
              Neighborhoods we serve
            </h2>
            <p className="mt-5">
              We represent clients across Philadelphia County. If you were hurt in the city, we can help, whichever
              neighborhood you call home.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {site.neighborhoods.map((name) => (
                <li
                  key={name}
                  className="rounded-full border border-navy/20 px-4 py-2 text-[0.95rem] font-medium text-ink"
                >
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-[clamp(1.7rem,1.2rem+1.6vw,2.25rem)]">Areas served beyond the city</h2>
            <p className="mt-5">
              From our Center City office we also represent injured people throughout{" "}
              <Link href="/montgomery-county" className="prose-link">
                Montgomery County
              </Link>{" "}
              and{" "}
              <Link href="/delaware-county" className="prose-link">
                Delaware County
              </Link>
              , and in Bucks County and Chester County, including Bensalem, Levittown, Doylestown and West Chester.
            </p>
            <p className="mt-4">
              You do not need to come into the city to get started. A phone call is enough, and it is free.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper" labelledBy="philly-practice-title">
        <Reveal>
          <SectionHeading
            id="philly-practice-title"
            title="Practice areas we handle in Philadelphia"
            lead="Every case type below is handled from this office."
          />
        </Reveal>
        <div className="mt-10">
          <CardGrid items={practiceCards} />
        </div>
      </Section>

      <Section labelledBy="court-title">
        <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
          <span className="inline-flex size-16 items-center justify-center rounded-full bg-navy text-accent">
            <Landmark aria-hidden="true" className="size-7" strokeWidth={1.6} />
          </span>
          <div className="max-w-3xl">
            <h2 id="court-title" className="text-[clamp(1.7rem,1.2rem+1.6vw,2.25rem)]">
              The Philadelphia Court of Common Pleas
            </h2>
            <div className="prose-pil mt-5">
              <p>
                Personal injury lawsuits filed in Philadelphia County are generally heard in the Philadelphia Court
                of Common Pleas, whose civil courtrooms are in City Hall at Broad and Market Streets, a short walk
                from our office.
              </p>
              <p>
                Many claims are resolved through negotiation and never reach a courtroom. Still, insurers pay
                attention to whether a firm is prepared to file suit and see a case through. We prepare every case
                with that in mind. Where a lawsuit can be filed depends on the facts, and we will explain your
                options when we talk. Have questions first? Our <Link href="/faq">FAQ page</Link> covers the basics.
              </p>
            </div>
            <GeneralInfoNote className="mt-8" />
          </div>
        </Reveal>
      </Section>

      <CtaBand title="Hurt in Philadelphia? Call the PIL." />
    </>
  );
}
