// Generates optimized WebP siblings for every JPG/PNG under /public.
// Hero images also get responsive widths (…-640.webp, …-1024.webp, …-1600.webp).
import { readdir, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = new URL('../public/', import.meta.url).pathname;
const RASTER = new Set(['.jpg', '.jpeg', '.png']);
const QUALITY = 72;
const MAX_WIDTH = 1600;

// Paths (relative to /public) that are above-the-fold heroes — emit responsive sizes.
const HERO_HINTS = ['/hero', 'apartments-page-01', 'hero-birdseye'];
const RESPONSIVE_WIDTHS = [640, 1024, 1600];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function isHero(relPath) {
  return HERO_HINTS.some((h) => relPath.includes(h));
}

let converted = 0;
let savedBytes = 0;

for await (const file of walk(PUBLIC_DIR)) {
  const ext = extname(file).toLowerCase();
  if (!RASTER.has(ext)) continue;

  const rel = file.slice(PUBLIC_DIR.length - 1); // leading slash
  const base = file.slice(0, -ext.length);
  const original = (await stat(file)).size;

  try {
    const meta = await sharp(file).metadata();

    const width = Math.min(meta.width ?? MAX_WIDTH, MAX_WIDTH);
    await sharp(file)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(`${base}.webp`);

    const after = (await stat(`${base}.webp`)).size;
    savedBytes += original - after;
    converted += 1;

    if (isHero(rel)) {
      for (const w of RESPONSIVE_WIDTHS) {
        if ((meta.width ?? 0) < w && w !== RESPONSIVE_WIDTHS[0]) continue;
        await sharp(file)
          .resize({ width: w, withoutEnlargement: true })
          .webp({ quality: QUALITY })
          .toFile(`${base}-${w}.webp`);
      }
    }
  } catch (err) {
    console.warn(`Skipped ${rel}: ${err.message}`);
  }
}

console.log(`Converted ${converted} images. Saved ~${(savedBytes / 1024 / 1024).toFixed(1)} MB.`);
