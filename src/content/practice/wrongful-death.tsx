import { site } from "@/config/site";
import { A, type PracticeArea } from "./types";

export const wrongfulDeath: PracticeArea = {
  path: "/wrongful-death",
  label: "Wrongful Death",
  icon: "wrongful-death",
  image: {
    src: "/images/site/wrongful-death.jpg",
    alt: "Two people's hands clasped together in comfort on a wooden table beside a window",
  },
  keyword: "Philadelphia Wrongful Death Lawyer",
  metaDescription:
    "Lost a loved one to negligence? Our Philadelphia wrongful death lawyer answers your family's questions with care. Free, no-pressure consultation. Call us.",
  summary:
    "Compassionate help for families who have lost someone to another's carelessness. We answer your questions at your pace, with no pressure.",
  heroLead:
    "Nothing written here can make this easier. If you have lost someone because of another person's carelessness, we are here to answer your questions whenever you are ready.",
  intro: {
    heading: "When a family loses someone who should still be here",
    body: (
      <>
        <p>
          Losing a family member suddenly is hard enough. Learning that it could have been prevented, by a driver who
          was not paying attention, a truck that should not have been on the road or a hazard nobody fixed, adds
          anger and unanswered questions to the grief.
        </p>
        <p>
          A wrongful death claim cannot undo what happened. What it can do is help a family find out why it happened,
          hold the responsible party accountable and ease the financial strain that often follows a loss: the medical
          bills from the final injury, the funeral costs, and the income and support the person provided.
        </p>
        <p>
          {site.name} handles wrongful death claims for families in Philadelphia and the surrounding counties. These
          cases arise from <A href="/car-accidents">car</A>, <A href="/car-accidents/truck-accidents">truck</A>,{" "}
          <A href="/car-accidents/motorcycle-accidents">motorcycle</A> and{" "}
          <A href="/car-accidents/pedestrian-accidents">pedestrian</A> crashes, from{" "}
          <A href="/premises-liability-slip-and-fall">unsafe property</A> and from{" "}
          <A href="/workplace-injury">workplace incidents</A>. We take on the investigation, the paperwork and the
          insurance companies so that your family does not have to. There is no cost to talk with us, no fee unless
          we recover, and no obligation. You decide if and when to take a next step.
        </p>
      </>
    ),
  },
  handles: {
    heading: "Cases we help families with",
    items: [
      "Fatal car, truck and motorcycle crashes",
      "Pedestrians struck and killed by vehicles",
      "Deaths involving drunk or distracted drivers",
      "Deaths caused by unsafe property conditions",
      "Fatal construction and workplace incidents involving third parties",
      "Fatal dog attacks",
    ],
  },
  injuries: {
    heading: "What a family may pursue",
    lead: "Every family's situation is different. Depending on the facts, a claim may include:",
    items: [
      "Funeral and burial expenses",
      "Medical bills related to the final injury",
      "The income and financial support the person would have provided",
      "The loss of the person's services, guidance and companionship",
      "Costs of administering the estate",
      "Through a related survival claim, losses the person suffered before passing",
    ],
  },
  sections: [
    {
      heading: "Who may file on behalf of a family",
      body: (
        <>
          <p>
            In Pennsylvania, a wrongful death claim is generally brought by the personal representative of the
            person's estate. That is the executor named in a will, or an administrator appointed when there is no
            will. The claim is brought on behalf of the family members the law recognizes as beneficiaries, generally
            a spouse, children and parents. In some situations a family member may be able to file directly.
          </p>
          <p>
            There is often a companion claim called a survival action, brought on behalf of the estate for losses the
            person suffered before passing. If no estate has been opened yet, we can explain how that process works
            and help you take the first step.
          </p>
          <p>
            Deadlines do apply to these claims. We know timing is the last thing a grieving family wants to think
            about, so when you call we will simply tell you where things stand and what, if anything, needs attention
            soon.
          </p>
        </>
      ),
    },
    {
      heading: "At your pace, with no pressure",
      body: (
        <>
          <p>
            You will not be rushed. We can talk by phone or in person, whenever it suits your family, and you are
            welcome to bring anyone you want with you. We will explain what a claim involves in plain English, answer
            every question you have and then leave the decision with you.
          </p>
          <p>
            If you choose to go forward, we handle the communication with insurance companies and the other side, so
            those calls stop coming to you. You can learn more about who we are on our{" "}
            <A href="/attorney">attorney page</A>.
          </p>
        </>
      ),
    },
  ],
  steps: {
    heading: "How we help families",
    items: [
      {
        title: "A conversation, when you are ready",
        body: "We listen first. Then we explain who may file, what a claim can and cannot do, and what the next step would be. There is no cost.",
      },
      {
        title: "We look into what happened",
        body: "We gather the reports, records and evidence to understand how the loss occurred and who is responsible, and we keep you informed.",
      },
      {
        title: "We pursue the claim for your family",
        body: "We deal with the insurers and, if necessary, the courts, so your family can focus on each other. There is no fee unless we recover.",
      },
    ],
  },
  faqHeading: "Wrongful death questions",
  faqs: [
    {
      q: "Who can file a wrongful death claim in Pennsylvania?",
      a: "Generally, the claim is brought by the personal representative of the person's estate on behalf of certain family members, typically a spouse, children and parents. In some situations a family member may be able to file directly. We can explain how this applies to your family.",
    },
    {
      q: "What is the difference between a wrongful death claim and a survival action?",
      a: "A wrongful death claim addresses the losses suffered by surviving family members. A survival action is brought on behalf of the estate for losses the person suffered before passing. The two are often brought together.",
    },
    {
      q: "What damages can a family pursue?",
      a: "Depending on the facts, a claim may include funeral and medical expenses, the financial support the person would have provided, and the loss of the person's services, guidance and companionship. Every case is different, and we will give you an honest assessment after hearing yours.",
    },
    {
      q: "Is there a deadline to file a wrongful death claim?",
      a: "Yes, deadlines apply in Pennsylvania, and shorter notice periods can apply in some situations. Call us to learn how they affect your family's case. We will tell you plainly where things stand.",
    },
    {
      q: "Does there have to be a criminal case?",
      a: "No. A civil wrongful death claim is separate from any criminal case. It has a different purpose and a different burden of proof, and it can go forward whether or not criminal charges are filed.",
    },
    {
      q: "What does it cost to speak with you?",
      a: `Nothing. The consultation with ${site.name} is free, there are no upfront fees, and there is no fee unless we recover for your family. There is also no obligation to move forward.`,
    },
  ],
  related: ["/car-accidents", "/car-accidents/truck-accidents", "/workplace-injury"],
  cta: {
    title: "We are here when you are ready.",
    text: "Call any time, day or night. There is no cost and no obligation.",
  },
};
