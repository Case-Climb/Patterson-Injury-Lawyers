import Link from "next/link";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";
import { practiceLinks } from "@/lib/routes";
import { attorneySchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { CtaBand, RelatedLinks } from "@/components/blocks";
import { PageHero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Motion";
import { ButtonLink, CallButton, Section } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Derek M. Patterson, Philadelphia Personal Injury Attorney",
  description:
    "Meet Derek M. Patterson, Esq., a Philadelphia personal injury attorney raised in West Philadelphia who knows both sides of a claim. Call for a free consult.",
  path: "/attorney",
});

/**
 * ATTORNEY BIO
 * Built only from facts supplied by the firm. Do not add credentials, awards,
 * bar admissions, years of experience or case results unless the firm
 * provides and verifies them.
 */
export default function AttorneyPage() {
  return (
    <>
      <JsonLd data={attorneySchema()} />
      <PageHero
        title="Derek M. Patterson, Philadelphia Personal Injury Attorney"
        lead={`Attorney and CEO of ${site.name}. Born and raised in West Philadelphia.`}
        crumbs={[{ name: "Attorney", path: "/attorney" }]}
        cta={false}
      />

      <Section>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_0.85fr] lg:gap-20">
          <div className="max-w-[42rem] space-y-14">
            <Reveal>
              <h2 className="text-[clamp(1.8rem,1.2rem+1.8vw,2.4rem)]">Roots in West Philadelphia</h2>
              <div className="prose-pil mt-5 text-lg leading-relaxed">
                <p>
                  Derek M. Patterson, Esq. was born and raised in West Philadelphia, where his family instilled in him
                  the value of striving for excellence in every endeavor. Philadelphia is where he grew up, and it is
                  where he chose to build his practice.
                </p>
                <p>
                  Driven by a passion for advocacy and inspired by the example of his grandfather, Derek set his
                  sights early on becoming a trial attorney.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-[clamp(1.8rem,1.2rem+1.8vw,2.4rem)]">Education</h2>
              <div className="prose-pil mt-5 text-lg leading-relaxed">
                <p>
                  Derek earned a Bachelor of Science in Criminal Justice from the University of Maryland Eastern
                  Shore. He went on to earn his Juris Doctor at Western Michigan University Thomas M. Cooley Law
                  School, staying committed to the path he had chosen through the challenges of law school.
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-4 rounded-2xl bg-paper p-5">
                  <GraduationCap aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-accent-ink" strokeWidth={1.7} />
                  <span>
                    <strong className="block text-ink">Juris Doctor (J.D.)</strong>
                    Western Michigan University Thomas M. Cooley Law School
                  </span>
                </li>
                <li className="flex gap-4 rounded-2xl bg-paper p-5">
                  <GraduationCap aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-accent-ink" strokeWidth={1.7} />
                  <span>
                    <strong className="block text-ink">Bachelor of Science (B.S.), Criminal Justice</strong>
                    University of Maryland Eastern Shore
                  </span>
                </li>
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-[clamp(1.8rem,1.2rem+1.8vw,2.4rem)]">Experience on both sides of the table</h2>
              <div className="prose-pil mt-5 text-lg leading-relaxed">
                <p>
                  Derek gained his experience at several highly regarded plaintiff law firms in Philadelphia, where he
                  developed his skills as a trial attorney representing injured people.
                </p>
                <p>
                  He also spent time at a respected insurance defense firm. That work showed him how insurance
                  companies and their lawyers evaluate a claim, what they look for and how they decide what to offer.
                  Understanding how both sides approach a case is an advantage he now puts to work for his clients,
                  whether the claim involves a <Link href="/car-accidents">car accident</Link>, a{" "}
                  <Link href="/premises-liability-slip-and-fall">fall on unsafe property</Link> or a{" "}
                  <Link href="/workplace-injury">workplace injury</Link>.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-[clamp(1.8rem,1.2rem+1.8vw,2.4rem)]">A client-first philosophy</h2>
              <div className="prose-pil mt-5 text-lg leading-relaxed">
                <p>
                  Today Derek is the CEO of {site.name}, representing injured people throughout Philadelphia and the
                  surrounding counties. The firm is built on a client-first philosophy: exceptional service is not an
                  extra, it is the foundation.
                </p>
                <p>
                  In practice that means a free consultation to find out where you stand, a phone line that is
                  answered 24/7, plain-English answers to your questions, and no upfront fees. The firm is not paid
                  unless it recovers for you. It is the approach behind the name people know the firm by:{" "}
                  {site.tagline}.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <aside
              aria-labelledby="attorney-card-title"
              className="on-dark rounded-3xl bg-navy p-7 sm:p-9 lg:sticky lg:top-28"
            >
              <h2 id="attorney-card-title" className="text-2xl sm:text-[1.75rem]">
                {site.attorney.name}
              </h2>
              <p className="mt-2 text-white/80">
                {site.attorney.title}, {site.name}
              </p>
              <address className="mt-6 space-y-3.5 text-[0.975rem] not-italic">
                <p className="flex gap-3">
                  <Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                  <a href={`tel:${site.phone.tel}`} className="font-semibold text-white hover:text-accent">
                    {site.phone.display}
                  </a>
                </p>
                <p className="flex gap-3">
                  <Mail aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                  <a href={`mailto:${site.email}`} className="break-all text-white/85 hover:text-white">
                    {site.email}
                  </a>
                </p>
                <p className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                  <span>
                    {site.address.street}, {site.address.suite}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                </p>
              </address>
              <div className="mt-7 flex flex-col gap-3">
                <ButtonLink href="/contact" size="lg">
                  Free Consultation
                </ButtonLink>
                <CallButton size="lg" variant="outline-light" />
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper">
        <Reveal>
          <RelatedLinks title="Cases Derek and the firm handle" links={[...practiceLinks, { label: "All practice areas", href: "/practice-areas" }]} />
        </Reveal>
      </Section>

      <CtaBand title="Talk with Derek's team today." />
    </>
  );
}
