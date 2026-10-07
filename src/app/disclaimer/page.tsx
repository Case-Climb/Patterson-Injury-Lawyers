import Link from "next/link";
import { fullAddress, site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMetadata({
  title: "Legal Disclaimer",
  description:
    "Read the legal disclaimer for the Patterson Injury Lawyers website: attorney advertising, no attorney-client relationship and general information only.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage title="Legal Disclaimer" crumb={{ name: "Disclaimer", path: "/disclaimer" }} updated="October 1, 2026">
      <h2>Attorney advertising</h2>
      <p>
        This website is attorney advertising. It is published by {site.name}, {fullAddress}. The attorney responsible
        for its content is {site.attorney.name}
      </p>

      <h2>General information only</h2>
      <p>
        The content of this website, including the practice area pages, blog articles and answers to frequently asked
        questions, is provided for general information. It is not legal advice and should not be relied on as legal
        advice. Laws change, and how the law applies depends on the specific facts of each situation. You should not
        act, or decide not to act, based on anything on this site without speaking to a licensed attorney about your
        own circumstances.
      </p>

      <h2>No attorney-client relationship</h2>
      <p>
        Viewing this website, calling our office, sending an email, sending a message through WhatsApp or submitting
        the contact form does not create an attorney-client relationship between you and {site.name}. An
        attorney-client relationship is formed only when both you and the firm agree to it in a signed, written
        agreement.
      </p>
      <p>
        Until that happens, please do not send us confidential or time-sensitive information through this website.
        Information sent before an attorney-client relationship exists may not be treated as privileged or
        confidential.
      </p>

      <h2>Results vary</h2>
      <p>
        Every case is different. The outcome of any legal matter depends on its particular facts, the applicable law
        and many other factors. Nothing on this website is a promise, a guarantee or a prediction about the outcome
        of your matter. Any description of a past matter reflects that matter only and does not guarantee a
        similar result in another case.
      </p>

      <h2>Images on this website</h2>
      <p>
        Some photographs on this website are illustrative images created for the site. They are not photographs of
        actual clients, cases, accident scenes or the firm's office, and any people or places shown are depictions
        only.
      </p>

      <h2>Fees and costs</h2>
      <p>
        References on this website to "no upfront fees," "no fee unless we recover" and a "free consultation" describe
        how the firm generally handles personal injury matters. The specific terms that apply to you, including how
        fees and case costs are handled, are set out in a written fee agreement that we review with you before you
        decide to hire the firm.
      </p>

      <h2>Deadlines</h2>
      <p>
        Legal claims are subject to deadlines, including statutes of limitations and notice requirements. Some are
        short. Reading this website does not stop any deadline from running. If you believe you have a claim, contact
        an attorney promptly.
      </p>

      <h2>Links to other websites</h2>
      <p>
        This website may link to sites operated by others, such as Google, Facebook and Instagram. Those links are
        provided for convenience. {site.name} does not control those sites and is not responsible for their content
        or privacy practices.
      </p>

      <h2>Questions</h2>
      <p>
        If you have questions about this disclaimer, call <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>{" "}
        or email <a href={`mailto:${site.email}`}>{site.email}</a>. You can also read our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
        <Link href="/terms-and-conditions">Terms and Conditions</Link>.
      </p>
    </LegalPage>
  );
}
