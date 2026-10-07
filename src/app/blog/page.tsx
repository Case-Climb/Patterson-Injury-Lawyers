import Link from "next/link";
import { BLOG_CATEGORIES, formatPostDate, posts } from "@/content/posts";
import { pageMetadata } from "@/lib/seo";
import { BlogIndex, type PostSummary } from "@/components/BlogIndex";
import { CtaBand } from "@/components/blocks";
import { PageHero } from "@/components/Hero";
import { Reveal } from "@/components/Motion";
import { Section } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Pennsylvania Personal Injury Legal Tips",
  description:
    "Plain-English Pennsylvania personal injury legal tips on car accidents, slip and falls, deadlines and more. Have a question? Call for a free consultation.",
  path: "/blog",
});

export default function BlogPage() {
  const summaries: PostSummary[] = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.excerpt,
    category: post.category,
    date: post.date,
    dateLabel: formatPostDate(post.date),
    readMinutes: post.readMinutes,
  }));

  return (
    <>
      <PageHero
        title="Pennsylvania Personal Injury Legal Tips"
        lead="Short, practical articles on what to do after an injury and how claims work in Pennsylvania."
        crumbs={[{ name: "Blog", path: "/blog" }]}
        cta={false}
      />

      <Section tone="paper">
        <Reveal>
          <BlogIndex posts={summaries} categories={[...BLOG_CATEGORIES]} />
        </Reveal>
        <Reveal className="mt-12">
          <p className="max-w-3xl">
            Looking for a quick answer? Try our{" "}
            <Link href="/faq" className="prose-link">
              frequently asked questions
            </Link>{" "}
            or browse our{" "}
            <Link href="/practice-areas" className="prose-link">
              practice areas
            </Link>
            . These articles are general information, not legal advice.
          </p>
        </Reveal>
      </Section>

      <CtaBand title="Have a question about your situation?" />
    </>
  );
}
