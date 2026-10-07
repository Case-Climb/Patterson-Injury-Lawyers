import Link from "next/link";
import { fullAddress, site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMetadata({
  title: "Terms and Conditions",
  description:
    "Read the terms and conditions for using the Patterson Injury Lawyers website, including the limits on its content. Questions? Contact our Philadelphia office.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      crumb={{ name: "Terms and Conditions", path: "/terms-and-conditions" }}
      updated="October 1, 2026"
    >
      <p>
        These terms govern your use of the {site.name} website at {site.url.replace("https://", "")}. By using the
        site, you agree to them. If you do not agree, please do not use the site.
      </p>

      <h2>No legal advice and no attorney-client relationship</h2>
      <p>
        This website provides general information about {site.name} and about personal injury law. It is not legal
        advice. Using the site or contacting us through it does not create an attorney-client relationship. Please
        read our <Link href="/disclaimer">Disclaimer</Link>, which is part of these terms.
      </p>

      <h2>Using the site</h2>
      <p>You agree to use this website only for lawful purposes. You agree not to:</p>
      <ul>
        <li>Submit false, misleading or unlawful information through the contact form or chat</li>
        <li>Attempt to interfere with the site's operation or security</li>
        <li>Use automated tools to send spam or to copy the site's content in bulk</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The text, design, logo and other content on this website belong to {site.name} or its licensors and are
        protected by copyright and trademark law. You may view and print pages for your personal, non-commercial use.
        Any other use requires our written permission.
      </p>

      <h2>Links to other websites</h2>
      <p>
        This site contains links to websites operated by others. We provide them for convenience only. We do not
        control those sites and are not responsible for their content, accuracy or privacy practices.
      </p>

      <h2>No warranties</h2>
      <p>
        We work to keep the information on this website accurate and current, but we provide the site "as is" and
        make no warranties about its completeness, accuracy or availability. Laws change, and information on the
        site may not reflect the most recent developments.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.name} is not liable for any loss or damage arising from your
        use of, or reliance on, this website or any site linked from it. Nothing in these terms limits any duty we
        owe to a client under a signed fee agreement or under the rules of professional conduct.
      </p>

      <h2>Privacy</h2>
      <p>
        Our <Link href="/privacy-policy">Privacy Policy</Link> explains how we collect and use information through
        this website.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to its conflict of
        law rules.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The date at the top of the page shows when they were last
        revised. Continuing to use the site after a change means you accept the updated terms.
      </p>

      <h2>Contact us</h2>
      <p>
        {site.name}
        <br />
        {fullAddress}
        <br />
        Phone: <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
        <br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  );
}
