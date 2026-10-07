import Script from "next/script";
import { site } from "@/config/site";

/**
 * Free case review form, embedded from the firm's intake platform.
 * The form itself (fields, spam protection, delivery) is managed there;
 * the IDs live in `intakeForm` in src/config/site.ts.
 */
export function FormEmbed() {
  const { id, name, height, baseUrl } = site.intakeForm;
  const frameId = `inline-${id}`;

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white p-2 sm:p-3">
      {/* The embed script resizes the frame to fit the form; min-height reserves space until it does. */}
      <div style={{ minHeight: height }}>
        <iframe
          src={`${baseUrl}/widget/form/${id}`}
          id={frameId}
          title={name}
          loading="lazy"
          style={{ width: "100%", height: "100%", minHeight: height, border: "none", borderRadius: 10 }}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={name}
          data-height={height}
          data-layout-iframe-id={frameId}
          data-form-id={id}
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
        />
      </div>
      <Script src={`${baseUrl}/js/form_embed.js`} strategy="afterInteractive" />
    </div>
  );
}
