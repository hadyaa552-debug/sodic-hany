// Renders Eastvale PDF pages to PNG (pdfjs-dist + canvas). Dev-only.
// npm i -D pdfjs-dist @napi-rs/canvas && npm run extract:eastvale
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const PDF_DIR = join(projectRoot, 'scripts', 'eastvale-pdfs');

const PDFS = [
  { label: 'fact-sheet-2026', file: 'fact-sheet-2026.pdf', maxPages: 24 },
  { label: 'apartments', file: 'apartments.pdf', maxPages: 20 },
  { label: 'villas', file: 'villas.pdf', maxPages: 20 },
];

const OUTPUT_DIR = join(projectRoot, 'public', 'sections', 'eastvale', 'raw');
const SCALE = 1.5;

async function ensureDir(dir) {
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
}

async function renderPdf({ label, file, maxPages }) {
  const path = join(PDF_DIR, file);
  if (!existsSync(path)) {
    console.warn(`[skip] ${label}: missing ${path}`);
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
  const n = Math.min(doc.numPages, maxPages);
  console.log(`[${label}] rendering ${n}/${doc.numPages} pages`);

  for (let pageNum = 1; pageNum <= n; pageNum++) {
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
    await writeFile(join(OUTPUT_DIR, fileName), buffer);
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
  console.log(`\nDone. Raw PNGs in ${OUTPUT_DIR}`);
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
