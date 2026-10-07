import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { formatPostDate, getPost, posts } from "@/content/posts";
import { articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { CtaBand, GeneralInfoNote } from "@/components/blocks";
import { PageHero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Motion";
import { Container } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter((item) => item.slug !== post.slug);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <PageHero
        title={post.title}
        crumbs={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
        cta={false}
      >
        <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem] text-white/80">
          <span className="rounded-full bg-accent px-3 py-1 font-semibold text-navy-ink">{post.category}</span>
          <span>
            Published <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          </span>
          <span>{post.readMinutes} minute read</span>
          <span>By {site.name}</span>
        </p>
      </PageHero>

      <article className="bg-white py-14 sm:py-20">
        <Container>
          <Reveal className="prose-pil mx-auto max-w-[42rem] text-[1.09rem] leading-[1.75]">{post.body}</Reveal>
          <Reveal className="mx-auto mt-12 max-w-[42rem]">
            <GeneralInfoNote />
          </Reveal>
        </Container>
      </article>

      <section aria-labelledby="more-posts-title" className="bg-paper py-14 sm:py-16">
        <Container>
          <Reveal>
            <h2 id="more-posts-title" className="text-2xl sm:text-3xl">
              Keep reading
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="group flex h-full items-center justify-between gap-6 rounded-3xl border border-line bg-white p-6 transition-colors hover:border-navy/40"
                  >
                    <span>
                      <span className="text-sm font-semibold text-accent-ink">{item.category}</span>
                      <span className="mt-1 block text-xl font-semibold leading-snug tracking-tight text-ink">{item.title}</span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-5 shrink-0 text-navy transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Facing this situation?"
        text={
          <>
            Get a free consultation. Call{" "}
            <a
              href={`tel:${site.phone.tel}`}
              className="font-semibold text-white underline decoration-accent decoration-2 underline-offset-4"
            >
              {site.phone.display}
            </a>
            , 24/7. There is no fee unless we recover for you.
          </>
        }
      />
    </>
  );
}
