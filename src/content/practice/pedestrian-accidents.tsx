import { site } from "@/config/site";
import { A, type PracticeArea } from "./types";

export const pedestrianAccidents: PracticeArea = {
  path: "/car-accidents/pedestrian-accidents",
  label: "Pedestrian Accidents",
  icon: "pedestrian",
  image: {
    src: "/images/site/pedestrian-accidents.jpg",
    alt: "Pedestrians crossing a wet city crosswalk at dusk in front of a stopped car with its headlights on",
  },
  keyword: "Philadelphia Pedestrian Accident Lawyer",
  metaDescription:
    "Hit by a car while walking? Our Philadelphia pedestrian accident lawyer deals with the insurers for you. Free consultation, no fee unless we recover. Call.",
  summary:
    "Crosswalk and intersection crashes in a city built for walking. We find the coverage that applies and hold careless drivers accountable.",
  heroLead:
    "Philadelphia is a walking city. When a driver does not yield, the person on foot pays for it. We help make that right.",
  intro: {
    heading: "On foot in a city built for walking",
    body: (
      <>
        <p>
          People in Philadelphia walk everywhere: to work in Center City, to the subway and the bus, to school in West
          Philadelphia, to the corner store in North and South Philadelphia. That adds up to thousands of crossings
          every day at intersections where drivers are turning, rushing a light or glancing at a phone.
        </p>
        <p>
          A pedestrian has no seat belt, no airbag and no steel frame. Even a low-speed impact can cause injuries that
          take months to heal, and the medical bills arrive long before the driver's insurer makes an offer.
        </p>
        <p>
          {site.name} represents pedestrians struck by cars, trucks, buses, rideshare vehicles and delivery drivers
          throughout Philadelphia and the surrounding counties. We work out which insurance applies. In many cases,
          medical benefits may be available through an auto policy in your own household, or through the policy on
          the vehicle that hit you, even though you were on foot. Then we pursue the driver who caused the crash. The
          consultation is free and there is no fee unless we recover for you. Drivers and passengers can find more on
          our <A href="/car-accidents">car accident page</A>.
        </p>
      </>
    ),
  },
  handles: {
    heading: "Pedestrian accident cases we handle",
    items: [
      "Crosswalk and intersection crashes",
      "Drivers turning left or right through a crosswalk",
      "Crashes near SEPTA bus stops, trolley stops and stations",
      "Hit-and-run crashes",
      "Backing-up accidents in parking lots and driveways",
      "Crashes caused by distracted, speeding or impaired drivers",
      "School zone accidents and injuries to children",
      "Pedestrians struck by rideshare, delivery or commercial vehicles",
    ],
  },
  injuries: {
    heading: "Common pedestrian accident injuries",
    lead: "A pedestrian is often hurt twice: once by the vehicle and again by the pavement.",
    items: [
      "Leg, knee and pelvic fractures",
      "Concussions and traumatic brain injuries",
      "Spinal injuries",
      "Internal bleeding and organ damage",
      "Shoulder, arm and wrist injuries from the fall",
      "Facial and dental injuries",
      "Road rash and scarring",
      "Fatal injuries",
    ],
  },
  sections: [
    {
      heading: "Where pedestrian crashes happen in Philadelphia",
      body: (
        <>
          <p>
            Dense neighborhoods put people and cars in the same narrow space. We see pedestrian crashes follow a few
            familiar patterns:
          </p>
          <ul>
            <li>Turning vehicles in Center City that cut through a crosswalk while people have the walk signal</li>
            <li>Wide, fast roads such as Roosevelt Boulevard and Broad Street, where crossing distances are long</li>
            <li>Transit stops, where people step out to catch a bus or trolley and drivers pass too closely</li>
            <li>Double-parked cars and delivery trucks that block the view of a crossing</li>
            <li>Poorly lit streets at night</li>
          </ul>
          <p>
            Driver distraction runs through many of them. A glance at a phone or a navigation screen is all it takes
            to miss a person in the crosswalk. If your case involves a SEPTA vehicle or another government agency,
            special notice rules and shorter deadlines can apply, so it is important to call promptly.
          </p>
        </>
      ),
    },
    {
      heading: "\"But I was not in the crosswalk\"",
      body: (
        <>
          <p>
            Drivers and their insurers often claim the pedestrian darted out or crossed in the middle of the block.
            Do not assume that ends your claim. Under Pennsylvania's comparative negligence rule, shared fault can
            generally reduce a recovery rather than automatically bar it, and drivers still have a duty to pay
            attention and avoid people they can see.
          </p>
          <p>
            What matters is the evidence: where the impact happened, how fast the vehicle was going, what the driver
            was doing and what cameras and witnesses show. If the worst has happened and you have lost a family
            member, please see our <A href="/wrongful-death">wrongful death page</A>.
          </p>
        </>
      ),
    },
  ],
  steps: {
    heading: "How we help injured pedestrians",
    items: [
      {
        title: "Free consultation",
        body: "Call us from home or the hospital. We will explain where your medical bills can go first and what to expect from the claim.",
      },
      {
        title: "We find the evidence and the coverage",
        body: "We look for camera footage and witnesses, get the police report, and identify every insurance policy that may apply to someone on foot.",
      },
      {
        title: "We pursue the driver's insurer",
        body: "We document your injuries and losses, negotiate for you, and file suit if the insurer refuses to be fair. No fee unless we recover.",
      },
    ],
  },
  faqHeading: "Pedestrian accident questions",
  faqs: [
    {
      q: "Who pays my medical bills if I was hit while walking?",
      a: "It depends on the insurance involved. In many cases, medical benefits may be available through an auto policy in your household, or through the policy on the vehicle that struck you. Health insurance may also apply. We help identify the right coverage and the order in which it pays.",
    },
    {
      q: "What if I was crossing outside a crosswalk?",
      a: "You may still have a claim. Pennsylvania's comparative negligence rule generally means shared fault can reduce a recovery rather than automatically prevent one, and drivers must still watch for people in the road. The outcome depends on the facts, so talk with us before deciding you have no case.",
    },
    {
      q: "What if the driver fled the scene?",
      a: "Report it to the police immediately and write down anything you remember about the vehicle. Uninsured motorist coverage on a household auto policy may apply. We can also help look for cameras and witnesses that could identify the driver.",
    },
    {
      q: "I was hit by a SEPTA bus or a city vehicle. Is that different?",
      a: "Yes. Claims involving government agencies can have special notice requirements and shorter deadlines than other injury claims. Contact us right away so those requirements are not missed.",
    },
    {
      q: "What compensation can an injured pedestrian pursue?",
      a: "Depending on the facts and the insurance involved, a claim may include medical expenses, lost income, pain and suffering and other losses. Every case is different, and we will give you an honest assessment after reviewing yours.",
    },
    {
      q: "What does it cost to hire a pedestrian accident lawyer?",
      a: `Nothing upfront. The consultation with ${site.name} is free, and we are paid only if we recover compensation for you.`,
    },
  ],
  parent: "/car-accidents",
  related: ["/car-accidents/truck-accidents", "/car-accidents/motorcycle-accidents", "/premises-liability-slip-and-fall"],
};
