/**
 * SINGLE SOURCE OF TRUTH FOR CLIENT DATA
 * --------------------------------------
 * Every phone number, address line, link, tracking ID and image path on the
 * site reads from this file. Change a value here and it updates everywhere:
 * header, footer, contact page, schema markup, sitemap and metadata.
 *
 * Values wrapped in [SQUARE_BRACKETS] or made of X's are placeholders that
 * still need real content. `isPlaceholder()` at the bottom detects them so
 * the UI can degrade gracefully instead of shipping a broken link.
 */

export const site = {
  name: "Patterson Injury Lawyers",
  shortName: "PIL",
  nickname: "the PIL",
  tagline: "Philly's Favorite Personal Injury Firm",
  slogan: "Get the PIL",
  url: "https://www.pattersoninjury.com",
  locale: "en_US",

  attorney: {
    name: "Derek M. Patterson, Esq.",
    shortName: "Derek M. Patterson",
    firstName: "Derek",
    title: "Attorney and CEO",
  },

  /** Main office line. Used site-wide. */
  phone: { display: "(215) 383-9959", tel: "+12153839959" },
  /** Toll-free line. */
  tollFree: { display: "1-888-507-2221", tel: "+18885072221" },
  /** Owner cell / WhatsApp. Shown on the contact page ONLY. */
  cell: { display: "(267) 973-2587", tel: "+12679732587" },
  whatsappUrl: "https://wa.me/12679732587",

  email: "derek@lawpatterson.com",

  address: {
    street: "1650 Market Street",
    suite: "Suite 3600",
    city: "Philadelphia",
    state: "PA",
    stateName: "Pennsylvania",
    zip: "19103",
    country: "US",
  },

  /** Approximate coordinates for 1650 Market Street. Verify before launch. */
  geo: { latitude: 39.9527, longitude: -75.1682 },

  /** Keyless Google Maps embed for the office address. Verify the pin before launch. */
  mapsEmbedUrl:
    "https://www.google.com/maps?q=1650+Market+Street+Suite+3600,+Philadelphia,+PA+19103&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1650+Market+Street+Suite+3600+Philadelphia+PA+19103",

  hours: [
    { days: "Monday to Friday", time: "8:00 AM to 6:00 PM" },
    { days: "Saturday and Sunday", time: "By appointment" },
    { days: "Phone line", time: "Available 24/7" },
  ],
  /** Machine-readable office hours for schema markup. */
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },

  social: {
    facebook: "https://www.facebook.com/pattersoninjury",
    instagram: "https://www.instagram.com/pattersoninjury",
  },

  /** PLACEHOLDER: GA4 measurement ID. */
  ga4Id: "G-XXXXXXXXXX",

  /** PLACEHOLDER: reCAPTCHA v3 site key (the secret key goes in RECAPTCHA_SECRET_KEY). */
  recaptchaSiteKey: "[RECAPTCHA_SITE_KEY]",

  /**
   * Photos (paths are relative to /public).
   *
   *   heroSkyline       Philadelphia skyline shown behind every hero.
   *   centerCity        Center City street scene on the Philadelphia page, 3:2.
   *
   * heroSkyline, centerCity and the practice-area photos set in
   * src/content/practice are AI-generated illustrative images (Higgsfield,
   * October 2026). They approximate real places and do not show the firm's
   * office, its clients or actual cases. Swap in real photography whenever it
   * is available: replace the file in public/images/site or change the path.
   */
  images: {
    heroSkyline: "/images/site/philadelphia-skyline.jpg" as string | null,
    centerCity: "/images/site/center-city-philadelphia.jpg" as string | null,
    og: "/og/patterson-injury-lawyers.jpg",
    logoForSchema: "/images/brand/patterson-injury-lawyers-logo.png",
  },

  counties: ["Philadelphia County", "Montgomery County", "Delaware County", "Bucks County", "Chester County"],

  neighborhoods: [
    "Center City",
    "West Philadelphia",
    "North Philadelphia",
    "South Philadelphia",
    "Northeast Philadelphia",
    "Germantown",
  ],

  towns: [
    "Upper Darby",
    "Chester",
    "Media",
    "Norristown",
    "King of Prussia",
    "Conshohocken",
    "Cheltenham",
    "Bensalem",
    "Levittown",
    "Doylestown",
    "West Chester",
  ],
} as const;

/** Main phone number with a non-breaking space, for running text so it never wraps mid-number. */
export const phoneText = site.phone.display.replace(/ /g, "\u00A0");

export const fullAddress = `${site.address.street}, ${site.address.suite}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

/** True while a config value is still an unfilled placeholder. */
export function isPlaceholder(value: string | null | undefined): boolean {
  if (!value) return true;
  return /^\[.*\]$/.test(value) || /X{6,}/.test(value);
}
