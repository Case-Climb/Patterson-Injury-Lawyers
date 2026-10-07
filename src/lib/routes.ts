/** Navigation data shared by the header, footer and sitemap. */

export type NavLink = { label: string; href: string };

export const practiceLinks: NavLink[] = [
  { label: "Car Accidents", href: "/car-accidents" },
  { label: "Truck Accidents", href: "/car-accidents/truck-accidents" },
  { label: "Motorcycle Accidents", href: "/car-accidents/motorcycle-accidents" },
  { label: "Pedestrian Accidents", href: "/car-accidents/pedestrian-accidents" },
  { label: "Slip & Fall", href: "/premises-liability-slip-and-fall" },
  { label: "Dog Bite", href: "/dog-bite" },
  { label: "Workplace Injury", href: "/workplace-injury" },
  { label: "Wrongful Death", href: "/wrongful-death" },
];

export const areaLinks: NavLink[] = [
  { label: "Philadelphia", href: "/philadelphia" },
  { label: "Montgomery County", href: "/montgomery-county" },
  { label: "Delaware County", href: "/delaware-county" },
];

export type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: string; children: NavLink[]; allLabel?: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Attorney", href: "/attorney" },
  { label: "Practice Areas", href: "/practice-areas", children: practiceLinks, allLabel: "All practice areas" },
  { label: "Areas We Serve", children: areaLinks },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: NavLink[] = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];
