// Converts source photos into web-ready JPEGs in public/images/site and
// rebuilds the social share image from the skyline photo plus the logo.
//
//   node scripts/prepare-photos.mjs "<folder of .png/.jpg source photos>"
//
// File names are kept (my-photo.png becomes public/images/site/my-photo.jpg).
// A file named "philadelphia-skyline" is exported wider because it is used
// full-bleed behind every hero. next/image then serves AVIF/WebP at the sizes
// each device needs, so these files only have to be good masters.
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const src = process.argv[2];
if (!src) {
  console.error("Pass the folder that holds the source photos.");
  process.exit(1);
}

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "public/images/site");
await fs.mkdir(outDir, { recursive: true });

const WIDE = new Set(["philadelphia-skyline"]);

for (const file of (await fs.readdir(src)).sort()) {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);
  if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext) || name.startsWith("prev-")) continue;
  const width = WIDE.has(name) ? 2400 : 1600;
  const info = await sharp(path.join(src, file))
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(outDir, `${name}.jpg`));
  console.log(`${name}.jpg  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
}

// Open Graph / Twitter share image: skyline, navy wash, logo.
const skyline = path.join(outDir, "philadelphia-skyline.jpg");
const logo = path.join(root, "public/images/brand/pil-logo-vertical-on-navy.png");
try {
  await fs.access(skyline);
  const wash = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
      <rect width="1200" height="630" fill="#1E1F52" fill-opacity="0.72"/>
      <rect x="0" y="618" width="1200" height="12" fill="#3ABFEF"/>
    </svg>`,
  );
  const mark = await sharp(logo).resize({ height: 300 }).toBuffer();
  await sharp(skyline)
    .resize({ width: 1200, height: 630, fit: "cover", position: "bottom" })
    .composite([{ input: wash }, { input: mark, gravity: "center" }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(root, "public/og/patterson-injury-lawyers.jpg"));
  console.log("og image rebuilt from the skyline photo");
} catch {
  console.log("No philadelphia-skyline.jpg found; share image left unchanged.");
}
