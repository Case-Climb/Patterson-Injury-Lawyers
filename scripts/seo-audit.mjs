// Crawls every URL in sitemap.xml on a running server and checks on-page SEO.
//   npm run dev   (or: npm run build && npm run start)
//   node scripts/seo-audit.mjs http://localhost:3000
const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const SITE = "https://www.pattersoninjury.com";

const get = async (path) => {
  const res = await fetch(base + path, { redirect: "manual" });
  return { status: res.status, html: res.status === 200 ? await res.text() : "" };
};
const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const meta = (html, attr, name) => {
  const m = html.match(new RegExp(`<meta[^>]*${attr}="${name}"[^>]*content="([^"]*)"`, "i")) ??
    html.match(new RegExp(`<meta[^>]*content="([^"]*)"[^>]*${attr}="${name}"`, "i"));
  return m ? decode(m[1]) : null;
};

const sitemap = (await get("/sitemap.xml")).html;
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, "") || "/");
const rows = [];
const problems = [];
const allLinks = new Set();
const seen = { title: new Map(), desc: new Map(), h1: new Map() };

for (const path of paths) {
  const { status, html } = await get(path);
  const flag = (msg) => problems.push(`${path}: ${msg}`);
  if (status !== 200) { flag(`status ${status}`); continue; }

  const title = decode(html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? "");
  const desc = meta(html, "name", "description") ?? "";
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i)?.[1] ?? "";
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => decode(m[1].replace(/<[^>]+>/g, "")).trim());
  const types = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => {
    try { const t = JSON.parse(m[1])["@type"]; return Array.isArray(t) ? t.join("+") : t; } catch { return "INVALID"; }
  });
  const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? "";
  const internal = new Set([...main.matchAll(/href="(\/[^"#]*)/g)].map((m) => m[1]).filter((h) => h !== path && !h.startsWith("/_next")));
  [...html.matchAll(/href="(\/[^"#]*)/g)].forEach((m) => !m[1].startsWith("/_next") && allLinks.add(m[1]));
  const imgsNoAlt = [...html.matchAll(/<img\b[^>]*>/g)].filter((m) => !/\balt=/.test(m[0])).length;

  if (!title) flag("missing title");
  if (desc.length < 150 || desc.length > 160) flag(`description is ${desc.length} chars`);
  if (canonical !== (path === "/" ? SITE : SITE + path)) flag(`canonical is "${canonical}"`);
  if (h1s.length !== 1) flag(`${h1s.length} h1 elements`);
  for (const p of ["og:title", "og:description", "og:url", "og:image", "og:type", "og:site_name"]) if (!meta(html, "property", p)) flag(`missing ${p}`);
  for (const n of ["twitter:card", "twitter:title", "twitter:description", "twitter:image"]) if (!meta(html, "name", n)) flag(`missing ${n}`);
  if (path !== "/" && !types.includes("BreadcrumbList")) flag("missing BreadcrumbList schema");
  if (types.includes("INVALID")) flag("invalid JSON-LD");
  if (internal.size < 3) flag(`only ${internal.size} internal links in <main>`);
  if (imgsNoAlt) flag(`${imgsNoAlt} images without alt`);
  if (!html.includes("G-XXXXXXXXXX") && !/gtag\/js\?id=G-/.test(html)) flag("GA4 tag missing");
  for (const [key, value] of [["title", title], ["desc", desc], ["h1", h1s[0]]]) {
    if (seen[key].has(value)) flag(`duplicate ${key} (same as ${seen[key].get(value)})`);
    seen[key].set(value, path);
  }
  rows.push({ path, titleLen: title.length, descLen: desc.length, h1: h1s[0], schema: types.join(", "), links: internal.size });
}

for (const link of allLinks) {
  const { status } = await get(link);
  if (status !== 200) problems.push(`broken internal link ${link} (status ${status})`);
}

console.table(rows);
console.log(`\nChecked ${rows.length} pages and ${allLinks.size} unique internal links.`);
console.log(problems.length ? `\n${problems.length} problem(s):\n- ${problems.join("\n- ")}` : "\nNo problems found.");
process.exit(problems.length ? 1 : 0);
