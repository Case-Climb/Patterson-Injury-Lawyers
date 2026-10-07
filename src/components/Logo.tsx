import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { cx } from "@/components/ui";

/** Header lockup for navy backgrounds: the capsule mark beside the wordmark. */
export function HeaderLogo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${site.name} home`} className={cx("flex shrink-0 items-center gap-3", className)}>
      <Image
        src="/images/brand/pil-icon-on-navy.png"
        alt=""
        width={325}
        height={132}
        loading="eager"
        sizes="96px"
        className="h-8 w-auto sm:h-9"
      />
      <Image
        src="/images/brand/pil-wordmark-white.png"
        alt={site.name}
        width={568}
        height={132}
        loading="eager"
        sizes="160px"
        className="h-7 w-auto sm:h-8"
      />
    </Link>
  );
}

/** Stacked lockup for the footer. */
export function FooterLogo() {
  return (
    <Link href="/" aria-label={`${site.name} home`} className="inline-block">
      <Image
        src="/images/brand/pil-logo-vertical-on-navy.png"
        alt={`${site.name} logo`}
        width={700}
        height={420}
        loading="lazy"
        sizes="200px"
        className="h-auto w-44"
      />
    </Link>
  );
}
