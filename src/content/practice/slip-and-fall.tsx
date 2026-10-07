import { phoneText, site } from "@/config/site";
import { A, type PracticeArea } from "./types";

export const slipAndFall: PracticeArea = {
  path: "/premises-liability-slip-and-fall",
  label: "Slip & Fall",
  icon: "slip",
  image: {
    src: "/images/site/slip-and-fall.jpg",
    alt: "A puddle of water on a glossy supermarket floor with a yellow wet floor caution sign in the background",
  },
  keyword: "Philadelphia Slip and Fall Lawyer",
  metaDescription:
    "Fell on unsafe property? Our Philadelphia slip and fall lawyer holds negligent owners accountable. Free consultation, no fee unless we recover. Call 24/7.",
  summary:
    "Wet floors, icy sidewalks, broken stairs, poor lighting and negligent security. Property owners have a duty to keep their premises reasonably safe.",
  heroLead:
    "Property owners are expected to keep their property reasonably safe. When they do not and you get hurt, you should not be the one paying for it.",
  intro: {
    heading: "A fall is not always just an accident",
    body: (
      <>
        <p>
          A wet supermarket floor with no warning sign. A rowhouse sidewalk left icy for days. A dim stairwell with a
          loose handrail. Falls like these are rarely "just one of those things." They usually trace back to a hazard
          that someone knew about, or should have known about, and did not fix.
        </p>
        <p>
          Under Pennsylvania law, property owners and the people who control a property generally owe a duty of care
          to those who are lawfully there. What that duty requires depends on the circumstances, but the basic idea
          is simple: inspect the property, repair what is dangerous and warn people in the meantime. When an owner
          falls short and a visitor is injured, the owner and its insurer may be responsible.
        </p>
        <p>
          {site.name} handles slip and fall and other premises liability claims in Philadelphia and the surrounding
          counties, from Center City storefronts to apartment buildings in Upper Darby and shopping centers in King
          of Prussia. We act quickly because the evidence changes fast. Floors get mopped, ice melts, bulbs are
          replaced and video is recorded over. If you are able, photograph the exact hazard before you leave, then
          call us. The consultation is free and there is no fee unless we recover for you.
        </p>
      </>
    ),
  },
  handles: {
    heading: "Premises liability cases we handle",
    items: [
      "Wet and slippery floors in stores, restaurants and lobbies",
      "Snow and ice on sidewalks, steps and parking lots",
      "Broken, cracked and uneven sidewalks and pavement",
      "Poor lighting in hallways, stairwells and parking areas",
      "Defective stairs, loose handrails and missing railings",
      "Torn carpet, loose mats and cluttered aisles",
      "Falling merchandise and other falling objects",
      "Negligent security, including assaults in poorly secured buildings and lots",
    ],
  },
  injuries: {
    heading: "Common slip and fall injuries",
    lead: "A hard fall can do lasting damage, especially for older adults.",
    items: [
      "Broken hips, wrists and ankles",
      "Knee and shoulder injuries, including torn ligaments",
      "Concussions and other head injuries",
      "Back and spinal injuries, including herniated discs",
      "Deep cuts and bruising",
      "Facial and dental injuries",
      "Aggravation of an existing condition",
      "Loss of mobility and independence",
    ],
  },
  sections: [
    {
      heading: "A property owner's duty of care",
      body: (
        <>
          <p>A premises liability claim generally comes down to four questions:</p>
          <ol>
            <li>Was there a dangerous condition on the property?</li>
            <li>Did the owner know about it, or should the owner reasonably have known?</li>
            <li>Did the owner fail to fix it or warn people about it?</li>
            <li>Did that failure cause your injury?</li>
          </ol>
          <p>
            We look for the records that answer them: inspection and cleaning logs, maintenance requests, incident
            reports, surveillance video, prior complaints and witness statements.
          </p>
          <p>
            The same duty applies to safety from crime. When an owner ignores broken locks, dead lighting or a history
            of incidents and someone is attacked as a result, that may be a <strong>negligent security</strong> claim.
          </p>
          <p>
            Expect the insurer to say you should have watched where you were going. Under Pennsylvania's comparative
            negligence rule, shared fault can generally reduce a recovery, which is why the details of how the hazard
            looked matter so much.
          </p>
        </>
      ),
    },
    {
      heading: "Photograph the hazard before it disappears",
      body: (
        <>
          <p>If you are physically able, these steps protect your claim:</p>
          <ul>
            <li>Photograph the hazard itself, up close and from a distance: the puddle, the ice, the broken step.</li>
            <li>Photograph the lighting and the absence of any warning sign or cone.</li>
            <li>Report the fall to the manager or owner and ask for a copy of the incident report.</li>
            <li>Get the names and phone numbers of anyone who saw it.</li>
            <li>Keep the shoes and clothing you were wearing.</li>
            <li>See a doctor the same day and explain exactly how you fell.</li>
          </ul>
          <p>
            Sidewalk falls deserve a special note. In Philadelphia, responsibility for a sidewalk can rest with the
            adjacent property owner, the City or both, and claims that involve a government entity can carry special
            notice rules and shorter deadlines. Call us to learn how they affect your case. If you were injured on
            the job, see our <A href="/workplace-injury">workplace injury page</A> as well.
          </p>
        </>
      ),
    },
  ],
  steps: {
    heading: "How we help after a fall",
    items: [
      {
        title: "Free consultation",
        body: "Tell us where and how you fell. We will explain who may be responsible and what evidence matters most.",
      },
      {
        title: "We secure the evidence",
        body: "We ask the owner to preserve video and records, gather photos and witness statements, and document your injuries and treatment.",
      },
      {
        title: "We pursue the owner's insurer",
        body: "We present the claim, negotiate for you, and file suit if the insurer will not be fair. You pay no fee unless we recover.",
      },
    ],
  },
  faqHeading: "Slip and fall questions",
  faqs: [
    {
      q: "Who is responsible for a slip and fall injury?",
      a: "Generally, the person or company that owns or controls the property may be responsible if a dangerous condition existed, they knew or should have known about it, and they failed to fix it or warn people. Depending on the location, that could be a store, a landlord, a property manager, a contractor or a government entity.",
    },
    {
      q: "What should I do right after a fall?",
      a: `If you can, photograph the hazard and the area around it, report the fall to the manager or owner, get contact information for witnesses and seek medical attention right away. Then call ${site.name} at ${phoneText}.`,
    },
    {
      q: "Do I have a case if there was no wet floor sign?",
      a: "The lack of a warning sign can be important evidence, but it is not the whole case. The key questions are whether the hazard existed long enough that the owner knew or should have known about it, and whether they took reasonable steps to deal with it.",
    },
    {
      q: "What if I fell on an icy sidewalk in Philadelphia?",
      a: "Property owners are generally expected to deal with snow and ice within a reasonable time. These cases depend heavily on timing and conditions, and claims involving city property can have special rules. Photos of the ice and the date and time of the fall are especially helpful.",
    },
    {
      q: "What is negligent security?",
      a: "It is a type of premises liability claim. When a property owner fails to take reasonable security measures, such as working locks, adequate lighting or cameras, in a place where crime is foreseeable, and someone is harmed as a result, the owner may be held responsible.",
    },
    {
      q: "How long do I have to bring a slip and fall claim?",
      a: "Deadlines apply to injury claims in Pennsylvania, and shorter notice periods can apply when a government entity is involved. Because evidence in fall cases also disappears quickly, it is best to call us as soon as you can.",
    },
  ],
  related: ["/dog-bite", "/workplace-injury", "/car-accidents/pedestrian-accidents"],
};
