import { phoneText, site } from "@/config/site";
import { A, type PracticeArea } from "./types";

export const truckAccidents: PracticeArea = {
  path: "/car-accidents/truck-accidents",
  label: "Truck Accidents",
  icon: "truck",
  image: {
    src: "/images/site/truck-accidents.jpg",
    alt: "A tractor-trailer traveling beside passenger cars on a wet interstate highway at dusk",
  },
  keyword: "Philadelphia Truck Accident Lawyer",
  metaDescription:
    "Hit by a commercial truck? Our Philadelphia truck accident lawyer moves fast to preserve evidence and find every liable party. Free consultation. Call now.",
  summary:
    "Tractor-trailers, box trucks and delivery vehicles. We move quickly to preserve logs and black-box data and identify every party responsible.",
  heroLead:
    "A collision with a tractor-trailer is not just a bigger car accident. It is a different kind of case, with more evidence, more insurers and more at stake.",
  intro: {
    heading: "Truck crashes are different, and so is the work",
    body: (
      <>
        <p>
          A fully loaded tractor-trailer can weigh as much as 80,000 pounds. When one collides with a passenger car on
          I-95, the Pennsylvania Turnpike or the truck routes that feed the port and the region's warehouses, the
          people in the smaller vehicle take the worst of it.
        </p>
        <p>
          These cases are also more complicated than an ordinary crash. Commercial carriers are governed by federal
          and state safety rules, they carry larger insurance policies, and they often send their own investigators
          to the scene quickly. The driver may be only one of several parties whose decisions contributed to the
          wreck.
        </p>
        <p>
          {site.name} represents people injured in crashes with tractor-trailers, box trucks, delivery vans, dump
          trucks and other commercial vehicles throughout Philadelphia and the surrounding counties. We move quickly
          to preserve evidence, identify every responsible party and deal with the carrier's insurers on your behalf.
          The consultation is free, there are no upfront fees, and there is no fee unless we recover for you. For
          crashes that involve only passenger vehicles, see our <A href="/car-accidents">car accident page</A>.
        </p>
      </>
    ),
  },
  handles: {
    heading: "Truck accident cases we handle",
    items: [
      "Tractor-trailer and 18-wheeler collisions",
      "Box truck, delivery van and last-mile delivery crashes",
      "Dump truck, cement truck and construction vehicle accidents",
      "Jackknife and rollover crashes",
      "Underride and override collisions",
      "Wide-turn and blind-spot accidents",
      "Crashes linked to driver fatigue or hours-of-service violations",
      "Accidents caused by overloaded or poorly secured cargo",
    ],
  },
  injuries: {
    heading: "Common truck accident injuries",
    lead: "Because of the size and weight involved, truck crashes tend to cause more severe injuries than other collisions.",
    items: [
      "Traumatic brain injuries",
      "Spinal cord injuries and paralysis",
      "Multiple fractures and crush injuries",
      "Internal organ damage",
      "Severe burns",
      "Amputations",
      "Injuries that need surgery and long-term rehabilitation",
      "Fatal injuries",
    ],
  },
  sections: [
    {
      heading: "More than one party may be responsible",
      body: (
        <>
          <p>
            In a car accident, the claim is usually against one driver. In a truck accident, responsibility is often
            shared, and each party may have its own insurer and its own lawyers.
          </p>
          <ul>
            <li>
              <strong>The driver:</strong> speeding, distraction, fatigue or impairment.
            </li>
            <li>
              <strong>The trucking company:</strong> hiring, training and supervision, or schedules that push drivers
              past safe limits.
            </li>
            <li>
              <strong>Maintenance providers:</strong> worn brakes, bad tires, broken lights or skipped inspections.
            </li>
            <li>
              <strong>Cargo loaders and shippers:</strong> loads that are too heavy, unbalanced or not secured.
            </li>
          </ul>
          <p>
            Part of our job is to work out who did what, and to pursue each party whose conduct contributed to your
            injuries.
          </p>
        </>
      ),
    },
    {
      heading: "Evidence that can disappear",
      body: (
        <>
          <p>
            Trucking cases are built on records that the carrier controls. Some of them are kept only for a limited
            time unless someone demands that they be preserved.
          </p>
          <ul>
            <li>Driver logs and hours-of-service records</li>
            <li>Electronic logging device and "black box" data showing speed, braking and hours driven</li>
            <li>Dashcam and onboard camera footage</li>
            <li>Inspection, repair and maintenance records</li>
            <li>The driver's qualification file and drug and alcohol testing results</li>
            <li>Dispatch records, bills of lading and load documents</li>
          </ul>
          <p>
            We send preservation letters that put the carrier on notice to keep this evidence. The sooner you call,
            the more of it can be saved. If you lost a family member in a truck crash, our{" "}
            <A href="/wrongful-death">wrongful death page</A> explains how those claims work.
          </p>
        </>
      ),
    },
  ],
  steps: {
    heading: "How we help after a truck accident",
    items: [
      {
        title: "Free consultation",
        body: "We listen to what happened, answer your questions and explain how a claim against a commercial carrier works. It costs nothing.",
      },
      {
        title: "We preserve evidence and investigate",
        body: "We demand that the carrier keep its logs, data and records, then review them alongside the police report, the scene and your medical records.",
      },
      {
        title: "We take on the carrier's insurers",
        body: "We present the claim against every responsible party and negotiate from the evidence. If the insurers will not be fair, we are prepared to litigate.",
      },
    ],
  },
  faqHeading: "Truck accident questions",
  faqs: [
    {
      q: "How is a truck accident case different from a car accident case?",
      a: "Commercial trucks are subject to federal and state safety regulations, carriers usually carry larger insurance policies, and several parties may share responsibility. There is also far more evidence to collect, such as driver logs and electronic data, and some of it must be preserved quickly.",
    },
    {
      q: "Who can be held responsible for a truck accident?",
      a: "Depending on the facts, responsible parties may include the truck driver, the trucking company, a maintenance provider, the company that loaded the cargo, or others. We investigate to identify each party whose conduct contributed to the crash.",
    },
    {
      q: "What is black-box data and why does it matter?",
      a: "Many commercial trucks record information such as speed, braking and hours of operation. That data can help show what the truck was doing in the moments before a crash. It is controlled by the carrier, so we ask that it be preserved as early as possible.",
    },
    {
      q: "The trucking company's insurer called me. What should I do?",
      a: `Be polite, but do not give a recorded statement or sign anything before you get legal advice. Insurers for commercial carriers begin building their defense right away. Call us at ${phoneText} and let us handle those conversations.`,
    },
    {
      q: "How soon should I contact a lawyer after a truck crash?",
      a: "As soon as you can. Some trucking records are kept only for a limited time, and legal deadlines apply to injury claims in Pennsylvania. Early action helps protect both the evidence and your rights.",
    },
    {
      q: `What does it cost to hire ${site.name} for a truck accident case?`,
      a: "There are no upfront fees or out-of-pocket costs. The consultation is free, and we are paid only if we recover compensation for you.",
    },
  ],
  parent: "/car-accidents",
  related: ["/car-accidents/motorcycle-accidents", "/car-accidents/pedestrian-accidents", "/wrongful-death"],
};
