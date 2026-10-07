import Link from "next/link";
import { ArrowRight, MapPin, Scale, Search, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";
import { homeFaqs } from "@/content/faqs";
import { practiceCards } from "@/content/practice";
import { areaLinks } from "@/lib/routes";
import { legalServiceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import {
  CardGrid,
  CtaBand,
  FaqSection,
  ProcessTimeline,
} from "@/components/blocks";
import { HomeHero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { AccentRule, ButtonLink, CallButton, Section, SectionHeading } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Philadelphia Personal Injury Lawyer",
  description:
    "Philly's Favorite Personal Injury Firm. Free consultation, no upfront fees and no fee unless we recover for you. Call Patterson Injury Lawyers 24/7 today.",
  path: "/",
});

const approach = [
  {
    icon: Search,
    title: "We investigate thoroughly",
    body: "We collect the police reports, photos, video, witness statements and medical records that show what happened and what it has cost you.",
  },
  {
    icon: ShieldCheck,
    title: "We handle the insurance companies",
    body: "Adjusters are trained to pay as little as they can. We take over the calls, the paperwork and the negotiation so you can focus on healing.",
  },
  {
    icon: Scale,
    title: "We pursue the case until you are compensated",
    body: "We advocate for our clients' rights and will not hesitate to take legal action until they receive the compensation they deserve.",
  },
];

const howItWorks = [
  {
    title: "Free Consultation",
    body: "Call 24/7 or send us a message. We listen, answer your questions and tell you whether we think you have a case.",
  },
  {
    title: "We Investigate & Build Your Case",
    body: "We gather the evidence, the records and the insurance information, and document what the injury has cost you.",
  },
  {
    title: "We Negotiate / Litigate",
    body: "We deal with the insurers and negotiate for you. If they will not be fair, we take the case to court.",
  },
  {
    title: "You Get Paid",
    body: "Your compensation is what we are working toward. There is no fee unless we recover for you.",
  },
];

const afterAccident = [
  {
    title: "Collect information from everyone involved",
    body: "Driver's license, insurance and contact details for every party, plus names of witnesses.",
  },
  {
    title: "Photograph the scene",
    body: "The vehicles, the road, the surroundings and anything else that shows how it happened.",
  },
  {
    title: "In a slip and fall, photograph the hazard",
    body: "Capture the dangerous condition that caused the fall before it is cleaned up or repaired.",
  },
  {
    title: "Get medical attention right away",
    body: "Even if you feel okay. Some injuries take hours or days to show.",
  },
  {
    title: `Call ${site.name}`,
    body: `We are available 24/7 at ${site.phone.display} to help you work out what comes next.`,
  },
];

const areaBlurbs: Record<string, string> = {
  "/philadelphia":
    "Our office is at 1650 Market Street in Center City. We represent clients in every neighborhood, from West Philadelphia to the Northeast.",
  "/montgomery-county":
    "Norristown, King of Prussia, Conshohocken, Cheltenham and the communities in between.",
  "/delaware-county": "Upper Darby, Chester, Media and towns throughout Delco.",
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={legalServiceSchema()} />
      <HomeHero />

      {/* "Get the PIL" intro */}
      <Section labelledBy="intro-title">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <Reveal>
            <h2 id="intro-title" className="text-[clamp(2.75rem,1.6rem+4.6vw,5rem)] leading-none">
              Get the PIL
            </h2>
            <AccentRule className="mt-6" />
            <p className="mt-6 max-w-sm text-2xl font-medium leading-snug tracking-tight text-ink">
              A personal injury firm from Philadelphia, for Philadelphia.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="prose-pil max-w-[40rem] text-lg leading-relaxed">
            <p>
              {site.name}, known around the city as the PIL, is a personal injury law firm serving Philadelphia and
              the surrounding counties. We do one thing: help people who were hurt because someone else was careless.
            </p>
            <p>
              The firm is led by <Link href="/attorney">Derek M. Patterson</Link>, who was born and raised in West
              Philadelphia and has worked on both sides of injury claims, for plaintiff firms and for an insurance
              defense firm. He knows how insurers think, and he uses that knowledge for the people they would rather
              not pay.
            </p>
            <p>
              We are a client-centric firm. You get straight answers in plain English, a phone line that is answered
              24/7 and no upfront fees. We are not paid unless we recover for you. When you are hurt and the adjusters
              start calling, you need someone to take it from here. Get the PIL.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Practice area cards */}
      <Section tone="paper" labelledBy="practice-title">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="practice-title"
            title="What we handle"
            lead="Personal injury is all we do. Choose the situation closest to yours."
          />
          <Link href="/practice-areas" className="prose-link inline-flex shrink-0 items-center gap-2">
            All practice areas <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
        <div className="mt-10">
          <CardGrid items={practiceCards} />
        </div>
      </Section>

      {/* Comprehensive approach */}
      <Section labelledBy="approach-title">
        <Reveal>
          <SectionHeading
            id="approach-title"
            title="A Comprehensive Approach to Compensation"
            lead="A fair result does not happen by accident. It comes from doing three things well."
          />
        </Reveal>
        <Stagger className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {approach.map((item) => (
            <StaggerItem key={item.title} className="border-t-2 border-navy pt-6">
              <item.icon aria-hidden="true" className="size-8 text-accent-ink" strokeWidth={1.6} />
              <h3 className="mt-5 text-2xl">{item.title}</h3>
              <p className="mt-3">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Meet Derek */}
      <Section tone="navy" labelledBy="derek-title">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <Reveal>
            <h2 id="derek-title" className="text-[clamp(2rem,1.2rem+2.8vw,3.25rem)]">
              Meet Derek M. Patterson
            </h2>
            <AccentRule className="mt-6" />
            <p className="mt-6 max-w-sm text-2xl font-medium leading-snug tracking-tight text-white">
              Attorney and CEO. Born and raised in West Philadelphia.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="max-w-xl space-y-4 text-lg leading-relaxed text-white/85">
              <p>
                Derek was born and raised in West Philadelphia, where his family taught him to strive for excellence
                in everything he does. Inspired by his grandfather, he set out to become a trial attorney.
              </p>
              <p>
                He has worked at several highly regarded plaintiff firms in Philadelphia and at a respected insurance
                defense firm, so he understands how both sides approach a claim. Today he leads {site.name} with a
                simple philosophy: the client comes first.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/attorney" variant="outline-light" size="lg">
                Read Derek's story <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* How it works */}
      <Section tone="paper" labelledBy="how-title">
        <Reveal>
          <SectionHeading
            id="how-title"
            title="How it works"
            lead="Four steps, and you can start the first one right now."
          />
        </Reveal>
        <div className="mt-12">
          <ProcessTimeline steps={howItWorks} />
        </div>
      </Section>

      {/* What to do after an accident */}
      <Section tone="navy" labelledBy="after-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <h2 id="after-title" className="text-[clamp(2rem,1.2rem+2.8vw,3.25rem)]">
              What to do after an accident
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed">
              The first hours matter. These five steps protect your health and your claim.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <CallButton size="lg" className="self-start" />
              <Link href="/blog/what-to-do-after-a-car-accident-in-philadelphia" className="prose-link self-start">
                Read the full guide for car accidents
              </Link>
            </div>
          </Reveal>
          <Stagger as="ol" className="divide-y divide-white/12 border-y border-white/12">
            {afterAccident.map((step, i) => (
              <StaggerItem as="li" key={step.title} className="flex gap-5 py-5 sm:gap-7">
                <span className="mt-0.5 inline-flex h-9 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-base font-semibold text-navy-ink">
                  <span className="sr-only">Step </span>
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl">{step.title}</h3>
                  <p className="mt-1.5">{step.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Areas served */}
      <Section tone="paper" labelledBy="areas-title">
        <Reveal>
          <SectionHeading
            id="areas-title"
            title="Areas we serve"
            lead="Based in Center City, serving Philadelphia and the surrounding counties."
          />
        </Reveal>
        <Stagger as="ul" className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {areaLinks.map((area) => (
            <StaggerItem as="li" key={area.href} className="h-full">
              <Link
                href={area.href}
                className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_24px_50px_-28px_rgb(30_31_82/0.55)]"
              >
                <MapPin aria-hidden="true" className="size-7 text-accent-ink" strokeWidth={1.7} />
                <h3 className="mt-4 text-2xl">{area.label}</h3>
                <p className="mt-2.5 flex-1 text-[0.975rem] leading-relaxed">{areaBlurbs[area.href]}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-accent-ink">
                  Personal injury lawyer in {area.label}
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8">
          <p className="max-w-4xl">
            <strong className="text-ink">Also serving:</strong> {site.neighborhoods.join(", ")}, {site.towns.join(", ")}{" "}
            and nearby communities.
          </p>
        </Reveal>
      </Section>

      {/* FAQ */}
      <FaqSection
        tone="white"
        title="Frequently asked questions"
        lead="The five questions we hear most."
        faqs={homeFaqs}
        footer={
          <Link href="/faq" className="prose-link inline-flex items-center gap-2">
            See all questions <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        }
      />

      <CtaBand />
    </>
  );
}
