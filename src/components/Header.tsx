"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { site } from "@/config/site";
import { mainNav, type NavItem } from "@/lib/routes";
import { HeaderLogo } from "@/components/Logo";
import { buttonClass, cx } from "@/components/ui";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** True once the page has scrolled past the top of the hero. */
function useScrolled() {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 12,
    () => false,
  );
}

function isCurrent(pathname: string, href?: string) {
  if (!href) return false;
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Sticky site header. Transparent over the navy hero, solid navy on scroll.
 * Keyed by pathname so open menus reset on navigation.
 */
export function Header() {
  const pathname = usePathname();
  return <HeaderInner key={pathname} pathname={pathname} />;
}

function HeaderInner({ pathname }: { pathname: string }) {
  const scrolled = useScrolled();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobilePanelId = useId();

  // Lock page scroll and listen for Escape while the mobile menu is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={cx(
        "on-dark fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
        solid ? "bg-navy shadow-[0_8px_30px_-12px_rgb(0_0_0/0.5)]" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[84rem] items-center justify-between gap-6 px-5 sm:px-8 xl:h-20">
        <HeaderLogo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  open={openMenu === item.label}
                  setOpen={(next) => setOpenMenu(next ? item.label : null)}
                  pathname={pathname}
                />
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                    className={desktopLinkClass(isCurrent(pathname, item.href))}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* No room beside the logo on phones, so the pill starts at the sm breakpoint. */}
          <div className="hidden sm:block">
            <a href={`tel:${site.phone.tel}`} className={buttonClass("primary", "md", "min-h-11 px-5 text-[0.95rem]")}>
              <Phone aria-hidden="true" className="size-4" strokeWidth={2.4} />
              <span className="sr-only">Call </span>
              {site.phone.display}
            </a>
          </div>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls={mobilePanelId}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center rounded-full text-white hover:bg-white/10 xl:hidden"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </div>
      </div>

      <MobilePanel id={mobilePanelId} open={mobileOpen} pathname={pathname} />
    </header>
  );
}

function desktopLinkClass(current: boolean) {
  return cx(
    "relative inline-flex h-10 items-center rounded-full px-3.5 text-[0.95rem] font-medium text-white/85 transition-colors hover:text-white",
    "after:absolute after:inset-x-3.5 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-accent after:transition-transform after:duration-200",
    current ? "text-white after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
  );
}

type DropdownItem = Extract<NavItem, { children: unknown[] }>;

/**
 * Disclosure-pattern dropdown: opens on hover or via its button, closes on
 * Escape, blur or mouse leave. Items are plain links so Tab order is natural.
 */
function DesktopDropdown({
  item,
  open,
  setOpen,
  pathname,
}: {
  item: DropdownItem;
  open: boolean;
  setOpen: (open: boolean) => void;
  pathname: string;
}) {
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const current = isCurrent(pathname, item.href) || item.children.some((child) => isCurrent(pathname, child.href));

  return (
    <li
      className="relative flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
    >
      {item.href ? (
        <>
          <Link
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            className={cx(desktopLinkClass(current), "pr-1.5 after:right-1.5")}
          >
            {item.label}
          </Link>
          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={`${item.label} submenu`}
            onClick={() => setOpen(!open)}
            className="inline-flex size-7 items-center justify-center rounded-full text-white/85 hover:bg-white/10 hover:text-white"
          >
            <ChevronDown
              aria-hidden="true"
              className={cx("size-4 transition-transform duration-200", open && "rotate-180")}
            />
          </button>
        </>
      ) : (
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(!open)}
          className={cx(desktopLinkClass(current), "gap-1.5")}
        >
          {item.label}
          <ChevronDown
            aria-hidden="true"
            className={cx("size-4 transition-transform duration-200", open && "rotate-180")}
          />
        </button>
      )}

      <div
        id={panelId}
        className={cx(
          "absolute left-0 top-full pt-3 transition-[opacity,transform,visibility] duration-200",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
        )}
      >
        <ul className="min-w-64 rounded-2xl bg-white p-2 shadow-[0_24px_60px_-20px_rgb(21_22_59/0.55)] ring-1 ring-navy/10 [--focus-ring:var(--color-navy)]">
          {item.href && item.allLabel ? (
            <li>
              <Link
                href={item.href}
                className="block rounded-xl px-4 py-2.5 text-[0.95rem] font-semibold text-navy hover:bg-paper"
              >
                {item.allLabel}
              </Link>
            </li>
          ) : null}
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                aria-current={pathname === child.href ? "page" : undefined}
                className={cx(
                  "block rounded-xl px-4 py-2.5 text-[0.95rem] text-ink hover:bg-paper",
                  pathname === child.href && "bg-paper font-semibold",
                )}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function MobilePanel({ id, open, pathname }: { id: string; open: boolean; pathname: string }) {
  return (
    <div
      id={id}
      hidden={!open}
      className="h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-navy xl:hidden"
    >
      <nav aria-label="Mobile" className="mx-auto max-w-2xl px-5 pb-28 pt-4 sm:px-8">
        <ul className="divide-y divide-white/10">
          {mainNav.map((item) => (
            <li key={item.label} className="py-1">
              {item.href ? (
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="flex min-h-12 items-center text-2xl font-semibold tracking-tight text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <p className="flex min-h-12 items-center text-2xl font-semibold tracking-tight text-white">{item.label}</p>
              )}
              {item.children ? (
                <ul className="grid grid-cols-1 gap-x-6 pb-3 min-[420px]:grid-cols-2">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        aria-current={pathname === child.href ? "page" : undefined}
                        className="flex min-h-11 items-center text-base text-white/80 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
        <a href={`tel:${site.phone.tel}`} className={buttonClass("primary", "lg", "mt-6 w-full")}>
          <Phone aria-hidden="true" className="size-5" strokeWidth={2.25} />
          Call {site.phone.display}
        </a>
      </nav>
    </div>
  );
}
