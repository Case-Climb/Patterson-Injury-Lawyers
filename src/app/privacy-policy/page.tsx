import Link from "next/link";
import { fullAddress, site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Read the Patterson Injury Lawyers privacy policy to learn what information this website collects, how it is used and the choices you have. Contact us anytime.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" crumb={{ name: "Privacy Policy", path: "/privacy-policy" }} updated="October 1, 2026">
      <p>
        {site.name} ("we," "us" or "our") respects your privacy. This policy explains what information we collect
        through {site.url.replace("https://", "")}, how we use it and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <h3>Information you give us</h3>
      <p>
        When you submit the contact form, call, email or message us, we collect the information you choose to
        provide. On the contact form this includes your name, email address, phone number, the type of case and your
        message.
      </p>
      <h3>Information collected automatically</h3>
      <p>
        Like most websites, our hosting provider records basic technical information when you visit, such as your IP
        address, browser type, device type, the pages you view and the date and time of your visit.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        We use a small number of essential cookies and similar storage to make the site work, for example to remember
        your cookie choice.
      </p>
      <p>
        With your permission, we also use Google Analytics to understand how visitors use the site. Analytics cookies
        are switched off by default. They are only set if you choose "Accept analytics" in the cookie banner. If you
        choose "Decline," or do not make a choice, analytics cookies are not set. You can change your choice at any
        time using the "Cookie preferences" link at the bottom of every page.
      </p>

      <h2>Third-party services</h2>
      <ul>
        <li>
          <strong>Google Maps.</strong> The contact and Philadelphia office pages show an embedded Google map. When
          the map loads, Google may collect information under its own privacy policy.
        </li>
        <li>
          <strong>Google reCAPTCHA.</strong> The contact form may use reCAPTCHA to protect against spam. Its use is
          subject to the Google Privacy Policy and Terms of Service.
        </li>
        <li>
          <strong>WhatsApp, Facebook and Instagram.</strong> If you follow a link to one of these services, that
          service's own privacy policy applies.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to your inquiry and evaluate whether we can help you</li>
        <li>To communicate with you about your potential or existing matter</li>
        <li>To operate, secure and improve this website</li>
        <li>To comply with legal and professional obligations</li>
      </ul>

      <h2>How we share information</h2>
      <p>We do not sell your personal information. We share it only:</p>
      <ul>
        <li>
          With service providers that help us run the site and our practice, such as website hosting, email delivery
          and analytics providers
        </li>
        <li>When the law, a court order or a rule of professional conduct requires it</li>
        <li>With your consent or at your direction</li>
      </ul>

      <h2>Contact form submissions and confidentiality</h2>
      <p>
        Submitting the contact form does not create an attorney-client relationship, and messages sent through the
        form are delivered by email. Please do not include confidential or sensitive details until we have agreed to
        represent you. See our <Link href="/disclaimer">Disclaimer</Link> for more information.
      </p>

      <h2>How long we keep information</h2>
      <p>
        We keep inquiry information for as long as needed to respond to you and to meet our legal and professional
        record-keeping obligations.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can decline analytics cookies, or change your mind later, using "Cookie preferences."</li>
        <li>
          You can ask us what information we hold about you, or ask us to correct or delete it, by contacting us at
          the details below. We will respond as the law requires.
        </li>
        <li>You can ask us to stop contacting you at any time.</li>
      </ul>

      <h2>Children</h2>
      <p>
        This website is not directed to children under 13, and we do not knowingly collect personal information from
        them. A parent or guardian should contact us on a child's behalf.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable steps to protect the information we collect. No website or email transmission is
        completely secure, so we cannot guarantee absolute security.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date at the top of the page shows when it was last revised.
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
