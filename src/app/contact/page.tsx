import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { fullAddress, site } from "@/config/site";
import { localBusinessSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { CheckList, MapEmbed } from "@/components/blocks";
import { HoursTable } from "@/components/blocks-office";
import { FormEmbed } from "@/components/FormEmbed";
import { PageHero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Motion";
import { ButtonLink, Section, SectionHeading, WhatsAppIcon, buttonClass } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Free Consultation, Philadelphia Injury Lawyer",
  description:
    `Request a free consultation with a Philadelphia injury lawyer. No upfront fees and no fee unless we recover. Call ${site.phone.display}, 24/7, or send a message.`,
  path: "/contact",
});

const reassurance = [
  "The consultation is free, whether or not you hire us.",
  "No upfront fees or out-of-pocket costs.",
  "We are not paid unless we recover for you.",
  "The phone line is answered 24/7.",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <PageHero
        title="Free Consultation, Philadelphia Injury Lawyer"
        lead="Tell us what happened. We will tell you where you stand, at no cost."
        crumbs={[{ name: "Contact", path: "/contact" }]}
        cta={false}
      />

      <Section tone="paper" labelledBy="form-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="form-title"
              title="Request your free case review"
              lead="Fill this in and our team will get back to you. If you would rather talk now, call us. Someone will pick up."
            />
            <div className="mt-8">
              <FormEmbed />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="space-y-6">
            <div className="on-dark rounded-3xl bg-navy p-7 sm:p-9">
              <h2 className="text-2xl sm:text-[1.75rem]">Call us, 24/7</h2>
              <div className="mt-6 flex flex-col gap-3">
                <a href={`tel:${site.phone.tel}`} className={buttonClass("primary", "lg", "w-full")}>
                  <Phone aria-hidden="true" className="size-5" strokeWidth={2.25} />
                  <span>
                    <span className="sr-only">Call the main office at </span>
                    {site.phone.display}
                  </span>
                </a>
                <a href={`tel:${site.tollFree.tel}`} className={buttonClass("outline-light", "lg", "w-full")}>
                  <Phone aria-hidden="true" className="size-5" strokeWidth={2.25} />
                  <span>Toll-free {site.tollFree.display}</span>
                </a>
              </div>

              <h3 className="mt-8 font-sans text-sm font-semibold tracking-wide text-white">Other ways to reach us</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 items-center gap-3 rounded-2xl border border-white/20 px-4 text-white hover:border-accent"
                  >
                    <WhatsAppIcon className="size-5 shrink-0 text-accent" />
                    <span>
                      Message us on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.cell.tel}`}
                    className="flex min-h-12 items-center gap-3 rounded-2xl border border-white/20 px-4 text-white hover:border-accent"
                  >
                    <Phone aria-hidden="true" className="size-5 shrink-0 text-accent" />
                    <span>Cell {site.cell.display}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex min-h-12 items-center gap-3 rounded-2xl border border-white/20 px-4 text-white hover:border-accent"
                  >
                    <Mail aria-hidden="true" className="size-5 shrink-0 text-accent" />
                    <span className="break-all">{site.email}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-line bg-white p-7 sm:p-9">
              <h2 className="text-2xl">Free consultation, no upfront fees</h2>
              <div className="mt-5">
                <CheckList items={reassurance} />
              </div>
              <p className="mt-6 text-sm leading-relaxed">
                Contacting us does not create an attorney-client relationship. Please do not send confidential details
                until we have agreed to represent you. See our{" "}
                <Link href="/disclaimer" className="prose-link">
                  Disclaimer
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section labelledBy="visit-title">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Reveal>
            <SectionHeading id="visit-title" title="Visit the office" />
            <address className="mt-6 text-lg not-italic leading-relaxed">
              <strong className="block text-ink">{site.name}</strong>
              {site.address.street}, {site.address.suite}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href={site.mapsDirectionsUrl} variant="outline-dark" target="_blank" rel="noopener noreferrer">
                Get directions<span className="sr-only"> to {fullAddress} (opens in a new tab)</span>
              </ButtonLink>
              <ButtonLink href="/philadelphia" variant="outline-dark">
                About the Philadelphia office
              </ButtonLink>
            </div>
            <h3 className="mt-10 text-2xl">Office hours</h3>
            <HoursTable className="mt-4" />
          </Reveal>
          <Reveal delay={0.08}>
            <MapEmbed />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
