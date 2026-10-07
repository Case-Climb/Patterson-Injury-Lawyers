import { site } from "@/config/site";
import { absoluteUrl } from "@/lib/seo";

/** JSON-LD builders. Everything reads from src/config/site.ts so NAP stays consistent. */

const FIRM_ID = `${site.url}/#firm`;
const ATTORNEY_ID = `${site.url}/attorney#derek-m-patterson`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${site.address.street}, ${site.address.suite}`,
  addressLocality: site.address.city,
  addressRegion: site.address.state,
  postalCode: site.address.zip,
  addressCountry: site.address.country,
};

const areaServed = [
  { "@type": "City", name: "Philadelphia", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
  ...site.counties.map((name) => ({ "@type": "AdministrativeArea", name: `${name}, Pennsylvania` })),
];

function firmBase(type: string | string[]) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": FIRM_ID,
    name: site.name,
    alternateName: site.shortName,
    slogan: site.tagline,
    url: site.url,
    logo: absoluteUrl(site.images.logoForSchema),
    image: absoluteUrl(site.images.og),
    telephone: site.phone.tel,
    email: site.email,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: site.openingHours.days,
        opens: site.openingHours.opens,
        closes: site.openingHours.closes,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone.tel,
        contactType: "customer service",
        areaServed: "US-PA",
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: site.tollFree.tel,
        contactType: "customer service",
        contactOption: "TollFree",
        areaServed: "US",
      },
    ],
    areaServed,
    priceRange: "Free consultation",
    knowsAbout: [
      "Personal injury law",
      "Car accidents",
      "Truck accidents",
      "Motorcycle accidents",
      "Pedestrian accidents",
      "Premises liability",
      "Dog bites",
      "Workplace injuries",
      "Wrongful death",
    ],
    founder: { "@id": ATTORNEY_ID },
    sameAs: [site.social.facebook, site.social.instagram],
  };
}

/** Homepage. */
export const legalServiceSchema = () => firmBase("LegalService");

/** Philadelphia office page and contact page. */
export const localBusinessSchema = () => firmBase(["LocalBusiness", "LegalService"]);

/** Attorney page. Built only from facts the firm supplied. */
export function attorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": ATTORNEY_ID,
    name: site.attorney.shortName,
    honorificSuffix: "Esq.",
    jobTitle: "Personal Injury Attorney",
    description:
      "Philadelphia personal injury attorney and CEO of Patterson Injury Lawyers, born and raised in West Philadelphia.",
    url: absoluteUrl("/attorney"),
    email: site.email,
    telephone: site.phone.tel,
    worksFor: { "@id": FIRM_ID, "@type": "LegalService", name: site.name, url: site.url },
    workLocation: { "@type": "Place", address: postalAddress },
    birthPlace: { "@type": "Place", name: "West Philadelphia, Philadelphia, Pennsylvania" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Maryland Eastern Shore" },
      { "@type": "CollegeOrUniversity", name: "Western Michigan University Thomas M. Cooley Law School" },
    ],
    knowsAbout: ["Personal injury law", "Trial advocacy", "Insurance claims"],
  };
}

export type Crumb = { name: string; path: string };

/** `crumbs` excludes Home, which is always prepended. */
export function breadcrumbSchema(crumbs: Crumb[]) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export type Faq = { q: string; a: string };

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function articleSchema(post: { title: string; description: string; slug: string; date: string }) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: url,
    url,
    image: absoluteUrl(site.images.og),
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: absoluteUrl(site.images.logoForSchema) },
    },
  };
}
