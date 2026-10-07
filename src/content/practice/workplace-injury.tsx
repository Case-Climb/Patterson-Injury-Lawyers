import { site } from "@/config/site";
import { A, type PracticeArea } from "./types";

export const workplaceInjury: PracticeArea = {
  path: "/workplace-injury",
  label: "Workplace Injury",
  icon: "work",
  image: {
    src: "/images/site/workplace-injury.jpg",
    alt: "A hard hat and work gloves resting on scaffolding at a high-rise construction site at dusk",
  },
  keyword: "Philadelphia Workplace Injury Lawyer",
  metaDescription:
    "Hurt on the job? Our Philadelphia workplace injury lawyer explains workers' comp and third-party claims. Free consultation, no upfront fees. Call us 24/7.",
  summary:
    "Construction, warehouse and on-the-road injuries. We explain workers' compensation and look for third parties who may also be responsible.",
  heroLead:
    "Hurt on the job? Workers' compensation may be only part of the picture. We look at every source of recovery, not just the obvious one.",
  intro: {
    heading: "Hurt at work? Know all of your options",
    body: (
      <>
        <p>
          Philadelphia runs on people who do physical work: construction crews on Center City high-rises, warehouse
          and distribution workers in Northeast Philadelphia and along the I-95 corridor, drivers, dock workers and
          healthcare staff. When one of them gets hurt, a paycheck stops and the bills start.
        </p>
        <p>
          Most employees in Pennsylvania are covered by workers' compensation, which generally pays for medical
          treatment and a portion of lost wages no matter who was at fault. It is an important safety net, but it has
          limits. It generally does not pay for pain and suffering, and in most situations it prevents you from suing
          your employer.
        </p>
        <p>
          That is why the next question matters: was someone other than your employer also responsible? If a
          subcontractor, an equipment manufacturer, a property owner or a careless driver contributed to your injury,
          you may have a separate personal injury claim against that third party, in addition to workers'
          compensation. {site.name} helps injured workers understand both paths and pursue the compensation the law
          allows. The consultation is free, and there is no fee unless we recover for you.
        </p>
      </>
    ),
  },
  handles: {
    heading: "Workplace injury cases we handle",
    items: [
      "Construction site accidents, including falls from scaffolds, ladders and roofs",
      "Warehouse and distribution center injuries",
      "Forklift, pallet jack and loading dock accidents",
      "Defective or unguarded machinery and tools",
      "Workers struck by falling objects or moving equipment",
      "Vehicle crashes while driving for work",
      "Electrocutions, burns and explosions",
      "Injuries caused by another contractor on a shared job site",
    ],
  },
  injuries: {
    heading: "Common workplace injuries",
    lead: "Job site injuries often mean time away from work, which makes the financial pressure immediate.",
    items: [
      "Back, neck and spinal injuries",
      "Fractures and crush injuries",
      "Traumatic brain injuries from falls or falling objects",
      "Amputations and serious hand injuries",
      "Burns and electrical injuries",
      "Torn rotator cuffs and knee injuries from lifting and carrying",
      "Eye injuries and hearing loss",
      "Fatal injuries",
    ],
  },
  sections: [
    {
      heading: "Workers' compensation basics",
      body: (
        <>
          <ul>
            <li>
              <strong>It is generally no-fault.</strong> You usually do not have to prove your employer did anything
              wrong.
            </li>
            <li>
              <strong>It generally covers</strong> reasonable medical treatment for the injury and a portion of your
              lost wages.
            </li>
            <li>
              <strong>It generally does not cover</strong> pain and suffering.
            </li>
            <li>
              <strong>Report the injury promptly.</strong> Pennsylvania sets deadlines for telling your employer
              about a work injury, and waiting can put your benefits at risk. Report it in writing as soon as you
              can, and keep a copy.
            </li>
            <li>
              <strong>Get medical care</strong> and tell the provider the injury happened at work. Your employer may
              have a list of approved providers for initial treatment.
            </li>
          </ul>
          <p>
            Deadlines apply to both workers' compensation and injury claims. Call us to learn how they affect your
            case.
          </p>
        </>
      ),
    },
    {
      heading: "When a third party may also be responsible",
      body: (
        <>
          <p>
            Workers' compensation covers claims against your employer. It does not protect other companies or people
            whose carelessness hurt you. Common third parties include:
          </p>
          <ul>
            <li>
              <strong>Equipment manufacturers,</strong> when a machine, tool or safety device was defective.
            </li>
            <li>
              <strong>Contractors and subcontractors,</strong> when another company on the site created the hazard or
              was responsible for site safety.
            </li>
            <li>
              <strong>Property owners,</strong> when a dangerous condition on someone else's property caused the
              injury.
            </li>
            <li>
              <strong>Drivers,</strong> when you were hit while working on the road or driving for your job. See our{" "}
              <A href="/car-accidents">car accident</A> and <A href="/car-accidents/truck-accidents">truck accident</A>{" "}
              pages.
            </li>
          </ul>
          <p>
            A third-party claim can seek damages that workers' compensation does not pay, including pain and
            suffering. The two claims can run at the same time and they affect each other, which is one more reason
            to get advice early. If a workplace incident took the life of someone in your family, our{" "}
            <A href="/wrongful-death">wrongful death page</A> explains the options.
          </p>
        </>
      ),
    },
  ],
  steps: {
    heading: "How we help injured workers",
    items: [
      {
        title: "Free consultation",
        body: "Tell us how you were hurt and who was on the job site. We will explain how workers' compensation and a third-party claim may fit together.",
      },
      {
        title: "We look for every responsible party",
        body: "We review incident reports, contracts, equipment and site conditions to find out whether anyone besides your employer contributed.",
      },
      {
        title: "We pursue the claim",
        body: "We deal with the insurers, negotiate for you, and litigate when that is what it takes. You pay no fee unless we recover.",
      },
    ],
  },
  faqHeading: "Workplace injury questions",
  faqs: [
    {
      q: "Can I sue my employer for a workplace injury in Pennsylvania?",
      a: "Generally, no. Workers' compensation is usually the only remedy against your employer, with limited exceptions. You may, however, have a separate claim against a third party, such as another contractor, an equipment manufacturer or a driver, whose negligence contributed to the injury.",
    },
    {
      q: "What is a third-party claim?",
      a: "It is a personal injury claim against someone other than your employer who helped cause your work injury. Unlike workers' compensation, a third-party claim can include damages for pain and suffering.",
    },
    {
      q: "How soon do I need to report my injury?",
      a: "As soon as possible. Pennsylvania law sets deadlines for giving your employer notice of a work injury, and a delay can reduce or jeopardize your benefits. Report it in writing and keep a copy.",
    },
    {
      q: "Can I receive workers' compensation and bring a personal injury claim at the same time?",
      a: "In many cases, yes. Workers' compensation and a third-party claim can proceed together, although they affect each other. We can explain how the two fit together in your situation.",
    },
    {
      q: "I was hurt on a construction site with several contractors. Who is responsible?",
      a: "It depends on who controlled the work and who created or failed to correct the hazard. A general contractor, a subcontractor, a property owner or an equipment supplier may share responsibility. We review the contracts and the site conditions to find out.",
    },
    {
      q: `What does it cost to talk to ${site.name} about a work injury?`,
      a: "Nothing. The consultation is free, there are no upfront fees, and we are paid only if we recover compensation for you.",
    },
  ],
  related: ["/premises-liability-slip-and-fall", "/car-accidents/truck-accidents", "/wrongful-death"],
};
