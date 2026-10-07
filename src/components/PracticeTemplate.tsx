import type { Metadata } from "next";
import Image from "next/image";
import { getPracticeArea, toCard, type PracticeArea } from "@/content/practice";
import { pageMetadata } from "@/lib/seo";
import type { Crumb } from "@/lib/schema";
import {
  CardGrid,
  CheckList,
  CtaBand,
  FaqSection,
  GeneralInfoNote,
  ProcessTimeline,
  RelatedLinks,
} from "@/components/blocks";
import { PageHero } from "@/components/Hero";
import { Reveal } from "@/components/Motion";
import { StickyConsultBar } from "@/components/StickyConsultBar";
import { Section, SectionHeading } from "@/components/ui";

export function practiceMetadata(area: PracticeArea): Metadata {
  return pageMetadata({ title: area.keyword, description: area.metaDescription, path: area.path });
}

/** One template for all eight practice area pages. Content lives in src/content/practice. */
export function PracticeTemplate({ area }: { area: PracticeArea }) {
  const parent = area.parent ? getPracticeArea(area.parent) : null;
  const crumbs: Crumb[] = [
    { name: "Practice Areas", path: "/practice-areas" },
    ...(parent ? [{ name: parent.label, path: parent.path }] : []),
    { name: area.label, path: area.path },
  ];

  const relatedLinks = [
    ...(parent ? [{ label: parent.label, href: parent.path }] : []),
    ...area.related.map((path) => {
      const related = getPracticeArea(path);
      return { label: related.label, href: related.path };
    }),
    { label: "All practice areas", href: "/practice-areas" },
  ];

  return (
    <>
      <PageHero title={area.keyword} lead={area.heroLead} crumbs={crumbs} />

      <Section labelledBy="intro-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
          <Reveal>
            <h2 id="intro-title" className="text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)]">
              {area.intro.heading}
            </h2>
            <div className="prose-pil mt-6 max-w-[42rem]">{area.intro.body}</div>
          </Reveal>
          <Reveal delay={0.08}>
            <Image
              src={area.image.src}
              alt={area.image.alt}
              width={1600}
              height={1063}
              loading="lazy"
              sizes="(min-width: 1024px) 30rem, 92vw"
              className="mb-6 w-full rounded-3xl"
            />
            <aside aria-labelledby="handles-title" className="rounded-3xl bg-paper p-7 sm:p-9">
              <h2 id="handles-title" className="text-2xl sm:text-[1.75rem]">
                {area.handles.heading}
              </h2>
              <div className="mt-6">
                <CheckList items={area.handles.items} />
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper" labelledBy="injuries-title">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <SectionHeading id="injuries-title" title={area.injuries.heading} lead={area.injuries.lead} />
          </Reveal>
          <Reveal delay={0.08} className="rounded-3xl border border-line bg-white p-7 sm:p-9">
            <CheckList items={area.injuries.items} columns={2} />
          </Reveal>
        </div>
      </Section>

      {area.children ? (
        <Section labelledBy="related-crashes-title" className="lg:pb-8">
          <Reveal>
            <SectionHeading
              id="related-crashes-title"
              title="Truck, motorcycle and pedestrian crashes"
              lead="Some crashes raise their own questions about evidence, insurance and fault. We cover each one in detail."
            />
          </Reveal>
          <div className="mt-10">
            <CardGrid items={area.children.map((path) => toCard(getPracticeArea(path)))} columns={3} />
          </div>
        </Section>
      ) : null}

      <Section>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          {area.sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 0.06}>
              <h2 className="text-[clamp(1.7rem,1.2rem+1.6vw,2.25rem)]">{section.heading}</h2>
              <div className="prose-pil mt-5">{section.body}</div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <GeneralInfoNote />
        </Reveal>
      </Section>

      <Section tone="navy" labelledBy="steps-title">
        <Reveal>
          <SectionHeading id="steps-title" title={area.steps.heading} />
        </Reveal>
        <div className="mt-12">
          <ProcessTimeline steps={area.steps.items} onDark />
        </div>
      </Section>

      <FaqSection
        title={area.faqHeading}
        lead="Short answers to what people ask us most. For anything else, call us any time."
        faqs={area.faqs}
      />

      <Section>
        <Reveal>
          <RelatedLinks title="Related practice areas" links={relatedLinks} />
        </Reveal>
      </Section>

      <CtaBand title={area.cta?.title} text={area.cta?.text} />
      <StickyConsultBar />
    </>
  );
}
