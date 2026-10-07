import Link from "next/link";
import { site } from "@/config/site";
import { allFaqs, faqGroups } from "@/content/faqs";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { CtaBand, GeneralInfoNote } from "@/components/blocks";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Motion";
import { Section } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Personal Injury FAQ, Philadelphia",
  description:
    "Personal injury FAQ for Philadelphia: costs, what to do after an accident, timelines and more. Still have questions? Call us 24/7 for a free consultation.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />
      <PageHero
        title="Personal Injury FAQ, Philadelphia"
        lead="Straight answers to the questions injured people ask us most."
        crumbs={[{ name: "FAQ", path: "/faq" }]}
        cta={false}
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
          <Reveal>
            <nav aria-label="FAQ topics" className="lg:sticky lg:top-28">
              <h2 className="font-sans text-sm font-semibold tracking-wide text-ink">Topics</h2>
              <ul className="mt-4 flex flex-wrap gap-2.5 lg:flex-col lg:gap-1">
                {faqGroups.map((group) => (
                  <li key={group.id}>
                    <a
                      href={`#${group.id}`}
                      className="inline-flex min-h-11 items-center rounded-full border border-navy/20 px-4 text-[0.95rem] font-semibold text-navy hover:border-navy lg:border-0 lg:px-0 lg:hover:text-accent-ink"
                    >
                      {group.title}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-8 hidden text-[0.95rem] leading-relaxed lg:block">
                Can't find your question? Call{" "}
                <a href={`tel:${site.phone.tel}`} className="prose-link whitespace-nowrap">
                  {site.phone.display}
                </a>{" "}
                or email{" "}
                <a href={`mailto:${site.email}`} className="prose-link break-all">
                  {site.email}
                </a>
                .
              </p>
            </nav>
          </Reveal>

          <div className="space-y-16">
            {faqGroups.map((group) => (
              <Reveal key={group.id}>
                <section aria-labelledby={`${group.id}-title`} id={group.id}>
                  <h2 id={`${group.id}-title`} className="text-[clamp(1.8rem,1.2rem+1.8vw,2.4rem)]">
                    {group.title}
                  </h2>
                  <div className="mt-6">
                    <FaqAccordion faqs={group.faqs} defaultOpen={null} />
                  </div>
                </section>
              </Reveal>
            ))}

            <Reveal>
              <GeneralInfoNote />
              <p className="mt-6">
                For more detail, see our{" "}
                <Link href="/practice-areas" className="prose-link">
                  practice areas
                </Link>
                , read the{" "}
                <Link href="/blog" className="prose-link">
                  blog
                </Link>{" "}
                or{" "}
                <Link href="/contact" className="prose-link">
                  send us your question
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand title="Still have a question? Ask us." />
    </>
  );
}
