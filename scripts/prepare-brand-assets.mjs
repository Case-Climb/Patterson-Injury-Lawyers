// Builds web-ready brand assets from the client's logo package.
//
//   node scripts/prepare-brand-assets.mjs "<path to 'RGB (for digital items)/Hi Res'>"
//
// Outputs logos to public/images/brand, the social share image to public/og,
// and the favicon / app icons to src/app.
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const src = process.argv[2];
if (!src) {
  console.error("Pass the path to the Hi Res logo folder.");
  process.exit(1);
}

const root = path.resolve(import.meta.dirname, "..");
const brandDir = path.join(root, "public/images/brand");
const ogDir = path.join(root, "public/og");
const appDir = path.join(root, "src/app");
await fs.mkdir(brandDir, { recursive: true });
await fs.mkdir(ogDir, { recursive: true });

const NAVY = "#2B2C6C";
const NAVY_DEEP = "#1B1C4B";

const trimmed = (name) => sharp(path.join(src, `${name}.png`)).trim().toBuffer();

async function logo(name, out, height) {
  const buf = await trimmed(name);
  const info = await sharp(buf)
    .resize({ height })
    .png({ compressionLevel: 9, palette: true })
    .toFile(path.join(brandDir, out));
  console.log(out, `${info.width}x${info.height}`);
}

// Header lockup pieces (shown at ~40px tall, exported at 3x).
await logo("Icon Sky _ Wht", "pil-icon-on-navy.png", 132);
await logo("Wordmark All Wht", "pil-wordmark-white.png", 132);
// Footer lockup.
await logo("Vertical Wht _ Sky", "pil-logo-vertical-on-navy.png", 420);
// Light-background versions (schema logo, print-style contexts).
await logo("Icon Navy _ Sky", "pil-icon-color.png", 132);
await logo("Horizontal Navy _ Sky", "pil-logo-horizontal-color.png", 600);

// Schema.org logo: opaque white background.
{
  const mark = await sharp(await trimmed("Horizontal Navy _ Sky"))
    .resize({ width: 960 })
    .toBuffer();
  const { height } = await sharp(mark).metadata();
  await sharp({
    create: { width: 1200, height: height + 240, channels: 4, background: "#FFFFFF" },
  })
    .composite([{ input: mark, gravity: "center" }])
    .png({ compressionLevel: 9, palette: true })
    .toFile(path.join(brandDir, "patterson-injury-lawyers-logo.png"));
}

// Open Graph / Twitter share image, 1200x630.
{
  const mark = await sharp(await trimmed("Horizontal Wht _ Sky"))
    .resize({ height: 330 })
    .toBuffer();
  const bg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${NAVY}"/>
          <stop offset="1" stop-color="${NAVY_DEEP}"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#g)"/>
      <rect x="0" y="618" width="1200" height="12" fill="#3ABFEF"/>
    </svg>`
  );
  await sharp(bg)
    .composite([{ input: mark, gravity: "center" }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(ogDir, "patterson-injury-lawyers.jpg"));
  console.log("og image written");
}

// Favicon + app icons: the capsule from the logo mark (without the two bars)
// on a navy tile, so it stays legible at 16-32px.
{
  const icon = await trimmed("Icon Sky _ Wht");
  const { data, info } = await sharp(icon).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const colHasInk = (x) => {
    for (let y = 0; y < info.height; y += 8) {
      if (data[(y * info.width + x) * 4 + 3] > 24) return true;
    }
    return false;
  };
  // Walk in from each side: skip the bar, skip the gap, land on the capsule.
  let left = 0;
  while (colHasInk(left)) left++;
  while (!colHasInk(left)) left++;
  let right = info.width - 1;
  while (colHasInk(right)) right--;
  while (!colHasInk(right)) right--;
  const capsule = await sharp(icon)
    .extract({ left, top: 0, width: right - left + 1, height: info.height })
    .trim()
    .toBuffer();

  const tile = async (size, radius) => {
    const inner = await sharp(capsule)
      .resize({ width: Math.round(size * 0.78), height: Math.round(size * 0.78), fit: "inside" })
      .toBuffer();
    const bg = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
        <rect width="${size}" height="${size}" rx="${radius}" fill="${NAVY}"/>
      </svg>`
    );
    return sharp(bg).composite([{ input: inner, gravity: "center" }]).png().toBuffer();
  };

  await fs.writeFile(path.join(appDir, "icon.png"), await tile(512, 96));
  await fs.writeFile(path.join(appDir, "apple-icon.png"), await tile(180, 0));

  // favicon.ico with embedded PNGs (16, 32, 48).
  const sizes = [16, 32, 48];
  const pngs = await Promise.all(sizes.map((s) => tile(s, Math.round(s * 0.19))));
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);
  let offset = 6 + 16 * sizes.length;
  const entries = pngs.map((png, i) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(sizes[i], 0);
    e.writeUInt8(sizes[i], 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(png.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += png.length;
    return e;
  });
  await fs.writeFile(path.join(appDir, "favicon.ico"), Buffer.concat([header, ...entries, ...pngs]));
  console.log("favicon + app icons written");
}
