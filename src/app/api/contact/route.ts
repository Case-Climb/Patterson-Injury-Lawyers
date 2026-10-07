import { NextResponse } from "next/server";
import { site } from "@/config/site";

/**
 * Handles the free case review form on /contact.
 *
 * Delivery uses Resend (https://resend.com) over plain fetch, so there is no
 * extra dependency. Set these in the hosting environment (see .env.example):
 *   RESEND_API_KEY        API key from Resend
 *   CONTACT_FROM_EMAIL    a sender on a domain verified in Resend,
 *                         e.g. "Website <forms@pattersoninjury.com>"
 *   CONTACT_TO_EMAIL      optional, defaults to the firm email in src/config/site.ts
 *   RECAPTCHA_SECRET_KEY  optional, enables reCAPTCHA v3 verification
 *
 * Without RESEND_API_KEY the route logs the submission in development and
 * returns a clear "not connected" error in production, so a lead is never
 * silently dropped.
 */

type Body = Record<string, unknown>;

const str = (value: unknown, max = 4000) => (typeof value === "string" ? value.trim().slice(0, max) : "");
const emailOk = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function recaptchaPasses(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true; // not configured yet
  if (!token) return false;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const result = (await res.json()) as { success?: boolean; score?: number };
    return Boolean(result.success) && (result.score ?? 0) >= 0.5;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, message: "The form data could not be read." }, { status: 400 });
  }

  // Honeypot: pretend success so bots do not retry.
  if (str(body.company)) return NextResponse.json({ ok: true });

  const name = str(body.name, 200);
  const email = str(body.email, 200);
  const phone = str(body.phone, 40);
  const caseType = str(body.caseType, 80);
  const message = str(body.message);
  const consent = str(body.consent, 5) === "yes";

  if (!name || !emailOk(email) || phone.replace(/\D/g, "").length < 10 || !caseType || !message || !consent) {
    return NextResponse.json(
      { ok: false, message: "Some required fields are missing or not valid. Check your email and phone number." },
      { status: 422 },
    );
  }

  if (!(await recaptchaPasses(str(body.recaptchaToken, 4000)))) {
    return NextResponse.json({ ok: false, message: "The spam check did not pass." }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["Case type", caseType],
    ["Consent to contact", "Yes"],
    ["Message", message],
  ];
  const subject = `New free case review request: ${name} (${caseType})`;

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[contact] ${subject}\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}`);
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { ok: false, message: "The online form is not connected to our inbox yet." },
      { status: 503 },
    );
  }

  const html = `<h2>${escapeHtml(subject)}</h2><table cellpadding="6">${rows
    .map(
      ([k, v]) =>
        `<tr><td valign="top"><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("")}</table><p>Sent from ${site.url}/contact</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], subject, html, reply_to: email }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ ok: false, message: "Our mail service did not accept the message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
