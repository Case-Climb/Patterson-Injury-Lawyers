import { phoneText, site } from "@/config/site";
import { A, type PracticeArea } from "./types";

export const carAccidents: PracticeArea = {
  path: "/car-accidents",
  label: "Car Accidents",
  icon: "car",
  image: {
    src: "/images/site/car-accidents.jpg",
    alt: "Two cars after a rear-end collision on a wet city street at dusk, with a crumpled bumper and a cracked taillight",
  },
  keyword: "Philadelphia Car Accident Lawyer",
  metaDescription:
    "Hurt in a crash? Our Philadelphia car accident lawyer handles the insurance companies for you. Free consultation and no fee unless we recover. Call 24/7.",
  summary:
    "Crashes on I-76, I-95, Roosevelt Boulevard and city streets. We deal with the insurers and explain how limited tort or full tort affects your claim.",
  heroLead:
    "A crash on I-95 or the Boulevard can upend your health, your work and your week. We deal with the insurance companies so you can focus on getting better.",
  intro: {
    heading: "After a crash in Philadelphia, you need someone in your corner",
    body: (
      <>
        <p>
          Philadelphia traffic is unforgiving. Between the Schuylkill Expressway (I-76), I-95, Roosevelt Boulevard and
          the tight grid of Center City, an ordinary commute can turn into an ambulance ride in seconds. When that
          happens, the bills start before the shock wears off: the emergency room, the body shop, the days of missed
          work.
        </p>
        <p>
          {site.name} represents drivers and passengers injured in car accidents across Philadelphia and the
          surrounding counties. We gather the evidence, deal with every insurance adjuster and push the claim forward
          while you concentrate on your recovery. The consultation is free, there are no upfront fees, and we are not
          paid unless we recover for you.
        </p>
        <p>
          Attorney <A href="/attorney">Derek M. Patterson</A> has worked for plaintiff firms and for an insurance
          defense firm, so he knows how insurers size up a claim and where they look for reasons to pay less. That
          insight shapes how we build every car accident case, from a rear-end collision in South Philadelphia to a
          multi-car pileup on the expressway. If your crash involved a commercial truck, a motorcycle or someone on
          foot, see our pages on <A href="/car-accidents/truck-accidents">truck accidents</A>,{" "}
          <A href="/car-accidents/motorcycle-accidents">motorcycle accidents</A> and{" "}
          <A href="/car-accidents/pedestrian-accidents">pedestrian accidents</A>.
        </p>
      </>
    ),
  },
  handles: {
    heading: "Car accident cases we handle",
    items: [
      "Rear-end and chain-reaction collisions",
      "Intersection, red-light and left-turn crashes",
      "Highway and merging accidents on I-76, I-95 and Roosevelt Boulevard",
      "Hit-and-run crashes",
      "Claims involving uninsured and underinsured drivers",
      "Rideshare and delivery vehicle accidents",
      "Distracted, drowsy and drunk driving crashes",
      "Injury claims for passengers",
    ],
  },
  injuries: {
    heading: "Common car accident injuries",
    lead: "Some injuries are obvious at the scene. Others show up days later, which is one reason to see a doctor right away.",
    items: [
      "Whiplash and other neck and back injuries",
      "Concussions and traumatic brain injuries",
      "Broken bones and fractures",
      "Herniated discs and spinal cord injuries",
      "Shoulder, knee and other joint injuries",
      "Cuts, burns and scarring",
      "Internal injuries",
      "Anxiety, sleep problems and other emotional harm after a crash",
    ],
  },
  sections: [
    {
      heading: "Pennsylvania's choice no-fault system, in plain English",
      body: (
        <>
          <p>
            Pennsylvania is a "choice no-fault" state. In general, the medical benefits on your own auto policy pay
            your first medical bills after a crash, no matter who caused it. Beyond that, what you can recover from
            the at-fault driver often depends on a choice made when the policy was bought: limited tort or full tort.
          </p>
          <ul>
            <li>
              <strong>Full tort</strong> generally keeps your right to seek compensation for pain and suffering, in
              addition to medical bills, lost wages and other out-of-pocket losses.
            </li>
            <li>
              <strong>Limited tort</strong> usually costs less. In exchange, it generally restricts claims for pain
              and suffering unless the injury meets the law's definition of serious or an exception applies.
            </li>
          </ul>
          <p>
            Many people do not know which option they have until after a crash, and limited tort is not always the end
            of the story, because exceptions exist. Bring your policy's declarations page, or just your insurance
            card, to your free consultation and we will explain how your coverage may affect your claim. Deadlines
            also apply to injury claims in Pennsylvania. Call us to learn how they affect your case.
          </p>
        </>
      ),
    },
    {
      heading: "Dealing with the insurance company",
      body: (
        <>
          <p>
            An adjuster may call within days of the crash. They are often friendly, and they may ask for a recorded
            statement or offer a quick check. Their job is to close the claim for as little as possible. Before you
            give a statement, sign a release or accept an offer, talk to us.
          </p>
          <p>
            We handle the communication with insurers, document your injuries and losses, and negotiate from the
            evidence. Pennsylvania also follows a comparative negligence rule: generally, being found partly at fault
            can reduce what you recover, so insurers often try to shift blame onto the injured person. We push back
            with facts.
          </p>
        </>
      ),
    },
  ],
  steps: {
    heading: "How we help after a car accident",
    items: [
      {
        title: "Free consultation",
        body: "Tell us what happened, by phone, any time. We will tell you plainly whether we think you have a case and what comes next.",
      },
      {
        title: "We investigate and build the claim",
        body: "We collect the police report, photos, witness statements, medical records and every insurance policy that may apply, including your tort selection.",
      },
      {
        title: "We negotiate, and litigate if needed",
        body: "We present the claim to the insurer and negotiate for you. If they will not be fair, we are prepared to file suit. You pay no fee unless we recover.",
      },
    ],
  },
  faqHeading: "Car accident questions",
  faqs: [
    {
      q: "What should I do right after a car accident in Philadelphia?",
      a: `Check for injuries and call 911. Exchange license, insurance and contact information with everyone involved, photograph the vehicles and the scene, and get medical attention right away, even if you feel fine. Then call ${site.name} at ${phoneText} before you speak with the other driver's insurance company.`,
    },
    {
      q: "What is the difference between limited tort and full tort?",
      a: "They are two options on Pennsylvania auto insurance policies. Full tort generally preserves your right to seek compensation for pain and suffering. Limited tort generally restricts that right unless the injury qualifies as serious or an exception applies. We can review your policy and explain how your selection may affect your claim.",
    },
    {
      q: "Can I still have a claim if I chose limited tort?",
      a: "Possibly. There are exceptions to limited tort, and you can generally still pursue economic losses such as medical bills and lost wages. Whether an exception applies depends on the facts, so call us to review your situation.",
    },
    {
      q: "Who pays my medical bills after a crash in Pennsylvania?",
      a: "In general, the medical benefits coverage on your own auto policy pays first, regardless of who caused the crash. After that, health insurance or other coverage may apply, and the at-fault driver's insurer may be responsible for further losses. We help sort out which coverage applies and in what order.",
    },
    {
      q: "Should I talk to the other driver's insurance company?",
      a: "You are generally not required to give the other driver's insurer a recorded statement, and what you say can be used to reduce your claim. It is usually better to let us handle those conversations for you.",
    },
    {
      q: "How much does it cost to hire a car accident lawyer?",
      a: "Nothing upfront. The consultation is free and there are no out-of-pocket costs to get started. We are paid only if we recover compensation for you.",
    },
  ],
  related: ["/premises-liability-slip-and-fall", "/workplace-injury", "/wrongful-death"],
  children: [
    "/car-accidents/truck-accidents",
    "/car-accidents/motorcycle-accidents",
    "/car-accidents/pedestrian-accidents",
  ],
};
