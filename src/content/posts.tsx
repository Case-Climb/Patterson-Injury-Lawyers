import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/config/site";

export const BLOG_CATEGORIES = ["Car Accidents", "Premises Liability", "Workplace Injury", "General"] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type Post = {
  slug: string;
  title: string;
  /** Meta description, 150 to 160 characters. */
  description: string;
  /** Short summary shown on blog cards. */
  excerpt: string;
  category: BlogCategory;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  readMinutes: number;
  body: ReactNode;
};

/**
 * STARTER POSTS
 * To add a post, append an object to this array. It appears on /blog, gets its
 * own page at /blog/[slug] and is added to sitemap.xml automatically.
 * Legal statements below are general information and should be reviewed by the
 * attorney before launch.
 */
export const posts: Post[] = [
  {
    slug: "what-to-do-after-a-car-accident-in-philadelphia",
    title: "What To Do After a Car Accident in Philadelphia",
    description:
      "A step-by-step guide to what to do after a car accident in Philadelphia, from the scene to the insurance call. Questions? Call us for a free consultation.",
    excerpt:
      "The steps to take at the scene and in the days after a crash, and the mistakes that can hurt a claim.",
    category: "Car Accidents",
    date: "2026-10-01",
    readMinutes: 3,
    body: (
      <>
        <p>
          A crash on the Schuylkill or a fender-bender on Broad Street leaves most people shaken and unsure what to do
          next. The steps you take in the first few hours and days protect both your health and your claim.
        </p>

        <h2>At the scene</h2>
        <h3>1. Check for injuries and call 911</h3>
        <p>
          Safety comes first. Move out of traffic if you can, check on everyone involved and call 911. A police report
          creates an official record of the crash.
        </p>
        <h3>2. Collect information from everyone involved</h3>
        <p>
          Get the driver's license, insurance and contact information for every driver, plus license plate numbers.
          If anyone saw the crash, ask for a name and phone number.
        </p>
        <h3>3. Photograph the scene</h3>
        <p>
          Take pictures of the vehicles, the damage, the road, traffic signals, skid marks and any visible injuries.
          Photos taken in the first few minutes often become the most useful evidence in the case.
        </p>

        <h2>In the hours and days after</h2>
        <h3>4. Get medical attention right away</h3>
        <p>
          See a doctor even if you feel fine. Concussions, whiplash and other injuries may not show symptoms for
          hours or days, and a prompt medical record connects your injuries to the crash.
        </p>
        <h3>5. Be careful with insurance companies</h3>
        <p>
          Report the crash to your own insurer. If the other driver's insurance company calls, you are generally not
          required to give a recorded statement, and it is usually better not to before you get legal advice.
        </p>
        <h3>6. Find your insurance paperwork</h3>
        <p>
          Pennsylvania drivers choose between limited tort and full tort coverage, and that choice can affect what
          you may recover. Our <Link href="/car-accidents">Philadelphia car accident page</Link> explains the
          difference in plain English.
        </p>

        <h2>Mistakes to avoid</h2>
        <ul>
          <li>Apologizing or admitting fault at the scene</li>
          <li>Skipping medical care or missing follow-up appointments</li>
          <li>Posting about the crash on social media</li>
          <li>Accepting a quick settlement before you know the extent of your injuries</li>
          <li>Waiting too long. Deadlines apply to injury claims in Pennsylvania.</li>
        </ul>

        <h2>Call {site.name}</h2>
        <p>
          Once you are safe and have seen a doctor, call us. We are available 24/7, the consultation is free and
          there are no upfront fees. If a commercial vehicle was involved, read our page on{" "}
          <Link href="/car-accidents/truck-accidents">truck accidents</Link>, because the evidence in those cases
          needs to be preserved quickly. You can also find quick answers on our <Link href="/faq">FAQ page</Link>.
        </p>
      </>
    ),
  },
  {
    slug: "how-long-to-file-a-personal-injury-claim-in-pennsylvania",
    title: "How Long Do I Have to File a Personal Injury Claim in Pennsylvania?",
    description:
      "Learn how long you generally have to file a personal injury claim in Pennsylvania and what can shorten the deadline. Call us for a free consultation today.",
    excerpt:
      "The general two-year rule, the situations that can change it, and why waiting is risky even when time remains.",
    category: "General",
    date: "2026-10-01",
    readMinutes: 3,
    body: (
      <>
        <p>
          Pennsylvania limits how long you have to file a lawsuit after an injury. The limit is called the statute of
          limitations. If it passes, a court will generally dismiss the case, no matter how strong it is.
        </p>

        <h2>The general rule</h2>
        <p>
          For most personal injury claims in Pennsylvania, including{" "}
          <Link href="/car-accidents">car accidents</Link>,{" "}
          <Link href="/premises-liability-slip-and-fall">slip and falls</Link> and{" "}
          <Link href="/dog-bite">dog bites</Link>, a lawsuit generally must be filed within two years of the date of
          the injury. That is the starting point, not the whole answer.
        </p>

        <h2>Situations that can change the deadline</h2>
        <h3>Claims involving a government entity</h3>
        <p>
          If your claim involves a government body, such as a city, a transit agency or a state agency, written
          notice of the claim may be required much sooner, in some cases within six months. These rules are easy to
          miss and can end a claim early.
        </p>
        <h3>Injuries to children</h3>
        <p>
          When the injured person is a minor, the time limit generally does not begin to run until the child turns
          18. A parent's own related claims may follow a different timeline.
        </p>
        <h3>Injuries discovered later</h3>
        <p>
          In limited circumstances, when an injury could not reasonably have been discovered right away, the deadline
          may be measured differently. This exception is narrow and depends heavily on the facts.
        </p>
        <h3>Wrongful death</h3>
        <p>
          Claims after the loss of a family member generally have their own two-year period, usually measured from
          the date of death. Our <Link href="/wrongful-death">wrongful death page</Link> explains who may file.
        </p>

        <h2>Why you should not wait</h2>
        <p>The legal deadline is only one reason to act early. Others include:</p>
        <ul>
          <li>Surveillance video is often recorded over within days or weeks.</li>
          <li>Witnesses move, and memories fade.</li>
          <li>Vehicles are repaired and hazards are fixed, which erases evidence.</li>
          <li>A claim takes time to investigate and negotiate before a lawsuit is ever filed.</li>
        </ul>

        <h2>The bottom line</h2>
        <p>
          These are general rules, and exceptions can shorten or extend the time you have. The only way to know which
          deadline applies to you is to have a lawyer look at the facts. Deadlines apply, so call us to learn how they
          affect your case. The consultation is free, and you can reach {site.name} 24/7 at{" "}
          <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>.
        </p>
      </>
    ),
  },
  {
    slug: "slip-and-fall-injuries-who-is-responsible",
    title: "Slip and Fall Injuries: Who Is Responsible?",
    description:
      "Who is responsible for a slip and fall injury in Pennsylvania? Learn how property owner liability works, then call us for a free consultation about your fall.",
    excerpt:
      "How a property owner's duty of care works, who may be responsible for a fall, and what you generally need to show.",
    category: "Premises Liability",
    date: "2026-10-01",
    readMinutes: 3,
    body: (
      <>
        <p>
          After a fall, most people ask the same thing: was that my fault, or should someone have fixed it? The
          answer depends on who controlled the property and what they knew about the hazard.
        </p>

        <h2>The basic rule: a duty of care</h2>
        <p>
          Property owners, and others who control a property, generally have a duty to keep it reasonably safe for
          people who are lawfully there. That means inspecting, repairing dangerous conditions and warning visitors
          about hazards that cannot be fixed immediately.
        </p>

        <h2>Who might be responsible</h2>
        <h3>Stores and other businesses</h3>
        <p>
          Supermarkets, restaurants and shops are expected to check for spills, wet floors and cluttered aisles, and
          to deal with them within a reasonable time.
        </p>
        <h3>Landlords and property managers</h3>
        <p>
          In apartment buildings, the landlord or manager is generally responsible for common areas such as
          stairwells, hallways, parking lots and walkways.
        </p>
        <h3>Homeowners</h3>
        <p>
          A homeowner can be responsible for hazards on the property, and often for the sidewalk in front of it. These
          claims are often covered by homeowner's insurance.
        </p>
        <h3>Government entities</h3>
        <p>
          Falls on public property raise special rules, including shorter notice deadlines. If a city or agency may
          be involved, talk to a lawyer promptly.
        </p>

        <h2>What you generally need to show</h2>
        <ol>
          <li>A dangerous condition existed.</li>
          <li>The owner knew about it, or reasonably should have.</li>
          <li>The owner did not fix it or warn people.</li>
          <li>That failure caused your injury.</li>
        </ol>

        <h2>What if I was partly at fault?</h2>
        <p>
          Insurers often argue that the injured person was not paying attention. Under Pennsylvania's comparative
          negligence rule, shared fault can generally reduce a recovery rather than automatically prevent one. The
          details matter, so do not rule yourself out.
        </p>

        <h2>What to do after a fall</h2>
        <p>
          Photograph the hazard before it is cleaned up, report the fall, get the names of witnesses and see a doctor
          right away. Our <Link href="/premises-liability-slip-and-fall">Philadelphia slip and fall page</Link> has
          a full checklist. If the fall happened at work, see our{" "}
          <Link href="/workplace-injury">workplace injury page</Link> too. Then{" "}
          <Link href="/contact">contact {site.name}</Link>. The consultation is free.
        </p>
      </>
    ),
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}
