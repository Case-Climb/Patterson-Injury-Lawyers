/**
 * localStorage key holding the visitor's cookie choice ("granted" or "denied").
 * Shared by the GA4 consent script in the root layout (server) and the cookie
 * banner (client), so it lives outside any "use client" module.
 */
export const CONSENT_STORAGE_KEY = "pil-cookie-consent";
