import { phoneText, site } from "@/config/site";
import { A, type PracticeArea } from "./types";

export const dogBite: PracticeArea = {
  path: "/dog-bite",
  label: "Dog Bite",
  icon: "dog",
  image: {
    src: "/images/site/dog-bite.jpg",
    alt: "A large dog pulling against its leash on a residential sidewalk lined with brick rowhouses",
  },
  keyword: "Philadelphia Dog Bite Lawyer",
  metaDescription:
    "Bitten by a dog? Our Philadelphia dog bite lawyer helps you recover for medical care, scarring and more. Free consultation and no upfront fees. Call today.",
  summary:
    "Bites, facial injuries and scarring, often to children. We deal with the owner's insurer and document the full cost of treatment.",
  heroLead:
    "A dog attack is over in seconds. The scars, the medical bills and the fear can last much longer. We help you hold the owner accountable.",
  intro: {
    heading: "When someone else's dog hurts you or your child",
    body: (
      <>
        <p>
          Most dog bites do not come from strays. They come from a neighbor's dog that got out of the yard, a dog off
          its leash at the park, or a pet in a home you were visiting or delivering to. One moment everything is
          normal. The next, someone needs emergency care.
        </p>
        <p>
          Dog owners in Pennsylvania are generally responsible for keeping their dogs under control, and a person who
          is bitten can generally seek compensation from the owner. In practice, these claims are often paid by a
          homeowner's or renter's insurance policy rather than out of the owner's pocket. That matters, because many
          people hesitate to bring a claim against a neighbor, a friend or a relative.
        </p>
        <p>
          {site.name} represents dog bite victims in Philadelphia and the surrounding counties. We deal with the
          insurance company, document the injuries, including scarring and the need for future treatment, and pursue
          the claim while you or your child heal. The consultation is free, there are no upfront fees, and we are not
          paid unless we recover for you. To see the other kinds of cases we handle, visit our{" "}
          <A href="/practice-areas">practice areas page</A>.
        </p>
      </>
    ),
  },
  handles: {
    heading: "Dog bite cases we handle",
    items: [
      "Bites and attacks by a neighbor's dog",
      "Attacks by off-leash dogs on sidewalks, in parks and in common areas",
      "Bites to delivery workers, mail carriers and other visitors",
      "Attacks on children",
      "Knockdown injuries caused by a jumping or charging dog",
      "Attacks in apartment buildings and rental properties",
      "Cases involving dogs with a known history of aggression",
      "Injuries suffered while escaping or breaking up an attack",
    ],
  },
  injuries: {
    heading: "Common dog bite injuries",
    lead: "Bites tear as well as puncture, so even a short attack can leave permanent marks.",
    items: [
      "Puncture wounds and deep lacerations",
      "Facial injuries to the lips, cheeks, eyes and ears",
      "Permanent scarring and disfigurement",
      "Nerve and tendon damage, especially in the hands and arms",
      "Infections and the need for rabies treatment",
      "Broken bones from being knocked down",
      "Injuries that need plastic or reconstructive surgery",
      "Emotional trauma, including lasting fear and nightmares",
    ],
  },
  sections: [
    {
      heading: "Children are bitten most often, and often on the face",
      body: (
        <>
          <p>
            Children are among the most frequent victims of dog bites. Because of their height, they are often bitten
            on the face, head and neck, where the injuries are most visible and most complicated to treat.
          </p>
          <p>
            A scar on a child changes as the child grows. Some need revision surgery years later, and the emotional
            effects, such as fear of dogs or trouble sleeping, can last. A claim for a child should account for
            future treatment, not just the emergency room bill. Settlements for children also generally involve
            additional steps designed to protect the child, and we guide parents through them.
          </p>
        </>
      ),
    },
    {
      heading: "Owner responsibility, medical care and documentation",
      body: (
        <>
          <p>
            Pennsylvania law generally requires owners to keep their dogs confined or under control. A person who is
            bitten can generally recover medical costs from the owner, and may pursue additional damages depending on
            how serious the injury is and what the owner knew or did. What you do in the first few days makes those
            claims easier to prove:
          </p>
          <ul>
            <li>Get medical care right away. Dog bites carry a high risk of infection.</li>
            <li>Identify the dog and its owner, and ask for proof of rabies vaccination.</li>
            <li>Report the bite to local animal control or the police.</li>
            <li>Photograph the injuries the day they happen and again as they heal.</li>
            <li>Keep torn or bloodied clothing.</li>
            <li>Write down the names of anyone who saw the attack.</li>
            <li>Do not sign anything or give the owner's insurer a recorded statement before talking with us.</li>
          </ul>
          <p>
            If the attack happened at a business, an apartment complex or another property where the owner should
            have kept people safe, a <A href="/premises-liability-slip-and-fall">premises liability claim</A> may
            also be involved.
          </p>
        </>
      ),
    },
  ],
  steps: {
    heading: "How we help after a dog bite",
    items: [
      {
        title: "Free consultation",
        body: "Tell us what happened and show us the injuries. We will explain who may be responsible and which insurance is likely to apply.",
      },
      {
        title: "We document the injuries",
        body: "We gather medical records, photographs, bite reports and, where scarring is involved, opinions on future treatment.",
      },
      {
        title: "We deal with the owner's insurer",
        body: "We present the claim and negotiate for you, so you do not have to argue with a neighbor or an adjuster. No fee unless we recover.",
      },
    ],
  },
  faqHeading: "Dog bite questions",
  faqs: [
    {
      q: "Is a dog owner responsible if their dog bites me in Pennsylvania?",
      a: "Generally, yes. Pennsylvania law expects owners to keep their dogs under control, and a person who is bitten can generally recover medical costs from the owner. Additional damages may be available depending on the severity of the injury and the circumstances. We can explain how the law applies to your situation.",
    },
    {
      q: "The dog belongs to a friend or family member. Will they have to pay out of pocket?",
      a: "Often, no. Dog bite claims are frequently covered by the owner's homeowner's or renter's insurance, and the claim is handled with the insurance company rather than with the owner personally.",
    },
    {
      q: "What should I do right after a dog bite?",
      a: `Get medical care immediately, identify the dog and its owner, report the bite to animal control or the police, photograph the injuries and keep any damaged clothing. Then call ${site.name} at ${phoneText}.`,
    },
    {
      q: "Can I recover compensation for scarring?",
      a: "Scarring and disfigurement can be part of a dog bite claim, including the cost of future treatment such as revision surgery. What is recoverable depends on the injury and the facts, which is why careful medical documentation matters.",
    },
    {
      q: "My child was bitten. Is the process different?",
      a: "Somewhat. A parent or guardian generally brings the claim on the child's behalf, the claim should account for future medical and emotional needs, and settlements for children generally involve extra steps meant to protect the child. We walk parents through each one.",
    },
    {
      q: "What does it cost to hire a dog bite lawyer?",
      a: "There are no upfront fees or out-of-pocket costs. The consultation is free, and we are paid only if we recover compensation for you.",
    },
  ],
  related: ["/premises-liability-slip-and-fall", "/car-accidents/pedestrian-accidents", "/workplace-injury"],
};
