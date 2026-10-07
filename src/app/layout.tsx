import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/config/site";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer, MobileCallButton } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionProvider } from "@/components/Motion";
import { CONSENT_STORAGE_KEY } from "@/lib/consent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Philadelphia Personal Injury Lawyer | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    `Philly's Favorite Personal Injury Firm. Free consultation, no upfront fees, and no fee unless we recover for you. Call ${site.phone.display}, 24/7.`,
  applicationName: site.name,
  formatDetection: { telephone: true, address: true, email: true },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2b2c6c",
  width: "device-width",
  initialScale: 1,
};

/**
 * GA4 with Google Consent Mode.
 * Analytics storage is denied by default and only granted when the visitor
 * accepts in the cookie banner (src/components/CookieConsent.tsx).
 * PLACEHOLDER: replace G-XXXXXXXXXX via `ga4Id` in src/config/site.ts.
 */
const ga4Init = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied'
});
try {
  if (localStorage.getItem('${CONSENT_STORAGE_KEY}') === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
} catch (e) {}
gtag('js', new Date());
gtag('config', '${site.ga4Id}');`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        {/* GA4 placeholder tag (G-XXXXXXXXXX). Present on every page via the root layout. */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`} />
        <script id="ga4-init" dangerouslySetInnerHTML={{ __html: ga4Init }} />
        {/* Without JavaScript, scroll-reveal content must still be visible. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <MotionProvider>
          <Header />
          <main id="main" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <Footer />
          <MobileCallButton />
          <CookieConsent />
        </MotionProvider>
      </body>
    </html>
  );
}
