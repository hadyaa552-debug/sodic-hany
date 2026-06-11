// Renders every page of the Ogami PDFs (Sales Kit + Factsheet) to PNGs at
// 2x DPI using pdfjs-dist + @napi-rs/canvas (auto-wired by pdfjs in Node).
// Saves results into public/sections/ogami/raw/.
// Install deps locally only (not needed for production / Vercel):
//   npm i -D pdfjs-dist @napi-rs/canvas
// Run with `npm run extract:ogami` once, then keep / rename useful pages.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import os from 'node:os';

const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const downloads = join(os.homedir(), 'Downloads');

const PDFS = [
  { label: 'sales-kit', path: join(downloads, 'Ogami Botanica Town Sales Kit.pdf') },
  { label: 'factsheet', path: join(downloads, 'Ogami - Factsheet.pdf') },
];

const OUTPUT_DIR = join(projectRoot, 'public', 'sections', 'ogami', 'raw');
const SCALE = 2.0;

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

async function renderPdf({ label, path }) {
  if (!existsSync(path)) {
    console.warn(`[skip] ${label}: missing file at ${path}`);
    return;
  }
  const data = new Uint8Array(await readFile(path));
  const loadingTask = pdfjs.getDocument({
    data,
    isEvalSupported: false,
    disableFontFace: true,
    useSystemFonts: false,
  });
  const doc = await loadingTask.promise;
  console.log(`[${label}] ${doc.numPages} pages`);

  for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: SCALE });
    const factory = doc.canvasFactory;
    const canvasAndContext = factory.create(viewport.width, viewport.height);
    await page.render({
      canvasContext: canvasAndContext.context,
      viewport,
      canvas: canvasAndContext.canvas,
    }).promise;
    const buffer = canvasAndContext.canvas.toBuffer('image/png');
    const fileName = `${label}-page-${String(pageNum).padStart(2, '0')}.png`;
    const outPath = join(OUTPUT_DIR, fileName);
    await writeFile(outPath, buffer);
    process.stdout.write(`  → ${fileName} (${(buffer.length / 1024).toFixed(0)} KB)\n`);
    factory.destroy(canvasAndContext);
    page.cleanup();
  }
  await doc.cleanup();
  await doc.destroy();
}

async function main() {
  await ensureDir(OUTPUT_DIR);
  for (const pdf of PDFS) {
    await renderPdf(pdf);
  }
  console.log(`\nDone. Pages saved to ${OUTPUT_DIR}`);
  console.log('Next: pick the useful pages and rename them into public/sections/ogami/.');
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
