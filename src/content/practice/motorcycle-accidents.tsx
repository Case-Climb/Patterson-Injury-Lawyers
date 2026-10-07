import { site } from "@/config/site";
import { A, type PracticeArea } from "./types";

export const motorcycleAccidents: PracticeArea = {
  path: "/car-accidents/motorcycle-accidents",
  label: "Motorcycle Accidents",
  icon: "motorcycle",
  image: {
    src: "/images/site/motorcycle-accidents.jpg",
    alt: "A motorcyclist approaching a city intersection at dusk as a car turns across the street ahead",
  },
  keyword: "Philadelphia Motorcycle Accident Lawyer",
  metaDescription:
    "Injured on your bike? Our Philadelphia motorcycle accident lawyer fights the bias riders face from insurers. Free consultation and no upfront fees. Call us.",
  summary:
    "Riders get blamed first. We answer the bias with evidence and pursue the driver who failed to see you, helmet or no helmet.",
  heroLead: "Riders get blamed first and believed last. We tell your side with evidence, not assumptions.",
  intro: {
    heading: "Riders deserve to be taken seriously",
    body: (
      <>
        <p>
          Ask almost any rider in Philadelphia and you will hear the same story. A driver turned left across their
          lane on Broad Street, drifted over on I-95 or opened a car door without looking, and afterward said, "I
          never saw the bike." Motorcycles are smaller and easier to miss, and drivers who are not looking for them cause
          serious crashes.
        </p>
        <p>
          Then comes the second problem. Insurance adjusters, and sometimes jurors, assume the rider must have been
          speeding, weaving or taking chances. That bias can shape a claim from the very first phone call unless
          someone answers it with facts.
        </p>
        <p>
          {site.name} represents injured motorcyclists and their passengers across Philadelphia and the surrounding
          counties. We gather the proof that shows what actually happened: scene photos, witness accounts, vehicle
          damage, camera footage and medical records. Attorney <A href="/attorney">Derek M. Patterson</A> spent time
          at an insurance defense firm, so he knows the arguments insurers reach for in rider cases and how to respond
          to them. The consultation is free, and there is no fee unless we recover for you.
        </p>
      </>
    ),
  },
  handles: {
    heading: "Motorcycle accident cases we handle",
    items: [
      "Left-turn crashes at intersections",
      "Unsafe lane changes and merging",
      "Rear-end collisions at lights and in stopped traffic",
      "\"Dooring\" accidents on city streets",
      "Crashes involving distracted or impaired drivers",
      "Hit-and-run crashes",
      "Crashes caused by road hazards and debris",
      "Injury claims for motorcycle passengers",
    ],
  },
  injuries: {
    heading: "Common motorcycle accident injuries",
    lead: "With nothing between the rider and the road, injuries are often serious even at city speeds.",
    items: [
      "Road rash, including skin injuries that need grafts",
      "Broken legs, arms, wrists and collarbones",
      "Traumatic brain injuries, with or without a helmet",
      "Spinal cord injuries",
      "Nerve damage to the arm and shoulder",
      "Knee, hip and pelvic injuries",
      "Internal injuries",
      "Permanent scarring and disfigurement",
    ],
  },
  sections: [
    {
      heading: "Answering the bias against riders",
      body: (
        <>
          <p>
            Insurers know that many people assume motorcyclists are reckless, and they use it. Expect to hear that
            you were going too fast, that you came out of nowhere or that you were hard to see. Under Pennsylvania's
            comparative negligence rule, a recovery can generally be reduced by the injured person's share of fault,
            so every bit of blame an insurer can shift onto the rider saves it money.
          </p>
          <p>
            We counter assumptions with evidence. Skid marks, impact points, damage to both vehicles, traffic and
            security cameras, and the accounts of people who saw the crash can show where each vehicle was and who had
            the right of way. A driver has a duty to look for motorcycles. Not seeing a rider who was there to be seen
            is generally not an excuse.
          </p>
        </>
      ),
    },
    {
      heading: "Helmets and your claim",
      body: (
        <>
          <p>
            Pennsylvania law allows some adult riders to ride without a helmet if they meet certain requirements.
            Whether or not you were wearing one, the driver who caused the crash is still responsible for causing it.
          </p>
          <p>
            An insurer may argue that riding without a helmet made your injuries worse. How far that argument goes
            depends on the injuries and the facts. A helmet has nothing to do with a broken leg, for example. Do not
            assume you have no case, and do not let an adjuster tell you so.
          </p>
          <p>
            Keep your helmet, jacket and other gear exactly as they are, and do not repair the bike until it has been
            photographed and inspected. They are evidence. If a rider you love did not survive a crash, see our{" "}
            <A href="/wrongful-death">wrongful death page</A>.
          </p>
        </>
      ),
    },
  ],
  steps: {
    heading: "How we help injured riders",
    items: [
      {
        title: "Free consultation",
        body: "Tell us about the crash and your injuries. We will explain your options in plain English, with no cost and no pressure.",
      },
      {
        title: "We document what really happened",
        body: "We collect photos, footage, witness statements, the police report and the condition of your bike and gear to show how the crash occurred.",
      },
      {
        title: "We deal with the insurers",
        body: "We answer blame-shifting with evidence, negotiate for you, and take the case to court if the insurer will not treat you fairly.",
      },
    ],
  },
  faqHeading: "Motorcycle accident questions",
  faqs: [
    {
      q: "The driver says they did not see me. Is that a defense?",
      a: "Generally, no. Drivers have a duty to keep a proper lookout for everyone on the road, including motorcycles. Failing to see a rider who was there to be seen is often evidence of the driver's carelessness rather than an excuse for it.",
    },
    {
      q: "I was not wearing a helmet. Can I still bring a claim?",
      a: "In many cases, yes. Pennsylvania allows some adult riders to ride without a helmet, and the driver who caused the crash remains responsible for causing it. An insurer may argue the lack of a helmet contributed to certain injuries. How that affects a claim depends on the facts, so talk with us before assuming anything.",
    },
    {
      q: "Will the insurance company blame me because I ride a motorcycle?",
      a: "It may try. Insurers often suggest that a rider was speeding or riding aggressively. We respond with physical evidence, witness accounts and footage that show what actually happened.",
    },
    {
      q: "What should I do with my motorcycle and gear after a crash?",
      a: "Keep everything as it is. Do not repair the bike or throw away damaged gear until it has been photographed and, if needed, inspected. The damage can help show how the crash happened and how hard the impact was.",
    },
    {
      q: "What if the driver who hit me left the scene or has no insurance?",
      a: "Report the crash to the police right away. Uninsured or underinsured motorist coverage on your own policy may apply. We can review your coverage and explain your options.",
    },
    {
      q: "How much does it cost to hire a motorcycle accident lawyer?",
      a: `Nothing upfront. ${site.name} offers a free consultation, charges no out-of-pocket costs to get started, and is paid only if we recover for you.`,
    },
  ],
  parent: "/car-accidents",
  related: ["/car-accidents/truck-accidents", "/car-accidents/pedestrian-accidents", "/wrongful-death"],
};
