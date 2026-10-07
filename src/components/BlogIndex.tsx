"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { cx } from "@/components/ui";

export type PostSummary = {
  slug: string;
  title: string;
  description: string;
  category: string;
  dateLabel: string;
  date: string;
  readMinutes: number;
};

/** Where to send readers when a category has no posts yet. */
const categoryFallback: Record<string, { label: string; href: string }> = {
  "Car Accidents": { label: "car accident page", href: "/car-accidents" },
  "Premises Liability": { label: "slip and fall page", href: "/premises-liability-slip-and-fall" },
  "Workplace Injury": { label: "workplace injury page", href: "/workplace-injury" },
  General: { label: "FAQ page", href: "/faq" },
};

/** Blog list with category filter buttons. */
export function BlogIndex({ posts, categories }: { posts: PostSummary[]; categories: string[] }) {
  const [active, setActive] = useState<string>("All");
  const visible = active === "All" ? posts : posts.filter((post) => post.category === active);
  const fallback = categoryFallback[active];

  return (
    <div>
      <div role="group" aria-label="Filter posts by category" className="flex flex-wrap gap-2.5">
        {["All", ...categories].map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(category)}
              className={cx(
                "min-h-11 rounded-full border px-5 text-[0.95rem] font-semibold transition-colors",
                selected
                  ? "border-navy bg-navy text-white"
                  : "border-navy/20 bg-white text-navy hover:border-navy",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {visible.length} {visible.length === 1 ? "post" : "posts"} shown
      </p>

      {visible.length > 0 ? (
        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <li key={post.slug} className="h-full">
              <article className="group relative flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_24px_50px_-28px_rgb(30_31_82/0.55)]">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="rounded-full bg-navy px-3 py-1 font-semibold text-white">{post.category}</span>
                  <time dateTime={post.date}>{post.dateLabel}</time>
                </p>
                <h2 className="mt-5 text-2xl">
                  <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:rounded-3xl">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-[0.975rem] leading-relaxed">{post.description}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-accent-ink">
                  {post.readMinutes} minute read
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </p>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-10 rounded-3xl border border-line bg-white p-8 sm:p-10">
          <h2 className="text-2xl">No {active} posts yet</h2>
          <p className="mt-3 max-w-xl">
            We are adding new articles regularly.
            {fallback ? (
              <>
                {" "}
                In the meantime, our{" "}
                <Link href={fallback.href} className="prose-link">
                  {fallback.label}
                </Link>{" "}
                covers the essentials.
              </>
            ) : null}
          </p>
          <button
            type="button"
            onClick={() => setActive("All")}
            className="prose-link mt-5 inline-flex min-h-11 items-center"
          >
            Show all posts
          </button>
        </div>
      )}
    </div>
  );
}
