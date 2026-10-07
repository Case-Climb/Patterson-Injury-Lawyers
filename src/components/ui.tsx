import Link from "next/link";
import { Phone } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { site } from "@/config/site";

/** Joins class names, skipping falsy values. */
export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("mx-auto w-full max-w-[76rem] px-5 sm:px-8", className)}>{children}</div>;
}

type Tone = "white" | "paper" | "navy";

const toneClass: Record<Tone, string> = {
  white: "bg-white",
  paper: "bg-paper",
  navy: "on-dark bg-navy",
};

/** A page band with consistent vertical rhythm. */
export function Section({
  children,
  tone = "white",
  className,
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cx(toneClass[tone], "py-16 sm:py-20 lg:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}

/** Section heading with optional supporting line. */
export function SectionHeading({
  id,
  title,
  lead,
  as: Tag = "h2",
  className,
}: {
  id?: string;
  title: ReactNode;
  lead?: ReactNode;
  as?: "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={cx("max-w-2xl", className)}>
      <Tag id={id} className="text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)]">
        {title}
      </Tag>
      {lead ? <p className="mt-4 text-lg leading-relaxed">{lead}</p> : null}
    </div>
  );
}

/** The accent bar that sits under every H1. */
export function AccentRule({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cx("block h-1.5 w-20 rounded-full bg-accent", className)} />;
}

/* -------------------------------------------------------------------------- */
/* Buttons: one accent-fill pill site-wide, plus a quiet outline partner.      */
/* -------------------------------------------------------------------------- */

type ButtonVariant = "primary" | "outline-light" | "outline-dark";
type ButtonSize = "md" | "lg";

export function buttonClass(variant: ButtonVariant = "primary", size: ButtonSize = "md", className?: string) {
  return cx(
    "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold leading-none whitespace-nowrap",
    "transition-[background-color,border-color,color,transform,box-shadow] duration-200 active:translate-y-px",
    size === "lg" ? "min-h-14 px-7 text-[1.0625rem]" : "min-h-12 px-6 text-base",
    variant === "primary" &&
      "bg-accent text-navy-ink shadow-[0_10px_30px_-12px_rgb(58_191_239/0.85)] hover:bg-accent-bright",
    variant === "outline-light" && "border border-white/45 text-white hover:border-white hover:bg-white/10",
    variant === "outline-dark" && "border border-navy/30 text-navy hover:border-navy hover:bg-navy/5",
    className,
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

/** Internal routes use next/link; tel:, mailto: and external URLs use a plain anchor. */
export function ButtonLink({ href, variant, size, className, children, ...rest }: ButtonLinkProps) {
  const classes = buttonClass(variant, size, className);
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}

/** Click-to-call button for the main office line. */
export function CallButton({
  size,
  variant = "primary",
  label,
  className,
}: {
  size?: ButtonSize;
  variant?: ButtonVariant;
  label?: string;
  className?: string;
}) {
  return (
    <ButtonLink href={`tel:${site.phone.tel}`} variant={variant} size={size} className={className}>
      <Phone aria-hidden="true" className="size-[1.1em]" strokeWidth={2.25} />
      {label ?? `Call ${site.phone.display}`}
    </ButtonLink>
  );
}

/* -------------------------------------------------------------------------- */
/* Brand motif: the capsule from the logo mark ("the PIL").                    */
/* -------------------------------------------------------------------------- */

const CAPSULE_HALF =
  "M144 0A144 144 0 0 0 144 288A144 144 0 0 0 216 268.7C262 243 283 200 283 144C283 84 305 30 359 0Z";

/** Decorative two-part capsule drawn as inline SVG so it costs no request. */
export function CapsuleMotif({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 605 288" aria-hidden="true" focusable="false" className={className}>
      <path d={CAPSULE_HALF} fill="var(--color-accent)" />
      <path d={CAPSULE_HALF} fill="#fff" transform="rotate(180 302.5 144)" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Brand icons that lucide no longer ships.                                    */
/* -------------------------------------------------------------------------- */

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d="M13.5 21v-7.6h2.55l.4-3.1H13.5V8.35c0-.9.25-1.5 1.55-1.5h1.6V4.1c-.3-.04-1.25-.12-2.35-.12-2.35 0-3.95 1.42-3.95 4.05v2.27H7.75v3.1h2.6V21h3.15Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.6" />
      <circle cx="12" cy="12" r="3.9" />
      <circle cx="17.1" cy="6.9" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d="M12.04 2.5a9.42 9.42 0 0 0-8.1 14.26L2.5 21.5l4.87-1.4a9.44 9.44 0 1 0 4.67-17.6Zm0 1.7a7.74 7.74 0 1 1-4.1 14.3l-.3-.18-2.72.78.8-2.63-.2-.3a7.73 7.73 0 0 1 6.52-11.97Zm-3.3 3.86c-.18 0-.46.06-.7.33-.24.26-.92.9-.92 2.18 0 1.29.94 2.53 1.07 2.7.13.18 1.82 2.9 4.5 3.95 2.22.87 2.67.7 3.15.65.48-.04 1.56-.63 1.78-1.25.22-.61.22-1.14.15-1.25-.06-.11-.24-.17-.5-.3-.26-.13-1.56-.77-1.8-.86-.24-.09-.42-.13-.6.13-.17.26-.68.86-.83 1.03-.15.18-.3.2-.57.07-.26-.13-1.1-.4-2.1-1.3a7.86 7.86 0 0 1-1.45-1.8c-.15-.27-.02-.4.11-.54.12-.11.26-.3.4-.46.13-.15.17-.26.26-.43.09-.18.04-.33-.02-.46-.07-.13-.58-1.44-.82-1.97-.2-.45-.42-.47-.6-.48h-.51Z" />
    </svg>
  );
}
