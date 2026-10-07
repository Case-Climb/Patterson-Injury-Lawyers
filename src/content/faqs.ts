import { phoneText, site } from "@/config/site";
import type { Faq } from "@/lib/schema";

/**
 * The five questions from the firm's original site, lightly expanded.
 * Used on the homepage and reused inside the full FAQ page below.
 */
const doIHaveACase: Faq = {
  q: "Do I have a case?",
  a: `The quickest way to find out is to call us for a free consultation and speak with an attorney. We will ask what happened, how you were hurt and what insurance is involved, then tell you plainly whether we think you have a claim. Call ${phoneText} any time.`,
};

const howMuchDoYouCharge: Faq = {
  q: "How much do you charge?",
  a: "There are no upfront fees or out-of-pocket costs. We do not get paid unless we recover for you.",
};

const howMuchIsMyCaseWorth: Faq = {
  q: "How much is my case worth?",
  a: "It depends on your injuries, your treatment, how the accident happened and the insurance available, so no honest lawyer can put a number on it in a first phone call. We are available 24/7 to help you evaluate your case and explain what goes into its value.",
};

const whatToDoAfterAnAccident: Faq = {
  q: "What do I do after an accident?",
  a: `Get information from everyone involved, including driver's license, insurance and contact details. Take pictures of the scene. If you slipped and fell, photograph the dangerous condition that caused the fall. Seek medical attention right away. Then call ${site.name} at ${phoneText}.`,
};

const whenWillIGetMyMoney: Faq = {
  q: "When will I get my money?",
  a: "Every case moves on its own timeline. It depends on how long your medical treatment takes, how the insurance company responds and whether a lawsuit is needed. We cannot promise a specific date, but we work to move your case forward efficiently and keep you updated along the way.",
};

export const homeFaqs: Faq[] = [
  doIHaveACase,
  howMuchDoYouCharge,
  howMuchIsMyCaseWorth,
  whatToDoAfterAnAccident,
  whenWillIGetMyMoney,
];

export type FaqGroup = { id: string; title: string; faqs: Faq[] };

/** Full FAQ page: 17 questions in four groups. */
export const faqGroups: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    faqs: [
      doIHaveACase,
      {
        q: "What happens during the free consultation?",
        a: "We talk through what happened, your injuries, your medical care so far and the insurance involved. You can ask anything you like. At the end we will tell you whether we think you have a claim and what the next steps would be. There is no cost and no obligation to hire us.",
      },
      {
        q: "Do I need a lawyer, or can I handle the insurance company myself?",
        a: "You are allowed to handle a claim yourself. Keep in mind that insurance adjusters do this every day and their goal is to pay as little as possible. A lawyer levels that out by gathering the evidence, valuing the claim and handling the negotiation. Because the consultation is free, it costs nothing to find out what we would do differently.",
      },
      {
        q: "What areas do you serve?",
        a: "We represent injured people throughout Philadelphia and the surrounding counties, including Montgomery County and Delaware County. Our office is at 1650 Market Street in Center City, and we can start by phone wherever you are.",
      },
    ],
  },
  {
    id: "costs",
    title: "Costs",
    faqs: [
      howMuchDoYouCharge,
      {
        q: "What does \"no fee unless we recover\" mean?",
        a: "It means our fee comes out of the compensation we recover for you. If there is no recovery, you do not owe us a fee. The details are set out in a written fee agreement that we go over with you before you decide to hire us.",
      },
      {
        q: "Is the consultation really free?",
        a: "Yes. The consultation is free whether or not you hire us, and whether or not we think you have a case.",
      },
    ],
  },
  {
    id: "after-an-accident",
    title: "After an Accident",
    faqs: [
      whatToDoAfterAnAccident,
      {
        q: "Should I see a doctor even if I feel okay?",
        a: "Yes. Some injuries, including concussions and soft tissue injuries, do not show symptoms right away. Getting checked protects your health and creates a medical record that connects your injuries to the accident.",
      },
      {
        q: "Should I talk to the insurance company?",
        a: "You should report the accident to your own insurer. Be careful with the other side's insurance company. You are generally not required to give them a recorded statement, and what you say can be used to reduce your claim. It is usually best to speak with us first.",
      },
      {
        q: "What if I was partly at fault?",
        a: "You may still have a claim. Pennsylvania generally follows a comparative negligence rule, under which shared fault can reduce a recovery rather than automatically prevent one. How it applies depends on the facts, so call us to talk through your situation.",
      },
      {
        q: "What should I bring to my consultation?",
        a: "Anything you have: photos, the police report or report number, the other party's information, your insurance card or policy, medical paperwork and any letters from an insurance company. If you do not have these yet, call anyway. We can help you track them down.",
      },
    ],
  },
  {
    id: "your-case-and-settlement",
    title: "Your Case & Settlement",
    faqs: [
      howMuchIsMyCaseWorth,
      whenWillIGetMyMoney,
      {
        q: "How long do I have to file a claim in Pennsylvania?",
        a: "Deadlines apply to personal injury claims in Pennsylvania, and shorter notice periods can apply in some situations, such as claims involving a government entity. Missing a deadline can end a claim, so call us to learn how they affect your case.",
      },
      {
        q: "Will my case go to court?",
        a: "Many injury claims are resolved through negotiation without a trial. If the insurance company will not make a fair offer, we are prepared to file a lawsuit and take the case as far as it needs to go. The decision to settle is always yours.",
      },
      {
        q: "How will I know what is happening with my case?",
        a: `We are a client-centric firm, and keeping you informed is part of that. We update you as your case moves, and you can call ${phoneText} any time you have a question.`,
      },
    ],
  },
];

export const allFaqs: Faq[] = faqGroups.flatMap((group) => group.faqs);
