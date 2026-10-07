import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { practiceAreas } from "@/content/practice";
import { absoluteUrl } from "@/lib/seo";

/** Served at /sitemap.xml. Practice pages and blog posts are added automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  ) => ({ url: absoluteUrl(path), lastModified, changeFrequency, priority });

  return [
    page("/", 1, "weekly"),
    page("/attorney", 0.8),
    page("/practice-areas", 0.9),
    ...practiceAreas.map((area) => page(area.path, 0.9)),
    page("/philadelphia", 0.9),
    page("/montgomery-county", 0.8),
    page("/delaware-county", 0.8),
    page("/blog", 0.7, "weekly"),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    page("/faq", 0.7),
    page("/contact", 0.9),
    page("/disclaimer", 0.3, "yearly"),
    page("/privacy-policy", 0.3, "yearly"),
    page("/terms-and-conditions", 0.3, "yearly"),
  ];
}
