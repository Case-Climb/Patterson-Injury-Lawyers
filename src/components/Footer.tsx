import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";
import { areaLinks, legalLinks, practiceLinks } from "@/lib/routes";
import { CookiePreferencesButton } from "@/components/CookieConsent";
import { FooterLogo } from "@/components/Logo";
import { Container, FacebookIcon, InstagramIcon } from "@/components/ui";

const firmLinks = [
  { label: "Home", href: "/" },
  { label: "Attorney", href: "/attorney" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const linkClass = "text-white/75 transition-colors hover:text-white";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-sans text-sm font-semibold tracking-wide text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-[0.95rem]">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Identical on every page. All contact details come from src/config/site.ts. */
export function Footer() {
  const year = new Date().getFullYear();
  const { address } = site;

  return (
    <footer className="on-dark bg-navy-ink">
      <Container className="grid grid-cols-1 gap-12 pb-12 pt-16 lg:grid-cols-[1.25fr_2fr] lg:gap-16">
        <div>
          <FooterLogo />
          <p className="mt-5 text-xl font-semibold tracking-tight text-white">{site.tagline}</p>

          <address className="mt-6 space-y-3 text-[0.95rem] not-italic">
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
              <span>
                {address.street}, {address.suite}
                <br />
                {address.city}, {address.state} {address.zip}
              </span>
            </p>
            <p className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
              <span>
                <a href={`tel:${site.phone.tel}`} className="font-semibold text-white hover:text-accent">
                  {site.phone.display}
                </a>
                <br />
                <a href={`tel:${site.tollFree.tel}`} className={linkClass}>
                  Toll-free {site.tollFree.display}
                </a>
              </span>
            </p>
            <p className="flex gap-3">
              <Mail aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </p>
          </address>

          <ul className="mt-6 flex gap-3">
            <li>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
              >
                <FacebookIcon className="size-5" />
                <span className="sr-only">{site.name} on Facebook (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
              >
                <InstagramIcon className="size-5" />
                <span className="sr-only">{site.name} on Instagram (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <FooterColumn title="The firm" links={firmLinks} />
          <FooterColumn title="Practice areas" links={practiceLinks} />
          <div>
            <FooterColumn title="Areas we serve" links={areaLinks} />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Also serving {site.towns.join(", ")} and nearby communities.
            </p>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="space-y-5 pb-24 pt-8 text-sm leading-relaxed text-white/60 md:pb-8">
          <p>
            <strong className="font-semibold text-white/80">Attorney advertising.</strong> The information on this
            website is for general information only and is not legal advice. Viewing this site or contacting {site.name}{" "}
            does not create an attorney-client relationship. Every case is different, and past results do not guarantee
            a similar outcome.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookiePreferencesButton className={linkClass} />
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
