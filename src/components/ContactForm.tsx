"use client";

import Link from "next/link";
import { LoaderCircle, Send } from "lucide-react";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { isPlaceholder, site } from "@/config/site";
import { buttonClass, cx } from "@/components/ui";

export const CASE_TYPES = [
  "Car Accident",
  "Truck Accident",
  "Motorcycle Accident",
  "Pedestrian Accident",
  "Slip and Fall / Premises Liability",
  "Dog Bite",
  "Workplace Injury",
  "Wrongful Death",
  "Other / Not Sure",
];

type Status = "idle" | "sending" | "sent" | "error";
type Grecaptcha = { ready: (cb: () => void) => void; execute: (key: string, opts: { action: string }) => Promise<string> };

const recaptchaReady = !isPlaceholder(site.recaptchaSiteKey);

/** Loads reCAPTCHA v3 on first use and returns a token, or "" if it is not configured. */
async function getRecaptchaToken(): Promise<string> {
  if (!recaptchaReady) return "";
  const w = window as unknown as { grecaptcha?: Grecaptcha };
  if (!w.grecaptcha) {
    await new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${site.recaptchaSiteKey}`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("reCAPTCHA failed to load"));
      document.head.appendChild(script);
    });
  }
  const grecaptcha = w.grecaptcha;
  if (!grecaptcha) return "";
  return new Promise((resolve) => {
    grecaptcha.ready(() => {
      grecaptcha.execute(site.recaptchaSiteKey, { action: "contact" }).then(resolve, () => resolve(""));
    });
  });
}

const fieldClass =
  "mt-2 block w-full rounded-2xl border border-navy/20 bg-white px-4 py-3 text-base text-ink placeholder:text-body/60 focus:border-navy";

export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [sentName, setSentName] = useState("");
  const confirmationRef = useRef<HTMLDivElement>(null);

  // The confirmation replaces a much taller form, so move focus (and the viewport) to it.
  useEffect(() => {
    if (status === "sent") confirmationRef.current?.focus();
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    setErrorMessage("");

    try {
      const recaptchaToken = await getRecaptchaToken().catch(() => "");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.message ?? "The message could not be sent.");
      }
      setSentName(data.name?.split(" ")[0] ?? "");
      setStatus("sent");
      form.reset();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "The message could not be sent.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        ref={confirmationRef}
        tabIndex={-1}
        role="status"
        className="scroll-mt-28 rounded-3xl border border-line bg-white p-8 outline-none sm:p-10"
      >
        <h3 className="text-3xl">Message sent{sentName ? `, ${sentName}` : ""}.</h3>
        <p className="mt-4">
          Your case review request is with our team and we will get back to you soon. If it is urgent, call{" "}
          <a href={`tel:${site.phone.tel}`} className="prose-link">
            {site.phone.display}
          </a>{" "}
          any time, day or night.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className={buttonClass("outline-dark", "md", "mt-6")}>
          Send another message
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-white p-6 sm:p-9" aria-describedby={`${id}-note`}>
      <p id={`${id}-note`} className="text-sm">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-name`} className="text-sm font-semibold text-ink">
            Full name *
          </label>
          <input id={`${id}-name`} name="name" type="text" required autoComplete="name" maxLength={200} className={fieldClass} />
        </div>

        <div>
          <label htmlFor={`${id}-email`} className="text-sm font-semibold text-ink">
            Email *
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={200}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={`${id}-phone`} className="text-sm font-semibold text-ink">
            Phone *
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            maxLength={40}
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-case`} className="text-sm font-semibold text-ink">
            Type of case *
          </label>
          <select id={`${id}-case`} name="caseType" required defaultValue="" className={cx(fieldClass, "appearance-auto")}>
            <option value="" disabled>
              Choose the closest match
            </option>
            {CASE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className="text-sm font-semibold text-ink">
            What happened? *
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            required
            rows={5}
            maxLength={4000}
            aria-describedby={`${id}-message-hint`}
            className={fieldClass}
          />
          <p id={`${id}-message-hint`} className="mt-2 text-sm">
            A few sentences is plenty: when and where it happened, and how you were hurt. Please leave out anything
            you would not want sent by email.
          </p>
        </div>

        {/* Honeypot. Hidden from people; bots tend to fill it in. */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor={`${id}-company`}>Company</label>
          <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="sm:col-span-2">
          <label className="flex cursor-pointer gap-3 text-[0.925rem] leading-relaxed">
            <input type="checkbox" name="consent" value="yes" required className="mt-1 size-5 shrink-0 accent-navy" />
            <span>
              I agree to be contacted by {site.name} about my inquiry. I understand that sending this form does not
              create an attorney-client relationship, and I have read the{" "}
              <Link href="/privacy-policy" className="prose-link">
                Privacy Policy
              </Link>
              . *
            </span>
          </label>
        </div>

        {/*
          reCAPTCHA PLACEHOLDER
          Set `recaptchaSiteKey` in src/config/site.ts and RECAPTCHA_SECRET_KEY in
          the hosting environment. reCAPTCHA v3 then runs invisibly on submit and
          this marker disappears.
        */}
        {!recaptchaReady ? (
          <p
            data-placeholder="recaptcha"
            className="rounded-2xl border-2 border-dashed border-navy/25 px-4 py-3 text-sm sm:col-span-2"
          >
            reCAPTCHA placeholder: spam protection will run here once the site key is added.
          </p>
        ) : (
          <p className="text-xs leading-relaxed sm:col-span-2">
            This form is protected by reCAPTCHA. The Google{" "}
            <a href="https://policies.google.com/privacy" className="prose-link" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="https://policies.google.com/terms" className="prose-link" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={sending} className={buttonClass("primary", "lg", "disabled:opacity-70")}>
          {sending ? (
            <LoaderCircle aria-hidden="true" className="size-5 animate-spin" />
          ) : (
            <Send aria-hidden="true" className="size-5" strokeWidth={2.1} />
          )}
          {sending ? "Sending message" : "Send My Free Case Review"}
        </button>
        <p className="text-sm">Free consultation. No upfront fees.</p>
      </div>

      <div aria-live="polite" className="mt-4 empty:mt-0">
        {status === "error" ? (
          <p className="rounded-2xl border border-red-700/30 bg-red-50 px-4 py-3 text-[0.95rem] text-red-900">
            <strong className="font-semibold">Your message was not sent.</strong> {errorMessage} Call{" "}
            <a href={`tel:${site.phone.tel}`} className="font-semibold underline">
              {site.phone.display}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold underline">
              {site.email}
            </a>{" "}
            and we will pick it up from there.
          </p>
        ) : null}
      </div>
    </form>
  );
}
