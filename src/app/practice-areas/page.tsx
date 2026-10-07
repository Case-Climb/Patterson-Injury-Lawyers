import Link from "next/link";
import { site } from "@/config/site";
import { practiceCards } from "@/content/practice";
import { pageMetadata } from "@/lib/seo";
import { CardGrid, CheckList, CtaBand, GeneralInfoNote, ProcessTimeline } from "@/components/blocks";
import { PageHero } from "@/components/Hero";
import { Reveal } from "@/components/Motion";
import { Section, SectionHeading } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Personal Injury Practice Areas in Philadelphia",
  description:
    "Explore our personal injury practice areas in Philadelphia: car, truck and motorcycle accidents, slip and fall, dog bites and more. Call for a free consult.",
  path: "/practice-areas",
});

const howWeWork = [
  {
    title: "Tell us what happened",
    body: "Call any time for a free consultation. We listen first, then tell you plainly whether we think you have a claim.",
  },
  {
    title: "We build the case",
    body: "We collect the evidence, the medical records and the insurance details, and work out what the injury has really cost you.",
  },
  {
    title: "We work to resolve it",
    body: "We negotiate with the insurers and go to court when that is what it takes. No fee unless we recover for you.",
  },
];

const whyHire = [
  "Insurance companies have professionals working to limit what they pay. You should have one working for you.",
  "Evidence fades quickly. Video is recorded over, vehicles are repaired and witnesses become hard to find.",
  "Deadlines apply to injury claims in Pennsylvania, and some are shorter than people expect.",
  "A claim can include more than the first medical bill, such as future treatment and lost income.",
  "It costs nothing to find out where you stand. The consultation is free.",
];

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        title="Personal Injury Practice Areas in Philadelphia"
        lead="Eight kinds of cases, one focus: helping injured people in Philadelphia and the surrounding counties."
        crumbs={[{ name: "Practice Areas", path: "/practice-areas" }]}
      />

      <Section labelledBy="hub-intro-title">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <SectionHeading id="hub-intro-title" title="Personal injury is all we do" />
          </Reveal>
          <Reveal delay={0.08} className="prose-pil max-w-[42rem] text-lg leading-relaxed">
            <p>
              {site.name} represents people in Philadelphia and the surrounding counties who were hurt because a
              driver, a company or a property owner did not take reasonable care.
            </p>
            <p>
              Every type of case below has its own rules. A crash on the Schuylkill raises questions about limited
              tort and full tort. A fall in a store turns on what the owner knew and when. A truck case depends on
              records the carrier controls. A work injury may involve workers' compensation and a separate claim
              against a third party. Knowing those differences, and how insurance companies use them, is the job.
            </p>
            <p>
              Whatever happened, the first step is the same: a free consultation, available 24/7, with no upfront
              fees and no fee unless we recover for you. Choose the situation closest to yours to learn how these
              claims work, what evidence matters and how we can help. If you do not see your situation here,{" "}
              <Link href="/contact">call us anyway</Link>. We will tell you plainly whether it is something we can
              take on.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper" labelledBy="hub-grid-title">
        <Reveal>
          <SectionHeading id="hub-grid-title" title="Cases we handle" />
        </Reveal>
        <div className="mt-10">
          <CardGrid items={practiceCards} />
        </div>
      </Section>

      <Section tone="navy" labelledBy="hub-how-title">
        <Reveal>
          <SectionHeading id="hub-how-title" title="How we work" />
        </Reveal>
        <div className="mt-12">
          <ProcessTimeline steps={howWeWork} onDark />
        </div>
      </Section>

      <Section labelledBy="hub-why-title">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              id="hub-why-title"
              title="Why hire a personal injury lawyer?"
              lead={
                <>
                  You are not required to. Here is what changes when you do. Learn more about{" "}
                  <Link href="/attorney" className="prose-link">
                    attorney Derek M. Patterson
                  </Link>{" "}
                  or read our{" "}
                  <Link href="/faq" className="prose-link">
                    answers to common questions
                  </Link>
                  .
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.08}>
            <CheckList items={whyHire} />
            <GeneralInfoNote className="mt-10" />
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
