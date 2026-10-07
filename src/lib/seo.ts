import type { Metadata } from "next";
import { site } from "@/config/site";

/** Absolute URL for a site path. "/" maps to the bare domain. */
export function absoluteUrl(path = "/"): string {
  return path === "/" ? site.url : `${site.url}${path}`;
}

type PageMetaInput = {
  /** Primary keyword. Rendered as "[Keyword] | Patterson Injury Lawyers". */
  title: string;
  /** 150 to 160 characters, includes the keyword and a call to action. */
  description: string;
  /** Site path, starting with "/". */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
};

/** Title, description, canonical, Open Graph and Twitter tags for one page. */
export function pageMetadata({ title, description, path, type = "website", publishedTime }: PageMetaInput): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  const url = absoluteUrl(path);
  const image = {
    url: absoluteUrl(site.images.og),
    width: 1200,
    height: 630,
    alt: `${site.name} logo`,
  };

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [image],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}
