/**
 * Reoptimiza las imagenes que realmente usa el sitio.
 * El pipeline original dejaba algunos archivos por encima de 250 KB,
 * que es demasiado para una imagen de contenido en una pagina movil.
 *
 * Uso: node scripts/reoptimize.mjs
 */
import { readdir, stat, rename } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const IMAGES = "public/images";
const MAX_WIDTH = 1800;
const MAX_EDGE = 1400; // px del lado mas largo para avatares/verticales
const TARGET_KB = 220;

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

/** Comprime bajando calidad de forma iterativa hasta bajar del objetivo. */
async function compress(buffer, effort) {
  const maxEdge = effort === "tight" ? MAX_EDGE : MAX_WIDTH;
  let q = effort === "tight" ? 62 : 72;
  let best = null;

  for (let i = 0; i < 7; i++) {
    const out = await sharp(buffer)
      .rotate()
      .resize({
        width: maxEdge,
        height: maxEdge,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: q, effort: 5 })
      .toBuffer();
    best = out;
    if (out.length / 1024 <= TARGET_KB) return { buf: out, q };
    q -= 7;
    if (q < 34) break;
  }
  return { buf: best, q };
}

const files = (await walk(IMAGES)).filter((f) => /\.(webp|png|jpe?g)$/i.test(f));
const changed = [];
const skipped = [];

for (const file of files) {
  const before = (await stat(file)).size / 1024;
  if (before <= TARGET_KB) {
    skipped.push([file, before, null]);
    continue;
  }
  if (/brand|icon|favicon/i.test(file)) {
    // logos e iconos: no tocar, se referencian por path y el formato importa
    skipped.push([file, before, "marca"]);
    continue;
  }

  const buf = await sharp(file).toBuffer();
  const meta = await sharp(buf).metadata();
  const tall = Math.max(meta.width, meta.height) > 2200;
  const { buf: out, q } = await compress(buf, tall ? "tight" : "normal");

  const tmp = `${file}.tmp`;
  await rename(file, tmp);
  await sharp(out).toFile(file);
  await rename(tmp, `${file}.orig`);

  const after = out.length / 1024;
  changed.push([file, before, after, q]);
}

console.log("\n=== RECOMPRIMIDAS ===");
for (const [f, b, a, q] of changed.sort((x, y) => y[1] - x[1])) {
  console.log(
    `  ${f.replace(/\\/g, "/").padEnd(46)} ${b.toFixed(0).padStart(5)} KB -> ${a.toFixed(0).padStart(4)} KB  (q${q})`,
  );
}
console.log("\n=== SIN CAMBIOS ===");
for (const [f, b, why] of skipped.sort((x, y) => y[1] - x[1]).slice(0, 8)) {
  console.log(`  ${f.replace(/\\/g, "/").padEnd(46)} ${b.toFixed(0).padStart(5)} KB ${why ?? ""}`);
}
console.log(`\n${changed.length} archivos recomprimidos, ${skipped.length} sin cambios.`);
console.log("Los .orig quedaron al lado por si se quieren comparar.\n");
